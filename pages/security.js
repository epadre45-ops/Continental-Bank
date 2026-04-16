import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  EyeOff, 
  AlertTriangle, 
  CheckCircle, 
  Smartphone, 
  Fingerprint, 
  Key, 
  Clock, 
  Globe, 
  Users, 
  FileText, 
  Download, 
  Phone, 
  Mail, 
  AlertCircle,
  ArrowUpRight,
  Award,
  Target,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '../lib/i18n';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SecurityPage() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', name: t('pages.security.overview_title'), icon: <Shield className="w-4 h-4" /> },
    { id: 'protection', name: t('pages.security.tab_encryption'), icon: <Lock className="w-4 h-4" /> },
    { id: 'fraud', name: t('pages.security.threats_title'), icon: <AlertTriangle className="w-4 h-4" /> },
    { id: 'tips', name: t('pages.security.certifications_title'), icon: <CheckCircle className="w-4 h-4" /> },
    { id: 'incident', name: t('pages.security.report_incident'), icon: <AlertCircle className="w-4 h-4" /> }
  ];

  const securityFeatures = [
    {
      title: t('pages.security.feat_encryption'),
      description: t('pages.security.feat_encryption_desc'),
      icon: <Lock className="w-6 h-6" />,
      status: 'active'
    },
    {
      title: t('pages.security.feat_biometric'),
      description: t('pages.security.feat_biometric_desc'),
      icon: <Fingerprint className="w-6 h-6" />,
      status: 'active'
    },
    {
      title: t('pages.security.feat_monitoring'),
      description: t('pages.security.feat_monitoring_desc'),
      icon: <Eye className="w-6 h-6" />,
      status: 'active'
    },
    {
      title: t('pages.security.feat_ai'),
      description: t('pages.security.feat_ai_desc'),
      icon: <Target className="w-6 h-6" />,
      status: 'active'
    }
  ];

  const fraudPrevention = [
    {
      type: t('pages.security.fraud_phishing'),
      description: t('pages.security.fraud_phishing_desc'),
      prevention: t('pages.security.fraud_phishing_prev'),
      icon: <Mail className="w-6 h-6" />
    },
    {
      type: t('pages.security.fraud_vishing'),
      description: t('pages.security.fraud_vishing_desc'),
      prevention: t('pages.security.fraud_vishing_prev'),
      icon: <Phone className="w-6 h-6" />
    },
    {
      type: t('pages.security.fraud_carding'),
      description: t('pages.security.fraud_carding_desc'),
      prevention: t('pages.security.fraud_carding_prev'),
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      type: t('pages.security.fraud_ceo'),
      description: t('pages.security.fraud_ceo_desc'),
      prevention: t('pages.security.fraud_ceo_prev'),
      icon: <Users className="w-6 h-6" />
    }
  ];

  const securityTips = [
    {
      category: t('pages.security.tips_passwords'),
      tips: t('pages.security.tips_passwords_items') || []
    },
    {
      category: t('pages.security.tips_devices'),
      tips: t('pages.security.tips_devices_items') || []
    },
    {
      category: t('pages.security.tips_browsing'),
      tips: t('pages.security.tips_browsing_items') || []
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Ultra Premium */}
      <section className="section-institutional-navy pt-20 md:pt-24 lg:pt-32 relative overflow-hidden">
        {/* Premium Background with Multiple Layers */}
        <div className="absolute inset-0">
          {/* Main Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=1080&fit=crop&auto=format&q=95"
            srcSet="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=640&h=480&fit=crop&auto=format&q=95 640w,
                    https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=768&h=576&fit=crop&auto=format&q=95 768w,
                    https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1024&h=768&fit=crop&auto=format&q=95 1024w,
                    https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=1080&fit=crop&auto=format&q=95 1920w"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            alt="Security operations center"
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
              <span className="text-xs sm:text-sm font-medium text-white tracking-wide">{t('pages.security.hero_tag')}</span>
            </motion.div>
            
            {/* Premium Title with Gradient Text */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t('pages.security.hero_title')}
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
              {t('pages.security.hero_subtitle')}
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
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">AES</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">256-bit</div>
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
          {activeSection === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-24">
                <div>
                  <h2 className="h2-institutional mb-6">{t('pages.security.overview_title')}</h2>
                  <p className="body-institutional-lg text-[#64748B] mb-8">
                    {t('pages.security.overview_subtitle')}
                  </p>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-[#F6F8FB] rounded-xl border border-[rgba(10,30,60,0.05)]">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
                      <p className="font-medium text-[#0A1F3C] text-sm sm:text-base">ISO 27001 Certified Infrastructure</p>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-[#F6F8FB] rounded-xl border border-[rgba(10,30,60,0.05)]">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
                      <p className="font-medium text-[#0A1F3C] text-sm sm:text-base">Strict GDPR Compliance</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {(securityFeatures || []).map((feature) => (
                    <div key={feature.title} className="card-institutional p-4 sm:p-6 hover:shadow-xl transition-all">
                      <div className="text-[#0E2E5C] mb-3 sm:mb-4">{feature.icon}</div>
                      <h4 className="font-bold text-[#0A1F3C] mb-1.5 sm:mb-2 text-sm sm:text-base">{feature.title}</h4>
                      <p className="text-xs sm:text-sm text-[#64748B]">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'protection' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="py-8 sm:py-12"
            >
              <div className="bg-[#0A1F3C] p-8 sm:p-12 md:p-16 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] text-white relative overflow-hidden group">
                <Shield className="absolute top-6 right-6 sm:top-8 sm:right-8 md:top-10 md:right-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 text-white/5 group-hover:scale-110 transition-transform duration-1000" />
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">Data Protection Guarantee</h2>
                    <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-6 sm:mb-8 md:mb-10">
                      Your data is stored in ultra-secure Tier 4 data centres in Germany and Luxembourg, benefiting from the highest level of European protection.
                    </p>
                    <ul className="space-y-3 sm:space-y-4">
                      {['Quantum-resistant encryption', 'Physical hardware security modules', 'Strict access control', 'Encrypted backups'].map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2 sm:space-x-3 text-white/90">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                          <span className="text-sm sm:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 border-2 sm:border-3 md:border-4 border-white/20 rounded-full flex items-center justify-center relative">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-t-2 sm:border-t-3 md:border-t-4 border-blue-400 rounded-full"
                      />
                      <Lock className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'fraud' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
            >
              {(fraudPrevention || []).map((fraud) => (
                <div key={fraud.type} className="card-institutional-elevated p-6 sm:p-8 md:p-10 group hover:border-[#0E2E5C]">
                  <div className="text-[#0E2E5C] mb-4 sm:mb-6 md:mb-8 group-hover:scale-110 transition-transform">{fraud.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0A1F3C] mb-2 sm:mb-4">{fraud.type}</h3>
                  <p className="text-[#64748B] mb-4 sm:mb-6 md:mb-8 h-16 sm:h-20 text-sm sm:text-base">{fraud.description}</p>
                  <div className="bg-[#F6F8FB] p-4 sm:p-6 rounded-2xl border-l-4 border-[#D4AF37]">
                    <p className="text-xs sm:text-sm font-bold text-[#0A1F3C] mb-1.5 sm:mb-2 uppercase tracking-widest">How to prevent:</p>
                    <p className="text-[#64748B] italic text-xs sm:text-sm">{fraud.prevention}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeSection === 'tips' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {(securityTips || []).map((group, index) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-sm border border-[rgba(10,30,60,0.08)]"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-[#0A1F3C] mb-6 sm:mb-8 flex items-center">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-[#D4AF37]" />
                    {group.category}
                  </h3>
                  <ul className="space-y-4 sm:space-y-6">
                    {(group?.tips || []).map((tip, idx) => (
                      <li key={idx} className="flex items-start space-x-3 sm:space-x-4">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#0E2E5C] mt-0.5 sm:mt-1 flex-shrink-0" />
                        <span className="text-[#64748B] leading-relaxed text-xs sm:text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          )}

          {activeSection === 'incident' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <h2 className="h2-institutional mb-4 sm:mb-6">{t('pages.security.report_incident')}</h2>
                <div className="divider-institutional-gradient w-16 sm:w-20 md:w-24 mx-auto mb-6 sm:mb-8"></div>
                <p className="body-institutional text-[#64748B] text-sm sm:text-base">
                  Report any suspicious activity or security issue immediately.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 md:mb-16">
                <div className="bg-[#FFF5F5] p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-red-100 flex items-center space-x-4 sm:space-x-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-[#0A1F3C]">Emergency Hotline</h4>
                    <p className="text-red-600 font-bold text-xl sm:text-2xl">0800 123 456</p>
                    <p className="text-xs sm:text-sm text-[#64748B]">Available 24/7 - Free Call</p>
                  </div>
                </div>
                <div className="bg-[#F8FAFC] p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-slate-200 flex items-center space-x-4 sm:space-x-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#0E2E5C] rounded-2xl flex items-center justify-center text-white">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-[#0A1F3C]">Security Email</h4>
                    <p className="text-[#0E2E5C] font-bold text-xl sm:text-2xl underline">security@bank.com</p>
                    <p className="text-xs sm:text-sm text-[#64748B]">Response within 15 minutes</p>
                  </div>
                </div>
              </div>

              <form className="bg-[#F6F8FB] p-8 sm:p-10 md:p-12 rounded-xl sm:rounded-2xl border border-[rgba(10,30,60,0.08)]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#0A1F3C] mb-2 sm:mb-3 uppercase tracking-widest">Type of Incident</label>
                    <select className="w-full bg-white border border-[rgba(10,30,60,0.1)] rounded-xl px-4 sm:px-6 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-[#0E2E5C] text-sm sm:text-base">
                      <option>Suspicious Transaction</option>
                      <option>Phishing Attempt</option>
                      <option>Lost/Stolen Card</option>
                      <option>Account Access Issue</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#0A1F3C] mb-2 sm:mb-3 uppercase tracking-widest">Urgency Level</label>
                    <select className="w-full bg-white border border-[rgba(10,30,60,0.1)] rounded-xl px-4 sm:px-6 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-[#0E2E5C] text-sm sm:text-base">
                      <option>High - Immediate threat</option>
                      <option>Medium - Suspicious activity</option>
                      <option>Low - Informational</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6 sm:mb-8">
                  <label className="block text-xs sm:text-sm font-bold text-[#0A1F3C] mb-2 sm:mb-3 uppercase tracking-widest">Description</label>
                  <textarea rows="4" className="w-full bg-white border border-[rgba(10,30,60,0.1)] rounded-xl px-4 sm:px-6 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-[#0E2E5C] text-sm sm:text-base"></textarea>
                </div>
                <button className="btn-institutional-primary w-full py-4 sm:py-5 text-lg sm:text-xl font-bold">
                  Submit Secure Report
                </button>
              </form>
            </motion.div>
          )}
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
                {t('pages.security.contact_title')}
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
                {t('pages.security.contact_subtitle')}
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
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>{t('pages.security.report_incident')}</span>
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-transform" />
                </button>
                <button className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-white text-[#0E2E5C] border-2 border-[#0E2E5C] rounded-full font-medium text-base sm:text-lg hover:bg-[#0E2E5C] hover:text-white transition-all duration-300 hover:-translate-y-1 flex items-center gap-3">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>Security Guide PDF</span>
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
