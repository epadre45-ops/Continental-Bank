import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Scale, CheckCircle, Award, Building, FileText, Globe, Users, AlertCircle, Star, TrendingUp, Target, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '../lib/i18n';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RegulatoryApprovalsPage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('approvals');

  const approvals = [
    {
      authority: 'ACPR',
      name: t('pages.regulatory_approvals.app_acpr'),
      logo: '🏛️',
      number: 'ACPR-2023-01234',
      status: 'active',
      description: t('pages.regulatory_approvals.app_acpr_desc'),
      date: '15 March 2023',
      scope: 'Full banking activities'
    },
    {
      authority: 'BANQUE DE FRANCE',
      name: t('pages.regulatory_approvals.app_bdf'),
      logo: '🇫🇷',
      number: 'REGAFI-2023-04567',
      status: 'active',
      description: t('pages.regulatory_approvals.app_bdf_desc'),
      date: '20 March 2023',
      scope: 'Banking intermediation'
    },
    {
      authority: 'ORIAS',
      name: t('pages.regulatory_approvals.app_orias'),
      logo: '📋',
      number: 'ORIAS-23056789',
      status: 'active',
      description: t('pages.regulatory_approvals.app_orias_desc'),
      date: '10 March 2023',
      scope: 'Insurance distribution'
    },
    {
      authority: 'AMF',
      name: t('pages.regulatory_approvals.app_amf'),
      logo: '📈',
      number: 'AMF-2023-07890',
      status: 'active',
      description: t('pages.regulatory_approvals.app_amf_desc'),
      date: '25 March 2023',
      scope: 'Portfolio management'
    }
  ];

  const legalInfo = {
    company: {
      name: 'CONTINENTAL BANK SA',
      status: t('pages.regulatory_approvals.legal_public_limited'),
      capital: '€50,000,000',
      rcs: 'RCS Munich 892 345 678',
      siret: '892 345 678 00012',
      address: 'Kardinal-Faulhaber-Straße 12, 80333 Munich, Germany',
      phone: '+43 1512 4976020',
      email: 'contact@continental-bank.de'
    },
    directors: [
      { name: 'FERDINANDO ROMANI', position: t('pages.regulatory_approvals.director_ceo') },
      { name: 'Marie Laurent', position: t('pages.regulatory_approvals.director_chairman') },
      { name: 'Pierre Martin', position: t('pages.regulatory_approvals.director_cfo') },
      { name: 'Sophie Bernard', position: t('pages.regulatory_approvals.director_cro') }
    ],
    guarantees: [
      { type: 'FGDR', amount: '€100,000', description: t('pages.regulatory_approvals.guarantee_deposit') },
      { type: 'Life Insurance', amount: '€70,000', description: t('pages.regulatory_approvals.guarantee_life') },
      { type: 'Securitization', amount: 'Unlimited', description: t('pages.regulatory_approvals.guarantee_securitization') }
    ]
  };

  const compliance = {
    frameworks: [
      'Basel III',
      'Solvency II',
      'MiFID II',
      'GDPR',
      'Dodd-Frank',
      'EMIR'
    ],
    certifications: [
      'ISO 27001 - Information Security',
      'ISO 9001 - Quality Management',
      'ISO 37301 - Compliance',
      'SOC 2 Type II - Internal Controls'
    ]
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
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&h=1080&fit=crop&auto=format&q=95"
            srcSet="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=640&h=480&fit=crop&auto=format&q=95 640w,
                    https://images.unsplash.com/photo-1563986768609-322da13575f3?w=768&h=576&fit=crop&auto=format&q=95 768w,
                    https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1024&h=768&fit=crop&auto=format&q=95 1024w,
                    https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&h=1080&fit=crop&auto=format&q=95 1920w"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            alt="Regulatory compliance"
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
              <span className="text-xs sm:text-sm font-medium text-white tracking-wide">{t('pages.regulatory_approvals.hero_tag')}</span>
            </motion.div>
            
            {/* Premium Title with Gradient Text */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t('pages.regulatory_approvals.hero_title')}
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
              {t('pages.regulatory_approvals.hero_subtitle')}
            </motion.p>

            {/* Premium Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-10 sm:mt-12"
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">100%</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Conformité</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">4</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Autorités</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">€100K</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Garantie</div>
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

      {/* Main Content */}
      <section className="section-institutional-white">
        <div className="container-institutional">
          <div className="flex justify-center mb-12 lg:mb-16">
            <div className="inline-flex p-1 sm:p-2 bg-[#F6F8FB] rounded-2xl border border-[rgba(10,30,60,0.08)]">
              <button
                onClick={() => setActiveTab('approvals')}
                className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                  activeTab === 'approvals' ? 'bg-[#0E2E5C] text-white shadow-lg' : 'text-[#64748B] hover:text-[#0A1F3C]'
                }`}
              >
                {t('pages.regulatory_approvals.authorities_title')}
              </button>
              <button
                onClick={() => setActiveTab('legal')}
                className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                  activeTab === 'legal' ? 'bg-[#0E2E5C] text-white shadow-lg' : 'text-[#64748B] hover:text-[#0A1F3C]'
                }`}
              >
                Legal Information
              </button>
            </div>
          </div>

          {activeTab === 'approvals' ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
            >
              {(approvals || []).map((app) => (
                <div key={app.title} className="card-institutional-elevated p-4 sm:p-6 lg:p-10 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 group hover:border-[#0E2E5C]">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#F6F8FB] rounded-2xl flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl shadow-sm group-hover:scale-110 transition-transform">
                    {app.logo}
                  </div>
                  <div className="flex-1 w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-3 sm:mb-4">
                      <div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0A1F3C] mb-1">{app.authority}</h3>
                        <p className="text-xs sm:text-sm font-medium text-[#64748B]">{app.name}</p>
                      </div>
                      <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-widest flex items-center mt-2 sm:mt-0">
                        <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                        {app.status}
                      </span>
                    </div>
                    <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t border-[rgba(10,30,60,0.08)]">
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-[#94A3B8]">Reference:</span>
                        <span className="font-mono font-bold text-[#0A1F3C]">{app.number}</span>
                      </div>
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-[#94A3B8]">Description:</span>
                        <span className="font-bold text-[#0A1F3C]">{app.description}</span>
                      </div>
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-[#94A3B8]">Scope:</span>
                        <span className="font-bold text-[#0A1F3C]">{app.scope}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
            >
              <div className="col-span-1 lg:col-span-2 space-y-8 lg:space-y-12">
                <div className="bg-[#F6F8FB] p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-[2.5rem] border border-[rgba(10,30,60,0.08)]">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0A1F3C] mb-6 sm:mb-8 flex items-center">
                    <Building className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 text-[#0E2E5C]" />
                    Entity Profile
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-8 gap-x-8 sm:gap-x-12">
                    <div>
                      <p className="text-[10px] sm:text-xs font-bold text-[#94A3B8] uppercase tracking-widest mb-2">Company Name</p>
                      <p className="text-base sm:text-lg font-bold text-[#0A1F3C]">{legalInfo.company.name}</p>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-bold text-[#94A3B8] uppercase tracking-widest mb-2">Legal Status</p>
                      <p className="text-base sm:text-lg font-bold text-[#0A1F3C]">{legalInfo.company.status}</p>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-bold text-[#94A3B8] uppercase tracking-widest mb-2">Share Capital</p>
                      <p className="text-base sm:text-lg font-bold text-[#0A1F3C]">{legalInfo.company.capital}</p>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-bold text-[#94A3B8] uppercase tracking-widest mb-2">Address</p>
                      <p className="text-xs sm:text-sm font-medium text-[#0A1F3C]">{legalInfo.company.address}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className="card-institutional p-6 sm:p-8 lg:p-10">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0A1F3C] mb-6 sm:mb-8 flex items-center">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-[#0E2E5C]" />
                      Management
                    </h3>
                    <div className="space-y-4 sm:space-y-6">
                      {(legalInfo?.directors || []).map((dir, i) => (
                        <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-3 sm:pb-4 last:border-0 last:pb-0">
                          <div>
                            <p className="font-bold text-[#0A1F3C] text-sm sm:text-base">{dir.name}</p>
                            <p className="text-[10px] sm:text-xs text-[#64748B]">{dir.position}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-institutional p-6 sm:p-8 lg:p-10">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0A1F3C] mb-6 sm:mb-8 flex items-center">
                      <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-[#0E2E5C]" />
                      Guarantees
                    </h3>
                    <div className="space-y-4 sm:space-y-6">
                      {(legalInfo?.guarantees || []).map((gua, i) => (
                        <div key={i} className="flex justify-between items-start border-b border-gray-100 pb-3 sm:pb-4 last:border-0 last:pb-0">
                          <div>
                            <p className="font-bold text-[#0A1F3C] text-sm sm:text-base">{gua.type}</p>
                            <p className="text-[10px] sm:text-xs text-[#64748B]">{gua.description}</p>
                          </div>
                          <span className="font-bold text-[#0E2E5C] whitespace-nowrap text-sm sm:text-base">{gua.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div className="bg-[#0A1F3C] p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[2.5rem] text-white">
                  <h3 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 border-b border-white/10 pb-3 sm:pb-4">Regulatory Standards</h3>
                  <div className="space-y-4">
                    {(compliance?.frameworks || []).map((fw, i) => (
                      <div key={i} className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                        <span className="text-xs sm:text-sm font-medium">{fw}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#F8FAFC] p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[2.5rem] border border-slate-200">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0A1F3C] mb-6 sm:mb-8 border-b border-slate-200 pb-3 sm:pb-4">Certifications</h3>
                  <div className="space-y-4">
                    {(compliance?.certifications || []).map((cert, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <Award className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37] mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#64748B] font-medium">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Standards Section */}
      <section className="section-institutional-stratified">
        <div className="container-institutional">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="h2-institutional mb-4 sm:mb-6">{t('pages.regulatory_approvals.standards_title')}</h2>
            <div className="divider-institutional-gradient w-16 sm:w-24 mx-auto mb-6 sm:mb-8"></div>
            <p className="body-institutional text-[#64748B] max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">
              {t('pages.regulatory_approvals.standards_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1F3C] mb-2 tracking-tighter">100%</div>
              <p className="text-[10px] sm:text-xs font-bold text-[#94A3B8] uppercase tracking-widest">Compliance Rate</p>
            </div>
            <div className="text-center border-l border-gray-200 hidden sm:block">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1F3C] mb-2 tracking-tighter">€100K</div>
              <p className="text-[10px] sm:text-xs font-bold text-[#94A3B8] uppercase tracking-widest">Min Guarantee</p>
            </div>
            <div className="text-center border-l border-gray-200 hidden sm:block">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1F3C] mb-2 tracking-tighter">18</div>
              <p className="text-[10px] sm:text-xs font-bold text-[#94A3B8] uppercase tracking-widest">Regulated Markets</p>
            </div>
            <div className="text-center border-l border-gray-200 hidden sm:block">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1F3C] mb-2 tracking-tighter">A+</div>
              <p className="text-[10px] sm:text-xs font-bold text-[#94A3B8] uppercase tracking-widest">Audit Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Ultra Premium */}
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
                {t('pages.regulatory_approvals.cta_title')}
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
                {t('pages.regulatory_approvals.cta_subtitle')}
              </motion.p>

              {/* Premium Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
              >
                <button 
                  className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-[#0E2E5C] to-[#153E75] text-white rounded-full font-medium text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
                >
                  <span>Download Compliance Report</span>
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <Link 
                  href="/contact" 
                  className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-white text-[#0E2E5C] border-2 border-[#0E2E5C] rounded-full font-medium text-base sm:text-lg hover:bg-[#0E2E5C] hover:text-white transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
                >
                  <span>Contact Legal Officer</span>
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
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
