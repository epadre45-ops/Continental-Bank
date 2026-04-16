import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function PretAuto() {
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
          >{t('pret_auto_pret_auto')}</motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-center text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Le véhicule de vos rêves à portée de main. 
            Notre prêt automobile vous permet de financer l'achat de votre voiture 
            neuve ou d'occasion avec des taux avantageux et des conditions flexibles. 
            Profitez d'une réponse rapide et d'un accompagnement personnalisé 
            pour rouler en toute tranquillité.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16 bg-gradient-to-r from-[#0C3B66] to-[#0E3A5D] text-white p-8 rounded-2xl"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">{t('pret_auto_taeg_competitif')}</h3>
              <div className="text-5xl font-bold text-[#F26A21] mb-2">2,45%*</div>
              <p className="text-white/90">{t('pret_auto_taux_annuel_effectif_global')}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">5 000€ - 100 000€</div>
                <p className="text-white/90">{t('pret_auto_montant_pret')}</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">12 - 96 mois</div>
                <p className="text-white/90">{t('pret_auto_duree_remboursement')}</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24h</div>
                <p className="text-white/90">{t('pret_auto_reponse_principe')}</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 grid md:grid-cols-2 gap-8"
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">{t('pret_auto_vehicule_neuf')}</h3>
              <div className="text-3xl font-bold text-blue-600 text-center mb-4">TAEG 2,45%*</div>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>{t('pret_auto_jusqu_100_000_finances')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>{t('pret_auto_duree_jusqu_ans')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>{t('pret_auto_taux_fixe_garanti')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>{t('pret_auto_apport_optionnel')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>{t('pret_auto_assurance_perte_emploi_incluse')}</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">{t('pret_auto_simuler_mon_pret_neuf')}</button>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6">{t('pret_auto_vehicule_occasion')}</h3>
              <div className="text-3xl font-bold text-green-600 text-center mb-4">TAEG 2,95%*</div>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('pret_auto_jusqu_000_finances')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('pret_auto_vehicules_moins_ans')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('pret_auto_duree_jusqu_ans')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('pret_auto_inspection_vehicule_offerte')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('pret_auto_garantie_mecanique_ans')}</span>
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">{t('pret_auto_simuler_mon_pret_occasion')}</button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-[#0C3B66] mb-8 text-center">{t('pret_auto_simulateur_pret_auto')}</h3>
            <div className="bg-[#F7F7F7] p-8 rounded-2xl">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('pret_auto_type_vehicule')}</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg mb-4">
                    <option>{t('pret_auto_vehicule_neuf')}</option>
                    <option>{t('pret_auto_vehicule_occasion')}</option>
                  </select>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Montant souhaité (€)</label>
                  <input type="range" min="5000" max="100000" step="1000" className="w-full mb-2" />
                  <div className="text-2xl font-bold text-[#0C3B66] text-center">25 000€</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Durée (mois)</label>
                  <input type="range" min="12" max="96" step="6" className="w-full mb-2" />
                  <div className="text-2xl font-bold text-[#0C3B66] text-center">60 mois</div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Apport (€)</label>
                    <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="0" />
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <div className="text-sm text-gray-600 mb-2">{t('pret_auto_mensualite_estimee')}</div>
                  <div className="text-3xl font-bold text-[#F26A21] mb-4">445€</div>
                  <div className="text-sm text-gray-600 mb-1">{t('pret_auto_taeg_fixe')}</div>
                  <div className="text-xl font-bold text-[#0C3B66] mb-4">2,45%*</div>
                  <button className="w-full bg-[#0C3B66] text-white py-3 rounded-lg font-semibold hover:bg-[#0E3A5D] transition-colors">{t('pret_auto_demander_pret')}</button>
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
            <h3 className="text-2xl font-bold text-[#0C3B66] mb-6">{t('pret_auto_services_inclus')}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0C3B66]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#0C3B66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[#0C3B66] mb-2">{t('pret_auto_garantie_vehicule')}</h4>
                <p className="text-gray-600 text-sm">{t('pret_auto_protection_mecanique_panne')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F26A21]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#F26A21]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[#F26A21] mb-2">{t('pret_auto_assurance_auto')}</h4>
                <p className="text-gray-600 text-sm">{t('pret_auto_tous_risques_premiere_annee')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-green-600 mb-2">{t('pret_auto_deblocage_rapide')}</h4>
                <p className="text-gray-600 text-sm">{t('pret_auto_virement_48h_chez_vendeur')}</p>
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
                <span className="font-bold text-[#F26A21]">*TAEG à partir de 2,45% sous réserve d'acceptation de votre dossier</span>
              </p>
              <p className="text-sm text-gray-600">{t('pret_auto_exemple_000_sur_mois')}</p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
