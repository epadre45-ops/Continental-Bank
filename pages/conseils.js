import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  Calculator, 
  FileText, 
  Shield, 
  TrendingUp, 
  Phone, 
  Mail, 
  MapPin, 
  Home, 
  Car, 
  Wrench,
  Target,
  Award,
  Users,
  Star,
  Clock,
  CheckCircle,
  BarChart3,
  Zap,
  AlertCircle,
  BookOpen,
  Lightbulb,
  Calendar
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { submitFormEmail, flattenForEmail } from '../utils/formSubmit';

import { useTranslation } from '../lib/i18n';
export default function Conseils() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    service: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    availability: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const adviceData = {
        ...formData,
        submittedAt: new Date().toISOString(),
        userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'SSR'
      };

      await submitFormEmail({
        formName: 'Advice Request',
        payload: flattenForEmail(adviceData),
        replyTo: formData.email
      });

      const adviceResponse = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'advice', ...adviceData })
      });

      if (!adviceResponse.ok) {
        const errorData = await adviceResponse.json();
        throw new Error(errorData.message || 'Failed to create advice request');
      }

      const { request: newRequest } = await adviceResponse.json();

      // Afficher le succès
      alert(`Your advice request was submitted. Reference: ${newRequest.id}`);
      
      // Réinitialiser le formulaire
      setFormData({
        service: '',
        name: '',
        email: '',
        phone: '',
        message: '',
        availability: ''
      });
      
      // Rediriger vers la page de prêt pour financement des conseils
      window.location.href = '/pret';
      
    } catch (error) {
      alert(error.message || 'Unable to submit. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const conseils = [
    {
      icon: TrendingUp,
      title: "Conseil en Investissement",
      description: "Stratégies personnalisées pour optimiser votre patrimoine",
      features: ["Analyse de profil", "Allocation d'actifs", "Suivi performance"]
    },
    {
      icon: Shield,
      title: "Conseil en Assurance",
      description: "Protection optimale pour vous et vos proches",
      features: ["Assurance vie", "Prévoyance", "Patrimoine"]
    },
    {
      icon: Target,
      title: "Conseil en Fiscalité",
      description: "Optimisation fiscale pour vos revenus et patrimoine",
      features: ["Impôt sur le revenu", "ISF", "Succession"]
    },
    {
      icon: Users,
      title: "Conseil en Épargne",
      description: "Solutions d'épargne adaptées à vos objectifs",
      features: ["Épargne retraite", "Plan d'épargne", "Investissement programmé"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section Premium */}
        <div className="relative h-[500px] overflow-hidden mb-16">
          {/* Image de fond */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=500&fit=crop&auto=format&q=80"
              alt="Conseil financier et expertise patrimoniale"
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
                    <span className="text-white/90 text-sm font-medium">{t('conseils_meilleurs_conseillers_2024')}</span>
                  </div>
                  <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-white/90 text-sm font-medium">{t('conseils_clients_conseillers')}</span>
                  </div>
                  <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <Shield className="w-4 h-4 text-yellow-400" />
                    <span className="text-white/90 text-sm font-medium">{t('conseils_certifies_amf')}</span>
                  </div>
                </div>
                
                <h1 className="text-6xl lg:text-7xl font-light text-white mb-6 leading-tight">{t('conseils_services')}<span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">{t('conseils_conseil')}</span>
                </h1>
                
                <p className="text-xl text-white/80 max-w-3xl mb-8 leading-relaxed">{t('conseils_beneficiez_expertise')}<span className="font-bold text-white">{t('conseils_nombre_conseillers')}</span>{t('conseils_certifies_pour_optimi')}<span className="font-bold text-white">{t('conseils_rendement_moyen')}</span>
                </p>
                
                {/* Stats principales du Hero */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">15%</div>
                    <div className="text-white/70 text-sm">{t('conseils_rendement_moyen')}</div>
                    <div className="flex items-center mt-2 text-green-400 text-sm">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {t('conseils_vs_marche')}
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">200+</div>
                    <div className="text-white/70 text-sm">{t('conseils_conseillers_experts')}</div>
                    <div className="flex items-center mt-2 text-green-400 text-sm">
                      <CheckCircle className="w-4 h-4 mr-1" />{t('conseils_certifies_amf')}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">24/7</div>
                    <div className="text-white/70 text-sm">{t('conseils_support_disponible')}</div>
                    <div className="flex items-center mt-2 text-green-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />{t('conseils_conseil_ligne')}</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Link 
                    href="/pret"
                    className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-2xl hover:shadow-3xl"
                  >
                    <span className="relative z-10 flex items-center">
                      <Target className="w-5 h-5 mr-2" />{t('conseils_obtenir_conseil')}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Target className="w-5 h-5 mr-2" />{t('conseils_obtenir_conseil')}</span>
                  </Link>
                  <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />{t('conseils_decouvrir_nos_guides')}</button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Section Preuves Sociales - Témoignages Conseil */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="container mx-auto px-6 mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-slate-900 mb-4">{t('conseils_ils_ont')}<span className="font-semibold text-blue-900">{t('conseils_optimise')}</span>{t('conseils_leur_patrimoine')}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('conseils_decouvrez_les_resultats_nos')}</p>
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
                  <span className="text-white font-bold text-lg">PM</span>
                </div>
                <div className="flex-1">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-4">{t('conseils_conseil_investissement_permis')}</p>
                  <div className="text-right">
                    <p className="font-semibold text-slate-900">{t('conseils_pierre_martin')}</p>
                    <p className="text-sm text-slate-600">{t('conseils_retraite_nice')}</p>
                    <div className="flex items-center justify-end mt-2 text-green-600 text-sm">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      +125% performance
                    </div>
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
                  <span className="text-white font-bold text-lg">CL</span>
                </div>
                <div className="flex-1">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-4">
                    {t('conseils_optimisation_fiscale_temoin')}
                  </p>
                  <div className="text-right">
                    <p className="font-semibold text-slate-900">{t('conseils_claire_laurent')}</p>
                    <p className="text-sm text-slate-600">{t('conseils_avocate_paris')}</p>
                    <div className="flex items-center justify-end mt-2 text-green-600 text-sm">
                      <Zap className="w-4 h-4 mr-1" />{t('conseils_500_impots')}</div>
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
                  <span className="text-white font-bold text-lg">JD</span>
                </div>
                <div className="flex-1">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-4">
                    {t('conseils_conseil_assurance_temoin')}
                  </p>
                  <div className="text-right">
                    <p className="font-semibold text-slate-900">{t('conseils_jean_dubois')}</p>
                    <p className="text-sm text-slate-600">{t('conseils_entrepreneur_lyon')}</p>
                    <div className="flex items-center justify-end mt-2 text-purple-600 text-sm">
                      <Shield className="w-4 h-4 mr-1" />{t('conseils_famille_protegee')}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-light text-slate-900 mb-6">{t('conseils_services')}<span className="text-blue-900 font-medium">{t('conseils_conseil')}</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">{t('conseils_beneficiez_apos_expertise_nos')}</p>
          </motion.div>

          {/* Services de conseil */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {(conseils || []).map((conseil) => (
              <div key={conseil.title} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <conseil.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-4">{conseil.title}</h3>
                <p className="text-slate-600 mb-6">{conseil.description}</p>
                <ul className="space-y-2 text-sm text-slate-600 mb-6">
                  {(conseil?.features || []).map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/pret"
                  className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium flex items-center justify-center group"
                >
                  <Target className="w-4 h-4 mr-2" />{t('conseils_obtenir_conseil')}</Link>
              </div>
            ))}
          </motion.div>

          {/* Notre approche */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white p-10 rounded-2xl shadow-lg border border-slate-200 mb-16"
          >
            <h2 className="text-3xl font-light text-slate-900 mb-8 text-center">{t('conseils_notre_approche_conseil')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">{t('conseils_ecoute_active')}</h3>
                <p className="text-slate-600">{t('conseils_nous_prenons_temps_comprendre')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">{t('conseils_analyse_approfondie')}</h3>
                <p className="text-slate-600">{t('conseils_etude_complete_votre_situation')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">{t('conseils_strategie_sur_mesure')}</h3>
                <p className="text-slate-600">{t('conseils_solutions_personnalisees_adaptees_votr')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">{t('conseils_accompagnement_continu')}</h3>
                <p className="text-slate-600">{t('conseils_suivi_regulier_ajustements_selon')}</p>
              </div>
            </div>
          </motion.div>

          {/* Nos conseillers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-light text-slate-900 mb-8 text-center">{t('conseils_nos_experts')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-900">JD</span>
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">{t('conseils_jean_dupont')}</h3>
                <p className="text-blue-600 mb-4">{t('conseils_conseiller_senior')}</p>
                <p className="text-sm text-slate-600 mb-4">
                  15 ans d&apos;expérience en gestion de patrimoine
                </p>
                <div className="text-sm text-slate-500">
                  <p>{t('conseils_specialiste_investissement')}</p>
                  <p>{t('conseils_languages_francais_anglais_allemand')}</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-900">ML</span>
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">{t('conseils_marie_laurent')}</h3>
                <p className="text-green-600 mb-4">{t('conseils_conseillere_expert')}</p>
                <p className="text-sm text-slate-600 mb-4">
                  12 ans d&apos;expérience en fiscalité et succession
                </p>
                <div className="text-sm text-slate-500">
                  <p>{t('conseils_specialiste_fiscalite')}</p>
                  <p>{t('conseils_languages_francais_anglais')}</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-900">PB</span>
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">{t('conseils_pierre_bernard')}</h3>
                <p className="text-purple-600 mb-4">{t('conseils_conseiller_specialiste')}</p>
                <p className="text-sm text-slate-600 mb-4">
                  10 ans d&apos;expérience en assurance et prévoyance
                </p>
                <div className="text-sm text-slate-500">
                  <p>{t('conseils_specialiste_assurance')}</p>
                  <p>{t('conseils_languages_francais_anglais_espagnol')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulaire de prise de rendez-vous */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-lg border border-slate-200"
          >
            <h2 className="text-3xl font-light text-slate-900 mb-8 text-center">{t('conseils_prendre_rendez_vous')}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('conseils_type_conseil_souhaite')}</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">{t('conseils_selectionner_service')}</option>
                  <option value="investissement">{t('conseils_conseil_investissement')}</option>
                  <option value="assurance">{t('conseils_conseil_assurance')}</option>
                  <option value="fiscalite">{t('conseils_conseil_fiscalite')}</option>
                  <option value="epargne">{t('conseils_conseil_epargne')}</option>
                  <option value="premier">Premier contact (découverte)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('conseils_nom_complet')}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('conseils_email')}</label>
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('conseils_telephone')}</label>
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
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('conseils_disponibilite_souhaitee')}</label>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">{t('conseils_selectionner')}</option>
                    <option value="matin">En journée (9h-12h)</option>
                    <option value="apres-midi">En journée (14h-18h)</option>
                    <option value="soir">En soirée (18h-20h)</option>
                    <option value="weekend">{t('conseils_weekend')}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message (optionnel)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Décrivez brièvement vos besoins ou questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-4 rounded-lg hover:bg-blue-800 transition-colors font-medium flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />{t('conseils_prendre_rendez_vous')}</button>
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
              Questions ? Notre équipe de conseillers est à votre disposition
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="inline-flex items-center text-blue-900 hover:text-blue-800">
                <Phone className="w-5 h-5 mr-2" />
                +49 69 123456789
              </Link>
              <Link href="/contact" className="inline-flex items-center text-blue-900 hover:text-blue-800">
                <Mail className="w-5 h-5 mr-2" />
                conseils@continentalbank.eu
              </Link>
              <Link href="/contact" className="inline-flex items-center text-blue-900 hover:text-blue-800">
                <MapPin className="w-5 h-5 mr-2" />{t('conseils_nos_agences')}</Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
