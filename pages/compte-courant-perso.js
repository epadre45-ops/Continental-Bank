import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function CompteCourantPerso() {
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
          >{t('compte_courant_perso_compte_courant_personnel')}</motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-center text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Le compte bancaire intelligent qui s'adapte à votre style de vie. 
            Gérez vos finances quotidiennes en toute simplicité, bénéficiez d'outils 
            modernes et d'une banque digitale accessible 24/7 pour une expérience 
            bancaire sans compromis.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:border-[#0C3B66]">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">{t('compte_courant_perso_compte_essentiel')}</h3>
              <div className="text-3xl font-bold text-gray-600 text-center mb-4">{t('compte_courant_perso_gratuit')}</div>
              <p className="text-gray-600 text-center mb-6">{t('compte_courant_perso_banque_gratuite_sans_compromi')}</p>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('compte_courant_perso_carte_visa_classic_incluse')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('compte_courant_perso_virements_sepa_illimites')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('compte_courant_perso_application_mobile_complete')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('compte_courant_perso_alertes_sms_gratuites')}</span>
                </li>
              </ul>
              <button className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">{t('compte_courant_perso_ouvrir_compte')}</button>
            </div>
            
            <div className="bg-white border-2 border-[#0C3B66] rounded-2xl p-8 shadow-xl transform scale-105 relative">
              <div className="absolute -top-4 right-4 bg-[#F26A21] text-white px-3 py-1 rounded-full text-sm font-bold">{t('compte_courant_perso_plus_choisi')}</div>
              <div className="w-16 h-16 bg-[#0C3B66] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0C3B66] text-center">{t('compte_courant_perso_compte_smart')}</h3>
              <div className="text-3xl font-bold text-[#F26A21] text-center mb-4">4,90€/mois</div>
              <p className="text-gray-600 text-center mb-6">{t('compte_courant_perso_compte_intelligent_connecte')}</p>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('compte_courant_perso_carte_visa_premium_incluse')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('compte_courant_perso_assurance_voyage_premium')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('compte_courant_perso_budget_assistant')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('compte_courant_perso_cashback_sur_tous_les')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('compte_courant_perso_conseiller_personnel_dedie')}</span>
                </li>
              </ul>
              <button className="w-full bg-[#0C3B66] text-white py-3 rounded-lg font-semibold hover:bg-[#0E3A5D] transition-colors">{t('compte_courant_perso_ouvrir_compte')}</button>
            </div>
            
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:border-[#F26A21]">
              <div className="w-16 h-16 bg-[#F26A21] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">{t('compte_courant_perso_compte_premium')}</h3>
              <div className="text-3xl font-bold text-gray-600 text-center mb-4">9,90€/mois</div>
              <p className="text-gray-600 text-center mb-6">{t('compte_courant_perso_luxe_exclusivite')}</p>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('compte_courant_perso_carte_visa_infinite_incluse')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('compte_courant_perso_lounges_aeroports_illimites')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('compte_courant_perso_concierge_service')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('compte_courant_perso_cashback_selectif')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('compte_courant_perso_avantages_partenaires_exclusi')}</span>
                </li>
              </ul>
              <button className="w-full bg-[#F26A21] text-white py-3 rounded-lg font-semibold hover:bg-[#E85A1B] transition-colors">{t('compte_courant_perso_ouvrir_compte')}</button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 bg-gradient-to-r from-[#F7F7F7] to-white p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-[#0C3B66] mb-8 text-center">{t('compte_courant_perso_fonctionnalites_innovantes')}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0C3B66]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#0C3B66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[#0C3B66] mb-2">{t('compte_courant_perso_application_mobile')}</h4>
                <p className="text-sm text-gray-600">{t('compte_courant_perso_gestion_complete_depuis_votre')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F26A21]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#F26A21]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[#F26A21] mb-2">{t('compte_courant_perso_budget_assistant')}</h4>
                <p className="text-sm text-gray-600">{t('compte_courant_perso_pour_optimiser_vos_finances')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-green-600 mb-2">{t('compte_courant_perso_securite_maximale')}</h4>
                <p className="text-sm text-gray-600">{t('compte_courant_perso_authentification_biometrique')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-purple-600 mb-2">{t('compte_courant_perso_virements_instantanes')}</h4>
                <p className="text-sm text-gray-600">{t('compte_courant_perso_transfert_temps_reel')}</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 grid md:grid-cols-2 gap-8"
          >
            <div className="bg-[#0C3B66] text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">{t('compte_courant_perso_avantages_client')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-yellow-400 text-xl mr-3">★</span>
                  <div>
                    <span className="font-semibold">{t('compte_courant_perso_programme_fidelite')}</span>
                    <p className="text-white/90 text-sm">{t('compte_courant_perso_points_cumulables_recompenses')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 text-xl mr-3">★</span>
                  <div>
                    <span className="font-semibold">{t('compte_courant_perso_offres_partenaires')}</span>
                    <p className="text-white/90 text-sm">{t('compte_courant_perso_reductions_chez_plus_500')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 text-xl mr-3">★</span>
                  <div>
                    <span className="font-semibold">{t('compte_courant_perso_service_prioritaire')}</span>
                    <p className="text-white/90 text-sm">{t('compte_courant_perso_support_client_dedie_disponib')}</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#F26A21] text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">{t('compte_courant_perso_ouverture_simplifiee')}</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold">1</span>
                  </div>
                  <span>{t('compte_courant_perso_formulaire_ligne_minutes')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold">2</span>
                  </div>
                  <span>{t('compte_courant_perso_verification_instantanee')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold">3</span>
                  </div>
                  <span>{t('compte_courant_perso_reception_immediate_vos_moyen')}</span>
                </div>
              </div>
              <button className="w-full bg-white text-[#F26A21] py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors mt-6">{t('compte_courant_perso_ouvrir_mon_compte_maintenant')}</button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
