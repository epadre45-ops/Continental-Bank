import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../lib/i18n';
import { Shield, FileText, Eye, ChevronRight, ArrowUpRight, CheckCircle, AlertCircle, Users, Globe, Lock, Scale, Calendar } from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsPage() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('general');

  const sections = [
    { id: 'general', name: t('terms.sections.general'), icon: <FileText className="w-4 h-4" /> },
    { id: 'privacy', name: t('terms.sections.privacy'), icon: <Lock className="w-4 h-4" /> },
    { id: 'security', name: t('terms.sections.security'), icon: <Shield className="w-4 h-4" /> },
    { id: 'compliance', name: t('terms.sections.compliance'), icon: <Scale className="w-4 h-4" /> },
    { id: 'intellectual', name: t('terms.sections.intellectual'), icon: <Eye className="w-4 h-4" /> },
    { id: 'disputes', name: t('terms.sections.disputes'), icon: <Users className="w-4 h-4" /> }
  ];

  const content = {
    general: {
      title: t('terms.general.title'),
      lastUpdated: t('terms.general.last_updated'),
      content: `
        <h3 class="text-xl font-semibold mb-4">${t('terms.general.acceptance_title')}</h3>
        <p class="mb-4">${t('terms.general.acceptance_text')}</p>
        
        <h3 class="text-xl font-semibold mb-4">${t('terms.general.services_title')}</h3>
        <p class="mb-4">${t('terms.general.services_text')}</p>
        
        <h3 class="text-xl font-semibold mb-4">3. Éligibilité des Clients</h3>
        <p class="mb-4">Nos services sont exclusivement réservés aux personnes morales et physiques qualifiées répondant aux critères réglementaires des investisseurs institutionnels.</p>
        
        <h3 class="text-xl font-semibold mb-4">4. Ouverture de Compte</h3>
        <p class="mb-4">L'ouverture d'un compte institutionnel est soumise à une procédure de due diligence approfondie et à la validation de notre comité de conformité.</p>
        
        <h3 class="text-xl font-semibold mb-4">5. Tarification</h3>
        <p class="mb-4">Nos tarifs sont établis selon la complexité des services fournis et le volume d'actifs gérés. Une grille tarifaire détaillée est disponible sur demande.</p>
        
        <h3 class="text-xl font-semibold mb-4">6. Modification des Conditions</h3>
        <p class="mb-4">EUROPA KREDIT BANK se réserve le droit de modifier ces conditions à tout moment. Les modifications seront notifiées aux clients 30 jours avant leur entrée en vigueur.</p>
      `
    },
    privacy: {
      title: 'Politique de Confidentialité',
      lastUpdated: '15 janvier 2024',
      content: `
        <h3 class="text-xl font-semibold mb-4">1. Collecte des Données</h3>
        <p class="mb-4">Nous collectons uniquement les données nécessaires à la fourniture de nos services bancaires, conformément au RGPD et aux réglementations locales.</p>
        
        <h3 class="text-xl font-semibold mb-4">2. Utilisation des Données</h3>
        <p class="mb-4">Vos données sont utilisées exclusivement pour la gestion de votre relation bancaire, l'analyse des risques et l'amélioration de nos services.</p>
        
        <h3 class="text-xl font-semibold mb-4">3. Partage des Données</h3>
        <p class="mb-4">Nous ne partageons vos données qu'avec les autorités réglementaires et nos partenaires techniques strictement nécessaires à l'exécution des services.</p>
        
        <h3 class="text-xl font-semibold mb-4">4. Sécurité des Données</h3>
        <p class="mb-4">Vos données sont protégées par un chiffrement AES-256 et des protocoles de sécurité de niveau institutionnel.</p>
        
        <h3 class="text-xl font-semibold mb-4">5. Droits des Clients</h3>
        <p class="mb-4">Vous disposez d'un droit d'accès, de modification et de suppression de vos données personnelles conformément au RGPD.</p>
        
        <h3 class="text-xl font-semibold mb-4">6. Conservation des Données</h3>
        <p class="mb-4">Les données sont conservées selon les durées légales en vigueur et détruites de manière sécurisée après expiration.</p>
      `
    },
    security: {
      title: 'Politique de Sécurité',
      lastUpdated: '15 janvier 2024',
      content: `
        <h3 class="text-xl font-semibold mb-4">1. Authentification</h3>
        <p class="mb-4">L'accès à nos services nécessite une authentification multi-facteurs avec des standards de sécurité de niveau bancaire central.</p>
        
        <h3 class="text-xl font-semibold mb-4">2. Chiffrement</h3>
        <p class="mb-4">Toutes les communications sont chiffrées en TLS 1.3 avec des certificats EV. Les données sensibles sont chiffrées au repos avec AES-256.</p>
        
        <h3 class="text-xl font-semibold mb-4">3. Surveillance</h3>
        <p class="mb-4">Notre système de sécurité fonctionne 24/7 avec détection automatique des anomalies et réponse immédiate aux incidents.</p>
        
        <h3 class="text-xl font-semibold mb-4">4. Audits Réguliers</h3>
        <p class="mb-4">Des audits de sécurité sont réalisés trimestriellement par des experts indépendants certifiés.</p>
        
        <h3 class="text-xl font-semibold mb-4">5. Formation du Personnel</h3>
        <p class="mb-4">Tous nos employés suivent une formation continue en sécurité et sont soumis à des tests de sécurité réguliers.</p>
        
        <h3 class="text-xl font-semibold mb-4">6. Plan de Réponse</h3>
        <p class="mb-4">Nous disposons d'un plan de réponse aux incidents certifié ISO 27001 avec des procédures documentées pour chaque type de menace.</p>
      `
    },
    compliance: {
      title: 'Politique de Conformité',
      lastUpdated: '15 janvier 2024',
      content: `
        <h3 class="text-xl font-semibold mb-4">1. Lutte contre le Blanchiment (AML)</h3>
        <p class="mb-4">Nous appliquons les standards FATF et effectuons une due diligence approfondie sur tous nos clients et transactions.</p>
        
        <h3 class="text-xl font-semibold mb-4">2. Connaissance Client (KYC)</h3>
        <p class="mb-4">Des procédures KYC rigoureuses sont appliquées pour l'identification et la vérification de tous nos clients.</p>
        
        <h3 class="text-xl font-semibold mb-4">3. Reporting des Transactions</h3>
        <p class="mb-4">Nous déclarons toutes les transactions suspectes aux autorités compétentes conformément aux réglementations locales.</p>
        
        <h3 class="text-xl font-semibold mb-4">4. Sanctions Internationales</h3>
        <p class="mb-4">Nous respectons toutes les sanctions internationales et maintenons des listes de filtrage mises à jour en temps réel.</p>
        
        <h3 class="text-xl font-semibold mb-4">5. Formation Continue</h3>
        <p class="mb-4">Notre personnel reçoit une formation annuelle obligatoire sur la conformité et les réglementations applicables.</p>
        
        <h3 class="text-xl font-semibold mb-4">6. Audit Interne</h3>
        <p class="mb-4">Notre programme de conformité est audité semestriellement par notre fonction d'audit interne et des auditeurs externes.</p>
      `
    },
    intellectual: {
      title: 'Propriété Intellectuelle',
      lastUpdated: '15 janvier 2024',
      content: `
        <h3 class="text-xl font-semibold mb-4">1. Contenu de la Plateforme</h3>
        <p class="mb-4">Tous les contenus, designs, et fonctionnalités de notre plateforme sont protégés par les droits d'auteur et autres droits de propriété intellectuelle.</p>
        
        <h3 class="text-xl font-semibold mb-4">2. Marques Déposées</h3>
        <p class="mb-4">EUROPA KREDIT BANK et tous nos logos sont des marques déposées protégées internationalement.</p>
        
        <h3 class="text-xl font-semibold mb-4">3. Brevets</h3>
        <p class="mb-4">Nos technologies et méthodologies innovantes sont protégées par des brevets déposés dans les juridictions pertinentes.</p>
        
        <h3 class="text-xl font-semibold mb-4">4. Utilisation Autorisée</h3>
        <p class="mb-4">L'utilisation de notre plateforme est strictement limitée aux fins prévues par notre contrat de service.</p>
        
        <h3 class="text-xl font-semibold mb-4">5. Violation</h3>
        <p class="mb-4">Toute violation de nos droits de propriété intellectuelle sera poursuivie vigoureusement selon les lois applicables.</p>
        
        <h3 class="text-xl font-semibold mb-4">6. Contenu Client</h3>
        <p class="mb-4">Les clients conservent la propriété de leur contenu mais nous accordent une licence d'utilisation nécessaire à la fourniture des services.</p>
      `
    },
    disputes: {
      title: 'Résolution des Litiges',
      lastUpdated: '15 janvier 2024',
      content: `
        <h3 class="text-xl font-semibold mb-4">1. Juridiction Compétente</h3>
        <p class="mb-4">Tout litige relatif à nos services est soumis à la juridiction des tribunaux de Paris, France.</p>
        
        <h3 class="text-xl font-semibold mb-4">2. Médiation</h3>
        <p class="mb-4">Nous encourageons la résolution amiable des litiges par médiation avant toute procédure judiciaire.</p>
        
        <h3 class="text-xl font-semibold mb-4">3. Arbitrage</h3>
        <p class="mb-4">Pour les litiges commerciaux, nous proposons l'arbitrage selon les règles de la Chambre de Commerce Internationale.</p>
        
        <h3 class="text-xl font-semibold mb-4">4. Délais de Prescription</h3>
        <p class="mb-4">Toute action en justice doit être intentée dans un délai de deux ans à compter de l'événement générateur du litige.</p>
        
        <h3 class="text-xl font-semibold mb-4">5. Coûts</h3>
        <p class="mb-4">Les frais de médiation et d'arbitrage sont partagés équitablement entre les parties sauf décision contraire du médiateur ou arbitre.</p>
        
        <h3 class="text-xl font-semibold mb-4">6. Exécution</h3>
        <p class="mb-4">Les décisions de médiation et d'arbitrage sont exécutoires immédiatement et sans appel.</p>
      `
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="section-institutional-navy pt-32">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <FileText className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Mentions Légales</span>
            </div>
            
            <h1 className="h1-institutional mb-6 text-white">
              Cadre légal et réglementaire
            </h1>
            
            <div className="divider-institutional-gradient w-32 mx-auto mb-8"></div>
            
            <p className="body-institutional-lg text-white/80 max-w-3xl mx-auto">
              Nos conditions générales, politiques de confidentialité et cadres réglementaires 
              pour garantir une transparence totale dans nos relations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legal Content */}
      <section className="section-institutional-white py-16">
        <div className="container-institutional">
          <div className="grid grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="col-span-1">
              <div className="sticky top-8">
                <h3 class="text-lg font-semibold text-[#0A1F3C] mb-4">Navigation</h3>
                <div className="space-y-2">
                  {(sections || []).map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeSection === section.id
                          ? 'bg-[#0E2E5C] text-white'
                          : 'bg-[#F6F8FB] text-[#64748B] hover:bg-[#E5E7EB]'
                      }`}
                    >
                      <div className={activeSection === section.id ? 'text-white' : 'text-[#0E2E5C]'}>
                        {section.icon}
                      </div>
                      <span className="font-medium">{section.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-span-3">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="card-institutional-elevated p-8"
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-[#0A1F3C] mb-2">
                    {content[activeSection].title}
                  </h2>
                  <div className="flex items-center space-x-4 text-sm text-[#64748B]">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Dernière mise à jour: {content[activeSection].lastUpdated}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Version en vigueur</span>
                    </div>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none text-[#64748B]">
                  <div dangerouslySetInnerHTML={{ __html: content[activeSection].content }} />
                </div>

                <div className="mt-12 pt-8 border-t border-[rgba(10,30,60,0.08)]">
                  <div className="bg-[#F6F8FB] rounded-lg p-6">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-[#0E2E5C] mt-0.5" />
                      <div className="text-[#64748B] text-sm">
                        <p className="font-medium text-[#0A1F3C] mb-2">Important:</p>
                        <p>
                          Ces conditions constituent un contrat juridiquement contraignant. 
                          En cas de questions, veuillez contacter notre service juridique à 
                          contact@continentalbk.de ou consulter votre conseiller dédié.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section-institutional-stratified">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="h2-institutional mb-6">Besoin d'Assistance?</h2>
            <div className="divider-institutional-gradient w-24 mx-auto mb-8"></div>
            <p className="body-institutional-lg text-[#64748B] max-w-3xl mx-auto mb-12">
              Notre équipe juridique et de conformité est à votre disposition pour répondre à toutes vos questions.
            </p>

            <div className="flex items-center justify-center space-x-6">
              <Link href="/contact" className="btn-institutional-primary">
                Contacter le Service Juridique
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link href="/compliance" className="btn-institutional-secondary">
                Centre de Conformité
                <Shield className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
