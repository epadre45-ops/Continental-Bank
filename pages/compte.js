import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  FileText, 
  User, 
  Home, 
  Briefcase, 
  Calculator, 
  Shield, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin, 
  CreditCard,
  Building,
  Calendar,
  DollarSign,
  TrendingUp,
  Target,
  Award,
  Users,
  Star,
  Clock,
  Lock,
  Eye,
  EyeOff,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import { submitFormEmail, flattenForEmail } from '../utils/formSubmit';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function Compte() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    accountType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    acceptTerms: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const accountData = {
        ...formData,
        password: password,
        submittedAt: new Date().toISOString(),
        userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'SSR'
      };

      await submitFormEmail({
        formName: 'Account Opening',
        payload: flattenForEmail({
          ...formData,
          password: '[not included in email for security]',
          submittedAt: accountData.submittedAt,
          userAgent: accountData.userAgent,
        }),
        replyTo: formData.email
      });

      const userResponse = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(accountData)
      });

      if (!userResponse.ok) {
        const errorData = await userResponse.json();
        throw new Error(errorData.message || 'Failed to create account');
      }

      const { user: newUser } = await userResponse.json();

      // Afficher le succès
      alert(`Your account was created. ID: ${newUser.id}.`);
      
      // Réinitialiser le formulaire
      setFormData({
        accountType: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        birthDate: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
        occupation: '',
        income: '',
        agreeTerms: false
      });
      setPassword('');
      
      // Rediriger vers page d'enregistrement
      window.location.href = '/register';
      
    } catch (error) {
      console.error('Erreur lors de la création du compte:', error);
      alert(error.message || 'Unable to create account. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section Premium */}
        <div className="relative h-[500px] overflow-hidden mb-16">
          {/* Image de fond */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=500&fit=crop&auto=format&q=80"
              alt="Banque digitale et services bancaires modernes"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60"></div>
          </div>
          
          {/* Contenu */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                className="max-w-4xl"
              >
                {/* Badges de confiance pour le Hero */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <Award className="w-4 h-4 text-green-400" />
                    <span className="text-white/90 text-sm font-medium">{t('compte_meilleure_banque_digitale_2024')}</span>
                  </div>
                  <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-white/90 text-sm font-medium">500,000+ clients</span>
                  </div>
                  <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <Shield className="w-4 h-4 text-yellow-400" />
                    <span className="text-white/90 text-sm font-medium">100% sécurisé</span>
                  </div>
                </div>
                
                <h1 className="text-6xl lg:text-7xl font-light text-white mb-6 leading-tight">{t('compte_ouvrir')}<span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">{t('compte_compte')}</span>
                </h1>
                
                <p className="text-xl text-white/80 max-w-3xl mb-8 leading-relaxed">{t('compte_rejoignez')}<span className="font-bold text-white">500,000+ clients</span>{t('compte_beneficiez_serv')}<span className="font-bold text-white">0€ de frais</span>
                </p>
                
                {/* Stats principales du Hero */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">0€</div>
                    <div className="text-white/70 text-sm">{t('compte_frais_tenue')}</div>
                    <div className="flex items-center mt-2 text-green-400 text-sm">
                      <CheckCircle className="w-4 h-4 mr-1" />{t('compte_vie')}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">24/7</div>
                    <div className="text-white/70 text-sm">{t('compte_service_client')}</div>
                    <div className="flex items-center mt-2 text-green-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />{t('compte_instantane')}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">2min</div>
                    <div className="text-white/70 text-sm">{t('compte_ouverture_ligne')}</div>
                    <div className="flex items-center mt-2 text-green-400 text-sm">
                      <Zap className="w-4 h-4 mr-1" />{t('compte_sans_papier')}</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Link 
                    href="/register"
                    className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-2xl hover:shadow-3xl"
                  >
                    <span className="relative z-10 flex items-center">
                      <Target className="w-5 h-5 mr-2" />{t('compte_ouvrir_mon_compte')}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Target className="w-5 h-5 mr-2" />{t('compte_ouvrir_mon_compte')}</span>
                  </Link>
                  <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />{t('compte_decouvrir_les_cartes')}</button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Section Preuves Sociales - Témoignages Compte */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="container mx-auto px-6 mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-slate-900 mb-4">{t('compte_ils_nous_ont')}<span className="font-semibold text-blue-900">{t('compte_choisis')}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Découvrez pourquoi 500,000+ clients nous font confiance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">AJ</span>
                </div>
                <div className="flex-1">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-4">
                    "L'ouverture de compte en 2 minutes est incroyable ! 
                    L'application est intuitive et les virements sont instantanés."
                  </p>
                  <div className="text-right">
                    <p className="font-semibold text-slate-900">{t('compte_anna_joly')}</p>
                    <p className="text-sm text-slate-600">{t('compte_etudiante_lyon')}</p>
                    <div className="flex items-center justify-end mt-2 text-green-600 text-sm">
                      <Zap className="w-4 h-4 mr-1" />{t('compte_compte_ouvert_2min')}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">ML</span>
                </div>
                <div className="flex-1">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-4">
                    "Le service client 24/7 m'a sauvé plusieurs fois. 
                    Vraiment la banque la plus moderne que j'ai connue."
                  </p>
                  <div className="text-right">
                    <p className="font-semibold text-slate-900">{t('compte_marc_leroy')}</p>
                    <p className="text-sm text-slate-600">{t('compte_consultant_paris')}</p>
                    <div className="flex items-center justify-end mt-2 text-green-600 text-sm">
                      <Clock className="w-4 h-4 mr-1" />{t('compte_support')}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">SB</span>
                </div>
                <div className="flex-1">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-4">{t('compte_les_frais_carte_premium')}</p>
                  <div className="text-right">
                    <p className="font-semibold text-slate-900">{t('compte_sophie_bernard')}</p>
                    <p className="text-sm text-slate-600">{t('compte_freelance_marseille')}</p>
                    <div className="flex items-center justify-end mt-2 text-purple-600 text-sm">
                      <TrendingUp className="w-4 h-4 mr-1" />{t('compte_200_economises')}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="container mx-auto px-6">
          {/* Types de comptes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-4">{t('compte_compte_particulier')}</h3>
              <p className="text-slate-600 mb-6">{t('compte_gerez_vos_finances_quotidiennes')}</p>
              <ul className="space-y-2 mb-6 text-sm text-slate-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />{t('compte_carte_debit_incluse')}</li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />{t('compte_application_mobile')}</li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />{t('compte_virements_gratuits')}</li>
              </ul>
              <Link
                href="/register"
                onClick={() => setFormData({...formData, accountType: 'particulier'})}
                className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium flex items-center justify-center group"
              >
                <Target className="w-4 h-4 mr-2" />{t('compte_ouvrir_compte')}</Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-4">{t('compte_compte_premium')}</h3>
              <p className="text-slate-600 mb-6">{t('compte_services_exclusifs_avantages_premium')}</p>
              <ul className="space-y-2 mb-6 text-sm text-slate-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />{t('compte_conseiller_personnel_dedie')}</li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />{t('compte_tarifs_preferentiels')}</li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />{t('compte_acces_salons_vip')}</li>
              </ul>
              <Link
                href="/register"
                onClick={() => setFormData({...formData, accountType: 'premium'})}
                className="w-full bg-green-900 text-white py-3 rounded-lg hover:bg-green-800 transition-colors font-medium flex items-center justify-center group"
              >
                <Target className="w-4 h-4 mr-2" />{t('compte_ouvrir_compte')}</Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-4">{t('compte_compte_professionnel')}</h3>
              <p className="text-slate-600 mb-6">{t('compte_solutions_adaptees_aux_besoins')}</p>
              <ul className="space-y-2 mb-6 text-sm text-slate-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />{t('compte_gestion_multi_devises')}</li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />{t('compte_services_tresorerie')}</li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />{t('compte_credits_professionnels')}</li>
              </ul>
              <Link
                href="/register"
                onClick={() => setFormData({...formData, accountType: 'professionnel'})}
                className="w-full bg-purple-900 text-white py-3 rounded-lg hover:bg-purple-800 transition-colors font-medium flex items-center justify-center group"
              >
                <Target className="w-4 h-4 mr-2" />{t('compte_ouvrir_compte')}</Link>
            </div>
          </motion.div>

          {/* Avantages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white p-10 rounded-2xl shadow-lg border border-slate-200 mb-16"
          >
            <h2 className="text-3xl font-light text-slate-900 mb-8 text-center">
              Pourquoi choisir Continental Bank Europe ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">{t('compte_securite_maximale')}</h3>
                <p className="text-slate-600">{t('compte_protection_vos_donnees_transaction')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">{t('compte_cartes_premium')}</h3>
                <p className="text-slate-600">{t('compte_cartes_debit_credit_avec')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">{t('compte_service_client')}</h3>
                <p className="text-slate-600">{t('compte_support_disponible_tout_moment')}</p>
              </div>
            </div>
          </motion.div>

          {/* Formulaire d'ouverture */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-lg border border-slate-200"
          >
            <h2 className="text-3xl font-light text-slate-900 mb-8 text-center">{t('compte_ouvrir_votre_compte')}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('compte_type_compte')}</label>
                <select
                  name="accountType"
                  value={formData.accountType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">{t('compte_selectionner_type_compte')}</option>
                  <option value="particulier">{t('compte_compte_particulier')}</option>
                  <option value="premium">{t('compte_compte_premium')}</option>
                  <option value="professionnel">{t('compte_compte_professionnel')}</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('compte_prenom')}</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre prénom"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('compte_nom')}</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre nom"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('compte_email')}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('compte_telephone')}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+33 6 12 34 56 78"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('compte_date_naissance')}</label>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('compte_adresse')}</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Votre adresse"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('compte_ville')}</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre ville"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('compte_code_postal')}</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="75000"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('compte_pays')}</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">{t('compte_selectionner')}</option>
                    <option value="FR">{t('compte_france')}</option>
                    <option value="DE">{t('compte_allemagne')}</option>
                    <option value="BE">{t('compte_belgique')}</option>
                    <option value="LU">{t('compte_luxembourg')}</option>
                    <option value="NL">{t('compte_pays_bas')}</option>
                    <option value="CH">{t('compte_suisse')}</option>
                    <option value="AT">{t('compte_autriche')}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('compte_mot_passe')}</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-12 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Choisissez un mot de passe sécurisé"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-slate-700"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  id="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                  required
                />
                <label htmlFor="acceptTerms" className="ml-2 text-sm text-slate-600">{t('compte_apos_accepte_les')}<Link href="/terms" className="text-blue-600 hover:text-blue-800">{t('compte_conditions_generales')}</Link>{t('compte_text_9')}<Link href="/privacy" className="text-blue-600 hover:text-blue-800">{t('compte_politique_confidentialite')}</Link>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-4 rounded-lg hover:bg-blue-800 transition-colors font-medium"
              >{t('compte_ouvrir_mon_compte')}</button>
            </form>
          </motion.div>

          {/* Contact rapide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-slate-600 mb-8">
              Besoin d&apos;aide pour ouvrir votre compte ? Notre équipe est là pour vous
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="inline-flex items-center text-blue-900 hover:text-blue-800">
                <Phone className="w-5 h-5 mr-2" />
                +49 69 123456789
              </Link>
              <Link href="/contact" className="inline-flex items-center text-blue-900 hover:text-blue-800">
                <Mail className="w-5 h-5 mr-2" />
                compte@continentalbank.eu
              </Link>
              <Link href="/contact" className="inline-flex items-center text-blue-900 hover:text-blue-800">
                <MapPin className="w-5 h-5 mr-2" />{t('compte_nos_agences')}</Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
