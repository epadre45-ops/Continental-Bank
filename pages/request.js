import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Car, Home, Briefcase, ArrowRight, CheckCircle, Building, TrendingUp, Shield, Globe, Target, FileText, Award, Calculator, DollarSign, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function RequestPageInstitutional() {
  const { t } = useTranslation();

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    institutionName: '',
    institutionType: '',
    contactPerson: '',
    position: '',
    email: '',
    phone: '',
    loanType: 'corporate',
    loanAmount: '',
    loanDuration: '',
    loanPurpose: '',
    financialDetails: {
      annualRevenue: '',
      totalAssets: '',
      creditRating: '',
      existingDebt: ''
    },
    documents: {
      financialStatements: false,
      businessPlan: false,
      creditReport: false,
      legalDocuments: false
    },
    message: ''
  });
  const [errors, setErrors] = useState({});

  const loanTypes = [
    {
      id: 'corporate',
      name: 'Prêt Corporate',
      description: 'Financement structuré pour entreprises',
      icon: <Building className="w-6 h-6" />,
      rates: { min: 1.85, max: 8.5 },
      minAmount: 1000000,
      maxAmount: 50000000
    },
    {
      id: 'project',
      name: 'Financement de Projet',
      description: 'Soutien aux projets d\'investissement',
      icon: <Target className="w-6 h-6" />,
      rates: { min: 2.95, max: 12.5 },
      minAmount: 500000,
      maxAmount: 25000000
    },
    {
      id: 'realEstate',
      name: 'Prêt Immobilier Commercial',
      description: 'Acquisition et développement immobilier',
      icon: <Home className="w-6 h-6" />,
      rates: { min: 2.45, max: 9.8 },
      minAmount: 2000000,
      maxAmount: 100000000
    },
    {
      id: 'workingCapital',
      name: 'Fonds de Roulement',
      description: 'Optimisation de la trésorerie',
      icon: <DollarSign className="w-6 h-6" />,
      rates: { min: 3.5, max: 11.5 },
      minAmount: 100000,
      maxAmount: 10000000
    }
  ];

  const institutionTypes = [
    'Banque',
    'Fonds d\'investissement',
    'Compagnie d\'assurance',
    'Société de gestion',
    'Holding',
    'Entreprise cotée',
    'PME',
    'Startup',
    'Autre'
  ];

  const validateStep = (step) => {
    const newErrors = {};
    
    switch (step) {
      case 1:
        if (!formData.institutionName.trim()) {
          newErrors.institutionName = 'Le nom de l\'institution est requis';
        }
        if (!formData.institutionType) {
          newErrors.institutionType = 'Le type d\'institution est requis';
        }
        if (!formData.contactPerson.trim()) {
          newErrors.contactPerson = 'Le contact est requis';
        }
        if (!formData.position.trim()) {
          newErrors.position = 'La position est requise';
        }
        if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'L\'email est invalide';
        }
        if (!formData.phone.trim() || !/^[+]?[\d\s-]{7,15}$/.test(formData.phone)) {
          newErrors.phone = 'Le numéro de téléphone est invalide';
        }
        break;
        
      case 2:
        if (!formData.loanType) {
          newErrors.loanType = 'Le type de prêt est requis';
        }
        if (!formData.loanAmount || parseFloat(formData.loanAmount) < 100000) {
          newErrors.loanAmount = 'Le montant minimum est de 100 000€';
        }
        if (!formData.loanDuration || parseInt(formData.loanDuration) < 12 || parseInt(formData.loanDuration) > 360) {
          newErrors.loanDuration = 'La durée doit être entre 12 et 360 mois';
        }
        if (!formData.loanPurpose.trim()) {
          newErrors.loanPurpose = 'L\'objet du prêt est requis';
        }
        break;
        
      case 3:
        if (!formData.financialDetails.annualRevenue || parseFloat(formData.financialDetails.annualRevenue) < 0) {
          newErrors.annualRevenue = 'Le revenu annuel est requis';
        }
        if (!formData.financialDetails.totalAssets || parseFloat(formData.financialDetails.totalAssets) < 0) {
          newErrors.totalAssets = 'Le total des actifs est requis';
        }
        if (!formData.financialDetails.creditRating) {
          newErrors.creditRating = 'La note de crédit est requise';
        }
        break;
        
      case 4:
        const hasRequiredDoc = Object.values(formData.documents).some(doc => doc);
        if (!hasRequiredDoc) {
          newErrors.documents = 'Au moins un document est requis';
        }
        if (!formData.message.trim()) {
          newErrors.message = 'Le message est requis';
        }
        if (formData.message.length < 50) {
          newErrors.message = 'Le message doit contenir au moins 50 caractères';
        }
        break;
        
      default:
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: type === 'checkbox' ? checked : value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateStep(currentStep)) {
      const payload = {
        ...formData,
        documents: Object.entries(formData.documents || {})
          .filter(([, value]) => value)
          .map(([key]) => key)
          .join(', ')
      };

      fetch('/api/forms/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formName: 'Financing Request',
          payload,
          replyTo: formData.email
        })
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to send financing request');
          }
          setCurrentStep(5);
        })
        .catch((error) => {
          setErrors((prev) => ({
            ...prev,
            message: 'Unable to send request right now. Please try again.'
          }));
        });
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl mx-auto p-8"
          >
            <h2 className="text-3xl font-bold text-[#0A1F3C] mb-8 text-center">{t('request_informations_institutionnelles')}</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-[#64748B] mb-2">
                  Nom de l'institution *
                </label>
                <input
                  type="text"
                  name="institutionName"
                  value={formData.institutionName}
                  onChange={handleInputChange}
                  placeholder="Nom légal complet"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0E2E5C] focus:border-transparent ${
                    errors.institutionName ? 'border-red-500' : 'border-[rgba(10,30,60,0.08)]'
                  } bg-white`}
                />
                {errors.institutionName && (
                  <p className="mt-1 text-sm text-red-600">{errors.institutionName}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#64748B] mb-2">
                  Type d'institution *
                </label>
                <select
                  name="institutionType"
                  value={formData.institutionType}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0E2E5C] focus:border-transparent ${
                    errors.institutionType ? 'border-red-500' : 'border-[rgba(10,30,60,0.08)]'
                  } bg-white`}
                >
                  <option value="">Sélectionnez...</option>
                  {(institutionTypes || []).map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.institutionType && (
                  <p className="mt-1 text-sm text-red-600">{errors.institutionType}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#64748B] mb-2">
                  Personne à contacter *
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  placeholder="Nom complet"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0E2E5C] focus:border-transparent ${
                    errors.contactPerson ? 'border-red-500' : 'border-[rgba(10,30,60,0.08)]'
                  } bg-white`}
                />
                {errors.contactPerson && (
                  <p className="mt-1 text-sm text-red-600">{errors.contactPerson}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#64748B] mb-2">
                  Position *
                </label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  placeholder="Fonction"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0E2E5C] focus:border-transparent ${
                    errors.position ? 'border-red-500' : 'border-[rgba(10,30,60,0.08)]'
                  } bg-white`}
                />
                {errors.position && (
                  <p className="mt-1 text-sm text-red-600">{errors.position}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#64748B] mb-2">
                  Email institutionnel *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="contact@institution.com"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0E2E5C] focus:border-transparent ${
                    errors.email ? 'border-red-500' : 'border-[rgba(10,30,60,0.08)]'
                  } bg-white`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#64748B] mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+33 1 23 45 67 89"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0E2E5C] focus:border-transparent ${
                    errors.phone ? 'border-red-500' : 'border-[rgba(10,30,60,0.08)]'
                  } bg-white`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>
            </div>
          </motion.div>
        );
        
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl mx-auto p-8"
          >
            <h2 className="text-3xl font-bold text-[#0A1F3C] mb-8 text-center">{t('request_details_financement')}</h2>
            
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-[#64748B] mb-2">
                  Type de financement *
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {(loanTypes || []).map((type) => (
                    <div
                      key={type.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        formData.loanType === type.id
                          ? 'border-[#0E2E5C] bg-[#F6F8FB]'
                          : 'border-[rgba(10,30,60,0.08)] hover:border-[#0E2E5C]/30'
                      }`}
                      onClick={() => setFormData(prev => ({ ...prev, loanType: type.id }))}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-[#0E2E5C]">{type.icon}</div>
                        <div>
                          <h3 className="font-semibold text-[#0A1F3C]">{type.name}</h3>
                          <p className="text-sm text-[#64748B]">{type.description}</p>
                          <p className="text-xs text-[#94A3B8]">
                            Taux: {type.rates.min}% - {type.rates.max}% | 
                            {type.minAmount.toLocaleString()}€ - {type.maxAmount.toLocaleString()}€
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {errors.loanType && (
                  <p className="mt-1 text-sm text-red-600">{errors.loanType}</p>
                )}
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-[#64748B] mb-2">
                    Montant du financement (€) *
                  </label>
                  <input
                    type="number"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleInputChange}
                    placeholder="1 000 000"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0E2E5C] focus:border-transparent ${
                      errors.loanAmount ? 'border-red-500' : 'border-[rgba(10,30,60,0.08)]'
                    } bg-white`}
                  />
                  {errors.loanAmount && (
                    <p className="mt-1 text-sm text-red-600">{errors.loanAmount}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#64748B] mb-2">
                    Durée (mois) *
                  </label>
                  <input
                    type="number"
                    name="loanDuration"
                    value={formData.loanDuration}
                    onChange={handleInputChange}
                    placeholder="60"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0E2E5C] focus:border-transparent ${
                      errors.loanDuration ? 'border-red-500' : 'border-[rgba(10,30,60,0.08)]'
                    } bg-white`}
                  />
                  {errors.loanDuration && (
                    <p className="mt-1 text-sm text-red-600">{errors.loanDuration}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#64748B] mb-2">
                  Objet du financement *
                </label>
                <textarea
                  name="loanPurpose"
                  value={formData.loanPurpose}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0E2E5C] focus:border-transparent ${
                    errors.loanPurpose ? 'border-red-500' : 'border-[rgba(10,30,60,0.08)]'
                  } bg-white`}
                  placeholder="Décrivez en détail l'objet de votre demande de financement..."
                />
                {errors.loanPurpose && (
                  <p className="mt-1 text-sm text-red-600">{errors.loanPurpose}</p>
                )}
              </div>
            </div>
          </motion.div>
        );
        
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl mx-auto p-8"
          >
            <h2 className="text-3xl font-bold text-[#0A1F3C] mb-8 text-center">{t('request_informations_financieres')}</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-[#64748B] mb-2">
                    Revenu annuel (€) *
                  </label>
                  <input
                    type="number"
                    name="financialDetails.annualRevenue"
                    value={formData.financialDetails.annualRevenue}
                    onChange={handleInputChange}
                    placeholder="5 000 000"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0E2E5C] focus:border-transparent ${
                      errors.annualRevenue ? 'border-red-500' : 'border-[rgba(10,30,60,0.08)]'
                    } bg-white`}
                  />
                  {errors.annualRevenue && (
                    <p className="mt-1 text-sm text-red-600">{errors.annualRevenue}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#64748B] mb-2">
                    Total des actifs (€) *
                  </label>
                  <input
                    type="number"
                    name="financialDetails.totalAssets"
                    value={formData.financialDetails.totalAssets}
                    onChange={handleInputChange}
                    placeholder="25 000 000"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0E2E5C] focus:border-transparent ${
                      errors.totalAssets ? 'border-red-500' : 'border-[rgba(10,30,60,0.08)]'
                    } bg-white`}
                  />
                  {errors.totalAssets && (
                    <p className="mt-1 text-sm text-red-600">{errors.totalAssets}</p>
                  )}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-[#64748B] mb-2">
                    Note de crédit *
                  </label>
                  <select
                    name="financialDetails.creditRating"
                    value={formData.financialDetails.creditRating}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0E2E5C] focus:border-transparent ${
                      errors.creditRating ? 'border-red-500' : 'border-[rgba(10,30,60,0.08)]'
                    } bg-white`}
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="AAA">{t('request_aaa')}</option>
                    <option value="AA">AA</option>
                    <option value="A">A</option>
                    <option value="BBB">{t('request_bbb')}</option>
                    <option value="BB">BB</option>
                    <option value="B">B</option>
                    <option value="Non noté">{t('request_non_note')}</option>
                  </select>
                  {errors.creditRating && (
                    <p className="mt-1 text-sm text-red-600">{errors.creditRating}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#64748B] mb-2">
                    Dette existante (€)
                  </label>
                  <input
                    type="number"
                    name="financialDetails.existingDebt"
                    value={formData.financialDetails.existingDebt}
                    onChange={handleInputChange}
                    placeholder="2 000 000"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0E2E5C] focus:border-transparent border-[rgba(10,30,60,0.08)] bg-white"
                  />
                </div>
              </div>
              
              <div className="glass-institutional p-6 border border-[rgba(10,30,60,0.08)]">
                <div className="flex items-start space-x-2">
                  <Calculator className="w-5 h-5 text-[#0E2E5C] mt-0.5" />
                  <div className="text-[#64748B] text-sm">
                    <p className="font-medium mb-1">{t('request_analyse_financiere')}</p>
                    <p>
                      Ces informations nous permettent d'évaluer la viabilité de votre projet 
                      et de vous proposer les conditions les plus adaptées à votre situation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
        
      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl mx-auto p-8"
          >
            <h2 className="text-3xl font-bold text-[#0A1F3C] mb-8 text-center">{t('request_documents_message')}</h2>
            
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-[#64748B] mb-4">
                  Documents à fournir (cochez ceux que vous pouvez fournir) *
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { key: 'financialStatements', label: 'États financiers (3 derniers exercices)', icon: <BarChart3 className="w-4 h-4" /> },
                    { key: 'businessPlan', label: 'Plan d\'affaires détaillé', icon: <Target className="w-4 h-4" /> },
                    { key: 'creditReport', label: 'Rapport de crédit agence', icon: <Award className="w-4 h-4" /> },
                    { key: 'legalDocuments', label: 'Documents légaux (statuts, immatriculation)', icon: <FileText className="w-4 h-4" /> }
                  ].map((doc) => (
                    <label key={doc.key} className="flex items-center space-x-3 p-3 border border-[rgba(10,30,60,0.08)] rounded-lg hover:bg-[#F6F8FB] transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        name={`documents.${doc.key}`}
                        checked={formData.documents[doc.key]}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-[#0E2E5C] border-[rgba(10,30,60,0.08)] rounded focus:ring-2 focus:ring-[#0E2E5C]"
                      />
                      <div className="text-[#0E2E5C]">{doc.icon}</div>
                      <span className="text-[#0A1F3C] text-sm">{doc.label}</span>
                    </label>
                  ))}
                </div>
                {errors.documents && (
                  <p className="mt-1 text-sm text-red-600">{errors.documents}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#64748B] mb-2">
                  Message complémentaire *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0E2E5C] focus:border-transparent ${
                    errors.message ? 'border-red-500' : 'border-[rgba(10,30,60,0.08)]'
                  } bg-white`}
                  placeholder="Décrivez en détail votre projet, vos objectifs, et toute information pertinente pour l'évaluation de votre demande..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
                <p className="mt-1 text-xs text-[#94A3B8]">
                  {formData.message.length}/50 caractères minimum
                </p>
              </div>
            </div>
          </motion.div>
        );
        
      case 5:
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto p-8 text-center"
          >
            <div className="mb-8">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-[#0A1F3C] mb-4">{t('request_demande_financement_soumise')}</h2>
              <p className="text-lg text-[#64748B] mb-8">
                Votre demande a été enregistrée et sera traitée dans les 48 heures 
                par notre équipe d'analystes institutionnels.
              </p>
            </div>
            
            <div className="bg-[#F6F8FB] rounded-lg p-6 mb-8 border border-[rgba(10,30,60,0.08)]">
              <h3 className="font-semibold text-[#0A1F3C] mb-4">{t('request_recapitulatif_votre_demande')}</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div>
                  <p className="text-sm text-[#64748B]">{t('request_institution')}</p>
                  <p className="font-medium text-[#0A1F3C]">{formData.institutionName}</p>
                </div>
                <div>
                  <p className="text-sm text-[#64748B]">{t('request_contact')}</p>
                  <p className="font-medium text-[#0A1F3C]">{formData.contactPerson}</p>
                </div>
                <div>
                  <p className="text-sm text-[#64748B]">{t('request_type_financement')}</p>
                  <p className="font-medium text-[#0A1F3C]">
                    {loanTypes.find(t => t.id === formData.loanType)?.name}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#64748B]">{t('request_montant')}</p>
                  <p className="font-medium text-[#0A1F3C]">{parseInt(formData.loanAmount).toLocaleString()}€</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4">
              <Link href="/dashboard" className="btn-institutional-primary">{t('request_acceder_dashboard')}<ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-institutional-secondary">{t('request_contacter_conseiller')}<Shield className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      <Header />
      
      <div className="container-institutional pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-[#0A1F3C] mb-4">{t('request_demande_financement_institutionnel')}</h1>
          <p className="text-lg text-[#64748B]">{t('request_soumettez_votre_demande_pour')}</p>
        </motion.div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                    currentStep >= step
                      ? 'bg-[#0E2E5C] text-white'
                      : 'bg-[#F6F8FB] text-[#64748B] border border-[rgba(10,30,60,0.08)]'
                  }`}
                >
                  {step}
                </div>
                {step < 4 && (
                  <div
                    className={`flex-1 h-1 mx-4 ${
                      currentStep > step ? 'bg-[#0E2E5C]' : 'bg-[#F6F8FB]'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-[#64748B]">
            <span>{t('request_institution')}</span>
            <span>{t('request_financement')}</span>
            <span>{t('request_financier')}</span>
            <span>{t('request_documents')}</span>
          </div>
        </div>

        {/* Form Steps */}
        <div className="bg-white rounded-xl shadow-lg">
          {renderStep()}
        </div>

        {/* Navigation Buttons */}
        {currentStep < 5 && (
          <div className="max-w-4xl mx-auto mt-8 flex justify-between">
            <button
              onClick={handlePreviousStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                currentStep === 1
                  ? 'bg-[#F6F8FB] text-[#94A3B8] cursor-not-allowed border border-[rgba(10,30,60,0.08)]'
                  : 'bg-[#F6F8FB] text-[#0A1F3C] hover:bg-white border border-[rgba(10,30,60,0.08)]'
              }`}
            >{t('request_precedent')}</button>
            
            {currentStep === 4 ? (
              <button
                onClick={handleSubmit}
                className="px-6 py-3 bg-gradient-to-r from-[#0A1F3C] to-[#0E2E5C] text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
              >{t('request_soumettre_demande')}</button>
            ) : (
              <button
                onClick={handleNextStep}
                className="px-6 py-3 bg-gradient-to-r from-[#0A1F3C] to-[#0E2E5C] text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
              >{t('request_suivant')}</button>
            )}
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}
