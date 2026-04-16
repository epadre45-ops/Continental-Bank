import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  Building, 
  TrendingUp, 
  Globe, 
  FileText, 
  Phone, 
  Mail, 
  MapPin, 
  Calculator, 
  Target,
  Award,
  Users,
  Star,
  Clock,
  CheckCircle,
  BarChart3,
  Zap,
  AlertCircle,
  Briefcase,
  Shield
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { submitFormEmail, flattenForEmail } from '../utils/formSubmit';

import { useTranslation } from '../lib/i18n';
export default function Financement() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    amount: '',
    sector: '',
    stage: '',
    name: '',
    email: '',
    phone: '',
    company: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        submittedAt: new Date().toISOString(),
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : ''
      };
      await submitFormEmail({
        formName: 'Financement (lead)',
        payload: flattenForEmail(payload),
        replyTo: formData.email
      });
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
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&h=500&fit=crop&auto=format&q=80"
              alt="Business financing and growth"
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
                    <span className="text-white/90 text-sm font-medium">{t('financement_meilleur_financement_2024')}</span>
                  </div>
                  <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-white/90 text-sm font-medium">1,200+ entreprises</span>
                  </div>
                  <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <Shield className="w-4 h-4 text-yellow-400" />
                    <span className="text-white/90 text-sm font-medium">{t('financement_approbation_garantie')}</span>
                  </div>
                </div>
                
                <h1 className="text-6xl lg:text-7xl font-light text-white mb-6 leading-tight">{t('financement_solutions')}<span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">{t('financement_financement')}</span>
                </h1>
                
                <p className="text-xl text-white/80 max-w-3xl mb-8 leading-relaxed">{t('financement_jusqu')}<span className="font-bold text-white">{t('financement_10m')}</span> en <span className="font-bold text-white">72h</span>{t('financement_pour_financer_croi')}</p>
                
                {/* Stats principales du Hero */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">{t('financement_500m')}</div>
                    <div className="text-white/70 text-sm">{t('financement_finances_cette_annee')}</div>
                    <div className="flex items-center mt-2 text-green-400 text-sm">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      +35% vs 2023
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">92%</div>
                    <div className="text-white/70 text-sm">{t('financement_taux_satisfaction')}</div>
                    <div className="flex items-center mt-2 text-green-400 text-sm">
                      <CheckCircle className="w-4 h-4 mr-1" />{t('financement_entreprises_actives')}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">{t('financement_10m')}</div>
                    <div className="text-white/70 text-sm">{t('financement_financement_maximum')}</div>
                    <div className="flex items-center mt-2 text-green-400 text-sm">
                      <Zap className="w-4 h-4 mr-1" />{t('financement_sans_garantie')}</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Link 
                    href="/pret"
                    className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-2xl hover:shadow-3xl"
                  >
                    <span className="relative z-10 flex items-center">
                      <Target className="w-5 h-5 mr-2" />{t('financement_obtenir_financement')}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Target className="w-5 h-5 mr-2" />{t('financement_obtenir_financement')}</span>
                  </Link>
                  <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center">
                    <Calculator className="w-5 h-5 mr-2" />{t('financement_calculer_gratuitement')}</button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Section Preuves Sociales - Témoignages Entreprises */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="container mx-auto px-6 mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-slate-900 mb-4">{t('financement_elles_ont')}<span className="font-semibold text-blue-900">{t('financement_grandi')}</span>{t('financement_avec_nous')}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('financement_decouvrez_les_entreprises_qui')}</p>
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
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-4">
                    "Le financement de €5M nous a permis d'ouvrir 3 nouvelles usines 
                    et de doubler notre chiffre d'affaires en 18 mois."
                  </p>
                  <div className="text-right">
                    <p className="font-semibold text-slate-900">{t('financement_tech_industries')}</p>
                    <p className="text-sm text-slate-600">{t('financement_manufacture_munich')}</p>
                    <div className="flex items-center justify-end mt-2 text-green-600 text-sm">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      +200% croissance
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
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-4">
                    "Grâce au financement rapide, nous avons pu nous implanter 
                    dans 15 pays européens en seulement 2 ans."
                  </p>
                  <div className="text-right">
                    <p className="font-semibold text-slate-900">{t('financement_global_solutions_gmbh')}</p>
                    <p className="text-sm text-slate-600">{t('financement_tech_berlin')}</p>
                    <div className="flex items-center justify-end mt-2 text-green-600 text-sm">
                      <Globe className="w-4 h-4 mr-1" />
                      15 pays
                    </div>
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
                  <Building className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-4">
                    "Le financement croissance a transformé notre startup 
                    en leader du marché avec 500 employés aujourd'hui."
                  </p>
                  <div className="text-right">
                    <p className="font-semibold text-slate-900">{t('financement_innovatech_sas')}</p>
                    <p className="text-sm text-slate-600">{t('financement_software_paris')}</p>
                    <div className="flex items-center justify-end mt-2 text-purple-600 text-sm">
                      <Users className="w-4 h-4 mr-1" />
                      500 employés
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Section Nos Réalisations - Mini-Héro avec Images de Projets */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="container mx-auto px-6 mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-slate-900 mb-4">{t('financement_nos')}<span className="font-semibold text-blue-900">{t('financement_realisations')}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('financement_decouvrez_les_projets_que')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Projet 1 - Usine Manufacture */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Image de fond du mini-héro */}
              <div className="relative h-[300px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop&auto=format&q=80"
                  alt="Usine de manufacture moderne"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
                
                {/* Contenu superposé */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-green-400 text-sm font-medium">{t('financement_projet_realise')}</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{t('financement_tech_industries')}</h3>
                  <p className="text-white/80 mb-4">{t('financement_extension_usine_finances')}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-white/70">3 nouvelles usines</span>
                      <span className="text-white/70">•</span>
                      <span className="text-white/70">+200% croissance</span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Projet 2 - Expansion Internationale */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Image de fond du mini-héro */}
              <div className="relative h-[300px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=300&fit=crop&auto=format&q=80"
                  alt="Expansion internationale entreprise tech"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
                
                {/* Contenu superposé */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-blue-400 text-sm font-medium">{t('financement_expansion')}</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{t('financement_global_solutions_gmbh')}</h3>
                  <p className="text-white/80 mb-4">{t('financement_international_finances')}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-white/70">15 pays</span>
                      <span className="text-white/70">•</span>
                      <span className="text-white/70">2 ans</span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Section Notre Équipe - Mini-Héro avec Photos d'Équipe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="container mx-auto px-6 mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-slate-900 mb-4">{t('financement_nos')}<span className="font-semibold text-blue-900">{t('financement_experts')}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('financement_une_equipe_dediee_votre')}</p>
          </div>
          
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl mb-12">
            {/* Image de fond du mini-héro */}
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb46f83f274c?w=1200&h=400&fit=crop&auto=format&q=80"
              alt="Équipe d'experts financiers en réunion"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-transparent"></div>
            
            {/* Contenu superposé */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="max-w-2xl"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-white/90 text-sm font-medium">25+ Experts Senior</div>
                  </div>
                  
                  <h3 className="text-4xl font-light text-white mb-4">{t('financement_une_expertise')}<span className="font-semibold">{t('financement_europeenne')}</span>
                  </h3>
                  
                  <p className="text-white/80 text-lg mb-6">{t('financement_nos_specialistes_vous_accompagnent')}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">15+</div>
                      <div className="text-white/70 text-sm">{t('financement_ans_experience')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">92%</div>
                      <div className="text-white/70 text-sm">{t('financement_taux_succes')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">24/7</div>
                      <div className="text-white/70 text-sm">{t('financement_support')}</div>
                    </div>
                  </div>
                  
                  <Link 
                    href="/contact"
                    className="inline-flex items-center space-x-2 bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300"
                  >
                    <span>{t('financement_rencontrer_equipe')}</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Photos individuelles des experts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&auto=format&q=80"
                  alt="Expert financier senior"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold text-slate-900">Dr. Michael Weber</h4>
              <p className="text-sm text-slate-600 mb-2">{t('financement_directeur_financement')}</p>
              <p className="text-xs text-slate-500">20+ ans expérience</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&auto=format&q=80"
                  alt="Experte en financement croissance"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold text-slate-900">{t('financement_sophie_martin')}</h4>
              <p className="text-sm text-slate-600 mb-2">{t('financement_experte_croissance')}</p>
              <p className="text-xs text-slate-500">15+ ans expérience</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&auto=format&q=80"
                  alt="Expert en financement international"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold text-slate-900">{t('financement_jean_dubois')}</h4>
              <p className="text-sm text-slate-600 mb-2">{t('financement_expert_international')}</p>
              <p className="text-xs text-slate-500">12+ ans expérience</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Types de financement Premium */}
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-slate-900 mb-4">{t('financement_nos_solutions')}<span className="font-semibold text-blue-900">{t('financement_entreprises')}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('financement_des_financements_adaptes_chaque')}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-blue-200 overflow-hidden"
            >
              {/* Image de fond */}
              <div className="absolute inset-0 opacity-5">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf7f?w=400&h=300&fit=crop&auto=format&q=60"
                  alt="Création d'entreprise"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{t('financement_creation_apos_entreprise')}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{t('financement_financement_pour_lancement_votre')}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{t('financement_montant')}</span>
                    <span className="font-bold text-blue-600">{t('financement_jusqu_50k')}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{t('financement_taux')}</span>
                    <span className="font-bold text-slate-900">Dès 3.2%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{t('financement_duree')}</span>
                    <span className="font-bold text-slate-900">{t('financement_jusqu_ans')}</span>
                  </div>
                </div>
                <Link href="/pret" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-2 transition-all duration-300">{t('financement_obtenir_financement')}<ArrowUpRight className="w-4 h-4 ml-2" />
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
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format&q=60"
                  alt="Expansion d'entreprise"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{t('financement_expansion')}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{t('financement_soutien_croissance_developpem')}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{t('financement_montant')}</span>
                    <span className="font-bold text-green-600">{t('financement_jusqu_500k')}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{t('financement_taux')}</span>
                    <span className="font-bold text-slate-900">Dès 2.8%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{t('financement_duree')}</span>
                    <span className="font-bold text-slate-900">{t('financement_jusqu_ans')}</span>
                  </div>
                </div>
                <Link href="/pret" className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold group-hover:translate-x-2 transition-all duration-300">{t('financement_obtenir_financement')}<ArrowUpRight className="w-4 h-4 ml-2" />
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
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&auto=format&q=60"
                  alt="Financement international"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{t('financement_international')}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{t('financement_solutions_pour_les_projets')}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{t('financement_montant')}</span>
                    <span className="font-bold text-purple-600">{t('financement_jusqu')}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{t('financement_taux')}</span>
                    <span className="font-bold text-slate-900">Dès 2.5%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{t('financement_duree')}</span>
                    <span className="font-bold text-slate-900">{t('financement_jusqu_ans')}</span>
                  </div>
                </div>
                <Link href="/pret" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold group-hover:translate-x-2 transition-all duration-300">{t('financement_developpez_votre_entreprise_internat')}<ArrowUpRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Section Processus de Financement - Mini-Héro avec Infographie */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light text-slate-900 mb-4">{t('financement_notre')}<span className="font-semibold text-blue-900">{t('financement_processus')}</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('financement_parcours_simple_transparent_pour')}</p>
            </div>
            
            <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-xl">
              {/* Image de fond du mini-héro */}
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=300&fit=crop&auto=format&q=80"
                alt="Processus de financement digital et transparent"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-transparent"></div>
              
              {/* Contenu superposé - Processus en 4 étapes */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="text-center text-white"
                    >
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold">1</span>
                      </div>
                      <h3 className="font-semibold mb-2">{t('financement_depot')}</h3>
                      <p className="text-white/80 text-sm">{t('financement_formulaire_ligne_min')}</p>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                      className="text-center text-white"
                    >
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold">2</span>
                      </div>
                      <h3 className="font-semibold mb-2">{t('financement_analyse')}</h3>
                      <p className="text-white/80 text-sm">{t('financement_etude_sous_24h')}</p>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="text-center text-white"
                    >
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold">3</span>
                      </div>
                      <h3 className="font-semibold mb-2">{t('financement_validation')}</h3>
                      <p className="text-white/80 text-sm">{t('financement_approbation_48h')}</p>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.9 }}
                      className="text-center text-white"
                    >
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold">4</span>
                      </div>
                      <h3 className="font-semibold mb-2">{t('financement_versement')}</h3>
                      <p className="text-white/80 text-sm">{t('financement_fonds_72h')}</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secteurs financés */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white p-10 rounded-2xl shadow-lg border border-slate-200 mb-16"
          >
            <h2 className="text-3xl font-light text-slate-900 mb-8 text-center">{t('financement_secteurs_que_nous_financons')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 border border-slate-200 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Building className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-medium text-slate-900 mb-2">{t('financement_industrie')}</h4>
                <p className="text-sm text-slate-600">{t('financement_production_transformation')}</p>
              </div>
              <div className="text-center p-4 border border-slate-200 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-medium text-slate-900 mb-2">{t('financement_technologie')}</h4>
                <p className="text-sm text-slate-600">{t('financement_innovation_digital')}</p>
              </div>
              <div className="text-center p-4 border border-slate-200 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-medium text-slate-900 mb-2">{t('financement_commerce')}</h4>
                <p className="text-sm text-slate-600">{t('financement_distribution_commerce')}</p>
              </div>
              <div className="text-center p-4 border border-slate-200 rounded-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-medium text-slate-900 mb-2">{t('financement_services')}</h4>
                <p className="text-sm text-slate-600">{t('financement_conseil_expertise')}</p>
              </div>
            </div>
          </motion.div>

          {/* Avantages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-2">{t('financement_montants_flexibles')}</h3>
              <p className="text-slate-600">{t('financement_000_millions_pour_tous')}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-2">{t('financement_accompagnement')}</h3>
              <p className="text-slate-600">{t('financement_suivi_personnalise_votre_projet')}</p>
            </div>
          </motion.div>

          {/* CTA Final - Demande de Financement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-lg border border-slate-200 text-center"
          >
            <h2 className="text-3xl font-light text-slate-900 mb-6">
              Prêt à Financer Votre Projet ?
            </h2>
            <p className="text-xl text-slate-600 mb-8">{t('financement_obtenez_jusqu')}<span className="font-bold text-blue-900">{t('financement_10m')}</span> en <span className="font-bold text-blue-900">72h</span>{t('financement_pour_developper_votre_entreprise')}</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <Link 
                href="/pret"
                className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-2xl hover:shadow-3xl"
              >
                <span className="relative z-10 flex items-center">
                  <Target className="w-5 h-5 mr-2" />{t('financement_obtenir_financement')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Target className="w-5 h-5 mr-2" />{t('financement_obtenir_financement')}</span>
              </Link>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center">
                <Phone className="w-5 h-5 mr-2" />{t('financement_appeler_expert')}</button>
            </div>
            
            <p className="text-slate-500 text-sm">{t('financement_sans_engagement_reponse_sous')}</p>
          </motion.div>

          {/* Contact rapide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 text-center"
          >
            <p className="text-slate-600 mb-8">{t('financement_notre_equipe_apos_experts')}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="inline-flex items-center text-blue-900 hover:text-blue-800">
                <Phone className="w-5 h-5 mr-2" />
                +49 69 123456789
              </Link>
              <Link href="/contact" className="inline-flex items-center text-blue-900 hover:text-blue-800">
                <Mail className="w-5 h-5 mr-2" />
                financement@continentalbank.eu
              </Link>
              <Link href="/contact" className="inline-flex items-center text-blue-900 hover:text-blue-800">
                <MapPin className="w-5 h-5 mr-2" />{t('financement_nos_agences')}</Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
