const fs = require('fs');
const path = require('path');

// Scanner tous les fichiers React et extraire les textes
function scanProject() {
  const texts = new Set();
  const componentsDir = path.join(__dirname, '../components');
  const pagesDir = path.join(__dirname, '../pages');

  // Scanner un répertoire récursivement
  function scanDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
        scanFile(filePath);
      }
    });
  }

  // Scanner un fichier pour extraire les textes
  function scanFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Extraire les textes des chaînes de caractères JSX
      const jsxTextRegex = />([^<{]+)</g;
      let match;
      
      while ((match = jsxTextRegex.exec(content)) !== null) {
        const text = match[1].trim();
        if (text && text.length > 1 && 
            !text.match(/^\s*$/) && 
            !text.match(/^\{.*\}$/) &&
            !text.match(/^[{}]+$/)) {
          texts.add(text);
        }
      }

      // Extraire les placeholders
      const placeholderRegex = /placeholder="([^"]+)"/g;
      while ((match = placeholderRegex.exec(content)) !== null) {
        const text = match[1].trim();
        if (text && text.length > 1) {
          texts.add(text);
        }
      }

      // Extraire les alt d'images
      const altRegex = /alt="([^"]+)"/g;
      while ((match = altRegex.exec(content)) !== null) {
        const text = match[1].trim();
        if (text && text.length > 1) {
          texts.add(text);
        }
      }

      // Extraire les titles
      const titleRegex = /title="([^"]+)"/g;
      while ((match = titleRegex.exec(content)) !== null) {
        const text = match[1].trim();
        if (text && text.length > 1) {
          texts.add(text);
        }
      }

    } catch (error) {
      console.error(`Error scanning file ${filePath}:`, error.message);
    }
  }

  // Scanner les répertoires
  if (fs.existsSync(componentsDir)) {
    scanDirectory(componentsDir);
  }
  if (fs.existsSync(pagesDir)) {
    scanDirectory(pagesDir);
  }

  return Array.from(texts);
}

// Générer une clé de traduction
function generateKey(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, '_')
    .substring(0, 50)
    .replace(/_+$/, '');
}

