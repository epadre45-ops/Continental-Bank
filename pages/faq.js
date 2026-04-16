import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  HelpCircle, 
  Shield, 
  Users, 
  Home, 
  Car, 
  Briefcase, 
  CreditCard, 
  FileText, 
  AlertCircle, 
  CheckCircle, 
  Phone, 
  Mail, 
  MessageSquare 
} from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '../lib/i18n';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function FAQPage() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState([]);

  const categories = [
    { id: 'general', name: t('pages.faq.cat_accounts'), icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'accounts', name: t('pages.faq.cat_accounts'), icon: <Users className="w-4 h-4" /> },
    { id: 'credits', name: t('pages.faq.cat_credit'), icon: <CreditCard className="w-4 h-4" /> },
    { id: 'security', name: t('pages.faq.cat_security'), icon: <Shield className="w-4 h-4" /> },
    { id: 'digital', name: t('pages.faq.cat_digital'), icon: <FileText className="w-4 h-4" /> },
    { id: 'contact', name: t('pages.faq.cat_regulatory'), icon: <MessageSquare className="w-4 h-4" /> }
  ];

  // The categories keys in translation might slightly differ from my category IDs, let's fix that
  const categoryLabels = {
    general: t('pages.faq.all_categories'),
    accounts: t('pages.faq.cat_accounts'),
    credits: t('pages.faq.cat_credit'),
    security: t('pages.faq.cat_security'),
    digital: t('pages.faq.cat_digital'),
    contact: t('pages.faq.cat_regulatory')
  };

  // Get FAQ data from translations
  const faqData = t('pages.faq.questions') || {};

  const toggleExpanded = (index) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Filter logic
  const currentCategoryFAQs = faqData[activeCategory] || [];
  
  const filteredFAQ = currentCategoryFAQs.filter(item => 
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section - Ultra Premium */}
      <section className="section-institutional-navy pt-20 sm:pt-24 md:pt-32 relative overflow-hidden">
        {/* Premium Background with Multiple Layers */}
        <div className="absolute inset-0">
          {/* Main Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&h=1080&fit=crop&auto=format&q=95"
            srcSet="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=640&h=480&fit=crop&auto=format&q=95 640w,
                    https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=768&h=576&fit=crop&auto=format&q=95 768w,
                    https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1024&h=768&fit=crop&auto=format&q=95 1024w,
                    https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&h=1080&fit=crop&auto=format&q=95 1920w"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            alt="Customer support"
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
              <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8D8C3]" />
              <span className="text-xs sm:text-sm font-medium text-white tracking-wide">{t('pages.faq.hero_tag')}</span>
            </motion.div>
            
            {/* Premium Title with Gradient Text */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t('pages.faq.hero_title')}
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
              {t('pages.faq.hero_subtitle')}
            </motion.p>

            {/* Premium Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 sm:mt-12 max-w-md sm:max-w-2xl mx-auto"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder={t('pages.faq.search_placeholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/15 backdrop-blur-xl border border-white/30 rounded-2xl py-4 sm:py-5 px-6 sm:px-8 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/50 transition-all font-medium text-base sm:text-lg shadow-xl"
                />
                <Search className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-white/50" />
              </div>
            </motion.div>

            {/* Premium Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-10 sm:mt-12"
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">500+</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">FAQs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">15+</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">98%</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Satisfaction</div>
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

      {/* Categories Grid */}
      <section className="bg-[#F6F8FB] py-8 sm:py-12 border-b border-[rgba(10,30,60,0.08)]">
        <div className="container-institutional">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
            {(categories || []).map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setExpandedItems([]);
                }}
                className={`flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl transition-all ${
                  activeCategory === cat.id 
                    ? 'bg-white shadow-xl text-[#0E2E5C] border-b-4 border-[#0E2E5C]' 
                    : 'text-[#64748B] hover:bg-white/50'
                }`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4 ${
                  activeCategory === cat.id ? 'bg-[#0E2E5C]/10' : 'bg-[#E5E7EB]'
                }`}>
                  <div className="w-4 h-4 sm:w-4 sm:h-4">{cat.icon}</div>
                </div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">{categoryLabels[cat.id]}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="section-institutional-white pb-20 sm:pb-32">
        <div className="container-institutional">
          <div className="max-w-3xl sm:max-w-4xl mx-auto">
            {(filteredFAQ || []).length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12 sm:py-20 bg-[#F6F8FB] rounded-3xl border border-dashed border-[#CBD5E1]"
              >
                <AlertCircle className="w-12 h-12 sm:w-16 sm:h-16 text-[#94A3B8] mx-auto mb-4 sm:mb-6" />
                <p className="text-lg sm:text-xl font-bold text-[#0A1F3C] mb-1.5 sm:mb-2">{t('pages.faq.no_results')}</p>
                <p className="text-sm sm:text-base text-[#64748B]">{t('pages.faq.contact_subtitle')}</p>
              </motion.div>
            ) : (
              <div className="space-y-4 sm:space-y-6">
                {(filteredFAQ || []).map((item, index) => (
                  <motion.div
                    key={item.question}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="card-institutional-elevated overflow-hidden border border-transparent hover:border-[#0E2E5C]/20 transition-all"
                  >
                    <button
                      onClick={() => toggleExpanded(index)}
                      className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-6 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 hover:bg-[#F6F8FB] transition-colors"
                    >
                      <h3 className={`text-base sm:text-lg md:text-xl font-bold transition-colors ${
                        expandedItems.includes(index) ? 'text-[#0E2E5C]' : 'text-[#0A1F3C]'
                      }`}>{item.question}</h3>
                      <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto">
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {(item?.tags?.slice(0, 2) || []).map((tag, tagIndex) => (
                            <span key={tagIndex} className="bg-[#0E2E5C]/5 text-[#0E2E5C] px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-tighter">
                              {tag}
                            </span>
                          ))}
                        </div>
                        {expandedItems.includes(index) ? (
                          <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#0E2E5C] flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#94A3B8] flex-shrink-0" />
                        )}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {expandedItems.includes(index) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8"
                        >
                          <div className="pt-3 sm:pt-4 border-t border-[rgba(10,30,60,0.08)]">
                            <p className="text-sm sm:text-base md:text-lg text-[#64748B] leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section - Ultra Premium */}
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
                {t('pages.faq.contact_title')}
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
                {t('pages.faq.contact_subtitle')}
              </motion.p>

              {/* Premium Contact Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-14"
              >
                <div className="flex items-center space-x-4 sm:space-x-6 p-4 sm:p-6 bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg border border-white/40">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#0E2E5C] to-[#153E75] rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-xl">
                    <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A1F3C] text-sm sm:text-base">Call Priority Desk</h4>
                    <p className="text-[#64748B] text-xs sm:text-sm">+49 151 524 976 020</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 sm:space-x-6 p-4 sm:p-6 bg-white/60 backdrop-blur-xl rounded-2xl shadow-lg border border-white/40">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#0E2E5C] to-[#153E75] rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-xl">
                    <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A1F3C] text-sm sm:text-base">Email Support</h4>
                    <p className="text-[#64748B] text-xs sm:text-sm">support@continental-kreditbank.de</p>
                  </div>
                </div>
              </motion.div>

              {/* Premium Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
              >
                <Link href="/contact" className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-[#0E2E5C] to-[#153E75] text-white rounded-full font-medium text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>{t('pages.faq.contact_btn')}</span>
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/entreprises" className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-white text-[#0E2E5C] border-2 border-[#0E2E5C] rounded-full font-medium text-base sm:text-lg hover:bg-[#0E2E5C] hover:text-white transition-all duration-300 hover:-translate-y-1 flex items-center gap-3">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>{t('pages.faq.open_account_btn')}</span>
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
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

function ChevronRight(props) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}
