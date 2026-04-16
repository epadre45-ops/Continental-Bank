import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ArrowRight,
  Globe,
  Shield,
  Building,
  TrendingUp,
  BarChart3,
  Scale,
  Target,
  Calculator,
  Lock,
  FileText,
  HelpCircle,
  Search,
  User,
  Home,
  Car,
  Wrench,
  CreditCard,
  Plane,
  GraduationCap,
  Heart,
  Briefcase,
  Check,
  LogOut
} from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '../lib/i18n';
import LanguageSelector from './LanguageSelector';

export default function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const sessionId = localStorage.getItem('continentalBank_session');
    if (sessionId) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('continentalBank_session');
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  const navigation = [
    {
      title: t('common.home'),
      href: '/',
      icon: <Home className="w-4 h-4" />,
      special: true
    },
    {
      title: t('navigation.credit'),
      href: '/loan-application',
      icon: <FileText className="w-4 h-4" />,
      badge: t('home.important'),
      badgeColor: 'bg-gradient-to-r from-red-500 to-red-600',
      special: true
    },
    {
      title: t('navigation.institution'),
      items: [
        { title: t('institution.our_institution'), href: '/institution', icon: <Building className="w-4 h-4" /> },
        { title: t('navigation.governance'), href: '/governance', icon: <Shield className="w-4 h-4" /> },
        { title: t('navigation.strategy'), href: '/strategy', icon: <TrendingUp className="w-4 h-4" /> },
        { title: t('navigation.regulatory_approvals'), href: '/regulatory-approvals', icon: <Scale className="w-4 h-4" /> },
        { title: t('navigation.key_figures'), href: '/key-figures', icon: <BarChart3 className="w-4 h-4" /> }
      ]
    },
    {
      title: t('navigation.solutions'),
      items: [
        { title: t('navigation.corporate_banking'), href: '/entreprises', icon: <Building className="w-4 h-4" /> },
        { title: t('navigation.wealth_management'), href: '/wealth-management', icon: <TrendingUp className="w-4 h-4" /> },
        { title: t('navigation.financial_markets'), href: '/markets', icon: <BarChart3 className="w-4 h-4" /> },
        { title: t('navigation.credit_products'), href: '/loans', icon: <CreditCard className="w-4 h-4" /> },
        { title: t('navigation.loan_calculator'), href: '/loan-calculator', icon: <Calculator className="w-4 h-4" /> }
      ]
    },
    {
      title: t('navigation.expertise'),
      items: [
        { title: t('navigation.research_analysis'), href: '/research', icon: <FileText className="w-4 h-4" /> },
        { title: t('navigation.dashboard'), href: '/dashboard', icon: <BarChart3 className="w-4 h-4" /> },
        { title: t('navigation.compliance_center'), href: '/compliance', icon: <Shield className="w-4 h-4" /> },
        { title: t('navigation.security'), href: '/security', icon: <Lock className="w-4 h-4" /> },
        { title: t('navigation.legal_documents'), href: '/legal-documents', icon: <FileText className="w-4 h-4" /> }
      ]
    },
    {
      title: t('bank.relations'),
      items: [
        { title: t('bank.client_area'), href: '/login', icon: <User className="w-4 h-4" /> },
        { title: t('bank.press'), href: '/press', icon: <FileText className="w-4 h-4" /> },
        { title: t('bank.careers'), href: '/careers', icon: <Building className="w-4 h-4" /> },
        { title: t('common.faq'), href: '/faq', icon: <HelpCircle className="w-4 h-4" /> },
        { title: t('common.contact'), href: '/contact', icon: <Mail className="w-4 h-4" /> }
      ]
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-20 border-b border-[rgba(10,30,60,0.08)]">
      {/* Micro-bar Supérieure */}
      <div className="bg-[#0A1F3C] text-white/60 text-xs py-2 px-8">
        <div className="container-institutional flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1">
              <MapPin className="w-3 h-3" />
              <span>{t('common.city_munich')}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Phone className="w-3 h-3" />
              <span>{t('common.phone')}</span>
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/contact" className="hover:text-white transition-colors">
              {t('common.contact')}
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Principale */}
      <div className="bg-white">
        <div className="container-institutional">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0E2E5C] to-[#153E75] rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
                CB
              </div>
              <div className="hidden lg:block">
                <div className="text-xl font-bold text-[#0A1F3C]">{t('common.bank_name')}</div>
                <div className="text-xs text-[#64748B]">{t('common.bank_slogan')}</div>
              </div>
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              {(navigation || []).map((section) => (
                <div
                  key={section.title || section.href}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(section.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className={`flex items-center space-x-2 py-6 transition-all duration-300 ${
                    section.title === t('navigation.credit') 
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold hover:from-blue-700 hover:to-purple-700'
                      : 'text-[#0A1F3C] hover:text-[#0E2E5C] font-medium'
                  }`}>
                    {section.title === t('common.home') ? section.icon : <span>{section.title}</span>}
                    {section.title === t('navigation.credit') && (
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                    )}
                    {!section.special && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === section.title ? 'rotate-180' : ''
                      }`} />
                    )}
                  </button>
                  
                  {/* Lien direct pour Crédit */}
                  {section.special && section.href && (
                    <Link 
                      href={section.href}
                      className="absolute inset-0"
                      tabIndex={-1}
                    />
                  )}
                  
                  {/* Dropdown Ultra Premium Sobre */}
                  {!section.special && (
                    <AnimatePresence>
                      {activeDropdown === section.title && (
                        <motion.div
                          initial={{ opacity: 0, y: -15, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -15, scale: 0.98 }}
                          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="absolute top-full left-0 mt-3 w-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-[rgba(10,30,60,0.06)] overflow-hidden max-h-96"
                        >
                        {/* Header subtil */}
                        <div className="px-5 py-3 border-b border-[rgba(10,30,60,0.04)] bg-gradient-to-r from-[#F8FAFC] to-white">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold text-[#0A1F3C] text-base tracking-tight">
                                {section.title === t('navigation.credit') ? t('common.credit_solutions') : section.title}
                              </h3>
                              <p className="text-[#64748B] text-xs mt-0.5">
                                {section.title === t('navigation.credit') 
                                  ? t('common.credit_solutions_desc')
                                  : t('common.services_available', { count: section.items.length })
                                }
                              </p>
                            </div>
                            <div className="w-8 h-8 bg-gradient-to-br from-[#0E2E5C]/10 to-[#153E75]/10 rounded-lg flex items-center justify-center">
                              {section.title === t('navigation.credit') && <CreditCard className="w-4 h-4 text-[#0E2E5C]" />}
                              {section.title === t('navigation.institution') && <Building className="w-4 h-4 text-[#0E2E5C]" />}
                              {section.title === t('navigation.solutions') && <TrendingUp className="w-4 h-4 text-[#0E2E5C]" />}
                              {section.title === t('navigation.expertise') && <Shield className="w-4 h-4 text-[#0E2E5C]" />}
                              {section.title === t('bank.relations') && <Mail className="w-4 h-4 text-[#0E2E5C]" />}
                            </div>
                          </div>
                        </div>
                        
                        <div className="py-1">
                          {(section?.items || []).map((item, index) => (
                            <motion.div
                              key={item.href}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: index * 0.05 }}
                            >
                              <Link
                                href={item.href}
                                className="group flex items-center px-5 py-3 hover:bg-gradient-to-r hover:from-[#F8FAFC] hover:to-[#F1F5F9] transition-all duration-200 relative"
                              >
                                {/* Badge subtil pour Crédit */}
                                {section.title === t('navigation.credit') && item.badge && (
                                  <div className={`absolute top-3 right-3 px-2 py-0.5 ${item.badgeColor} text-white text-xs font-medium rounded-full shadow-sm opacity-90`}>
                                    {item.badge}
                                  </div>
                                )}
                                
                                <div className="flex items-center space-x-3 flex-1">
                                  <div className="w-9 h-9 bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0] rounded-lg flex items-center justify-center text-[#0E2E5C] group-hover:scale-105 transition-transform duration-200 shadow-sm">
                                    {item.icon}
                                  </div>
                                  
                                  <div className="flex-1 min-w-0">
                                    <div className="font-medium text-[#0A1F3C] group-hover:text-[#0E2E5C] transition-colors duration-200 text-sm truncate">
                                      {item.title}
                                    </div>
                                    <div className="text-xs text-[#64748B] mt-0.5 truncate">
                                      {item.description || t('common.learn_more')}
                                    </div>
                                  </div>
                                  
                                  <div className="text-[#94A3B8] group-hover:text-[#0E2E5C] transition-colors duration-200">
                                    <ArrowRight className="w-3.5 h-3.5" />
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Footer élégant pour Crédit */}
                        {section.title === t('navigation.credit') && (
                          <div className="px-5 py-3 bg-gradient-to-r from-[#F8FAFC] to-[#F1F5F9] border-t border-[rgba(10,30,60,0.04)]">
                            <Link
                              href="/demande-pret"
                              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#0E2E5C] to-[#153E75] text-white px-5 py-2.5 rounded-lg hover:from-[#153E75] hover:to-[#1A4A80] transition-all duration-300 shadow-md hover:shadow-lg group"
                            >
                              <FileText className="w-3.5 h-3.5" />
                              <span className="font-medium text-sm">{t('common.request_loan_btn')}</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                            </Link>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              
              <button className="hidden lg:flex items-center space-x-2 text-[#64748B] hover:text-[#0A1F3C] transition-colors px-4 py-2 rounded-lg hover:bg-[#F6F8FB]">
                <Search className="w-4 h-4" />
                <span className="text-sm">{t('common.search')}</span>
              </button>
              
              <LanguageSelector />
              
              {isLoggedIn ? (
                <div className="hidden lg:flex items-center space-x-2">
                  <Link href="/dashboard" className="flex items-center space-x-2 bg-[#0E2E5C] text-white px-6 py-3 rounded-lg hover:bg-[#0A1F3C] transition-colors">
                    <BarChart3 className="w-4 h-4" />
                    <span className="text-sm font-medium">{t('navigation.dashboard')}</span>
                  </Link>
                  <button onClick={handleLogout} className="flex items-center space-x-2 bg-red-600/10 text-red-600 px-4 py-3 rounded-lg hover:bg-red-600 hover:text-white transition-colors">
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <Link href="/login" className="hidden lg:flex items-center space-x-2 bg-[#0E2E5C] text-white px-6 py-3 rounded-lg hover:bg-[#0A1F3C] transition-colors">
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium">{t('bank.client_area')}</span>
                </Link>
              )}

              {/* Menu Mobile */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-[#0A1F3C] hover:bg-[#F6F8FB] rounded-lg transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-[rgba(10,30,60,0.08)]"
          >
            <div className="container-institutional py-4">
              <div className="space-y-2">
                {(navigation || []).map((section) => (
                  <div key={section.title}>
                    <button
                      onClick={() => setActiveDropdown(
                        activeDropdown === section.title ? null : section.title
                      )}
                      className="w-full flex items-center justify-between p-4 text-[#0A1F3C] hover:bg-[#F6F8FB] rounded-lg transition-colors"
                    >
                      {section.title === t('common.home') ? section.icon : <span className="font-medium">{section.title}</span>}
                      <ChevronDown className={`w-4 h-4 transition-transform ${
                        activeDropdown === section.title ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === section.title && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pb-4 space-y-1">
                            {(section?.items || []).map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#F6F8FB] transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                <div className="text-[#0E2E5C]">
                                  {item.icon}
                                </div>
                                <div>
                                  <div className="font-medium text-[#0A1F3C]">
                                    {item.title}
                                  </div>
                                  <div className="text-xs text-[#64748B]">
                                    {item.description || 'En savoir plus'}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-[rgba(10,30,60,0.08)] space-y-4">
                {isLoggedIn ? (
                  <>
                    <Link href="/dashboard" className="w-full flex items-center justify-center space-x-2 bg-[#0E2E5C] text-white px-6 py-3 rounded-lg hover:bg-[#0A1F3C] transition-colors" onClick={() => setIsMenuOpen(false)}>
                      <BarChart3 className="w-4 h-4" />
                      <span className="font-medium">{t('navigation.dashboard')}</span>
                    </Link>
                    <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="w-full flex items-center justify-center space-x-2 bg-red-600/10 text-red-600 px-6 py-3 rounded-lg hover:bg-red-600 hover:text-white transition-colors">
                      <LogOut className="w-4 h-4" />
                      <span className="font-medium">{t('common.logout')}</span>
                    </button>
                  </>
                ) : (
                  <Link href="/login" className="w-full flex items-center justify-center space-x-2 bg-[#0E2E5C] text-white px-6 py-3 rounded-lg hover:bg-[#0A1F3C] transition-colors" onClick={() => setIsMenuOpen(false)}>
                    <User className="w-4 h-4" />
                    <span className="font-medium">{t('bank.client_area')}</span>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
