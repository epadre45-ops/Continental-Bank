import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  BarChart3, 
  PieChart, 
  Globe, 
  ArrowUpRight, 
  ArrowDownRight, 
  Activity, 
  DollarSign, 
  Building, 
  Shield, 
  Zap, 
  Target, 
  Award, 
  ChevronRight, 
  Star, 
  Eye, 
  Clock, 
  AlertCircle 
} from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '../lib/i18n';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MarketsPage() {
  const { t } = useTranslation();
  const [selectedMarket, setSelectedMarket] = useState('all');
  const [timeframe, setTimeframe] = useState('1D');

  const marketsList = [
    {
      id: 'equities',
      name: t('pages.markets.cat_equities'),
      description: t('pages.markets.cat_equities_desc'),
      icon: <TrendingUp className="w-6 h-6" />,
      value: '€2.8T',
      change: '+2.3%',
      trend: 'up',
      volume: '€125B',
      color: 'text-green-600'
    },
    {
      id: 'fixed-income',
      name: t('pages.markets.cat_fixed_income'),
      description: t('pages.markets.cat_fixed_income_desc'),
      icon: <BarChart3 className="w-6 h-6" />,
      value: '€1.5T',
      change: '+0.8%',
      trend: 'up',
      volume: '€85B',
      color: 'text-green-600'
    },
    {
      id: 'commodities',
      name: t('pages.markets.cat_commodities'),
      description: t('pages.markets.cat_commodities_desc'),
      icon: <Globe className="w-6 h-6" />,
      value: '€320B',
      change: '-1.2%',
      trend: 'down',
      volume: '€45B',
      color: 'text-red-600'
    },
    {
      id: 'currencies',
      name: t('pages.markets.cat_currencies'),
      description: t('pages.markets.cat_currencies_desc'),
      icon: <DollarSign className="w-6 h-6" />,
      value: '€180B',
      change: '+0.5%',
      trend: 'up',
      volume: '€220B',
      color: 'text-green-600'
    },
    {
      id: 'derivatives',
      name: t('pages.markets.cat_derivatives'),
      description: t('pages.markets.cat_derivatives_desc'),
      icon: <Activity className="w-6 h-6" />,
      value: '€450B',
      change: '+1.8%',
      trend: 'up',
      volume: '€95B',
      color: 'text-green-600'
    },
    {
      id: 'alternatives',
      name: t('pages.markets.cat_alternatives'),
      description: t('pages.markets.cat_alternatives_desc'),
      icon: <Building className="w-6 h-6" />,
      value: '€280B',
      change: '+3.1%',
      trend: 'up',
      volume: '€35B',
      color: 'text-green-600'
    }
  ];

  const indices = [
    { name: 'EURO STOXX 50', value: '4,982.50', change: '+1.24%', trend: 'up' },
    { name: 'DAX 40', value: '18,175.20', change: '+0.95%', trend: 'up' },
    { name: 'CAC 40', value: '8,150.30', change: '+1.12%', trend: 'up' },
    { name: 'FTSE 100', value: '7,935.10', change: '+0.45%', trend: 'up' },
    { name: 'S&P 500', value: '5,241.50', change: '+0.85%', trend: 'up' },
    { name: 'NASDAQ 100', value: '18,340.20', change: '+1.42%', trend: 'up' }
  ];

  const features = [
    {
      title: t('pages.markets.feat_execution'),
      description: t('pages.markets.feat_execution_desc'),
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: t('pages.markets.feat_pricing'),
      description: t('pages.markets.feat_pricing_desc'),
      icon: <PieChart className="w-6 h-6" />
    },
    {
      title: t('pages.markets.feat_liquidity'),
      description: t('pages.markets.feat_liquidity_desc'),
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: t('pages.markets.feat_tech'),
      description: t('pages.markets.feat_tech_desc'),
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: t('pages.markets.feat_analytics'),
      description: t('pages.markets.feat_analytics_desc'),
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: t('pages.markets.feat_support'),
      description: t('pages.markets.feat_support_desc'),
      icon: <Star className="w-6 h-6" />
    }
  ];

  const filteredMarkets = selectedMarket === 'all' 
    ? marketsList 
    : marketsList.filter(m => m.id === selectedMarket);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Ultra Premium */}
      <section className="section-institutional-navy pt-20 md:pt-24 lg:pt-32 relative overflow-hidden">
        {/* Premium Background with Multiple Layers */}
        <div className="absolute inset-0">
          {/* Main Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=1920&h=1080&fit=crop&auto=format&q=95"
            srcSet="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=640&h=480&fit=crop&auto=format&q=95 640w,
                    https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=768&h=576&fit=crop&auto=format&q=95 768w,
                    https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=1024&h=768&fit=crop&auto=format&q=95 1024w,
                    https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=1920&h=1080&fit=crop&auto=format&q=95 1920w"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            alt="Market background"
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
              <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8D8C3]" />
              <span className="text-xs sm:text-sm font-medium text-white tracking-wide">{t('pages.markets.hero_tag')}</span>
            </motion.div>
            
            {/* Premium Title with Gradient Text */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t('pages.markets.hero_title')}
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
              {t('pages.markets.hero_subtitle')}
            </motion.p>

            {/* Premium Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-10 sm:mt-12"
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">€5.5T</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Volume Total</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">50K+</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Instruments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">1.2ms</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Latence</div>
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

      {/* Markets Toolbar */}
      <nav className="bg-white border-b border-[rgba(10,30,60,0.08)] sticky top-16 md:top-20 z-40 shadow-md">
        <div className="container-institutional">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="flex space-x-6 sm:space-x-8 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              <button
                onClick={() => setSelectedMarket('all')}
                className={`text-xs uppercase tracking-widest font-bold whitespace-nowrap py-2 px-1 transition-all border-b-2 ${
                  selectedMarket === 'all' ? 'border-[#0E2E5C] text-[#0E2E5C]' : 'border-transparent text-[#94A3B8] hover:text-[#0A1F3C]'
                }`}
              >
                {t('pages.markets.filter_all')}
              </button>
              {(marketsList || []).map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedMarket(m.id)}
                  className={`text-xs uppercase tracking-widest font-bold whitespace-nowrap py-2 px-1 transition-all border-b-2 ${
                    selectedMarket === m.id ? 'border-[#0E2E5C] text-[#0E2E5C]' : 'border-transparent text-[#94A3B8] hover:text-[#0A1F3C]'
                  }`}
                >
                  {m.name}
                </button>
              ))}
            </div>

            <div className="hidden md:flex bg-[#F6F8FB] p-1 rounded-xl">
              {['1D', '1W', '1M', '3M', '1Y'].map((tf) => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`px-3 sm:px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    timeframe === tf ? 'bg-white shadow-sm text-[#0E2E5C]' : 'text-[#64748B]'
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Market Overview Grid */}
      <section className="section-institutional-white">
        <div className="container-institutional">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              <h2 className="text-2xl font-bold text-[#0A1F3C]">{t('pages.markets.overview_title')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {(filteredMarkets || []).map((market, index) => (
                  <motion.div
                    key={market.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="card-institutional-elevated p-6 sm:p-8 group hover:border-[#0E2E5C] transition-all"
                  >
                    <div className="flex justify-between items-start mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F6F8FB] rounded-xl flex items-center justify-center text-[#0E2E5C] group-hover:bg-[#0E2E5C] group-hover:text-white transition-colors">
                        {market.icon}
                      </div>
                      <div className={`flex items-center text-xs sm:text-sm font-bold ${market.color}`}>
                        {market.change}
                        {market.trend === 'up' ? <ArrowUpRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" /> : <ArrowDownRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />}
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0A1F3C] mb-1.5 sm:mb-2">{market.name}</h3>
                    <p className="text-[11px] sm:text-xs text-[#64748B] mb-4 sm:mb-6 leading-relaxed line-clamp-2">
                      {market.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-slate-50">
                      <div>
                        <span className="text-[10px] text-[#94A3B8] uppercase tracking-widest block mb-0.5 sm:mb-1">{t('pages.markets.value')}</span>
                        <span className="text-lg sm:text-xl font-bold text-[#0A1F3C] tracking-tighter">{market.value}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#94A3B8] uppercase tracking-widest block mb-0.5 sm:mb-1">{t('pages.markets.volume')}</span>
                        <span className="text-lg sm:text-xl font-bold text-[#0A1F3C] tracking-tighter">{market.volume}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="bg-[#0A1F3C] rounded-xl sm:rounded-[1.5rem] lg:rounded-[2.5rem] p-6 sm:p-8 lg:p-10 text-white shadow-2xl relative overflow-hidden group">
                <Globe className="absolute top-6 right-6 sm:top-8 sm:right-8 lg:top-10 lg:right-10 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 text-white/5 group-hover:scale-110 transition-transform duration-1000" />
                <h3 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 relative z-10 border-b border-white/10 pb-3 sm:pb-4">{t('pages.markets.indices_title')}</h3>
                <div className="space-y-4 sm:space-y-6 relative z-10">
                  {(indices || []).map((idx, i) => (
                    <div key={i} className="flex items-center justify-between group/item">
                      <span className="text-xs sm:text-sm font-medium text-white/70 group-hover/item:text-white transition-colors">{idx.name}</span>
                      <div className="text-right">
                        <div className="font-bold tracking-tighter">{idx.value}</div>
                        <div className={`text-[10px] sm:text-[10px] font-bold ${idx.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                          {idx.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#F8FAFC] rounded-xl sm:rounded-[1.5rem] lg:rounded-[2.5rem] p-6 sm:p-8 lg:p-10 border border-slate-200">
                <h3 className="text-lg sm:text-xl font-bold text-[#0A1F3C] mb-6 sm:mb-8 border-b border-slate-100 pb-3 sm:pb-4">{t('pages.markets.hours_title')}</h3>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { market: 'Euronext Paris', status: 'open', time: '09:00 - 17:30' },
                    { market: 'London Stock Ex.', status: 'open', time: '08:00 - 16:30' },
                    { market: 'Frankfurt Stock Ex.', status: 'open', time: '09:00 - 17:30' },
                    { market: 'New York Stock Ex.', status: 'closed', time: '15:30 - 22:00' }
                  ].map((h, i) => (
                    <div key={i} className="flex items-center justify-between p-2.5 sm:p-3 bg-white rounded-xl shadow-sm">
                      <div>
                        <div className="text-[11px] sm:text-xs font-bold text-[#0A1F3C]">{h.market}</div>
                        <div className="text-[9px] sm:text-[10px] text-[#94A3B8]">{h.time} CET</div>
                      </div>
                      <div className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[9px] sm:text-[10px] font-bold uppercase ${
                        h.status === 'open' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {h.status === 'open' ? t('pages.markets.open') : t('pages.markets.closed')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-institutional-stratified">
        <div className="container-institutional">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="h2-institutional mb-4">{t('pages.markets.features_title')}</h2>
            <p className="text-[#64748B] body-institutional max-w-2xl mx-auto">
              {t('pages.markets.features_subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {(features || []).map((feat, i) => (
              <div key={i} className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-[1.5rem] lg:rounded-[2.5rem] border border-[rgba(10,30,60,0.05)] shadow-sm hover:shadow-xl transition-all group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#0A1F3C]/5 text-[#0A1F3C] rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-[#0A1F3C] group-hover:text-white transition-all transform group-hover:rotate-3">
                  {feat.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0A1F3C] mb-3 sm:mb-4">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Impact Tech CTA */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container-institutional">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-[#0A1F3C] rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[4rem] p-8 sm:p-12 md:p-16 relative overflow-hidden group shadow-2xl"
          >
            <Zap className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 lg:-top-10 lg:-right-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 text-white/5 group-hover:scale-125 transition-transform duration-1000" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                  {t('pages.markets.banner_title')}
                </h2>
                <p className="text-white/60 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed italic">
                  "{t('pages.markets.banner_desc')}"
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                  <button className="btn-institutional-primary bg-white text-[#0A1F3C] hover:bg-white/90 border-transparent px-6 sm:px-8 lg:px-10">
                    {t('pages.markets.open_account')}
                  </button>
                  <button className="text-white font-bold uppercase tracking-widest text-xs flex items-center hover:tracking-[0.2em] transition-all">
                    {t('pages.markets.free_demo')}
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white/5 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-1.5 sm:mb-2 leading-none">1.2ms</div>
                  <p className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-widest font-bold">Latency</p>
                </div>
                <div className="bg-white/5 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-1.5 sm:mb-2 leading-none">99.99%</div>
                  <p className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-widest font-bold">Execution Rate</p>
                </div>
                <div className="bg-white/10 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/20 text-center col-span-2">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-1.5 sm:mb-2 leading-none">50,000+</div>
                  <p className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-widest font-bold">Financial Instruments</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Performance */}
      <section className="section-institutional-white bg-slate-50/50">
        <div className="container-institutional">
          <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 md:p-16 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] shadow-xl border border-slate-100">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1F3C] mb-4">{t('pages.markets.perf_title')}</h2>
              <p className="text-[#64748B] font-medium">{t('pages.markets.perf_subtitle')}</p>
            </div>
            
            <div className="space-y-6 sm:space-y-10">
              {[
                { label: 'Active Institutional Traders', val: '12,450', trend: '+15.4%' },
                { label: 'Average Monthly Trading Volume', val: '€580B', trend: '+22.3%' },
                { label: 'API Execution Uptime', val: '100%', trend: 'Stable' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 sm:p-6 bg-[#F6F8FB] rounded-xl sm:rounded-2xl hover:bg-[#0E2E5C] hover:text-white transition-all group">
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-[#0A1F3C] group-hover:text-white/80 transition-colors block mb-0.5 sm:mb-1">{item.label}</span>
                    <span className="text-2xl sm:text-3xl font-black">{item.val}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest opacity-40 group-hover:opacity-100">{item.trend}</span>
                  </div>
                </div>
              ))}
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
                {t('pages.markets.cta_title')}
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
                {t('pages.markets.cta_subtitle')}
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
                  <span>{t('pages.markets.open_account')}</span>
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
                <button 
                  className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-white text-[#0E2E5C] border-2 border-[#0E2E5C] rounded-full font-medium text-base sm:text-lg hover:bg-[#0E2E5C] hover:text-white transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
                >
                  <span>{t('pages.markets.free_demo')}</span>
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
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
