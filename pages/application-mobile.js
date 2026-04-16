import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function ApplicationMobile() {
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
          >{t('application_mobile_application_mobile')}</motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-center text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Votre banque dans votre poche. 
            Gérez vos comptes, effectuez des virements et payez en toute sécurité 
            depuis votre smartphone. Une application mobile intuitive, sécurisée 
            et complète pour une banking moderne sans limites.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16 grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#0C3B66] to-[#0E3A5D] rounded-3xl p-2 shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-300">
                  <div className="bg-black rounded-2xl p-4">
                    <div className="bg-gradient-to-b from-blue-600 to-blue-800 rounded-xl h-96 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-white text-center">
                        <div className="text-lg font-bold mb-2">{t('application_mobile_europa_kredit')}</div>
                        <div className="text-sm opacity-80">{t('application_mobile_banking_mobile')}</div>
                      </div>
                      <div className="mt-8 space-y-2">
                        <div className="bg-white/20 rounded-lg px-4 py-2 text-white text-sm">{t('application_mobile_solde_458')}</div>
                        <div className="bg-white/20 rounded-lg px-4 py-2 text-white text-sm">{t('application_mobile_derniere_operation')}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-[#F26A21] to-[#E85A1B] rounded-3xl p-2 shadow-2xl transform -rotate-6 hover:-rotate-3 transition-transform duration-300">
                  <div className="bg-black rounded-2xl p-4">
                    <div className="bg-gradient-to-b from-orange-600 to-orange-800 rounded-xl h-80 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-4xl font-bold mb-2">4,8★</div>
                        <div className="text-sm opacity-80">250K+ avis</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-r from-[#0C3B66] to-[#0E3A5D] text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">{t('application_mobile_fonctionnalites_completes')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-400">✓</span>
                    </div>
                    <span>{t('application_mobile_consultation_des_soldes_temps')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-400">✓</span>
                    </div>
                    <span>{t('application_mobile_virements_instantanes_sepa')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-400">✓</span>
                    </div>
                    <span>{t('application_mobile_paiement_sans_contact_nfc')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-400">✓</span>
                    </div>
                    <span>{t('application_mobile_budget_assistant_intelligent')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-400">✓</span>
                    </div>
                    <span>{t('application_mobile_alertes_notifications_personnal')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-400">✓</span>
                    </div>
                    <span>{t('application_mobile_blocage_deblocage_carte_instant')}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-[#0C3B66]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#0C3B66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#0C3B66] mb-2">{t('application_mobile_ios_android')}</h4>
              <p className="text-gray-600">{t('application_mobile_compatible_avec_tous_les')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#F26A21]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#F26A21]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#F26A21] mb-2">{t('application_mobile_securite_maximale')}</h4>
              <p className="text-gray-600">{t('application_mobile_authentification_biometrique_ch')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-green-600 mb-2">{t('application_mobile_performance')}</h4>
              <p className="text-gray-600">{t('application_mobile_application_ultra_rapide_fluide')}</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 bg-[#F7F7F7] p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-[#0C3B66] mb-8 text-center">{t('application_mobile_telechargez_application')}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-black rounded-xl p-6 inline-block hover:bg-gray-900 transition-colors cursor-pointer">
                  <svg className="w-12 h-12 text-white mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-white">
                    <div className="text-xs">{t('application_mobile_download_the')}</div>
                    <div className="text-xl font-bold">{t('application_mobile_app_store')}</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-black rounded-xl p-6 inline-block hover:bg-gray-900 transition-colors cursor-pointer">
                  <svg className="w-12 h-12 text-white mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.88,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-white">
                    <div className="text-xs">{t('application_mobile_get')}</div>
                    <div className="text-xl font-bold">{t('application_mobile_google_play')}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-[#F26A21] to-[#E85A1B] text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">{t('application_mobile_avis_utilisateurs')}</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">4,8/5</div>
                  <div className="text-white/90 mb-2">{t('application_mobile_note_moyenne')}</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-300">★</span>
                    ))}
                  </div>
                  <p className="text-white/80 text-sm">{t('application_mobile_application_incroyable_tout_don')}</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">250K+</div>
                  <div className="text-white/90 mb-2">{t('application_mobile_telechargements')}</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-300">★</span>
                    ))}
                  </div>
                  <p className="text-white/80 text-sm">{t('application_mobile_simple_rapide_tres_securisee')}</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">99,9%</div>
                  <div className="text-white/90 mb-2">{t('application_mobile_satisfaction')}</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-300">★</span>
                    ))}
                  </div>
                  <p className="text-white/80 text-sm">{t('application_mobile_meilleure_app_bancaire_marche')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
