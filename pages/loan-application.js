import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowLeft, 
  Calculator, 
  DollarSign, 
  Shield, 
  CheckCircle, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  CreditCard, 
  Lock, 
  Clock, 
  Award,
  TrendingUp,
  FileCheck,
  Video,
  PenTool,
  Home,
  Car
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { submitFormEmail, flattenForEmail } from '../utils/formSubmit';

export default function LoanApplication() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Loan Details
    loanAmount: '',
    loanTerm: '',
    loanPurpose: '',
    loanType: 'personal',
    
    // Step 2: Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    street: '',
    city: '',
    zipCode: '',
    
    // Step 3: Financial Information
    employmentStatus: '',
    employer: '',
    jobTitle: '',
    monthlyIncome: '',
    otherIncome: '',
    creditScore: 'good',
    
    // Step 4: Review
    consent: false,
    creditCheck: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [applicationReference, setApplicationReference] = useState('');

  const totalSteps = 4;

  const loanTypes = [
    { value: 'personal', label: 'Personal Loan', description: 'For any personal needs', icon: DollarSign },
    { value: 'mortgage', label: 'Mortgage', description: 'Home financing', icon: Home },
    { value: 'auto', label: 'Auto Loan', description: 'Vehicle financing', icon: Car },
    { value: 'business', label: 'Business Loan', description: 'Business expansion', icon: Briefcase }
  ];

  const loanPurposes = [
    { value: 'debt_consolidation', label: 'Debt Consolidation' },
    { value: 'home_improvement', label: 'Home Improvement' },
    { value: 'major_purchase', label: 'Major Purchase' },
    { value: 'education', label: 'Education' },
    { value: 'medical', label: 'Medical Expenses' },
    { value: 'vacation', label: 'Vacation' },
    { value: 'other', label: 'Other' }
  ];

  const employmentStatuses = [
    { value: 'fulltime', label: 'Full-time Employment' },
    { value: 'parttime', label: 'Part-time Employment' },
    { value: 'selfemployed', label: 'Self-employed' },
    { value: 'retired', label: 'Retired' },
    { value: 'student', label: 'Student' }
  ];

  const creditScores = [
    { value: 'excellent', label: 'Excellent (750+)', rate: '3.5%' },
    { value: 'good', label: 'Good (700-749)', rate: '5.5%' },
    { value: 'fair', label: 'Fair (650-699)', rate: '8.9%' },
    { value: 'poor', label: 'Poor (<650)', rate: '12.5%' }
  ];

  const processSteps = [
    {
      icon: FileCheck,
      title: "Apply Online",
      description: "Complete our secure digital application in minutes"
    },
    {
      icon: TrendingUp,
      title: "Instant Evaluation",
      description: "Get immediate feedback on your loan eligibility"
    },
    {
      icon: Video,
      title: "Identity Verification",
      description: "Secure video verification (VideoIdent) for compliance"
    },
    {
      icon: PenTool,
      title: "Digital Signature",
      description: "E-sign your agreement and receive instant approval"
    }
  ];

  const trustFeatures = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Your data is protected with 256-bit SSL encryption"
    },
    {
      icon: Lock,
      title: "GDPR Compliant",
      description: "Full compliance with European data protection regulations"
    },
    {
      icon: Award,
      title: "Trusted by 50,000+ Customers",
      description: "Join thousands of satisfied borrowers across Europe"
    },
    {
      icon: Clock,
      title: "24-Hour Approval",
      description: "Most applications approved within 24 hours"
    }
  ];

  const handleChange = (e) => {
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

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      // Loan Details Validation
      if (!formData.loanAmount || parseFloat(formData.loanAmount) <= 1000) {
        newErrors.loanAmount = 'Minimum loan amount is €1,000';
      }
      if (!formData.loanTerm) newErrors.loanTerm = 'Please select loan duration';
      if (!formData.loanPurpose) newErrors.loanPurpose = 'Please select loan purpose';
    } else if (step === 2) {
      // Personal Information Validation
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Invalid email format';
      }
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
      if (!formData.street.trim()) newErrors.street = 'Street address is required';
      if (!formData.city.trim()) newErrors.city = 'City is required';
      if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';
    } else if (step === 3) {
      // Financial Information Validation
      if (!formData.employmentStatus) newErrors.employmentStatus = 'Employment status is required';
      if (!formData.employer.trim()) newErrors.employer = 'Employer is required';
      if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required';
      if (!formData.monthlyIncome || parseFloat(formData.monthlyIncome) <= 0) {
        newErrors.monthlyIncome = 'Monthly income is required';
      }
    } else if (step === 4) {
      // Review Validation
      if (!formData.consent) newErrors.consent = 'You must agree to the terms and conditions';
      if (!formData.creditCheck) newErrors.creditCheck = 'You must authorize credit check';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(currentStep)) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // ENVOYER L'EMAIL avec toutes les données
      await submitFormEmail({
        formName: 'Loan Application (English)',
        payload: flattenForEmail({
          ...formData,
          submittedAt: new Date().toISOString(),
          userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'SSR'
        }),
        replyTo: formData.email
      });
      
      setSubmitSuccess(true);
      setApplicationReference(`LOAN-${Math.random().toString(36).substr(2, 9).toUpperCase()}`);
      setIsSubmitting(false);
    } catch (error) {
      console.error('Submission error:', error);
      setIsSubmitting(false);
      alert('Failed to submit application. Please try again.');
    }
  };

  const calculateMonthlyPayment = () => {
    if (!formData.loanAmount || !formData.loanTerm) return 0;
    
    const principal = parseFloat(formData.loanAmount);
    const years = parseFloat(formData.loanTerm);
    const rate = formData.creditScore === 'excellent' ? 0.035 : 
                 formData.creditScore === 'good' ? 0.055 : 
                 formData.creditScore === 'fair' ? 0.089 : 0.125;
    const monthlyRate = rate / 12;
    const numberOfPayments = years * 12;
    
    const monthlyPayment = principal * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    return monthlyPayment.toFixed(2);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
                <Calculator className="w-6 h-6 mr-2 text-blue-600" />
                Loan Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Loan Amount (€) *
                  </label>
                  <input
                    type="number"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                      errors.loanAmount ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
                    }`}
                    placeholder="10,000"
                    min="1000"
                    max="100,000"
                    step="100"
                  />
                  {errors.loanAmount && <p className="mt-1 text-sm text-red-600">{errors.loanAmount}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Loan Duration *
                  </label>
                  <select
                    name="loanTerm"
                    value={formData.loanTerm}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                      errors.loanTerm ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
                    }`}
                  >
                    <option value="">Select duration</option>
                    <option value="1">1 year</option>
                    <option value="2">2 years</option>
                    <option value="3">3 years</option>
                    <option value="4">4 years</option>
                    <option value="5">5 years</option>
                    <option value="7">7 years</option>
                    <option value="10">10 years</option>
                  </select>
                  {errors.loanTerm && <p className="mt-1 text-sm text-red-600">{errors.loanTerm}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Loan Type
                  </label>
                  <select
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {(loanTypes || []).map(type => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Loan Purpose *
                  </label>
                  <select
                    name="loanPurpose"
                    value={formData.loanPurpose}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                      errors.loanPurpose ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
                    }`}
                  >
                    <option value="">Select purpose</option>
                    {(loanPurposes || []).map(purpose => (
                      <option key={purpose.value} value={purpose.value}>{purpose.label}</option>
                    ))}
                  </select>
                  {errors.loanPurpose && <p className="mt-1 text-sm text-red-600">{errors.loanPurpose}</p>}
                </div>
              </div>
            </div>

            {/* Loan Preview */}
            {formData.loanAmount && formData.loanTerm && (
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-900 mb-4">Loan Preview</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-blue-700">Monthly Payment</p>
                    <p className="text-2xl font-bold text-blue-900">€{calculateMonthlyPayment()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-blue-700">Interest Rate</p>
                    <p className="text-2xl font-bold text-blue-900">
                      {creditScores.find(s => s.value === formData.creditScore)?.rate || '5.5%'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-blue-700">Total Amount</p>
                    <p className="text-2xl font-bold text-blue-900">
                      €{(parseFloat(formData.loanAmount) + (parseFloat(calculateMonthlyPayment()) * parseFloat(formData.loanTerm) * 12 - parseFloat(formData.loanAmount))).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
                <User className="w-6 h-6 mr-2 text-blue-600" />
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                      errors.firstName ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
                    }`}
                    placeholder="John"
                  />
                  {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                      errors.lastName ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
                    }`}
                    placeholder="Doe"
                  />
                  {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                      errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
                    }`}
                    placeholder="john.doe@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                      errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
                    }`}
                    placeholder="+49 30 12345678"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                      errors.dateOfBirth ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
                    }`}
                  />
                  {errors.dateOfBirth && <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                      errors.zipCode ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
                    }`}
                    placeholder="10115"
                  />
                  {errors.zipCode && <p className="mt-1 text-sm text-red-600">{errors.zipCode}</p>}
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                      errors.street ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
                    }`}
                    placeholder="Friedrichstraße 123"
                  />
                  {errors.street && <p className="mt-1 text-sm text-red-600">{errors.street}</p>}
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                      errors.city ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
                    }`}
                    placeholder="Berlin"
                  />
                  {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
                </div>
              </div>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-2 text-blue-600" />
                Financial Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Employment Status *
                  </label>
                  <select
                    name="employmentStatus"
                    value={formData.employmentStatus}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                      errors.employmentStatus ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
                    }`}
                  >
                    <option value="">Select status</option>
                    {(employmentStatuses || []).map(status => (
                      <option key={status.value} value={status.value}>{status.label}</option>
                    ))}
                  </select>
                  {errors.employmentStatus && <p className="mt-1 text-sm text-red-600">{errors.employmentStatus}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Monthly Income (€) *
                  </label>
                  <input
                    type="number"
                    name="monthlyIncome"
                    value={formData.monthlyIncome}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                      errors.monthlyIncome ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
                    }`}
                    placeholder="3,500"
                    min="0"
                    step="100"
                  />
                  {errors.monthlyIncome && <p className="mt-1 text-sm text-red-600">{errors.monthlyIncome}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Employer *
                  </label>
                  <input
                    type="text"
                    name="employer"
                    value={formData.employer}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                      errors.employer ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
                    }`}
                    placeholder="Tech Company GmbH"
                  />
                  {errors.employer && <p className="mt-1 text-sm text-red-600">{errors.employer}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                      errors.jobTitle ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
                    }`}
                    placeholder="Senior Developer"
                  />
                  {errors.jobTitle && <p className="mt-1 text-sm text-red-600">{errors.jobTitle}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Other Monthly Income (€)
                  </label>
                  <input
                    type="number"
                    name="otherIncome"
                    value={formData.otherIncome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="500"
                    min="0"
                    step="100"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Estimated Credit Score
                  </label>
                  <select
                    name="creditScore"
                    value={formData.creditScore}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {(creditScores || []).map(score => (
                      <option key={score.value} value={score.value}>{score.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2 text-blue-600" />
                Review & Submit
              </h3>
              
              {/* Application Summary */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
                <h4 className="text-lg font-semibold text-slate-900 mb-4">Application Summary</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-slate-700 mb-3">Loan Details</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Amount:</span>
                        <span className="font-medium">€{formData.loanAmount || 'N/A'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Duration:</span>
                        <span className="font-medium">{formData.loanTerm ? `${formData.loanTerm} years` : 'N/A'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Purpose:</span>
                        <span className="font-medium">{loanPurposes.find(p => p.value === formData.loanPurpose)?.label || 'N/A'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Monthly Payment:</span>
                        <span className="font-medium text-blue-600">€{calculateMonthlyPayment()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-slate-700 mb-3">Personal Information</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Name:</span>
                        <span className="font-medium">{formData.firstName} {formData.lastName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Email:</span>
                        <span className="font-medium">{formData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Phone:</span>
                        <span className="font-medium">{formData.phone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Employment:</span>
                        <span className="font-medium">{employmentStatuses.find(s => s.value === formData.employmentStatus)?.label || 'N/A'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Consent Section */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="consent"
                    id="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className={`mt-1 mr-3 ${
                      errors.consent ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  <label htmlFor="consent" className="text-sm text-slate-600">
                    I agree to the terms and conditions and privacy policy. I understand that my information will be used to process my loan application.
                  </label>
                </div>
                {errors.consent && <p className="mt-1 text-sm text-red-600">{errors.consent}</p>}
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="creditCheck"
                    id="creditCheck"
                    checked={formData.creditCheck}
                    onChange={handleChange}
                    className={`mt-1 mr-3 ${
                      errors.creditCheck ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  <label htmlFor="creditCheck" className="text-sm text-slate-600">
                    I authorize the bank to obtain my credit report and verify the information provided in this application.
                  </label>
                </div>
                {errors.creditCheck && <p className="mt-1 text-sm text-red-600">{errors.creditCheck}</p>}
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        <Header />
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
          <section className="py-20">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl mx-auto text-center"
              >
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-4">Application Submitted Successfully!</h1>
                  <p className="text-lg text-slate-600 mb-6">
                    Thank you for your loan application. Our team will review your information and contact you within 24 hours.
                  </p>
                  <p className="text-slate-600 mb-8">
                    Application Reference: <span className="font-mono font-bold text-blue-600">{applicationReference}</span>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Back to Home
                    </Link>
                    <Link href="/contact" className="border border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
                      Contact Support
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        {/* Hero Section with Background Image */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1554224155-6726b3ff8585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
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
                Apply for Your<span className="text-blue-300 font-medium"> Loan in Minutes</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-8">
                Fast, secure, and fully digital financing tailored to your needs. Get approved in as little as 24 hours.
              </p>
              <button
                onClick={() => document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center mx-auto"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Start Application
              </button>
            </motion.div>
          </div>
        </section>

        {/* Progress Bar */}
        <section className="py-8 bg-white border-b border-slate-200">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                {Array.from({ length: totalSteps }, (_, i) => (
                  <div key={i} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                      i + 1 <= currentStep ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'
                    }`}>
                      {i + 1}
                    </div>
                    {i < totalSteps - 1 && (
                      <div className={`w-full h-1 mx-4 ${
                        i + 1 < currentStep ? 'bg-blue-600' : 'bg-slate-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
              <div className="text-center text-sm text-slate-600">
                Step {currentStep} of {totalSteps}: {
                  currentStep === 1 ? 'Loan Details' :
                  currentStep === 2 ? 'Personal Information' :
                  currentStep === 3 ? 'Financial Information' :
                  'Review & Submit'
                }
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="application-form" className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200"
              >
                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                    >
                      {renderStepContent()}
                    </motion.div>
                  </AnimatePresence>
                  
                  <div className="flex justify-between mt-8 pt-6 border-t border-slate-200">
                    <button
                      type="button"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                      className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2 inline-block" />
                      Previous
                    </button>
                    
                    {currentStep < totalSteps ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center"
                      >
                        Next Step
                        <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 inline-block"></div>
                            Processing...
                          </>
                        ) : (
                          <>
                            Submit Application
                            <CheckCircle className="w-4 h-4 ml-2 inline-block" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </form>
              </motion.div>
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
                How Our<span className="text-blue-600 font-medium"> Digital Process Works</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From application to approval, our streamlined process takes minutes, not days.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(processSteps || []).map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust & Security Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-light text-slate-900 mb-4">
                Your Data is<span className="text-blue-600 font-medium"> Secure & Protected</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Bank-grade security and full compliance with European regulations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(trustFeatures || []).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
