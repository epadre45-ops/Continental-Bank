import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, DollarSign, Shield, BookOpen, Award, Clock, Target, CheckCircle, ArrowLeft, Phone, Mail, Users, TrendingUp, Calculator, FileText } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function EducationLoan() {
  const [formData, setFormData] = useState({
    // Loan Simulator State Only
    loanAmount: '',
    studyDuration: '4years',
    interestRate: 2.9,
    showResults: false
  });

  const [errors, setErrors] = useState({});

  const educationLevels = [
    { value: 'undergraduate', label: 'Undergraduate Program' },
    { value: 'graduate', label: 'Graduate Program (Master\'s)' },
    { value: 'phd', label: 'PhD Program' },
    { value: 'professional', label: 'Professional Certification' },
    { value: 'vocational', label: 'Vocational Training' },
    { value: 'online', label: 'Online Course' }
  ];

  const studyDurations = [
    { value: '6months', label: '6 months' },
    { value: '1year', label: '1 year' },
    { value: '2years', label: '2 years' },
    { value: '3years', label: '3 years' },
    { value: '4years', label: '4 years' },
    { value: '5plus', label: '5+ years' }
  ];

  const employmentStatuses = [
    { value: 'fulltime', label: 'Full-time Student' },
    { value: 'parttime', label: 'Part-time Student' },
    { value: 'working', label: 'Working Professional' },
    { value: 'unemployed', label: 'Not Currently Employed' }
  ];

  const features = [
    {
      icon: DollarSign,
      title: "Competitive Interest Rates",
      description: "Enjoy rates starting from 2.9% APR, making education financing affordable for every student.",
      color: "blue"
    },
    {
      icon: Clock,
      title: "Flexible Repayment",
      description: "Repayment periods up to 15 years with options to defer payments until after graduation.",
      color: "green"
    },
    {
      icon: Shield,
      title: "Student Protection",
      description: "Life and disability insurance included, ensuring peace of mind during your studies.",
      color: "purple"
    },
    {
      icon: Users,
      title: "Academic Support",
      description: "Access to tutoring services and career counseling to help you succeed academically.",
      color: "orange"
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Choose Your Program",
      description: "Select your educational institution and program of study."
    },
    {
      step: 2,
      title: "Calculate Your Needs",
      description: "Determine tuition, living expenses, and study materials costs."
    },
    {
      step: 3,
      title: "Submit Application",
      description: "Complete our simple online application with required documentation."
    },
    {
      step: 4,
      title: "Receive Funding",
      description: "Get approved quickly and access funds directly to your institution."
    }
  ];

  const advantages = [
    {
      title: "Quick Approval",
      value: "48 hours",
      description: "Fast processing to ensure you don't miss enrollment deadlines."
    },
    {
      title: "Low Interest Rates",
      value: "From 2.9% APR",
      description: "Some of the most competitive rates in student financing."
    },
    {
      title: "High Approval Rate",
      value: "94%",
      description: "Excellent approval rate for qualified students and programs."
    },
    {
      title: "Coverage Amount",
      value: "Up to $100,000",
      description: "Comprehensive coverage for tuition, housing, and study expenses."
    }
  ];

  const loanCalculator = {
    minAmount: 5000,
    maxAmount: 100000,
    minRate: 2.9,
    maxRate: 8.5,
    minTerm: 1,
    maxTerm: 15
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      showResults: false
    }));
  };

  const validateSimulator = () => {
    const newErrors = {};
    
    if (!formData.loanAmount || formData.loanAmount <= 0) {
      newErrors.loanAmount = 'Loan amount is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateLoan = () => {
    if (!validateSimulator()) {
      return null;
    }
    
    const principal = parseFloat(formData.loanAmount);
    const rate = formData.interestRate / 100 / 12;
    
    // Get duration in months
    const durationMap = {
      '6months': 6,
      '1year': 12,
      '2years': 24,
      '3years': 36,
      '4years': 48,
      '5plus': 60
    };
    
    const numPayments = durationMap[formData.studyDuration] || 48;
    
    // Calculate monthly payment
    const monthlyPayment = principal * 
      (rate * Math.pow(1 + rate, numPayments)) / 
      (Math.pow(1 + rate, numPayments) - 1);
    
    const totalPayment = monthlyPayment * numPayments;
    const totalInterest = totalPayment - principal;
    
    return {
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      loanAmount: principal.toFixed(2)
    };
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    setFormData(prev => ({ ...prev, showResults: true }));
  };

  const loanResults = formData.showResults ? calculateLoan() : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        {/* Hero Section with Background Image */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 opacity-85"></div>
          </div>
          <div className="relative container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-md sm:max-w-2xl md:max-w-4xl mx-auto"
            >
              <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-4 sm:mb-6 transition-colors text-sm sm:text-base">
                <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />Back to Home
              </Link>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 leading-tight">
                Invest in Your<span className="text-blue-300 font-medium"> Future</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl sm:max-w-3xl mx-auto mb-6 sm:mb-8">
                Access affordable education financing with flexible repayment options designed to support your academic journey and career aspirations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button
                  onClick={() => document.getElementById('education-form').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-blue-900 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center text-sm sm:text-base"
                >
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                  Apply for Education Loan
                </button>
                <Link 
                  href="/contact" 
                  className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all flex items-center justify-center text-sm sm:text-base"
                >
                  Talk to Advisor
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-10 sm:mb-12 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-900 mb-3 sm:mb-4">
                Smart Financing for<span className="text-blue-600 font-medium"> Your Education</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl sm:max-w-3xl mx-auto">
                Our education loans are designed with students in mind, offering competitive rates and flexible terms that adapt to your academic journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {(features || []).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow"
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-${
                    feature.color === 'blue' ? 'blue' :
                    feature.color === 'green' ? 'green' :
                    feature.color === 'purple' ? 'purple' :
                    'orange'
                  }-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6`}>
                    <feature.icon className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-${
                      feature.color === 'blue' ? 'blue' :
                      feature.color === 'green' ? 'green' :
                      feature.color === 'purple' ? 'purple' :
                      'orange'
                    }-600`} />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-900 mb-2 sm:mb-3 md:mb-4">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-10 sm:mb-12 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-900 mb-3 sm:mb-4">
                How Our<span className="text-blue-600 font-medium"> Education Loans Work</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl sm:max-w-3xl mx-auto">
                From application to funding, we make the process simple and transparent for every student.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {(howItWorks || []).map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-xl sm:text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 sm:mb-3">{step.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Loan Calculator Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl sm:max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 md:p-8 rounded-2xl border border-blue-200">
                <h2 className="text-2xl sm:text-3xl font-light text-slate-900 mb-6 sm:mb-8 text-center">
                  Quick<span className="text-blue-600 font-medium"> Loan Calculator</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">
                      ${loanCalculator.minAmount.toLocaleString()} - ${loanCalculator.maxAmount.toLocaleString()}
                    </div>
                    <p className="text-sm sm:text-base text-slate-600">Loan Amount Range</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">
                      {loanCalculator.minRate}% - {loanCalculator.maxRate}%
                    </div>
                    <p className="text-sm sm:text-base text-slate-600">Interest Rate Range</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">
                      {loanCalculator.minTerm} - {loanCalculator.maxTerm} years
                    </div>
                    <p className="text-sm sm:text-base text-slate-600">Repayment Period</p>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => document.getElementById('education-form').scrollIntoView({ behavior: 'smooth' })}
                    className="bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center justify-center mx-auto text-sm sm:text-base"
                  >
                    <Calculator className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                    Calculate Your Payment
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Premium Education Loan Simulator Section */}
        <section id="education-calculator" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-10 md:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-900 mb-3 sm:mb-4">
                Estimate Your<span className="text-blue-600 font-medium"> Education Loan in Seconds</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl sm:max-w-3xl mx-auto">
                Get instant monthly payment estimates with our premium education loan simulator
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-3xl sm:max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-slate-50 to-white p-4 sm:p-6 md:p-8 rounded-3xl shadow-xl border border-slate-200">
                <form onSubmit={handleCalculate} className="grid md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">
                        Loan Amount (€)
                      </label>
                      <input
                        type="number"
                        name="loanAmount"
                        value={formData.loanAmount}
                        onChange={handleChange}
                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:border-transparent text-sm sm:text-base ${
                          errors.loanAmount 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-slate-300 focus:ring-blue-500'
                        }`}
                        placeholder="20,000"
                        step="1000"
                        min="0"
                      />
                      {errors.loanAmount && (
                        <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.loanAmount}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">
                        Study Duration
                      </label>
                      <select
                        name="studyDuration"
                        value={formData.studyDuration}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      >
                        <option value="6months">6 months</option>
                        <option value="1year">1 year</option>
                        <option value="2years">2 years</option>
                        <option value="3years">3 years</option>
                        <option value="4years">4 years</option>
                        <option value="5plus">5+ years</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">
                        Interest Rate: {formData.interestRate}%
                      </label>
                      <input
                        type="range"
                        name="interestRate"
                        value={formData.interestRate}
                        onChange={handleChange}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                        min="2.9"
                        max="8.5"
                        step="0.1"
                      />
                      <div className="flex justify-between text-xs sm:text-sm text-slate-600 mt-2">
                        <span>2.9%</span>
                        <span>8.5%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 sm:space-y-6">
                    {loanResults ? (
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 md:p-8 rounded-2xl border border-blue-200">
                        <h4 className="text-base sm:text-lg font-semibold text-blue-900 mb-4 sm:mb-6 flex items-center">
                          <Calculator className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                          Your Monthly Payment
                        </h4>
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4 sm:mb-6">
                          €{loanResults.monthlyPayment}
                        </div>
                        <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                          <div className="flex justify-between">
                            <span className="text-blue-700">Loan Amount:</span>
                            <span className="font-medium text-blue-900">€{loanResults.loanAmount}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-blue-700">Total Interest:</span>
                            <span className="font-medium text-blue-900">€{loanResults.totalInterest}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-blue-700">Total Repayment:</span>
                            <span className="font-medium text-blue-900">€{loanResults.totalPayment}</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-slate-100 p-4 sm:p-6 md:p-8 rounded-2xl text-center">
                        <Calculator className="w-10 h-10 sm:w-12 sm:h-12 text-slate-400 mx-auto mb-3 sm:mb-4" />
                        <p className="text-sm sm:text-base text-slate-600">Enter loan details to see your estimated monthly payment</p>
                      </div>
                    )}
                    
                    <div className="space-y-3 sm:space-y-4">
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center text-sm sm:text-base"
                      >
                        <Calculator className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                        Calculate Payment
                      </button>
                      
                      <Link
                        href="/loan-application"
                        className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-lg font-semibold hover:from-slate-800 hover:to-slate-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center text-sm sm:text-base"
                      >
                        <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                        Apply for Education Loan
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" />
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Premium Benefits Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 to-slate-50">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-12 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-900 mb-3 sm:mb-4">
                Why Choose Our<span className="text-blue-600 font-medium"> Education Loans?</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl sm:max-w-3xl mx-auto">
                Flexible financing designed to support your academic journey
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
              {(features || []).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-slate-200 text-center"
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-${
                    feature.color === 'blue' ? 'blue' :
                    feature.color === 'green' ? 'green' :
                    feature.color === 'purple' ? 'purple' :
                    'orange'
                  }-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6`}>
                    <feature.icon className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-${
                      feature.color === 'blue' ? 'blue' :
                      feature.color === 'green' ? 'green' :
                      feature.color === 'purple' ? 'purple' :
                      'orange'
                    }-600`} />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-900 mb-2 sm:mb-3">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600 to-slate-900 p-6 sm:p-8 md:p-12 rounded-3xl text-center text-white"
            >
              <GraduationCap className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-200 mx-auto mb-4 sm:mb-6" />
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                Ready to Invest in Your Future?
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto">
                Start your secure education loan application today and get approved in as little as 24 hours.
              </p>
              <Link
                href="/loan-application"
                className="inline-flex items-center bg-white text-blue-900 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl text-sm sm:text-base"
              >
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                Apply for Education Loan
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Trust & Advantages Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-10 sm:mb-12 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-900 mb-3 sm:mb-4">
                Why Students<span className="text-blue-600 font-medium"> Choose Us</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl sm:max-w-3xl mx-auto">
                We understand the challenges of student financing and provide solutions that put your education first.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {(advantages || []).map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-slate-200 text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2 sm:mb-3">{advantage.value}</div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 sm:mb-3">{advantage.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600">{advantage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl sm:max-w-4xl mx-auto"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6">
                Ready to Transform Your<span className="text-blue-200 font-medium"> Future?</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl sm:max-w-3xl mx-auto">
                Join thousands of students who have achieved their educational dreams with our flexible and affordable financing solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button
                  onClick={() => document.getElementById('education-form').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-blue-700 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center text-sm sm:text-base"
                >
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                  Apply for Education Loan
                </button>
                <Link 
                  href="/contact" 
                  className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-all flex items-center justify-center text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                  Schedule Academic Advisor
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
