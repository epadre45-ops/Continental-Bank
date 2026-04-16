import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  TrendingUp, 
  Globe, 
  Shield, 
  Zap, 
  Award, 
  ChevronRight, 
  ArrowUpRight, 
  Star, 
  BarChart3, 
  PieChart, 
  Building, 
  Users, 
  Eye, 
  Heart, 
  Rocket, 
  Lightbulb, 
  CheckCircle 
} from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '../lib/i18n';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function StrategyPage() {
  const { t } = useTranslation();

  // Helper pour garantir un array depuis les traductions
  const getArray = (key) => {
    const result = t(key, { returnObjects: true });
    return Array.isArray(result) ? result : [];
  };

  const strategicPillars = [
    {
      icon: <Target />,
      title: t('pages.strategy.pillar_excellence'),
      description: t('pages.strategy.pillar_excellence_desc'),
      metrics: getArray('pages.strategy.pillar_excellence_metrics')
    },
    {
      icon: <Globe />,
      title: t('pages.strategy.pillar_expansion'),
      description: t('pages.strategy.pillar_expansion_desc'),
      metrics: getArray('pages.strategy.pillar_expansion_metrics')
    },
    {
      icon: <Zap />,
      title: t('pages.strategy.pillar_innovation'),
      description: t('pages.strategy.pillar_innovation_desc'),
      metrics: getArray('pages.strategy.pillar_innovation_metrics')
    },
    {
      icon: <Shield />,
      title: t('pages.strategy.pillar_resilience'),
      description: t('pages.strategy.pillar_resilience_desc'),
      metrics: getArray('pages.strategy.pillar_resilience_metrics')
    }
  ];

  const strategicGoals = [
    {
      year: '2024',
      title: t('pages.strategy.goal_digital'),
      description: t('pages.strategy.goal_digital_desc'),
      status: 'completed',
      progress: 100
    },
    {
      year: '2025',
      title: t('pages.strategy.goal_asia'),
      description: t('pages.strategy.goal_asia_desc'),
      status: 'in-progress',
      progress: 65
    },
    {
      year: '2026',
      title: t('pages.strategy.goal_sustainable'),
      description: t('pages.strategy.goal_sustainable_desc'),
      status: 'planned',
      progress: 25
    },
    {
      year: '2027',
      title: t('pages.strategy.goal_customer'),
      description: t('pages.strategy.goal_customer_desc'),
      status: 'planned',
      progress: 15
    }
  ];

  const keyInitiatives = [
    {
      category: t('pages.strategy.init_digital_trans'),
      initiatives: [
        { name: 'Unified Mobile Platform', impact: t('pages.strategy.init_impact_high'), timeline: 'Q4 2024' },
        { name: 'Predictive AI', impact: t('pages.strategy.init_impact_vhigh'), timeline: 'Q2 2025' },
        { name: 'Institutional Blockchain', impact: t('pages.strategy.init_impact_med'), timeline: 'Q3 2025' }
      ]
    },
    {
      category: t('pages.strategy.init_sustainable'),
      initiatives: [
        { name: '100% Green Finance', impact: t('pages.strategy.init_impact_vhigh'), timeline: 'Q1 2025' },
        { name: 'Carbon Neutral 2030', impact: t('pages.strategy.init_impact_high'), timeline: 'Q4 2024' },
        { name: 'ESG Investments', impact: t('pages.strategy.init_impact_med'), timeline: 'Q2 2024' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Header />
      
      {/* Hero Section - Ultra Premium */}
      <section className="section-institutional-navy w-full pt-20 md:pt-24 lg:pt-32 relative overflow-hidden">
        {/* Premium Background with Multiple Layers */}
        <div className="absolute inset-0">
          {/* Main Background Image */}
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&auto=format&q=95"
            srcSet="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=640&h=480&fit=crop&auto=format&q=95 640w,
                    https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=768&h=576&fit=crop&auto=format&q=95 768w,
                    https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1024&h=768&fit=crop&auto=format&q=95 1024w,
                    https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&auto=format&q=95 1920w"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            alt="Strategic planning"
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
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8D8C3]" />
              <span className="text-xs sm:text-sm font-medium text-white tracking-wide">{t('pages.strategy.hero_tag')}</span>
            </motion.div>
            
            {/* Premium Title with Gradient Text */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t('pages.strategy.hero_title')}
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
              {t('pages.strategy.hero_subtitle')}
            </motion.p>

            {/* Premium Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-10 sm:mt-12"
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">2027</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Vision</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">4</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Piliers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">100%</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Engagement</div>
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

      {/* Strategic Pillars */}
      <section className="section-institutional-white w-full">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="h2-institutional mb-4 sm:mb-6">{t('pages.strategy.pillars_title')}</h2>
            <div className="divider-institutional-gradient w-16 sm:w-24 mx-auto mb-6 sm:mb-8"></div>
            <p className="body-institutional-lg text-[#64748B] max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">
              {t('pages.strategy.pillars_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {(strategicPillars || []).map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-institutional p-4 sm:p-6 lg:p-8 group hover:border-[#0E2E5C]"
              >
                <div className="text-[#0E2E5C] mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
                    {pillar.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0A1F3C] mb-3 sm:mb-4">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-[#64748B] mb-4 sm:mb-6">{pillar.description}</p>
                <ul className="space-y-2 sm:space-y-3">
                  {(pillar?.metrics || []).map((metric, idx) => (
                    <li key={idx} className="flex items-center text-xs font-bold text-[#0E2E5C] uppercase tracking-wider">
                      <Star className="w-2 h-2 sm:w-3 sm:h-3 mr-2" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Goals - Timeline */}
      <section className="section-institutional-stratified w-full">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="h2-institutional mb-4 sm:mb-6">{t('pages.strategy.goals_title')}</h2>
            <div className="divider-institutional-gradient w-16 sm:w-24 mx-auto mb-6 sm:mb-8"></div>
            <p className="body-institutional-lg text-[#64748B] max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">
              {t('pages.strategy.goals_subtitle')}
            </p>
          </div>

          <div className="relative pt-8 sm:pt-12">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-[#E2E8F0] -translate-y-1/2 hidden sm:block"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 relative z-10">
              {(strategicGoals || []).map((goal, index) => (
                <motion.div
                  key={goal.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center border-4 border-white shadow-lg mb-6 sm:mb-8 ${
                    goal.status === 'completed' ? 'bg-[#0E2E5C] text-white' : 
                    goal.status === 'in-progress' ? 'bg-[#D4AF37] text-white' : 'bg-white text-[#94A3B8]'
                  }`}>
                    {goal.status === 'completed' ? <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" /> : <span className="text-base sm:text-lg lg:text-xl font-bold">{goal.year}</span>}
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#0A1F3C] mb-2">{goal.title}</h3>
                  <p className="text-xs sm:text-sm text-[#64748B] mb-4 sm:mb-6 leading-relaxed">{goal.description}</p>
                  <div className="w-full bg-[#E2E8F0] h-2 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${goal.progress}%` }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className={`h-full ${goal.status === 'completed' ? 'bg-[#0E2E5C]' : 'bg-[#D4AF37]'}`}
                    />
                  </div>
                  <span className="text-xs font-bold mt-2 uppercase tracking-tighter">{goal.progress}% {goal.status}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="section-institutional-white w-full">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {(keyInitiatives || []).map((cat, index) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0A1F3C] mb-6 sm:mb-8 flex items-center">
                  <span className="w-8 h-1 sm:w-10 sm:h-1 lg:w-12 lg:h-1 bg-[#0E2E5C] mr-3 sm:mr-4"></span>
                  {cat.category}
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {(cat?.initiatives || []).map((init, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 bg-[#F6F8FB] rounded-2xl border border-transparent hover:border-[#0E2E5C]/20 transition-all group">
                      <div className="mb-3 sm:mb-0">
                        <h4 className="font-bold text-[#0A1F3C] mb-1 text-sm sm:text-base">{init.name}</h4>
                        <span className="text-xs text-[#64748B] uppercase tracking-widest">{init.timeline}</span>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto">
                        <span className={`px-2 sm:px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                          init.impact === 'Very High' ? 'bg-red-100 text-red-600' : 
                          init.impact === 'High' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {init.impact} Impact
                        </span>
                        <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#94A3B8] group-hover:text-[#0E2E5C] transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="bg-[#0A1F3C] w-full py-12 md:py-16 lg:py-24 relative overflow-hidden">
        <Globe className="absolute top-1/2 left-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] lg:w-[1000px] lg:h-[1000px] text-white/5 -translate-x-1/2 -translate-y-1/2 animate-spin-slow" />
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 mx-auto relative z-10">
          <div className="max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto text-center">
            <Star className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#D4AF37] mx-auto mb-6 sm:mb-8" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 lg:mb-10 leading-tight">
              "We don't just anticipate the future of banking. We build it with the most demanding institutions."
            </h2>
            <div className="flex items-center justify-center space-x-3 sm:space-x-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 border-2 border-white/20 rounded-full flex items-center justify-center">
                <Building className="text-white w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-base sm:text-lg lg:text-xl uppercase tracking-widest">Jean-Pierre Continental</p>
                <p className="text-white/60 uppercase tracking-widest text-xs font-bold">Chairman of the Board</p>
              </div>
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
                {t('pages.strategy.cta_title')}
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
                {t('pages.strategy.cta_subtitle')}
              </motion.p>

              {/* Premium Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
              >
                <Link 
                  href="/contact" 
                  className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-[#0E2E5C] to-[#153E75] text-white rounded-full font-medium text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
                >
                  <span>Discuss Our Partnership</span>
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/key-figures" 
                  className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-white text-[#0E2E5C] border-2 border-[#0E2E5C] rounded-full font-medium text-base sm:text-lg hover:bg-[#0E2E5C] hover:text-white transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
                >
                  <span>View Key Figures</span>
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
