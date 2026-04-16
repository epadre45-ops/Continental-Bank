import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function PretPerso() {
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
          >{t('pret_perso_pret_personnel')}</motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-center text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Réalisez vos projets avec notre prêt personnel flexible et avantageux. 
            Que ce soit pour des travaux, un voyage, l'achat d'un véhicule ou tout autre 
            projet personnel, nous vous proposons des taux compétitifs et une adaptabilité 
            totale pour vous accompagner dans la réalisation de vos ambitions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16 bg-gradient-to-r from-[#0C3B66] to-[#0E3A5D] text-white p-8 rounded-2xl"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">{t('pret_perso_taeg_competitif')}</h3>
              <div className="text-5xl font-bold text-[#F26A21] mb-2">1,99%*</div>
              <p className="text-white/90">{t('pret_perso_taux_annuel_effectif_global')}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">1 000€ - 75 000€</div>
                <p className="text-white/90">{t('pret_perso_montant_pret')}</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">12 - 84 mois</div>
                <p className="text-white/90">{t('pret_perso_duree_remboursement')}</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24h</div>
                <p className="text-white/90">{t('pret_perso_reponse_principe')}</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">{t('pret_perso_travaux')}</h4>
              <p className="text-sm text-gray-600">{t('pret_perso_renovation_amenagement_extension')}</p>
            </div>
            
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-[#F26A21] transition-colors">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">{t('pret_perso_voyage')}</h4>
              <p className="text-sm text-gray-600">{t('pret_perso_vacances_tourisme_decouverte')}</p>
            </div>
            
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-green-600 transition-colors">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">{t('pret_perso_auto_moto')}</h4>
              <p className="text-sm text-gray-600">{t('pret_perso_achat_neuf_occasion')}</p>
            </div>
            
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-purple-600 transition-colors">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">{t('pret_perso_projets_perso')}</h4>
              <p className="text-sm text-gray-600">{t('pret_perso_etudes_mariage_equipement')}</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-[#0C3B66] mb-8 text-center">{t('pret_perso_simulateur_pret_personnel')}</h3>
            <div className="bg-[#F7F7F7] p-8 rounded-2xl">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Montant souhaité (€)</label>
                  <input type="range" min="1000" max="75000" step="1000" className="w-full mb-2" />
                  <div className="text-2xl font-bold text-[#0C3B66] text-center">15 000€</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Durée (mois)</label>
                  <input type="range" min="12" max="84" step="6" className="w-full mb-2" />
                  <div className="text-2xl font-bold text-[#0C3B66] text-center">48 mois</div>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <div className="text-sm text-gray-600 mb-2">{t('pret_perso_mensualite_estimee')}</div>
                  <div className="text-3xl font-bold text-[#F26A21] mb-4">324€</div>
                  <div className="text-sm text-gray-600 mb-1">{t('pret_perso_taeg_fixe')}</div>
                  <div className="text-xl font-bold text-[#0C3B66] mb-4">1,99%*</div>
                  <button className="w-full bg-[#0C3B66] text-white py-3 rounded-lg font-semibold hover:bg-[#0E3A5D] transition-colors">{t('pret_perso_demander_pret')}</button>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 grid md:grid-cols-2 gap-8"
          >
            <div className="bg-gradient-to-br from-[#F26A21]/10 to-[#0C3B66]/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-[#0C3B66] mb-6">{t('pret_perso_avantages_exclusifs')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#F26A21] text-xl mr-3">✓</span>
                  <div>
                    <span className="font-semibold">{t('pret_perso_taux_fixe_garanti')}</span>
                    <p className="text-gray-600 text-sm">{t('pret_perso_pas_surprise_votre_mensualite')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F26A21] text-xl mr-3">✓</span>
                  <div>
                    <span className="font-semibold">{t('pret_perso_remboursement_anticipe_gratuit')}</span>
                    <p className="text-gray-600 text-sm">{t('pret_perso_remboursez_quand_vous_voulez')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F26A21] text-xl mr-3">✓</span>
                  <div>
                    <span className="font-semibold">{t('pret_perso_adaptation_mensualites')}</span>
                    <p className="text-gray-600 text-sm">{t('pret_perso_modifiez_vos_echeances_cas')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F26A21] text-xl mr-3">✓</span>
                  <div>
                    <span className="font-semibold">{t('pret_perso_assurance_emprunteur_optionnelle')}</span>
                    <p className="text-gray-600 text-sm">{t('pret_perso_protegez_vous_contre_les')}</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-[#0C3B66]/10 to-[#F26A21]/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-[#0C3B66] mb-6">{t('pret_perso_processus_simplifie')}</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#0C3B66] text-white rounded-full flex items-center justify-center mr-4 font-bold">
                    1
                  </div>
                  <div>
                    <span className="font-semibold">{t('pret_perso_simulation_ligne')}</span>
                    <p className="text-gray-600 text-sm">{t('pret_perso_obtenez_votre_estimation_instantanee')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#0C3B66] text-white rounded-full flex items-center justify-center mr-4 font-bold">
                    2
                  </div>
                  <div>
                    <span className="font-semibold">{t('pret_perso_depot_dossier')}</span>
                    <p className="text-gray-600 text-sm">{t('pret_perso_remplissez_formulaire_minutes')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#0C3B66] text-white rounded-full flex items-center justify-center mr-4 font-bold">
                    3
                  </div>
                  <div>
                    <span className="font-semibold">{t('pret_perso_reponse_rapide')}</span>
                    <p className="text-gray-600 text-sm">{t('pret_perso_decision_sous_24h')}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#0C3B66] text-white rounded-full flex items-center justify-center mr-4 font-bold">
                    4
                  </div>
                  <div>
                    <span className="font-semibold">{t('pret_perso_versement_des_fonds')}</span>
                    <p className="text-gray-600 text-sm">{t('pret_perso_virement_sur_votre_compte')}</p>
                  </div>
                </div>
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
                <span className="font-bold text-[#F26A21]">*TAEG 1,99% sous réserve d'acceptation de votre dossier</span>
              </p>
              <p className="text-sm text-gray-600">{t('pret_perso_exemple_000_sur_mois')}</p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
