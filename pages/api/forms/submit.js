import { sendFormEmail } from '../../../lib/mailer';
import { validateCSRFToken } from '../../../lib/csrf';
import { checkRateLimit, getRateLimitIdentifier } from '../../../lib/rateLimit';
import db from '../../../lib/database.js'; // <-- Ajout de la base de données

const escapeHtml = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const buildHtml = (formName, payload) => {
  const rows = Object.entries(payload)
    .map(
      ([key, value]) =>
        `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:600;">${escapeHtml(
          key
        )}</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(value)}</td></tr>`
    )
    .join('');

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.4;">
      <h2>New ${escapeHtml(formName)} submission</h2>
      <table style="border-collapse:collapse;width:100%;max-width:800px;">${rows}</table>
    </div>
  `;
};

const buildText = (formName, payload) => {
  const lines = Object.entries(payload).map(([key, value]) => `${key}: ${value}`);
  return [`New ${formName} submission`, '', ...lines].join('\n');
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { formName, payload, replyTo, csrfToken } = req.body || {};

    // CSRF Token Validation
    if (!csrfToken || !validateCSRFToken(csrfToken)) {
      return res.status(403).json({ message: 'Invalid CSRF token' });
    }

    // Rate Limiting
    const identifier = getRateLimitIdentifier(req);
    const rateLimitResult = checkRateLimit(identifier);
    
    if (!rateLimitResult.allowed) {
      const resetSeconds = Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000);
      return res.status(429).json({ 
        message: 'Too many requests. Please try again later.',
        resetIn: resetSeconds
      });
    }

    if (!formName || !payload || typeof payload !== 'object') {
      return res.status(400).json({ message: 'Invalid payload' });
    }

    // ==============
    // SAUVEGARDE DB MySQL
    // ==============
    try {
      const nameLower = formName.toLowerCase();
      let tableMap = 'feedbackSubmissions'; // Valeur par défaut
      
      // Détection automatique de la table selon le nom du formulaire
      if (nameLower.includes('prêt') || nameLower.includes('loan')) tableMap = 'loanApplications';
      else if (nameLower.includes('crédit') || nameLower.includes('credit')) tableMap = 'creditApplications';
      else if (nameLower.includes('contact')) tableMap = 'contacts';
      else if (nameLower.includes('transfert') || nameLower.includes('transfer')) tableMap = 'transferRequests';
      else if (nameLower.includes('entreprise') || nameLower.includes('business')) tableMap = 'businessBankingApplications';
      else if (nameLower.includes('carrière') || nameLower.includes('career')) tableMap = 'careerApplications';
      else if (nameLower.includes('newsletter')) tableMap = 'newsletterSubscriptions';
      
      const dbData = {
        email: payload.email || replyTo || 'anonyme@system',
        amount: payload.amount || payload.loanAmount || payload.creditAmount || payload.transferAmount || 0,
        name: payload.name || payload.firstName || payload.companyName || 'Non Renseigné',
        ...payload
      };

      if (tableMap === 'contacts') {
         await db.createContact({ email: dbData.email, message: payload.message || JSON.stringify(payload) });
      } else if (tableMap === 'newsletterSubscriptions') {
         await db.createNewsletterSubscription({ email: dbData.email });
      } else {
         await db.genericCreateApplication(tableMap, dbData);
      }
      console.log(`[DB] Saved ${formName} to table ${tableMap}`);
    } catch (dbError) {
      console.error('[DB] Failed to save form to MySQL:', dbError);
      // On ne bloque pas si la sauvegarde échoue pour continuer d'envoyer l'e-mail
    }

    // Envoi Email
    try {
      await sendFormEmail({
        subject: `Website Form - ${formName}`,
        html: buildHtml(formName, payload),
        text: buildText(formName, payload),
        replyTo,
      });
    } catch (e) {
      console.error('[EMAIL] Failed to send Form Email', e);
    }

    return res.status(200).json({ ok: true, rateLimitRemaining: rateLimitResult.remaining });
  } catch (error) {
    console.error('Form submit error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
