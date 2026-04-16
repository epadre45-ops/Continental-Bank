import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Scale, CheckCircle, AlertCircle, Users, Globe, Lock, FileText, Eye, ChevronRight, ArrowUpRight, Award, Target } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '../lib/i18n';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CompliancePage() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('aml');

  const sections = [
    { id: 'aml', name: t('pages.compliance.section_aml'), icon: <Shield className="w-4 h-4" /> },
    { id: 'kyc', name: t('pages.compliance.section_kyc'), icon: <Users className="w-4 h-4" /> },
    { id: 'sanctions', name: t('pages.compliance.section_sanctions'), icon: <Scale className="w-4 h-4" /> },
    { id: 'training', name: t('pages.compliance.section_training'), icon: <Award className="w-4 h-4" /> },
    { id: 'audit', name: t('pages.compliance.section_audit'), icon: <Eye className="w-4 h-4" /> },
    { id: 'reporting', name: t('pages.compliance.section_reporting'), icon: <FileText className="w-4 h-4" /> }
  ];

  const getSectionContent = (id) => {
    switch (id) {
      case 'aml':
        return (
          <>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#0A1F3C]">{t('pages.compliance.aml_subtitle')}</h3>
            <p className="mb-6 sm:mb-8 text-[#64748B] leading-relaxed text-sm sm:text-base">{t('pages.compliance.aml_desc')}</p>
            
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#0A1F3C]">{t('pages.compliance.aml_detection')}</h3>
            <p className="mb-6 sm:mb-8 text-[#64748B] leading-relaxed text-sm sm:text-base">{t('pages.compliance.aml_detection_desc')}</p>
            
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#0A1F3C]">{t('pages.compliance.aml_reporting')}</h3>
            <p className="mb-6 sm:mb-8 text-[#64748B] leading-relaxed text-sm sm:text-base">{t('pages.compliance.aml_reporting_desc')}</p>
            
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#0A1F3C]">{t('pages.compliance.aml_training')}</h3>
            <p className="mb-6 sm:mb-8 text-[#64748B] leading-relaxed text-sm sm:text-base">{t('pages.compliance.aml_training_desc')}</p>
          </>
        );
      case 'kyc':
        return (
          <>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#0A1F3C]">{t('pages.compliance.kyc_id')}</h3>
            <p className="mb-6 sm:mb-8 text-[#64748B] leading-relaxed text-sm sm:text-base">{t('pages.compliance.kyc_id_desc')}</p>
            
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#0A1F3C]">{t('pages.compliance.kyc_docs')}</h3>
            <p className="mb-6 sm:mb-8 text-[#64748B] leading-relaxed text-sm sm:text-base">{t('pages.compliance.kyc_docs_desc')}</p>
            
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#0A1F3C]">{t('pages.compliance.kyc_risk')}</h3>
            <p className="mb-6 sm:mb-8 text-[#64748B] leading-relaxed text-sm sm:text-base">{t('pages.compliance.kyc_risk_desc')}</p>
            
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#0A1F3C]">{t('pages.compliance.kyc_update')}</h3>
            <p className="mb-6 sm:mb-8 text-[#64748B] leading-relaxed text-sm sm:text-base">{t('pages.compliance.kyc_update_desc')}</p>
          </>
        );
      case 'sanctions':
        return (
          <>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#0A1F3C]">{t('pages.compliance.sanctions_list')}</h3>
            <p className="mb-6 sm:mb-8 text-[#64748B] leading-relaxed text-sm sm:text-base">{t('pages.compliance.sanctions_list_desc')}</p>
            
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#0A1F3C]">{t('pages.compliance.sanctions_auto')}</h3>
            <p className="mb-6 sm:mb-8 text-[#64748B] leading-relaxed text-sm sm:text-base">{t('pages.compliance.sanctions_auto_desc')}</p>
            
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#0A1F3C]">{t('pages.compliance.sanctions_realtime')}</h3>
            <p className="mb-6 sm:mb-8 text-[#64748B] leading-relaxed text-sm sm:text-base">{t('pages.compliance.sanctions_realtime_desc')}</p>
            
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#0A1F3C]">{t('pages.compliance.sanctions_blocking')}</h3>
            <p className="mb-6 sm:mb-8 text-[#64748B] leading-relaxed text-sm sm:text-base">{t('pages.compliance.sanctions_blocking_desc')}</p>
          </>
        );
      case 'training':
        return (
          <>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#0A1F3C]">{t('pages.compliance.training_prog')}</h3>
            <p className="mb-6 sm:mb-8 text-[#64748B] leading-relaxed text-sm sm:text-base">{t('pages.compliance.training_prog_desc')}</p>
            
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#0A1F3C]">{t('pages.compliance.training_modules')}</h3>
            <p className="mb-6 sm:mb-8 text-[#64748B] leading-relaxed text-sm sm:text-base">{t('pages.compliance.training_modules_desc')}</p>
            
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#0A1F3C]">{t('pages.compliance.training_cert')}</h3>
            <p className="mb-6 sm:mb-8 text-[#64748B] leading-relaxed text-sm sm:text-base">{t('pages.compliance.training_cert_desc')}</p>
            
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#0A1F3C]">{t('pages.compliance.training_reg')}</h3>
            <p className="mb-6 sm:mb-8 text-[#64748B] leading-relaxed text-sm sm:text-base">{t('pages.compliance.training_reg_desc')}</p>
          </>
        );
      case 'audit':
        return (
          <>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#0A1F3C]">{t('pages.compliance.audit_semi')}</h3>
            <p className="mb-6 sm:mb-8 text-[#64748B] leading-relaxed text-sm sm:text-base">{t('pages.compliance.audit_semi_desc')}</p>
            
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#0A1F3C]">{t('pages.compliance.audit_ext')}</h3>
            <p className="mb-6 sm:mb-8 text-[#64748B] leading-relaxed text-sm sm:text-base">{t('pages.compliance.audit_ext_desc')}</p>
            
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#0A1F3C]">{t('pages.compliance.audit_pen')}</h3>
            <p className="mb-6 sm:mb-8 text-[#64748B] leading-relaxed text-sm sm:text-base">{t('pages.compliance.audit_pen_desc')}</p>
          </>
        );
      case 'reporting':
        return (
          <>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#0A1F3C]">{t('pages.compliance.reporting_reg')}</h3>
            <p className="mb-6 sm:mb-8 text-[#64748B] leading-relaxed text-sm sm:text-base">{t('pages.compliance.reporting_reg_desc')}</p>
            
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#0A1F3C]">{t('pages.compliance.reporting_trans')}</h3>
            <p className="mb-6 sm:mb-8 text-[#64748B] leading-relaxed text-sm sm:text-base">{t('pages.compliance.reporting_trans_desc')}</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Ultra Premium */}
      <section className="section-institutional-navy pt-20 md:pt-24 lg:pt-32 relative overflow-hidden">
        {/* Premium Background with Multiple Layers */}
        <div className="absolute inset-0">
          {/* Main Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=1080&fit=crop&auto=format&q=95"
            srcSet="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=640&h=480&fit=crop&auto=format&q=95 640w,
                    https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=768&h=576&fit=crop&auto=format&q=95 768w,
                    https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1024&h=768&fit=crop&auto=format&q=95 1024w,
                    https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=1080&fit=crop&auto=format&q=95 1920w"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            alt="Compliance center"
            className="w-full h-full object-cover"
          />
          
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

        <div className="relative z-10 container-institutional">
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
              <span className="text-xs sm:text-sm font-medium text-white tracking-wide">{t('pages.compliance.hero_tag')}</span>
            </motion.div>
            
            {/* Premium Title with Gradient Text */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t('pages.compliance.hero_title')}
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
              {t('pages.compliance.hero_subtitle')}
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
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">37301</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">SOC</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Type II</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">100%</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Monitoring</div>
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

      {/* Navigation Sub-menu */}
      <nav className="bg-white border-b border-[rgba(10,30,60,0.08)] sticky top-20 z-40 overflow-x-auto shadow-sm">
        <div className="container-institutional">
          <div className="flex space-x-4 sm:space-x-8">
            {(sections || []).map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 py-4 sm:py-6 border-b-2 transition-all whitespace-nowrap ${
                  activeSection === section.id 
                    ? 'border-[#0E2E5C] text-[#0E2E5C] font-bold' 
                    : 'border-transparent text-[#64748B] hover:text-[#0A1F3C]'
                }`}
              >
                {section.icon}
                <span className="text-[10px] sm:text-xs uppercase tracking-widest">{section.name}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content Sections */}
      <section className="section-institutional-white">
        <div className="container-institutional">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#F6F8FB] p-8 sm:p-12 md:p-16 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] border border-[rgba(10,30,60,0.05)] shadow-sm"
              >
                <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8 md:mb-10 pb-4 sm:pb-6 border-b border-[rgba(10,30,60,0.08)]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0E2E5C] rounded-xl flex items-center justify-center text-white shadow-lg">
                    {sections.find(s => s.id === activeSection)?.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1F3C]">
                      {sections.find(s => s.id === activeSection)?.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#64748B] font-medium">Last Updated: 15 January 2024</p>
                  </div>
                </div>
                
                <div className="prose prose-slate max-w-none prose-h3:text-[#0A1F3C] prose-p:text-[#64748B] prose-p:leading-relaxed">
                  {getSectionContent(activeSection)}
                </div>

                <div className="mt-8 sm:mt-12 flex space-x-3 sm:space-x-4">
                  <button className="btn-institutional-primary px-6 sm:px-8 flex items-center">
                    Download Policy
                    <ArrowUpRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                  <button className="btn-institutional-secondary px-6 sm:px-8 border-[rgba(10,30,60,0.1)] text-[#0A1F3C] hover:bg-white shadow-sm">
                    Print Version
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="bg-[#0A1F3C] p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                <Shield className="absolute top-6 right-6 sm:top-8 sm:right-8 md:top-10 md:right-10 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 text-white/5 group-hover:scale-110 transition-transform duration-1000" />
                <h3 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 border-b border-white/10 pb-3 sm:pb-4 relative z-10">Certification</h3>
                <div className="space-y-4 sm:space-y-6 relative z-10">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <Award className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-sm sm:text-base">ISO 37301</p>
                      <p className="text-[10px] sm:text-xs text-white/50 tracking-widest uppercase">Compliance Management</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <Lock className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-sm sm:text-base">SOC 2 Type II</p>
                      <p className="text-[10px] sm:text-xs text-white/50 tracking-widest uppercase">Internal Controls</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem] border border-[rgba(10,30,60,0.08)] shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold text-[#0A1F3C] mb-6 sm:mb-8 border-b border-slate-100 pb-3 sm:pb-4">Quick Links</h3>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { label: 'Ethics Hotline', link: '/contact' },
                    { label: 'Reporting Portal', link: '#' },
                    { label: 'Public Disclosures', link: '#' },
                    { label: 'Legal Documents', link: '/legal-documents' }
                  ].map((item, i) => (
                    <Link key={i} href={item.link} className="flex items-center justify-between p-3 sm:p-4 bg-[#F6F8FB] rounded-xl hover:bg-[#0E2E5C] hover:text-white transition-all group">
                      <span className="font-bold text-xs sm:text-sm">{item.label}</span>
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#94A3B8] group-hover:text-white" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-[#F8FAFC] p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem] border border-slate-200">
                <Target className="w-8 h-8 sm:w-10 sm:h-10 text-[#D4AF37] mb-4 sm:mb-6" />
                <h4 className="font-bold text-[#0A1F3C] mb-3 sm:mb-4 text-sm sm:text-base">Integrity Guarantee</h4>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Our zero-tolerance policy ensures that all transactions and relationships comply with the highest ethical and regulatory standards.
                </p>
              </div>
            </div>
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
                {t('pages.compliance.cta_title')}
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
                className="text-base sm:text-lg lg:text-xl text-[#64748B] mb-10 sm:mb-14 max-w-3xl mx-auto leading-relaxed font-light"
              >
                {t('pages.compliance.cta_subtitle')}
              </motion.p>

              {/* Premium Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
              >
                <button className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-[#0E2E5C] to-[#153E75] text-white rounded-full font-medium text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>{t('pages.compliance.view_report')}</span>
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-transform" />
                </button>
                <Link 
                  href="/contact" 
                  className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-white text-[#0E2E5C] border-2 border-[#0E2E5C] rounded-full font-medium text-base sm:text-lg hover:bg-[#0E2E5C] hover:text-white transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
                >
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>{t('pages.compliance.contact_team')}</span>
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
