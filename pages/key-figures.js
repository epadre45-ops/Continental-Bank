import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Building, 
  Globe, 
  Shield, 
  DollarSign, 
  BarChart3, 
  PieChart, 
  Target, 
  Award, 
  CheckCircle, 
  ArrowUpRight,
  Calendar,
  Clock
} from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '../lib/i18n';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function KeyFiguresPage() {
  const { t } = useTranslation();
  const [selectedYear, setSelectedYear] = useState('2024');
  const [activeCategory, setActiveCategory] = useState('overview');

  const years = ['2024', '2023', '2022', '2021'];

  const categories = [
    { id: 'overview', name: t('pages.key_figures.cat_overview'), icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'financial', name: t('pages.key_figures.cat_financial'), icon: <DollarSign className="w-4 h-4" /> },
    { id: 'customers', name: t('pages.key_figures.cat_customers'), icon: <Users className="w-4 h-4" /> },
    { id: 'operations', name: t('pages.key_figures.cat_operations'), icon: <Building className="w-4 h-4" /> },
    { id: 'international', name: t('pages.key_figures.cat_international'), icon: <Globe className="w-4 h-4" /> }
  ];

  const keyFiguresData = {
    overview: {
      2024: [
        { label: t('pages.key_figures.label_balance_sheet'), value: '€45.2B', change: '+12.3%', trend: 'up', icon: <BarChart3 className="w-6 h-6" /> },
        { label: t('pages.key_figures.label_income'), value: '€1.8B', change: '+8.7%', trend: 'up', icon: <DollarSign className="w-6 h-6" /> },
        { label: t('pages.key_figures.label_profit'), value: '€245M', change: '+18.2%', trend: 'up', icon: <TrendingUp className="w-6 h-6" /> },
        { label: t('pages.key_figures.label_cet1'), value: '15.8%', change: '+0.5%', trend: 'up', icon: <Shield className="w-6 h-6" /> },
        { label: t('pages.key_figures.label_clients'), value: '2.3M', change: '+15.4%', trend: 'up', icon: <Users className="w-6 h-6" /> },
        { label: t('pages.key_figures.label_branches'), value: '127', change: '+8', trend: 'up', icon: <Building className="w-6 h-6" /> }
      ],
      2023: [
        { label: t('pages.key_figures.label_balance_sheet'), value: '€40.2B', change: '+9.8%', trend: 'up', icon: <BarChart3 className="w-6 h-6" /> },
        { label: t('pages.key_figures.label_income'), value: '€1.65B', change: '+6.2%', trend: 'up', icon: <DollarSign className="w-6 h-6" /> },
        { label: t('pages.key_figures.label_profit'), value: '€207M', change: '+12.1%', trend: 'up', icon: <TrendingUp className="w-6 h-6" /> },
        { label: t('pages.key_figures.label_cet1'), value: '15.3%', change: '+0.3%', trend: 'up', icon: <Shield className="w-6 h-6" /> },
        { label: t('pages.key_figures.label_clients'), value: '2.0M', change: '+11.2%', trend: 'up', icon: <Users className="w-6 h-6" /> },
        { label: t('pages.key_figures.label_branches'), value: '119', change: '+5', trend: 'up', icon: <Building className="w-6 h-6" /> }
      ]
    },
    financial: {
      2024: [
        { label: t('pages.key_figures.label_deposits'), value: '€28.4B', change: '+14.2%', trend: 'up', icon: <DollarSign className="w-6 h-6" /> },
        { label: t('pages.key_figures.label_loans'), value: '€22.7B', change: '+11.8%', trend: 'up', icon: <Target className="w-6 h-6" /> },
        { label: t('pages.key_figures.label_funds'), value: '€7.1B', change: '+16.3%', trend: 'up', icon: <Shield className="w-6 h-6" /> },
        { label: t('pages.key_figures.label_risk'), value: '0.8%', change: '-0.2%', trend: 'down', icon: <CheckCircle className="w-6 h-6" /> },
        { label: t('pages.key_figures.label_margin'), value: '2.1%', change: '+0.1%', trend: 'up', icon: <BarChart3 className="w-6 h-6" /> },
        { label: t('pages.key_figures.label_roa'), value: '0.54%', change: '+0.08%', trend: 'up', icon: <PieChart className="w-6 h-6" /> }
      ]
    },
    customers: {
      2024: [
        { label: t('pages.key_figures.label_individuals'), value: '1.8M', change: '+12.5%', trend: 'up', icon: <Users className="w-6 h-6" /> },
        { label: t('pages.key_figures.label_businesses'), value: '450K', change: '+18.7%', trend: 'up', icon: <Building className="w-6 h-6" /> },
        { label: t('pages.key_figures.label_institutionals'), value: '50K', change: '+25.0%', trend: 'up', icon: <Globe className="w-6 h-6" /> },
        { label: t('pages.key_figures.label_satisfaction'), value: '4.6/5', change: '+0.2', trend: 'up', icon: <Award className="w-6 h-6" /> },
        { label: t('pages.key_figures.label_retention'), value: '92.3%', change: '+1.8%', trend: 'up', icon: <CheckCircle className="w-6 h-6" /> },
        { label: t('pages.key_figures.label_digital'), value: '1.9M', change: '+28.4%', trend: 'up', icon: <Target className="w-6 h-6" /> }
      ]
    },
    operations: {
      2024: [
        { label: t('pages.key_figures.label_transactions'), value: '450M', change: '+22.3%', trend: 'up', icon: <BarChart3 className="w-6 h-6" /> },
        { label: t('pages.key_figures.label_employees'), value: '8,450', change: '+6.2%', trend: 'up', icon: <Users className="w-6 h-6" /> },
        { label: t('pages.key_figures.label_automated'), value: '78%', change: '+12%', trend: 'up', icon: <Target className="w-6 h-6" /> },
        { label: t('pages.key_figures.label_processing'), value: '1.2s', change: '-0.3s', trend: 'down', icon: <Clock className="w-6 h-6" /> },
        { label: t('pages.key_figures.label_uptime'), value: '99.98%', change: '+0.02%', trend: 'up', icon: <Shield className="w-6 h-6" /> },
        { label: t('pages.key_figures.label_patents'), value: '23', change: '+8', trend: 'up', icon: <Award className="w-6 h-6" /> }
      ]
    },
    international: {
      2024: [
        { label: t('pages.key_figures.label_countries'), value: '18', change: '+3', trend: 'up', icon: <Globe className="w-6 h-6" /> },
        { label: t('pages.key_figures.label_subsidiaries'), value: '7', change: '+2', trend: 'up', icon: <Building className="w-6 h-6" /> },
        { label: t('pages.key_figures.label_assets'), value: '€12.8B', change: '+24.7%', trend: 'up', icon: <DollarSign className="w-6 h-6" /> },
        { label: t('pages.key_figures.label_banks'), value: '1,250', change: '+180', trend: 'up', icon: <Users className="w-6 h-6" /> },
        { label: t('pages.key_figures.label_currencies'), value: '45', change: '+8', trend: 'up', icon: <BarChart3 className="w-6 h-6" /> },
        { label: t('pages.key_figures.label_revenue'), value: '28%', change: '+5%', trend: 'up', icon: <TrendingUp className="w-6 h-6" /> }
      ]
    }
  };

  const currentFigures = keyFiguresData[activeCategory]?.[selectedYear] || keyFiguresData.overview[2024] || [];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Ultra Premium */}
      <section className="section-institutional-navy pt-20 md:pt-24 lg:pt-32 relative overflow-hidden">
        {/* Premium Background with Multiple Layers */}
        <div className="absolute inset-0">
          {/* Main Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&auto=format&q=95"
            srcSet="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&h=480&fit=crop&auto=format&q=95 640w,
                    https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=768&h=576&fit=crop&auto=format&q=95 768w,
                    https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1024&h=768&fit=crop&auto=format&q=95 1024w,
                    https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&auto=format&q=95 1920w"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            alt="Data analytics"
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
              <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8D8C3]" />
              <span className="text-xs sm:text-sm font-medium text-white tracking-wide">{t('pages.key_figures.hero_tag')}</span>
            </motion.div>
            
            {/* Premium Title with Gradient Text */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t('pages.key_figures.hero_title')}
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
              {t('pages.key_figures.hero_subtitle')}
            </motion.p>

            {/* Premium Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-10 sm:mt-12"
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">€45.2B</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Bilan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">2.3M</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">+14.2%</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Croissance</div>
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

      {/* Filter and Content Controls */}
      <nav className="bg-white border-b border-[rgba(10,30,60,0.08)] sticky top-20 z-40 shadow-sm">
        <div className="container-institutional">
          <div className="flex flex-col sm:flex-row justify-between items-center py-3 sm:py-4 space-y-4 sm:space-y-0">
            <div className="flex space-x-4 sm:space-x-6 lg:space-x-8 overflow-x-auto w-full sm:w-auto">
              {(categories || []).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center space-x-2 py-4 border-b-2 transition-all whitespace-nowrap ${
                    activeCategory === cat.id 
                      ? 'border-[#0E2E5C] text-[#0E2E5C] font-bold' 
                      : 'border-transparent text-[#64748B] hover:text-[#0A1F3C]'
                  }`}
                >
                  {cat.icon}
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest">{cat.name}</span>
                </button>
              ))}
            </div>

            <div className="flex bg-[#F6F8FB] p-1 rounded-xl">
              {(years || []).map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs font-bold transition-all ${
                    selectedYear === year ? 'bg-white shadow-sm text-[#0E2E5C]' : 'text-[#64748B]'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Figures Grid */}
      <section className="section-institutional-white">
        <div className="container-institutional">
          <motion.div
            key={`${activeCategory}-${selectedYear}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {currentFigures.length > 0 ? (
              (currentFigures || []).map((figure) => (
                <div key={figure.title} className="card-institutional-elevated p-6 sm:p-8 lg:p-10 group hover:border-[#0E2E5C] transition-all overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-[#F6F8FB] rounded-bl-[50px] sm:rounded-bl-[75px] lg:rounded-bl-[100px] -mr-8 -mt-8 sm:-mr-12 sm:-mt-12 lg:-mr-16 lg:-mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6 sm:mb-8">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0E2E5C]/5 text-[#0E2E5C] rounded-xl flex items-center justify-center">
                        {figure.icon}
                      </div>
                      <div className={`flex items-center text-[10px] sm:text-xs font-bold uppercase tracking-widest ${
                        figure.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {figure.change}
                        {figure.trend === 'up' ? <ArrowUpRight className="ml-1 w-2 h-2 sm:w-3 sm:h-3" /> : <div className="ml-1 rotate-90"><ArrowUpRight className="w-2 h-2 sm:w-3 sm:h-3" /></div>}
                      </div>
                    </div>
                    <h3 className="text-[10px] sm:text-xs font-bold text-[#94A3B8] uppercase tracking-[0.2em] mb-3">{figure.label}</h3>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1F3C] tracking-tighter">{figure.value}</div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-1 sm:col-span-2 lg:col-span-3 py-12 sm:py-16 lg:py-20 text-center bg-[#F6F8FB] rounded-2xl sm:rounded-[2.5rem] lg:rounded-[3rem] border border-dashed border-[#CBD5E1]">
                <Clock className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-[#94A3B8] mx-auto mb-6 opacity-50" />
                <p className="text-lg sm:text-xl font-bold text-[#0A1F3C]">Reporting in progress</p>
                <p className="text-sm sm:text-base text-[#64748B]">Data for this specific period is being audited.</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Performance Trends Summary */}
      <section className="section-institutional-stratified">
        <div className="container-institutional">
          <div className="bg-[#0A1F3C] rounded-2xl sm:rounded-[2.5rem] lg:rounded-[3rem] p-8 sm:p-12 lg:p-16 text-white overflow-hidden relative group">
            <Globe className="absolute -right-10 -bottom-10 sm:-right-16 sm:-bottom-16 lg:-right-20 lg:-bottom-20 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 text-white/5 group-hover:scale-110 transition-transform duration-1000" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">{t('pages.key_figures.trends_title')}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 leading-tight">
                  {t('pages.key_figures.trends_subtitle')}
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center justify-between p-3 sm:p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="text-sm sm:text-base font-medium">Annual Revenue Growth</span>
                    <span className="text-lg sm:text-xl font-bold text-blue-400">+14.2%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 sm:p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="text-sm sm:text-base font-medium">Return on Equity (ROE)</span>
                    <span className="text-lg sm:text-xl font-bold text-blue-400">12.8%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 sm:p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="text-sm sm:text-base font-medium">Digital Adoption Rate</span>
                    <span className="text-lg sm:text-xl font-bold text-blue-400">85%+</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="bg-white/10 p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-[1.5rem] lg:rounded-[2rem] border border-white/20 text-center">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 tracking-tighter">18.5%</div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest opacity-60">Avg. Annual Profit Growth</p>
                </div>
                <div className="bg-white px-6 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12 rounded-xl sm:rounded-[1.5rem] lg:rounded-[2rem] text-center text-[#0A1F3C] shadow-2xl">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 tracking-tighter">A1</div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#0E2E5C] font-bold">Credit Rating S&P</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact CTA - Ultra Premium */}
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
                {t('pages.key_figures.banner_title')}
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
                "{t('pages.key_figures.banner_desc')}"
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
                  href="/strategy" 
                  className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-[#0E2E5C] to-[#153E75] text-white rounded-full font-medium text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
                >
                  <span>Read 2024 Vision</span>
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
                <Link 
                  href="/contact" 
                  className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-white text-[#0E2E5C] border-2 border-[#0E2E5C] rounded-full font-medium text-base sm:text-lg hover:bg-[#0E2E5C] hover:text-white transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
                >
                  <span>Contact Investor Relations</span>
                  <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
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
