import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function DemandeRachatCredit() {
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
          >{t('demande_rachat_credit_demande_rachat_credits')}</motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-center text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Simplifiez vos finances en regroupant tous vos crédits en un seul. 
            Bénéficiez d'une mensualité réduite, d'un meilleur taux 
            et d'une gestion simplifiée de vos finances.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#0C3B66] mb-8">{t('demande_rachat_credit_informations_personnelles')}</h3>
              
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
                    <option>{t('demande_rachat_credit_celibataire')}</option>
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
              
              <h3 className="text-2xl font-bold text-[#0C3B66] mb-6">{t('demande_rachat_credit_situation_professionnelle')}</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Profession *</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_rachat_credit_salarie')}</option>
                    <option>{t('demande_rachat_credit_fonctionnaire')}</option>
                    <option>{t('demande_rachat_credit_profession_liberale')}</option>
                    <option>{t('demande_rachat_credit_retraite')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type de contrat *</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_rachat_credit_cdi')}</option>
                    <option>{t('demande_rachat_credit_fonctionnaire')}</option>
                    <option>{t('demande_rachat_credit_cdd')}</option>
                    <option>{t('demande_rachat_credit_interim')}</option>
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
                    <option>{t('demande_rachat_credit_moins')}</option>
                    <option>1-3 ans</option>
                    <option>3-5 ans</option>
                    <option>5-10 ans</option>
                    <option>{t('demande_rachat_credit_plus_ans')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('demande_rachat_credit_autres_revenus_mensuels')}</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="500" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#0C3B66] mb-6">{t('demande_rachat_credit_credits_racheter')}</h3>
              
              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-[#0C3B66] mb-4">{t('demande_rachat_credit_credit')}</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Type de crédit *</label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg">
                        <option>Sélectionnez...</option>
                        <option>{t('demande_rachat_credit_pret_immobilier')}</option>
                        <option>{t('demande_rachat_credit_pret_auto')}</option>
                        <option>{t('demande_rachat_credit_credit_conso')}</option>
                        <option>{t('demande_rachat_credit_reserve_argent')}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Banque prêteuse *</label>
                      <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Nom de la banque" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mensualité actuelle (€) *</label>
                      <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="850" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Capital restant dû (€) *</label>
                      <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="45000" />
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-[#0C3B66] mb-4">{t('demande_rachat_credit_credit')}</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Type de crédit *</label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg">
                        <option>Sélectionnez...</option>
                        <option>{t('demande_rachat_credit_pret_immobilier')}</option>
                        <option>{t('demande_rachat_credit_pret_auto')}</option>
                        <option>{t('demande_rachat_credit_credit_conso')}</option>
                        <option>{t('demande_rachat_credit_reserve_argent')}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Banque prêteuse *</label>
                      <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Nom de la banque" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mensualité actuelle (€) *</label>
                      <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="320" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Capital restant dû (€) *</label>
                      <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="12000" />
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-[#0C3B66] mb-4">{t('demande_rachat_credit_credit')}</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Type de crédit *</label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg">
                        <option>Sélectionnez...</option>
                        <option>{t('demande_rachat_credit_pret_immobilier')}</option>
                        <option>{t('demande_rachat_credit_pret_auto')}</option>
                        <option>{t('demande_rachat_credit_credit_conso')}</option>
                        <option>{t('demande_rachat_credit_reserve_argent')}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Banque prêteuse *</label>
                      <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Nom de la banque" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mensualité actuelle (€) *</label>
                      <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="180" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Capital restant dû (€) *</label>
                      <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="8000" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#F7F7F7] p-6 rounded-lg mb-8">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-sm text-gray-600 mb-2">{t('demande_rachat_credit_total_mensualites_actuelles')}</div>
                    <div className="text-2xl font-bold text-[#0C3B66]">1 350€</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-2">{t('demande_rachat_credit_total_capital_restant')}</div>
                    <div className="text-2xl font-bold text-[#0C3B66]">65 000€</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-2">{t('demande_rachat_credit_economie_potentielle')}</div>
                    <div className="text-2xl font-bold text-[#F26A21]">{t('demande_rachat_credit_405_mois')}</div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#0C3B66] mb-6">{t('demande_rachat_credit_nouveau_financement')}</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Montant total à racheter (€) *</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="65000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Trésorerie souhaitée (€)</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="10000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Montant total du prêt (€) *</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="75000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Durée souhaitée (années) *</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>10 ans</option>
                    <option>12 ans</option>
                    <option>15 ans</option>
                    <option>20 ans</option>
                    <option>25 ans</option>
                  </select>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[#0C3B66] mb-6">{t('demande_rachat_credit_situation_actuelle')}</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Statut de propriétaire *</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option>Sélectionnez...</option>
                    <option>{t('demande_rachat_credit_proprietaire')}</option>
                    <option>{t('demande_rachat_credit_locataire')}</option>
                    <option>{t('demande_rachat_credit_loge_gratuitement')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Loyer mensuel actuel (€)</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="800" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Autres dettes (impôts, etc.)</label>
                  <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="200" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('demande_rachat_credit_banque_actuelle')}</label>
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
                <button className="bg-[#0C3B66] text-white px-12 py-4 rounded-lg font-semibold hover:bg-[#0E3A5D] transition-colors">{t('demande_rachat_credit_soumettre_demande')}</button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 bg-[#F7F7F7] p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-[#0C3B66] mb-6">{t('demande_rachat_credit_documents_requis')}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#0C3B66] mb-4">{t('demande_rachat_credit_documents_identite')}</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('demande_rachat_credit_carte_identite_passeport')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('demande_rachat_credit_justificatif_domicile')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('demande_rachat_credit_releve_identite_bancaire')}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#0C3B66] mb-4">{t('demande_rachat_credit_documents_financiers')}</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('demande_rachat_credit_tableaux_amortissement_des_c')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>3 derniers bulletins de salaire</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#F26A21] mr-2">•</span>
                    <span>{t('demande_rachat_credit_dernier_avis_imposition')}</span>
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
