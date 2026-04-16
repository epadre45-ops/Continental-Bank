import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  Globe, 
  Building, 
  Briefcase,
  BarChart3,
  PieChart,
  Target,
  Zap,
  Star,
  Award,
  Crown,
  Diamond,
  ChevronRight,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '../lib/i18n';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function EntreprisesPremium() {
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState(null);

  const advantages = [
    {
      icon: <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: t('pages.entreprises.adv_1_title'),
      description: t('pages.entreprises.adv_1_desc')
    },
    {
      icon: <Shield className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: t('pages.entreprises.adv_2_title'),
      description: t('pages.entreprises.adv_2_desc')
    },
    {
      icon: <Globe className="w-10 h-10 sm:w-12 sm:h-12" />,
      title: t('pages.entreprises.adv_3_title'),
      description: t('pages.entreprises.adv_3_desc')
    }
  ];

  const fundTypes = [
    {
      icon: <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: t('pages.entreprises.fund_1_title'),
      description: t('pages.entreprises.fund_1_desc')
    },
    {
      icon: <PieChart className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: t('pages.entreprises.fund_2_title'),
      description: t('pages.entreprises.fund_2_desc')
    },
    {
      icon: <Target className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: t('pages.entreprises.fund_3_title'),
      description: t('pages.entreprises.fund_3_desc')
    },
    {
      icon: <Zap className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: t('pages.entreprises.fund_4_title'),
      description: t('pages.entreprises.fund_4_desc')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#FAFAFA] to-[#F5F6F8]">
      <Header />

      {/* Top Bar - Localized */}
      <div className="bg-[#F4F4F4] border-b border-[#E5E5E5] h-[60px] sm:h-[70px] flex items-center justify-between px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <div className="text-[#2C2C2C] text-[14px] sm:text-[16px] md:text-[17px] lg:text-[19px] font-medium">
          {t('pages.entreprises.hero_tag')} : {t('pages.entreprises.adv_1_title')}
        </div>
        <div className="text-[#8A8A8A] text-[12px] sm:text-[13px] lg:text-[14px] hidden sm:block">
          <Link href="/" className="hover:text-[#2C2C2C] transition-colors uppercase">HOME</Link>
          <span className="mx-2">{'>'}</span>
          <span className="text-[#2C2C2C] uppercase">{t('pages.entreprises.hero_tag')} : {t('pages.entreprises.adv_1_title')}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-[110px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left Column - Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[55%]"
          >
            <div className="relative">
              <span className="text-[#0E2E5C] font-bold tracking-[0.3em] text-[12px] sm:text-[13px] lg:text-[14px] mb-4 sm:mb-6 block uppercase">
                {t('pages.entreprises.hero_tag')}
              </span>
              <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[72px] font-bold leading-[1.1] text-[#0A1F3C] mb-6 sm:mb-8 tracking-tighter">
                {t('pages.entreprises.hero_title')}
              </h1>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-[#64748B] leading-[1.6] mb-8 sm:mb-12 max-w-full sm:max-w-[90%] font-light italic">
                "{t('pages.entreprises.hero_subtitle')}"
              </p>
              
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                {[
                  t('pages.entreprises.check_1'),
                  t('pages.entreprises.check_2'),
                  t('pages.entreprises.check_3')
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 sm:gap-4 group cursor-default">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#0E2E5C]/10 flex items-center justify-center group-hover:bg-[#0E2E5C] transition-colors duration-300">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#0E2E5C] group-hover:text-white" />
                    </div>
                    <span className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#475569] font-medium group-hover:text-[#0A1F3C] transition-colors">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <button className="bg-[#0A1F3C] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-none font-bold tracking-widest text-[11px] sm:text-[12px] lg:text-[13px] hover:bg-[#0E2E5C] transition-all transform hover:-translate-y-1 shadow-xl uppercase">
                  {t('pages.entreprises.get_started')}
                </button>
                <button className="border-2 border-[#0A1F3C] text-[#0A1F3C] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-none font-bold tracking-widest text-[11px] sm:text-[12px] lg:text-[13px] hover:bg-[#0A1F3C] hover:text-white transition-all uppercase">
                  {t('pages.entreprises.view_cases')}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image & Stats */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-[45%] relative"
          >
            <div className="relative z-10 rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                srcSet="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=640&auto=format&fit=crop 640w,
                        https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=768&auto=format&fit=crop 768w,
                        https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1024&auto=format&fit=crop 1024w,
                        https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop 2070w"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                alt="Corporate building"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] object-cover hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F3C]/60 to-transparent"></div>
            </div>
            
            {/* Floating Stat Card */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 lg:-bottom-10 lg:-left-10 bg-white p-6 sm:p-8 lg:p-10 shadow-2xl rounded-xl sm:rounded-[1.5rem] lg:rounded-[2rem] border border-slate-100 z-20 max-w-[200px] sm:max-w-[240px] lg:max-w-[280px]"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                </div>
                <div className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-[#0A1F3C] tracking-tighter">A1</div>
              </div>
              <div className="text-[#64748B] text-[11px] sm:text-[12px] lg:text-[13px] font-bold tracking-widest uppercase mb-2">Institutional Rating</div>
              <div className="text-[12px] sm:text-[13px] lg:text-[14px] text-slate-400">Standard & Poor's Quality Certified Banking Services</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20 md:py-24 lg:py-[120px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px]">
        <div className="container-institutional mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-[#0A1F3C] mb-4 sm:mb-6 tracking-tight">
              {t('pages.entreprises.adv_title')}
            </h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-[#0E2E5C] mx-auto mb-6 sm:mb-8"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {(advantages || []).map((adv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                className="bg-white p-6 sm:p-8 lg:p-12 rounded-xl sm:rounded-[1.5rem] lg:rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 group relative border border-slate-100 overflow-hidden"
              >
                <div className="mb-6 sm:mb-8 lg:mb-10 text-[#0E2E5C] group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                  {adv.icon}
                </div>
                <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold text-[#0A1F3C] mb-4 sm:mb-6 tracking-tight group-hover:text-[#0E2E5C] transition-colors">
                  {adv.title}
                </h3>
                <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-[#64748B] leading-relaxed">
                  {adv.description}
                </p>
                <div className="mt-6 pt-6 sm:mt-8 sm:pt-8 border-t border-slate-50 flex items-center gap-3 text-[#0E2E5C] font-bold tracking-widest text-[10px] sm:text-[11px] lg:text-[12px] opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 uppercase">
                  LEARN MORE <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Funds Grid Section */}
      <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-[120px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px]">
        <div className="flex flex-col sm:flex-row items-start sm:items-end mb-12 sm:mb-16 lg:mb-20">
          <div className="max-w-full sm:max-w-[70%] md:max-w-[60%]">
            <span className="text-[#0E2E5C] font-bold tracking-[0.3em] text-[11px] sm:text-[12px] lg:text-[13px] mb-3 sm:mb-4 block uppercase leading-none">
              INVESTMENT FUNDS
            </span>
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[42px] font-bold text-[#0A1F3C] tracking-tight leading-tight">
              {t('pages.entreprises.funds_title')}
            </h2>
          </div>
          <button className="text-[#0A1F3C] border-b-2 border-[#0A1F3C] pb-1.5 sm:pb-2 font-bold tracking-widest text-[11px] sm:text-[12px] lg:text-[13px] hover:text-[#0E2E5C] hover:border-[#0E2E5C] transition-all uppercase leading-none mt-4 sm:mt-0">
            {t('pages.entreprises.learn_more')}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {(fundTypes || []).map((fund, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -15 }}
              className="bg-[#F8FAFC] p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-[1.5rem] lg:rounded-[2rem] border border-slate-100 hover:bg-[#0A1F3C] group transition-all duration-500"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white rounded-2xl flex items-center justify-center text-[#0E2E5C] mb-6 sm:mb-8 shadow-sm group-hover:bg-[#0E2E5C] group-hover:text-white transition-colors duration-500">
                {fund.icon}
              </div>
              <h4 className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold text-[#0A1F3C] group-hover:text-white mb-3 sm:mb-4 tracking-tight transition-colors">
                {fund.title}
              </h4>
              <p className="text-[14px] sm:text-[15px] text-[#64748B] group-hover:text-slate-400 leading-relaxed transition-colors">
                {fund.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section - Premium Dark */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px] py-12 sm:py-16 md:py-20 lg:py-[80px]">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-[#0A1F3C] rounded-2xl sm:rounded-[2.5rem] lg:rounded-[3rem] xl:rounded-[4rem] p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 text-center relative overflow-hidden group shadow-[0_50px_100px_-20px_rgba(10,31,60,0.3)]"
        >
          {/* Background Decorative Elements */}
          <Building className="absolute top-[-20px] right-[-20px] sm:top-[-30px] sm:right-[-30px] lg:top-[-50px] lg:right-[-50px] w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 xl:w-96 xl:h-96 text-white/5 rotate-12" />
          <Globe className="absolute bottom-[-20px] left-[-20px] sm:bottom-[-30px] sm:left-[-30px] lg:bottom-[-50px] lg:left-[-50px] w-24 h-24 sm:w-40 sm:h-40 lg:w-64 lg:h-64 xl:w-80 xl:h-80 text-white/5 -rotate-12" />
          
          <div className="relative z-10 max-w-full sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-400 mx-auto mb-6 sm:mb-8 lg:mb-10 group-hover:animate-pulse" />
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] 2xl:text-[56px] font-bold text-white mb-6 sm:mb-8 tracking-tighter leading-tight">
              {t('pages.entreprises.cta_title')}
            </h2>
            <p className="text-white/70 text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed mb-8 sm:mb-12 lg:mb-16 font-light max-w-full sm:max-w-2xl lg:max-w-3xl mx-auto italic">
              "{t('pages.entreprises.cta_subtitle')}"
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-8">
              <button className="bg-white text-[#0A1F3C] px-6 sm:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 lg:py-5 xl:py-6 rounded-none font-bold tracking-widest text-[12px] sm:text-[13px] lg:text-[14px] hover:bg-blue-50 transition-all flex items-center justify-center gap-3 uppercase shadow-2xl">
                {t('pages.entreprises.contact_btn')} <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="border-2 border-white/30 text-white px-6 sm:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 lg:py-5 xl:py-6 rounded-none font-bold tracking-widest text-[12px] sm:text-[13px] lg:text-[14px] hover:bg-white hover:text-[#0A1F3C] transition-all uppercase">
                {t('pages.entreprises.learn_more')}
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experience Stats - Localized/Themed */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-[120px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[120px] bg-white border-y border-slate-100">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
          {[
            { label: "ASSETS UNDER MGMT", value: "€12.5B", sub: "Annual Growth +14.2%" },
            { label: "INSTITUTIONAL CLIENTS", value: "850+", sub: "Across 4 Continents" },
            { label: "GLOBAL ADVISORS", value: "120+", sub: "Bespoke Portfolio Mgmt" },
            { label: "AVERAGE ROI", value: "9.2%", sub: "Net of all expenses" }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-[10px] sm:text-[11px] lg:text-[12px] font-bold text-[#0E2E5C] tracking-[0.3em] mb-3 sm:mb-4 uppercase leading-none">
                {stat.label}
              </div>
              <div className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-black text-[#0A1F3C] tracking-tighter mb-2 sm:mb-3 leading-none group-hover:text-[#0E2E5C] transition-colors">
                {stat.value}
              </div>
              <div className="text-[#64748B] text-[12px] sm:text-[13px] lg:text-[14px] font-medium opacity-60">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
