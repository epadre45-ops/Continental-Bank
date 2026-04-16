import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin,
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ChevronUp,
  Shield,
  Globe
} from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '../lib/i18n';

export default function Footer() {
  const { t } = useTranslation();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#0A1F3C] via-[#0E2E5C] to-[#153E75] text-white w-full overflow-hidden">
      {/* Premium Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F3C]/95 via-transparent to-[#0E2E5C]/70"></div>
        
        {/* Decorative Light Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C7CCD6]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E8D8C3]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0E2E5C]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Premium Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C7CCD6]/20 to-transparent"></div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section */}
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 mx-auto py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-12 lg:mb-16">
            {/* Brand Section - Premium */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 sm:space-x-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E8D8C3] to-[#C7CCD6] rounded-full blur-xl opacity-50"></div>
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#0E2E5C] to-[#153E75] rounded-2xl flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg">
                    CB
                  </div>
                </div>
                <div>
                  <motion.h3 
                    className="text-xl sm:text-2xl font-bold"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {t('common.bank_name_full')}
                  </motion.h3>
                  <p className="text-[#C7CCD6] text-xs sm:text-sm tracking-wider">{t('common.bank_name')}</p>
                </div>
              </div>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-[#94A3B8] text-sm leading-relaxed mb-6"
              >
                {t('home.subtitle')} {t('home.since')} 1875. Excellence institutionnelle depuis près d'un siècle et demi.
              </motion.p>

              {/* Social Links - Premium */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex space-x-3"
              >
                {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Social) => (
                  <motion.a
                    key={Social.name}
                    href="#"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 sm:w-11 sm:h-11 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 hover:border-[#E8D8C3]/50 transition-all duration-300 group"
                  >
                    <Social className="w-4 h-4 sm:w-5 sm:h-5 text-[#94A3B8] group-hover:text-[#E8D8C3] transition-colors" />
                  </motion.a>
                ))}
              </motion.div>

              {/* Premium Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-6 inline-flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
              >
                <Shield className="w-4 h-4 text-[#E8D8C3]" />
                <span className="text-xs text-[#C7CCD6]">Certifié ACPR</span>
              </motion.div>
            </motion.div>

            {/* Navigation Sections */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* About */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.h4 
                    className="text-base sm:text-lg font-semibold mb-4 sm:mb-5"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {t('footer.about')}
                  </motion.h4>
                  <ul className="space-y-3">
                    {([
                      { href: '/institution', label: t('footer.our_institution') },
                      { href: '/governance', label: t('footer.governance') },
                      { href: '/strategy', label: t('footer.strategy') },
                      { href: '/contact', label: t('common.contact') },
                    ] || []).map((link, index) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Link 
                          href={link.href}
                          className="text-[#94A3B8] hover:text-[#E8D8C3] transition-colors duration-300 text-sm inline-flex items-center group"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Services */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.h4 
                    className="text-base sm:text-lg font-semibold mb-4 sm:mb-5"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {t('navigation.services')}
                  </motion.h4>
                  <ul className="space-y-3">
                    {([
                      { href: '/entreprises', label: t('footer.corporate_banking') },
                      { href: '/wealth-management', label: t('footer.wealth_management') },
                      { href: '/markets', label: t('footer.financial_markets') },
                      { href: '/credit-products', label: t('footer.credit_products') },
                    ] || []).map((link, index) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Link 
                          href={link.href}
                          className="text-[#94A3B8] hover:text-[#E8D8C3] transition-colors duration-300 text-sm inline-flex items-center group"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Contact */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.h4 
                    className="text-base sm:text-lg font-semibold mb-4 sm:mb-5"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {t('navigation.contact')}
                  </motion.h4>
                  <div className="space-y-4">
                    {([
                      { icon: Phone, label: t('common.phone') },
                      { icon: Mail, label: t('common.email') },
                      { icon: MapPin, label: t('common.address') },
                    ] || []).map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-[#E8D8C3]/30 transition-all duration-300 group"
                      >
                        <div className="w-8 h-8 bg-[#0E2E5C] rounded-lg flex items-center justify-center group-hover:bg-[#153E75] transition-colors">
                          <item.icon className="w-4 h-4 text-[#E8D8C3]" />
                        </div>
                        <span className="text-sm text-[#94A3B8] group-hover:text-white transition-colors">{item.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Premium Divider */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '100%' }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-[#C7CCD6]/30 to-transparent mb-10 md:mb-12"
          ></motion.div>

          {/* Legal Information - Premium Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
            >
              <motion.h4 
                className="text-base sm:text-lg font-semibold mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {t('common.bank_name_full')} SA
              </motion.h4>
              <div className="space-y-2 text-sm text-[#94A3B8]">
                <p>{t('footer.address_label')} : {t('common.address_full')}</p>
                <p>{t('footer.rcs')}</p>
                <p>{t('footer.capital')}</p>
                <p>{t('footer.siret')}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
            >
              <motion.h4 
                className="text-base sm:text-lg font-semibold mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {t('footer.supervision_title')}
              </motion.h4>
              <div className="space-y-2 text-sm text-[#94A3B8]">
                <p>{t('footer.acpr')}</p>
                <p>{t('footer.regafi')}</p>
                <p>{t('footer.orias')}</p>
                <p>{t('footer.fond_garantie')}</p>
                <p>{t('footer.deposit_limit')}</p>
              </div>
            </motion.div>
          </div>

          {/* Legal Links - Premium Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12">
            {[
              { title: t('navigation.legal'), links: [
                { href: '/terms', label: t('navigation.terms') },
                { href: '/privacy', label: t('navigation.privacy') },
                { href: '/cookies', label: t('navigation.cookies') },
              ]},
              { title: t('common.services'), links: [
                { href: '/credit-products', label: t('navigation.credit_products') },
                { href: '/loan-calculator', label: t('navigation.loan_calculator') },
                { href: '/wealth-management', label: t('navigation.wealth_management') },
              ]},
              { title: t('navigation.customer_support'), links: [
                { href: '/faq', label: t('common.faq') },
                { href: '/contact', label: t('common.contact') },
                { href: '/careers', label: t('bank.careers') },
              ]},
              { title: t('navigation.compliance'), links: [
                { href: '/regulatory-approvals', label: t('navigation.legal_documents') },
                { href: '/compliance', label: t('navigation.compliance') },
                { href: '/security', label: t('navigation.security') },
              ]},
            ].map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + sectionIndex * 0.1 }}
                viewport={{ once: true }}
                className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-[#E8D8C3]/30 transition-all duration-300"
              >
                <h5 className="font-semibold mb-3 text-sm text-[#E8D8C3]">{section.title}</h5>
                <ul className="space-y-2">
                  {(section?.links || []).map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href}
                        className="text-[#94A3B8] hover:text-white transition-colors duration-300 text-xs inline-flex items-center group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar - Premium */}
        <div className="border-t border-white/10 bg-[#0A1F3C]/50 backdrop-blur-sm">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 mx-auto py-6 sm:py-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            >
              <div className="text-center md:text-left">
                <p className="text-sm text-[#94A3B8]">
                  &copy; 2024 {t('common.bank_name_full')} SA. {t('common.all_rights_reserved')}.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
                  <Link href="/terms" className="text-xs text-[#64748B] hover:text-[#E8D8C3] transition-colors">{t('navigation.terms')}</Link>
                  <span className="text-xs text-[#64748B]">|</span>
                  <Link href="/privacy" className="text-xs text-[#64748B] hover:text-[#E8D8C3] transition-colors">{t('navigation.privacy')}</Link>
                  <span className="text-xs text-[#64748B]">|</span>
                  <Link href="/cookies" className="text-xs text-[#64748B] hover:text-[#E8D8C3] transition-colors">{t('navigation.cookies')}</Link>
                </div>
              </div>

              {/* Language Selector - Premium */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
              >
                <Globe className="w-4 h-4 text-[#E8D8C3]" />
                <select className="bg-transparent border-none focus:outline-none text-[#94A3B8] text-sm cursor-pointer hover:text-white transition-colors">
                  <option value="fr" className="bg-[#0A1F3C]">Français</option>
                  <option value="en" className="bg-[#0A1F3C]">English</option>
                  <option value="de" className="bg-[#0A1F3C]">Deutsch</option>
                </select>
              </motion.div>
            </motion.div>

            {/* Credit Warning - Premium */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center md:text-right text-xs text-[#64748B] mt-4 pt-4 border-t border-white/5"
            >
              {t('footer.credit_warning')}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Back to Top Button - Premium */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-6 sm:bottom-8 right-4 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#0E2E5C] to-[#153E75] text-white rounded-2xl shadow-2xl flex items-center justify-center hover:shadow-[#0E2E5C]/30 transition-all duration-300 border border-white/20 backdrop-blur-sm"
            aria-label="Back to top"
          >
            <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
