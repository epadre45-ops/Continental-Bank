import { useState, useEffect, useRef } from 'react';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../lib/i18n';
import { useNotifications } from '../components/NotificationManager';
import { Calculator, Globe, Check, ChevronRight, HelpCircle, Shield, Building, Briefcase, Award, User, Phone, Mail, MapPin, Upload, X, AlertCircle, Eye, EyeOff, Key, Smartphone, Usb, Lock, FileText, Trash2, Download } from 'lucide-react';
import Link from 'next/link';
import LanguageSelector from '../components/LanguageSelector';

export default function RegisterPageInstitutional() {
  const { t } = useTranslation();
  const { success, error: showError } = useNotifications();
  const [formData, setFormData] = useState({
    // Étape 1: Institutional Information
    institutionName: '',
    institutionType: '',
    registrationNumber: '',
    contactPerson: '',
    position: '',
    // Étape 2: Contact & Authentication
    email: '',
    phone: '',
    authMethod: 'password',
    password: '',
    confirmPassword: '',
    // Étape 3: Adresse
    address: '',
    city: '',
    postalCode: '',
    country: '',
    // Étape 4: Documents & Validation
    documents: [],
    acceptTerms: false,
    acceptPrivacy: false,
    acceptCompliance: false
  });
  
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
      const [errors, setErrors] = useState({});
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  // Mark component as mounted on client-side to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  
  const institutionTypes = [
    'Bank',
    'Fonds d\'investissement',
    'Compagnie d\'assurance',
    'Management Company',
    'Holding',
    'Listed Company',
    'Other'
  ];

  const countries = [
    'France', 'Allemagne', 'Belgique', 'Luxembourg', 'Suisse', 'Royaume-Uni',
    'Country-Bas', 'Italie', 'Espagne', 'Portugal', 'Autriche', 'Suède',
    'Danemark', 'Norvège', 'Finlande', 'Irlande', 'Grèce', 'Pologne',
    'République Tchèque', 'Hongrie', 'Roumanie', 'Bulgarie', 'Croatie',
    'Slovénie', 'Slovaquie', 'Estonie', 'Lettonie', 'Lituanie'
  ];

  // Validation temps réel
  useEffect(() => {
    validateCurrentStep();
  }, [formData, currentStep]);

  const validateCurrentStep = () => {
    const newErrors = {};

    switch (currentStep) {
      case 1:
        if (!formData.institutionName.trim()) {
          newErrors.institutionName = 'Nom de l\'institution requis';
        }
        if (!formData.institutionType) {
          newErrors.institutionType = 'Type d\'institution requis';
        }
        if (!formData.registrationNumber.trim()) {
          newErrors.registrationNumber = 'Numéro d\'enregistrement requis';
        }
        if (!formData.contactPerson.trim()) {
          newErrors.contactPerson = 'Contact Person requise';
        }
        if (!formData.position.trim()) {
          newErrors.position = 'Position requise';
        }
        break;

      case 2:
        if (!formData.email.trim()) {
          newErrors.email = 'Email requis';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Format email invalide';
        }
        if (!formData.phone.trim()) {
          newErrors.phone = 'Téléphone requis';
        } else if (!/^\+?[\d\s\-\(\)]+$/.test(formData.phone)) {
          newErrors.phone = 'Format téléphone invalide';
        }
        if (formData.authMethod === 'password') {
          if (!formData.password.trim()) {
            newErrors.password = 'Mot de passe requis';
          } else if (formData.password.length < 8) {
            newErrors.password = 'Minimum 8 caractères';
          } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])/.test(formData.password)) {
            newErrors.password = 'Doit contenir majuscule, minuscule, chiffre et caractère spécial';
          } else if (/(.)\1{2,}|123|abc|qwer|password/i.test(formData.password)) {
            newErrors.password = 'Critères de sécurité refusés (trop commun)';
          }
          if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
          }
        }
        break;

      case 3:
        if (!formData.address.trim()) {
          newErrors.address = 'Adresse requise';
        }
        if (!formData.city.trim()) {
          newErrors.city = 'City requise';
        }
        if (!formData.postalCode.trim()) {
          newErrors.postalCode = 'Code postal requis';
        } else if (!/^\d{5}$/.test(formData.postalCode)) {
          newErrors.postalCode = 'Code postal français invalide';
        }
        if (!formData.country) {
          newErrors.country = 'Country requis';
        }
        break;

      case 4:
        if (!formData.acceptTerms) {
          newErrors.acceptTerms = 'Acceptation des CGU requise';
        }
        if (!formData.acceptPrivacy) {
          newErrors.acceptPrivacy = 'Acceptation de la politique de confidentialité requise';
        }
        if (!formData.acceptCompliance) {
          newErrors.acceptCompliance = 'Acceptation de conformité requise';
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNextStep = () => {
    if (validateCurrentStep()) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    setErrors({});
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files) => {
    const validFiles = Array.from(files).filter(file => {
      const isValidType = file.type === 'application/pdf' || 
                         file.type === 'application/msword' || 
                         file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
                         file.type.startsWith('image/');
      const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB
      return isValidType && isValidSize;
    });

    const newFiles = (validFiles || []).map(file => ({
      id: isMounted ? Date.now() + Math.random() : Math.random(),
      name: file.name,
      size: file.size,
      type: file.type,
      file: file
    }));

    setUploadedFiles(prev => [...prev, ...newFiles]);
    setErrors(prev => ({ ...prev, documents: '' }));
  };

  const removeFile = (fileId) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log('handleSubmit called', { currentStep, formData });
    
    // Valider l'étape courante
    const isValid = validateCurrentStep();
    console.log('Validation result:', isValid, 'Errors:', errors);
    
    if (!isValid) {
      console.error('Validation failed', errors);
      showError('Formulaire incomplet', 'Veuillez corriger les erreurs avant de soumettre');
      return;
    }
    
    setIsLoading(true);
    console.log('Starting user creation...');
    
    try {
      // Vérifier si l'email existe déjà via API backend sécurisée
      console.log('Checking if email exists:', formData.email);
      const checkUserResponse = await fetch(`/api/users?email=${encodeURIComponent(formData.email)}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });

      console.log('Check user response status:', checkUserResponse.status);

      if (checkUserResponse.ok) {
        setErrors({ email: 'Un compte avec cet email existe déjà' });
        setIsLoading(false);
        showError('Refusé', 'Un compte avec cet email existe déjà');
        return;
      }

      // Préparer les données utilisateur
      const userData = {
        institutionName: formData.institutionName,
        institutionType: formData.institutionType,
        registrationNumber: formData.registrationNumber,
        contactPerson: formData.contactPerson,
        position: formData.position,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        postalCode: formData.postalCode,
        country: formData.country,
        password: formData.password, // Dans un vrai projet, hasher ce mot de passe
        documents: formData.documents,
        acceptTerms: formData.acceptTerms,
        acceptPrivacy: formData.acceptPrivacy,
        acceptCompliance: formData.acceptCompliance
      };

      console.log('Creating user with data:', { ...userData, password: '***' });

      // Créer l'utilisateur via API backend sécurisée avec hashage automatique du mot de passe
      const createResponse = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });

      console.log('Create user response status:', createResponse.status);

      if (!createResponse.ok) {
        const errorData = await createResponse.json();
        console.error('Create user error:', errorData);
        showError('Alerte de Sécurité', errorData.message || 'Le mot de passe ne respecte pas nos standards');
        setIsLoading(false);
        return;
      }

      const { user: newUser } = await createResponse.json();
      console.log('User created successfully:', newUser);

      const emailResponse = await fetch('/api/forms/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formName: 'Institution Registration',
          payload: {
            institutionName: formData.institutionName,
            institutionType: formData.institutionType,
            registrationNumber: formData.registrationNumber,
            contactPerson: formData.contactPerson,
            position: formData.position,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            city: formData.city,
            postalCode: formData.postalCode,
            country: formData.country,
            authMethod: formData.authMethod,
            acceptedTerms: formData.acceptTerms,
            acceptedPrivacy: formData.acceptPrivacy,
            acceptedCompliance: formData.acceptCompliance,
            uploadedFiles: (uploadedFiles || []).map((file) => file.name).join(', ')
          },
          replyTo: formData.email
        })
      });

      console.log('Email response status:', emailResponse.status);

      if (!emailResponse.ok) {
        console.warn('Failed to send email, but user was created');
        // Ne pas échouer si l'email échoue, l'utilisateur est déjà créé
      }
      
      setIsLoading(false);
      
      // Afficher le succès et rediriger
      success("Inscription Réussie", `L'institution "${newUser.institutionName}" a été enregistrée avec succès.`);
      
      // Rediriger vers la page de connexion
      setTimeout(() => {
        window.location.href = '/login';
      }, 2500);
      
    } catch (error) {
      console.error('Error in handleSubmit:', error);
      setErrors({ general: `Une erreur est survenue: ${error.message}` });
      setIsLoading(false);
      showError("Erreur", error.message);
    }
  };

  const getStepProgress = () => {
    return (currentStep / 4) * 100;
  };

  const getStepLabel = (step) => {
    const labels = {
      1: t('pages.register.step1_label'),
      2: t('pages.register.step2_label'),
      3: t('pages.register.step3_label'),
      4: t('pages.register.step4_label')
    };
    return labels[step];
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Premium Background with Multiple Layers */}
      <div className="absolute inset-0">
        {/* Main Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F3C] via-[#0E2E5C] to-[#153E75]"></div>
        
        {/* Premium Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F3C]/98 via-transparent to-[#0A1F3C]/60"></div>
        
        {/* Decorative Light Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C7CCD6]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E8D8C3]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Premium Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C7CCD6]/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C7CCD6]/30 to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8">
        {/* Header - Ultra Premium */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 sm:mb-8 md:mb-12"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/15 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-6 sm:mb-8 backdrop-blur-xl border border-white/20 shadow-2xl"
          >
            <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8D8C3]" />
            <span className="text-xs sm:text-sm font-medium text-white tracking-wide">INSTITUTIONAL REGISTRATION</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-primary text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Continental Kreditbank
          </motion.h1>
          
          {/* Premium Divider with Glow Effect */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "80px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 mx-auto mb-6 sm:mb-8 bg-gradient-to-r from-transparent via-[#E8D8C3] to-transparent rounded-full shadow-lg"
          ></motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed max-w-md mx-auto font-light"
          >
            {t('pages.register.subtitle')}
          </motion.p>

          {/* Image de confiance - Siège social - Premium */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative rounded-3xl overflow-hidden max-w-md sm:max-w-lg md:max-w-2xl mx-auto mb-6 sm:mb-8 shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=250&fit=crop&auto=format"
              srcSet="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=125&fit=crop&auto=format 400w,
                      https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=250&fit=crop&auto=format 800w,
                      https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=375&fit=crop&auto=format 1200w"
              sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
              alt="Siège social bancaire moderne"
              className="w-full h-32 sm:h-40 md:h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F3C]/80 to-transparent"></div>
            <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-white text-base sm:text-lg font-semibold mb-1 sm:mb-1.5"
              >
                Rejoignez plus de 10 000 institutions
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-white/90 text-xs sm:text-sm font-light"
              >
                Une expertise reconnue dans 25 pays européens
              </motion.p>
            </div>
          </motion.div>

          {/* Statistiques de confiance - Premium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-xs sm:max-w-lg mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/20 shadow-xl">
              <p className="text-2xl sm:text-3xl font-bold text-white mb-1">10K+</p>
              <p className="text-white/80 text-xs sm:text-sm font-light">Clients</p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/20 shadow-xl">
              <p className="text-2xl sm:text-3xl font-bold text-white mb-1">25</p>
              <p className="text-white/80 text-xs sm:text-sm font-light">Country</p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/20 shadow-xl">
              <p className="text-2xl sm:text-3xl font-bold text-white mb-1">99.9%</p>
              <p className="text-white/80 text-xs sm:text-sm font-light">Uptime</p>
            </div>
          </motion.div>
        </motion.div>

      {/* Progress Steps - Premium */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="mb-6 sm:mb-8 md:mb-12 w-full max-w-md sm:max-w-lg md:max-w-4xl"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 sm:space-x-6 mb-6">
          {[1, 2, 3, 4].map((step) => (
            <React.Fragment key={step}>
              <div className="flex items-center">
                <motion.div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-semibold transition-all duration-500 ${
                    currentStep >= step
                      ? 'bg-gradient-to-br from-[#E8D8C3] to-[#C7CCD6] text-[#0A1F3C] shadow-2xl scale-110'
                      : 'bg-white/10 text-white/50 backdrop-blur-xl border border-white/20'
                  }`}
                  whileHover={{ scale: currentStep >= step ? 1.15 : 1.05 }}
                >
                  {currentStep > step ? (
                    <Check className="w-5 h-5 sm:w-6 sm:h-6" />
                  ) : (
                    <span>{step}</span>
                  )}
                </motion.div>
                <span className={`ml-3 sm:ml-4 text-xs sm:text-sm font-semibold ${
                  currentStep >= step ? 'text-white' : 'text-white/50'
                }`}>
                  {getStepLabel(step)}
                </span>
              </div>
              {step < 4 && (
                <motion.div
                  className={`flex-1 h-1.5 sm:h-2 mx-3 sm:mx-6 rounded-full transition-all duration-700 ${
                    currentStep > step ? 'bg-gradient-to-r from-[#E8D8C3] to-[#C7CCD6]' : 'bg-white/20'
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: currentStep > step ? '100%' : '0%' }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
        
        {/* Progress Bar avec Pourcentage - Premium */}
        <div className="w-full max-w-xs sm:max-w-md mx-auto">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs sm:text-sm text-white/70 font-medium">Progression</span>
            <span className="text-xs sm:text-sm font-bold text-white">{Math.round(getStepProgress())}%</span>
          </div>
          <div className="w-full bg-white/10 backdrop-blur-xl rounded-full h-2 sm:h-3 border border-white/20 shadow-inner">
            <motion.div
              className="bg-gradient-to-r from-[#E8D8C3] to-[#C7CCD6] h-2 sm:h-3 rounded-full shadow-xl"
              initial={{ width: 0 }}
              animate={{ width: `${getStepProgress()}%` }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>

      {/* Main Card - Premium */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50"
      >
        {/* Language Selector */}
        <div className="flex justify-end p-4 sm:p-6 pb-0">
          <LanguageSelector />
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 md:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* Étape 1: Institutional Information */}
              {currentStep === 1 && (
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="font-primary text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {t('pages.register.title')}
                    </motion.h2>
                    
                    {/* Premium Divider */}
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "60px" }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="h-1 mb-4 sm:mb-5 bg-gradient-to-r from-[#0E2E5C] to-transparent rounded-full"
                    ></motion.div>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-gray-600 text-sm sm:text-base"
                    >
                      {t('pages.register.subtitle')}
                    </motion.p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7"
                  >
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-2.5">
                        {t('pages.register.institution_name')} *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="institutionName"
                          value={formData.institutionName}
                          onChange={handleChange}
                          placeholder={t('pages.register.institution_name')}
                          className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/50 backdrop-blur-sm border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0E2E5C]/20 text-gray-900 placeholder-gray-400 text-sm sm:text-base ${
                            errors.institutionName ? 'border-red-300' : 'border-gray-200 focus:border-[#0E2E5C]'
                          }`}
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <Building className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                      {errors.institutionName && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 flex items-center space-x-2 text-red-600 text-xs sm:text-sm"
                        >
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.institutionName}</span>
                        </motion.div>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-2.5">
                        {t('pages.register.institution_type')} *
                      </label>
                      <div className="relative">
                        <select
                          name="institutionType"
                          value={formData.institutionType}
                          onChange={handleChange}
                          className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/50 backdrop-blur-sm border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0E2E5C]/20 text-gray-900 appearance-none cursor-pointer ${
                            errors.institutionType ? 'border-red-300' : 'border-gray-200 focus:border-[#0E2E5C]'
                          }`}
                        >
                          <option value="">Select...</option>
                          {(institutionTypes || []).map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                      {errors.institutionType && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 flex items-center space-x-2 text-red-600 text-xs sm:text-sm"
                        >
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.institutionType}</span>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7"
                  >
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-2.5">
                        {t('pages.register.registration_number')} *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="registrationNumber"
                          value={formData.registrationNumber}
                          onChange={handleChange}
                          placeholder="Company registration number"
                          className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/50 backdrop-blur-sm border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0E2E5C]/20 text-gray-900 placeholder-gray-400 text-sm sm:text-base ${
                            errors.registrationNumber ? 'border-red-300' : 'border-gray-200 focus:border-[#0E2E5C]'
                          }`}
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <FileText className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                      {errors.registrationNumber && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 flex items-center space-x-2 text-red-600 text-xs sm:text-sm"
                        >
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.registrationNumber}</span>
                        </motion.div>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-2.5">
                        {t('pages.register.contact_person')} *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="contactPerson"
                          value={formData.contactPerson}
                          onChange={handleChange}
                          placeholder="Full name"
                          className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/50 backdrop-blur-sm border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0E2E5C]/20 text-gray-900 placeholder-gray-400 text-sm sm:text-base ${
                            errors.contactPerson ? 'border-red-300' : 'border-gray-200 focus:border-[#0E2E5C]'
                          }`}
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <User className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                      {errors.contactPerson && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 flex items-center space-x-2 text-red-600 text-xs sm:text-sm"
                        >
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.contactPerson}</span>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2.5">
                      {t('pages.register.position')} *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        placeholder="Job title / Function"
                        className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/50 backdrop-blur-sm border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0E2E5C]/20 text-gray-900 placeholder-gray-400 text-sm sm:text-base ${
                          errors.position ? 'border-red-300' : 'border-gray-200 focus:border-[#0E2E5C]'
                        }`}
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <Briefcase className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                    {errors.position && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 flex items-center space-x-2 text-red-600 text-sm"
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.position}</span>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              )}

              {/* Étape 2: Contact & Authentication - Premium */}
              {currentStep === 2 && (
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="font-primary text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {t('pages.register.step2_label')}
                    </motion.h2>
                    
                    {/* Premium Divider */}
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "60px" }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="h-1 mb-4 sm:mb-5 bg-gradient-to-r from-[#0E2E5C] to-transparent rounded-full"
                    ></motion.div>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-gray-600 text-sm sm:text-base"
                    >
                      {t('pages.register.subtitle')}
                    </motion.p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7"
                  >
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-2.5">
                        {t('pages.register.email')} *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="contact@institution.com"
                          className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/50 backdrop-blur-sm border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0E2E5C]/20 text-gray-900 placeholder-gray-400 text-sm sm:text-base ${
                            errors.email ? 'border-red-300' : 'border-gray-200 focus:border-[#0E2E5C]'
                          }`}
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <Mail className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                      {errors.email && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 flex items-center space-x-2 text-red-600 text-xs sm:text-sm"
                        >
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.email}</span>
                        </motion.div>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-2.5">
                        {t('pages.register.phone')} *
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+33 1 23 45 67 89"
                          className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/50 backdrop-blur-sm border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0E2E5C]/20 text-gray-900 placeholder-gray-400 text-sm sm:text-base ${
                            errors.phone ? 'border-red-300' : 'border-gray-200 focus:border-[#0E2E5C]'
                          }`}
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <Phone className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                      {errors.phone && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 flex items-center space-x-2 text-red-600 text-xs sm:text-sm"
                        >
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.phone}</span>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>

                  {/* Champs de mot de passe - Premium */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7"
                  >
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-2.5">
                        {t('pages.register.password')} *
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Minimum 8 caractères"
                          className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/50 backdrop-blur-sm border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0E2E5C]/20 text-gray-900 placeholder-gray-400 text-sm sm:text-base ${
                            errors.password ? 'border-red-300' : 'border-gray-200 focus:border-[#0E2E5C]'
                          }`}
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            {showPassword ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </div>
                      {errors.password && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 flex items-center space-x-2 text-red-600 text-sm"
                        >
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.password}</span>
                        </motion.div>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-2.5">
                        {t('pages.register.confirm_password')} *
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="Répéter le mot de passe"
                          className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/50 backdrop-blur-sm border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0E2E5C]/20 text-gray-900 placeholder-gray-400 text-sm sm:text-base ${
                            errors.confirmPassword ? 'border-red-300' : 'border-gray-200 focus:border-[#0E2E5C]'
                          }`}
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="w-5 h-5" />
                            ) : (
                              <Eye className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </div>
                      {errors.confirmPassword && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 flex items-center space-x-2 text-red-600 text-sm"
                        >
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.confirmPassword}</span>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </div>
              )}

              {/* Étape 3: Adresse - Premium */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="font-primary text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {t('pages.register.step3_label')}
                    </motion.h2>
                    
                    {/* Premium Divider */}
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "60px" }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="h-1 mb-4 sm:mb-5 bg-gradient-to-r from-[#0E2E5C] to-transparent rounded-full"
                    ></motion.div>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-gray-600 text-sm sm:text-base"
                    >
                      {t('pages.register.subtitle')}
                    </motion.p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-2.5">
                      {t('pages.register.address')} *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="123 Avenue des Champs-Élysées"
                        className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/50 backdrop-blur-sm border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0E2E5C]/20 text-gray-900 placeholder-gray-400 text-sm sm:text-base ${
                          errors.address ? 'border-red-300' : 'border-gray-200 focus:border-[#0E2E5C]'
                        }`}
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <MapPin className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                    {errors.address && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 flex items-center space-x-2 text-red-600 text-xs sm:text-sm"
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.address}</span>
                      </motion.div>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-7"
                  >
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-2.5">
                        {t('pages.register.city')} *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Paris"
                        className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/50 backdrop-blur-sm border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0E2E5C]/20 text-gray-900 placeholder-gray-400 text-sm sm:text-base ${
                          errors.city ? 'border-red-300' : 'border-gray-200 focus:border-[#0E2E5C]'
                        }`}
                      />
                      {errors.city && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 flex items-center space-x-2 text-red-600 text-xs sm:text-sm"
                        >
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.city}</span>
                        </motion.div>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-2.5">
                        {t('pages.register.postal_code')} *
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        placeholder="75008"
                        maxLength={5}
                        className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/50 backdrop-blur-sm border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0E2E5C]/20 text-gray-900 placeholder-gray-400 text-sm sm:text-base ${
                          errors.postalCode ? 'border-red-300' : 'border-gray-200 focus:border-[#0E2E5C]'
                        }`}
                      />
                      {errors.postalCode && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 flex items-center space-x-2 text-red-600 text-xs sm:text-sm"
                        >
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.postalCode}</span>
                        </motion.div>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-2.5">
                        {t('pages.register.country')} *
                      </label>
                      <div className="relative">
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/50 backdrop-blur-sm border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0E2E5C]/20 text-gray-900 appearance-none cursor-pointer ${
                            errors.country ? 'border-red-300' : 'border-gray-200 focus:border-[#0E2E5C]'
                          }`}
                        >
                          <option value="">Select...</option>
                          {(countries || []).map((country) => (
                            <option key={country} value={country}>{country}</option>
                          ))}
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                      {errors.country && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 flex items-center space-x-2 text-red-600 text-xs sm:text-sm"
                        >
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.country}</span>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </div>
              )}

              {/* Étape 4: Documents & Validation - Premium */}
              {currentStep === 4 && (
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="font-primary text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {t('pages.register.step4_label')}
                    </motion.h2>
                    
                    {/* Premium Divider */}
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "60px" }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="h-1 mb-4 sm:mb-5 bg-gradient-to-r from-[#0E2E5C] to-transparent rounded-full"
                    ></motion.div>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-gray-600 text-sm sm:text-base"
                    >
                      {t('pages.register.subtitle')}
                    </motion.p>
                  </motion.div>

                  {/* Upload de documents - Premium */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-3 sm:mb-4">
                      Documents Institutionnels *
                    </label>
                    <div
                      className={`border-2 border-dashed rounded-2xl p-6 sm:p-8 md:p-10 text-center transition-all duration-300 ${
                        dragActive
                          ? 'border-[#0E2E5C] bg-[#0E2E5C]/5'
                          : errors.documents
                          ? 'border-red-300 bg-red-50'
                          : 'border-gray-300 bg-white/50 backdrop-blur-sm hover:border-[#0E2E5C] hover:bg-[#0E2E5C]/5'
                      }`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        onChange={handleFileSelect}
                        className="hidden"
                      />
                      
                      <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Upload className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-5 text-gray-400" />
                        <p className="text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                          Glissez vos fichiers ici
                        </p>
                        <p className="text-gray-500 text-sm mb-4 sm:mb-5">
                          ou cliquez pour parcourir
                        </p>
                        <p className="text-gray-400 text-xs mb-5 sm:mb-6">
                          PDF, DOC, DOCX, JPG, PNG (Max 10MB par fichier)
                        </p>
                        
                        <motion.button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-[#0E2E5C] to-[#153E75] hover:from-[#153E75] hover:to-[#0E2E5C] text-white font-semibold py-3 sm:py-3.5 px-6 sm:px-8 rounded-xl transition-all duration-300 shadow-lg text-sm sm:text-base"
                        >
                          {t('common.open')}
                        </motion.button>
                      </motion.div>
                    </div>

                    {errors.documents && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3 flex items-center space-x-2 text-red-600 text-sm"
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.documents}</span>
                      </motion.div>
                    )}

                    {/* Liste des fichiers uploadés - Premium */}
                    {uploadedFiles.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-6 sm:mt-8 space-y-2 sm:space-y-3"
                      >
                        <h4 className="text-sm font-semibold text-gray-700">Fichiers sélectionnés:</h4>
                        {(uploadedFiles || []).map((file) => (
                          <motion.div
                            key={file.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center justify-between p-3 sm:p-4 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl hover:border-[#0E2E5C] transition-colors"
                          >
                            <div className="flex items-center space-x-3 sm:space-x-4">
                              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                              <div>
                                <p className="text-sm font-medium text-gray-900">{file.name}</p>
                                <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <button
                                type="button"
                                className="text-[#0E2E5C] hover:text-[#153E75] transition-colors p-1"
                              >
                                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                              </button>
                              <button
                                type="button"
                                onClick={() => removeFile(file.id)}
                                className="text-red-600 hover:text-red-700 transition-colors p-1"
                              >
                                <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                              </button>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Cases à cocher de validation - Premium */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="space-y-4 sm:space-y-5"
                  >
                    <label className="flex items-start space-x-3 sm:space-x-4 cursor-pointer group">
                      <div className="relative">
                        <input
                          type="checkbox"
                          name="acceptTerms"
                          checked={formData.acceptTerms}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 sm:w-6 sm:h-6 border-2 rounded-md transition-all duration-300 flex items-center justify-center ${
                            formData.acceptTerms ? 'bg-[#0E2E5C] border-[#0E2E5C]' : 'border-gray-300 group-hover:border-[#0E2E5C]'
                        }`}>
                          {formData.acceptTerms && <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />}
                        </div>
                      </div>
                      <div className="flex-1">
                        <span className="text-sm text-gray-700 leading-relaxed">
                          I accept the{' '}
                          <Link href="/terms" className="text-[#0E2E5C] hover:text-[#153E75] underline font-medium">
                            Institutional Terms
                          </Link>
                          {' '}of use *
                        </span>
                      </div>
                    </label>
                    {errors.acceptTerms && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 ml-8 sm:ml-10 flex items-center space-x-2 text-red-600 text-xs"
                      >
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.acceptTerms}</span>
                      </motion.div>
                    )}

                    <label className="flex items-start space-x-3 sm:space-x-4 cursor-pointer group">
                      <div className="relative">
                        <input
                          type="checkbox"
                          name="acceptPrivacy"
                          checked={formData.acceptPrivacy}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 sm:w-6 sm:h-6 border-2 rounded-md transition-all duration-300 flex items-center justify-center ${
                            formData.acceptPrivacy ? 'bg-[#0E2E5C] border-[#0E2E5C]' : 'border-gray-300 group-hover:border-[#0E2E5C]'
                        }`}>
                          {formData.acceptPrivacy && <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />}
                        </div>
                      </div>
                      <div className="flex-1">
                        <span className="text-sm text-gray-700 leading-relaxed">
                          I accept the{' '}
                          <Link href="/privacy" className="text-[#0E2E5C] hover:text-[#153E75] underline font-medium">
                            Privacy and Security Policy
                          </Link>
                          {' *'}
                        </span>
                      </div>
                    </label>
                    {errors.acceptPrivacy && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 ml-8 sm:ml-10 flex items-center space-x-2 text-red-600 text-xs"
                      >
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.acceptPrivacy}</span>
                      </motion.div>
                    )}

                    <label className="flex items-start space-x-3 sm:space-x-4 cursor-pointer group">
                      <div className="relative">
                        <input
                          type="checkbox"
                          name="acceptCompliance"
                          checked={formData.acceptCompliance}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 sm:w-6 sm:h-6 border-2 rounded-md transition-all duration-300 flex items-center justify-center ${
                            formData.acceptCompliance ? 'bg-[#0E2E5C] border-[#0E2E5C]' : 'border-gray-300 group-hover:border-[#0E2E5C]'
                        }`}>
                          {formData.acceptCompliance && <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />}
                        </div>
                      </div>
                      <div className="flex-1">
                        <span className="text-sm text-gray-700 leading-relaxed">
                          I certify that the institution complies with regulations{' '}
                          <Link href="/compliance" className="text-[#0E2E5C] hover:text-[#153E75] font-medium">
                            AML/KYC
                          </Link>
                          {' '}et{' '}
                          <Link href="/compliance" className="text-[#0E2E5C] hover:text-[#153E75] font-medium">
                            MiFID II
                          </Link>
                          {' *'}
                        </span>
                      </div>
                    </label>
                    {errors.acceptCompliance && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 flex items-center space-x-2 text-red-600 text-sm"
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.acceptCompliance}</span>
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Informations de sécurité - Premium */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="bg-gradient-to-r from-[#0E2E5C]/5 to-[#153E75]/5 border border-[#0E2E5C]/20 backdrop-blur-sm rounded-2xl p-5 sm:p-7"
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-5 flex items-center">
                      <Shield className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-[#0E2E5C]" />
                      Security & Compliance
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-5 sm:mb-6">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-gray-700">AES-256 Encryption</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-gray-700">Multi-factor Authentication</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-gray-700">GDPR Compliant</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-gray-700">SOC 2 Type II Certified</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Image de confiance - Salle de serveurs sécurisée */}
                  <div className="relative rounded-xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=200&fit=crop&auto=format"
                      srcSet="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=100&fit=crop&auto=format 300w,
                              https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=200&fit=crop&auto=format 600w,
                              https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&h=300&fit=crop&auto=format 900w"
                      sizes="(max-width: 640px) 300px, (max-width: 1024px) 600px, 900px"
                      alt="Salle de serveurs sécurisée"
                      className="w-full h-32 sm:h-40 md:h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                    <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3">
                      <p className="text-white text-xs sm:text-sm font-medium">Certified Infrastructure</p>
                      <p className="text-white/80 text-[10px] sm:text-xs">ISO 27001 & SOC 2 Type II</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* General Error Message */}
          {errors.general && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3"
            >
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              <span className="text-red-700 text-sm">{errors.general}</span>
            </motion.div>
          )}

          {/* Navigation Buttons - Premium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-200/50"
          >
            <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm text-gray-600">
              <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#0E2E5C]" />
              <span className="font-medium">{t('pages.register.need_help')}</span>
            </div>

            <div className="flex space-x-3 sm:space-x-4 w-full sm:w-auto">
              {currentStep > 1 && (
                <motion.button
                  type="button"
                  onClick={handlePrevStep}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 sm:py-3.5 px-5 sm:px-7 rounded-xl transition-all duration-300 text-sm sm:text-base"
                >
                  {t('common.previous')}
                </motion.button>
              )}

              {currentStep < 4 ? (
                <motion.button
                  type="button"
                  onClick={handleNextStep}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#0E2E5C] to-[#153E75] hover:from-[#153E75] hover:to-[#0E2E5C] text-white font-semibold py-3 sm:py-3.5 px-5 sm:px-7 rounded-xl transition-all duration-300 shadow-lg flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base"
                >
                  <span>{t('common.next')}</span>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              ) : (
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 sm:py-3.5 px-5 sm:px-7 rounded-xl transition-all duration-300 shadow-lg flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base"
                >
                  <span>{t('common.submit')}</span>
                  <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              )}
            </div>
          </motion.div>
        </form>

        {/* Bottom Section - Premium */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="px-6 sm:px-8 md:px-10 pb-6 sm:pb-8 md:pb-10"
        >
          <div className="text-center text-sm text-gray-600 mb-4">
            Already have an account?{' '}
            <Link href="/login" className="text-[#0E2E5C] hover:text-[#153E75] font-semibold transition-colors">
              Log in
            </Link>
          </div>

          <div className="flex justify-center space-x-4 sm:space-x-6 md:space-x-8">
            <Link href="/terms" className="text-xs sm:text-sm text-gray-500 hover:text-[#0E2E5C] transition-colors font-medium">
              Conditions
            </Link>
            <Link href="/privacy" className="text-xs sm:text-sm text-gray-500 hover:text-[#0E2E5C] transition-colors font-medium">
              Privacy
            </Link>
            <Link href="/security" className="text-xs sm:text-sm text-gray-500 hover:text-[#0E2E5C] transition-colors font-medium">
              Security
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
    </div>
  );
}
