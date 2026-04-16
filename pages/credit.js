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
  AlertCircle
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { submitFormEmail, flattenForEmail } from '../utils/formSubmit';

import { useTranslation } from '../lib/i18n';
export default function Credit() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    amount: '',
    duration: '',
    type: '',
    name: '',
    email: '',
    phone: '',
    income: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      // Créer la demande de crédit via API backend sécurisée
      const creditData = {
        ...formData,
        submittedAt: new Date().toISOString(),
        userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'SSR'
      };

      const creditResponse = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'credit', ...creditData })
      });

      if (!creditResponse.ok) {
        const errorData = await creditResponse.json();
        throw new Error(errorData.message || 'Failed to create credit application');
      }

      const { application: newApplication } = await creditResponse.json();

      // ENVOYER L'EMAIL avec toutes les données
      await submitFormEmail({
        formName: 'Credit Application',
        payload: flattenForEmail({
          ...creditData,
          applicationId: newApplication.id
        }),
        replyTo: formData.email
      });

      // Afficher le succès et rediriger
      alert(`Your credit application was submitted. Reference: ${newApplication.id}`);
      
      // Réinitialiser le formulaire
      setFormData({
        amount: '',
        duration: '',
        type: '',
        name: '',
        email: '',
        phone: '',
        income: ''
      });
      
      // Rediriger vers la page de prêt
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section Premium */}
        <div className="relative h-[600px] overflow-hidden">
          {/* Image de fond */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=600&fit=crop&auto=format&q=80"
              alt="Finance et crédit professionnel"
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
                    <span className="text-white/90 text-sm font-medium">{t('credit_meilleurs_taux_2024')}</span>
                  </div>
                  <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-white/90 text-sm font-medium">150,000+ clients</span>
                  </div>
                  <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <Shield className="w-4 h-4 text-yellow-400" />
                    <span className="text-white/90 text-sm font-medium">{t('credit_approbation_garantie')}</span>
                  </div>
                </div>
                
                <h1 className="text-6xl lg:text-7xl font-light text-white mb-6 leading-tight">{t('credit_solutions')}<span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">{t('credit_credit')}</span>
                </h1>
                
                <p className="text-xl text-white/80 max-w-3xl mb-8 leading-relaxed">{t('credit_jusqu')}<span className="font-bold text-white">{t('credit_500_000')}</span> en <span className="font-bold text-white">24h</span>{t('credit_avec_nos_solutions')}</p>
                
                {/* Stats principales du Hero */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">2.8%</div>
                    <div className="text-white/70 text-sm">{t('credit_taux_moyen')}</div>
                    <div className="flex items-center mt-2 text-green-400 text-sm">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      -0.5% vs marché
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">95%</div>
                    <div className="text-white/70 text-sm">{t('credit_taux_approbation')}</div>
                    <div className="flex items-center mt-2 text-green-400 text-sm">
                      <CheckCircle className="w-4 h-4 mr-1" />{t('credit_garanti_48h')}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">{t('credit_500k')}</div>
                    <div className="text-white/70 text-sm">{t('credit_montant_maximum')}</div>
                    <div className="flex items-center mt-2 text-green-400 text-sm">
                      <Zap className="w-4 h-4 mr-1" />{t('credit_sans_justificatif')}</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Link 
                    href="/pret"
                    className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-2xl hover:shadow-3xl"
                  >
                    <span className="relative z-10 flex items-center">
                      <Target className="w-5 h-5 mr-2" />{t('credit_demander_credit')}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Target className="w-5 h-5 mr-2" />{t('credit_demander_credit')}</span>
                  </Link>
                  <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center">
                    <Calculator className="w-5 h-5 mr-2" />{t('credit_simuler_gratuitement')}</button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Section Preuves Sociales - Témoignages Crédit */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="container mx-auto px-6 mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-slate-900 mb-4">{t('credit_ils_ont')}<span className="font-semibold text-blue-900">{t('credit_obtenu_leur_credit')}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('credit_decouvrez_les_temoignages_nos')}</p>
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
                  <span className="text-white font-bold text-lg">LM</span>
                </div>
                <div className="flex-1">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-4">
                    "J'ai obtenu mon prêt immobilier en seulement 48h avec un taux 
                    incroyable de 2.3%. Le service est exceptionnel !"
                  </p>
                  <div className="text-right">
                    <p className="font-semibold text-slate-900">{t('credit_lucas_martin')}</p>
                    <p className="text-sm text-slate-600">{t('credit_architecte_lyon')}</p>
                    <div className="flex items-center justify-end mt-2 text-green-600 text-sm">
                      <TrendingUp className="w-4 h-4 mr-1" />{t('credit_pret_250_000_obtenu')}</div>
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
                  <span className="text-white font-bold text-lg">SB</span>
                </div>
                <div className="flex-1">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-4">
                    "Le crédit auto m'a permis d'acheter ma voiture de rêve. 
                    Processus simple et rapide, je recommande vivement !"
                  </p>
                  <div className="text-right">
                    <p className="font-semibold text-slate-900">{t('credit_sophie_bernard')}</p>
                    <p className="text-sm text-slate-600">{t('credit_consultante_paris')}</p>
                    <div className="flex items-center justify-end mt-2 text-green-600 text-sm">
                      <Car className="w-4 h-4 mr-1" />{t('credit_tesla_model')}</div>
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
                  <span className="text-white font-bold text-lg">TD</span>
                </div>
                <div className="flex-1">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-4">
                    "Le prêt travaux a transformé ma maison. Taux compétitif 
                    et accompagnement parfait du début à la fin."
                  </p>
                  <div className="text-right">
                    <p className="font-semibold text-slate-900">{t('credit_thomas_dubois')}</p>
                    <p className="text-sm text-slate-600">{t('credit_chef_entreprise_marseille')}</p>
                    <div className="flex items-center justify-end mt-2 text-purple-600 text-sm">
                      <Wrench className="w-4 h-4 mr-1" />{t('credit_renovation_complete')}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Types de crédit Premium */}
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-slate-900 mb-4">{t('credit_nos_solutions')}<span className="font-semibold text-blue-900">{t('credit_financieres')}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('credit_des_credits_adaptes_chaque')}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-blue-200 overflow-hidden"
            >
              {/* Image de fond */}
              <div className="absolute inset-0 opacity-5">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&auto=format&q=60"
                  alt="Crédit immobilier"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{t('credit_immobilier')}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{t('credit_prets_pour_apos_achat')}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{t('credit_taux_des')}</span>
                    <span className="font-bold text-blue-600">2.5%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{t('credit_duree')}</span>
                    <span className="font-bold text-slate-900">{t('credit_jusqu_ans')}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{t('credit_apport')}</span>
                    <span className="font-bold text-slate-900">{t('credit_des')}</span>
                  </div>
                </div>
                <Link href="/pret" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-2 transition-all duration-300">{t('credit_demander_pret')}<ArrowUpRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-green-200 overflow-hidden"
            >
              {/* Image de fond */}
              <div className="absolute inset-0 opacity-5">
                <img 
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop&auto=format&q=60"
                  alt="Crédit auto"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{t('credit_auto')}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{t('credit_financement_pour_apos_achat')}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{t('credit_taux_des')}</span>
                    <span className="font-bold text-green-600">3.5%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{t('credit_duree')}</span>
                    <span className="font-bold text-slate-900">{t('credit_jusqu_ans')}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{t('credit_montant')}</span>
                    <span className="font-bold text-slate-900">{t('credit_jusqu_75k')}</span>
                  </div>
                </div>
                <Link href="/pret" className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold group-hover:translate-x-2 transition-all duration-300">{t('credit_demander_pret')}<ArrowUpRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-purple-200 overflow-hidden"
            >
              {/* Image de fond */}
              <div className="absolute inset-0 opacity-5">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&auto=format&q=60"
                  alt="Crédit travaux"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{t('credit_travaux')}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{t('credit_financez_vos_projets_renovation')}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{t('credit_taux_des')}</span>
                    <span className="font-bold text-purple-600">2.9%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{t('credit_duree')}</span>
                    <span className="font-bold text-slate-900">{t('credit_jusqu_ans')}</span>
                  </div>
                </div>
                <Link href="/pret" className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-semibold group-hover:translate-x-2 transition-all duration-300">{t('credit_demander_pret')}<ArrowUpRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-orange-200 overflow-hidden"
            >
              {/* Image de fond */}
              <div className="absolute inset-0 opacity-5">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&auto=format&q=60"
                  alt="Crédit personnel"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{t('credit_personnel')}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{t('credit_pret_personnel_pour_vos')}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{t('credit_taux_des')}</span>
                    <span className="font-bold text-orange-600">4.2%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{t('credit_duree')}</span>
                    <span className="font-bold text-slate-900">{t('credit_jusqu_ans')}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{t('credit_montant')}</span>
                    <span className="font-bold text-slate-900">{t('credit_jusqu_50k')}</span>
                  </div>
                </div>
                <Link href="/pret-personnel" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold group-hover:translate-x-2 transition-all duration-300">{t('credit_savoir_plus')}<ArrowUpRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>

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
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">{t('credit_taux_competitifs')}</h3>
                <p className="text-slate-600">{t('credit_des_taux_apos_interet')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">{t('credit_securite')}</h3>
                <p className="text-slate-600">{t('credit_protection_complete_assurance_emprunt')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">{t('credit_flexibilite')}</h3>
                <p className="text-slate-600">{t('credit_durees_modalites_adaptees_votre')}</p>
              </div>
            </div>
          </motion.div>

          {/* Formulaire de demande */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-lg border border-slate-200"
          >
            <h2 className="text-3xl font-light text-slate-900 mb-8 text-center">{t('credit_demande_credit')}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('credit_montant_souhaite')}</label>
                  <input
                    type="text"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="€5 000 - €500 000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('credit_duree')}</label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">{t('credit_selectionner')}</option>
                    <option value="12">12 mois</option>
                    <option value="24">24 mois</option>
                    <option value="36">36 mois</option>
                    <option value="48">48 mois</option>
                    <option value="60">60 mois</option>
                    <option value="84">84 mois</option>
                    <option value="120">120 mois</option>
                    <option value="240">240 mois</option>
                    <option value="300">300 mois</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('credit_type_credit')}</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">{t('credit_selectionner')}</option>
                  <option value="immobilier">{t('credit_immobilier')}</option>
                  <option value="auto">{t('credit_auto')}</option>
                  <option value="travaux">{t('credit_travaux')}</option>
                  <option value="personnel">{t('credit_personnel')}</option>
                  <option value="rachat">{t('credit_rachat_credit')}</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('credit_revenus_mensuels')}</label>
                  <input
                    type="text"
                    name="income"
                    value={formData.income}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="€3 000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('credit_nom_complet')}</label>
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('credit_email')}</label>
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
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('credit_telephone')}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-4 rounded-lg hover:bg-blue-800 transition-colors font-medium"
              >{t('credit_simuler_demande')}</button>
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
              Des questions ? Nos conseillers sont à votre disposition
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="inline-flex items-center text-blue-900 hover:text-blue-800">
                <Phone className="w-5 h-5 mr-2" />
                +49 69 123456789
              </Link>
              <Link href="/contact" className="inline-flex items-center text-blue-900 hover:text-blue-800">
                <Mail className="w-5 h-5 mr-2" />
                credit@continentalbank.eu
              </Link>
              <Link href="/contact" className="inline-flex items-center text-blue-900 hover:text-blue-800">
                <MapPin className="w-5 h-5 mr-2" />{t('credit_nos_agences')}</Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
