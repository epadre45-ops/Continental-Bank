import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Server, 
  CheckCircle, 
  Globe, 
  AlertCircle,
  FileText,
  BadgeAlert,
  Fingerprint,
  Download,
  Eye,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '../lib/i18n';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TrustCenterPage() {
  const { t } = useTranslation();

  const trustPillars = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: t('pages.legal_documents.pillar_1_title'),
      description: t('pages.legal_documents.pillar_1_desc'),
    },
    {
      icon: <Lock className="w-8 h-8 text-blue-600" />,
      title: t('pages.legal_documents.pillar_2_title'),
      description: t('pages.legal_documents.pillar_2_desc'),
    },
    {
      icon: <Fingerprint className="w-8 h-8 text-blue-600" />,
      title: t('pages.legal_documents.pillar_3_title'),
      description: t('pages.legal_documents.pillar_3_desc'),
    },
    {
      icon: <Server className="w-8 h-8 text-blue-600" />,
      title: t('pages.legal_documents.pillar_4_title'),
      description: t('pages.legal_documents.pillar_4_desc'),
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: t('pages.legal_documents.pillar_5_title'),
      description: t('pages.legal_documents.pillar_5_desc'),
    },
    {
      icon: <BadgeAlert className="w-8 h-8 text-blue-600" />,
      title: t('pages.legal_documents.pillar_6_title'),
      description: t('pages.legal_documents.pillar_6_desc'),
    }
  ];

  const documents = [
    { title: t('pages.legal_documents.doc_terms'), size: '245 KB', category: 'General' },
    { title: t('pages.legal_documents.doc_privacy'), size: '182 KB', category: 'Privacy' },
    { title: t('pages.legal_documents.doc_cookies'), size: '95 KB', category: 'Privacy' },
    { title: t('pages.legal_documents.doc_aml'), size: '1.2 MB', category: 'Compliance' },
    { title: t('pages.legal_documents.doc_mifid'), size: '840 KB', category: 'Regulatory' },
    { title: t('pages.legal_documents.doc_protection'), size: '310 KB', category: 'Investor' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      
      {/* Hero Section - Ultra Premium */}
      <section className="pt-32 pb-20 bg-[#0A1F3C] relative overflow-hidden">
        {/* Premium Background with Multiple Layers */}
        <div className="absolute inset-0">
          {/* Radial Grid Pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4f85e5 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          
          {/* Premium Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F3C]/95 via-[#0E2E5C]/85 to-[#153E75]/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F3C]/98 via-transparent to-[#0A1F3C]/60"></div>
          
          {/* Decorative Light Effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C7CCD6]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E8D8C3]/10 rounded-full blur-3xl"></div>
        </div>

        {/* Premium Decorative Lines */}
        <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C7CCD6]/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C7CCD6]/30 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/15 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full mb-6 sm:mb-8 backdrop-blur-xl border border-white/20 shadow-2xl"
            >
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8D8C3]" />
              <span className="text-xs sm:text-sm font-medium text-white tracking-wide">{t('pages.legal_documents.hero_tag')}</span>
            </motion.div>
            
            {/* Premium Title with Gradient Text */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t('pages.legal_documents.hero_title')}
            </motion.h1>
            
            {/* Premium Divider with Glow Effect */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "120px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 mx-auto mb-8 sm:mb-10 bg-gradient-to-r from-transparent via-[#E8D8C3] to-transparent rounded-full shadow-lg"
            ></motion.div>
            
            {/* Premium Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light"
            >
              {t('pages.legal_documents.hero_subtitle')}
            </motion.p>

            {/* Premium Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-10 sm:mt-12"
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">ISO</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">27001</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">GDPR</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">PCI</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">DSS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">SOC</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Type II</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[#E8D8C3] rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Trust Badges Strip */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center space-x-3 text-gray-800 font-bold text-xl">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <span>{t('pages.legal_documents.badge_tuv')}</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-800 font-bold text-xl">
              <Lock className="w-6 h-6 text-blue-600" />
              <span>{t('pages.legal_documents.badge_iso')}</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-800 font-bold text-xl">
              <Shield className="w-6 h-6 text-indigo-600" />
              <span>{t('pages.legal_documents.badge_pci')}</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-800 font-bold text-xl">
              <Globe className="w-6 h-6 text-blue-400" />
              <span>{t('pages.legal_documents.badge_gdpr')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Security Pillars Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {(trustPillars || []).map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="mb-6 p-4 bg-blue-50 rounded-2xl inline-block group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Library Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('pages.legal_documents.docs_title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('pages.legal_documents.docs_subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {(documents || []).map((doc) => (
              <div key={doc.title} className="bg-white p-6 rounded-2xl border border-gray-200 flex items-center justify-between hover:border-blue-300 hover:shadow-md transition-all group">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gray-100 rounded-xl group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{doc.title}</h4>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">{doc.category} • {doc.size}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors" title={t('pages.legal_documents.doc_view')}>
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors" title={t('pages.legal_documents.doc_download')}>
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Ultra Premium */}
      <section className="section-institutional-stratified w-full relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0E2E5C]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E8D8C3]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Premium Glass Card */}
            <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 lg:p-20 max-w-5xl mx-auto border border-white/40 shadow-2xl overflow-hidden">
              {/* Premium Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0E2E5C] via-[#E8D8C3] to-[#0E2E5C]"></div>
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#E8D8C3]/20 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-br from-[#0E2E5C]/10 to-transparent rounded-full blur-2xl"></div>

              {/* Premium Header */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="font-primary text-2xl sm:text-3xl lg:text-5xl font-bold text-[#0A1F3C] mb-6 sm:mb-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {t('pages.legal_documents.cta_title')}
              </motion.h2>
              
              {/* Premium Divider */}
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "100px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-1 mx-auto mb-8 sm:mb-10 bg-gradient-to-r from-transparent via-[#0E2E5C] to-transparent rounded-full"
              ></motion.div>
              
              {/* Premium Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-base sm:text-lg lg:text-xl text-[#64748B] mb-10 sm:mb-14 max-w-3xl mx-auto leading-relaxed font-light italic"
              >
                "{t('pages.legal_documents.cta_subtitle')}"
              </motion.p>

              {/* Premium Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
              >
                <Link href="/contact" className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-[#0E2E5C] to-[#153E75] text-white rounded-full font-medium text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3">
                  <BadgeAlert className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>{t('pages.legal_documents.cta_contact')}</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-white text-[#0E2E5C] border-2 border-[#0E2E5C] rounded-full font-medium text-base sm:text-lg hover:bg-[#0E2E5C] hover:text-white transition-all duration-300 hover:-translate-y-1 flex items-center gap-3">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>Compliance Report 2024</span>
                  <Download className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-y-1 transition-transform" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
