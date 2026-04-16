import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../lib/i18n';
import { 
  Calculator, DollarSign, TrendingUp, Shield, Clock, CheckCircle, ArrowRight,
  Building, Users, Star, FileText, Mail, Phone, Save, Download, Send,
  BarChart3, PieChart, Target, Home, Car, Briefcase
} from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LoanCalculatorPage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('personal');
  const [loanAmount, setLoanAmount] = useState(15000);
  const [loanDuration, setLoanDuration] = useState(48);
  const [interestRate, setInterestRate] = useState(5.2);
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');

  const loanTypes = {
    personal: {
      name: t('pages.loan_calculator.type_personal'),
      icon: <Users className="w-5 h-5" />,
      minAmount: 1000, maxAmount: 75000,
      minDuration: 12, maxDuration: 84,
      defaultRate: 5.2, rateRange: '3.8% – 8.2%'
    },
    mortgage: {
      name: t('pages.loan_calculator.type_mortgage'),
      icon: <Home className="w-5 h-5" />,
      minAmount: 50000, maxAmount: 1000000,
      minDuration: 120, maxDuration: 360,
      defaultRate: 3.2, rateRange: '2.8% – 4.5%'
    },
    auto: {
      name: t('pages.loan_calculator.type_auto'),
      icon: <Car className="w-5 h-5" />,
      minAmount: 5000, maxAmount: 100000,
      minDuration: 12, maxDuration: 84,
      defaultRate: 4.8, rateRange: '3.2% – 7.5%'
    },
    business: {
      name: t('pages.loan_calculator.type_business'),
      icon: <Briefcase className="w-5 h-5" />,
      minAmount: 10000, maxAmount: 500000,
      minDuration: 24, maxDuration: 120,
      defaultRate: 4.2, rateRange: '3.5% – 6.8%'
    }
  };

  const currentType = loanTypes[activeTab];

  const calculateLoan = () => {
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanDuration;
    if (monthlyRate === 0) return { monthlyPayment: loanAmount / numPayments, totalPayment: loanAmount, totalInterest: 0 };
    const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    const totalPayment = monthlyPayment * numPayments;
    return { monthlyPayment, totalPayment, totalInterest: totalPayment - loanAmount };
  };

  const results = calculateLoan();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    const type = loanTypes[tab];
    setLoanAmount(Math.max(type.minAmount, Math.min(loanAmount, type.maxAmount)));
    setLoanDuration(Math.max(type.minDuration, Math.min(loanDuration, type.maxDuration)));
    setInterestRate(type.defaultRate);
    setShowResults(false);
  };

  const commitments = [
    { icon: <Shield className="w-4 h-4" />, text: t('pages.loan_calculator.commit_1') },
    { icon: <CheckCircle className="w-4 h-4" />, text: t('pages.loan_calculator.commit_2') },
    { icon: <Star className="w-4 h-4" />, text: t('pages.loan_calculator.commit_3') },
    { icon: <Clock className="w-4 h-4" />, text: t('pages.loan_calculator.commit_4') }
  ];

  const features = [
    { icon: <TrendingUp className="w-8 h-8" />, title: t('pages.loan_calculator.feat_1_title'), desc: t('pages.loan_calculator.feat_1_desc') },
    { icon: <Clock className="w-8 h-8" />, title: t('pages.loan_calculator.feat_2_title'), desc: t('pages.loan_calculator.feat_2_desc') },
    { icon: <Shield className="w-8 h-8" />, title: t('pages.loan_calculator.feat_3_title'), desc: t('pages.loan_calculator.feat_3_desc') },
    { icon: <Users className="w-8 h-8" />, title: t('pages.loan_calculator.feat_4_title'), desc: t('pages.loan_calculator.feat_4_desc') }
  ];

  const steps = [
    { step: '01', title: t('pages.loan_calculator.step_1_title'), desc: t('pages.loan_calculator.step_1_desc') },
    { step: '02', title: t('pages.loan_calculator.step_2_title'), desc: t('pages.loan_calculator.step_2_desc') },
    { step: '03', title: t('pages.loan_calculator.step_3_title'), desc: t('pages.loan_calculator.step_3_desc') },
    { step: '04', title: t('pages.loan_calculator.step_4_title'), desc: t('pages.loan_calculator.step_4_desc') }
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
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&h=1080&fit=crop&auto=format&q=95"
            srcSet="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=640&h=480&fit=crop&auto=format&q=95 640w,
                    https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=768&h=576&fit=crop&auto=format&q=95 768w,
                    https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1024&h=768&fit=crop&auto=format&q=95 1024w,
                    https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&h=1080&fit=crop&auto=format&q=95 1920w"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            alt="Loan Calculator" 
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
              <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8D8C3]" />
              <span className="text-xs sm:text-sm font-medium text-white tracking-wide">{t('pages.loan_calculator.hero_tag')}</span>
            </motion.div>
            
            {/* Premium Title with Gradient Text */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t('pages.loan_calculator.hero_title')}
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
              {t('pages.loan_calculator.hero_subtitle')}
            </motion.p>

            {/* Premium Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-10 sm:mt-12"
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">3.2%</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Taux Min</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">€1M</div>
                <div className="text-xs sm:text-sm text-white/70 uppercase tracking-widest">Max</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#E8D8C3] mb-1">360</div>
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

      {/* Calculator */}
      <section className="section-institutional-white py-12 sm:py-16">
        <div className="container-institutional">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-4 mb-6 sm:mb-8 border-b border-[rgba(10,30,60,0.08)] pb-3 sm:pb-4">
                {(Object.entries(loanTypes || {}) || []).map(([key, type]) => (
                  <button
                    key={key}
                    onClick={() => handleTabChange(key)}
                    className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg transition-colors ${activeTab === key ? 'bg-[#0E2E5C] text-white' : 'bg-[#F6F8FB] text-[#64748B] hover:bg-[#E5E7EB]'}`}
                  >
                    {type.icon}
                    <span className="font-medium text-xs sm:text-sm">{type.name}</span>
                  </button>
                ))}
              </div>

              <div className="card-institutional-elevated p-6 sm:p-8 space-y-6 sm:space-y-8">
                {/* Amount */}
                <div>
                  <div className="flex justify-between items-center mb-3 sm:mb-4">
                    <label className="text-base sm:text-lg font-semibold text-[#0A1F3C]">{t('pages.loan_calculator.amount_label')}</label>
                    <div className="text-xl sm:text-2xl font-bold text-[#0E2E5C]">€{loanAmount.toLocaleString()}</div>
                  </div>
                  <input type="range" min={currentType.minAmount} max={currentType.maxAmount} step={currentType.minAmount >= 50000 ? 5000 : 500} value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} className="w-full h-3 sm:h-4 bg-[#E5E7EB] rounded-full appearance-none cursor-pointer accent-[#0E2E5C]" />
                  <div className="flex justify-between text-xs sm:text-sm text-[#94A3B8] mt-2 sm:mt-3">
                    <span>€{currentType.minAmount.toLocaleString()}</span>
                    <span>€{currentType.maxAmount.toLocaleString()}</span>
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <div className="flex justify-between items-center mb-3 sm:mb-4">
                    <label className="text-base sm:text-lg font-semibold text-[#0A1F3C]">{t('pages.loan_calculator.duration_label')}</label>
                    <div className="text-xl sm:text-2xl font-bold text-[#0E2E5C]">{loanDuration} {t('pages.loan_calculator.months')}</div>
                  </div>
                  <input type="range" min={currentType.minDuration} max={currentType.maxDuration} step={12} value={loanDuration} onChange={(e) => setLoanDuration(Number(e.target.value))} className="w-full h-3 sm:h-4 bg-[#E5E7EB] rounded-full appearance-none cursor-pointer accent-[#0E2E5C]" />
                  <div className="flex justify-between text-xs sm:text-sm text-[#94A3B8] mt-2 sm:mt-3">
                    <span>{currentType.minDuration} {t('pages.loan_calculator.months')}</span>
                    <span>{currentType.maxDuration} {t('pages.loan_calculator.months')}</span>
                  </div>
                </div>

                {/* Rate */}
                <div>
                  <div className="flex justify-between items-center mb-3 sm:mb-4">
                    <label className="text-base sm:text-lg font-semibold text-[#0A1F3C]">{t('pages.loan_calculator.rate_label')}</label>
                    <div className="text-xl sm:text-2xl font-bold text-[#0E2E5C]">{interestRate}%</div>
                  </div>
                  <input type="range" min={1} max={15} step={0.1} value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full h-3 sm:h-4 bg-[#E5E7EB] rounded-full appearance-none cursor-pointer accent-[#0E2E5C]" />
                  <div className="flex justify-between text-xs sm:text-sm text-[#94A3B8] mt-2 sm:mt-3">
                    <span>{t('pages.loan_calculator.indicative_range')} {currentType.rateRange}</span>
                  </div>
                </div>

                <button onClick={() => setShowResults(true)} className="w-full btn-institutional-primary justify-center">
                  <Calculator className="w-4 h-4 sm:w-5 sm:h-5" />
                  {t('pages.loan_calculator.calculate_btn')}
                </button>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: showResults ? 1 : 0.4 }} transition={{ duration: 0.5 }}
                className="card-institutional-elevated p-6 sm:p-8"
              >
                <h3 className="text-lg sm:text-xl font-bold text-[#0A1F3C] mb-4 sm:mb-6">{t('pages.loan_calculator.result_title')}</h3>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E2E5C] mb-1.5 sm:mb-2">€{results.monthlyPayment.toFixed(0)}</div>
                <div className="text-xs sm:text-sm text-[#64748B]">{t('pages.loan_calculator.per_month')}</div>
                <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                  <div className="flex justify-between">
                    <span className="text-xs sm:text-sm text-[#64748B]">{t('pages.loan_calculator.loan_amount')}</span>
                    <span className="font-medium text-[#0A1F3C]">€{loanAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs sm:text-sm text-[#64748B]">{t('pages.loan_calculator.total_interest')}</span>
                    <span className="font-medium text-[#0A1F3C]">€{results.totalInterest.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between border-t border-[rgba(10,30,60,0.08)] pt-3 sm:pt-4">
                    <span className="text-xs sm:text-sm text-[#64748B] font-medium">{t('pages.loan_calculator.total_repay')}</span>
                    <span className="font-bold text-[#0A1F3C]">€{results.totalPayment.toFixed(0)}</span>
                  </div>
                </div>
                <div className="mt-4 sm:mt-6 bg-[#F6F8FB] rounded-lg p-3 sm:p-4">
                  <div className="text-xs sm:text-sm text-[#64748B]">{t('pages.loan_calculator.result_note')}</div>
                </div>
              </motion.div>

              <div className="card-institutional-elevated p-4 sm:p-6 space-y-3 sm:space-y-4">
                <h4 className="font-semibold text-[#0A1F3C]">{t('pages.loan_calculator.commitments_title')}</h4>
                {(commitments || []).map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 sm:space-x-3">
                    <div className="text-[#0E2E5C]">{item.icon}</div>
                    <span className="text-xs sm:text-sm text-[#64748B]">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="card-institutional-elevated p-4 sm:p-6">
                <h4 className="font-semibold text-[#0A1F3C] mb-3 sm:mb-4">{t('pages.loan_calculator.finalize_title')}</h4>
                <div className="space-y-2 sm:space-y-3">
                  <input type="email" placeholder={t('pages.loan_calculator.email_placeholder')} value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 sm:py-3 border border-[rgba(10,30,60,0.08)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E2E5C] text-[#0A1F3C] text-sm sm:text-base" />
                  <Link href="/contact" className="btn-institutional-primary w-full justify-center">
                    <Send className="w-3 h-3 sm:w-4 sm:h-4" />{t('pages.loan_calculator.submit_btn')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-institutional-stratified">
        <div className="container-institutional">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-8 sm:mb-12">
            <h2 className="h2-institutional mb-4 sm:mb-6">{t('pages.loan_calculator.why_us_title')}</h2>
            <div className="divider-institutional-gradient w-20 sm:w-24 mx-auto mb-6 sm:mb-8"></div>
            <p className="body-institutional-lg text-[#64748B] max-w-3xl mx-auto">{t('pages.loan_calculator.why_us_subtitle')}</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {(features || []).map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} className="text-center group">
                <div className="text-[#0E2E5C] mb-4 sm:mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#0A1F3C] mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-[#64748B] leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-institutional-white">
        <div className="container-institutional">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-8 sm:mb-12">
            <h2 className="h2-institutional mb-4 sm:mb-6">{t('pages.loan_calculator.steps_title')}</h2>
            <div className="divider-institutional-gradient w-20 sm:w-24 mx-auto mb-6 sm:mb-8"></div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {(steps || []).map((step, index) => (
              <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#0E2E5C] to-[#153E75] rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mx-auto mb-3 sm:mb-4">{step.step}</div>
                <h3 className="text-base sm:text-lg font-semibold text-[#0A1F3C] mb-1.5 sm:mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-[#64748B]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal */}
      <section className="section-institutional-stratified">
        <div className="container-institutional">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#F6F8FB] rounded-2xl p-6 sm:p-8 border border-[rgba(10,30,60,0.08)]">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-[#0E2E5C] flex-shrink-0 mt-0.5 sm:mt-1" />
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-[#0A1F3C] mb-2 sm:mb-3">{t('pages.loan_calculator.legal_title')}</h4>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">{t('pages.loan_calculator.legal_text')}</p>
                </div>
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
                {t('pages.loan_calculator.cta_title')}
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
                {t('pages.loan_calculator.cta_subtitle')}
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
                  <span>{t('pages.loan_calculator.contact_advisor')}</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/faq" 
                  className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-white text-[#0E2E5C] border-2 border-[#0E2E5C] rounded-full font-medium text-base sm:text-lg hover:bg-[#0E2E5C] hover:text-white transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
                >
                  <span>{t('pages.loan_calculator.faq_link')}</span>
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
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
