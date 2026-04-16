import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Shield, Sparkles, 
  TrendingUp, Globe, Phone, Mail, Search
} from 'lucide-react';
import Link from 'next/link';

const UltraPremiumHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    {
      name: 'Personal Banking',
      href: '/personal-banking',
      dropdown: [
        { name: 'Current Accounts', href: '/personal-banking/current-account', icon: '💳' },
        { name: 'Savings', href: '/personal-banking/saving', icon: '💰' },
        { name: 'Insurance', href: '/personal-banking/insurance', icon: '🛡️' },
        { name: 'Investments', href: '/personal-banking/investments', icon: '📈' },
      ]
    },
    {
      name: 'Business Banking',
      href: '/business-banking',
      dropdown: [
        { name: 'Business Accounts', href: '/business-banking/accounts', icon: '🏢' },
        { name: 'Payment Solutions', href: '/business-banking/payments', icon: '💸' },
        { name: 'Business Loans', href: '/business-banking/loans', icon: '📊' },
        { name: 'Corporate Services', href: '/business-banking/corporate', icon: '🤝' },
      ]
    },
    {
      name: 'Premium Banking',
      href: '/premium',
      dropdown: [
        { name: 'Elite Banking', href: '/premium/elite', icon: '⭐' },
        { name: 'Private Banking', href: '/premium/private', icon: '🏛️' },
        { name: 'Wealth Management', href: '/premium/wealth', icon: '💎' },
        { name: 'Family Office', href: '/premium/family', icon: '👨‍👩‍👧‍👦' },
      ]
    },
    {
      name: 'Digital Banking',
      href: '/mobile-banking',
      dropdown: [
        { name: 'Mobile App', href: '/mobile-banking/mobile-app', icon: '📱' },
        { name: 'Online Banking', href: '/online-banking', icon: '💻' },
        { name: 'Digital Cards', href: '/mobile-banking/credit-cards', icon: '💳' },
        { name: 'API Services', href: '/api-services', icon: '🔌' },
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      dropdown: [
        { name: 'Help Center', href: '/help', icon: '❓' },
        { name: 'Blog', href: '/blog', icon: '📝' },
        { name: 'Calculators', href: '/calculators', icon: '🧮' },
        { name: 'Security', href: '/security', icon: '🔒' },
      ]
    }
  ];

  const headerVariants = {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <>
      <motion.header
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-glass shadow-platinum-soft border-b border-platinum/20' 
            : 'bg-transparent'
        }`}
      >
        {/* Top Bar */}
        <div className={`${isScrolled ? 'hidden' : 'block'} bg-gradient-to-r from-sapphire to-sapphire-dark text-white py-2`}>
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center text-xs">
              <div className="flex items-center space-x-6">
                <span className="flex items-center">
                  <Phone className="w-3 h-3 mr-1" />
                  +33 7 80 93 38 72
                </span>
                <span className="flex items-center">
                  <Mail className="w-3 h-3 mr-1" />
                  contact@continentalbk.de
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <Globe className="w-3 h-3 mr-1" />
                  EN/FR/DE
                </span>
                <span className="flex items-center">
                  <Shield className="w-3 h-3 mr-1" />
                  Secure Banking
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-soft-gold to-platinum rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-sapphire to-sapphire-dark rounded-full flex items-center justify-center mr-3">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-gray-900 font-luxury tracking-tight">
                      EUROPA
                    </h1>
                    <p className="text-xs font-light text-gray-600 font-luxury tracking-wider">
                      KREDIT BANK
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center text-gray-700 hover:text-sapphire transition-colors duration-300 font-medium text-sm group-hover:tracking-wider"
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.name && item.dropdown && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-xl shadow-premium border border-platinum/20 overflow-hidden"
                      >
                        <div className="p-2 space-y-1">
                          {(item?.dropdown || []).map((subItem, index) => (
                            <motion.div
                              key={subItem.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05, duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                            >
                              <Link
                                href={subItem.href}
                                className="flex items-center px-4 py-3 rounded-xl hover:bg-light-gray transition-all duration-200 group/item hover:scale-105"
                              >
                                <span className="text-xl mr-3 group-hover/item:scale-110 transition-transform duration-300">
                                  {subItem.icon}
                                </span>
                                <div>
                                  <p className="text-gray-900 font-medium text-sm group-hover/item:text-sapphire transition-colors">{subItem.name}</p>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-light-gray hover:bg-subtle-gray transition-colors duration-300"
              >
                <Search className="w-5 h-5 text-gray-600" />
              </motion.button>

              {/* Login/Register */}
              <div className="hidden lg:flex items-center space-x-3">
                <Link
                  href="/login"
                  className="px-6 py-2.5 text-sapphire hover:text-sapphire-dark font-medium transition-all duration-300 text-sm border border-sapphire/20 rounded-full hover:border-sapphire/40"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="px-6 py-2.5 bg-gradient-to-r from-sapphire to-sapphire-dark text-white rounded-full hover:shadow-sapphire-soft transition-all duration-300 text-sm font-medium hover:scale-105"
                >
                  Get Started
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:flex items-center justify-center w-10 h-10 rounded-full bg-light-gray hover:bg-subtle-gray transition-colors duration-300"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-gray-600" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
            <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-platinum-soft">
              <div className="p-6 border-b border-platinum/20">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-sapphire to-sapphire-dark rounded-full flex items-center justify-center mr-3">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-900 font-luxury">EUROPA</h2>
                      <p className="text-xs text-gray-600 font-luxury">KREDIT BANK</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-light-gray transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="p-6 overflow-y-auto h-full">
                <nav className="space-y-4">
                  {(navigation || []).map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="block text-gray-900 font-medium py-2 hover:text-sapphire transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.dropdown && (
                        <div className="ml-4 mt-2 space-y-2">
                          {(item?.dropdown || []).map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="flex items-center text-gray-600 text-sm py-2 hover:text-sapphire transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <span className="mr-2">{subItem.icon}</span>
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="mt-8 space-y-3">
                  <Link
                    href="/login"
                    className="block w-full text-center px-6 py-3 text-sapphire border border-sapphire/20 rounded-full hover:border-sapphire/40 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-sapphire to-sapphire-dark text-white rounded-full transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UltraPremiumHeader;
