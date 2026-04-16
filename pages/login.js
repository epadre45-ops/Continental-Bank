import { useState, useEffect, useRef } from 'react';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from '../lib/i18n';
import { Lock, Shield, Eye, EyeOff, Smartphone, Usb, CheckCircle, AlertCircle, Send, ArrowRight, Clock, User, Mail, Phone, MessageCircle, HelpCircle, Headphones, Globe, Users, Check, RefreshCw, LogOut } from 'lucide-react';
import LanguageSelector from '../components/LanguageSelector';

export default function LoginPageInstitutional() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authMethod, setAuthMethod] = useState('password'); // password, mobile, usb
  const [sessionActive, setSessionActive] = useState(false);
  const [sessionTimeLeft, setSessionTimeLeft] = useState(0);
  const [usbDevice, setUsbDevice] = useState(null);
  const [mobileCode, setMobileCode] = useState('');
  const [showMobileForm, setShowMobileForm] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [smsSent, setSmsSent] = useState(false);
  const [errors, setErrors] = useState({});
  const sessionInterval = useRef(null);
  const sessionTimeout = useRef(null);



  // Vérification session au chargement
  useEffect(() => {
    checkSession();
    detectUSBDevices();
    
    // Nettoyage des intervalles
    return () => {
      if (sessionInterval.current) clearInterval(sessionInterval.current);
      if (sessionTimeout.current) clearTimeout(sessionTimeout.current);
    };
  }, []);

  // Vérification de session chaque minute
  useEffect(() => {
    sessionInterval.current = setInterval(() => {
      checkSession();
    }, 60000); // Chaque minute
    
    return () => {
      if (sessionInterval.current) clearInterval(sessionInterval.current);
    };
  }, []);

  const startSessionTimer = (minutes) => {
    if (sessionInterval.current) clearInterval(sessionInterval.current);
    let timeLeft = minutes * 60;
    sessionInterval.current = setInterval(() => {
      timeLeft -= 1;
      if (timeLeft <= 0) {
        clearInterval(sessionInterval.current);
      } else {
        setSessionTimeLeft(timeLeft / 60);
      }
    }, 1000);
  };

  const checkSession = async () => {
    const sessionId = localStorage.getItem('continentalBank_session');
    if (sessionId) {
      // Vérifier si la session est valide via API backend sécurisée
      try {
        const sessionResponse = await fetch('/api/auth/session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'get', sessionId })
        });

        if (sessionResponse.ok) {
          const { session } = await sessionResponse.json();
          if (session) {
            const now = new Date();
            const expiresAt = new Date(session.expiresAt);
            const timeLeft = (expiresAt - now) / 1000 / 60; // en minutes

            if (timeLeft > 0) {
              setSessionActive(true);
              setSessionTimeLeft(Math.ceil(timeLeft));

              // Auto-déconnexion
              sessionTimeout.current = setTimeout(() => {
                handleLogout();
              }, timeLeft * 60 * 1000);

              // Démarrer le timer
              startSessionTimer(Math.ceil(timeLeft));
            } else {
              handleLogout();
            }
          }
        } else {
          handleLogout();
        }
      } catch (error) {
        handleLogout();
      }
    } else {
      setSessionActive(false);
      setSessionTimeLeft(0);
    }
  };

  const detectUSBDevices = async () => {
    try {
      if ('usb' in navigator) {
        const devices = await navigator.usb.getDevices();
        if (devices.length > 0) {
          setUsbDevice(devices[0]);
        }
      }
    } catch (error) {
      // USB detection not available, continue without USB auth
    }
  };

  const handleUSBAuth = async () => {
    try {
      if ('usb' in navigator) {
        await navigator.usb.requestDevice({
          filters: [{ vendorId: 0x1234 }]
        });
        setUsbDevice({ connected: true });
        // Simulation d'authentification USB réussie
        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 1000);
      }
    } catch (error) {
      // USB auth failed, continue with other methods
    }
  };

  const handleSendSMS = async () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      setErrors({ phone: 'Numéro de téléphone invalide' });
      return;
    }
    
    setIsLoading(true);
    // Simulation d'envoi SMS
    setTimeout(() => {
      setSmsSent(true);
      setIsLoading(false);
      setErrors({});
    }, 2000);
  };

  const handleMobileAuth = () => {
    if (!mobileCode || mobileCode.length !== 6) {
      setErrors({ code: 'Code à 6 chiffres requis' });
      return;
    }
    
    setIsLoading(true);
    // Simulation de vérification du code
    setTimeout(() => {
      if (mobileCode === '123456') { // Code de test
        createSession();
      } else {
        setErrors({ code: 'Code invalide' });
        setIsLoading(false);
      }
    }, 1500);
  };

  const createSession = () => {
    const sessionData = {
      identifier: formData.identifier,
      expires: Date.now() + (30 * 60 * 1000), // 30 minutes
      authMethod: authMethod
    };
    
    localStorage.setItem('institutionSession', JSON.stringify(sessionData));
    setSessionActive(true);
    setSessionTimeLeft(30);
    setIsLoading(false);
    
    // Redirection vers dashboard
    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 1000);
  };

  const extendSession = async () => {
    const sessionId = localStorage.getItem('continentalBank_session');
    if (sessionId) {
      try {
        const response = await fetch('/api/auth/session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'extend', sessionId })
        });
        if (response.ok) {
          if (sessionTimeout.current) clearTimeout(sessionTimeout.current);
          checkSession();
        }
      } catch (error) {
        console.error('Failed to extend session:', error);
      }
    }
  };

  const handleLogout = () => {
    const sessionId = localStorage.getItem('continentalBank_session');
    if (sessionId) {
      // Désactiver la session dans la base de données
      fetch('/api/auth/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'destroy', sessionId })
      }).catch(err => console.error('Logout error:', err));
    }
    
    localStorage.removeItem('continentalBank_session');
    setSessionActive(false);
    setSessionTimeLeft(0);
    
    // Nettoyer les intervalles
    if (sessionInterval.current) clearInterval(sessionInterval.current);
    if (sessionTimeout.current) clearTimeout(sessionTimeout.current);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Effacer les erreurs
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.identifier.trim()) {
      newErrors.identifier = 'Identifiant requis';
    } else if (!formData.identifier.includes('@') && !formData.identifier.includes('.')) {
      newErrors.identifier = 'Format email invalide';
    }
    
    if (!formData.password.trim()) {
      newErrors.password = 'Mot de passe requis';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Minimum 8 caractères';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);

    try {
      // Authentifier l'utilisateur via API backend sécurisée
      const loginResponse = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.identifier,
          password: formData.password,
          rememberMe: formData.rememberMe
        })
      });

      if (loginResponse.ok) {
        const { token, user } = await loginResponse.json();

        // Créer une session via API backend
        const sessionResponse = await fetch('/api/auth/session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'create',
            userId: user.id
          })
        });

        if (sessionResponse.ok) {
          const { session } = await sessionResponse.json();

          // Stocker la session dans localStorage
          localStorage.setItem('continentalBank_session', session.id);
          localStorage.setItem('continentalBank_token', token);

          // Activer la session dans l'UI
          setSessionActive(true);
          setSessionTimeLeft(30);
          startSessionTimer(30);

          // Rediriger vers le dashboard
          setTimeout(() => {
            window.location.href = '/dashboard';
          }, 1000);
        } else {
          setErrors({ general: 'Erreur lors de la création de session.' });
          setIsLoading(false);
        }
      } else {
        const errorData = await loginResponse.json();
        setErrors({ general: errorData.message || 'Identifiants incorrects. Veuillez vérifier votre email et mot de passe.' });
        setIsLoading(false);
      }

    } catch (error) {
      setErrors({ general: 'Une erreur est survenue. Veuillez réessayer.' });
      setIsLoading(false);
    }
  };

  const formatTime = (minutes) => {
    const mins = Math.floor(minutes);
    const secs = Math.floor((minutes - mins) * 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Bannière Session Active */}
      <AnimatePresence>
        {sessionActive && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-0 left-0 right-0 z-50 bg-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 shadow-lg"
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-medium text-xs sm:text-sm">
                  Session active - Temps restant : {formatTime(sessionTimeLeft)}
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <button
                  onClick={extendSession}
                  className="flex items-center space-x-1.5 sm:space-x-2 bg-white/20 hover:bg-white/30 px-2 sm:px-3 py-1 rounded-lg transition-colors"
                >
                  <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-[10px] sm:text-xs">{t('login.extend_session')}</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1.5 sm:space-x-2 bg-red-500 hover:bg-red-600 px-2 sm:px-3 py-1 rounded-lg transition-colors"
                >
                  <LogOut className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-[10px] sm:text-xs">{t('login.logout')}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SECTION GAUCHE - PANNEAU DE SÉCURITÉ - Ultra Premium */}
      <div className="hidden lg:flex w-[45%] relative overflow-hidden">
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

        <div className="relative z-10 flex flex-col justify-between p-8 sm:p-10 md:p-14 h-full">
          <div>
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/15 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-8 sm:mb-10 backdrop-blur-xl border border-white/20 shadow-2xl"
            >
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8D8C3]" />
              <span className="text-xs sm:text-sm font-medium text-white tracking-wide">SECURE BANKING</span>
            </motion.div>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-10 sm:mb-12 md:mb-16"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-primary text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {t('common.bank_name')}
              </motion.h1>
              
              {/* Premium Divider with Glow Effect */}
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "80px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-1 mb-6 sm:mb-8 bg-gradient-to-r from-transparent via-[#E8D8C3] to-transparent rounded-full shadow-lg"
              ></motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed max-w-md font-light"
              >
                {t('pages.login.subtitle')}
              </motion.p>
            </motion.div>

            {/* Premium Support Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8 sm:mb-10"
            >
              <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-5 sm:p-6 lg:p-7 border border-white/20 shadow-2xl">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-4 sm:mb-5 flex items-center">
                  <Headphones className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-2.5 text-[#E8D8C3]" />
                  {t('pages.login.support_title')}
                </h3>
                <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#0E2E5C] to-[#153E75] rounded-xl flex items-center justify-center flex-shrink-0 shadow-xl">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white text-sm sm:text-base font-medium">+49 151 524 976 020</span>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#0E2E5C] to-[#153E75] rounded-xl flex items-center justify-center flex-shrink-0 shadow-xl">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white text-sm sm:text-base font-medium">support@continental-kreditbank.de</span>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#0E2E5C] to-[#153E75] rounded-xl flex items-center justify-center flex-shrink-0 shadow-xl">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white text-sm sm:text-base font-medium">Live-Chat</span>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#0E2E5C] to-[#153E75] rounded-xl flex items-center justify-center flex-shrink-0 shadow-xl">
                      <HelpCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white text-sm sm:text-base font-medium">Hilfezentrum</span>
                  </div>
                </div>

                {/* Premium Badges */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <div className="bg-white/15 backdrop-blur-xl rounded-lg px-3 sm:px-4 py-2 flex items-center space-x-2 border border-white/20">
                    <Clock className="w-4 h-4 text-[#E8D8C3]" />
                    <span className="text-white text-xs sm:text-sm font-medium">24/7</span>
                  </div>
                  <div className="bg-white/15 backdrop-blur-xl rounded-lg px-3 sm:px-4 py-2 flex items-center space-x-2 border border-white/20">
                    <Globe className="w-4 h-4 text-[#E8D8C3]" />
                    <span className="text-white text-xs sm:text-sm font-medium">Deutschland</span>
                  </div>
                  <div className="bg-white/15 backdrop-blur-xl rounded-lg px-3 sm:px-4 py-2 flex items-center space-x-2 border border-white/20">
                    <Users className="w-4 h-4 text-[#E8D8C3]" />
                    <span className="text-white text-xs sm:text-sm font-medium">Experten</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Premium Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="font-primary text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3 sm:mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t('login.secure_login_title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed max-w-md font-light"
            >
              {t('login.secure_login_description')}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* SECTION DROITE - FORMULAIRE DE CONNEXION - Ultra Premium */}
      <div className="lg:w-[55%] w-full relative overflow-hidden">
        {/* Premium Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-white"></div>
          {/* Decorative Light Effects */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C7CCD6]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E8D8C3]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center p-6 sm:p-8 md:p-12 h-full">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md"
          >
            {/* Carte de Connexion - Premium Glass */}
            <div className="bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/50">
              {/* Sélecteur de Langue */}
              <div className="flex justify-end mb-6">
                <LanguageSelector />
              </div>

              {/* Formulaire selon méthode */}
              {authMethod === 'password' && (
                <>
                  {/* Titre du Formulaire */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center mb-6 sm:mb-8"
                  >
                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="font-primary text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {t('pages.login.title')}
                    </motion.h2>
                    
                    {/* Premium Divider */}
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "60px" }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="h-1 mx-auto mb-4 sm:mb-5 bg-gradient-to-r from-transparent via-[#0E2E5C] to-transparent rounded-full"
                    ></motion.div>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="text-gray-600 text-sm sm:text-base"
                    >
                      {t('pages.login.subtitle')}
                    </motion.p>
                  </motion.div>

                {/* Formulaire Mot de Passe */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Champ Identifiant */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('pages.login.username_email')}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="identifier"
                        value={formData.identifier}
                        onChange={handleChange}
                        placeholder="admin@firewoodpremium.be"
                        className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/50 backdrop-blur-sm border-2 ${errors.identifier ? 'border-red-300' : 'border-gray-200 focus:border-[#0E2E5C]'} rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0E2E5C]/20 text-gray-900 placeholder-gray-400`}
                        required
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <User className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                    {errors.identifier && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 flex items-center space-x-2 text-red-600 text-sm"
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.identifier}</span>
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Champ Mot de passe */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('pages.login.password')}
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/50 backdrop-blur-sm border-2 pr-12 ${errors.password ? 'border-red-300' : 'border-gray-200 focus:border-[#0E2E5C]'} rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0E2E5C]/20 text-gray-900 placeholder-gray-400`}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
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
                  </motion.div>

                  {/* Message d'erreur général */}
                  {errors.general && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50/80 backdrop-blur-sm border border-red-200 rounded-xl p-4 flex items-center space-x-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-500" />
                      <span className="text-red-700 text-sm font-medium">{errors.general}</span>
                    </motion.div>
                  )}

                  {/* Options */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0"
                  >
                    <label className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                        className="w-4 h-4 sm:w-5 sm:h-5 rounded border-2 border-gray-300 text-[#0E2E5C] focus:ring-[#0E2E5C] focus:ring-offset-0 transition-all"
                      />
                      <span className="ml-2 sm:ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors">{t('pages.login.remember_me')}</span>
                    </label>
                    <Link href="/forgot-password" className="text-sm text-[#0E2E5C] hover:text-[#153E75] font-medium transition-colors">
                      {t('pages.login.forgot_password')}
                    </Link>
                  </motion.div>

                  {/* Bouton de Connexion - Premium */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    type="submit"
                    disabled={isLoading}
                    className="group relative w-full px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-[#0E2E5C] to-[#153E75] text-white rounded-xl font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center space-x-3"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>{t('common.in_progress')}</span>
                      </>
                    ) : (
                      <>
                        <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
                        <span>{t('pages.login.sign_in')}</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </>
            )}

            {authMethod === 'mobile' && (
              <>
                {/* Titre du Formulaire Mobile - Premium */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-6 sm:mb-8"
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-primary text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Authentification Mobile
                  </motion.h2>
                  
                  {/* Premium Divider */}
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "60px" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-1 mx-auto mb-4 sm:mb-5 bg-gradient-to-r from-transparent via-[#0E2E5C] to-transparent rounded-full"
                  ></motion.div>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-gray-600 text-sm sm:text-base"
                  >
                    Recevez un code SMS pour vous connecter
                  </motion.p>
                </motion.div>

                {/* Formulaire Mobile - Premium */}
                <div className="space-y-6">
                  {!smsSent ? (
                    <>
                      {/* Champ Téléphone */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Numéro de téléphone
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="+33 6 12 34 56 78"
                            className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/50 backdrop-blur-sm border-2 ${errors.phone ? 'border-red-300' : 'border-gray-200 focus:border-[#0E2E5C]'} rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0E2E5C]/20 text-gray-900 placeholder-gray-400`}
                          />
                          <div className="absolute right-3 top-1/2 -translate-y-1/2">
                            <Smartphone className="w-5 h-5 text-gray-400" />
                          </div>
                        </div>
                        {errors.phone && (
                          <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 flex items-center space-x-2 text-red-600 text-sm"
                          >
                            <AlertCircle className="w-4 h-4" />
                            <span>{errors.phone}</span>
                          </motion.div>
                        )}
                      </motion.div>

                      {/* Bouton Envoyer SMS - Premium */}
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        onClick={handleSendSMS}
                        disabled={isLoading}
                        className="group relative w-full px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-[#0E2E5C] to-[#153E75] text-white rounded-xl font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center space-x-3"
                      >
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Envoi en cours...</span>
                          </>
                        ) : (
                          <>
                            <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />
                            <span>Envoyer le code SMS</span>
                          </>
                        )}
                      </motion.button>
                    </>
                  ) : (
                    <>
                      {/* Champ Code SMS */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Code de vérification
                        </label>
                        <input
                          type="text"
                          value={mobileCode}
                          onChange={(e) => setMobileCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                          placeholder="123456"
                          maxLength={6}
                          className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-white/50 backdrop-blur-sm border-2 text-center text-2xl tracking-widest ${errors.code ? 'border-red-300' : 'border-gray-200 focus:border-[#0E2E5C]'} rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0E2E5C]/20 text-gray-900 placeholder-gray-400`}
                        />
                        {errors.code && (
                          <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 flex items-center space-x-2 text-red-600 text-sm"
                          >
                            <AlertCircle className="w-4 h-4" />
                            <span>{errors.code}</span>
                          </motion.div>
                        )}
                      </motion.div>

                      {/* Bouton Vérifier - Premium */}
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        onClick={handleMobileAuth}
                        disabled={isLoading}
                        className="group relative w-full px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-[#0E2E5C] to-[#153E75] text-white rounded-xl font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center space-x-3"
                      >
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Vérification...</span>
                          </>
                        ) : (
                          <>
                            <Check className="w-5 h-5 sm:w-6 sm:h-6" />
                            <span>Vérifier le code</span>
                          </>
                        )}
                      </motion.button>

                      {/* Renvoyer code */}
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        onClick={() => {
                          setSmsSent(false);
                          setMobileCode('');
                        }}
                        className="w-full text-[#0E2E5C] hover:text-[#153E75] font-medium text-sm transition-colors"
                      >
                        Renvoyer un nouveau code
                      </motion.button>
                    </>
                  )}
                </div>
              </>
            )}

            {authMethod === 'usb' && (
              <>
                {/* Titre du Formulaire USB - Premium */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-6 sm:mb-8"
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-primary text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Clé USB Sécurisée
                  </motion.h2>
                  
                  {/* Premium Divider */}
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "60px" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-1 mx-auto mb-4 sm:mb-5 bg-gradient-to-r from-transparent via-[#0E2E5C] to-transparent rounded-full"
                  ></motion.div>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-gray-600 text-sm sm:text-base"
                  >
                    Connectez votre clé USB pour une authentification sécurisée
                  </motion.p>
                </motion.div>

                {/* État USB - Premium */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-center py-6 sm:py-8"
                >
                  {usbDevice ? (
                    <div className="space-y-4 sm:space-y-6">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto shadow-xl"
                      >
                        <Usb className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" />
                      </motion.div>
                      <div>
                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="text-lg sm:text-xl font-semibold text-gray-900 mb-2"
                        >
                          Clé USB détectée
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          className="text-gray-600 mb-4 sm:mb-6 text-sm"
                        >
                          {usbDevice.productName || 'Clé de sécurité'} connectée
                        </motion.p>
                        <motion.button
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          onClick={handleUSBAuth}
                          className="group relative px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center space-x-3 mx-auto"
                        >
                          <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
                          <span>S'authentifier avec la clé</span>
                        </motion.button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 sm:space-y-6">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                        <Usb className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                          Aucune clé USB détectée
                        </h3>
                        <p className="text-gray-600 mb-4 sm:mb-6 text-sm">
                          Veuillez connecter votre clé USB de sécurité
                        </p>
                        <motion.button
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                          onClick={detectUSBDevices}
                          className="group relative px-6 sm:px-8 py-4 sm:py-5 bg-white/50 backdrop-blur-sm border-2 border-gray-200 text-gray-700 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center space-x-3 mx-auto"
                        >
                          <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6" />
                          <span className="text-xs sm:text-sm">Détecter à nouveau</span>
                        </motion.button>
                      </div>
                    </div>
                  )}
                </motion.div>
              </>
            )}

            {/* Informations de Session - Premium */}
            {authMethod === 'password' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mt-4 sm:mt-6 bg-gradient-to-r from-[#0E2E5C]/10 to-[#153E75]/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 flex items-center space-x-3 sm:space-x-4 border border-[#0E2E5C]/20"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#0E2E5C] to-[#153E75] rounded-xl flex items-center justify-center flex-shrink-0 shadow-xl">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-gray-900">Durée de Session</p>
                  <p className="text-xs sm:text-sm text-gray-600">Session automatique : 30 minutes</p>
                </div>
              </motion.div>
            )}

            {/* Aide - Premium */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-6 sm:mt-8 text-center"
            >
              <Link href="/help" className="inline-flex items-center justify-center space-x-2 text-sm sm:text-base text-[#0E2E5C] hover:text-[#153E75] font-medium transition-colors group">
                <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                <span>Hilfe bei der Anmeldung?</span>
              </Link>
            </motion.div>

            {/* Création de Compte - Premium */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-8 text-center"
            >
              <p className="text-gray-700 text-sm sm:text-base">
                {t('pages.login.no_account')}{' '}
                <Link href="/register" className="text-[#0E2E5C] hover:text-[#153E75] font-bold transition-colors hover:underline underline-offset-4">
                  {t('pages.login.create_account')}
                </Link>
              </p>
            </motion.div>
          </div>

          {/* Footer Links - Premium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-6 sm:mt-8 text-center space-x-4 sm:space-x-6"
          >
            <Link href="/terms" className="text-xs sm:text-sm text-gray-500 hover:text-[#0E2E5C] transition-colors font-medium">
              AGB
            </Link>
            <Link href="/privacy" className="text-xs sm:text-sm text-gray-500 hover:text-[#0E2E5C] transition-colors font-medium">
              Datenschutz
            </Link>
            <Link href="/security" className="text-xs sm:text-sm text-gray-500 hover:text-[#0E2E5C] transition-colors font-medium">
              Sicherheit
            </Link>
          </motion.div>
        </motion.div>
      </div>
      </div>
    </div>
  );
}
