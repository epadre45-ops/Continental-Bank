import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calculator, DollarSign, FileText, ArrowLeft, Shield, TrendingUp, Award, CheckCircle, User, Mail, Phone, MapPin, Briefcase, CreditCard } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function LoanApplication() {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    ssn: '',
    
    // Address Information
    street: '',
    city: '',
    state: '',
    zipCode: '',
    yearsAtAddress: '',
    housingStatus: 'rent',
    
    // Employment Information
    employer: '',
    jobTitle: '',
    yearsAtJob: '',
    annualIncome: '',
    otherIncome: '',
    
    // Loan Information
    loanType: 'personal',
    loanAmount: '',
    loanPurpose: '',
    loanTerm: '',
    creditScore: 'good',
    
    // Bank Information
    bankName: '',
    accountNumber: '',
    routingNumber: '',
    
    // Consent
    consent: false,
    creditCheck: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const totalSteps = 4;

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
      // Personal Information Validation
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
      if (!formData.ssn.trim()) newErrors.ssn = 'SSN is required';
    } else if (step === 2) {
      // Address Validation
      if (!formData.street.trim()) newErrors.street = 'Street address is required';
      if (!formData.city.trim()) newErrors.city = 'City is required';
      if (!formData.state.trim()) newErrors.state = 'State is required';
      if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';
      if (!formData.yearsAtAddress) newErrors.yearsAtAddress = 'Years at address is required';
    } else if (step === 3) {
      // Employment Validation
      if (!formData.employer.trim()) newErrors.employer = 'Employer is required';
      if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required';
      if (!formData.yearsAtJob) newErrors.yearsAtJob = 'Years at job is required';
      if (!formData.annualIncome || parseFloat(formData.annualIncome) <= 0) {
        newErrors.annualIncome = 'Annual income is required';
      }
      if (!formData.loanAmount || parseFloat(formData.loanAmount) <= 0) {
        newErrors.loanAmount = 'Loan amount is required';
      }
      if (!formData.loanPurpose.trim()) newErrors.loanPurpose = 'Loan purpose is required';
      if (!formData.loanTerm) newErrors.loanTerm = 'Loan term is required';
    } else if (step === 4) {
      // Bank Information and Consent Validation
      if (!formData.bankName.trim()) newErrors.bankName = 'Bank name is required';
      if (!formData.accountNumber.trim()) newErrors.accountNumber = 'Account number is required';
      if (!formData.routingNumber.trim()) newErrors.routingNumber = 'Routing number is required';
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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      setSubmitSuccess(true);
      setIsSubmitting(false);
    } catch (error) {
      console.error('Submission error:', error);
      setIsSubmitting(false);
    }
  };

  const loanTypes = [
    { value: 'personal', label: 'Personal Loan', description: 'For any personal needs' },
    { value: 'mortgage', label: 'Mortgage', description: 'Home financing' },
    { value: 'auto', label: 'Auto Loan', description: 'Vehicle financing' },
    { value: 'home-improvement', label: 'Home Improvement', description: 'Renovation and repairs' }
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
              <User className="w-6 h-6 mr-2 text-blue-600" />Personal Information
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
                  placeholder="john.doe@email.com"
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
                  placeholder="(555) 123-4567"
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
                  Social Security Number *
                </label>
                <input
                  type="text"
                  name="ssn"
                  value={formData.ssn}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                    errors.ssn ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
                  }`}
                  placeholder="XXX-XX-XXXX"
                  maxLength={11}
                />
                {errors.ssn && <p className="mt-1 text-sm text-red-600">{errors.ssn}</p>}
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
              <MapPin className="w-6 h-6 mr-2 text-blue-600" />Address Information
            </h3>
            
            <div className="space-y-6">
              <div>
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
                  placeholder="123 Main St"
                />
                {errors.street && <p className="mt-1 text-sm text-red-600">{errors.street}</p>}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
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
                    placeholder="New York"
                  />
                  {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    State *
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                      errors.state ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
                    }`}
                    placeholder="NY"
                  />
                  {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state}</p>}
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
                    placeholder="10001"
                  />
                  {errors.zipCode && <p className="mt-1 text-sm text-red-600">{errors.zipCode}</p>}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Years at Address *
                  </label>
                  <select
                    name="yearsAtAddress"
                    value={formData.yearsAtAddress}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                      errors.yearsAtAddress ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
                    }`}
                  >
                    <option value="">Select years</option>
                    <option value="0-1">Less than 1 year</option>
                    <option value="1-2">1-2 years</option>
                    <option value="2-5">2-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">More than 10 years</option>
                  </select>
                  {errors.yearsAtAddress && <p className="mt-1 text-sm text-red-600">{errors.yearsAtAddress}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Housing Status
                  </label>
                  <select
                    name="housingStatus"
                    value={formData.housingStatus}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="rent">Rent</option>
                    <option value="own">Own</option>
                    <option value="family">Living with family</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
              <Briefcase className="w-6 h-6 mr-2 text-blue-600" />Employment & Loan Information
            </h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    placeholder="ABC Company"
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
                    placeholder="Software Engineer"
                  />
                  {errors.jobTitle && <p className="mt-1 text-sm text-red-600">{errors.jobTitle}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Years at Job *
                  </label>
                  <select
                    name="yearsAtJob"
                    value={formData.yearsAtJob}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                      errors.yearsAtJob ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
                    }`}
                  >
                    <option value="">Select years</option>
                    <option value="0-1">Less than 1 year</option>
                    <option value="1-2">1-2 years</option>
                    <option value="2-5">2-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">More than 10 years</option>
                  </select>
                  {errors.yearsAtJob && <p className="mt-1 text-sm text-red-600">{errors.yearsAtJob}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Annual Income ($) *
                  </label>
                  <input
                    type="number"
                    name="annualIncome"
                    value={formData.annualIncome}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                      errors.annualIncome ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
                    }`}
                    placeholder="75000"
                    min="0"
                  />
                  {errors.annualIncome && <p className="mt-1 text-sm text-red-600">{errors.annualIncome}</p>}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Other Income ($)
                </label>
                <input
                  type="number"
                  name="otherIncome"
                  value={formData.otherIncome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="0"
                  min="0"
                />
              </div>
              
              <div className="border-t pt-6">
                <h4 className="text-lg font-medium text-slate-900 mb-4">Loan Details</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Loan Amount ($) *
                    </label>
                    <input
                      type="number"
                      name="loanAmount"
                      value={formData.loanAmount}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                        errors.loanAmount ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
                      }`}
                      placeholder="25000"
                      min="0"
                    />
                    {errors.loanAmount && <p className="mt-1 text-sm text-red-600">{errors.loanAmount}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Loan Purpose *
                    </label>
                    <input
                      type="text"
                      name="loanPurpose"
                      value={formData.loanPurpose}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                        errors.loanPurpose ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
                      }`}
                      placeholder="Home renovation"
                    />
                    {errors.loanPurpose && <p className="mt-1 text-sm text-red-600">{errors.loanPurpose}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Loan Term *
                    </label>
                    <select
                      name="loanTerm"
                      value={formData.loanTerm}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                        errors.loanTerm ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
                      }`}
                    >
                      <option value="">Select term</option>
                      <option value="12">12 months</option>
                      <option value="24">24 months</option>
                      <option value="36">36 months</option>
                      <option value="48">48 months</option>
                      <option value="60">60 months</option>
                      <option value="84">84 months</option>
                      <option value="120">120 months</option>
                      <option value="180">180 months</option>
                      <option value="240">240 months</option>
                      <option value="360">360 months</option>
                    </select>
                    {errors.loanTerm && <p className="mt-1 text-sm text-red-600">{errors.loanTerm}</p>}
                  </div>
                </div>
                
                <div className="mt-6">
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
              </div>
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
              <CreditCard className="w-6 h-6 mr-2 text-blue-600" />Bank Information & Consent
            </h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Bank Name *
                  </label>
                  <input
                    type="text"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                      errors.bankName ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
                    }`}
                    placeholder="Bank of America"
                  />
                  {errors.bankName && <p className="mt-1 text-sm text-red-600">{errors.bankName}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Account Number *
                  </label>
                  <input
                    type="text"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                      errors.accountNumber ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
                    }`}
                    placeholder="123456789"
                  />
                  {errors.accountNumber && <p className="mt-1 text-sm text-red-600">{errors.accountNumber}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Routing Number *
                  </label>
                  <input
                    type="text"
                    name="routingNumber"
                    value={formData.routingNumber}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${
                      errors.routingNumber ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
                    }`}
                    placeholder="021000021"
                  />
                  {errors.routingNumber && <p className="mt-1 text-sm text-red-600">{errors.routingNumber}</p>}
                </div>
              </div>
              
              <div className="border-t pt-6">
                <h4 className="text-lg font-medium text-slate-900 mb-4">Consent & Authorization</h4>
                
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
                      I authorize Continental Bank to obtain my credit report and verify the information provided in this application.
                    </label>
                  </div>
                  {errors.creditCheck && <p className="mt-1 text-sm text-red-600">{errors.creditCheck}</p>}
                </div>
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
                    Thank you for your loan application. Our team will review your information and contact you within 24-48 hours.
                  </p>
                  <p className="text-slate-600 mb-8">
                    Application Reference: <span className="font-mono font-bold text-blue-600">LOAN-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/calculators/loan" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Back to Calculators
                    </Link>
                    <Link href="/" className="border border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
                      Go to Homepage
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
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1554224155-6726b3ff8585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
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
                Loan<span className="text-blue-300 font-medium"> Application</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                Complete our secure online application for fast loan approval. Get pre-approved in minutes with our streamlined process.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  {Array.from({ length: totalSteps }, (_, i) => (
                    <div key={i} className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
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
                  Step {currentStep} of {totalSteps}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200"
              >
                <form onSubmit={handleSubmit}>
                  {renderStepContent()}
                  
                  <div className="flex justify-between mt-8 pt-6 border-t">
                    <button
                      type="button"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                      className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Previous
                    </button>
                    
                    {currentStep < totalSteps ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Next Step
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 inline-block"></div>
                            Submitting...
                          </>
                        ) : (
                          'Submit Application'
                        )}
                      </button>
                    )}
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
