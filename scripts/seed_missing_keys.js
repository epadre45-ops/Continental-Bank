const fs = require('fs');
const path = require('path');

const missingKeys = {
  common: {
    bank_name: "Continental Kreditbank",
    bank_name_full: "EUROPA KREDIT BANK",
    bank_slogan: "Weltweite Bankexzellenz",
    credit_solutions: "Solutions de Financement",
    credit_solutions_desc: "6 solutions adaptées à vos projets",
    services_available: "{{count}} services disponibles",
    request_loan_btn: "Demander un prêt",
    address_full: "Kardinal-Faulhaber-Straße 12, 80333 Munich, Germany",
    assets_under_management: "Actifs sous gestion",
    countries: "Pays",
    years_expertise: "Années d'expertise",
    satisfaction: "Satisfaction",
    secured: "Sécurisé",
    q3_2025_commitments: "Engagem. Q3 2025",
    this_year_growth: "+14% cette année",
    customer_satisfaction: "Satisfaction client",
    rating: "Note",
    support_available: "Support disponible",
    instantaneous: "Instantané",
    loan_process_incredible: "Le processus de prêt a été incroyable.",
    entrepreneur_berlin: "Entrepreneuse, Berlin",
    loan_approved_24h: "Prêt approuvé en 24h",
    customer_service_exceptional: "Service client exceptionnel.",
    director_munich: "Directeur, Munich",
    partner_5_years: "Partenaire depuis 5 ans",
    intuitive_tools: "Des outils intuitifs et puissants.",
    consultant_hamburg: "Consultante, Hambourg",
    satisfied: "Satisfaite"
  },
  footer: {
    about: "À Propos",
    our_institution: "Notre Institution",
    governance: "Gouvernance",
    strategy: "Stratégie",
    corporate_banking: "Banque d'Entreprises",
    wealth_management: "Gestion Patrimoine",
    financial_markets: "Marchés Financiers",
    credit_products: "Produits de Crédit",
    address_label: "Siège social",
    rcs: "HRB 123456 Munich",
    capital: "Capital social : 50 000 000 €",
    siret: "SIRET : 892 345 678 00012",
    supervision_title: "Supervision Réglementaire",
    acpr: "Agrément ACPR : ACPR-2023-01234",
    regafi: "Immatriculation REGAFI : REGAFI-2023-04567",
    orias: "ORIAS : 23056789",
    fond_garantie: "Membre du Fonds de Garantie des Dépôts (FGDR)",
    deposit_limit: "Garantie des dépôts jusqu'à 100 000 €",
    credit_warning: "Un crédit vous engage et doit être remboursé. Vérifiez votre capacité de remboursement avant de vous engager."
  },
  testimonials: {
    md_position: "Directrice Financière",
    md_company: "Groupe Industriel International",
    md_text: "Continental Bank Europe a transformé notre approche du liquidité management.",
    jpm_position: "Président du Conseil",
    jpm_company: "Fondation d'Investissement Européenne",
    jpm_text: "La rigueur analytique et la vision stratégique de Continental Bank Europe sont exceptionnelles.",
    sl_position: "Directrice Générale",
    sl_company: "Société de Services Technologiques",
    sl_text: "Leur approche sur mesure fait toute la différence.",
    pb_position: "CEO",
    pb_company: "Groupe Technologique Innovant",
    pb_text: "L'excellence opérationnelle de Continental Bank Europe nous a permis d'accélérer notre croissance.",
    cm_position: "Directrice des Opérations",
    cm_company: "Société Financière Européenne",
    cm_text: "La qualité du service client et leur expertise sont remarquables.",
    td_position: "Président",
    td_company: "Fonds d'Investissement Stratégique",
    td_text: "Continental Bank Europe combine innovation technologique et rigueur financière.",
    im_position: "Directrice Financière",
    im_company: "Groupe Immobilier International",
    im_text: "La capacité de structurer des financements complexes est impressionnante.",
    fl_position: "CFO",
    fl_company: "Conglomérat Industriel",
    fl_text: "Une banque qui comprend les enjeux des grandes entreprises européennes."
  },
  services: {
    corporate_banking: "Unternehmensbanking",
    corporate_description: "Solutions de financement structurées pour accompagner la croissance.",
    wealth_management: "Vermogensbeheer",
    wealth_description: "Stratégies d'investissement sophistiquées pour préserver votre capital.",
    financial_markets: "Marchés Financiers",
    markets_description: "Accès aux marchés mondiaux avec une expertise en trading.",
    international: "International",
    international_description: "Présence mondiale avec des solutions adaptées."
  },
  expertise: {
    quant_analysis: "Analyse Quantitative",
    quant_description: "Modélisation sophistiquée des risques et opportunités de marché.",
    bespoke_strategy: "Stratégie Sur Mesure",
    bespoke_description: "Solutions personnalisées selon les objectifs de chaque organisation.",
    op_excellence: "Excellence Opérationnelle",
    op_description: "Processus optimisés et technologie de pointe."
  }
};

const localesDir = path.join(__dirname, '..', 'locales');
const langs = ['en', 'fr', 'de', 'nl', 'bg'];

function deepMerge(target, source) {
  for (const key in source) {
    if (source[key] instanceof Object) {
      if (!target[key]) target[key] = {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key]; // Always overwrite for this seed to ensure consistency
    }
  }
}

langs.forEach(lang => {
  const filePath = path.join(localesDir, `${lang}.json`);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    deepMerge(data, missingKeys);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Updated ${lang}.json with all required keys.`);
  }
});