// Traduire automatiquement (simulation - dans un vrai projet, utiliser une API de traduction)
function translateText(text, targetLang) {
  // Traductions manuelles pour les langues principales
  const translations = {
    'de': {
      'Bienvenue': 'Willkommen',
      'Accueil': 'Startseite',
      'Contact': 'Kontakt',
      'Services': 'Dienstleistungen',
      'À propos': 'Über uns',
      'Connexion': 'Anmeldung',
      'Inscription': 'Registrierung',
      'Rechercher': 'Suchen',
      'Menu': 'Menü',
      'Fermer': 'Schließen',
      'Ouvrir': 'Öffnen',
      'Envoyer': 'Senden',
      'Annuler': 'Abbrechen',
      'Valider': 'Bestätigen',
      'Continental Bank': 'Continental Bank',
      'Banque': 'Bank',
      'Crédit': 'Kredit',
      'Prêt': 'Darlehen',
      'Financement': 'Finanzierung',
      'Solutions': 'Lösungen',
      'Expertise': 'Expertise',
      'Relations': 'Beziehungen',
      'Espace Client': 'Kundenbereich',
      'Presse': 'Presse',
      'Carrières': 'Karrieren',
      'FAQ': 'FAQ',
      'Notre Institution': 'Unsere Institution',
      'Gouvernance': 'Governance',
      'Stratégie': 'Strategie',
      'Agréments Réglementaires': 'Regulatorische Genehmigungen',
      'Chiffres Clés': 'Kennzahlen',
      'Banque d\'Entreprises': 'Unternehmensbank',
      'Gestion Patrimoine': 'Vermögensverwaltung',
      'Marchés Financiers': 'Finanzmärkte',
      'Produits de Crédit': 'Kreditprodukte',
      'Simulateur de Prêt': 'Darlehensrechner',
      'Recherche & Analyse': 'Forschung & Analyse',
      'Tableau de Bord': 'Dashboard',
      'Centre Conformité': 'Compliance Center',
      'Sécurité': 'Sicherheit',
      'Documents Légaux': 'Rechtliche Dokumente',
      'Paris': 'Paris',
      'Téléphone': 'Telefon',
      'Email': 'E-Mail',
      'Adresse': 'Adresse',
      'Newsletter': 'Newsletter',
      'Suivez-nous': 'Folgen Sie uns',
      'Mentions Légales': 'Impressum',
      'Conditions Générales': 'Allgemeine Geschäftsbedingungen',
      'Politique Confidentialité': 'Datenschutzerklärung',
      'Cookies': 'Cookies',
      'Droits Réservés': 'Alle Rechte vorbehalten'
    },
    'en': {
      'Bienvenue': 'Welcome',
      'Accueil': 'Home',
      'Contact': 'Contact',
      'Services': 'Services',
      'À propos': 'About',
      'Connexion': 'Login',
      'Inscription': 'Register',
      'Rechercher': 'Search',
      'Menu': 'Menu',
      'Fermer': 'Close',
      'Ouvrir': 'Open',
      'Envoyer': 'Send',
      'Annuler': 'Cancel',
      'Valider': 'Validate',
      'Continental Bank': 'Continental Bank',
      'Banque': 'Bank',
      'Crédit': 'Credit',
      'Prêt': 'Loan',
      'Financement': 'Financing',
      'Solutions': 'Solutions',
      'Expertise': 'Expertise',
      'Relations': 'Relations',
      'Espace Client': 'Client Area',
      'Presse': 'Press',
      'Carrières': 'Careers',
      'FAQ': 'FAQ',
      'Notre Institution': 'Our Institution',
      'Gouvernance': 'Governance',
      'Stratégie': 'Strategy',
      'Agréments Réglementaires': 'Regulatory Approvals',
      'Chiffres Clés': 'Key Figures',
      'Banque d\'Entreprises': 'Corporate Banking',
      'Gestion Patrimoine': 'Wealth Management',
      'Marchés Financiers': 'Financial Markets',
      'Produits de Crédit': 'Credit Products',
      'Simulateur de Prêt': 'Loan Calculator',
      'Recherche & Analyse': 'Research & Analysis',
      'Tableau de Bord': 'Dashboard',
      'Centre Conformité': 'Compliance Center',
      'Sécurité': 'Security',
      'Documents Légaux': 'Legal Documents',
      'Paris': 'Paris',
      'Téléphone': 'Phone',
      'Email': 'Email',
      'Adresse': 'Address',
      'Newsletter': 'Newsletter',
      'Suivez-nous': 'Follow us',
      'Mentions Légales': 'Legal Notice',
      'Conditions Générales': 'Terms & Conditions',
      'Politique Confidentialité': 'Privacy Policy',
      'Cookies': 'Cookies',
      'Droits Réservés': 'All Rights Reserved'
    },
    'nl': {
      'Bienvenue': 'Welkom',
      'Accueil': 'Home',
      'Contact': 'Contact',
      'Services': 'Diensten',
      'À propos': 'Over ons',
      'Connexion': 'Inloggen',
      'Inscription': 'Registreren',
      'Rechercher': 'Zoeken',
      'Menu': 'Menu',
      'Fermer': 'Sluiten',
      'Ouvrir': 'Openen',
      'Envoyer': 'Verzenden',
      'Annuler': 'Annuleren',
      'Valider': 'Valideren',
      'Continental Bank': 'Continental Bank',
      'Banque': 'Bank',
      'Crédit': 'Krediet',
      'Prêt': 'Lening',
      'Financement': 'Financiering',
      'Solutions': 'Oplossingen',
      'Expertise': 'Expertise',
      'Relations': 'Relaties',
      'Espace Client': 'Klantenzone',
      'Presse': 'Pers',
      'Carrières': 'Carrières',
      'FAQ': 'FAQ',
      'Notre Institution': 'Onze Instelling',
      'Gouvernance': 'Governance',
      'Stratégie': 'Strategie',
      'Agréments Réglementaires': 'Reglementaire Goedkeuringen',
      'Chiffres Clés': 'Kerncijfers',
      'Banque d\'Entreprises': 'Zakenbank',
      'Gestion Patrimoine': 'Vermogensbeheer',
      'Marchés Financiers': 'Financiële Markten',
      'Produits de Crédit': 'Kredietproducten',
      'Simulateur de Prêt': 'Lening Calculator',
      'Recherche & Analyse': 'Onderzoek & Analyse',
      'Tableau de Bord': 'Dashboard',
      'Centre Conformité': 'Compliance Center',
      'Sécuriteit': 'Veiligheid',
      'Documents Légaux': 'Juridische Documenten',
      'Paris': 'Parijs',
      'Téléphone': 'Telefoon',
      'Email': 'Email',
      'Adresse': 'Adres',
      'Newsletter': 'Nieuwsbrief',
      'Suivez-nous': 'Volg ons',
      'Mentions Légales': 'Juridische Kennisgeving',
      'Conditions Générales': 'Algemene Voorwaarden',
      'Politique Confidentialité': 'Privacybeleid',
      'Cookies': 'Cookies',
      'Droits Réservés': 'Alle Rechten Voorbehouden'
    },
    'bg': {
      'Bienvenue': 'Добре дошли',
      'Accueil': 'Начало',
      'Contact': 'Контакт',
      'Services': 'Услуги',
      'À propos': 'За нас',
      'Connexion': 'Вход',
      'Inscription': 'Регистрация',
      'Rechercher': 'Търсене',
      'Menu': 'Меню',
      'Fermer': 'Затвори',
      'Ouvrir': 'Отвори',
      'Envoyer': 'Изпрати',
      'Annuler': 'Отмени',
      'Valider': 'Потвърди',
      'Continental Bank': 'Continental Bank',
      'Banque': 'Банка',
      'Crédit': 'Кредит',
      'Prêt': 'Заем',
      'Financement': 'Финансиране',
      'Solutions': 'Решения',
      'Expertise': 'Експертиза',
      'Relations': 'Отношения',
      'Espace Client': 'Клиентска зона',
      'Presse': 'Преса',
      'Carrières': 'Кариери',
      'FAQ': 'ЧЗВ',
      'Notre Institution': 'Нашата институция',
      'Gouvernance': 'Управление',
      'Stratégie': 'Стратегия',
      'Agréments Réglementaires': 'Регулаторни одобрения',
      'Chiffres Clés': 'Ключови показатели',
      'Banque d\'Entreprises': 'Корпоративна банкова',
      'Gestion Patrimoine': 'Управление на активи',
      'Marchés Financiers': 'Финансови пазари',
      'Produits de Crédit': 'Кредитни продукти',
      'Simulateur de Prêt': 'Кредитен калкулатор',
      'Recherche & Analyse': 'Проучване и анализ',
      'Tableau de Bord': 'Табло за управление',
      'Centre Conformité': 'Център за съответствие',
      'Sécurité': 'Сигурност',
      'Documents Légaux': 'Правни документи',
      'Paris': 'Париж',
      'Téléphone': 'Телефон',
      'Email': 'Имейл',
      'Adresse': 'Адрес',
      'Newsletter': 'Бюлетин',
      'Suivez-nous': 'Последвайте ни',
      'Mentions Légales': 'Правна информация',
      'Conditions Générales': 'Общи условия',
      'Politique Confidentialité': 'Политика за поверителност',
      'Cookies': 'Бисквитки',
      'Droits Réservés': 'Всички права запазени'
    }
  };

  return translations[targetLang]?.[text] || text;
}

