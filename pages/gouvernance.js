import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Award, Target, FileText, TrendingUp, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { submitFormEmail, flattenForEmail } from '../utils/formSubmit';

import { useTranslation } from '../lib/i18n';
export default function Gouvernance() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const governanceData = {
        ...formData,
        submittedAt: new Date().toISOString(),
        userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'SSR'
      };

      await submitFormEmail({
        formName: 'Governance Contact',
        payload: flattenForEmail(governanceData),
        replyTo: formData.email
      });

      const governanceResponse = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'governance', ...governanceData })
      });

      if (!governanceResponse.ok) {
        const errorData = await governanceResponse.json();
        throw new Error(errorData.message || 'Failed to create governance request');
      }

      const { request: newRequest } = await governanceResponse.json();

      // Afficher le succès
      alert(`Votre demande a été soumise avec succès! Référence: ${newRequest.id}`);
      
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section Premium - Pleine Largeur */}
        <div className="relative h-[500px] overflow-hidden mb-16 -mx-0">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=500&fit=crop&auto=format&q=80"
              alt="Gouvernance d'entreprise et conformité"
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
                className="max-w-4xl"
              >
                {/* Badges de confiance pour le Hero */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span className="text-white/90 text-sm font-medium">{t('gouvernance_iso_9001_certifie')}</span>
                  </div>
                  <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <Award className="w-4 h-4 text-blue-400" />
                    <span className="text-white/90 text-sm font-medium">{t('gouvernance_aaa_rating')}</span>
                  </div>
                  <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <Target className="w-4 h-4 text-yellow-400" />
                    <span className="text-white/90 text-sm font-medium">{t('gouvernance_conformite')}</span>
                  </div>
                </div>
                
                <h1 className="text-6xl lg:text-7xl font-light text-white mb-6 leading-tight">{t('gouvernance_gouvernance')}<span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">{t('gouvernance_conformite')}</span>
                </h1>
                
                <p className="text-xl text-white/80 max-w-3xl mb-8 leading-relaxed">{t('gouvernance_une_gouvernance_transparente_une')}</p>
                
                {/* Stats principales du Hero */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">75+</div>
                    <div className="text-white/70 text-sm">{t('gouvernance_ans_gouvernance')}</div>
                    <div className="flex items-center mt-2 text-green-400 text-sm">
                      <TrendingUp className="w-4 h-4 mr-1" />{t('gouvernance_excellence_reconnue')}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">100%</div>
                    <div className="text-white/70 text-sm">{t('gouvernance_conformite_reglementaire')}</div>
                    <div className="flex items-center mt-2 text-green-400 text-sm">
                      <Shield className="w-4 h-4 mr-1" />{t('gouvernance_audits_annuels')}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-white mb-2">15</div>
                    <div className="text-white/70 text-sm">{t('gouvernance_membres_conseil')}</div>
                    <div className="flex items-center mt-2 text-green-400 text-sm">
                      <Users className="w-4 h-4 mr-1" />{t('gouvernance_expertise_internationale')}</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Link 
                    href="/contact"
                    className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-2xl hover:shadow-3xl"
                  >
                    <span className="relative z-10 flex items-center">
                      <Target className="w-5 h-5 mr-2" />{t('gouvernance_contactez_nous')}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Target className="w-5 h-5 mr-2" />{t('gouvernance_contactez_nous')}</span>
                  </Link>
                  <Link href="/legal-documents" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center">
                    <Shield className="w-5 h-5 mr-2" />{t('gouvernance_security_trust_center')}</Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6">
          {/* Section Équipe Dirigeante - Mini-Héro avec Photos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light text-slate-900 mb-4">{t('gouvernance_notre')}<span className="font-semibold text-blue-900">{t('gouvernance_equipe_dirigeante')}</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('gouvernance_des_leaders_engages_pour')}</p>
            </div>
            
            <div className="relative h-[350px] rounded-3xl overflow-hidden shadow-xl mb-12">
              {/* Image de fond du mini-héro */}
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb46f83f274c?w=1200&h=350&fit=crop&auto=format&q=80"
                alt="Conseil d'administration Continental Bank Europe"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
              
              {/* Contenu superposé */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="max-w-2xl"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-white/90 text-sm font-medium">{t('gouvernance_conseil_administration')}</div>
                    </div>
                    
                    <h3 className="text-4xl font-light text-white mb-4">{t('gouvernance_leadership')}<span className="font-semibold">{t('gouvernance_europeen')}</span>
                    </h3>
                    
                    <p className="text-white/80 text-lg mb-6">
                      Notre équipe dirigeante apporte une expertise internationale et une vision 
                      stratégique pour guider Continental Bank Europe vers l'excellence
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">15</div>
                        <div className="text-white/70 text-sm">{t('gouvernance_membres')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">8</div>
                        <div className="text-white/70 text-sm">{t('gouvernance_nationalites')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">120+</div>
                        <div className="text-white/70 text-sm">{t('gouvernance_ans_experience')}</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Photos individuelles des dirigeants */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&auto=format&q=80"
                    alt="Président du Conseil d'Administration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-slate-900 text-lg">Dr. Klaus Weber</h4>
                <p className="text-sm text-blue-600 font-medium mb-2">{t('gouvernance_president_conseil')}</p>
                <p className="text-sm text-slate-600 mb-2">{t('gouvernance_expert_regulation_bancaire_europeenne')}</p>
                <div className="flex items-center justify-center text-xs text-slate-500">
                  <Award className="w-3 h-3 mr-1" />
                  25+ ans expérience
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&auto=format&q=80"
                    alt="Directrice Générale"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-slate-900 text-lg">{t('gouvernance_marie_dubois')}</h4>
                <p className="text-sm text-blue-600 font-medium mb-2">{t('gouvernance_directrice_generale')}</p>
                <p className="text-sm text-slate-600 mb-2">{t('gouvernance_specialiste_conformite_risque')}</p>
                <div className="flex items-center justify-center text-xs text-slate-500">
                  <Shield className="w-3 h-3 mr-1" />
                  20+ ans expérience
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&auto=format&q=80"
                    alt="Directeur Financier"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-slate-900 text-lg">{t('gouvernance_jean_pierre_mueller')}</h4>
                <p className="text-sm text-blue-600 font-medium mb-2">{t('gouvernance_directeur_financier')}</p>
                <p className="text-sm text-slate-600 mb-2">{t('gouvernance_expert_gouvernance_financiere')}</p>
                <div className="flex items-center justify-center text-xs text-slate-500">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  18+ ans expérience
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Section Rapports et Transparence - Mini-Héro avec Documents */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light text-slate-900 mb-4">
                <span className="font-semibold text-blue-900">{t('gouvernance_transparence')}</span>{t('gouvernance_rapports')}</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('gouvernance_notre_engagement_pour_une')}</p>
            </div>
            
            <div className="relative h-[250px] rounded-3xl overflow-hidden shadow-xl">
              {/* Image de fond du mini-héro */}
              <img 
                src="https://images.unsplash.com/photo-1589997639412-3a5a9a9b8c5a?w=1200&h=250&fit=crop&auto=format&q=80"
                alt="Documents financiers et rapports annuels"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-transparent"></div>
              
              {/* Contenu superposé */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-2xl"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-white/90 text-sm font-medium">{t('gouvernance_documentation_publique')}</div>
                    </div>
                    
                    <h3 className="text-3xl font-light text-white mb-4">{t('gouvernance_rapports')}<span className="font-semibold">{t('gouvernance_annuels')}</span>
                    </h3>
                    
                    <p className="text-white/80 text-lg mb-6">{t('gouvernance_accedez_tous_nos_rapports')}</p>
                    
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                      <Link href="/legal-documents" className="bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 flex items-center">
                        <Shield className="w-5 h-5 mr-2" />{t('gouvernance_consulter_notre_architecture_securite')}</Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Principes de Gouvernance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-light text-slate-900 mb-12 text-center">{t('gouvernance_nos_principes')}<span className="font-semibold text-blue-900">{t('gouvernance_gouvernance')}</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-4">{t('gouvernance_integrite')}</h3>
                <p className="text-slate-600">{t('gouvernance_des_standards_ethiques_rigoureux')}</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-4">{t('gouvernance_transparence')}</h3>
                <p className="text-slate-600">{t('gouvernance_une_communication_ouverte_honnete')}</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-4">{t('gouvernance_responsabilite')}</h3>
                <p className="text-slate-600">{t('gouvernance_engages_envers_nos_clients')}</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-4">{t('gouvernance_performance')}</h3>
                <p className="text-slate-600">{t('gouvernance_excellence_operationnelle_service')}</p>
              </div>
            </div>
          </motion.div>

          {/* Contact et Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-lg border border-slate-200"
          >
            <h2 className="text-3xl font-light text-slate-900 mb-8 text-center">
              Questions sur notre Gouvernance ?
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('gouvernance_nom_complet')}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('gouvernance_email')}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('gouvernance_sujet')}</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">{t('gouvernance_selectionner')}</option>
                  <option value="conformite">{t('gouvernance_conformite_reglementaire')}</option>
                  <option value="ethique">{t('gouvernance_questions_ethiques')}</option>
                  <option value="rapport">{t('gouvernance_rapport_annuel')}</option>
                  <option value="gouvernance">{t('gouvernance_gouvernance')}</option>
                  <option value="autre">{t('gouvernance_autre')}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('gouvernance_message')}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Décrivez votre question..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl"
                >{t('gouvernance_envoyer_demande')}</button>
              </div>
            </form>
          </motion.div>

          {/* Contact rapide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-slate-600 mb-8">{t('gouvernance_notre_service_gouvernance_est')}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="inline-flex items-center text-blue-900 hover:text-blue-800">
                <Phone className="w-5 h-5 mr-2" />
                +49 69 123456789
              </Link>
              <Link href="/contact" className="inline-flex items-center text-blue-900 hover:text-blue-800">
                <Mail className="w-5 h-5 mr-2" />
                gouvernance@continentalbank.eu
              </Link>
              <Link href="/contact" className="inline-flex items-center text-blue-900 hover:text-blue-800">
                <MapPin className="w-5 h-5 mr-2" />{t('gouvernance_nos_agences')}</Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
