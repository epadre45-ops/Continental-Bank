import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Calculator, CheckCircle, ArrowRight, Building, Shield, TrendingUp, Users, X, Check } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { submitFormEmail, flattenForEmail } from '../utils/formSubmit';

export default function NewConstruction() {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    maritalStatus: '',
    dependents: '',
    
    // Professional Information
    profession: '',
    contractType: '',
    monthlyIncome: '',
    spouseIncome: '',
    yearsInPosition: '',
    otherIncome: '',
    
    // Project Information
    projectType: '',
    propertyType: '',
    propertyPrice: '',
    downPayment: '',
    loanAmount: '',
    loanTerm: '',
    
    // Current Situation
    ownershipStatus: '',
    currentRent: '',
    otherLoans: '',
    otherLoanPayments: '',
    
    // Government Programs
    ptzEligible: '',
    aplEligible: '',
    pinelEligible: '',
    actionLogementEligible: '',
    
    // Consents
    dataConsent: false,
    marketingConsent: false
  });

  // Quick Calculator State
  const [quickCalc, setQuickCalc] = useState({
    projectValue: '',
    downPayment: '',
    monthlyPayment: null,
    showResult: false
  });

  // UI States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Personal Information Validation
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.maritalStatus) newErrors.maritalStatus = 'Marital status is required';
    if (!formData.dependents) newErrors.dependents = 'Number of dependents is required';
    
    // Professional Information Validation
    if (!formData.profession) newErrors.profession = 'Profession is required';
    if (!formData.contractType) newErrors.contractType = 'Contract type is required';
    if (!formData.monthlyIncome || formData.monthlyIncome <= 0) newErrors.monthlyIncome = 'Monthly income must be greater than 0';
    if (!formData.yearsInPosition) newErrors.yearsInPosition = 'Years in position is required';
    
    // Project Information Validation
    if (!formData.projectType) newErrors.projectType = 'Project type is required';
    if (!formData.propertyType) newErrors.propertyType = 'Property type is required';
    if (!formData.propertyPrice || formData.propertyPrice <= 0) newErrors.propertyPrice = 'Property price must be greater than 0';
    if (!formData.downPayment || formData.downPayment < 0) newErrors.downPayment = 'Down payment must be 0 or greater';
    if (!formData.loanAmount || formData.loanAmount <= 0) newErrors.loanAmount = 'Loan amount must be greater than 0';
    if (!formData.loanTerm) newErrors.loanTerm = 'Loan term is required';
    
    // Consent Validation
    if (!formData.dataConsent) newErrors.dataConsent = 'Data consent is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to first error
      const firstErrorField = document.querySelector('[class*="border-red-500"]');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // ENVOYER L'EMAIL avec toutes les données
      await submitFormEmail({
        formName: 'New Construction Loan Application',
        payload: flattenForEmail({
          ...formData,
          submittedAt: new Date().toISOString(),
          userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'SSR'
        }),
        replyTo: formData.email
      });
      
      // Show success message
      setShowSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          dateOfBirth: '',
          maritalStatus: '',
          dependents: '',
          profession: '',
          contractType: '',
          monthlyIncome: '',
          spouseIncome: '',
          yearsInPosition: '',
          otherIncome: '',
          projectType: '',
          propertyType: '',
          propertyPrice: '',
          downPayment: '',
          loanAmount: '',
          loanTerm: '',
          ownershipStatus: '',
          currentRent: '',
          otherLoans: '',
          otherLoanPayments: '',
          ptzEligible: '',
          aplEligible: '',
          pinelEligible: '',
          actionLogementEligible: '',
          dataConsent: false,
          marketingConsent: false
        });
        setShowSuccess(false);
      }, 5000);
      
    } catch (error) {
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuickCalc = (e) => {
    e.preventDefault();
    
    const projectValue = parseFloat(quickCalc.projectValue);
    const downPayment = parseFloat(quickCalc.downPayment);
    
    if (!projectValue || !downPayment || projectValue <= 0 || downPayment < 0) {
      alert('Please enter valid project value and down payment amounts');
      return;
    }
    
    if (downPayment > projectValue) {
      alert('Down payment cannot exceed project value');
      return;
    }
    
    const loanAmount = projectValue - downPayment;
    const interestRate = 0.035; // 3.5% annual rate
    const loanTermYears = 25; // Default 25 years
    const monthlyRate = interestRate / 12;
    const numPayments = loanTermYears * 12;
    
    // Calculate monthly payment using loan formula
    const monthlyPayment = loanAmount * 
      (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
      (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    setQuickCalc(prev => ({
      ...prev,
      monthlyPayment: monthlyPayment.toFixed(2),
      showResult: true
    }));
  };

  const handleQuickCalcChange = (e) => {
    const { name, value } = e.target;
    setQuickCalc(prev => ({
      ...prev,
      [name]: value,
      showResult: false
    }));
  };

  const features = [
    {
      icon: Building,
      title: "New Construction Financing",
      description: "Specialized loans for building your dream home with competitive rates"
    },
    {
      icon: Shield,
      title: "Government Program Support",
      description: "Expert guidance on PTZ, Pinel, and other housing assistance programs"
    },
    {
      icon: TrendingUp,
      title: "Flexible Terms",
      description: "Customizable repayment schedules tailored to your financial situation"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated advisors throughout your entire construction journey"
    }
  ];

  const benefits = [
    "Competitive interest rates starting from 2.5%",
    "Financing up to 90% of project value",
    "Construction phase payment scheduling",
    "No early repayment penalties",
    "Fixed or variable rate options",
    "Quick approval process"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80")'
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Build Your Future with
              <span className="text-blue-300"> Confidence</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Premium construction financing solutions designed to turn your dream home into reality. 
              From groundbreaking to move-in day, we're with you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Apply Now
              </button>
              <button
                onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all flex items-center justify-center"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Choose Our Construction Financing?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We specialize in making your construction project a reality with tailored financial solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(features || []).map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Premium Benefits for Your Construction Project
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Enjoy comprehensive support and competitive advantages designed specifically for new construction financing
              </p>
              <div className="space-y-4">
                {(benefits || []).map((benefit) => (
                  <div key={benefit} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <div className="text-center mb-6">
                <Calculator className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Quick Estimate</h3>
                <p className="text-slate-600">Get an instant estimate for your construction project</p>
              </div>
              <form onSubmit={handleQuickCalc} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Project Value (â¬)</label>
                  <input
                    type="number"
                    name="projectValue"
                    value={quickCalc.projectValue}
                    onChange={handleQuickCalcChange}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="300,000"
                    step="1000"
                    min="0"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Down Payment (â¬)</label>
                  <input
                    type="number"
                    name="downPayment"
                    value={quickCalc.downPayment}
                    onChange={handleQuickCalcChange}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="30,000"
                    step="1000"
                    min="0"
                    required
                  />
                </div>
                
                {quickCalc.showResult && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-green-600 font-medium">Estimated Monthly Payment</p>
                        <p className="text-2xl font-bold text-green-700">â¬{quickCalc.monthlyPayment}</p>
                        <p className="text-xs text-green-600 mt-1">Based on 3.5% interest rate over 25 years</p>
                      </div>
                      <Check className="w-8 h-8 text-green-500" />
                    </div>
                  </div>
                )}
                
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculate Monthly Payment
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Start Your Application</h2>
            <p className="text-xl text-slate-600">Complete our secure form to begin your construction financing journey</p>
          </motion.div>

          {/* Success Message */}
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-green-800">Application Submitted Successfully!</h3>
                    <p className="text-green-700">Thank you for your application. Our team will contact you within 24 hours to discuss your construction financing options.</p>
                  </div>
                  <button
                    onClick={() => setShowSuccess(false)}
                    className="ml-auto text-green-500 hover:text-green-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto"
          >
            {/* Personal Information */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <Users className="w-6 h-6 mr-2 text-blue-600" />
                Personal Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                      errors.fullName 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-slate-300 focus:ring-blue-500'
                    }`}
                    placeholder="John Smith"
                    required
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                      errors.email 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-slate-300 focus:ring-blue-500'
                    }`}
                    placeholder="john.smith@email.com"
                    required
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 234 567 8900"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Date of Birth *</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Marital Status *</label>
                  <select
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select...</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="civil-partnership">Civil Partnership</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Number of Dependents *</label>
                  <input
                    type="number"
                    name="dependents"
                    value={formData.dependents}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0"
                    min="0"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Professional Information</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Profession *</label>
                  <select
                    name="profession"
                    value={formData.profession}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select...</option>
                    <option value="employee">Employee</option>
                    <option value="civil-servant">Civil Servant</option>
                    <option value="self-employed">Self-Employed</option>
                    <option value="retired">Retired</option>
                    <option value="executive">Executive</option>
                    <option value="intermediate">Intermediate Profession</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Contract Type *</label>
                  <select
                    name="contractType"
                    value={formData.contractType}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select...</option>
                    <option value="permanent">Permanent Contract</option>
                    <option value="civil-servant">Civil Servant</option>
                    <option value="fixed-term">Fixed-Term Contract</option>
                    <option value="temporary">Temporary Contract</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Monthly Net Income (â¬) *</label>
                  <input
                    type="number"
                    name="monthlyIncome"
                    value={formData.monthlyIncome}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="3,500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Spouse Monthly Income (â¬)</label>
                  <input
                    type="number"
                    name="spouseIncome"
                    value={formData.spouseIncome}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="2,800"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Years in Current Position *</label>
                  <select
                    name="yearsInPosition"
                    value={formData.yearsInPosition}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select...</option>
                    <option value="less-1">Less than 1 year</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="more-10">More than 10 years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Other Monthly Income (â¬)</label>
                  <input
                    type="number"
                    name="otherIncome"
                    value={formData.otherIncome}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="500"
                  />
                </div>
              </div>
            </div>

            {/* Project Information */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Project Information</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Project Type *</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select...</option>
                    <option value="primary-residence">Primary Residence</option>
                    <option value="rental-investment">Rental Investment</option>
                    <option value="secondary-residence">Secondary Residence</option>
                    <option value="new-construction">New Construction</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Property Type *</label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select...</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="studio">Studio</option>
                    <option value="villa">Villa</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Property Value (â¬) *</label>
                  <input
                    type="number"
                    name="propertyPrice"
                    value={formData.propertyPrice}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="300,000"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Down Payment (â¬) *</label>
                  <input
                    type="number"
                    name="downPayment"
                    value={formData.downPayment}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="30,000"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Loan Amount (â¬) *</label>
                  <input
                    type="number"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="270,000"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Loan Term (years) *</label>
                  <select
                    name="loanTerm"
                    value={formData.loanTerm}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select...</option>
                    <option value="10">10 years</option>
                    <option value="15">15 years</option>
                    <option value="20">20 years</option>
                    <option value="25">25 years</option>
                    <option value="30">30 years</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Consents */}
            <div className={`bg-slate-50 border rounded-2xl p-8 mb-8 ${
              errors.dataConsent ? 'border-red-500' : 'border-slate-200'
            }`}>
              <div className="space-y-4">
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    name="dataConsent"
                    checked={formData.dataConsent}
                    onChange={handleInputChange}
                    className="mr-3 mt-1"
                    required
                  />
                  <span className="text-sm text-slate-700">
                    I consent to my information being used for the analysis of my application *
                  </span>
                </label>
                {errors.dataConsent && (
                  <p className="mt-1 text-sm text-red-600">{errors.dataConsent}</p>
                )}
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    name="marketingConsent"
                    checked={formData.marketingConsent}
                    onChange={handleInputChange}
                    className="mr-3 mt-1"
                  />
                  <span className="text-sm text-slate-700">
                    I wish to receive personalized commercial offers
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 text-white px-12 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 inline-block"></div>
                    Processing Application...
                  </>
                ) : (
                  <>
                    <Shield className="w-5 h-5 mr-2 inline-block" />
                    Submit Application
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-8">Why Trust Continental Bank?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-blue-300 mb-2">150+</div>
                <div className="text-xl">Years of Banking Excellence</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-300 mb-2">10,000+</div>
                <div className="text-xl">Construction Projects Financed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-300 mb-2">98%</div>
                <div className="text-xl">Customer Satisfaction Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
