import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function DemandePretPersonnel() {
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
          >{t('demande_pret_personnel_demande_pret_personnel')}</motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-center text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Complétez votre demande de prêt personnel en quelques minutes. 
            Notre processus simplifié vous permet d'obtenir une réponse rapide 
            pour financer tous vos projets personnels.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#0C3B66] mb-8">{t('demande_pret_personnel_informations_personnelles')}</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="form-label form-label-required">Nom complet</label>
                  <input type="text" className="form-input" placeholder="Jean Dupont" />
                </div>
                <div>
                  <label className="form-label form-label-required">Email</label>
                  <input type="email" className="form-input" placeholder="jean.dupont@email.com" />
                </div>
                <div>
                  <label className="form-label form-label-required">Téléphone</label>
                  <input type="tel" className="form-input" placeholder="06 12 34 56 78" />
                </div>
                <div>
                  <label className="form-label form-label-required">Date de naissance</label>
                  <input type="date" className="form-input" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#0C3B66] mb-6">{t('demande_pret_personnel_situation_professionnelle')}</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="form-label form-label-required">Profession</label>
                  <select className="form-select">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_personnel_salarie')}</option>
                    <option>{t('demande_pret_personnel_fonctionnaire')}</option>
                    <option>{t('demande_pret_personnel_profession_liberale')}</option>
                    <option>{t('demande_pret_personnel_retraite')}</option>
                    <option>{t('demande_pret_personnel_etudiant')}</option>
                  </select>
                </div>
                <div>
                  <label className="form-label form-label-required">Revenu mensuel net</label>
                  <input type="number" className="form-input" placeholder="2500" />
                </div>
                <div>
                  <label className="form-label form-label-required">Type de contrat</label>
                  <select className="form-select">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_personnel_cdi')}</option>
                    <option>{t('demande_pret_personnel_cdd')}</option>
                    <option>{t('demande_pret_personnel_interim')}</option>
                    <option>{t('demande_pret_personnel_autre')}</option>
                  </select>
                </div>
                <div>
                  <label className="form-label form-label-required">Ancienneté</label>
                  <select className="form-select">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_personnel_moins')}</option>
                    <option>1-3 ans</option>
                    <option>3-5 ans</option>
                    <option>{t('demande_pret_personnel_plus_ans')}</option>
                  </select>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#0C3B66] mb-6">{t('demande_pret_personnel_details_pret')}</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="form-label form-label-required">Montant souhaité (€)</label>
                  <input type="number" className="form-input" placeholder="15000" />
                </div>
                <div>
                  <label className="form-label form-label-required">Durée souhaitée (mois)</label>
                  <select className="form-select">
                    <option>Sélectionnez...</option>
                    <option>12 mois</option>
                    <option>24 mois</option>
                    <option>36 mois</option>
                    <option>48 mois</option>
                    <option>60 mois</option>
                    <option>72 mois</option>
                    <option>84 mois</option>
                  </select>
                </div>
                <div>
                  <label className="form-label form-label-required">Type de projet</label>
                  <select className="form-select">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_personnel_travaux')}</option>
                    <option>{t('demande_pret_personnel_voyage')}</option>
                    <option>{t('demande_pret_personnel_achat_vehicule')}</option>
                    <option>{t('demande_pret_personnel_projets_personnels')}</option>
                    <option>{t('demande_pret_personnel_autre')}</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Mensualité maximale souhaitée (€)</label>
                  <input type="number" className="form-input" placeholder="400" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#0C3B66] mb-6">{t('demande_pret_personnel_situation_financiere')}</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="form-label form-label-required">Statut de propriétaire</label>
                  <select className="form-select">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_personnel_proprietaire')}</option>
                    <option>{t('demande_pret_personnel_locataire')}</option>
                    <option>{t('demande_pret_personnel_loge_gratuitement')}</option>
                  </select>
                </div>
                <div>
                  <label className="form-label form-label-required">Nombre de personnes à charge</label>
                  <input type="number" className="form-input" placeholder="2" />
                </div>
                <div>
                  <label className="form-label">{t('demande_pret_personnel_autres_credits_cours')}</label>
                  <select className="form-select">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_personnel_non')}</option>
                    <option>{t('demande_pret_personnel_oui_moins_200_mois')}</option>
                    <option>{t('demande_pret_personnel_oui_entre_200_500')}</option>
                    <option>{t('demande_pret_personnel_oui_plus_500_mois')}</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">{t('demande_pret_personnel_banque_actuelle')}</label>
                  <input type="text" className="form-input" placeholder="Nom de votre banque" />
                </div>
              </div>
              
              <div className="mb-8">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2 text-sm text-gray-700">
                    J'accepte que mes informations soient utilisées pour l'étude de ma demande *
                  </span>
                </label>
              </div>
              
              <div className="mb-8">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2 text-sm text-gray-700">
                    Je souhaite recevoir des offres commerciales personnalisées *
                  </span>
                </label>
              </div>
              
              <div className="text-center">
                <button className="form-button-primary w-full max-w-xs">{t('demande_pret_personnel_soumettre_demande')}</button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 bg-[#F7F7F7] p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-[#0C3B66] mb-6">{t('demande_pret_personnel_documents_requis')}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#0C3B66] mb-4">{t('demande_pret_personnel_documents_identite')}</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('demande_pret_personnel_carte_identite_passeport')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('demande_pret_personnel_justificatif_domicile')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('demande_pret_personnel_releve_identite_bancaire')}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#0C3B66] mb-4">{t('demande_pret_personnel_documents_financiers')}</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>3 derniers bulletins de salaire</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('demande_pret_personnel_dernier_avis_imposition')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>Relevés de compte (3 mois)</span>
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
