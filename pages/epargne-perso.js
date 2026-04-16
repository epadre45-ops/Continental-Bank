import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function EpargnePerso() {
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
          >{t('epargne_perso_epargne_personnelle')}</motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-center text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Faites fructifier votre épargne avec nos solutions d'investissement intelligentes. 
            Des comptes épargne sécurisés aux supports performants, construisez votre patrimoine 
            en toute confiance avec des taux attractifs et une gestion experte.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2 text-center">{t('epargne_perso_livret')}</h3>
              <div className="text-2xl font-bold text-blue-600 text-center mb-2">3,00%*</div>
              <p className="text-sm text-gray-600 text-center mb-4">{t('epargne_perso_taux_reference')}</p>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>{t('epargne_perso_disponibilite_immediate')}</li>
                <li>{t('epargne_perso_exonere_impots')}</li>
                <li>{t('epargne_perso_plafond_950')}</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-green-900 mb-2 text-center">{t('epargne_perso_ldd')}</h3>
              <div className="text-2xl font-bold text-green-600 text-center mb-2">3,00%*</div>
              <p className="text-sm text-gray-600 text-center mb-4">{t('epargne_perso_developpement_durable')}</p>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>{t('epargne_perso_financement_projets_verts')}</li>
                <li>{t('epargne_perso_exonere_fiscal')}</li>
                <li>{t('epargne_perso_plafond_000')}</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-purple-900 mb-2 text-center">{t('epargne_perso_pel')}</h3>
              <div className="text-2xl font-bold text-purple-600 text-center mb-2">2,25%</div>
              <p className="text-sm text-gray-600 text-center mb-4">{t('epargne_perso_logement')}</p>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>{t('epargne_perso_pret_immobilier_garanti')}</li>
                <li>{t('epargne_perso_taux_fixe_ans')}</li>
                <li>{t('epargne_perso_plafond_200')}</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-orange-900 mb-2 text-center">{t('epargne_perso_cel')}</h3>
              <div className="text-2xl font-bold text-orange-600 text-center mb-2">1,75%</div>
              <p className="text-sm text-gray-600 text-center mb-4">{t('epargne_perso_epargne_logement')}</p>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>{t('epargne_perso_droit_pret_immediat')}</li>
                <li>{t('epargne_perso_aide_etat_complementaire')}</li>
                <li>{t('epargne_perso_plafond_300')}</li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 bg-gradient-to-r from-[#0C3B66] to-[#0E3A5D] text-white p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">{t('epargne_perso_assurance_vie_investissements')}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">{t('epargne_perso_fonds_euros')}</h4>
                <p className="text-white/90 mb-4">{t('epargne_perso_securite_performance_garantie')}</p>
                <div className="text-2xl font-bold mb-2">2,50% - 4,50%</div>
                <p className="text-sm text-white/80">{t('epargne_perso_rendement_annuel_moyen')}</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">{t('epargne_perso_unites_compte')}</h4>
                <p className="text-white/90 mb-4">{t('epargne_perso_potentiel_performance_eleve')}</p>
                <div className="text-2xl font-bold mb-2">5% - 12%</div>
                <p className="text-sm text-white/80">{t('epargne_perso_performance_historique')}</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">{t('epargne_perso_gestion_pilotee')}</h4>
                <p className="text-white/90 mb-4">{t('epargne_perso_expertise_professionnelle')}</p>
                <div className="text-2xl font-bold mb-2">3 profils</div>
                <p className="text-sm text-white/80">{t('epargne_perso_prudent_equilibre_dynamique')}</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 grid md:grid-cols-2 gap-8"
          >
            <div className="bg-[#F7F7F7] p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-[#0C3B66] mb-6">{t('epargne_perso_avantages_exclusifs')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#F26A21] text-xl mr-3">✓</span>
                  <div>
                    <span className="font-semibold">{t('epargne_perso_fiscalite_optimisee')}</span>
                    <p className="text-gray-600 text-sm">{t('epargne_perso_avantages_fiscaux_selon_horizon')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F26A21] text-xl mr-3">✓</span>
                  <div>
                    <span className="font-semibold">{t('epargne_perso_flexibilite_totale')}</span>
                    <p className="text-gray-600 text-sm">{t('epargne_perso_versements_libres_retraits_possibles')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F26A21] text-xl mr-3">✓</span>
                  <div>
                    <span className="font-semibold">{t('epargne_perso_transmission_optimisee')}</span>
                    <p className="text-gray-600 text-sm">{t('epargne_perso_fiscalite_avantageuse_pour_vos')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F26A21] text-xl mr-3">✓</span>
                  <div>
                    <span className="font-semibold">{t('epargne_perso_conseil_personnalise')}</span>
                    <p className="text-gray-600 text-sm">{t('epargne_perso_accompagnement_par_nos_experts')}</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-[#F26A21]/10 to-[#0C3B66]/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-[#0C3B66] mb-6">{t('epargne_perso_simulateur_epargne')}</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Versement initial (€)</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="1000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Versement mensuel (€)</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="200" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Durée (années)</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="10" />
                </div>
                <button className="w-full bg-[#0C3B66] text-white py-3 rounded-lg font-semibold hover:bg-[#0E3A5D] transition-colors">{t('epargne_perso_simuler_mon_epargne')}</button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="bg-yellow-50 border-2 border-yellow-200 p-6 rounded-xl inline-block">
              <p className="text-lg text-gray-700 mb-2">
                <span className="font-bold text-[#F26A21]">*Taux indicatifs au 1er janvier 2024</span>
              </p>
              <p className="text-sm text-gray-600">{t('epargne_perso_les_taux_sont_susceptibles')}</p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
