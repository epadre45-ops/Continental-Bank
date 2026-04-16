import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function PaiementMobile() {
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
          >{t('paiement_mobile_paiement_mobile')}</motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-center text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Payez en un instant avec votre smartphone. 
            Le paiement mobile sans contact révolutionne vos transactions quotidiennes 
            avec une rapidité inégalée, une sécurité renforcée et une commodité 
            absolue pour une expérience de paiement moderne et sans effort.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16 grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="bg-gradient-to-br from-[#0C3B66] to-[#0E3A5D] rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Comment ça Marche ?</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-xl">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">{t('paiement_mobile_deverrouillez_votre_smartphone')}</h4>
                      <p className="text-white/80">{t('paiement_mobile_face_empreinte_code_pin')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-xl">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">{t('paiement_mobile_approchez_votre_telephone')}</h4>
                      <p className="text-white/80">{t('paiement_mobile_pres_terminal_paiement')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-xl">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">{t('paiement_mobile_paiement_valide')}</h4>
                      <p className="text-white/80">{t('paiement_mobile_transaction_instantanee_securisee')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-br from-[#F26A21] to-[#E85A1B] rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">{t('paiement_mobile_avantages_exclusifs')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-400">✓</span>
                    </div>
                    <span className="text-white">Paiement ultra-rapide (moins de 1 seconde)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-400">✓</span>
                    </div>
                    <span className="text-white">{t('paiement_mobile_plafont_sans_code')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-400">✓</span>
                    </div>
                    <span className="text-white">{t('paiement_mobile_compatible_tous_terminaux_nfc')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-400">✓</span>
                    </div>
                    <span className="text-white">{t('paiement_mobile_cashback_sur_tous_les')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-400">✓</span>
                    </div>
                    <span className="text-white">{t('paiement_mobile_historique_detaille_temps_reel')}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-[#0C3B66] mb-8 text-center">{t('paiement_mobile_technologies_supportees')}</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-[#0C3B66] transition-colors">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.88,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{t('paiement_mobile_google_pay')}</h4>
                <p className="text-sm text-gray-600">{t('paiement_mobile_android_wear')}</p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-[#0C3B66] transition-colors">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{t('paiement_mobile_apple_pay')}</h4>
                <p className="text-sm text-gray-600">{t('paiement_mobile_iphone_ipad_apple_watch')}</p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-[#F26A21] transition-colors">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{t('paiement_mobile_samsung_pay')}</h4>
                <p className="text-sm text-gray-600">{t('paiement_mobile_galaxy_watch')}</p>
              </div>
              
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-[#F26A21] transition-colors">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{t('paiement_mobile_carte_bancaire')}</h4>
                <p className="text-sm text-gray-600">{t('paiement_mobile_nfc_direct')}</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 bg-[#F7F7F7] p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-[#0C3B66] mb-8 text-center">{t('paiement_mobile_securite_avancee')}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#0C3B66]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-[#0C3B66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="font-bold text-[#0C3B66] mb-2">{t('paiement_mobile_tokenisation')}</h4>
                <p className="text-gray-600 text-sm">{t('paiement_mobile_numero_carte_unique_pour')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-[#F26A21]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-[#F26A21]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-[#F26A21] mb-2">{t('paiement_mobile_authentification_biometrique')}</h4>
                <p className="text-gray-600 text-sm">{t('paiement_mobile_face_empreinte_digitale_reconnais')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-green-600 mb-2">{t('paiement_mobile_surveillance')}</h4>
                <p className="text-gray-600 text-sm">{t('paiement_mobile_detection_instantanee_des_activite')}</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-[#0C3B66] to-[#0E3A5D] text-white p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">{t('paiement_mobile_commencez_paiement_mobile')}</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Activez le paiement mobile en quelques secondes et profitez d'une expérience 
                de paiement moderne, rapide et totalement sécurisée.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-[#0C3B66] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">{t('paiement_mobile_configurer_maintenant')}</button>
                <button className="bg-[#F26A21] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#E85A1B] transition-colors">{t('paiement_mobile_savoir_plus')}</button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
