import { useState, useEffect, useContext, createContext } from 'react';

// Langues supportées
export const SUPPORTED_LANGUAGES = {
  en: { name: 'English', flag: '🇬🇧' },
  nl: { name: 'Nederlands', flag: '🇳🇱' },
  bg: { name: 'Български', flag: '🇧🇬' }
};

// Langue par défaut
const DEFAULT_LANGUAGE = 'en';

// Contexte de traduction
const TranslationContext = createContext();

// Hook de traduction
export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

// Provider de traduction
export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  const [translations, setTranslations] = useState({});
  const [fallbackTranslations, setFallbackTranslations] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Charger les traductions pour une langue spécifique
  const loadTranslations = async (lang) => {
    try {
      setIsLoading(true);
      const [translationsModule, fallbackModule] = await Promise.all([
        import(`../locales/${lang}.json`),
        import(`../locales/${DEFAULT_LANGUAGE}.json`)
      ]);

      setTranslations(translationsModule.default);
      setFallbackTranslations(fallbackModule.default);
    } catch (error) {
      console.error(`Failed to load translations for ${lang}:`, error);
      setTranslations({});
      setFallbackTranslations({});
    } finally {
      setIsLoading(false);
    }
  };

  // Initialiser la langue depuis localStorage ou le navigateur
  useEffect(() => {
    const initializeLanguage = () => {
      // Essayer de récupérer la langue depuis localStorage
      const savedLanguage = localStorage.getItem('continentalBank_language');
      
      if (savedLanguage && SUPPORTED_LANGUAGES[savedLanguage]) {
        setLanguage(savedLanguage);
        return;
      }

      // Essayer de récupérer la langue depuis le navigateur
      const browserLanguage = navigator.language.split('-')[0];
      if (SUPPORTED_LANGUAGES[browserLanguage]) {
        setLanguage(browserLanguage);
        return;
      }

      // Fallback vers la langue par défaut
      setLanguage(DEFAULT_LANGUAGE);
    };

    initializeLanguage();
  }, []);

  // Charger les traductions quand la langue change
  useEffect(() => {
    loadTranslations(language);
  }, [language]);

  // Changer de langue
  const changeLanguage = (newLanguage) => {
    if (SUPPORTED_LANGUAGES[newLanguage]) {
      setLanguage(newLanguage);
      localStorage.setItem('continentalBank_language', newLanguage);
    } else {
      console.warn(`Unsupported language: ${newLanguage}`);
    }
  };

  // Fonction de traduction avec fallback
  const t = (key, params = {}) => {
    const getValueByPath = (source) => {
      const keys = key.split('.');
      let value = source;

      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          return undefined;
        }
      }

      return value;
    };

    let value = getValueByPath(translations);
    if (typeof value === 'undefined') {
      value = getValueByPath(fallbackTranslations);
    }
    if (typeof value === 'undefined') {
      return key;
    }

    // Si returnObjects est true, retourner la valeur brute (même si c'est un array/object)
    if (params.returnObjects === true) {
      return value || [];
    }

    // Si la valeur est une chaîne et a des paramètres, les remplacer
    if (typeof value === 'string' && Object.keys(params).length > 0) {
      return value.replace(/\{(\w+)\}/g, (match, param) => params[param] || match);
    }

    return value || key;
  };

  // Obtenir les informations de la langue actuelle
  const getCurrentLanguage = () => ({
    code: language,
    name: SUPPORTED_LANGUAGES[language]?.name || 'Deutsch',
    flag: SUPPORTED_LANGUAGES[language]?.flag || '🇩🇪',
    isDefault: language === DEFAULT_LANGUAGE
  });

  // Obtenir toutes les langues supportées
  const getSupportedLanguages = () => {
    return Object.entries(SUPPORTED_LANGUAGES).map(([code, info]) => ({
      code,
      ...info,
      isCurrent: code === language
    }));
  };

  const value = {
    language,
    changeLanguage,
    t,
    getCurrentLanguage,
    getSupportedLanguages,
    isLoading
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

// Fonction utilitaire pour scanner et extraire les textes
export const extractTextsFromComponent = (componentText) => {
  const texts = [];
  
  // Expressions régulières pour extraire différents types de textes
  const patterns = [
    // Titres, textes entre balises
    />([^<]+)</g,
    // Placeholder
    /placeholder="([^"]+)"/g,
    // Labels
    />([^<]+)<\/label>/g,
    // Boutons
    />([^<]+)<\/button>/g,
    // Links
    />([^<]+)<\/a>/g,
  ];

  patterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(componentText)) !== null) {
      const text = match[1].trim();
      if (text && text.length > 1 && !text.match(/^\s+$/)) {
        texts.push(text);
      }
    }
  });

  return [...new Set(texts)]; // Éliminer les doublons
};

// Fonction pour générer une clé de traduction
export const generateTranslationKey = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '_')
    .substring(0, 50);
};
