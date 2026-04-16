import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function Personnel() {
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
          >{t('personnel_services_personnels')}</motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-center text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Des solutions bancaires adaptées à vos besoins personnels. 
            Épargnez, gérez vos comptes et protégez votre avenir 
            avec nos services complets et personnalisés.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">{t('personnel_epargne')}</h3>
              <p className="text-gray-600">{t('personnel_faites_fructifier_votre_argent')}</p>
            </div>
            
            <div className="text-center p-8 bg-[#F7F7F7] rounded-2xl">
              <div className="w-16 h-16 bg-[#0C3B66] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">{t('personnel_compte_courant')}</h3>
              <p className="text-gray-600">{t('personnel_gerez_vos_transactions_quotidiennes')}</p>
            </div>
            
            <div className="text-center p-8 bg-[#F7F7F7] rounded-2xl">
              <div className="w-16 h-16 bg-[#0C3B66] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">{t('personnel_assurance')}</h3>
              <p className="text-gray-600">{t('personnel_protegez_vous_vos_proches')}</p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
