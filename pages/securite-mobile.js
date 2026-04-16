import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function SecuriteMobile() {
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
          >{t('securite_mobile_securite_mobile')}</motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-center text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            La protection ultime de vos données bancaires. 
            Notre système de sécurité mobile utilise les technologies les plus avancées 
            pour protéger vos transactions, vos informations personnelles et votre argent. 
            Bénéficiez d'une tranquillité d'esprit totale avec une sécurité bancaire de niveau militaire.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16 bg-gradient-to-r from-[#0C3B66] to-[#0E3A5D] text-white p-8 rounded-2xl"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">{t('securite_mobile_securite_niveau_bancaire')}</h3>
              <div className="text-5xl font-bold text-[#F26A21] mb-2">99,9%</div>
              <p className="text-white/90">{t('securite_mobile_taux_detection_des_menaces')}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">256-bit</div>
                <p className="text-white/90">{t('securite_mobile_chiffrement_aes')}</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <p className="text-white/90">{t('securite_mobile_surveillance_active')}</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">0 fraudes</div>
                <p className="text-white/90">{t('securite_mobile_confirmees_2023')}</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-[#0C3B66] transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">{t('securite_mobile_authentification_forte')}</h4>
              <p className="text-sm text-gray-600">{t('securite_mobile_face_empreinte_double_authentifica')}</p>
            </div>
            
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-[#F26A21] transition-colors">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">{t('securite_mobile_tokenisation')}</h4>
              <p className="text-sm text-gray-600">{t('securite_mobile_numeros_uniques_pour_chaque')}</p>
            </div>
            
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-green-600 transition-colors">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">{t('securite_mobile_chiffrement_end_end')}</h4>
              <p className="text-sm text-gray-600">{t('securite_mobile_protection_complete_des_donnees')}</p>
            </div>
            
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-purple-600 transition-colors">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">{t('securite_mobile_monitoring')}</h4>
              <p className="text-sm text-gray-600">{t('securite_mobile_detection_automatique_des_menaces')}</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-[#0C3B66] mb-8 text-center">{t('securite_mobile_couches_securite')}</h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-6">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">{t('securite_mobile_securite_appareil')}</h4>
                    <p className="text-gray-700">{t('securite_mobile_protection_niveau_smartphone_avec')}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-6">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-900 mb-2">{t('securite_mobile_securite_application')}</h4>
                    <p className="text-gray-700">{t('securite_mobile_code_obfusque_anti_tampering')}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-6">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-900 mb-2">{t('securite_mobile_securite_transaction')}</h4>
                    <p className="text-gray-700">{t('securite_mobile_tokenisation_secure_validation')}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-6">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-900 mb-2">{t('securite_mobile_securite_reseau')}</h4>
                    <p className="text-gray-700">{t('securite_mobile_chiffrement_ssl_tls_vpn')}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 bg-[#F7F7F7] p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-[#0C3B66] mb-8 text-center">{t('securite_mobile_alertes_controle')}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-[#0C3B66] mb-4">{t('securite_mobile_alertes_instantanees')}</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('securite_mobile_notification_pour_chaque_transacti')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('securite_mobile_alerte_cas_tentative_acces')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('securite_mobile_avertissement_pour_depassement_pla')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('securite_mobile_alerte_geolocalisation_inhabituell')}</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-[#0C3B66] mb-4">{t('securite_mobile_controle_total')}</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('securite_mobile_blocage_instantane_carte')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('securite_mobile_deconnexion_distance_tous_les')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('securite_mobile_modification_des_plafonds_temps')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('securite_mobile_historique_complet_des_connexions')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-[#F26A21] to-[#E85A1B] text-white p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">{t('securite_mobile_garantie_zero_fraude')}</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                En cas de fraude avérée, nous vous remboursons 100% des pertes subies. 
                Votre sécurité est notre priorité absolue.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <p className="text-white/90">{t('securite_mobile_remboursement_garanti')}</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">24h</div>
                  <p className="text-white/90">{t('securite_mobile_traitement_des_reclamations')}</p>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">0€</div>
                  <p className="text-white/90">{t('securite_mobile_franchise_pour_les_clients')}</p>
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
