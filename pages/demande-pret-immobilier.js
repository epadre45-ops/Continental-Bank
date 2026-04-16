import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function DemandePretImmobilier() {
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
          >{t('demande_pret_immobilier_demande_pret_immobilier')}</motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-center text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Réalisez votre projet immobilier avec notre financement sur mesure. 
            Que vous soyez primo-accédant ou investisseur, 
            nous vous accompagnons dans l'achat de votre logement.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#0C3B66] mb-8">{t('demande_pret_immobilier_informations_personnelles')}</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet *</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Jean Dupont" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input type="email" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="jean.dupont@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                  <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="06 12 34 56 78" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date de naissance *</label>
                  <input type="date" className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Situation familiale *</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_immobilier_celibataire')}</option>
                    <option>Marié(e)</option>
                    <option>Pacsé(e)</option>
                    <option>Divorcé(e)</option>
                    <option>Veuf(ve)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre d'enfants à charge *</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="2" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#0C3B66] mb-6">{t('demande_pret_immobilier_situation_professionnelle')}</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Profession *</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_immobilier_salarie')}</option>
                    <option>{t('demande_pret_immobilier_fonctionnaire')}</option>
                    <option>{t('demande_pret_immobilier_profession_liberale')}</option>
                    <option>{t('demande_pret_immobilier_retraite')}</option>
                    <option>{t('demande_pret_immobilier_cadre')}</option>
                    <option>{t('demande_pret_immobilier_profession_intermediaire')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type de contrat *</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_immobilier_cdi')}</option>
                    <option>{t('demande_pret_immobilier_fonctionnaire')}</option>
                    <option>{t('demande_pret_immobilier_cdd')}</option>
                    <option>{t('demande_pret_immobilier_interim')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Revenu mensuel net *</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="3500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Revenu mensuel conjoint *</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="2800" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ancienneté *</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_immobilier_moins')}</option>
                    <option>1-3 ans</option>
                    <option>3-5 ans</option>
                    <option>5-10 ans</option>
                    <option>{t('demande_pret_immobilier_plus_ans')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('demande_pret_immobilier_autres_revenus_mensuels')}</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="500" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#0C3B66] mb-6">{t('demande_pret_immobilier_informations_sur_projet')}</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type de projet *</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_immobilier_residence_principale')}</option>
                    <option>{t('demande_pret_immobilier_investissement_locatif')}</option>
                    <option>{t('demande_pret_immobilier_residence_secondaire')}</option>
                    <option>{t('demande_pret_immobilier_construction')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type de bien *</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_immobilier_appartement')}</option>
                    <option>{t('demande_pret_immobilier_maison')}</option>
                    <option>{t('demande_pret_immobilier_studio')}</option>
                    <option>{t('demande_pret_immobilier_villa')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Prix du bien (€) *</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="300000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Apport personnel (€) *</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="30000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Montant à financer (€) *</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="270000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Durée souhaitée (années) *</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>10 ans</option>
                    <option>15 ans</option>
                    <option>20 ans</option>
                    <option>25 ans</option>
                    <option>30 ans</option>
                  </select>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#0C3B66] mb-6">{t('demande_pret_immobilier_situation_actuelle')}</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Statut de propriétaire actuel *</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_immobilier_proprietaire')}</option>
                    <option>{t('demande_pret_immobilier_locataire')}</option>
                    <option>{t('demande_pret_immobilier_loge_gratuitement')}</option>
                    <option>{t('demande_pret_immobilier_accedant_propriete')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Loyer mensuel actuel (€)</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="800" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Autres crédits en cours *</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_immobilier_non')}</option>
                    <option>{t('demande_pret_immobilier_oui_moins_500_mois')}</option>
                    <option>{t('demande_pret_immobilier_oui_entre_500_1000')}</option>
                    <option>{t('demande_pret_immobilier_oui_plus_1000_mois')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Total mensualités autres crédits (€)</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="450" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#0C3B66] mb-6">{t('demande_pret_immobilier_aides_dispositifs')}</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Éligibilité PTZ *</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_immobilier_oui_eligible')}</option>
                    <option>{t('demande_pret_immobilier_non_non_eligible')}</option>
                    <option>{t('demande_pret_immobilier_sais_pas')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Éligibilité APL *</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_immobilier_oui_eligible')}</option>
                    <option>{t('demande_pret_immobilier_non_non_eligible')}</option>
                    <option>{t('demande_pret_immobilier_sais_pas')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Éligibilité Pinel/Denormandie *</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_immobilier_oui_eligible')}</option>
                    <option>{t('demande_pret_immobilier_non_non_eligible')}</option>
                    <option>{t('demande_pret_immobilier_sais_pas')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Aide Action Logement *</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_immobilier_oui_eligible')}</option>
                    <option>{t('demande_pret_immobilier_non_non_eligible')}</option>
                    <option>{t('demande_pret_immobilier_sais_pas')}</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-8">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-700">
                    J'accepte que mes informations soient utilisées pour l'étude de ma demande *
                  </span>
                </label>
              </div>
              
              <div className="mb-8">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-700">
                    Je souhaite recevoir des offres commerciales personnalisées *
                  </span>
                </label>
              </div>
              
              <div className="text-center">
                <button className="bg-[#0C3B66] text-white px-12 py-4 rounded-lg font-semibold hover:bg-[#0E3A5D] transition-colors">{t('demande_pret_immobilier_soumettre_demande')}</button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 bg-[#F7F7F7] p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-[#0C3B66] mb-6">{t('demande_pret_immobilier_documents_requis')}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#0C3B66] mb-4">{t('demande_pret_immobilier_documents_identite')}</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('demande_pret_immobilier_carte_identite_passeport')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('demande_pret_immobilier_justificatif_domicile')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('demande_pret_immobilier_livret_famille')}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#0C3B66] mb-4">{t('demande_pret_immobilier_documents_financiers')}</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>3 derniers bulletins de salaire</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('demande_pret_immobilier_dernier_avis_imposition')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>Relevés de compte (6 mois)</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
