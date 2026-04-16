import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Shield, 
  Globe, 
  Award, 
  ChevronRight, 
  ArrowUpRight, 
  Star, 
  BarChart3, 
  PieChart, 
  Target, 
  Building, 
  Users, 
  Eye, 
  Heart, 
  Zap, 
  Crown, 
  Diamond, 
  Gem, 
  Briefcase, 
  Calculator, 
  FileText,
  CheckCircle 
} from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '../lib/i18n';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function WealthManagementPage() {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState(null);

  // Helper pour garantir un array depuis les traductions
  const getArray = (key) => {
    const result = t(key, { returnObjects: true });
    return Array.isArray(result) ? result : [];
  };

  const services = [
    {
      id: 'private-banking',
      title: t('pages.wealth_management.service_private'),
      description: t('pages.wealth_management.service_private_desc'),
      icon: <Crown className="w-6 h-6 sm:w-8 sm:h-8" />,
      minAssets: '€5M',
      features: getArray('pages.wealth_management.service_private_feat'),
      color: 'from-[#0A1F3C] to-[#0E2E5C]'
    },
    {
      id: 'family-office',
      title: t('pages.wealth_management.service_family'),
      description: t('pages.wealth_management.service_family_desc'),
      icon: <Diamond className="w-6 h-6 sm:w-8 sm:h-8" />,
      minAssets: '€50M',
      features: getArray('pages.wealth_management.service_family_feat'),
      color: 'from-[#0E2E5C] to-[#153E75]'
    },
    {
      id: 'institutional',
      title: t('pages.wealth_management.service_institutional'),
      description: t('pages.wealth_management.service_institutional_desc'),
      icon: <Building className="w-6 h-6 sm:w-8 sm:h-8" />,
      minAssets: '€100M',
      features: getArray('pages.wealth_management.service_institutional_feat'),
      color: 'from-[#153E75] to-[#1A4A7C]'
    },
    {
      id: 'foundation',
      title: t('pages.wealth_management.service_foundation'),
      description: t('pages.wealth_management.service_foundation_desc'),
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
      minAssets: '€10M',
      features: getArray('pages.wealth_management.service_foundation_feat'),
      color: 'from-[#1A4A7C] to-[#0F3A5C]'
    }
  ];

  const investmentStrategies = [
    {
      name: t('pages.wealth_management.strat_growth'),
      description: t('pages.wealth_management.strat_growth_desc'),
      risk: t('pages.wealth_management.risk_high'),
      return: '12–18%',
      horizon: '5–10 years',
      allocation: 30
    },
    {
      name: t('pages.wealth_management.strat_value'),
      description: t('pages.wealth_management.strat_value_desc'),
      risk: t('pages.wealth_management.risk_moderate'),
      return: '8–12%',
      horizon: '3–7 years',
      allocation: 25
    },
    {
      name: t('pages.wealth_management.strat_balanced'),
      description: t('pages.wealth_management.strat_balanced_desc'),
      risk: t('pages.wealth_management.risk_moderate'),
      return: '6–9%',
      horizon: '2–5 years',
      allocation: 25
    },
    {
      name: t('pages.wealth_management.strat_conservative'),
      description: t('pages.wealth_management.strat_conservative_desc'),
      risk: t('pages.wealth_management.risk_low'),
      return: '3–5%',
      horizon: '1–3 years',
      allocation: 20
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
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&auto=format&q=95"
            srcSet="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=640&h=480&fit=crop&auto=format&q=95 640w,
                    https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=768&h=576&fit=crop&auto=format&q=95 768w,
                    https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1024&h=768&fit=crop&auto=format&q=95 1024w,
                    https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&auto=format&q=95 1920w"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            alt="Wealth management"
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
              <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8D8C3]" />
              <span className="text-xs sm:text-sm font-medium text-white tracking-wide">{t('pages.wealth_management.hero_tag')}</span>
            </motion.div>
            
            {/* Premium Title with Gradient Text */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t('pages.wealth_management.hero_title')}
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
              {t('pages.wealth_management.hero_subtitle')}
            </motion.p>

            {/* Premium Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-10 sm:mt-12"
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">€12.5B</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">AUM</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">450+</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Familles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">25+</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Années</div>
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

      {/* Services Grid */}
      <section className="section-institutional-white">
        <div className="container-institutional">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="h2-institutional mb-4">{t('pages.wealth_management.services_title')}</h2>
            <p className="text-[#64748B] body-institutional max-w-2xl mx-auto">
              {t('pages.wealth_management.services_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {(services || []).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`card-institutional-elevated p-6 sm:p-8 hover:shadow-2xl transition-all relative overflow-hidden flex flex-col h-full cursor-pointer group`}
                onMouseEnter={() => setSelectedService(service.id)}
                onMouseLeave={() => setSelectedService(null)}
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}></div>
                <div className="mb-6 sm:mb-8 p-2 sm:p-3 bg-[#F6F8FB] rounded-2xl inline-block text-[#0A1F3C] group-hover:bg-[#0A1F3C] group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0A1F3C] mb-3 sm:mb-4 group-hover:text-[#0E2E5C] transition-colors">{service.title}</h3>
                <p className="text-xs sm:text-sm text-[#64748B] mb-6 sm:mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {(service?.features || []).map((feat, i) => (
                    <div key={i} className="flex items-center text-[10px] sm:text-xs font-bold text-[#0A1F3C]/70 uppercase tracking-widest">
                      <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1.5 sm:mr-2 text-blue-500" />
                      {feat}
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-4 sm:pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] sm:text-[10px] text-[#94A3B8] uppercase tracking-widest block mb-0.5 sm:mb-1">{t('pages.wealth_management.from')}</span>
                    <span className="text-base sm:text-lg font-bold text-[#0A1F3C]">{service.minAssets}</span>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#0E2E5C] group-hover:text-white group-hover:border-[#0E2E5C] transition-all">
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="section-institutional-stratified">
        <div className="container-institutional">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 sticky top-20 lg:top-32">
              <h2 className="h2-institutional mb-6">{t('pages.wealth_management.strategies_title')}</h2>
              <div className="divider-institutional-gradient w-16 sm:w-20 lg:w-24 mb-6"></div>
              <p className="body-institutional text-[#64748B] mb-8 sm:mb-12">
                {t('pages.wealth_management.strategies_subtitle')}
              </p>
              <Link href="/contact" className="btn-institutional-primary inline-flex">
                Tailor Your Portfolio
              </Link>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {(investmentStrategies || []).map((strat, i) => (
                <div key={i} className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-[1.5rem] lg:rounded-[2.5rem] border border-[rgba(10,30,60,0.05)] shadow-sm hover:shadow-xl transition-all group">
                  <div className="flex justify-between items-start mb-6 sm:mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0A1F3C]">{strat.name}</h3>
                    <div className="p-1.5 sm:p-2 bg-[#F6F8FB] rounded-lg text-[#0E2E5C]">
                      <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                  <p className="text-[#64748B] mb-6 sm:mb-8 lg:mb-10 text-xs sm:text-sm leading-relaxed">{strat.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-6 mb-6 sm:mb-8 lg:mb-10 pt-6 sm:pt-8 border-t border-slate-50">
                    <div>
                      <span className="text-[9px] sm:text-[10px] text-[#94A3B8] uppercase tracking-widest block mb-0.5 sm:mb-1">{t('pages.wealth_management.risk')}</span>
                      <span className="font-bold text-[#0A1F3C]">{strat.risk}</span>
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] text-[#94A3B8] uppercase tracking-widest block mb-0.5 sm:mb-1">{t('pages.wealth_management.return')}</span>
                      <span className="font-bold text-green-600">{strat.return}</span>
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] text-[#94A3B8] uppercase tracking-widest block mb-0.5 sm:mb-1">{t('pages.wealth_management.horizon')}</span>
                      <span className="font-bold text-[#0A1F3C]">{strat.horizon}</span>
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] text-[#94A3B8] uppercase tracking-widest block mb-0.5 sm:mb-1">{t('pages.wealth_management.allocation')}</span>
                      <div className="flex items-center space-x-1.5 sm:space-x-2">
                        <div className="flex-grow h-1.5 bg-[#F6F8FB] rounded-full overflow-hidden">
                          <div className="h-full bg-[#0E2E5C]" style={{ width: `${strat.allocation}%` }}></div>
                        </div>
                        <span className="font-bold text-[#0A1F3C]">{strat.allocation}%</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 sm:py-4 border border-[rgba(10,30,60,0.08)] rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#0A1F3C] hover:bg-[#0A1F3C] hover:text-white hover:border-[#0A1F3C] transition-all">
                    Strategy Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Stats */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0A1F3C]">
        <div className="container-institutional text-white">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t('pages.wealth_management.expertise_title')}</h2>
            <p className="text-white/60 max-w-2xl mx-auto italic">{t('pages.wealth_management.expertise_subtitle')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 text-center">
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1.5 sm:mb-2 tracking-tighter">€12.5B</div>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-blue-400 font-bold">Assets Under Management</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1.5 sm:mb-2 tracking-tighter">450+</div>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-blue-400 font-bold">Client Families</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1.5 sm:mb-2 tracking-tighter">180+</div>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-blue-400 font-bold">Wealth Advisors</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1.5 sm:mb-2 tracking-tighter">25+</div>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-blue-400 font-bold">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive CTA Banner */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden relative">
        <div className="container-institutional">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-[#F6F8FB] p-8 sm:p-12 md:p-16 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[4rem] relative overflow-hidden group border border-[rgba(10,30,60,0.05)]"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full hidden sm:block">
              <img 
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&fit=crop"
                srcSet="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&fit=crop 400w,
                        https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&fit=crop 600w,
                        https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&fit=crop 800w"
                sizes="(max-width: 600px) 0vw, (max-width: 800px) 100vw, 50vw"
                alt="Expert consultation"
                className="w-full h-full object-cover opacity-10 grayscale group-hover:grayscale-0 group-hover:opacity-20 transition-all duration-1000"
              />
            </div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="h2-institutional mb-4 sm:mb-6 text-[#0A1F3C] leading-tight">
                {t('pages.wealth_management.banner_title')}
              </h2>
              <p className="text-[#64748B] body-institutional mb-8 sm:mb-10 italic">
                "{t('pages.wealth_management.banner_desc')}"
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Link href="/contact" className="btn-institutional-primary px-6 sm:px-8 lg:px-10">
                  Request Private Briefing
                </Link>
                <button className="flex items-center text-[#0A1F3C] font-bold uppercase tracking-widest text-xs hover:tracking-[0.2em] transition-all">
                  Download Guide
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Exceptional Performance */}
      <section className="section-institutional-white bg-slate-50/50">
        <div className="container-institutional">
          <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 md:p-16 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border border-slate-100">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1F3C] mb-4">{t('pages.wealth_management.perf_title')}</h2>
              <p className="text-[#64748B] font-medium">{t('pages.wealth_management.perf_subtitle')}</p>
            </div>
            
            <div className="space-y-8 sm:space-y-12">
              {[
                { label: 'Private Selection Index', val: '+18.4%', bench: '+12.5%', alpha: '+5.9%' },
                { label: 'Family Heritage Fund', val: '+12.7%', bench: '+8.2%', alpha: '+4.5%' },
                { label: 'Sustainability Leaders', val: '+15.2%', bench: '+10.1%', alpha: '+5.1%' }
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-lg sm:text-xl font-bold text-[#0A1F3C] group-hover:text-[#0E2E5C] transition-colors">{item.label}</span>
                    <span className="text-2xl sm:text-3xl font-black text-blue-600">{item.val}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 py-3 sm:py-4 px-4 sm:px-6 bg-[#F6F8FB] rounded-2xl">
                    <div>
                      <span className="text-[9px] sm:text-[10px] text-[#94A3B8] uppercase tracking-widest block mb-0.5 sm:mb-1">{t('pages.wealth_management.perf_return')}</span>
                      <span className="font-bold text-[#0A1F3C]">{item.val}</span>
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] text-[#94A3B8] uppercase tracking-widest block mb-0.5 sm:mb-1">{t('pages.wealth_management.perf_benchmark')}</span>
                      <span className="font-bold text-[#64748B]">{item.bench}</span>
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] text-[#94A3B8] uppercase tracking-widest block mb-0.5 sm:mb-1 font-black text-blue-500">{t('pages.wealth_management.perf_alpha')}</span>
                      <span className="font-black text-blue-500">{item.alpha}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Ultra Premium */}
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
                {t('pages.wealth_management.cta_title')}
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
                {t('pages.wealth_management.cta_subtitle')}
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
                  <span>{t('pages.wealth_management.request_meeting')}</span>
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
                <button 
                  className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-white text-[#0E2E5C] border-2 border-[#0E2E5C] rounded-full font-medium text-base sm:text-lg hover:bg-[#0E2E5C] hover:text-white transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
                >
                  <span>{t('pages.wealth_management.request_analysis')}</span>
                  <Crown className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
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
