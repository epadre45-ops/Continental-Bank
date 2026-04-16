import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function ComptesPro() {
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
          >{t('comptes_pro_comptes_professionnels')}</motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-center text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Des solutions bancaires professionnelles conçues pour les entrepreneurs, PME et grandes entreprises. 
            Optimisez votre gestion de trésorerie, simplifiez vos transactions et bénéficiez d'un accompagnement 
            expert pour développer votre activité en toute sérénité.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            <div className="bg-gradient-to-br from-[#0C3B66] to-[#0E3A5D] text-white p-8 rounded-2xl shadow-xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">{t('comptes_pro_compte_pro_start')}</h3>
              <div className="text-3xl font-bold text-center mb-4">9,90€/mois</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>{t('comptes_pro_virements_illimites_europe')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>{t('comptes_pro_carte_visa_business_incluse')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>{t('comptes_pro_gestion_ligne')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>{t('comptes_pro_conseiller_dedie')}</span>
                </li>
              </ul>
              <button className="w-full bg-white text-[#0C3B66] py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">{t('comptes_pro_ouvrir_compte')}</button>
            </div>
            
            <div className="bg-gradient-to-br from-[#F26A21] to-[#E85A1B] text-white p-8 rounded-2xl shadow-xl transform scale-105">
              <div className="absolute -top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">{t('comptes_pro_populaire')}</div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">{t('comptes_pro_compte_pro_premium')}</h3>
              <div className="text-3xl font-bold text-center mb-4">19,90€/mois</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>{t('comptes_pro_tous_les_avantages_start')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>2 cartes Visa Business Gold</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>{t('comptes_pro_assurance_professionnelle')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>{t('comptes_pro_services_change_optimises')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>{t('comptes_pro_alertes_personnalisees')}</span>
                </li>
              </ul>
              <button className="w-full bg-white text-[#F26A21] py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">{t('comptes_pro_ouvrir_compte')}</button>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-2xl shadow-xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">{t('comptes_pro_compte_pro_enterprise')}</h3>
              <div className="text-3xl font-bold text-center mb-4">{t('comptes_pro_sur_mesure')}</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>{t('comptes_pro_solution_entierement_personnalisee')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>{t('comptes_pro_cartes_illimitees')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>{t('comptes_pro_api_bancaire_integree')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>{t('comptes_pro_equipe_dediee')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span>{t('comptes_pro_tarifs_preferentiels')}</span>
                </li>
              </ul>
              <button className="w-full bg-white text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">{t('comptes_pro_contacter_expert')}</button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 bg-[#F7F7F7] p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-[#0C3B66] mb-6 text-center">Pourquoi choisir nos comptes professionnels ?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-[#0C3B66]">{t('comptes_pro_avantages_exclusifs')}</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('comptes_pro_taux_change_competitifs_pour')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('comptes_pro_protection_des_fonds_jusqu')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('comptes_pro_outils_gestion_avances_reporting')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('comptes_pro_integration_avec_les_logiciels')}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-[#0C3B66]">{t('comptes_pro_services_inclus')}</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('comptes_pro_application_mobile_professionnelle')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('comptes_pro_gestion_multi_devises')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('comptes_pro_virements_instantanes_sepa')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('comptes_pro_support_client_prioritaire')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
