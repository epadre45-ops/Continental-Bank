import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Calendar, 
  Download, 
  Search, 
  Filter, 
  ChevronRight, 
  ArrowUpRight, 
  Star, 
  Eye, 
  Globe, 
  Users, 
  Award, 
  TrendingUp, 
  Building, 
  CheckCircle, 
  AlertCircle 
} from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from '../lib/i18n';

export default function PressPage() {
  const { t, isLoading } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const pressReleases = [
    {
      id: 'Q4-2024-RESULTS',
      title: t('pages.press.release_1_title'),
      category: 'results',
      date: '2024-01-25',
      summary: t('pages.press.release_1_summary'),
      content: t('pages.press.release_1_content'),
      featured: true,
      download: true
    },
    {
      id: 'ASIA-EXPANSION',
      title: t('pages.press.release_2_title'),
      category: 'expansion',
      date: '2024-01-20',
      summary: t('pages.press.release_2_summary'),
      content: t('pages.press.release_2_content'),
      featured: true,
      download: true
    },
    {
      id: 'ESG-LEADERSHIP',
      title: t('pages.press.release_3_title'),
      category: 'esg',
      date: '2024-01-15',
      summary: t('pages.press.release_3_summary'),
      content: t('pages.press.release_3_content'),
      featured: false,
      download: true
    },
    {
      id: 'DIGITAL-PLATFORM',
      title: t('pages.press.release_4_title'),
      category: 'technology',
      date: '2024-01-10',
      summary: t('pages.press.release_4_summary'),
      content: t('pages.press.release_4_content'),
      featured: false,
      download: true
    }
  ];

  const pressArticles = [
    {
      id: 'ANNUAL-RESULT-2023',
      title: t('pages.press.article_1_title'),
      category: 'results',
      date: '2024-01-20',
      summary: t('pages.press.article_1_summary'),
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=450&fit=crop&auto=format'
    },
    {
      id: 'COP30-PARTNERSHIP',
      title: t('pages.press.article_2_title'),
      category: 'esg',
      date: '2024-01-15',
      summary: t('pages.press.article_2_summary'),
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=450&fit=crop&auto=format'
    },
    {
      id: 'DIGITAL-INNOVATION-AWARD',
      title: t('pages.press.article_3_title'),
      category: 'technology',
      date: '2024-01-12',
      summary: t('pages.press.article_3_summary'),
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=450&fit=crop&auto=format'
    },
    {
      id: 'NEW-CENTRAL-OFFICE',
      title: t('pages.press.article_4_title'),
      category: 'expansion',
      date: '2024-01-08',
      summary: t('pages.press.article_4_summary'),
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=450&fit=crop&auto=format'
    }
  ];

  const categories = [
    { id: 'all', name: t('common.all'), icon: <FileText className="w-4 h-4" /> },
    { id: 'results', name: t('pages.dashboard.performance'), icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'expansion', name: t('pages.research.macro_analysis'), icon: <Globe className="w-4 h-4" /> },
    { id: 'esg', name: 'ESG', icon: <Award className="w-4 h-4" /> },
    { id: 'technology', name: t('pages.research.fintech_innovation'), icon: <Building className="w-4 h-4" /> },
    { id: 'partnership', name: t('common.partners'), icon: <Users className="w-4 h-4" /> },
    { id: 'governance', name: t('pages.governance.title'), icon: <CheckCircle className="w-4 h-4" /> }
  ];

  const mediaContacts = [
    {
      name: 'Marie Schmidt',
      position: t('pages.press.comm_director'),
      email: 'media@continental-kreditbank.com',
      phone: '+33 1 23 45 67 89',
      region: 'Europe'
    },
    {
      name: 'John Smith',
      position: t('pages.press.investor_relations'),
      email: 'investors@continental-kreditbank.com',
      phone: '+44 20 7946 0958',
      region: 'International'
    }
  ];

  const filteredReleases = [...pressReleases, ...pressArticles].filter(release => 
    (selectedCategory === 'all' || release.category === selectedCategory) &&
    (release.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
     release.summary?.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#0E2E5C]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Ultra Premium */}
      <section className="section-institutional-navy pt-32 relative overflow-hidden">
        {/* Premium Background with Multiple Layers */}
        <div className="absolute inset-0">
          {/* Main Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1504711436312-1a07a6cc8b9?w=1920&h=1080&fit=crop&auto=format&q=95"
            srcSet="https://images.unsplash.com/photo-1504711436312-1a07a6cc8b9?w=640&h=480&fit=crop&auto=format&q=95 640w,
                    https://images.unsplash.com/photo-1504711436312-1a07a6cc8b9?w=768&h=576&fit=crop&auto=format&q=95 768w,
                    https://images.unsplash.com/photo-1504711436312-1a07a6cc8b9?w=1024&h=768&fit=crop&auto=format&q=95 1024w,
                    https://images.unsplash.com/photo-1504711436312-1a07a6cc8b9?w=1920&h=1080&fit=crop&auto=format&q=95 1920w"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            alt="Press center"
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
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8D8C3]" />
              <span className="text-xs sm:text-sm font-medium text-white tracking-wide">{t('pages.press.title')}</span>
            </motion.div>
            
            {/* Premium Title with Gradient Text */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t('pages.press.subtitle')}
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
              {t('pages.press.hero_desc')}
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
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">50+</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">Top</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Tier Media</div>
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
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-[#0A1F3C] mb-4 uppercase tracking-wider">
                    {t('common.filter')}
                  </h3>
                  <div className="space-y-2">
                    {(categories || []).map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                          selectedCategory === category.id
                            ? 'bg-[#0E2E5C] text-white shadow-lg shadow-[#0E2E5C]/20'
                            : 'hover:bg-[#F6F8FB] text-[#64748B]'
                        }`}
                      >
                        {category.icon}
                        <span className="font-medium">{category.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="card-institutional-elevated p-6 bg-[#0E2E5C] text-white">
                  <h3 className="text-lg font-bold mb-4">{t('pages.press.contacts')}</h3>
                  <div className="space-y-6">
                    {(mediaContacts || []).map((contact, idx) => (
                      <div key={idx} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                        <p className="font-bold">{contact.name}</p>
                        <p className="text-white/60 text-sm mb-2">{contact.position}</p>
                        <p className="text-sm">{contact.email}</p>
                        <p className="text-sm">{contact.phone}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Feed */}
            <div className="lg:col-span-3">
              <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="relative flex-1 max-w-md">
                  <input
                    type="text"
                    placeholder={t('common.search')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 pr-4 py-3 bg-[#F6F8FB] border-0 rounded-xl focus:ring-2 focus:ring-[#0E2E5C] transition-all"
                  />
                </div>
                <p className="text-sm text-[#94A3B8]">
                  {filteredReleases.length} {t('common.results').toLowerCase()}
                </p>
              </div>

              <div className="space-y-6">
                {(filteredReleases || []).map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="card-institutional-elevated group cursor-pointer overflow-hidden p-6"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      {item.image && (
                        <div className="md:w-48 h-32 rounded-lg overflow-hidden shrink-0">
                          <img src={item.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="text-xs font-bold text-[#0E2E5C] uppercase tracking-tighter bg-[#0E2E5C]/10 px-2 py-1 rounded">
                            {item.category}
                          </span>
                          <span className="text-xs text-[#94A3B8]">{item.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#0A1F3C] mb-2 group-hover:text-[#0E2E5C] transition-colors line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-[#64748B] text-sm mb-4 line-clamp-2">
                          {item.summary}
                        </p>
                        <div className="flex items-center text-sm font-bold text-[#0E2E5C]">
                          {t('common.read_more')}
                          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
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
                {t('pages.press.contacts')}
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
                Get in touch with our media relations team for press inquiries, interviews, and media resources.
              </motion.p>

              {/* Premium Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
              >
                <Link href="/contact" className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-[#0E2E5C] to-[#153E75] text-white rounded-full font-medium text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>{t('common.contact_us')}</span>
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-transform" />
                </Link>
                <button className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-white text-[#0E2E5C] border-2 border-[#0E2E5C] rounded-full font-medium text-base sm:text-lg hover:bg-[#0E2E5C] hover:text-white transition-all duration-300 hover:-translate-y-1 flex items-center gap-3">
                  <Download className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>Media Kit</span>
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
