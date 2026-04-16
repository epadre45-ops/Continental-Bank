import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Users, 
  Award, 
  ChevronRight, 
  ArrowUpRight, 
  Star, 
  Target, 
  Eye, 
  Heart, 
  Zap, 
  Building, 
  Globe, 
  TrendingUp, 
  FileText, 
  CheckCircle 
} from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from '../lib/i18n';

export default function GovernancePage() {
  const { t, isLoading } = useTranslation();
  
  const boardMembers = [
    {
      name: 'Jean-Louis Dubois',
      position: t('pages.governance.leadership'),
      background: t('pages.governance.member_1_bg'),
      committees: [
        t('pages.governance.comm_strat'),
        t('pages.governance.comm_risk')
      ],
      image: '/images/board-member-1.jpg'
    },
    {
      name: 'Marie Schmidt',
      position: t('pages.governance.vice_chair'),
      background: t('pages.governance.member_2_bg'),
      committees: [
        t('pages.governance.comm_audit'),
        t('pages.governance.comm_nom')
      ],
      image: '/images/board-member-2.jpg'
    },
    {
      name: 'Klaus Weber',
      position: t('pages.governance.board_member'),
      background: t('pages.governance.member_3_bg'),
      committees: [
        t('pages.governance.comm_strat'),
        t('pages.governance.comm_inv')
      ],
      image: '/images/board-member-3.jpg'
    },
    {
      name: 'Sophie Laurent',
      position: t('pages.governance.board_member'),
      background: t('pages.governance.member_4_bg'),
      committees: [
        t('pages.governance.comm_audit'),
        t('pages.governance.comm_esg')
      ],
      image: '/images/board-member-4.jpg'
    }
  ];

  const committees = [
    {
      name: t('pages.governance.comm_strat'),
      role: t('pages.governance.comm_strat_role'),
      members: ['Jean-Louis Dubois', 'Klaus Weber', 'Sophie Laurent'],
      meetings: t('pages.governance.quarterly'),
      focus: [t('pages.governance.focus_vision'), t('pages.governance.focus_expansion'), t('pages.governance.focus_tech')]
    },
    {
      name: t('pages.governance.comm_audit'),
      role: t('pages.governance.comm_audit_role'),
      members: ['Marie Schmidt', 'Sophie Laurent'],
      meetings: t('pages.governance.quarterly'),
      focus: [t('pages.governance.focus_audit'), t('pages.governance.focus_control'), t('pages.governance.focus_reg')]
    },
    {
      name: t('pages.governance.comm_risk'),
      role: t('pages.governance.comm_risk_role'),
      members: ['Jean-Louis Dubois', 'Klaus Weber'],
      meetings: t('pages.governance.quarterly'),
      focus: [t('pages.governance.focus_credit'), t('pages.governance.focus_market'), t('pages.governance.focus_op')]
    }
  ];

  const governancePrinciples = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: t('pages.governance.transparency'),
      description: 'Open and clear communication about all decisions and processes.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('pages.governance.integrity'),
      description: t('pages.governance.integrity_desc')
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: t('pages.governance.accountability'),
      description: t('pages.governance.accountability_desc')
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t('pages.governance.fairness'),
      description: t('pages.governance.fairness_desc')
    }
  ];

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Header />
      
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#0E2E5C]"></div>
        </div>
      ) : (
        <>
          {/* Hero Section - Ultra Premium */}
          <section className="section-institutional-navy w-full pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden">
        {/* Premium Background with Multiple Layers */}
        <div className="absolute inset-0">
          {/* Main Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&auto=format&q=95"
            srcSet="https://images.unsplash.com/photo-1497366216548-37526070297c?w=640&h=480&fit=crop&auto=format&q=95 640w,
                    https://images.unsplash.com/photo-1497366216548-37526070297c?w=768&h=576&fit=crop&auto=format&q=95 768w,
                    https://images.unsplash.com/photo-1497366216548-37526070297c?w=1024&h=768&fit=crop&auto=format&q=95 1024w,
                    https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&auto=format&q=95 1920w"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            alt={t('pages.governance.hero_alt')}
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

        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
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
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8D8C3]" />
              <span className="text-xs sm:text-sm font-medium text-white tracking-wide">{t('pages.governance.title')}</span>
            </motion.div>
            
            {/* Premium Title with Gradient Text */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t('pages.governance.hero_title')}
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
              {t('pages.governance.hero_desc')}
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
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">0</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Incidents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">ISO</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Certifié</div>
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

          {/* Governance Principles */}
          <section className="section-institutional-white w-full">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-10 sm:mb-12 md:mb-16"
              >
                <h2 className="h2-institutional mb-4 sm:mb-6">{t('pages.governance.principles_title')}</h2>
                <div className="divider-institutional-gradient w-20 sm:w-24 mx-auto mb-6 sm:mb-8"></div>
                <p className="body-institutional-lg text-[#64748B] max-w-2xl sm:max-w-3xl mx-auto">
                  {t('pages.governance.principles_desc')}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {(governancePrinciples || []).map((principle, index) => (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="card-institutional-elevated p-4 sm:p-6 md:p-8 text-center group"
                  >
                    <div className="text-[#0E2E5C] mb-4 sm:mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {principle.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#0A1F3C] mb-3 sm:mb-4">{principle.title}</h3>
                    <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">{principle.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Board of Directors */}
          <section className="section-institutional-stratified w-full">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-10 sm:mb-12 md:mb-16"
              >
                <h2 className="h2-institutional mb-4 sm:mb-6">{t('pages.governance.board_title')}</h2>
                <div className="divider-institutional-gradient w-20 sm:w-24 mx-auto mb-6 sm:mb-8"></div>
                <p className="body-institutional-lg text-[#64748B] max-w-2xl sm:max-w-3xl mx-auto">
                  {t('pages.governance.board_desc')}
                </p>
              </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {(boardMembers || []).map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-institutional-elevated p-4 sm:p-6 md:p-8 group"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0 mx-auto sm:mx-0">
                    <img 
                      src={
                        index === 0 ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&auto=format" :
                        index === 1 ? "https://images.unsplash.com/photo-1494790108755-2616b332c1ca?w=150&h=150&fit=crop&auto=format" :
                        index === 2 ? "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&auto=format" :
                        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&auto=format"
                      }
                      alt={`${t('pages.governance.photo_of')} ${member.name} - ${member.position}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#0A1F3C] mb-2">{member.name}</h3>
                    <p className="text-sm sm:text-base text-[#0E2E5C] font-medium mb-2 sm:mb-3">{member.position}</p>
                    <p className="text-sm sm:text-base text-[#64748B] mb-3 sm:mb-4">{member.background}</p>
                    <div className="space-y-1.5 sm:space-y-2">
                      <div className="text-xs sm:text-sm font-medium text-[#0A1F3C]">{t('pages.governance.committees_title')}:</div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center sm:justify-start">
                        {(member?.committees || []).map((committee, idx) => (
                          <span key={idx} className="bg-[#F6F8FB] text-[#0E2E5C] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                            {committee}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Committees */}
          <section className="section-institutional-white w-full">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-10 sm:mb-12 md:mb-16"
              >
                <h2 className="h2-institutional mb-4 sm:mb-6">{t('pages.governance.committees_title')}</h2>
                <div className="divider-institutional-gradient w-20 sm:w-24 mx-auto mb-6 sm:mb-8"></div>
                <p className="body-institutional-lg text-[#64748B] max-w-2xl sm:max-w-3xl mx-auto">
                  {t('pages.governance.committees_desc')}
                </p>
              </motion.div>

              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {(committees || []).map((committee, index) => (
                  <motion.div
                    key={committee.name}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="card-institutional-elevated p-4 sm:p-6 md:p-8"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-semibold text-[#0A1F3C] mb-3 sm:mb-4">{committee.name}</h3>
                        <p className="text-sm sm:text-base text-[#64748B] mb-4 sm:mb-6">{committee.role}</p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                          <div>
                            <div className="text-xs sm:text-sm font-medium text-[#0A1F3C] mb-1.5 sm:mb-2">{t('pages.governance.members_title')}</div>
                            <div className="text-xs sm:text-sm text-[#64748B]">
                              {(committee?.members || []).map((member, idx) => (
                                <div key={idx}>• {member}</div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs sm:text-sm font-medium text-[#0A1F3C] mb-1.5 sm:mb-2">{t('pages.governance.meetings_title')}</div>
                            <div className="text-xs sm:text-sm text-[#64748B]">{committee.meetings}</div>
                          </div>
                          <div>
                            <div className="text-xs sm:text-sm font-medium text-[#0A1F3C] mb-1.5 sm:mb-2">{t('pages.governance.focus_title')}</div>
                            <div className="text-xs sm:text-sm text-[#64748B]">
                              {(committee?.focus || []).map((item, idx) => (
                                <div key={idx}>• {item}</div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 sm:mt-0 sm:ml-4 md:ml-8 flex-shrink-0">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#F6F8FB] rounded-full flex items-center justify-center mx-auto sm:mx-0">
                          <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#0E2E5C]" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Ethics & Compliance */}
          <section className="section-institutional-navy w-full">
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h2 className="h2-institutional mb-4 sm:mb-6 text-white">{t('pages.governance.ethics_title')}</h2>
                <div className="divider-institutional-gradient w-20 sm:w-24 mx-auto mb-6 sm:mb-8"></div>
                <p className="body-institutional-lg text-white/80 max-w-2xl sm:max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
                  {t('pages.governance.ethics_desc')}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-white">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold mb-2">100%</div>
                    <div className="text-xs sm:text-sm text-white/60">{t('pages.governance.compliance_rate')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold mb-2">0</div>
                    <div className="text-xs sm:text-sm text-white/60">{t('pages.governance.ethical_incidents')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold mb-2">24/7</div>
                    <div className="text-xs sm:text-sm text-white/60">{t('governance.ethics_compliance.compliance_monitoring')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-3xl font-bold mb-2">ISO 37301</div>
                    <div className="text-xs sm:text-sm text-white/60">{t('governance.ethics_compliance.certification')}</div>
                  </div>
                </div>
              </motion.div>
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center justify-center mb-6 sm:mb-8"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#E8D8C3]/20 blur-xl rounded-full"></div>
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#0E2E5C] relative" />
                </div>
                <h2 className="font-primary text-2xl sm:text-3xl lg:text-5xl font-bold text-[#0A1F3C] ml-3 sm:ml-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {t('governance.cta.title')}
                </h2>
              </motion.div>
              
              {/* Premium Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-base sm:text-lg lg:text-xl text-[#64748B] mb-10 sm:mb-14 max-w-3xl mx-auto leading-relaxed font-light"
              >
                {t('governance.cta.description')}
              </motion.p>

              {/* Premium Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
              >
                <Link 
                  href="/reports" 
                  className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-[#0E2E5C] to-[#153E75] text-white rounded-full font-medium text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
                >
                  <span>{t('pages.dashboard.full_report')}</span>
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
                <Link 
                  href="/contact" 
                  className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-white text-[#0E2E5C] border-2 border-[#0E2E5C] rounded-full font-medium text-base sm:text-lg hover:bg-[#0E2E5C] hover:text-white transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
                >
                  <span>{t('pages.governance.contact_office')}</span>
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
        </>
      )}
      
      <Footer />
    </div>
  );
}
