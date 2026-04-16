import { motion } from 'framer-motion';
import { Calendar, Download, ArrowLeft, FileText } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { useTranslation } from '../../lib/i18n';
export default function PressReleasePage() {
  const { t } = useTranslation();

  const router = useRouter();
  const { slug } = router.query;

  // Données des communiqués de presse
  const pressReleases = {
    'Q4-2024-RESULTS': {
      title: 'EUROPA KREDIT BANK annonce des résultats record pour Q4 2024',
      date: '2024-01-25',
      category: 'results',
      summary: 'Bénéfice net en hausse de 18% et actifs sous gestion dépassant les 45 milliards d\'euros',
      content: `
        <h2 class="text-2xl font-bold text-[#0A1F3C] mb-4">{t('_slug__resultats_exceptionnels')}</h2>
        <p class="mb-4">EUROPA KREDIT BANK a publié aujourd'hui des résultats exceptionnels pour le quatrième trimestre 2024, avec un bénéfice net de 245 millions d'euros, en hausse de 18% par rapport à la même période l'année précédente.</p>
        
        <h3 class="text-xl font-semibold text-[#0E2E5C] mb-3">{t('_slug__principaux_chiffres')}</h3>
        <ul class="list-disc pl-6 mb-4">
          <li>Bénéfice net : 245 millions d'euros (+18%)</li>
          <li>Actifs sous gestion : 45.2 milliards d'euros (+15%)</li>
          <li>Chiffre d'affaires : 2.8 milliards d'euros (+12%)</li>
          <li>Nombre de clients : 1.2 million (+10%)</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-[#0E2E5C] mb-3">{t('_slug__commentaires_ceo')}</h3>
        <p class="mb-4">"Ces résultats exceptionnels témoignent de la solidité de notre modèle d'affaires et de la confiance de nos clients. Nous continuons d'investir dans notre transformation digitale et notre expansion internationale."</p>
        
        <h3 class="text-xl font-semibold text-[#0E2E5C] mb-3">{t('_slug__perspectives_2025')}</h3>
        <p>Pour 2025, nous anticipons une croissance continue soutenue par notre développement en Asie-Pacifique et le lancement de nouveaux produits digitaux.</p>
      `
    },
    'ASIA-EXPANSION': {
      title: 'Lancement de nos opérations en Asie-Pacifique',
      date: '2024-01-20',
      category: 'expansion',
      summary: 'Ouverture de nouveaux bureaux à Singapour, Hong Kong et Tokyo pour servir les clients institutionnels asiatiques',
      content: `
        <h2 class="text-2xl font-bold text-[#0A1F3C] mb-4">{t('_slug__expansion_strategique_asie')}</h2>
        <p class="mb-4">EUROPA KREDIT BANK annonce aujourd'hui une étape majeure dans sa stratégie d'expansion internationale avec l'ouverture de trois nouveaux bureaux en Asie-Pacifique.</p>
        
        <h3 class="text-xl font-semibold text-[#0E2E5C] mb-3">{t('_slug__nouvelles_implantations')}</h3>
        <ul class="list-disc pl-6 mb-4">
          <li><strong>{t('_slug__singapour')}</strong>{t('_slug__siege_regional_pour_asie')}</li>
          <li><strong>{t('_slug__hong_kong')}</strong>{t('_slug__plateforme_pour_les_marches')}</li>
          <li><strong>{t('_slug__tokyo')}</strong>{t('_slug__acces_marche_japonais')}</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-[#0E2E5C] mb-3">{t('_slug__services_offerts')}</h3>
        <p class="mb-4">Nos bureaux asiatiques offriront une gamme complète de services bancaires aux entreprises institutionnelles et aux clients fortunés locaux.</p>
        
        <h3 class="text-xl font-semibold text-[#0E2E5C] mb-3">{t('_slug__equipe_locale')}</h3>
        <p>Nous avons recruté plus de 50 professionnels expérimentés dans chaque marché pour assurer une transition fluide et une compréhension locale des besoins.</p>
      `
    },
    'ESG-AWARD': {
      title: 'EUROPA KREDIT BANK reçoit le prix ESG de l\'année',
      date: '2024-01-15',
      category: 'awards',
      summary: 'Reconnaissance pour notre engagement exceptionnel en matière de développement durable',
      content: `
        <h2 class="text-2xl font-bold text-[#0A1F3C] mb-4">{t('_slug__excellence_esg_reconnaissance')}</h2>
        <p class="mb-4">EUROPA KREDIT BANK a été honorée du prix ESG de l'année, reconnaissant notre leadership exceptionnel en matière environnementale, sociale et de gouvernance.</p>
        
        <h3 class="text-xl font-semibold text-[#0E2E5C] mb-3">{t('_slug__criteres_evaluation')}</h3>
        <ul class="list-disc pl-6 mb-4">
          <li>{t('_slug__reduction_notre_empreinte_carb')}</li>
          <li>3.2 milliards d'euros de financements verts</li>
          <li>42% de femmes dans l'encadrement</li>
          <li>{t('_slug__programmes_inclusion_sociale_exemplair')}</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-[#0E2E5C] mb-3">{t('_slug__impact_mesurable')}</h3>
        <p class="mb-4">Nos initiatives ESG ont généré un impact positif mesurable sur plus de 500 000 personnes à travers nos programmes communautaires et environnementaux.</p>
      `
    }
  };

  const release = pressReleases[slug];

  if (!release) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container-institutional py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#0A1F3C] mb-4">{t('_slug__communique_non_trouve')}</h1>
            <Link href="/press" className="text-[#0E2E5C] hover:text-[#0A1F3C] underline">{t('_slug__retour_espace_presse')}</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

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
            className="max-w-4xl mx-auto"
          >
            <Link href="/press" className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>{t('_slug__retour_espace_presse')}</span>
            </Link>
            
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <FileText className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">{t('_slug__communique_presse')}</span>
            </div>
            
            <h1 className="h1-institutional mb-6 text-white">
              {release.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-white/80 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(release.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-institutional-white py-16">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="prose prose-lg max-w-none">
              <div 
                className="text-[#64748B] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: release.content }}
              />
            </div>
            
            <div className="mt-12 pt-8 border-t border-[rgba(10,30,60,0.08)]">
              <div className="flex items-center justify-between">
                <Link href="/press" className="flex items-center space-x-2 text-[#0E2E5C] hover:text-[#0A1F3C] transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  <span>{t('_slug__tous_les_communiques')}</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
