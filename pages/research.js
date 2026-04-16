import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  BarChart3, 
  PieChart, 
  FileText, 
  Download, 
  Search, 
  Filter, 
  ChevronRight, 
  ArrowUpRight, 
  Star, 
  Eye, 
  Calendar, 
  Award, 
  Target, 
  Globe, 
  Users, 
  Lightbulb, 
  CheckCircle 
} from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from '../lib/i18n';

export default function ResearchPage() {
  const { t, isLoading } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const researchReports = [
    {
      id: 'Q4-2024-MARKET-OUTLOOK',
      title: t('pages.research.report_1_title'),
      category: 'market',
      author: t('pages.research.author_1'),
      date: '2024-01-15',
      summary: t('pages.research.report_1_summary'),
      pages: 45,
      download: true,
      featured: true,
      rating: 4.8
    },
    {
      id: 'ESG-IMPACT-2024',
      title: t('pages.research.report_2_title'),
      category: 'esg',
      author: t('pages.research.author_2'),
      date: '2024-01-10',
      summary: t('pages.research.report_2_summary'),
      pages: 62,
      download: true,
      featured: true,
      rating: 4.9
    },
    {
      id: 'DIGITAL-BANKING-TRANSFORMATION',
      title: t('pages.research.report_3_title'),
      category: 'technology',
      author: t('pages.research.author_3'),
      date: '2024-01-08',
      summary: t('pages.research.report_3_summary'),
      pages: 38,
      download: true,
      featured: false,
      rating: 4.7
    },
    {
      id: 'RISK-MANAGEMENT-STRATEGIES',
      title: t('pages.research.report_4_title'),
      category: 'risk',
      author: t('pages.research.author_4'),
      date: '2024-01-05',
      summary: t('pages.research.report_4_summary'),
      pages: 55,
      download: true,
      featured: false,
      rating: 4.6
    },
    {
      id: 'PRIVATE-EQUITY-TRENDS',
      title: t('pages.research.report_5_title'),
      category: 'investment',
      author: t('pages.research.author_1'),
      date: '2024-01-03',
      summary: t('pages.research.report_5_summary'),
      pages: 42,
      download: true,
      featured: false,
      rating: 4.5
    },
    {
      id: 'CRYPTOCURRENCY-ANALYSIS',
      title: t('pages.research.report_6_title'),
      category: 'digital',
      author: t('pages.research.author_3'),
      date: '2023-12-28',
      summary: t('pages.research.report_6_summary'),
      pages: 48,
      download: true,
      featured: false,
      rating: 4.4
    }
  ];

  const categories = [
    { id: 'all', name: t('common.all'), icon: <FileText className="w-4 h-4" /> },
    { id: 'market', name: t('pages.research.macro_analysis'), icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'esg', name: 'ESG', icon: <Globe className="w-4 h-4" /> },
    { id: 'technology', name: t('pages.research.fintech_innovation'), icon: <Lightbulb className="w-4 h-4" /> },
    { id: 'risk', name: t('pages.research.risk_management'), icon: <Target className="w-4 h-4" /> },
    { id: 'investment', name: t('navigation.financial_markets'), icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'digital', name: 'Digital', icon: <PieChart className="w-4 h-4" /> }
  ];

  const filteredReports = researchReports.filter(report => 
    (selectedCategory === 'all' || report.category === selectedCategory) &&
    (report.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
     report.summary?.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const researchAreas = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: t('pages.research.macro_analysis'),
      description: t('pages.research.macro_desc'),
      papers: t('common.publications')
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('pages.research.sustainable_finance'),
      description: t('pages.research.sustainable_desc'),
      papers: t('common.publications')
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: t('pages.research.fintech_innovation'),
      description: t('pages.research.fintech_desc'),
      papers: t('common.publications')
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: t('pages.research.risk_management'),
      description: t('pages.research.risk_desc'),
      papers: t('common.publications')
    }
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-slate-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section - Ultra Premium */}
      <section className="section-institutional-navy pt-20 md:pt-24 lg:pt-32 relative overflow-hidden">
        {/* Premium Background with Multiple Layers */}
        <div className="absolute inset-0">
          {/* Main Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1454165833767-027ffea9e778?w=1920&h=1080&fit=crop&auto=format&q=95"
            srcSet="https://images.unsplash.com/photo-1454165833767-027ffea9e778?w=640&h=480&fit=crop&auto=format&q=95 640w,
                    https://images.unsplash.com/photo-1454165833767-027ffea9e778?w=768&h=576&fit=crop&auto=format&q=95 768w,
                    https://images.unsplash.com/photo-1454165833767-027ffea9e778?w=1024&h=768&fit=crop&auto=format&q=95 1024w,
                    https://images.unsplash.com/photo-1454165833767-027ffea9e778?w=1920&h=1080&fit=crop&auto=format&q=95 1920w"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            alt="Research Center"
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
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8D8C3]" />
              <span className="text-xs sm:text-sm font-medium text-white tracking-wide">{t('pages.research.hero_tag')}</span>
            </motion.div>
            
            {/* Premium Title with Gradient Text */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t('pages.research.title')}
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
              {t('pages.research.subtitle')}
            </motion.p>

            {/* Premium Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-10 sm:mt-12"
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">500+</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">{t('common.publications')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">25</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">{t('common.services_available', { count: 25 })}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">100%</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">{t('common.validate')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">AAA</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">{t('common.rating')}</div>
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

      {/* Main Content Area */}
      <section className="section-institutional-white py-12 sm:py-16 md:py-20 pb-24 sm:pb-32 md:pb-40">
        <div className="container-institutional">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 sm:gap-12">
            
            {/* Sidebar Filters */}
            <aside className="lg:col-span-1">
              <div className="sticky top-20 md:top-24 lg:top-32 space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-widest mb-4 sm:mb-6">
                    {t('common.filter')}
                  </h3>
                  <div className="space-y-2">
                    {(categories || []).map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center space-x-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl transition-all duration-300 ${
                          selectedCategory === category.id
                            ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20'
                            : 'hover:bg-slate-100 text-slate-600'
                        }`}
                      >
                        {category.icon}
                        <span className="font-semibold text-xs sm:text-sm">{category.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 -m-4 opacity-10">
                    <TrendingUp className="w-24 h-24 sm:w-32 sm:h-32" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 relative z-10">{t('pages.research.cta_title')}</h4>
                  <p className="text-white/70 text-xs sm:text-sm mb-4 sm:mb-6 relative z-10 leading-relaxed">
                    {t('pages.research.cta_subtitle')}
                  </p>
                  <button className="w-full bg-white text-slate-900 py-3 sm:py-4 rounded-xl font-bold text-xs sm:text-sm hover:scale-[1.02] transition-transform">
                    {t('common.contact_us')}
                  </button>
                </div>
              </div>
            </aside>

            {/* Content Feed */}
            <main className="lg:col-span-3">
              {/* Search Bar */}
              <div className="mb-6 sm:mb-8 md:mb-10">
                <input
                  type="text"
                  placeholder={t('common.search')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 sm:px-6 pr-6 sm:pr-8 py-3 sm:py-4 md:py-5 bg-white border border-slate-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-slate-900 transition-all text-base sm:text-lg"
                />
              </div>

              {/* Reports Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {(filteredReports || []).map((report) => (
                  <motion.div
                    key={report.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="card-institutional-elevated group p-6 sm:p-8"
                  >
                    <div className="flex items-center justify-between mb-4 sm:mb-6 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">
                      <span className="bg-slate-100 text-slate-900 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">{report.category}</span>
                      <span className="flex items-center">
                        <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                        {report.date}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4 group-hover:text-slate-700 transition-colors leading-snug">
                      {report.title}
                    </h3>
                    
                    <p className="text-slate-600 text-xs sm:text-sm mb-6 sm:mb-8 line-clamp-3 leading-relaxed">
                      {report.summary}
                    </p>

                    <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-slate-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-900">
                          {report.author.charAt(0)}
                        </div>
                        <div className="text-[10px] sm:text-xs">
                          <p className="font-bold text-slate-900">{report.author}</p>
                          <p className="text-slate-400 uppercase">{report.pages} {t('common.page').toLowerCase()}</p>
                        </div>
                      </div>
                      <button className="p-2 sm:p-3 bg-slate-100 rounded-xl group-hover:bg-slate-900 group-hover:text-white transition-all">
                        <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </main>

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
                {t('pages.research.cta_title')}
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
                {t('pages.research.cta_subtitle')}
              </motion.p>

              {/* Premium Button */}
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
                  <span>{t('common.contact_us')}</span>
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-transform" />
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
