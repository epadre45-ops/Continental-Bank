import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  TrendingUp, 
  Shield, 
  Calculator, 
  FileText, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle, 
  Star,
  Award,
  Users,
  BarChart3,
  Clock,
  Zap,
  Target,
  Eye,
  ThumbsUp,
  TrendingDown,
  AlertCircle
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { submitFormEmail, flattenForEmail } from '../utils/formSubmit';

import { useTranslation } from '../lib/i18n';
export default function Investissement() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    amount: '',
    duration: '',
    type: '',
    name: '',
    email: '',
    phone: ''
  });

  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleData = [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDuration: 2 + Math.random() * 3
    }));
    setParticles(particleData);
  }, []);

  const [showCalculator, setShowCalculator] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        submittedAt: new Date().toISOString(),
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : ''
      };
      await submitFormEmail({
        formName: 'Investissement (lead)',
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

  const calculateReturns = () => {
    const amount = parseFloat(formData.amount) || 0;
    const duration = parseInt(formData.duration) || 1;
    const baseReturn = 0.152; // 15.2% de rendement moyen
    
    let multiplier = 1;
    if (duration >= 5) multiplier = 1.3;
    else if (duration >= 3) multiplier = 1.15;
    
    return {
      annual: amount * baseReturn,
      total: amount * baseReturn * duration * multiplier
    };
  };

  const returns = calculateReturns();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section Ultra Persuasive */}
        <div className="relative h-[700px] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=700&fit=crop&auto=format&q=80"
              alt="Finance et investissement professionnel"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                className="max-w-5xl"
              >
                {/* Badges de confiance */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <Award className="w-4 h-4 text-green-400" />
                    <span className="text-white/90 text-sm font-medium">{t('investissement_meilleur_rendement_2024')}</span>
                  </div>
                  <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-white/90 text-sm font-medium">50,000+ investisseurs</span>
                  </div>
                  <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <Shield className="w-4 h-4 text-yellow-400" />
                    <span className="text-white/90 text-sm font-medium">{t('investissement_capital_garanti')}</span>
                  </div>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-light text-white mb-6 leading-tight">{t('investissement_investissez_avec')}<span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">{t('investissement_intelligence')}</span>
                </h1>
                
                <p className="text-xl text-white/80 max-w-4xl mb-8 leading-relaxed">{t('investissement_jusqu')}<span className="font-bold text-white">15.2% de rendement annuel</span>{t('investissement_avec_nos_strategies')}</p>
                
                {/* Stats principales */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">15.2%</div>
                    <div className="text-white/70 text-sm">{t('investissement_rendement_moyen_annuel')}</div>
                    <div className="flex items-center mt-2 text-green-400 text-sm">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      +2.3% vs marché
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">€2.8M</div>
                    <div className="text-white/70 text-sm">{t('investissement_actifs_sous_gestion')}</div>
                    <div className="flex items-center mt-2 text-green-400 text-sm">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      +45% cette année
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <div className="text-4xl font-bold text-white mb-2">98%</div>
                    <div className="text-white/70 text-sm">{t('investissement_clients_satisfaits')}</div>
                    <div className="flex items-center mt-2 text-green-400 text-sm">
                      <Star className="w-4 h-4 mr-1" />
                      4.9/5 note moyenne
                    </div>
                  </div>
                </div>

                {/* CTA principal */}
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Link 
                    href="/pret"
                    className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-2xl hover:shadow-3xl"
                  >
                    <span className="relative z-10 flex items-center">
                      <Target className="w-5 h-5 mr-2" />{t('investissement_investir_maintenant')}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Target className="w-5 h-5 mr-2" />{t('investissement_investir_maintenant')}</span>
                  </Link>
                  <button 
                    onClick={() => {
                      setShowCalculator(!showCalculator);
                      if (!showCalculator) {
                        setTimeout(() => {
                          document.getElementById('calculator-section')?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }
                    }}
                    className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center"
                  >
                    <Calculator className="w-5 h-5 mr-2" />{t('investissement_calculateur_rendement')}</button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Section Preuves Sociales - Témoignages Premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="container mx-auto px-6 mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-slate-900 mb-4">{t('investissement_ils_ont')}<span className="font-semibold text-blue-900">{t('investissement_reussi')}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('investissement_decouvrez_les_temoignages_nos')}</p>
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
                  <span className="text-white font-bold text-lg">ML</span>
                </div>
                <div className="flex-1">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-4">
                    "J'ai investi €50,000 et généré un rendement de 18.3% la première année. 
                    Le service client est exceptionnel et les stratégies sont vraiment performantes."
                  </p>
                  <div className="text-right">
                    <p className="font-semibold text-slate-900">{t('investissement_marie_laurent')}</p>
                    <p className="text-sm text-slate-600">{t('investissement_ingenieure_lyon')}</p>
                    <div className="flex items-center justify-end mt-2 text-green-600 text-sm">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      +€9,150 cette année
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
                  <span className="text-white font-bold text-lg">JD</span>
                </div>
                <div className="flex-1">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-4">
                    "Les fonds sécurisés m'ont permis de protéger mon capital tout en générant 
                    un revenu stable. Exactement ce que je cherchais pour ma retraite."
                  </p>
                  <div className="text-right">
                    <p className="font-semibold text-slate-900">{t('investissement_jean_dubois')}</p>
                    <p className="text-sm text-slate-600">{t('investissement_directeur_financier_paris')}</p>
                    <div className="flex items-center justify-end mt-2 text-green-600 text-sm">
                      <Shield className="w-4 h-4 mr-1" />{t('investissement_capital_100_garanti')}</div>
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
                  <span className="text-white font-bold text-lg">SC</span>
                </div>
                <div className="flex-1">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-4">
                    "La planification patrimoniale m'a permis d'optimiser ma fiscalité et 
                    d'atteindre mes objectifs 3 ans plus tôt que prévu."
                  </p>
                  <div className="text-right">
                    <p className="font-semibold text-slate-900">{t('investissement_sophie_chen')}</p>
                    <p className="text-sm text-slate-600">{t('investissement_entrepreneure_marseille')}</p>
                    <div className="flex items-center justify-end mt-2 text-purple-600 text-sm">
                      <Zap className="w-4 h-4 mr-1" />{t('investissement_objectifs_atteints')}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Section Comparatif Concurrentiel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-br from-blue-50 to-slate-50 py-20 mb-20"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light text-slate-900 mb-4">{t('investissement_pour_choisir')}<span className="font-semibold text-blue-900">{t('investissement_continental_bank_europe')}</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('investissement_comparez_nos_performances_avec')}</p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                      <th className="px-6 py-4 text-left font-semibold">{t('investissement_critere')}</th>
                      <th className="px-6 py-4 text-center font-semibold">{t('investissement_continental_bank_europe')}</th>
                      <th className="px-6 py-4 text-center font-semibold">{t('investissement_banque_traditionnelle')}</th>
                      <th className="px-6 py-4 text-center font-semibold">{t('investissement_concurrent_direct')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="px-6 py-4 font-medium text-slate-900">{t('investissement_rendement_moyen')}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center">
                          <span className="text-2xl font-bold text-green-600">15.2%</span>
                          <TrendingUp className="w-5 h-5 text-green-600 ml-2" />
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-slate-600">8.5%</td>
                      <td className="px-6 py-4 text-center text-slate-600">12.1%</td>
                    </tr>
                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="px-6 py-4 font-medium text-slate-900">{t('investissement_frais_gestion')}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center">
                          <span className="text-xl font-bold text-green-600">0.8%</span>
                          <ThumbsUp className="w-5 h-5 text-green-600 ml-2" />
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-slate-600">2.5%</td>
                      <td className="px-6 py-4 text-center text-slate-600">1.8%</td>
                    </tr>
                    <tr className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="px-6 py-4 font-medium text-slate-900">{t('investissement_delai_retrait')}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center">
                          <span className="text-xl font-bold text-green-600">24h</span>
                          <Clock className="w-5 h-5 text-green-600 ml-2" />
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-slate-600">5-7 jours</td>
                      <td className="px-6 py-4 text-center text-slate-600">48-72h</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4 font-medium text-slate-900">{t('investissement_support_client')}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center">
                          <span className="text-xl font-bold text-green-600">24/7</span>
                          <Users className="w-5 h-5 text-green-600 ml-2" />
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-slate-600">9h-17h</td>
                      <td className="px-6 py-4 text-center text-slate-600">{t('investissement_email_uniquement')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section Calculatrice Interactive */}
        {showCalculator && (
          <motion.div
            id="calculator-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-6 mb-20"
          >
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-light text-slate-900 mb-4">{t('investissement_calculateur')}<span className="font-semibold text-green-900">{t('investissement_rendement')}</span>
                </h3>
                <p className="text-slate-600">{t('investissement_estimez_vos_gains_potentiels')}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">{t('investissement_montant_investir')}</label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="€10 000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">{t('investissement_duree_investissement')}</label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="1">1 an</option>
                    <option value="3">3 ans</option>
                    <option value="5">5 ans</option>
                    <option value="10">10 ans</option>
                  </select>
                </div>
              </div>
              
              {formData.amount && (
                <div className="bg-white rounded-2xl p-6 border border-green-200">
                  <h4 className="text-xl font-semibold text-slate-900 mb-4">{t('investissement_vos_gains_estimes')}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-slate-600 mb-1">{t('investissement_rendement_annuel')}</p>
                      <p className="text-3xl font-bold text-green-600">
                        €{returns.annual.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">{t('investissement_rendement_total')}</p>
                      <p className="text-3xl font-bold text-green-600">
                        €{returns.total.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Section Solutions d'Investissement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="container mx-auto px-6 mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-slate-900 mb-4">{t('investissement_nos_solutions')}<span className="font-semibold text-blue-900">{t('investissement_premium')}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('investissement_des_strategies_investissement_concu')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-blue-200 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-5">
                <img 
                  src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop&auto=format&q=60"
                  alt="Actions et ETF"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">{t('investissement_actions_etf')}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{t('investissement_investissez_dans_les_marches')}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />{t('investissement_acces_aux_marches_mondiaux')}</div>
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />{t('investissement_frais_gestion_competitifs')}</div>
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />{t('investissement_analyse_temps_reel')}</div>
                </div>
                <div className="flex items-center justify-between">
                  <Link href="/pret" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-2 transition-all duration-300">{t('investissement_decouvrir')}<ArrowUpRight className="w-4 h-4 ml-2" />
                  </Link>
                  <div className="text-green-600 font-bold">+18.3%</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-green-200 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-5">
                <img 
                  src="https://images.unsplash.com/photo-1454165804607-cab6c0a9b9b6?w=400&h=300&fit=crop&auto=format&q=60"
                  alt="Fonds sécurisés"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">{t('investissement_fonds_securises')}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{t('investissement_solutions_faible_risque_pour')}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />{t('investissement_capital_garanti')}</div>
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />{t('investissement_rendement_stable')}</div>
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />{t('investissement_assurance_integree')}</div>
                </div>
                <div className="flex items-center justify-between">
                  <Link href="/pret" className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold group-hover:translate-x-2 transition-all duration-300">{t('investissement_decouvrir')}<ArrowUpRight className="w-4 h-4 ml-2" />
                  </Link>
                  <div className="text-green-600 font-bold">+12.8%</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-purple-200 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-5">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&auto=format&q=60"
                  alt="Planification patrimoniale"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">{t('investissement_planification')}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{t('investissement_strategies_personnalisees_pour_atte')}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />{t('investissement_conseil_personnalise')}</div>
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />{t('investissement_optimisation_fiscale')}</div>
                  <div className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />{t('investissement_suivi_continu')}</div>
                </div>
                <div className="flex items-center justify-between">
                  <Link href="/pret" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold group-hover:translate-x-2 transition-all duration-300">{t('investissement_decouvrir')}<ArrowUpRight className="w-4 h-4 ml-2" />
                  </Link>
                  <div className="text-green-600 font-bold">+14.5%</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Section FAQ - Réponses aux Objections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="container mx-auto px-6 mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-slate-900 mb-4">{t('investissement_questions')}<span className="font-semibold text-blue-900">{t('investissement_frequentes')}</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('investissement_tout_que_vous_devez')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <div className="flex items-start space-x-3 mb-4">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-slate-900">Quel est le montant minimum d'investissement ?</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Le montant minimum est de €1,000. Cependant, nous recommandons un investissement 
                initial d'au moins €10,000 pour optimiser les rendements et réduire l'impact des frais.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <div className="flex items-start space-x-3 mb-4">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-slate-900">Comment puis-je retirer mes fonds ?</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Les retraits sont possibles à tout moment avec un délai de traitement de 24h ouvrées. 
                Vous pouvez effectuer des retraits partiels ou complets selon vos besoins.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <div className="flex items-start space-x-3 mb-4">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-slate-900">Mes investissements sont-ils sécurisés ?</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Oui, tous nos investissements sont protégés par le Fonds de Garantie des Dépôts 
                jusqu'à €100,000 par personne. De plus, nous sommes régulés par l'Autorité des Marchés Financiers.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <div className="flex items-start space-x-3 mb-4">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-slate-900">Quelles sont les fiscalités applicables ?</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Les plus-values sont soumises à l'impôt sur le revenu après un abattement annuel. 
                Notre équipe fiscale vous accompagne dans l'optimisation légale de votre imposition.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Section CTA Final Stratégique */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="container mx-auto px-6"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full">
                {particles.map((particle) => (
                  <div
                    key={particle.id}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${particle.left}%`,
                      top: `${particle.top}%`,
                      animation: `pulse ${particle.animationDuration}s infinite`
                    }}
                  />
                ))}
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="mb-8">
                <h2 className="text-4xl font-light text-white mb-4">{t('investissement_pret')}<span className="font-semibold">{t('investissement_maximiser')}</span> Votre Patrimoine ?
                </h2>
                <p className="text-xl text-white/80 max-w-2xl mx-auto">{t('investissement_rejoignez_les_milliers_investisseur')}</p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link 
                  href="/pret"
                  className="group relative bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 shadow-2xl hover:shadow-3xl"
                >
                  <span className="relative z-10 flex items-center">
                    <Target className="w-5 h-5 mr-2" />{t('investissement_investir_maintenant')}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Target className="w-5 h-5 mr-2" />{t('investissement_investir_maintenant')}</span>
                </Link>
                
                <div className="flex items-center space-x-6">
                  <div className="flex items-center text-white/90">
                    <Clock className="w-5 h-5 mr-2" />
                    <span className="text-sm">{t('investissement_decision_24h')}</span>
                  </div>
                  <div className="flex items-center text-white/90">
                    <Shield className="w-5 h-5 mr-2" />
                    <span className="text-sm">100% sécurisé</span>
                  </div>
                  <div className="flex items-center text-white/90">
                    <Award className="w-5 h-5 mr-2" />
                    <span className="text-sm">{t('investissement_meilleur_rendement')}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-white/70 text-sm">
                <p>{t('investissement_plus_000_clients_nous')}</p>
                <p className="mt-2">{t('investissement_offre_limitee_agissez_maintenant')}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="container mx-auto px-6 mt-16"
        >
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6 text-center">
              Besoin d'un Conseil Personnalisé ?
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                  <div className="flex items-center text-slate-700">
                <a href="tel:+4969123456789" className="flex items-center text-slate-700 hover:text-blue-600 transition-colors">
                  <Phone className="w-5 h-5 mr-2 text-blue-600" />
                  <span>+49 69 123456789</span>
                </a>
              </div>
              <div className="flex items-center text-slate-700">
                <a href="mailto:investissement@continentalbank.eu" className="flex items-center text-slate-700 hover:text-blue-600 transition-colors">
                  <Mail className="w-5 h-5 mr-2 text-blue-600" />
                  <span>investissement@continentalbank.eu</span>
                </a>
              </div>
              <div className="flex items-center text-slate-700">
                <Link href="/contact" className="flex items-center text-slate-700 hover:text-blue-600 transition-colors">
                  <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                  <span>{t('investissement_nos_agences')}</span>
                </Link>
              </div>
            </div>
            <p className="text-sm text-slate-600 mt-4 text-center">{t('investissement_experts_disponibles_votre_succes')}</p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
