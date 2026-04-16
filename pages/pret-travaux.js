import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function PretTravaux() {
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
          >{t('pret_travaux_pret_travaux')}</motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-center text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Donnez un coup de neuf à votre logement avec notre prêt travaux avantageux. 
            De la rénovation énergétique à l'aménagement intérieur, financez tous 
            vos projets d'amélioration avec des taux compétitifs et une grande flexibilité 
            pour valoriser votre patrimoine en toute sérénité.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16 bg-gradient-to-r from-[#0C3B66] to-[#0E3A5D] text-white p-8 rounded-2xl"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">{t('pret_travaux_taeg_travaille')}</h3>
              <div className="text-5xl font-bold text-[#F26A21] mb-2">2,25%*</div>
              <p className="text-white/90">{t('pret_travaux_taux_annuel_effectif_global')}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">2 000€ - 100 000€</div>
                <p className="text-white/90">{t('pret_travaux_montant_pret')}</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">12 - 120 mois</div>
                <p className="text-white/90">{t('pret_travaux_duree_remboursement')}</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24h</div>
                <p className="text-white/90">{t('pret_travaux_reponse_principe')}</p>
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
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">{t('pret_travaux_renovation')}</h4>
              <p className="text-sm text-gray-600">{t('pret_travaux_sols_murs_plafonds')}</p>
            </div>
            
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-[#F26A21] transition-colors">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">{t('pret_travaux_economie_energie')}</h4>
              <p className="text-sm text-gray-600">{t('pret_travaux_isolation_chauffage')}</p>
            </div>
            
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-green-600 transition-colors">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">{t('pret_travaux_extension')}</h4>
              <p className="text-sm text-gray-600">{t('pret_travaux_veranda_etage')}</p>
            </div>
            
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-purple-600 transition-colors">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">{t('pret_travaux_amenagement')}</h4>
              <p className="text-sm text-gray-600">{t('pret_travaux_cuisine_salle_bain')}</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 grid md:grid-cols-2 gap-8"
          >
            <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6">{t('pret_travaux_preferentiel_ecologique')}</h3>
              <div className="text-3xl font-bold text-green-600 text-center mb-4">TAEG 1,95%*</div>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('pret_travaux_travaux_renovation_energetique')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('pret_travaux_jusqu_100_000_finances')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('pret_travaux_duree_jusqu_ans')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('pret_travaux_aides_maprimerenov_integrees')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('pret_travaux_bonus_ecologique_500')}</span>
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">{t('pret_travaux_simuler_pret_ecologique')}</button>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">{t('pret_travaux_pret_travaux_standard')}</h3>
              <div className="text-3xl font-bold text-blue-600 text-center mb-4">TAEG 2,25%*</div>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>{t('pret_travaux_tous_types_travaux')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>{t('pret_travaux_jusqu_000_finances')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>{t('pret_travaux_duree_jusqu_ans')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>{t('pret_travaux_flexibilite_totale')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>{t('pret_travaux_deblocage_par_etapes')}</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">{t('pret_travaux_simuler_pret_standard')}</button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-[#0C3B66] mb-8 text-center">{t('pret_travaux_simulateur_pret_travaux')}</h3>
            <div className="bg-[#F7F7F7] p-8 rounded-2xl">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('pret_travaux_type_travaux')}</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg mb-4">
                    <option>{t('pret_travaux_renovation_energetique')}</option>
                    <option>{t('pret_travaux_amenagement_interieur')}</option>
                    <option>{t('pret_travaux_extension')}</option>
                    <option>{t('pret_travaux_tous_travaux')}</option>
                  </select>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Montant souhaité (€)</label>
                  <input type="range" min="2000" max="100000" step="1000" className="w-full mb-2" />
                  <div className="text-2xl font-bold text-[#0C3B66] text-center">30 000€</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Durée (mois)</label>
                  <input type="range" min="12" max="120" step="6" className="w-full mb-2" />
                  <div className="text-2xl font-bold text-[#0C3B66] text-center">84 mois</div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('pret_travaux_aides_disponibles')}</label>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="text-green-600 font-semibold">{t('pret_travaux_maprimerenov_000')}</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <div className="text-sm text-gray-600 mb-2">{t('pret_travaux_mensualite_estimee')}</div>
                  <div className="text-3xl font-bold text-[#F26A21] mb-4">378€</div>
                  <div className="text-sm text-gray-600 mb-1">{t('pret_travaux_taeg_fixe')}</div>
                  <div className="text-xl font-bold text-[#0C3B66] mb-4">1,95%*</div>
                  <div className="text-sm text-gray-600 mb-4">{t('pret_travaux_apres_aides_000')}</div>
                  <button className="w-full bg-[#0C3B66] text-white py-3 rounded-lg font-semibold hover:bg-[#0E3A5D] transition-colors">{t('pret_travaux_demander_pret')}</button>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 bg-[#F7F7F7] p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-[#0C3B66] mb-6">{t('pret_travaux_aides_subventions')}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-green-600 mb-2">{t('pret_travaux_maprimerenov')}</h4>
                <p className="text-gray-600 text-sm">{t('pret_travaux_jusqu_000_aide')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-blue-600 mb-2">{t('pret_travaux_cee')}</h4>
                <p className="text-gray-600 text-sm">{t('pret_travaux_certificats_economies_energie')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-orange-600 mb-2">{t('pret_travaux_anah')}</h4>
                <p className="text-gray-600 text-sm">{t('pret_travaux_agence_nationale_habitat')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h4 className="font-semibold text-purple-600 mb-2">{t('pret_travaux_action_logement')}</h4>
                <p className="text-gray-600 text-sm">{t('pret_travaux_aide_employeurs_travaux')}</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-16 text-center"
          >
            <div className="bg-yellow-50 border-2 border-yellow-200 p-6 rounded-xl inline-block">
              <p className="text-lg text-gray-700 mb-2">
                <span className="font-bold text-[#F26A21]">*TAEG à partir de 1,95% sous réserve d'acceptation de votre dossier</span>
              </p>
              <p className="text-sm text-gray-600">{t('pret_travaux_exemple_000_sur_mois')}</p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
