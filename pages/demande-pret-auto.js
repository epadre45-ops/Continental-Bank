import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function DemandePretAuto() {
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
          >{t('demande_pret_auto_demande_pret_auto')}</motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-center text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Financez l'achat de votre véhicule avec notre prêt auto avantageux. 
            Que vous choisissiez un véhicule neuf ou d'occasion, 
            nous vous proposons des taux compétitifs et des conditions flexibles.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#0C3B66] mb-8">{t('demande_pret_auto_informations_personnelles')}</h3>
              
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
                    <option>{t('demande_pret_auto_salarie')}</option>
                    <option>{t('demande_pret_auto_fonctionnaire')}</option>
                    <option>{t('demande_pret_auto_profession_liberale')}</option>
                    <option>{t('demande_pret_auto_retraite')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Revenu mensuel net *</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="2500" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#0C3B66] mb-6">{t('demande_pret_auto_informations_sur_vehicule')}</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type de véhicule *</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_auto_vehicule_neuf')}</option>
                    <option>{t('demande_pret_auto_vehicule_occasion')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Marque *</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Renault" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Modèle *</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Clio" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Année de première immatriculation *</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="2022" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Kilométrage *</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="25000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type de carburant *</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_auto_essence')}</option>
                    <option>{t('demande_pret_auto_diesel')}</option>
                    <option>{t('demande_pret_auto_hybride')}</option>
                    <option>{t('demande_pret_auto_electrique')}</option>
                  </select>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#0C3B66] mb-6">{t('demande_pret_auto_details_pret')}</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Prix du véhicule (€) *</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="25000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Apport personnel (€)</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="5000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Montant à financer (€) *</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="20000" />
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
                    <option>72 mois</option>
                    <option>84 mois</option>
                    <option>96 mois</option>
                  </select>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#0C3B66] mb-6">{t('demande_pret_auto_informations_complementaires')}</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Statut de propriétaire *</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_auto_proprietaire')}</option>
                    <option>{t('demande_pret_auto_locataire')}</option>
                    <option>{t('demande_pret_auto_loge_gratuitement')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre de personnes à charge *</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('demande_pret_auto_autres_credits_cours')}</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_pret_auto_non')}</option>
                    <option>{t('demande_pret_auto_oui_moins_200_mois')}</option>
                    <option>{t('demande_pret_auto_oui_entre_200_500')}</option>
                    <option>{t('demande_pret_auto_oui_plus_500_mois')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('demande_pret_auto_banque_actuelle')}</label>
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
                <button className="bg-[#0C3B66] text-white px-12 py-4 rounded-lg font-semibold hover:bg-[#0E3A5D] transition-colors">{t('demande_pret_auto_soumettre_demande')}</button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 bg-[#F7F7F7] p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-[#0C3B66] mb-6">{t('demande_pret_auto_documents_requis')}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#0C3B66] mb-4">{t('demande_pret_auto_documents_identite')}</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('demande_pret_auto_carte_identite_passeport')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('demande_pret_auto_justificatif_domicile')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('demande_pret_auto_permis_conduire')}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#0C3B66] mb-4">{t('demande_pret_auto_documents_financiers')}</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>3 derniers bulletins de salaire</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('demande_pret_auto_dernier_avis_imposition')}</span>
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
