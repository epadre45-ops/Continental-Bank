import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calculator, DollarSign, Wrench, FileText, ArrowLeft, Shield, TrendingUp, Award } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function HomeImprovementLoanCalculator() {
  const [formData, setFormData] = useState({
    projectCost: '',
    downPayment: '',
    loanTerm: '',
    interestRate: '',
    creditScore: 'excellent',
    projectType: 'renovation'
  });

  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState({});

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
    
    if (!formData.projectCost || parseFloat(formData.projectCost) <= 0) {
      newErrors.projectCost = 'Project cost is required';
    }
    if (!formData.downPayment || parseFloat(formData.downPayment) < 0) {
      newErrors.downPayment = 'Down payment is required';
    }
    if (parseFloat(formData.downPayment) > parseFloat(formData.projectCost)) {
      newErrors.downPayment = 'Down payment cannot exceed project cost';
    }
    if (!formData.loanTerm || parseFloat(formData.loanTerm) <= 0) {
      newErrors.loanTerm = 'Loan term is required';
    }
    if (!formData.interestRate || parseFloat(formData.interestRate) <= 0) {
      newErrors.interestRate = 'Interest rate is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateHomeImprovementLoan = () => {
    if (!validateForm()) {
      return;
    }

    const projectCost = parseFloat(formData.projectCost);
    const downPayment = parseFloat(formData.downPayment);
    const loanAmount = projectCost - downPayment;
    const years = parseFloat(formData.loanTerm);
    const annualRate = parseFloat(formData.interestRate);
    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = years * 12;

    // Calculate monthly payment using standard loan formula
    const monthlyPayment = loanAmount * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - loanAmount;
    const downPaymentPercentage = (downPayment / projectCost * 100).toFixed(1);
    
    // Create amortization schedule (first 12 months)
    const amortizationSchedule = [];
    let remainingBalance = loanAmount;
    
    for (let month = 1; month <= Math.min(numberOfPayments, 12); month++) {
      const interestPayment = remainingBalance * monthlyRate;
      const principalPayment = monthlyPayment - interestPayment;
      remainingBalance -= principalPayment;
      
      amortizationSchedule.push({
        month,
        payment: monthlyPayment.toFixed(2),
        principal: principalPayment.toFixed(2),
        interest: interestPayment.toFixed(2),
        remainingBalance: remainingBalance.toFixed(2)
      });
    }

    setResults({
      projectCost: projectCost.toFixed(2),
      loanAmount: loanAmount.toFixed(2),
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      downPaymentPercentage,
      amortizationSchedule
    });
  };

  const resetForm = () => {
    setFormData({
      projectCost: '',
      downPayment: '',
      loanTerm: '',
      interestRate: '',
      creditScore: 'excellent',
      projectType: 'renovation'
    });
    setResults(null);
    setErrors({});
  };

  const homeImprovementFeatures = [
    {
      icon: Shield,
      title: "Competitive Rates",
      description: "Rates starting from 2.9% APR for qualified borrowers",
      color: "blue"
    },
    {
      icon: TrendingUp,
      title: "Flexible Terms",
      description: "Choose from 5 to 15-year repayment periods",
      color: "green"
    },
    {
      icon: Award,
      title: "Quick Approval",
      description: "Get approved in as little as 48 hours",
      color: "purple"
    }
  ];

  const projectTypes = [
    { value: 'renovation', label: 'Home Renovation', description: 'Kitchen, bathroom, flooring updates' },
    { value: 'addition', label: 'Room Addition', description: 'Adding new living spaces' },
    { value: 'outdoor', label: 'Outdoor Improvements', description: 'Landscaping, deck, pool' },
    { value: 'energy', label: 'Energy Efficiency', description: 'Solar panels, insulation, windows' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        {/* Hero Section with Background Image */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1581888227610-ec06ebd8a19a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
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
              <Link href="/calculators/loan" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />Back to Loan Calculators
              </Link>
              <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
                Home Improvement<span className="text-blue-300 font-medium"> Calculator</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                Calculate your monthly home improvement loan payments, total interest, and see a complete amortization schedule. Transform your home with confidence.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Calculator Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200"
              >
                <h2 className="text-2xl font-medium text-slate-900 mb-6 flex items-center">
                  <Calculator className="w-6 h-6 mr-2 text-blue-600" />Project Details
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Project Cost ($)
                    </label>
                    <input
                      type="number"
                      name="projectCost"
                      value={formData.projectCost}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                        errors.projectCost 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-slate-300 focus:ring-blue-500'
                      }`}
                      placeholder="50,000"
                      min="0"
                      step="500"
                    />
                    {errors.projectCost && (
                      <p className="mt-1 text-sm text-red-600">{errors.projectCost}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Down Payment ($)
                    </label>
                    <input
                      type="number"
                      name="downPayment"
                      value={formData.downPayment}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                        errors.downPayment 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-slate-300 focus:ring-blue-500'
                      }`}
                      placeholder="5,000"
                      min="0"
                      step="500"
                    />
                    {errors.downPayment && (
                      <p className="mt-1 text-sm text-red-600">{errors.downPayment}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {(projectTypes || []).map(type => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Loan Term (years)
                    </label>
                    <select
                      name="loanTerm"
                      value={formData.loanTerm}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                        errors.loanTerm 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-slate-300 focus:ring-blue-500'
                      }`}
                    >
                      <option value="">Select loan term</option>
                      <option value="5">5 years</option>
                      <option value="7">7 years</option>
                      <option value="10">10 years</option>
                      <option value="12">12 years</option>
                      <option value="15">15 years</option>
                    </select>
                    {errors.loanTerm && (
                      <p className="mt-1 text-sm text-red-600">{errors.loanTerm}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Interest Rate (%)
                    </label>
                    <input
                      type="number"
                      name="interestRate"
                      value={formData.interestRate}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                        errors.interestRate 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-slate-300 focus:ring-blue-500'
                      }`}
                      placeholder="3.9"
                      min="0.1"
                      max="20"
                      step="0.1"
                    />
                    {errors.interestRate && (
                      <p className="mt-1 text-sm text-red-600">{errors.interestRate}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Credit Score
                    </label>
                    <select
                      name="creditScore"
                      value={formData.creditScore}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="excellent">Excellent (750+)</option>
                      <option value="good">Good (700-749)</option>
                      <option value="fair">Fair (650-699)</option>
                      <option value="poor">Poor (&lt; 650)</option>
                    </select>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={calculateHomeImprovementLoan}
                      className="flex-1 bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium flex items-center justify-center"
                    >
                      <Calculator className="w-5 h-5 mr-2" />Calculate Payment
                    </button>
                    <button
                      onClick={resetForm}
                      className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
                    >Reset</button>
                  </div>
                </div>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-6"
              >
                {results ? (
                  <>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
                      <h3 className="text-2xl font-medium text-slate-900 mb-6 flex items-center">
                        <DollarSign className="w-6 h-6 mr-2 text-green-600" />Home Improvement Loan Results
                      </h3>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                          <span className="text-slate-600">Project Cost</span>
                          <span className="text-xl font-bold text-slate-900">
                            ${parseFloat(results.projectCost).toLocaleString()}
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                          <span className="text-slate-600">Loan Amount</span>
                          <span className="text-2xl font-bold text-blue-600">
                            ${parseFloat(results.loanAmount).toLocaleString()}
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                          <span className="text-slate-600">Monthly Payment</span>
                          <span className="text-2xl font-bold text-green-600">
                            ${parseFloat(results.monthlyPayment).toLocaleString()}
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                          <span className="text-slate-600">Total Amount to Repay</span>
                          <span className="text-xl font-bold text-slate-900">
                            ${parseFloat(results.totalPayment).toLocaleString()}
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                          <span className="text-slate-600">Total Interest Cost</span>
                          <span className="text-xl font-bold text-orange-600">
                            ${parseFloat(results.totalInterest).toLocaleString()}
                          </span>
                        </div>

                        <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                          <span className="text-slate-600">Down Payment Percentage</span>
                          <span className="text-xl font-bold text-slate-900">
                            {results.downPaymentPercentage}%
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Amortization Schedule */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                      <h3 className="text-xl font-medium text-slate-900 mb-4">Amortization Schedule (First 12 Months)</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-2">Month</th>
                              <th className="text-right py-2">Payment</th>
                              <th className="text-right py-2">Principal</th>
                              <th className="text-right py-2">Interest</th>
                              <th className="text-right py-2">Balance</th>
                            </tr>
                          </thead>
                          <tbody>
                            {(results?.amortizationSchedule || []).map((payment) => (
                              <tr key={payment.month} className="border-b">
                                <td className="py-2">{payment.month}</td>
                                <td className="text-right py-2">${parseFloat(payment.payment).toLocaleString()}</td>
                                <td className="text-right py-2">${parseFloat(payment.principal).toLocaleString()}</td>
                                <td className="text-right py-2">${parseFloat(payment.interest).toLocaleString()}</td>
                                <td className="text-right py-2">${parseFloat(payment.remainingBalance).toLocaleString()}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calculator className="w-8 h-8 text-slate-400" />
                    </div>
                    <h3 className="text-xl font-medium text-slate-900 mb-2">Calculate Your Home Improvement Loan</h3>
                    <p className="text-slate-600">Fill in the form to see your home improvement loan payment details and amortization schedule</p>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Home Improvement Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <h2 className="text-2xl font-medium text-slate-900 mb-6">Why Choose Our Home Improvement Loans?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {(homeImprovementFeatures || []).map((feature) => (
                    <div key={feature.title} className="text-center p-6">
                      <div className={`w-16 h-16 bg-${
                        feature.color === 'blue' ? 'blue' :
                        feature.color === 'green' ? 'green' :
                        'purple'
                      }-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <feature.icon className={`w-8 h-8 text-${
                          feature.color === 'blue' ? 'blue' :
                          feature.color === 'green' ? 'green' :
                          'purple'
                        }-600`} />
                      </div>
                      <h3 className="text-lg font-medium text-slate-900 mb-2">{feature.title}</h3>
                      <p className="text-slate-600 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Project Types */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-16"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <h2 className="text-2xl font-medium text-slate-900 mb-6">Popular Home Improvement Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {projectTypes.map((type) => (
                    <div key={type.name} className="border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <Wrench className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-medium text-slate-900 mb-2">{type.label}</h3>
                      <p className="text-slate-600 text-sm">{type.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Action Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-2xl shadow-xl text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Home?</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Take the next step towards your dream home with our streamlined home improvement loan process. Get approved in as little as 48 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/calculators/loan" className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to All Calculators
                  </Link>
                  <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors inline-flex items-center justify-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Speak with Loan Advisor
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
