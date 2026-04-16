import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function CarteVirtuelle() {
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
          >{t('carte_virtuelle_carte_virtuelle')}</motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-center text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Une carte virtuelle pour tous vos paiements en toute sécurité. 
            Payez en ligne et en magasin avec votre carte bancaire virtuelle 
            et bénéficiez de toutes les fonctionnalités d'une carte physique.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            <div className="text-center p-8 bg-[#F7F7F7] rounded-2xl">
              <div className="w-16 h-16 bg-[#0C3B66] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">{t('carte_virtuelle_paiement_securise')}</h3>
              <p className="text-gray-600">{t('carte_virtuelle_transactions_protegees_par_chiffre')}</p>
            </div>
            
            <div className="text-center p-8 bg-[#F7F7F7] rounded-2xl">
              <div className="w-16 h-16 bg-[#0C3B66] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">{t('carte_virtuelle_utilisation_mondiale')}</h3>
              <p className="text-gray-600">{t('carte_virtuelle_acceptee_chez_des_millions')}</p>
            </div>
            
            <div className="text-center p-8 bg-[#F7F7F7] rounded-2xl">
              <div className="w-16 h-16 bg-[#0C3B66] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">{t('carte_virtuelle_activation_instantanee')}</h3>
              <p className="text-gray-600">{t('carte_virtuelle_utilisez_votre_carte_des')}</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 text-center"
          >
            <button className="bg-[#0C3B66] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#0E3A5D] transition-colors inline-flex items-center">{t('carte_virtuelle_obtenir_une_carte')}<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