// Générer les fichiers de traduction
function generateTranslations() {
  console.log('🔍 Scan du projet pour extraire les textes...');
  
  const texts = scanProject();
  console.log(`✅ ${texts.length} textes trouvés`);

  // Créer le répertoire des locales s'il n'existe pas
  const localesDir = path.join(__dirname, '../locales');
  if (!fs.existsSync(localesDir)) {
    fs.mkdirSync(localesDir, { recursive: true });
  }

  // Générer le fichier français (textes originaux)
  const frTranslations = {};
  texts.forEach(text => {
    const key = generateKey(text);
    frTranslations[key] = text;
  });

  fs.writeFileSync(
    path.join(localesDir, 'fr.json'),
    JSON.stringify(frTranslations, null, 2),
    'utf8'
  );
  console.log('✅ Fichier fr.json généré');

  // Générer les autres fichiers de traduction
  const languages = ['de', 'en', 'nl', 'bg'];
  
  languages.forEach(lang => {
    const translations = {};
    texts.forEach(text => {
      const key = generateKey(text);
      translations[key] = translateText(text, lang);
    });

    fs.writeFileSync(
      path.join(localesDir, `${lang}.json`),
      JSON.stringify(translations, null, 2),
      'utf8'
    );
    console.log(`✅ Fichier ${lang}.json généré`);
  });

  console.log('🎉 Tous les fichiers de traduction ont été générés!');
  console.log(`📁 Localisation: ${localesDir}`);
}

// Exécuter le scan
if (require.main === module) {
  generateTranslations();
}

module.exports = { scanProject, generateTranslations, generateKey };
