import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function AssurancePerso() {
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
          >{t('assurance_perso_assurance_personnelle')}</motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-center text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Protégez ce qui compte le plus avec nos solutions d'assurance complètes. 
            De la santé à votre habitation, en passant par vos voyages et votre véhicule, 
            nous vous garantissons une tranquillité d'esprit totale avec des couvertures 
            adaptées à votre vie et à votre budget.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Assurance Santé */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">{t('assurance_perso_assurance_sante')}</h3>
              <div className="text-3xl font-bold text-blue-600 text-center mb-4">{t('assurance_perso_partir_mois')}</div>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>{t('assurance_perso_hopital_clinique_medecine_ville')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>{t('assurance_perso_dentaire_optique_audiologie')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>{t('assurance_perso_medicaments_100_rembourses')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>{t('assurance_perso_prise_charge_etranger')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>{t('assurance_perso_tiers_payant_generalise')}</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">{t('assurance_perso_devis_personnalise')}</button>
            </div>
            
            {/* Assurance Habitation */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">{t('assurance_perso_assurance_habitation')}</h3>
              <div className="text-3xl font-bold text-green-600 text-center mb-4">{t('assurance_perso_partir_mois')}</div>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('assurance_perso_incendie_explosion_degats_des')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('assurance_perso_vol_tentative_vol_vandalisme')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('assurance_perso_catastrophes_naturelles')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('assurance_perso_responsabilite_civile_vie_privee')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{t('assurance_perso_protection_juridique')}</span>
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">{t('assurance_perso_devis_personnalise')}</button>
            </div>
            
            {/* Assurance Auto */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">{t('assurance_perso_assurance_auto')}</h3>
              <div className="text-3xl font-bold text-purple-600 text-center mb-4">{t('assurance_perso_partir_mois')}</div>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>{t('assurance_perso_tous_risques_tiers')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>{t('assurance_perso_assistance_depannage')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>{t('assurance_perso_vehicule_remplacement')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>{t('assurance_perso_bris_glaces_inclus')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">✓</span>
                  <span>{t('assurance_perso_protection_juridique')}</span>
                </li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">{t('assurance_perso_devis_personnalise')}</button>
            </div>
            
            {/* Assurance Voyage */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-orange-900 mb-4 text-center">{t('assurance_perso_assurance_voyage')}</h3>
              <div className="text-3xl font-bold text-orange-600 text-center mb-4">{t('assurance_perso_partir_voyage')}</div>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>{t('assurance_perso_frais_medicaux_etranger')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>{t('assurance_perso_annulation_interruption_voyage')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>{t('assurance_perso_perte_vol_retard_bagages')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>{t('assurance_perso_rapatriement_medical')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>{t('assurance_perso_responsabilite_civile_etranger')}</span>
                </li>
              </ul>
              <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">{t('assurance_perso_devis_personnalise')}</button>
            </div>
            
            {/* Assurance Prévoyance */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-red-900 mb-4 text-center">{t('assurance_perso_prevoyance')}</h3>
              <div className="text-3xl font-bold text-red-600 text-center mb-4">{t('assurance_perso_partir_mois')}</div>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span>{t('assurance_perso_arret_travail_invalidite')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span>{t('assurance_perso_deces_capital_obseques')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span>{t('assurance_perso_garantie_perte_emploi')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span>{t('assurance_perso_rente_education')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span>{t('assurance_perso_indemnites_journalieres_majorees')}</span>
                </li>
              </ul>
              <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">{t('assurance_perso_devis_personnalise')}</button>
            </div>
            
            {/* Assurance Scolaire */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-indigo-900 mb-4 text-center">{t('assurance_perso_assurance_scolaire')}</h3>
              <div className="text-3xl font-bold text-indigo-600 text-center mb-4">{t('assurance_perso_partir_mois')}</div>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">✓</span>
                  <span>{t('assurance_perso_accidents_scolaires_extrascolaires')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">✓</span>
                  <span>{t('assurance_perso_frais_medicaux_hospitalisation')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">✓</span>
                  <span>{t('assurance_perso_scolarite_cas_accident')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">✓</span>
                  <span>{t('assurance_perso_responsabilite_civile_familiale')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">✓</span>
                  <span>{t('assurance_perso_assistance_psychologique')}</span>
                </li>
              </ul>
              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">{t('assurance_perso_devis_personnalise')}</button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 bg-gradient-to-r from-[#0C3B66] to-[#0E3A5D] text-white p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Pourquoi choisir nos assurances ?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">{t('assurance_perso_reponse_rapide')}</h4>
                <p className="text-white/90">{t('assurance_perso_indemnisation_sous_48h_pour')}</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">{t('assurance_perso_assistance')}</h4>
                <p className="text-white/90">{t('assurance_perso_support_disponible_tous_les')}</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">{t('assurance_perso_garantie_totale')}</h4>
                <p className="text-white/90">{t('assurance_perso_couverture_complete_sans_surprise')}</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-[#F26A21] text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">{t('assurance_perso_devis_gratuit_personnalise')}</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Répondez à quelques questions et obtenez instantanément le devis 
                le plus adapté à votre situation et à votre budget.
              </p>
              <button className="bg-white text-[#F26A21] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">{t('assurance_perso_obtenir_mon_devis_maintenant')}</button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
