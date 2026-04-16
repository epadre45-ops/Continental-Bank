import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function CarteGold() {
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
          >{t('carte_gold_carte_gold')}</motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-center text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            L'excellence bancaire au quotidien. 
            La carte Gold vous offre des avantages premium, des services exclusifs 
            et une couverture assurance complète pour une expérience bancaire 
            sans compromis et une tranquillité d'esprit totale.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16 grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-2xl p-8 shadow-2xl relative">
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                    <span className="text-xs font-bold text-yellow-800">{t('carte_gold_visa')}</span>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-16">
                  <div className="text-white text-2xl font-mono mb-8">{t('carte_gold_7823')}</div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-white/80 text-sm mb-1">{t('carte_gold_titulaire')}</div>
                      <div className="text-white uppercase tracking-wider font-semibold">{t('carte_gold_marie_martin')}</div>
                    </div>
                    <div>
                      <div className="text-white/80 text-sm mb-1">{t('carte_gold_expire')}</div>
                      <div className="text-white font-semibold">11/27</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">{t('carte_gold_avantages_exclusifs')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-400">✓</span>
                    </div>
                    <span>{t('carte_gold_plafond_paiement_000_jour')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-400">✓</span>
                    </div>
                    <span>{t('carte_gold_plafond_retrait_000_jour')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-400">✓</span>
                    </div>
                    <span>{t('carte_gold_assurance_voyage_complete')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-400">✓</span>
                    </div>
                    <span>Lounges aéroports (2 visites/an)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-400">✓</span>
                    </div>
                    <span>{t('carte_gold_conciergerie')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-400">✓</span>
                    </div>
                    <span>{t('carte_gold_cashback_sur_tous_les')}</span>
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
            <h3 className="text-2xl font-bold text-[#0C3B66] mb-8 text-center">{t('carte_gold_tarifs_conditions')}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F26A21] mb-2">9,90€</div>
                <p className="text-gray-600 mb-4">{t('carte_gold_frais_annuels')}</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>{t('carte_gold_gratuit_avec_compte_premium')}</li>
                  <li>{t('carte_gold_offre_bienvenue')}</li>
                  <li>{t('carte_gold_sans_engagement')}</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0C3B66] mb-2">1%</div>
                <p className="text-gray-600 mb-4">{t('carte_gold_retraits_hors_zone_euro')}</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>{t('carte_gold_commission_minimale')}</li>
                  <li>{t('carte_gold_commission_maximale')}</li>
                  <li>{t('carte_gold_taux_preferentiel')}</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0C3B66] mb-2">0%</div>
                <p className="text-gray-600 mb-4">{t('carte_gold_paiements_hors_zone_euro')}</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>{t('carte_gold_aucune_commission')}</li>
                  <li>{t('carte_gold_meilleurs_taux_change')}</li>
                  <li>{t('carte_gold_economie_maximale')}</li>
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
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">{t('carte_gold_assurances_garanties')}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">{t('carte_gold_assurance_voyage')}</h4>
                  <p className="text-white/90 text-sm">{t('carte_gold_couverture_mondiale_complete')}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">{t('carte_gold_assurance_auto')}</h4>
                  <p className="text-white/90 text-sm">{t('carte_gold_vehicule_remplacement')}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">{t('carte_gold_assurance_habitation')}</h4>
                  <p className="text-white/90 text-sm">{t('carte_gold_protection_biens_mobiliers')}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">{t('carte_gold_garantie_achats')}</h4>
                  <p className="text-white/90 text-sm">{t('carte_gold_protection_jours')}</p>
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
            <button className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-700 hover:to-yellow-900 transition-all">{t('carte_gold_demander_carte_gold')}</button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
