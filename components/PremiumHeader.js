import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  User, 
  ChevronDown,
  Globe,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const PremiumHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('🇫🇷 Français');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: '🇫🇷', name: 'Français' },
    { code: '🇬🇧', name: 'English' },
    { code: '🇩🇪', name: 'Deutsch' },
    { code: '🇪🇸', name: 'Español' }
  ];

  const navItems = [
    { name: 'ENTREPRISES', href: '/business' },
    { name: 'PERSONNEL', href: '/personal' },
    { name: 'MOBILITÉ BANCAIRE', href: '/mobile-banking' },
    { name: 'CRÉDITS', href: '/loans' },
    { name: 'DEMANDER UN PRÊT', href: '/request' }
  ];

  return (
    <>
      {/* Top Bar - Orange */}
      <div className="bg-[#F26A21] text-white py-2 px-6">
        <div className="container mx-auto flex items-center justify-between text-sm">
          {/* Left - Address */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>1 RUE LA VRILLIERE 75001 PARIS</span>
            </div>
          </div>

          {/* Center - Contact Info */}
          <div className="flex items-center space-x-6">
            <div className="hidden lg:flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+33 7 80 93 38 72</span>
            </div>
            <div className="hidden lg:flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>contact@continentalbk.de</span>
            </div>
          </div>

          {/* Right - Contact + Language */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/contact" 
              className="hover:text-orange-100 transition-colors font-medium"
            >
              Contactez-nous
            </Link>
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 hover:text-orange-100 transition-colors"
              >
                <span>{currentLang}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              
              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-xl shadow-premium border border-gray-200 overflow-hidden z-50"
                  >
                    <div className="p-2 space-y-1">
                      {(languages || []).map((lang, index) => (
                        <motion.button
                          key={lang.code}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05, duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                          onClick={() => {
                            setCurrentLang(`${lang.code} ${lang.name}`);
                            setIsLanguageOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left flex items-center space-x-3 rounded-lg transition-all duration-200 ${
                            currentLang.includes(lang.name)
                              ? 'bg-orange-50 text-[#F26A21] ring-2 ring-[#F26A21]/20'
                              : 'text-gray-700 hover:bg-orange-50 hover:text-[#F26A21] hover:scale-105'
                          }`}
                        >
                          <span className="text-lg">{lang.code}</span>
                          <span className="font-medium text-sm">{lang.name}</span>
                          {currentLang.includes(lang.name) && (
                            <motion.span 
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="ml-auto text-[#F26A21]"
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
          </div>
        </div>
      </div>

      {/* Main Navigation - Blue */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0C3B66]/95 backdrop-blur-md shadow-lg' 
            : 'bg-[#0C3B66]'
        }`}
        style={{ top: '41px' }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-br from-[#0C3B66] to-[#0E3A5D] rounded-full"></div>
              </div>
              <div className="text-white">
                <div className="text-xl font-bold tracking-tight">EUROPA</div>
                <div className="text-xl font-bold tracking-tight">KREDIT</div>
                <div className="text-xl font-bold tracking-tight">BANK</div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {(navItems || []).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-orange-400 transition-colors font-medium text-sm lg:text-base"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Login Button */}
            <div className="hidden lg:block">
              <Link
                href="/login"
                className="flex items-center space-x-2 bg-gray-100 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                <User className="w-4 h-4" />
                <span>CONNEXION</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white hover:text-orange-400 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#0C3B66] border-t border-white/10"
            >
              <div className="container mx-auto px-6 py-6">
                <div className="flex flex-col space-y-4">
                  {(navItems || []).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white hover:text-orange-400 transition-colors font-medium py-2"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-2 bg-gray-100 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium mt-4"
                  >
                    <User className="w-4 h-4" />
                    <span>CONNEXION</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed header */}
      <div style={{ height: isScrolled ? '41px' : '121px' }}></div>
    </>
  );
};

export default PremiumHeader;
