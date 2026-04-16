import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function CarteClassic() {
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
          >{t('carte_classic_carte_classic')}</motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-center text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            La carte bancaire essentielle pour votre quotidien. 
            Simple, efficace et économique, elle vous offre tous les services 
            fondamentaux pour gérer vos dépenses en toute sécurité sans frais superflus.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16 grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl relative">
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-8 bg-yellow-400 rounded flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-900">{t('carte_classic_visa')}</span>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-16">
                  <div className="text-white text-2xl font-mono mb-8">{t('carte_classic_4521')}</div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-white/60 text-sm mb-1">{t('carte_classic_titulaire')}</div>
                      <div className="text-white uppercase tracking-wider">{t('carte_classic_jean_dupont')}</div>
                    </div>
                    <div>
                      <div className="text-white/60 text-sm mb-1">{t('carte_classic_expire')}</div>
                      <div className="text-white">08/26</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-r from-[#0C3B66] to-[#0E3A5D] text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">{t('carte_classic_caracteristiques_principales')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-400">✓</span>
                    </div>
                    <span>{t('carte_classic_paiement_sans_contact_jusqu')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-400">✓</span>
                    </div>
                    <span>{t('carte_classic_retraits_especes_illimites')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-400">✓</span>
                    </div>
                    <span>{t('carte_classic_paiements_france_etranger')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-400">✓</span>
                    </div>
                    <span>{t('carte_classic_alertes_sms_gratuites')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-400">✓</span>
                    </div>
                    <span>{t('carte_classic_gestion_100_ligne')}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 bg-[#F7F7F7] p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-[#0C3B66] mb-8 text-center">{t('carte_classic_tarifs_conditions')}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F26A21] mb-2">{t('carte_classic_gratuit')}</div>
                <p className="text-gray-600 mb-4">{t('carte_classic_avec_compte_smart_premium')}</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>{t('carte_classic_pas_frais_ouverture')}</li>
                  <li>{t('carte_classic_pas_frais_annuels')}</li>
                  <li>{t('carte_classic_maintenance_gratuite')}</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0C3B66] mb-2">1,50%</div>
                <p className="text-gray-600 mb-4">{t('carte_classic_retraits_hors_zone_euro')}</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>{t('carte_classic_commission_minimale')}</li>
                  <li>{t('carte_classic_commission_maximale')}</li>
                  <li>{t('carte_classic_transparence_totale')}</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0C3B66] mb-2">0%</div>
                <p className="text-gray-600 mb-4">{t('carte_classic_paiements_hors_zone_euro')}</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>{t('carte_classic_aucune_commission')}</li>
                  <li>{t('carte_classic_taux_change_optimal')}</li>
                  <li>{t('carte_classic_economie_garantie')}</li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-[#F26A21] to-[#E85A1B] text-white p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">{t('carte_classic_securite_protection')}</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">3D Secure</h4>
                  <p className="text-white/90 text-sm">{t('carte_classic_authentification_renforcee_pour_tous')}</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">{t('carte_classic_fraude_garantie')}</h4>
                  <p className="text-white/90 text-sm">{t('carte_classic_protection_complete_contre_les')}</p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">{t('carte_classic_blocage_instantane')}</h4>
                  <p className="text-white/90 text-sm">{t('carte_classic_bloquez_votre_carte_clic')}</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <button className="bg-[#0C3B66] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0E3A5D] transition-colors">{t('carte_classic_demander_carte_classic')}</button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
