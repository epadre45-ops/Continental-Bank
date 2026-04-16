import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { 
  Calculator, 
  DollarSign, 
  Car, 
  Home, 
  Plane, 
  Heart, 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  FileText, 
  ArrowRight,
  Percent,
  Calendar,
  User,
  Phone,
  Users,
  ChevronRight,
  Shield
} from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '../lib/i18n';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LoansPage() {
  const { t } = useTranslation();
  const router = useRouter();

  const [selectedLoan, setSelectedLoan] = useState(null);
  const [loanAmount, setLoanAmount] = useState(10000);
  const [loanDuration, setLoanDuration] = useState(12);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  // Helper pour garantir un array depuis les traductions
  const getArray = (key) => {
    const result = t(key, { returnObjects: true });
    return Array.isArray(result) ? result : [];
  };

  const loanTypes = [
    {
      id: 'personal',
      title: t('pages.loans.personal_title'),
      description: t('pages.loans.personal_desc'),
      image: 'https://images.unsplash.com/photo-1554224154-260325c05371?w=600&h=400&fit=crop',
      minAmount: 1000,
      maxAmount: 50000,
      minDuration: 12,
      maxDuration: 84,
      rate: 5.9,
      icon: <Users className="w-8 h-8" />,
      features: getArray('pages.loans.personal_features')
    },
    {
      id: 'travel',
      title: t('pages.loans.travel_title'),
      description: t('pages.loans.travel_desc'),
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
      minAmount: 500,
      maxAmount: 25000,
      minDuration: 6,
      maxDuration: 48,
      rate: 6.2,
      icon: <Plane className="w-8 h-8" />,
      features: getArray('pages.loans.travel_features')
    },
    {
      id: 'auto',
      title: t('pages.loans.auto_title'),
      description: t('pages.loans.auto_desc'),
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop',
      minAmount: 3000,
      maxAmount: 75000,
      minDuration: 12,
      maxDuration: 84,
      rate: 4.9,
      icon: <Car className="w-8 h-8" />,
      features: getArray('pages.loans.auto_features')
    },
    {
      id: 'home',
      title: t('pages.loans.home_title'),
      description: t('pages.loans.home_desc'),
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop',
      minAmount: 2000,
      maxAmount: 100000,
      minDuration: 12,
      maxDuration: 120,
      rate: 5.2,
      icon: <Home className="w-8 h-8" />,
      features: getArray('pages.loans.home_features')
    }
  ];

  useEffect(() => {
    calculateMonthlyPayment();
  }, [loanAmount, loanDuration, selectedLoan]);

  const calculateMonthlyPayment = () => {
    if (loanAmount > 0 && loanDuration > 0 && selectedLoan) {
      const monthlyRate = selectedLoan.rate / 100 / 12;
      const payment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanDuration)) / (Math.pow(1 + monthlyRate, loanDuration) - 1);
      setMonthlyPayment(Math.round(payment * 100) / 100);
    }
  };

  const handleLoanSelect = (loan) => {
    setSelectedLoan(loan);
    setLoanAmount(loan.minAmount);
    setLoanDuration(loan.minDuration || 12);
  };

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Header />

      {/* Hero Section - Ultra Premium */}
      <section className="section-institutional-navy w-full pt-16 sm:pt-20 md:pt-24 lg:pt-32 relative overflow-hidden">
        {/* Premium Background with Multiple Layers */}
        <div className="absolute inset-0">
          {/* Main Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1554224154-260325c05371?w=1920&h=1080&fit=crop&auto=format&q=95"
            srcSet="https://images.unsplash.com/photo-1554224154-260325c05371?w=640&h=480&fit=crop&auto=format&q=95 640w,
                    https://images.unsplash.com/photo-1554224154-260325c05371?w=768&h=576&fit=crop&auto=format&q=95 768w,
                    https://images.unsplash.com/photo-1554224154-260325c05371?w=1024&h=768&fit=crop&auto=format&q=95 1024w,
                    https://images.unsplash.com/photo-1554224154-260325c05371?w=1920&h=1080&fit=crop&auto=format&q=95 1920w"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            alt="Loans"
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
              <span className="text-xs sm:text-sm font-medium text-white tracking-wide">{t('pages.loans.hero_tag')}</span>
            </motion.div>
            
            {/* Premium Title with Gradient Text */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t('pages.loans.hero_title')}
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
              {t('pages.loans.hero_subtitle')}
            </motion.p>

            {/* Premium Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-10 sm:mt-12"
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">4.9%</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Taux Min</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">€100K</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Max</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">120</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Mois Max</div>
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

      {/* Loan Calculator Section */}
      {selectedLoan && (
        <section className="section-institutional-white w-full bg-[#F6F8FB] py-8 sm:py-12 md:py-16">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto bg-white p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-[rgba(10,30,60,0.05)]"
            >
              <div className="text-center mb-6 sm:mb-8 md:mb-10">
                <h2 className="h2-institutional mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl">{t('pages.loans.calculator_title')}</h2>
                <p className="text-[#64748B] text-sm sm:text-base">{selectedLoan.title}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#0A1F3C] mb-2 sm:mb-3">{t('pages.loans.amount_label')}</label>
                    <div className="relative">
                      <input
                        type="range"
                        min={selectedLoan.minAmount}
                        max={selectedLoan.maxAmount}
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="w-full accent-[#0E2E5C] h-2 sm:h-3"
                      />
                      <div className="flex justify-between text-xs sm:text-sm text-[#64748B] mt-2">
                        <span>{selectedLoan.minAmount.toLocaleString()}€</span>
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#0A1F3C]">{loanAmount.toLocaleString()}€</span>
                        <span>{selectedLoan.maxAmount.toLocaleString()}€</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#0A1F3C] mb-2 sm:mb-3">{t('pages.loans.duration_label')}</label>
                    <div className="relative">
                      <input
                        type="range"
                        min={selectedLoan.minDuration}
                        max={selectedLoan.maxDuration}
                        value={loanDuration}
                        onChange={(e) => setLoanDuration(Number(e.target.value))}
                        className="w-full accent-[#0E2E5C] h-2 sm:h-3"
                      />
                      <div className="flex justify-between text-xs sm:text-sm text-[#64748B] mt-2">
                        <span>{selectedLoan.minDuration} {t('pages.loans.months')}</span>
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#0A1F3C]">{loanDuration} {t('pages.loans.months')}</span>
                        <span>{selectedLoan.maxDuration} {t('pages.loans.months')}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 bg-[#F6F8FB] rounded-xl sm:rounded-2xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm text-[#64748B]">{t('pages.loans.rate_label')}</span>
                      <span className="font-bold text-[#0A1F3C] text-sm sm:text-base">{selectedLoan.rate}%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0A1F3C] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-white">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">{t('pages.loans.summary_title')}</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between py-2 sm:py-3 border-b border-white/10">
                      <span className="text-white/70 text-xs sm:text-sm">{t('pages.loans.amount_total')}</span>
                      <span className="font-semibold text-sm sm:text-base">{loanAmount.toLocaleString()}€</span>
                    </div>
                    <div className="flex justify-between py-2 sm:py-3 border-b border-white/10">
                      <span className="text-white/70 text-xs sm:text-sm">{t('pages.loans.duration_total')}</span>
                      <span className="font-semibold text-sm sm:text-base">{loanDuration} {t('pages.loans.months')}</span>
                    </div>
                    <div className="flex justify-between py-2 sm:py-3 border-b border-white/10">
                      <span className="text-white/70 text-xs sm:text-sm">{t('pages.loans.rate')}</span>
                      <span className="font-semibold text-sm sm:text-base">{selectedLoan.rate}%</span>
                    </div>
                    <div className="pt-3 sm:pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm sm:text-base md:text-lg">{t('pages.loans.monthly_payment')}</span>
                        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400">{monthlyPayment.toLocaleString()}€</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="btn-institutional-primary bg-white text-[#0A1F3C] hover:bg-white/90 w-full mt-6 sm:mt-8 block text-center py-3 sm:py-4 text-sm sm:text-base"
                  >
                    {t('pages.loans.apply_now')}
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Loan Types Grid */}
      <section className="section-institutional-white w-full py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="h2-institutional mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl">{t('pages.loans.types_title')}</h2>
            <p className="text-[#64748B] body-institutional max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
              {t('pages.loans.types_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {(loanTypes || []).map((loan, index) => (
              <motion.div
                key={loan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`card-institutional-elevated p-4 sm:p-6 md:p-8 hover:shadow-2xl transition-all cursor-pointer group ${selectedLoan?.id === loan.id ? 'ring-2 ring-[#0E2E5C]' : ''}`}
                onClick={() => handleLoanSelect(loan)}
              >
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-[#F6F8FB] rounded-xl sm:rounded-2xl inline-block text-[#0A1F3C] group-hover:bg-[#0A1F3C] group-hover:text-white transition-colors">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                    {loan.icon}
                  </div>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#0A1F3C] mb-2 sm:mb-4">{loan.title}</h3>
                <p className="text-xs sm:text-sm text-[#64748B] mb-4 sm:mb-6 leading-relaxed">
                  {loan.description}
                </p>
                <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {(loan?.features?.slice(0, 2) || []).map((feat, i) => (
                    <div key={i} className="flex items-center text-[10px] sm:text-xs text-[#64748B]">
                      <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1.5 sm:mr-2 text-blue-500" />
                      {feat}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-slate-100">
                  <div>
                    <span className="text-[9px] sm:text-[10px] text-[#94A3B8] uppercase tracking-widest block">{t('pages.loans.from')}</span>
                    <span className="text-sm sm:text-base md:text-lg font-bold text-[#0A1F3C]">{loan.rate}%</span>
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
                {t('pages.loans.cta_title')}
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
                {t('pages.loans.cta_subtitle')}
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
                  <span>{t('pages.loans.cta_button')}</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
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
