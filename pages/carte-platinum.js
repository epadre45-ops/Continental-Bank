import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function CartePlatinum() {
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
          >{t('carte_platinum_carte_platinum')}</motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-center text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Le summum de l'excellence bancaire. 
            La carte Platinum représente l'élite de nos services avec des privilèges 
            exclusifs, une couverture assurance inégalée et un service personnalisé 
            pour une expérience de luxe absolue.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16 grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-2xl relative border border-gray-700">
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-8 bg-gradient-to-r from-gray-300 to-gray-500 rounded flex items-center justify-center">
                    <span className="text-xs font-bold text-black">{t('carte_platinum_infinite')}</span>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-gray-400 text-xs">{t('carte_platinum_platinum')}</div>
                    <div className="text-gray-400 text-xs">{t('carte_platinum_premium')}</div>
                  </div>
                </div>
                <div className="mt-16">
                  <div className="text-white text-2xl font-mono mb-8">{t('carte_platinum_9999')}</div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-white/80 text-sm mb-1">{t('carte_platinum_titulaire')}</div>
                      <div className="text-white uppercase tracking-wider font-bold">{t('carte_platinum_alexandre_dubois')}</div>
                    </div>
                    <div>
                      <div className="text-white/80 text-sm mb-1">{t('carte_platinum_expire')}</div>
                      <div className="text-white font-bold">12/28</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-r from-gray-900 to-black text-white p-8 rounded-2xl border border-gray-700">
                <h3 className="text-2xl font-bold mb-6">{t('carte_platinum_privileges_ultimes')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-yellow-400/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-yellow-400">✓</span>
                    </div>
                    <span>{t('carte_platinum_plafond_paiement_illimite')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-yellow-400/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-yellow-400">✓</span>
                    </div>
                    <span>{t('carte_platinum_plafond_retrait_500_jour')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-yellow-400/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-yellow-400">✓</span>
                    </div>
                    <span>{t('carte_platinum_lounges_aeroports_illimitees')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-yellow-400/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-yellow-400">✓</span>
                    </div>
                    <span>{t('carte_platinum_conciergerie_premium')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-yellow-400/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-yellow-400">✓</span>
                    </div>
                    <span>{t('carte_platinum_cashback_sur_achats_selectifs')}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-yellow-400/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-yellow-400">✓</span>
                    </div>
                    <span>{t('carte_platinum_programme_fidelite_vip')}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 bg-gradient-to-br from-gray-900 to-black text-white p-8 rounded-2xl border border-gray-700"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">{t('carte_platinum_services_exclusifs')}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h4 className="font-bold text-yellow-400 mb-2">{t('carte_platinum_lifestyle_manager')}</h4>
                <p className="text-white/90 text-sm">{t('carte_platinum_assistant_personnel_pour_reservatio')}</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-yellow-400 mb-2">{t('carte_platinum_voyages_premium')}</h4>
                <p className="text-white/90 text-sm">{t('carte_platinum_acces_aux_hotels_luxe')}</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h4 className="font-bold text-yellow-400 mb-2">{t('carte_platinum_wealth_management')}</h4>
                <p className="text-white/90 text-sm">{t('carte_platinum_conseillers_patrimoniaux_dedies_str')}</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 bg-[#F7F7F7] p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-[#0C3B66] mb-8 text-center">{t('carte_platinum_tarifs_conditions')}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F26A21] mb-2">19,90€</div>
                <p className="text-gray-600 mb-4">{t('carte_platinum_frais_annuels')}</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Gratuit avec compte Premium+</li>
                  <li>{t('carte_platinum_offre_vip_bienvenue')}</li>
                  <li>{t('carte_platinum_flexibilite_totale')}</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0C3B66] mb-2">0%</div>
                <p className="text-gray-600 mb-4">{t('carte_platinum_toutes_transactions')}</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>{t('carte_platinum_retraits_mondiaux_gratuits')}</li>
                  <li>{t('carte_platinum_paiements_sans_commission')}</li>
                  <li>{t('carte_platinum_meilleurs_taux_garantis')}</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0C3B66] mb-2">{t('carte_platinum_illimite')}</div>
                <p className="text-gray-600 mb-4">{t('carte_platinum_services_premium')}</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>{t('carte_platinum_lounges_sans_limite')}</li>
                  <li>{t('carte_platinum_conciergerie')}</li>
                  <li>{t('carte_platinum_acces_evenements_exclusifs')}</li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-gray-900 to-black text-white p-8 rounded-2xl border border-gray-700 text-center">
              <h3 className="text-2xl font-bold mb-4">{t('carte_platinum_invitation_seulement')}</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                La carte Platinum est réservée à notre clientèle premium. 
                Contactez votre conseiller personnel pour une invitation exclusive.
              </p>
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-lg font-bold hover:from-yellow-500 hover:to-yellow-700 transition-all">{t('carte_platinum_contacter_mon_conseiller')}</button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
