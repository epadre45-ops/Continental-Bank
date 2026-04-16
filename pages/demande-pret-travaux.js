import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function DemandePretTravaux() {
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
          >{t('demande_pret_travaux_demande_pret_travaux')}</motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-center text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Donnez un coup de neuf à votre logement avec notre prêt travaux. 
            De la rénovation énergétique à l'aménagement, financez tous 
            vos projets avec des taux avantageux et des aides intégrées.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#0C3B66] mb-8">{t('demande_pret_travaux_informations_personnelles')}</h3>
              
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Profession *</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_travaux_salarie')}</option>
                    <option>{t('demande_pret_travaux_fonctionnaire')}</option>
                    <option>{t('demande_pret_travaux_profession_liberale')}</option>
                    <option>{t('demande_pret_travaux_retraite')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Revenu mensuel net *</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="2800" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#0C3B66] mb-6">{t('demande_pret_travaux_informations_sur_logement')}</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type de logement *</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_travaux_maison')}</option>
                    <option>{t('demande_pret_travaux_appartement')}</option>
                    <option>{t('demande_pret_travaux_studio')}</option>
                    <option>{t('demande_pret_travaux_villa')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Statut de propriétaire *</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_travaux_proprietaire')}</option>
                    <option>{t('demande_pret_travaux_locataire')}</option>
                    <option>{t('demande_pret_travaux_accedant_propriete')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Surface habitable (m²) *</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="120" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Année de construction *</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="1985" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre de pièces *</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="5" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type de chauffage *</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_travaux_electrique')}</option>
                    <option>{t('demande_pret_travaux_gaz')}</option>
                    <option>{t('demande_pret_travaux_fioul')}</option>
                    <option>{t('demande_pret_travaux_bois')}</option>
                    <option>{t('demande_pret_travaux_pompe_chaleur')}</option>
                  </select>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#0C3B66] mb-6">{t('demande_pret_travaux_details_des_travaux')}</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type de travaux *</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_travaux_renovation_energetique')}</option>
                    <option>{t('demande_pret_travaux_amenagement_interieur')}</option>
                    <option>{t('demande_pret_travaux_extension')}</option>
                    <option>{t('demande_pret_travaux_renovation_complete')}</option>
                    <option>{t('demande_pret_travaux_travaux_exterieurs')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Coût total des travaux (€) *</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="35000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Montant à financer (€) *</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="30000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Durée souhaitée (mois) *</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>12 mois</option>
                    <option>24 mois</option>
                    <option>36 mois</option>
                    <option>48 mois</option>
                    <option>60 mois</option>
                    <option>84 mois</option>
                    <option>96 mois</option>
                    <option>120 mois</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('demande_pret_travaux_date_debut_travaux_prevue')}</label>
                  <input type="date" className="w-full p-3 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Durée des travaux (mois)</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="3" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#0C3B66] mb-6">{t('demande_pret_travaux_aides_subventions')}</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Éligibilité MaPrimeRénov *</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_travaux_oui_eligible')}</option>
                    <option>{t('demande_pret_travaux_non_non_eligible')}</option>
                    <option>{t('demande_pret_travaux_cours_etude')}</option>
                    <option>{t('demande_pret_travaux_sais_pas')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Montant MaPrimeRénov estimé (€)</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="8000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Éligibilité CEE *</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_travaux_oui_eligible')}</option>
                    <option>{t('demande_pret_travaux_non_non_eligible')}</option>
                    <option>{t('demande_pret_travaux_sais_pas')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Montant CEE estimé (€)</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="2000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Éligibilité Anah *</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_travaux_oui_eligible')}</option>
                    <option>{t('demande_pret_travaux_non_non_eligible')}</option>
                    <option>{t('demande_pret_travaux_sais_pas')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Éligibilité Action Logement *</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_travaux_oui_eligible')}</option>
                    <option>{t('demande_pret_travaux_non_non_eligible')}</option>
                    <option>{t('demande_pret_travaux_sais_pas')}</option>
                  </select>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#0C3B66] mb-6">{t('demande_pret_travaux_situation_financiere')}</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('demande_pret_travaux_autres_credits_cours')}</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_travaux_non')}</option>
                    <option>{t('demande_pret_travaux_oui_moins_200_mois')}</option>
                    <option>{t('demande_pret_travaux_oui_entre_200_500')}</option>
                    <option>{t('demande_pret_travaux_oui_plus_500_mois')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Total mensualités autres crédits (€)</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="350" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre de personnes à charge *</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('demande_pret_travaux_banque_actuelle')}</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Nom de votre banque" />
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
                <button className="bg-[#0C3B66] text-white px-12 py-4 rounded-lg font-semibold hover:bg-[#0E3A5D] transition-colors">{t('demande_pret_travaux_soumettre_demande')}</button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 bg-[#F7F7F7] p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-[#0C3B66] mb-6">{t('demande_pret_travaux_documents_requis')}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#0C3B66] mb-4">{t('demande_pret_travaux_documents_identite')}</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('demande_pret_travaux_carte_identite_passeport')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('demande_pret_travaux_justificatif_domicile')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('demande_pret_travaux_releve_identite_bancaire')}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#0C3B66] mb-4">{t('demande_pret_travaux_documents_financiers')}</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>3 derniers bulletins de salaire</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('demande_pret_travaux_dernier_avis_imposition')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('demande_pret_travaux_devis_des_travaux')}</span>
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
