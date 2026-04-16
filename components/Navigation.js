import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Shield, Menu, X, ChevronDown, Globe, Bell, User, LogOut, Settings, CreditCard, TrendingUp, Headphones, Zap, Lock, Star, Wallet, FileText, Calculator, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle, Search } from 'lucide-react';
import Link from 'next/link';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'Banque Personnelle',
      icon: <User className="w-5 h-5" />,
      description: 'Comptes, épargne et assurances',
      link: '/personal-banking',
      features: ['Compte courant', 'Épargne', 'Assurance vie', 'Cartes de paiement']
    },
    {
      title: 'Banque d\'Affaires',
      icon: <TrendingUp className="w-5 h-5" />,
      description: 'Solutions pour entreprises',
      link: '/business-banking',
      features: ['Compte pro', 'Financement', 'Trésorerie', 'Commerce international']
    },
    {
      title: 'Prêts et Crédits',
      icon: <CreditCard className="w-5 h-5" />,
      description: 'Financez vos projets',
      link: '/loans',
      features: ['Prêt personnel', 'Prêt auto', 'Prêt travaux', 'Don personnel']
    },
    {
      title: 'Investissements',
      icon: <Wallet className="w-5 h-5" />,
      description: 'Faites fructifier votre patrimoine',
      link: '/investments',
      features: ['Actions', 'Obligations', 'ETF', 'Gestion pilotée']
    }
  ];

  const features = [
    {
      title: 'Application Mobile',
      icon: <Zap className="w-5 h-5" />,
      description: 'Banque mobile ultra-moderne',
      link: '/mobile-banking'
    },
    {
      title: 'Cartes Virtuelles',
      icon: <CreditCard className="w-5 h-5" />,
      description: 'Paiements instantanés',
      link: '/cards'
    },
    {
      title: 'Sécurité Maximale',
      icon: <Lock className="w-5 h-5" />,
      description: 'Protection niveau militaire',
      link: '/security'
    },
    {
      title: 'Support 24/7',
      icon: <Headphones className="w-5 h-5" />,
      description: 'Conseillers disponibles',
      link: '/support'
    }
  ];

  const notifications = [
    { id: 1, title: 'Nouvelle transaction', message: 'Virement de 500€ reçu', time: 'Il y a 2 min', type: 'success' },
    { id: 2, title: 'Mise à jour sécurité', message: 'Nouveaux dispositifs connectés', time: 'Il y a 1h', type: 'info' },
    { id: 3, title: 'Offre spéciale', message: '-20% sur assurance auto', time: 'Il y a 3h', type: 'promo' }
  ];

  const quickActions = [
    { icon: <Calculator className="w-4 h-4" />, label: 'Calculateur', link: '/calculator' },
    { icon: <FileText className="w-4 h-4" />, label: 'Documents', link: '/documents' },
    { icon: <MessageCircle className="w-4 h-4" />, label: 'Support', link: '/support' },
    { icon: <Settings className="w-4 h-4" />, label: 'Paramètres', link: '/settings' }
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass shadow-2xl border-b border-gray-200' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-orange via-secondary-orange to-accent-coral rounded-xl flex items-center justify-center shadow-lg animate-pulse-slow">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-green rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-2xl font-bold text-primary-gradient">UltraBank</span>
                <div className="text-xs text-text-gray font-medium">Next Generation Banking</div>
              </div>
            </motion.div>

            {/* Search Bar */}
            <div className="hidden lg:flex items-center">
              <div className={`relative transition-all duration-300 ${isSearchFocused ? 'w-96' : 'w-64'}`}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  placeholder="Rechercher..."
                  className="w-full px-4 py-2 pl-10 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-orange transition-all"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-gray" />
                {searchQuery && (
                  <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 p-4">
                    <div className="text-sm text-text-gray">Recherche: "{searchQuery}"</div>
                        <div className="mt-2 space-y-2">
                          <div className="p-2 hover:bg-gray-50 rounded cursor-pointer">Compte courant</div>
                          <div className="p-2 hover:bg-gray-50 rounded cursor-pointer">Prêt personnel</div>
                          <div className="p-2 hover:bg-gray-50 rounded cursor-pointer">Application mobile</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden xl:flex items-center space-x-8">
                  {/* Services Dropdown */}
                  <div className="relative">
                    <button
                      onMouseEnter={() => setActiveDropdown('services')}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="flex items-center space-x-1 hover:text-primary-orange transition-colors font-medium py-2"
                    >
                      Services
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === 'services' && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                          onMouseEnter={() => setActiveDropdown('services')}
                          onMouseLeave={() => setActiveDropdown(null)}
                          className="absolute top-full left-0 mt-2 w-96 bg-white/95 backdrop-blur-xl rounded-xl shadow-premium border border-gray-200 overflow-hidden"
                        >
                          <div className="p-6 bg-gradient-to-r from-primary-orange to-secondary-orange text-white">
                            <h3 className="text-lg font-bold mb-2">Nos Services Premium</h3>
                            <p className="text-sm text-white/80">Des solutions sur mesure pour tous vos besoins</p>
                          </div>
                          <div className="p-6 space-y-2">
                            {(services || []).map((service, index) => (
                              <motion.div
                                key={service.link}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                              >
                                <Link href={service.link} className="flex items-start space-x-3 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 group hover:scale-105">
                                  <div className="w-10 h-10 bg-gradient-to-r from-primary-orange to-secondary-orange rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                    {service.icon}
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-text-dark group-hover:text-primary-orange transition-colors">{service.title}</h4>
                                    <p className="text-sm text-text-gray mb-1">{service.description}</p>
                                    <div className="flex flex-wrap gap-1">
                                      {(service?.features?.slice(0, 2) || []).map((feature, idx) => (
                                        <span key={idx} className="text-xs bg-gray-100 text-text-gray px-2 py-1 rounded-full">{feature}</span>
                                      ))}
                                    </div>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Features Dropdown */}
                  <div className="relative">
                    <button
                      onMouseEnter={() => setActiveDropdown('features')}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="flex items-center space-x-1 hover:text-primary-orange transition-colors font-medium py-2"
                    >
                      Fonctionnalités
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'features' ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === 'features' && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                          onMouseEnter={() => setActiveDropdown('features')}
                          onMouseLeave={() => setActiveDropdown(null)}
                          className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-xl shadow-premium border border-gray-200 overflow-hidden"
                        >
                          <div className="p-4 space-y-1">
                            {(features || []).map((feature, index) => (
                              <motion.div
                                key={feature.link}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                              >
                                <Link href={feature.link} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group hover:scale-105">
                                  <div className="w-8 h-8 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                  </div>
                                  <div>
                                    <h4 className="font-medium text-text-dark group-hover:text-primary-orange transition-colors">{feature.title}</h4>
                                    <p className="text-xs text-text-gray">{feature.description}</p>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link href="/loans" className="hover:text-primary-orange transition-colors font-medium py-2">Prêts</Link>
                  <Link href="/testimonials" className="hover:text-primary-orange transition-colors font-medium py-2">Témoignages</Link>
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center space-x-4">
                  {/* Notifications */}
                  <div className="relative">
                    <button
                      onClick={() => setShowNotifications(!showNotifications)}
                      className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Bell className="w-5 h-5 text-text-dark" />
                      <span className="absolute top-0 right-0 w-2 h-2 bg-accent-coral rounded-full animate-pulse"></span>
                    </button>
                    
                    <AnimatePresence>
                      {showNotifications && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
                        >
                          <div className="p-4 border-b border-gray-200">
                            <h3 className="font-semibold text-text-dark">Notifications</h3>
                          </div>
                          <div className="max-h-96 overflow-y-auto">
                            {(notifications || []).map((notification) => (
                              <div key={notification.id} className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
                                <div className="flex items-start space-x-3">
                                  <div className={`w-2 h-2 rounded-full mt-2 ${
                                    notification.type === 'success' ? 'bg-accent-green' :
                                    notification.type === 'info' ? 'bg-accent-blue' : 'bg-accent-coral'
                                  }`}></div>
                                  <div className="flex-1">
                                    <h4 className="font-medium text-text-dark">{notification.title}</h4>
                                    <p className="text-xs text-text-gray">{notification.message}</p>
                                    <p className="text-xs text-text-gray mt-1">{notification.time}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* User Menu */}
                  <div className="relative">
                    <button
                      onClick={() => setShowUserMenu(!showUserMenu)}
                      className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-primary-orange to-secondary-orange rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <ChevronDown className="w-4 h-4 text-text-dark" />
                    </button>
                    
                    <AnimatePresence>
                      {showUserMenu && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                          className="absolute top-full right-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-xl shadow-premium border border-gray-200 overflow-hidden"
                        >
                          <div className="p-4 border-b border-gray-200">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gradient-to-r from-primary-orange to-secondary-orange rounded-full flex items-center justify-center">
                                <User className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-text-dark">Jean Dupont</h4>
                                <p className="text-xs text-text-gray">Compte Premium</p>
                              </div>
                            </div>
                          </div>
                          <div className="p-2 space-y-1">
                            <motion.div
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.05, duration: 0.2 }}
                            >
                              <Link href="/dashboard" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group hover:scale-105">
                                <User className="w-4 h-4 text-text-gray group-hover:text-primary-orange transition-colors" />
                                <span className="text-sm">Mon tableau de bord</span>
                              </Link>
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1, duration: 0.2 }}
                            >
                              <Link href="/settings" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group hover:scale-105">
                                <Settings className="w-4 h-4 text-text-gray group-hover:text-primary-orange transition-colors" />
                                <span className="text-sm">Paramètres</span>
                              </Link>
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.15, duration: 0.2 }}
                            >
                              <Link href="/logout" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group hover:scale-105">
                                <LogOut className="w-4 h-4 text-text-gray group-hover:text-primary-orange transition-colors" />
                                <span className="text-sm">Déconnexion</span>
                              </Link>
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* CTA Buttons */}
                  <div className="hidden lg:flex items-center space-x-3">
                    <Link href="/login" className="px-4 py-2 text-primary-orange hover:bg-orange-50 rounded-lg transition-colors font-medium">
                      Connexion
                    </Link>
                    <Link href="/register" className="btn-premium flex items-center space-x-2">
                      <span>Ouvrir un compte</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Mobile Menu Button */}
                  <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="xl:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    {isMenuOpen ? <X className="w-6 h-6 text-text-dark" /> : <Menu className="w-6 h-6 text-text-dark" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, x: -300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  className="xl:hidden fixed inset-y-0 left-0 w-80 bg-white shadow-2xl z-50 overflow-y-auto"
                >
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-primary-orange to-secondary-orange rounded-lg flex items-center justify-center">
                          <Shield className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-primary-gradient">UltraBank</span>
                      </div>
                      <button onClick={() => setIsMenuOpen(false)}>
                        <X className="w-6 h-6 text-text-dark" />
                      </button>
                    </div>
                    
                    {/* Search in Mobile */}
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Rechercher..."
                        className="w-full px-4 py-2 pl-10 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange"
                      />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-gray" />
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-6">
                    {/* Mobile Services */}
                    <div>
                      <h3 className="font-semibold text-text-dark mb-4">Services</h3>
                      <div className="space-y-2">
                        {(services || []).map((service) => (
                          <Link key={service.link} href={service.link} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="w-8 h-8 bg-gradient-to-r from-primary-orange to-secondary-orange rounded-lg flex items-center justify-center text-white">
                              {service.icon}
                            </div>
                            <div>
                              <h4 className="font-medium text-text-dark">{service.title}</h4>
                              <p className="text-xs text-text-gray">{service.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    {/* Mobile Features */}
                    <div>
                      <h3 className="font-semibold text-text-dark mb-4">Fonctionnalités</h3>
                      <div className="space-y-2">
                        {(features || []).map((feature) => (
                          <Link key={feature.link} href={feature.link} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="w-8 h-8 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg flex items-center justify-center text-white">
                              {feature.icon}
                            </div>
                            <div>
                              <h4 className="font-medium text-text-dark">{feature.title}</h4>
                              <p className="text-xs text-text-gray">{feature.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    {/* Quick Actions */}
                    <div>
                      <h3 className="font-semibold text-text-dark mb-4">Actions Rapides</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {(quickActions || []).map((action) => (
                          <Link key={action.link} href={action.link} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                            {action.icon}
                            <span>{action.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                    
                    {/* Mobile CTA */}
                    <div className="space-y-3 pt-4 border-t border-gray-200">
                      <Link href="/login" className="w-full px-4 py-3 text-primary-orange hover:bg-orange-50 rounded-lg transition-colors font-medium text-center block">
                        Connexion
                      </Link>
                      <Link href="/register" className="w-full btn-premium flex items-center justify-center space-x-2">
                        <span>Ouvrir un compte</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Overlay */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="xl:hidden fixed inset-0 bg-black/50 z-40"
                />
              )}
            </AnimatePresence>
          </nav>
        </>
  );
};

export default Navigation;
