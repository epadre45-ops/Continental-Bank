import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function PrivacyPage() {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-8">{t('privacy_politique_confidentialite')}</h1>
            
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="mb-4">
                  Chez EUROPA-KREDIT-BANK, nous nous engageons à protéger la vie privée et les 
                  données personnelles de nos clients. Cette politique explique comment nous 
                  collectons, utilisons et protégeons vos informations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Données Collectées</h2>
                <p className="mb-4">{t('privacy_nous_collectons_les_types')}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>{t('privacy_informations_personnelles')}</strong>{t('privacy_nom_prenom_adresse_email')}</li>
                  <li><strong>{t('privacy_informations_financieres')}</strong>{t('privacy_revenus_historique_credit_informati')}</li>
                  <li><strong>{t('privacy_informations_connexion')}</strong>{t('privacy_adresse_donnees_navigation_prefe')}</li>
                  <li><strong>{t('privacy_informations_transactionnelles')}</strong>{t('privacy_historique_des_transactions_operations')}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Utilisation des Données</h2>
                <p className="mb-4">{t('privacy_vos_donnees_sont_utilisees')}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t('privacy_fournir_gerer_vos_services')}</li>
                  <li>{t('privacy_evaluer_les_demandes_credit')}</li>
                  <li>{t('privacy_prevenir_fraude_securiser_les')}</li>
                  <li>{t('privacy_ameliorer_nos_services_produits')}</li>
                  <li>{t('privacy_communiquer_avec_vous_concernant')}</li>
                  <li>{t('privacy_respecter_nos_obligations_legales')}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Partage des Données</h2>
                <p className="mb-4">{t('privacy_nous_partageons_vos_donnees')}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t('privacy_avec_votre_consentement_explicite')}</li>
                  <li>{t('privacy_avec_nos_partenaires_financiers')}</li>
                  <li>{t('privacy_avec_les_autorites_reglementaires')}</li>
                  <li>{t('privacy_avec_des_prestataires_services')}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Sécurité des Données</h2>
                <p className="mb-4">{t('privacy_nous_mettons_uvre_des')}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t('privacy_chiffrement_ssl_pour_toutes')}</li>
                  <li>{t('privacy_serveurs_securises_avec_surveillance')}</li>
                  <li>{t('privacy_controle_acces_strict_aux')}</li>
                  <li>{t('privacy_audits_securite_reguliers')}</li>
                  <li>{t('privacy_formation_continue_personnel_sur')}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies et Technologies Similaires</h2>
                <p className="mb-4">{t('privacy_nous_utilisons_des_cookies')}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>{t('privacy_cookies_essentiels')}</strong>{t('privacy_necessaires_fonctionnement_site')}</li>
                  <li><strong>{t('privacy_cookies_performance')}</strong>{t('privacy_pour_analyser_utilisation_site')}</li>
                  <li><strong>{t('privacy_cookies_personnalisation')}</strong>{t('privacy_pour_memoriser_vos_preferences')}</li>
                </ul>
                <p className="mb-4">
                  Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Vos Droits</h2>
                <p className="mb-4">{t('privacy_conformement_rgpd_vous_avez')}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t('privacy_acceder_vos_donnees_personnelles')}</li>
                  <li>{t('privacy_rectifier_des_informations_inexactes')}</li>
                  <li>{t('privacy_supprimer_vos_donnees_personnelles')}</li>
                  <li>{t('privacy_limiter_traitement_vos_donnees')}</li>
                  <li>{t('privacy_porter_plainte_aupres_une')}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Conservation des Données</h2>
                <p className="mb-4">
                  Nous conservons vos données uniquement pendant la durée nécessaire aux fins 
                  pour lesquelles elles ont été collectées, conformément aux obligations légales.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Modifications de la Politique</h2>
                <p className="mb-4">
                  Nous pouvons mettre à jour cette politique de confidentialité. Les modifications 
                  seront publiées sur notre site et entreront en vigueur immédiatement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact</h2>
                <p className="mb-4">{t('privacy_pour_toute_question_concernant')}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email : contact@continentalbk.de</li>
                  <li>Téléphone : +33 7 80 93 38 72</li>
                  <li>{t('privacy_adresse_rue_vrilliere_75001')}</li>
                </ul>
              </section>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
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
