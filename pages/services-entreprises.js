import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function ServicesEntreprises() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-center mb-8 text-[#0C3B66]"
          >{t('services_entreprises_services_entreprises')}</motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-center text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Une gamme complète de services bancaires conçus pour simplifier votre gestion quotidienne 
            et optimiser votre performance financière. De la cash management à l'internationalisation, 
            nous sommes votre partenaire stratégique pour chaque étape de votre développement.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16 space-y-8"
          >
            {/* Cash Management */}
            <div className="bg-gradient-to-r from-[#F7F7F7] to-white rounded-2xl p-8 shadow-lg">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#0C3B66] rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0C3B66]">{t('services_entreprises_cash_management')}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Optimisez votre trésorerie avec nos solutions de gestion de flux financiers. 
                    Centralisez vos comptes, automatisez vos virements et bénéficiez d'une visibilité 
                    complète sur votre position de trésorerie en temps réel.
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li className="flex items-start">
                      <span className="text-[#F26A21] mr-2">•</span>
                      <span>{t('services_entreprises_notation_concentration_tresor')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F26A21] mr-2">•</span>
                      <span>{t('services_entreprises_previsionnels_optimisation_de')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F26A21] mr-2">•</span>
                      <span>{t('services_entreprises_financement_court_terme_autom')}</span>
                    </li>
                  </ul>
                  <button className="bg-[#0C3B66] text-white px-6 py-2 rounded-lg hover:bg-[#0E3A5D] transition-colors">{t('services_entreprises_decouvrir')}</button>
                </div>
                <div className="bg-gradient-to-br from-[#0C3B66]/10 to-[#F26A21]/10 p-8 rounded-xl">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#0C3B66] mb-2">{t('services_entreprises_text_26')}</div>
                    <div className="text-gray-600">{t('services_entreprises_couts_gestion')}</div>
                    <div className="text-2xl font-bold text-[#F26A21] mt-4 mb-2">+30%</div>
                    <div className="text-gray-600">{t('services_entreprises_efficacite_operationnelle')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Commerce International */}
            <div className="bg-gradient-to-r from-white to-[#F7F7F7] rounded-2xl p-8 shadow-lg">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-gradient-to-br from-[#F26A21]/10 to-[#0C3B66]/10 p-8 rounded-xl">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#F26A21] mb-2">150+</div>
                      <div className="text-gray-600">{t('services_entreprises_pays_partenaires')}</div>
                      <div className="text-2xl font-bold text-[#0C3B66] mt-4 mb-2">24h</div>
                      <div className="text-gray-600">{t('services_entreprises_virements_internationaux')}</div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#F26A21] rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#F26A21]">{t('services_entreprises_commerce_international')}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Développez votre activité à l'international avec notre expertise en commerce 
                    mondial. Crédits documentaires, garanties bancaires et change optimisé 
                    pour sécuriser et fluidifier vos transactions transfrontalières.
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li className="flex items-start">
                      <span className="text-[#0C3B66] mr-2">•</span>
                      <span>{t('services_entreprises_credits_documentaires_stand')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0C3B66] mr-2">•</span>
                      <span>{t('services_entreprises_financement_export_import')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0C3B66] mr-2">•</span>
                      <span>{t('services_entreprises_couverture_change_options_dev')}</span>
                    </li>
                  </ul>
                  <button className="bg-[#F26A21] text-white px-6 py-2 rounded-lg hover:bg-[#E85A1B] transition-colors">{t('services_entreprises_savoir_plus')}</button>
                </div>
              </div>
            </div>

            {/* Solutions Numériques */}
            <div className="bg-gradient-to-r from-[#F7F7F7] to-white rounded-2xl p-8 shadow-lg">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#0C3B66] rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0C3B66]">{t('services_entreprises_solutions_numeriques')}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Transformez votre gestion financière avec nos plateformes digitales de pointe. 
                    API bancaire, automatisation des processus et outils d'analyse pour une 
                    gestion bancaire moderne et efficace.
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li className="flex items-start">
                      <span className="text-[#F26A21] mr-2">•</span>
                      <span>{t('services_entreprises_api_bancaire_pour_integration')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F26A21] mr-2">•</span>
                      <span>{t('services_entreprises_portail_entreprise_multi_util')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#F26A21] mr-2">•</span>
                      <span>{t('services_entreprises_automatisation_des_paiements_')}</span>
                    </li>
                  </ul>
                  <button className="bg-[#0C3B66] text-white px-6 py-2 rounded-lg hover:bg-[#0E3A5D] transition-colors">{t('services_entreprises_acceder_aux_solutions')}</button>
                </div>
                <div className="bg-gradient-to-br from-[#0C3B66]/10 to-[#F26A21]/10 p-8 rounded-xl">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#0C3B66] mb-2">99,9%</div>
                    <div className="text-gray-600">{t('services_entreprises_disponibilite_plateforme')}</div>
                    <div className="text-2xl font-bold text-[#F26A21] mt-4 mb-2">{t('services_entreprises_text_28')}</div>
                    <div className="text-gray-600">{t('services_entreprises_temps_traitement')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conseil Financier */}
            <div className="bg-gradient-to-r from-white to-[#F7F7F7] rounded-2xl p-8 shadow-lg">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-gradient-to-br from-[#F26A21]/10 to-[#0C3B66]/10 p-8 rounded-xl">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#F26A21] mb-2">25+</div>
                      <div className="text-gray-600">{t('services_entreprises_experts_dedies')}</div>
                      <div className="text-2xl font-bold text-[#0C3B66] mt-4 mb-2">24/7</div>
                      <div className="text-gray-600">{t('services_entreprises_support_prioritaire')}</div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#F26A21] rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#F26A21]">{t('services_entreprises_conseil_financier')}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Bénéficiez de l'expertise de nos conseillers spécialisés pour optimiser 
                    votre stratégie financière. Analyse de vos besoins, recommandations 
                    personnalisées et accompagnement dans vos projets de développement.
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li className="flex items-start">
                      <span className="text-[#0C3B66] mr-2">•</span>
                      <span>{t('services_entreprises_diagnostic_financier_personna')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0C3B66] mr-2">•</span>
                      <span>{t('services_entreprises_optimisation_structure_financ')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0C3B66] mr-2">•</span>
                      <span>{t('services_entreprises_strategie_croissance_levees_f')}</span>
                    </li>
                  </ul>
                  <button className="bg-[#F26A21] text-white px-6 py-2 rounded-lg hover:bg-[#E85A1B] transition-colors">{t('services_entreprises_prendre_rendez_vous')}</button>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="bg-[#0C3B66] text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Prêt à transformer votre gestion financière ?</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Contactez nos experts pour une consultation gratuite et découvrez comment nos 
                services peuvent optimiser la performance de votre entreprise.
              </p>
              <button className="bg-[#F26A21] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#E85A1B] transition-colors">{t('services_entreprises_contacter_conseiller')}</button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
