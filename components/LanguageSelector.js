import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation, SUPPORTED_LANGUAGES } from '../lib/i18n';
import { ChevronDown, Globe } from 'lucide-react';

export default function LanguageSelector() {
  const { language, changeLanguage, getSupportedLanguages } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const supportedLanguages = getSupportedLanguages();

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };

  const currentLanguage = supportedLanguages.find(lang => lang.code === language);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.25,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md"
      >
        <Globe className="w-4 h-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">
          {currentLanguage?.flag} {currentLanguage?.name}
        </span>
        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute right-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-premium border border-gray-200 z-50 overflow-hidden"
          >
            <div className="p-2 space-y-1">
              {(supportedLanguages || []).map((lang, index) => (
                <motion.button
                  key={lang.code}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full px-4 py-3 text-left text-sm flex items-center space-x-3 rounded-lg transition-all duration-200 ${
                    lang.isCurrent 
                      ? 'bg-blue-50 text-blue-600 ring-2 ring-blue-500/20' 
                      : 'text-gray-700 hover:bg-gray-50 hover:scale-105'
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="font-medium">{lang.name}</span>
                  {lang.isCurrent && (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-auto text-blue-600"
                    >
                      ✓
                    </motion.span>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
