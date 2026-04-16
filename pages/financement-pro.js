import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function FinancementPro() {
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
          >{t('financement_pro_financement_professionnel')}</motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-center text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Accélérez votre croissance avec nos solutions de financement sur mesure. 
            De la trésorerie quotidienne aux investissements stratégiques, nous vous accompagnons 
            avec des taux compétitifs et une flexibilité adaptée à vos ambitions professionnelles.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <div className="bg-white border-2 border-[#0C3B66] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#0C3B66] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0C3B66] text-center">{t('financement_pro_pret_tresorerie')}</h3>
              <div className="text-3xl font-bold text-[#F26A21] text-center mb-4">TAEG 2,9%*</div>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('financement_pro_jusqu_250_000')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('financement_pro_deblocage_48h')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('financement_pro_remboursement_flexible')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('financement_pro_sans_garantie_personnelle')}</span>
                </li>
              </ul>
              <button className="w-full bg-[#0C3B66] text-white py-3 rounded-lg font-semibold hover:bg-[#0E3A5D] transition-colors">{t('financement_pro_simuler_mon_pret')}</button>
            </div>
            
            <div className="bg-white border-2 border-[#F26A21] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#F26A21] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#F26A21] text-center">{t('financement_pro_credit_immobilier_pro')}</h3>
              <div className="text-3xl font-bold text-[#0C3B66] text-center mb-4">TAEG 1,85%*</div>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('financement_pro_jusqu_millions_euros')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('financement_pro_duree_jusqu_ans')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('financement_pro_taux_fixe_variable')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('financement_pro_options_modulation')}</span>
                </li>
              </ul>
              <button className="w-full bg-[#F26A21] text-white py-3 rounded-lg font-semibold hover:bg-[#E85A1B] transition-colors">{t('financement_pro_demander_devis')}</button>
            </div>
            
            <div className="bg-white border-2 border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">{t('financement_pro_ligne_credit')}</h3>
              <div className="text-3xl font-bold text-[#0C3B66] text-center mb-4">TAEG 3,2%*</div>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('financement_pro_reserve_jusqu_100_000')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('financement_pro_utilisation_demande')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('financement_pro_interets_uniquement_sur_utilise')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('financement_pro_renouvelable_annuellement')}</span>
                </li>
              </ul>
              <button className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">{t('financement_pro_ouvrir_une_ligne')}</button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 bg-gradient-to-r from-[#0C3B66] to-[#0E3A5D] text-white p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">{t('financement_pro_notre_approche_financement')}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold">1</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">{t('financement_pro_analyse_personnalisee')}</h4>
                <p className="text-white/90">{t('financement_pro_etude_complete_votre_projet')}</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold">2</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">{t('financement_pro_reponse_rapide')}</h4>
                <p className="text-white/90">{t('financement_pro_decision_sous_48h_deblocage')}</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold">3</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">{t('financement_pro_accompagnement_continu')}</h4>
                <p className="text-white/90">{t('financement_pro_suivi_personnalise_tout_long')}</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-yellow-50 border-2 border-yellow-200 p-6 rounded-xl inline-block">
              <p className="text-lg text-gray-700 mb-2">
                <span className="font-bold text-[#F26A21]">*TAEG variable selon votre profil et le type de financement</span>
              </p>
              <p className="text-sm text-gray-600">{t('financement_pro_sous_reserve_acceptation_votre')}</p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
