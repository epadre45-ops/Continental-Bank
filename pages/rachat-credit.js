import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function RachatCredit() {
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
          >{t('rachat_credit_rachat_credits')}</motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-center text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Simplifiez vos finances et réduisez vos mensualités. 
            Notre solution de rachat de crédits vous permet de regrouper tous vos 
            prêts en un seul avec un taux avantageux. Bénéficiez d'une seule 
            mensualité, d'un meilleur taux et d'une gestion simplifiée de vos finances.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16 bg-gradient-to-r from-[#0C3B66] to-[#0E3A5D] text-white p-8 rounded-2xl"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">{t('rachat_credit_reduction_garantie')}</h3>
              <div className="text-5xl font-bold text-[#F26A21] mb-2">{t('rachat_credit_text_24')}</div>
              <p className="text-white/90">{t('rachat_credit_moyenne_sur_vos_mensualites')}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">30 000€ - 300 000€</div>
                <p className="text-white/90">{t('rachat_credit_montant_rachat')}</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">12 - 25 ans</div>
                <p className="text-white/90">{t('rachat_credit_nouvelle_duree')}</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">48h</div>
                <p className="text-white/90">{t('rachat_credit_reponse_principe')}</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 grid md:grid-cols-2 gap-8"
          >
            <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6">{t('rachat_credit_avantages_principaux')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <span className="font-semibold text-green-800">{t('rachat_credit_reduction_des_mensualites')}</span>
                    <p className="text-gray-600 text-sm">{t('rachat_credit_jusqu_sur_vos_paiements')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <span className="font-semibold text-green-800">{t('rachat_credit_taux_unique_avantageux')}</span>
                    <p className="text-gray-600 text-sm">{t('rachat_credit_seul_taux_pour_tous')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <span className="font-semibold text-green-800">{t('rachat_credit_gestion_simplifiee')}</span>
                    <p className="text-gray-600 text-sm">{t('rachat_credit_une_seule_mensualite_seul')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <span className="font-semibold text-green-800">{t('rachat_credit_tresorerie_complementaire')}</span>
                    <p className="text-gray-600 text-sm">{t('rachat_credit_possibilite_obtenir_une_tresorerie')}</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">{t('rachat_credit_types_credits_rachetables')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-800">{t('rachat_credit_prets_immobiliers')}</span>
                    <p className="text-gray-600 text-sm">{t('rachat_credit_prets_habitat_travaux')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-800">{t('rachat_credit_prets_personnels')}</span>
                    <p className="text-gray-600 text-sm">{t('rachat_credit_credits_conso_auto_voyages')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-800">{t('rachat_credit_credits_renouvelables')}</span>
                    <p className="text-gray-600 text-sm">{t('rachat_credit_reserve_argent_cartes_credit')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-800">{t('rachat_credit_dettes_diverses')}</span>
                    <p className="text-gray-600 text-sm">{t('rachat_credit_impots_loyers_factures')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-[#0C3B66] mb-8 text-center">{t('rachat_credit_simulateur_rachat_credits')}</h3>
            <div className="bg-[#F7F7F7] p-8 rounded-2xl">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('rachat_credit_credits_racheter')}</label>
                  <div className="space-y-3 mb-4">
                    <div className="bg-white p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">{t('rachat_credit_pret_immobilier')}</span>
                        <span className="font-semibold">850€/mois</span>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">{t('rachat_credit_pret_auto')}</span>
                        <span className="font-semibold">320€/mois</span>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">{t('rachat_credit_credit_conso')}</span>
                        <span className="font-semibold">180€/mois</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#0C3B66] text-white p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{t('rachat_credit_total_actuel')}</span>
                      <span className="text-xl font-bold">1 350€/mois</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nouvelle durée (années)</label>
                  <input type="range" min="10" max="25" step="1" className="w-full mb-2" />
                  <div className="text-2xl font-bold text-[#0C3B66] text-center mb-4">20 ans</div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-2">{t('rachat_credit_tresorerie_souhaitee')}</div>
                    <input type="number" className="w-full p-2 border border-gray-300 rounded" placeholder="0" />
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <div className="text-sm text-gray-600 mb-2">{t('rachat_credit_nouvelle_mensualite')}</div>
                  <div className="text-3xl font-bold text-green-600 mb-4">945€</div>
                  <div className="text-sm text-gray-600 mb-1">{t('rachat_credit_economie_mensuelle')}</div>
                  <div className="text-2xl font-bold text-[#F26A21] mb-4">{t('rachat_credit_405')}</div>
                  <div className="text-sm text-gray-600 mb-4">TAEG fixe : 2,75%*</div>
                  <button className="w-full bg-[#0C3B66] text-white py-3 rounded-lg font-semibold hover:bg-[#0E3A5D] transition-colors">{t('rachat_credit_demander_mon_rachat')}</button>
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
            <h3 className="text-2xl font-bold text-[#0C3B66] mb-6">{t('rachat_credit_processus_rachat')}</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0C3B66] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold text-[#0C3B66] mb-2">{t('rachat_credit_etude_gratuite')}</h4>
                <p className="text-gray-600 text-sm">{t('rachat_credit_analyse_votre_situation_simulation')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0C3B66] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold text-[#0C3B66] mb-2">{t('rachat_credit_accord_principe')}</h4>
                <p className="text-gray-600 text-sm">{t('rachat_credit_reponse_sous_48h')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0C3B66] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold text-[#0C3B66] mb-2">{t('rachat_credit_signature')}</h4>
                <p className="text-gray-600 text-sm">{t('rachat_credit_offre_finale_documents')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0C3B66] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h4 className="font-semibold text-[#0C3B66] mb-2">{t('rachat_credit_mise_place')}</h4>
                <p className="text-gray-600 text-sm">{t('rachat_credit_rachat_effectif_jours')}</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-yellow-50 border-2 border-yellow-200 p-6 rounded-xl inline-block">
              <p className="text-lg text-gray-700 mb-2">
                <span className="font-bold text-[#F26A21]">*TAEG à partir de 2,75% sous réserve d'acceptation de votre dossier</span>
              </p>
              <p className="text-sm text-gray-600">{t('rachat_credit_exemple_rachat_150_000')}</p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
