import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Calculator, CheckCircle, ArrowRight, Building, Shield, TrendingUp, Users, TrendingDown, PiggyBank, FileText, Award, DollarSign, Clock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function MortgageLoan() {
  const [formData, setFormData] = useState({
    // Loan Simulator State Only
    propertyPrice: '',
    downPayment: '',
    loanTerm: 25,
    interestRate: 1.85,
    propertyType: 'primary-residence',
    showResults: false
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      showResults: false
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateSimulator = () => {
    const newErrors = {};
    
    if (!formData.propertyPrice || formData.propertyPrice <= 0) {
      newErrors.propertyPrice = 'Property price is required';
    }
    if (!formData.downPayment || formData.downPayment < 0) {
      newErrors.downPayment = 'Down payment is required';
    }
    if (parseFloat(formData.downPayment) > parseFloat(formData.propertyPrice)) {
      newErrors.downPayment = 'Down payment cannot exceed property price';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateLoan = () => {
    if (!validateSimulator()) {
      return null;
    }
    
    const propertyPrice = parseFloat(formData.propertyPrice);
    const downPayment = parseFloat(formData.downPayment);
    const loanAmount = propertyPrice - downPayment;
    const monthlyRate = formData.interestRate / 100 / 12;
    const numPayments = formData.loanTerm * 12;
    
    // Calculate monthly payment using loan formula
    const monthlyPayment = loanAmount * 
      (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
      (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    const totalCost = monthlyPayment * numPayments;
    const totalInterest = totalCost - loanAmount;
    const apr = ((Math.pow(1 + monthlyRate, numPayments) - 1) * 12) * 100;
    
    return {
      loanAmount: loanAmount.toFixed(2),
      monthlyPayment: monthlyPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      totalCost: totalCost.toFixed(2),
      apr: apr.toFixed(2)
    };
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    
    if (!formData.propertyPrice || !formData.downPayment) {
      setErrors({ propertyPrice: 'Please enter property details' });
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      showResults: true
    }));
  };

  const loanResults = formData.showResults ? calculateLoan() : null;

  const features = [
    {
      icon: Building,
      title: "Primary Residence Loans",
      description: "Competitive rates starting from 1.85% APR for your dream home",
      color: "blue"
    },
    {
      icon: TrendingUp,
      title: "Investment Properties",
      description: "Financing solutions for rental investments with tax advantages",
      color: "green"
    },
    {
      icon: Shield,
      title: "Government Support",
      description: "Access to PTZ, Pinel, and other housing assistance programs",
      color: "purple"
    }
  ];

  const benefits = [
    "Loans up to €2,000,000",
    "Flexible repayment terms (10-30 years)",
    "Fixed and variable rate options",
    "No early repayment penalties",
    "Quick approval process",
    "Personalized advisor support"
  ];

  const assistancePrograms = [
    {
      name: "Zero-Rate Loan (PTZ)",
      description: "Interest-free loan for first-time homebuyers",
      maxAmount: "Up to €100,000",
      icon: "🏠",
      color: "blue"
    },
    {
      name: "Housing Allowance (APL)",
      description: "Personalized housing assistance based on income",
      maxAmount: "Varies by situation",
      icon: "🏡",
      color: "orange"
    },
    {
      name: "Pinel/Denormandie",
      description: "Tax reduction for rental investments",
      maxAmount: "Up to 21% tax reduction",
      icon: "📊",
      color: "green"
    },
    {
      name: "Action Housing",
      description: "Employer housing assistance program",
      maxAmount: "Up to €10,000/year",
      icon: "💼",
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1560449019-7c6839db5ed0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
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
              Finance Your Future with
              <span className="text-blue-300"> Confidence</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Smart mortgage solutions for your dream home. 
              Competitive rates, flexible terms, and expert guidance from application to closing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('mortgage-calculator').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Your Mortgage
              </button>
              <button
                onClick={() => document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all flex items-center justify-center"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Rates Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Current Mortgage Rates
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Historically low rates to make homeownership more affordable
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-12 rounded-3xl shadow-2xl"
          >
            <div className="text-center">
              <div className="text-6xl font-bold mb-2">1.85%*</div>
              <div className="text-xl text-blue-100 mb-8">Annual Percentage Rate (APR)</div>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">€50K - €2M</div>
                  <p className="text-blue-100">Loan Amount</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">10-30 years</div>
                  <p className="text-blue-100">Repayment Term</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">48 hours</div>
                  <p className="text-blue-100">Approval Time</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {(features || []).map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white p-8 rounded-2xl shadow-lg border-2 ${
                  feature.color === 'blue' ? 'border-blue-200' :
                  feature.color === 'green' ? 'border-green-200' :
                  'border-purple-200'
                }`}
              >
                <div className={`w-16 h-16 bg-${
                  feature.color === 'blue' ? 'blue' :
                  feature.color === 'green' ? 'green' :
                  'purple'
                }-100 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className={`w-8 h-8 text-${
                    feature.color === 'blue' ? 'blue' :
                    feature.color === 'green' ? 'green' :
                    'purple'
                  }-600`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-center leading-relaxed">
                  {feature.description}
                </p>
                <button className={`w-full mt-6 py-3 rounded-lg font-semibold transition-colors ${
                  feature.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700 text-white' :
                  feature.color === 'green' ? 'bg-green-600 hover:bg-green-700 text-white' :
                  'bg-purple-600 hover:bg-purple-700 text-white'
                }`}>
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Mortgage Simulator Section */}
      <section id="mortgage-calculator" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-light text-slate-900 mb-4">
              Estimate Your<span className="text-blue-600 font-medium"> Mortgage in Seconds</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Get instant monthly payment estimates with our premium simulator
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
                      Property Price (€)
                    </label>
                    <input
                      type="number"
                      name="propertyPrice"
                      value={formData.propertyPrice}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                        errors.propertyPrice 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-slate-300 focus:ring-blue-500'
                      }`}
                      placeholder="300,000"
                      step="1000"
                      min="0"
                    />
                    {errors.propertyPrice && (
                      <p className="mt-1 text-sm text-red-600">{errors.propertyPrice}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Down Payment (€)
                    </label>
                    <input
                      type="number"
                      name="downPayment"
                      value={formData.downPayment}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                        errors.downPayment 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-slate-300 focus:ring-blue-500'
                      }`}
                      placeholder="30,000"
                      step="1000"
                      min="0"
                    />
                    {errors.downPayment && (
                      <p className="mt-1 text-sm text-red-600">{errors.downPayment}</p>
                    )}
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
                      min="10"
                      max="30"
                      step="1"
                    />
                    <div className="flex justify-between text-sm text-slate-600 mt-2">
                      <span>10 years</span>
                      <span>30 years</span>
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
                          <span className="text-blue-700">APR:</span>
                          <span className="font-medium text-blue-900">{loanResults.apr}%</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-slate-100 p-8 rounded-2xl text-center">
                      <Calculator className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                      <p className="text-slate-600">Enter property details to see your estimated monthly payment</p>
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
                      Apply for Your Mortgage
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
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-slate-900 mb-4">
              Why Choose Our<span className="text-blue-600 font-medium"> Mortgage Solutions?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience transparent financing with competitive rates and exceptional service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: TrendingUp,
                title: "Competitive Rates",
                description: "Starting from 1.85% APR with flexible terms",
                color: "blue"
              },
              {
                icon: Clock,
                title: "Fast Approval",
                description: "Get pre-approved in as little as 24 hours",
                color: "green"
              },
              {
                icon: Shield,
                title: "Bank Security",
                description: "Your data protected with bank-grade encryption",
                color: "purple"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center"
              >
                <div className={`w-16 h-16 bg-${
                  benefit.color === 'blue' ? 'blue' :
                  benefit.color === 'green' ? 'green' :
                  'purple'
                }-100 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <benefit.icon className={`w-8 h-8 text-${
                    benefit.color === 'blue' ? 'blue' :
                    benefit.color === 'green' ? 'green' :
                    'purple'
                  }-600`} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
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
            <Home className="w-16 h-16 text-blue-200 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">
              Ready to Own Your Dream Home?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start your secure mortgage application today and get approved in as little as 24 hours.
            </p>
            <Link
              href="/loan-application"
              className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
            >
              <FileText className="w-5 h-5 mr-2" />
              Apply for Your Mortgage
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Government Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Government Assistance Programs
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Take advantage of available housing support and financial assistance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(assistancePrograms || []).map((program, index) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className={`w-16 h-16 bg-${
                  program.color === 'blue' ? 'blue' :
                  program.color === 'orange' ? 'orange' :
                  program.color === 'green' ? 'green' :
                  'purple'
                }-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <div className="text-2xl">{program.icon}</div>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  {program.name}
                </h4>
                <p className="text-sm text-slate-600 mb-2">
                  {program.description}
                </p>
                <p className="text-sm font-medium text-slate-700">
                  {program.maxAmount}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Trust Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light mb-4">
              Why Trust Our<span className="text-blue-300 font-medium"> Mortgage Solutions?</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Bank-grade security and 150+ years of lending excellence
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                value: "150+",
                label: "Years of Banking Excellence",
                icon: Award
              },
              {
                value: "€5B+",
                label: "Mortgages Financed",
                icon: TrendingUp
              },
              {
                value: "98%",
                label: "Customer Satisfaction",
                icon: Users
              }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 text-blue-300 mx-auto mb-4" />
                <div className="text-4xl font-bold text-blue-300 mb-2">{stat.value}</div>
                <div className="text-xl text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-12 rounded-3xl text-center border border-white/20"
          >
            <Shield className="w-16 h-16 text-blue-300 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start your secure mortgage application today and join thousands of satisfied homeowners.
            </p>
            <Link
              href="/loan-application"
              className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
            >
              <FileText className="w-5 h-5 mr-2" />
              Start Your Application
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-12 bg-yellow-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-yellow-100 border-2 border-yellow-200 p-6 rounded-xl inline-block">
              <p className="text-lg text-slate-700 mb-2">
                <span className="font-bold text-orange-600">*APR from 1.85% subject to approval</span>
              </p>
              <p className="text-sm text-slate-600">
                Example: €270,000 loan over 25 years at 1.85% APR = €1,245/month
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
