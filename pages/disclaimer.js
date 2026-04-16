import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function DisclaimerPage() {
  const { t } = useTranslation();
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    setLastUpdated(new Date().toLocaleDateString('fr-FR'));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-8">{t('disclaimer_avertissements')}</h1>
            
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Avertissement Général</h2>
                <p className="mb-4">
                  Les informations fournies sur ce site sont à titre informatif uniquement et ne 
                  constituent pas un conseil financier, juridique ou fiscal. EUROPA-KREDIT-BANK 
                  décline toute responsabilité pour les décisions prises sur la base de ces informations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Risques Financiers</h2>
                <p className="mb-4">
                  Les investissements et produits financiers comportent des risques. La valeur de 
                  vos investissements peut fluctuer et vous pourriez perdre tout ou partie de 
                  votre capital investi.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t('disclaimer_les_performances_passees_prejugent')}</li>
                  <li>{t('disclaimer_les_taux_interet_peuvent')}</li>
                  <li>{t('disclaimer_les_investissements_sont_pas')}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Prêts et Crédits</h2>
                <p className="mb-4">
                  L'octroi de prêts est soumis à l'approbation de crédit et dépend de votre 
                  situation financière. Un prêt engage votre capacité de remboursement.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t('disclaimer_verifiez_votre_capacite_remboursement')}</li>
                  <li>{t('disclaimer_les_taux_interet_conditions')}</li>
                  <li>{t('disclaimer_non_remboursement_peut_affecter')}</li>
                  <li>{t('disclaimer_assurance_pret_peut_etre')}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Sécurité en Ligne</h2>
                <p className="mb-4">
                  Bien que nous mettions en place des mesures de sécurité robustes, aucune 
                  transmission de données sur Internet n'est totalement sécurisée.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t('disclaimer_protegez_vos_identifiants_connexion')}</li>
                  <li>{t('disclaimer_utilisez_des_mots_passe')}</li>
                  <li>{t('disclaimer_partagez_jamais_vos_informations')}</li>
                  <li>{t('disclaimer_surveillez_regulierement_vos_comptes')}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Exactitude des Informations</h2>
                <p className="mb-4">
                  Nous nous efforçons de maintenir les informations de ce site exactes et à jour, 
                  mais nous ne garantissons pas leur exhaustivité ou leur exactitude à tout moment.
                </p>
                <p className="mb-4">
                  Les taux, conditions et produits mentionnés peuvent être modifiés sans préavis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Liens Externes</h2>
                <p className="mb-4">
                  Ce site peut contenir des liens vers des sites tiers. EUROPA-KREDIT-BANK n'est 
                  pas responsable du contenu ou des pratiques de confidentialité de ces sites.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Disponibilité du Service</h2>
                <p className="mb-4">
                  Nous nous efforçons de maintenir nos services en ligne disponibles en permanence, 
                  mais des interruptions peuvent survenir pour maintenance, mises à jour ou 
                  raisons techniques.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation de Responsabilité</h2>
                <p className="mb-4">
                  Dans la mesure maximale permise par la loi, EUROPA-KREDIT-BANK ne sera pas 
                  responsable des dommages directs, indirects, spéciaux ou consécutifs découlant 
                  de l'utilisation ou de l'impossibilité d'utiliser nos services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Juridiction</h2>
                <p className="mb-4">
                  Ces services sont régis par les lois françaises. L'utilisation de nos services 
                  depuis d'autres juridictions peut être soumise à des lois locales différentes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact pour Questions</h2>
                <p className="mb-4">{t('disclaimer_vous_avez_des_questions')}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email : contact@continentalbk.de</li>
                  <li>Téléphone : +49 89 12345678</li>
                  <li>Adresse : Kardinal-Faulhaber-Straße 12, 80333 Munich</li>
                </ul>
              </section>
            </div>

            <div className="mt-12 p-6 bg-orange-50 border border-orange-200 rounded-lg">
              <h3 className="text-lg font-bold text-orange-900 mb-2">{t('disclaimer_conseil_important')}</h3>
              <p className="text-orange-800">
                Lisez attentivement tous les documents contractuels avant de signer. 
                En cas de doute, consultez un conseiller financier indépendant.
              </p>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                Dernière mise à jour : {lastUpdated}
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
