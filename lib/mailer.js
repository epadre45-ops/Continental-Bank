import nodemailer from 'nodemailer';

// SMTP Configuration - All values must be set in environment variables
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT || 465);
const SMTP_SECURE = process.env.SMTP_SECURE === 'true' || SMTP_PORT === 465; // SSL on port 465
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const FORM_RECEIVER_EMAIL = process.env.FORM_RECEIVER_EMAIL;

let transporter = null;

const createTransporter = () => {
  // Critical security check: All SMTP credentials must be set
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !FORM_RECEIVER_EMAIL) {
    console.error('[MAILER ERROR] SMTP credentials are missing in environment variables.');
    console.error('[MAILER ERROR] Required: SMTP_HOST, SMTP_USER, SMTP_PASS, FORM_RECEIVER_EMAIL');
    console.error('[MAILER ERROR] Current config:', {
      hasHost: !!SMTP_HOST,
      hasUser: !!SMTP_USER,
      hasPass: !!SMTP_PASS,
      hasReceiver: !!FORM_RECEIVER_EMAIL,
      port: SMTP_PORT,
      secure: SMTP_SECURE
    });
    throw new Error('SMTP configuration incomplete. Please check your .env.local file.');
  }

  console.log('[MAILER INFO] Creating transporter with config:', {
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    user: SMTP_USER,
    receiver: FORM_RECEIVER_EMAIL
  });

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
    // Additional options for Vercel compatibility
    tls: {
      rejectUnauthorized: false, // Allow self-signed certificates (use with caution)
      minVersion: 'TLSv1.2'
    },
    pool: false, // Disable pooling for serverless
    maxConnections: 1,
    connectionTimeout: 60000,
    greetingTimeout: 30000,
    socketTimeout: 45000
  });
};

export const sendFormEmail = async ({ subject, html, text, replyTo }) => {
  if (!FORM_RECEIVER_EMAIL) {
    console.error('[MAILER ERROR] Missing FORM_RECEIVER_EMAIL environment variable.');
    throw new Error('Missing FORM_RECEIVER_EMAIL environment variable.');
  }

  try {
    // Create transporter on each call for serverless compatibility
    const transporter = createTransporter();

    console.log('[MAILER INFO] Attempting to send email:', {
      from: `"EUROPA KREDIT BANK" <${SMTP_USER}>`,
      to: FORM_RECEIVER_EMAIL,
      replyTo: replyTo || SMTP_USER,
      subject
    });

    const info = await transporter.sendMail({
      from: `"EUROPA KREDIT BANK" <${SMTP_USER}>`,
      to: FORM_RECEIVER_EMAIL,
      replyTo: replyTo || SMTP_USER,
      subject,
      text,
      html,
    });

    console.log('[MAILER SUCCESS] Email sent successfully:', info.messageId);
    return info;
  } catch (error) {
    console.error('[MAILER ERROR] Failed to send email:', {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
      stack: error.stack
    });
    throw error;
  }
};

// Verify connection on startup (optional)
export const verifyEmailConfig = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log('[MAILER SUCCESS] SMTP connection verified successfully');
    return true;
  } catch (error) {
    console.error('[MAILER ERROR] SMTP connection verification failed:', error.message);
    return false;
  }
};
