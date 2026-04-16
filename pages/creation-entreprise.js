import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building, TrendingUp, Shield, Users, FileText, Award, Briefcase, DollarSign, Target, CheckCircle, ArrowLeft, Phone, Mail, MapPin, Clock, Calculator } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { submitFormEmail, flattenForEmail } from '../utils/formSubmit';

export default function BusinessCreation() {
  const [formData, setFormData] = useState({
    // Business Loan Simulator State Only
    fundingAmount: '',
    businessStage: 'early',
    loanTerm: 5,
    interestRate: 3.5,
    showResults: false
  });

  const [errors, setErrors] = useState({});

  const businessTypes = [
    { value: 'tech', label: 'Technology Startup' },
    { value: 'retail', label: 'Retail & E-commerce' },
    { value: 'service', label: 'Professional Services' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'restaurant', label: 'Restaurant & Food Service' },
    { value: 'other', label: 'Other' }
  ];

  const businessStages = [
    { value: 'idea', label: 'Idea Stage' },
    { value: 'planning', label: 'Business Planning' },
    { value: 'early', label: 'Early Revenue' },
    { value: 'growth', label: 'Growth Stage' },
    { value: 'expansion', label: 'Expansion Phase' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      showResults: false
    }));
  };

  const validateSimulator = () => {
    const newErrors = {};
    
    if (!formData.fundingAmount || formData.fundingAmount <= 0) {
      newErrors.fundingAmount = 'Funding amount is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateLoan = () => {
    if (!validateSimulator()) {
      return null;
    }
    
    const principal = parseFloat(formData.fundingAmount);
    const rate = formData.interestRate / 100 / 12;
    const numPayments = formData.loanTerm * 12;
    
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

  const features = [
    {
      icon: DollarSign,
      title: "Startup Funding",
      description: "Access up to $500,000 in business financing with flexible terms and competitive rates tailored for entrepreneurs.",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Business Protection",
      description: "Comprehensive insurance and legal support to safeguard your business from day one.",
      color: "green"
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Connect with industry experts and successful entrepreneurs who can guide your journey.",
      color: "purple"
    },
    {
      icon: Target,
      title: "Growth Tools",
      description: "Advanced analytics and business intelligence tools to scale your operations efficiently.",
      color: "orange"
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Submit Your Business Plan",
      description: "Share your vision and business requirements with our expert team."
    },
    {
      step: 2,
      title: "Get Expert Review",
      description: "Our business consultants analyze your plan and provide personalized recommendations."
    },
    {
      step: 3,
      title: "Receive Funding Offer",
      description: "Get tailored financing options with competitive rates and flexible terms."
    },
    {
      step: 4,
      title: "Launch & Grow",
      description: "Access ongoing support and resources to scale your business successfully."
    }
  ];

  const advantages = [
    {
      title: "Fast Approval",
      value: "24-48 hours",
      description: "Quick decision process to get your business started without delays."
    },
    {
      title: "Competitive Rates",
      value: "From 3.5% APR",
      description: "Some of the most competitive rates in the market for business financing."
    },
    {
      title: "Flexible Terms",
      value: "6 months - 10 years",
      description: "Repayment periods that adapt to your business cycle and cash flow."
    },
    {
      title: "Success Rate",
      value: "92%",
      description: "High approval rate for qualified businesses with strong potential."
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.businessName.trim()) newErrors.businessName = 'Business name is required';
    if (!formData.businessType) newErrors.businessType = 'Business type is required';
    if (!formData.fundingAmount || parseFloat(formData.fundingAmount) <= 0) {
      newErrors.fundingAmount = 'Funding amount is required';
    }
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // ENVOYER L'EMAIL avec toutes les données
      await submitFormEmail({
        formName: 'Business Creation Application',
        payload: flattenForEmail({
          ...formData,
          submittedAt: new Date().toISOString(),
          userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'SSR'
        }),
        replyTo: formData.email
      });
      
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
      
      // Reset form
      setFormData({
        businessName: '',
        businessType: '',
        fundingAmount: '',
        businessStage: 'idea',
        fullName: '',
        email: '',
        phone: '',
        message: ''
      });
      
    } catch (error) {
      // Error handled silently, user sees UI feedback
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        {/* Hero Section with Background Image */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 opacity-85"></div>
          </div>
          <div className="relative container mx-auto px-6 pt-32 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />Back to Home
              </Link>
              <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
                Empower Your<span className="text-blue-300 font-medium"> Business Journey</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-8">
                Transform your entrepreneurial vision into reality with comprehensive business funding, expert guidance, and growth tools designed for modern entrepreneurs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => document.getElementById('business-form').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center"
                >
                  <Building className="w-5 h-5 mr-2" />
                  Start Your Business
                </button>
                <Link 
                  href="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all flex items-center justify-center"
                >
                  Talk to Expert
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-light text-slate-900 mb-4">
                Everything You Need to<span className="text-blue-600 font-medium"> Succeed</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From initial funding to ongoing support, we provide comprehensive resources for entrepreneurs at every stage.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(features || []).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow"
                >
                  <div className={`w-16 h-16 bg-${
                    feature.color === 'blue' ? 'blue' :
                    feature.color === 'green' ? 'green' :
                    feature.color === 'purple' ? 'purple' :
                    'orange'
                  }-100 rounded-xl flex items-center justify-center mb-6`}>
                    <feature.icon className={`w-8 h-8 text-${
                      feature.color === 'blue' ? 'blue' :
                      feature.color === 'green' ? 'green' :
                      feature.color === 'purple' ? 'purple' :
                      'orange'
                    }-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-light text-slate-900 mb-4">
                How We Help You<span className="text-blue-600 font-medium"> Build</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our streamlined process takes you from idea to successful business in four simple steps.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(howItWorks || []).map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Business Loan Simulator Section */}
        <section id="business-calculator" className="py-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-light text-slate-900 mb-4">
                Estimate Your<span className="text-blue-600 font-medium"> Business Loan in Seconds</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Get instant monthly payment estimates with our premium business loan simulator
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-3xl shadow-xl border border-slate-200">
                <form onSubmit={handleCalculate} className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Funding Amount (€)
                      </label>
                      <input
                        type="number"
                        name="fundingAmount"
                        value={formData.fundingAmount}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                          errors.fundingAmount 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-slate-300 focus:ring-blue-500'
                        }`}
                        placeholder="50,000"
                        step="1000"
                        min="0"
                      />
                      {errors.fundingAmount && (
                        <p className="mt-1 text-sm text-red-600">{errors.fundingAmount}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Business Stage
                      </label>
                      <select
                        name="businessStage"
                        value={formData.businessStage}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="idea">Idea Stage</option>
                        <option value="planning">Business Planning</option>
                        <option value="early">Early Revenue</option>
                        <option value="growth">Growth Stage</option>
                        <option value="expansion">Expansion Phase</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Loan Term: {formData.loanTerm} years
                      </label>
                      <input
                        type="range"
                        name="loanTerm"
                        value={formData.loanTerm}
                        onChange={handleInputChange}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                        min="1"
                        max="10"
                        step="1"
                      />
                      <div className="flex justify-between text-sm text-slate-600 mt-2">
                        <span>1 year</span>
                        <span>10 years</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Interest Rate: {formData.interestRate}%
                      </label>
                      <input
                        type="range"
                        name="interestRate"
                        value={formData.interestRate}
                        onChange={handleInputChange}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                        min="3.5"
                        max="12"
                        step="0.1"
                      />
                      <div className="flex justify-between text-sm text-slate-600 mt-2">
                        <span>3.5%</span>
                        <span>12%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {loanResults ? (
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
                        <h4 className="text-lg font-semibold text-blue-900 mb-6 flex items-center">
                          <Calculator className="w-5 h-5 mr-2" />
                          Your Monthly Payment
                        </h4>
                        <div className="text-4xl font-bold text-blue-900 mb-6">
                          €{loanResults.monthlyPayment}
                        </div>
                        <div className="space-y-3 text-sm">
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
                      <div className="bg-slate-100 p-8 rounded-2xl text-center">
                        <Calculator className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                        <p className="text-slate-600">Enter funding details to see your estimated monthly payment</p>
                      </div>
                    )}
                    
                    <div className="space-y-4">
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
                      >
                        <Calculator className="w-5 h-5 mr-2" />
                        Calculate Payment
                      </button>
                      
                      <Link
                        href="/loan-application"
                        className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white px-6 py-4 rounded-lg font-semibold hover:from-slate-800 hover:to-slate-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
                      >
                        <FileText className="w-5 h-5 mr-2" />
                        Apply for Business Loan
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Premium Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-light text-slate-900 mb-4">
                Why Choose Our<span className="text-blue-600 font-medium"> Business Loans?</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Flexible financing designed to fuel your entrepreneurial success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {(features || []).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center"
                >
                  <div className={`w-16 h-16 bg-${
                    feature.color === 'blue' ? 'blue' :
                    feature.color === 'green' ? 'green' :
                    feature.color === 'purple' ? 'purple' :
                    'orange'
                  }-100 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <feature.icon className={`w-8 h-8 text-${
                      feature.color === 'blue' ? 'blue' :
                      feature.color === 'green' ? 'green' :
                      feature.color === 'purple' ? 'purple' :
                      'orange'
                    }-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600 to-slate-900 p-12 rounded-3xl text-center text-white"
            >
              <Building className="w-16 h-16 text-blue-200 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">
                Ready to Build Your Business?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Start your secure business loan application today and get approved in as little as 24 hours.
              </p>
              <Link
                href="/loan-application"
                className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
              >
                <FileText className="w-5 h-5 mr-2" />
                Apply for Business Loan
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Trust & Advantages Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-light text-slate-900 mb-4">
                Why Entrepreneurs<span className="text-blue-600 font-medium"> Choose Us</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We combine financial expertise with entrepreneurial understanding to support your success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(advantages || []).map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-3">{advantage.value}</div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{advantage.title}</h3>
                  <p className="text-slate-600">{advantage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-light mb-6">
                Ready to Build Your<span className="text-blue-200 font-medium"> Business Empire?</span>
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Join thousands of successful entrepreneurs who have transformed their ideas into thriving businesses with our support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => document.getElementById('business-form').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center"
                >
                  <Briefcase className="w-5 h-5 mr-2" />
                  Apply for Business Funding
                </button>
                <Link 
                  href="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-all flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Consultation
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
