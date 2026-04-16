import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Home, 
  Car, 
  Briefcase, 
  Users, 
  DollarSign, 
  Shield, 
  CheckCircle, 
  AlertCircle, 
  FileText, 
  Download, 
  Clock, 
  Target, 
  TrendingUp,
  Award,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function CreditProductsPage() {
  const { t } = useTranslation();

  const [selectedProduct, setSelectedProduct] = useState('personal');
  const [showCalculator, setShowCalculator] = useState(false);

  const products = {
    personal: {
      name: 'Prêt Personnel',
      icon: <Users className="w-6 h-6" />,
      description: 'Financement pour vos projets personnels',
      minAmount: 1000,
      maxAmount: 75000,
      minDuration: 12,
      maxDuration: 84,
      taeg: '3.8% à 8.2%',
      example: {
        amount: 15000,
        duration: 48,
        taeg: 5.2,
        monthly: 346.24,
        totalCost: 16219.52,
        interest: 1219.52
      },
      conditions: {
        age: '18 à 75 ans',
        income: 'Revenus minimum 1200€/mois',
        residence: 'Résidence fiscale française',
        employment: 'CDI minimum 6 mois ou fonctionnaire'
      },
      documents: [
        'Pièce d\'identité en cours de validité',
        'Justificatif de domicile de moins de 3 mois',
        '3 derniers bulletins de salaire',
        'Dernier avis d\'imposition',
        'Relevé d\'identité bancaire (RIB)'
      ],
      advantages: [
        'Réponse de principe sous 24h',
        'Déblocage des fonds en 48h',
        'Sans frais de dossier',
        'Remboursement anticipé gratuit',
        'Assurance facultative'
      ]
    },
    immobilier: {
      name: 'Prêt Immobilier',
      icon: <Home className="w-6 h-6" />,
      description: 'Financement pour l\'achat ou la construction de votre logement',
      minAmount: 50000,
      maxAmount: 1000000,
      minDuration: 120,
      maxDuration: 360,
      taeg: '2.8% à 4.5%',
      example: {
        amount: 250000,
        duration: 240,
        taeg: 3.2,
        monthly: 1395.34,
        totalCost: 334881.60,
        interest: 84881.60
      },
      conditions: {
        age: '18 à 80 ans à fin de prêt',
        income: 'Taux d\'endettement maximum 35%',
        contribution: 'Apport personnel minimum 10%',
        residence: 'Résidence fiscale française'
      },
      documents: [
        'Pièce d\'identité en cours de validité',
        'Justificatif de domicile',
        'Contrat de travail et bulletins de salaire',
        'Avis d\'imposition',
        'Relevés de comptes des 3 derniers mois',
        'Compromis de vente ou devis travaux',
        'Justificatif d\'apport personnel'
      ],
      advantages: [
        'Taux négociables selon profil',
        'Durée jusqu\'à 30 ans',
        'Modularité des échéances',
        'Report d\'échéances possible',
        'Garantie emprunteur adaptée'
      ]
    },
    auto: {
      name: 'Prêt Auto',
      icon: <Car className="w-6 h-6" />,
      description: 'Financement pour l\'achat de votre véhicule',
      minAmount: 5000,
      maxAmount: 100000,
      minDuration: 12,
      maxDuration: 84,
      taeg: '3.2% à 7.5%',
      example: {
        amount: 25000,
        duration: 60,
        taeg: 4.8,
        monthly: 468.75,
        totalCost: 28125.00,
        interest: 3125.00
      },
      conditions: {
        age: '18 à 75 ans',
        income: 'Revenus minimum 1000€/mois',
        license: 'Permis de conduire en cours de validité',
        residence: 'Résidence fiscale française'
      },
      documents: [
        'Pièce d\'identité',
        'Permis de conduire',
        'Justificatif de domicile',
        'Bulletins de salaire',
        'Devis ou bon de commande du véhicule',
        'RIB'
      ],
      advantages: [
        'Financement jusqu\'à 100% du véhicule',
        'Réponse sous 2h',
        'Déblocage rapide des fonds',
        'Possibilité de report première échéance',
        'Assurance véhicule incluable'
      ]
    },
    professional: {
      name: 'Prêt Professionnel',
      icon: <Briefcase className="w-6 h-6" />,
      description: 'Financement pour vos projets professionnels',
      minAmount: 10000,
      maxAmount: 500000,
      minDuration: 24,
      maxDuration: 120,
      taeg: '2.9% à 6.8%',
      example: {
        amount: 100000,
        duration: 60,
        taeg: 4.2,
        monthly: 1849.12,
        totalCost: 110947.20,
        interest: 10947.20
      },
      conditions: {
        status: 'Entrepreneur, profession libérale ou artisan',
        experience: 'Activité minimum 2 ans',
        turnover: 'Chiffre d\'affaires minimum 50000€/an',
        registration: 'Immatriculation registre commerce'
      },
      documents: [
        'Pièce d\'identité du dirigeant',
        'Kbis ou extrait registre commerce',
        'Derniers bilans comptables',
        'Prévisionnel d\'activité',
        'Plan de financement du projet',
        'Justificatifs apport personnel'
      ],
      advantages: [
        'Accompagnement personnalisé',
        'Montant adaptable selon projet',
        'Possibilité de franchise partielle',
        'Réaménagement possible',
        'Conseil expert dédié'
      ]
    },
    rachat: {
      name: 'Rachat de Crédit',
      icon: <Target className="w-6 h-6" />,
      description: 'Regroupez tous vos crédits en un seul',
      minAmount: 20000,
      maxAmount: 300000,
      minDuration: 60,
      maxDuration: 300,
      taeg: '3.5% à 7.8%',
      example: {
        amount: 85000,
        duration: 180,
        taeg: 5.1,
        monthly: 678.45,
        totalCost: 122121.00,
        interest: 37121.00
      },
      conditions: {
        credits: 'Minimum 2 crédits à racheter',
        income: 'Revenus stables',
        debt: 'Situation bancaire saine',
        residence: 'Résidence fiscale française'
      },
      documents: [
        'Pièce d\'identité',
        'Justificatif de domicile',
        'Tableau d\'amortissement des crédits',
        'Relevés des 3 derniers mois',
        'Bulletins de salaire',
        'Avis d\'imposition'
      ],
      advantages: [
        'Baisse mensualité jusqu\'à -60%',
        'Un seul interlocuteur',
        'Simplification de la gestion',
        'Possibilité de trésorerie supplémentaire',
        'Meilleure visibilité sur budget'
      ]
    },
    travaux: {
      name: 'Prêt Travaux',
      icon: <Home className="w-6 h-6" />,
      description: 'Financement pour vos projets de rénovation',
      minAmount: 5000,
      maxAmount: 150000,
      minDuration: 24,
      maxDuration: 240,
      taeg: '2.9% à 6.5%',
      example: {
        amount: 35000,
        duration: 84,
        taeg: 4.1,
        monthly: 462.18,
        totalCost: 38823.12,
        interest: 3823.12
      },
      conditions: {
        property: 'Propriétaire du bien immobilier',
        age: '18 à 80 ans',
        income: 'Revenus stables',
        residence: 'Résidence fiscale française'
      },
      documents: [
        'Pièce d\'identité',
        'Justificatif de domicile',
        'Titre de propriété',
        'Devis des travaux',
        'Bulletins de salaire',
        'Plan de financement'
      ],
      advantages: [
        'Taux préférentiels',
        'Possibilité PTZ complémentaire',
        'Déblocage par étape des travaux',
        'Fiscalité avantageuse',
        'Accompagnement technique'
      ]
    }
  };

  const currentProduct = products[selectedProduct];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="section-institutional-navy pt-32 relative">
        {/* Image de fond - Projets financés */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=800&fit=crop&auto=format"
            alt="Projets financés - Maison, voiture et projets personnels réalisés"
            className="w-full h-full object-cover opacity-12"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1F3C]/95 via-[#0A1F3C]/90 to-[#0A1F3C]/95"></div>
        </div>
        
        <div className="relative z-10 container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <DollarSign className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">{t('credit_products_produits_credit')}</span>
            </div>
            
            <h1 className="h1-institutional mb-6 text-white">{t('credit_products_solutions_financement_sur_mesure')}</h1>
            
            <div className="divider-institutional-gradient w-32 mx-auto mb-8"></div>
            
            <p className="body-institutional-lg text-white/80 max-w-3xl mx-auto">
              Des solutions de crédit adaptées à chaque projet, avec des taux compétitifs 
              et des conditions transparentes pour votre tranquillité d'esprit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Selector */}
      <section className="section-institutional-white py-12">
        <div className="container-institutional">
          <div className="grid grid-cols-3 gap-6">
            {(Object.entries(products || {}) || []).map(([key, product]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: Object.keys(products).indexOf(key) * 0.1 }}
                onClick={() => setSelectedProduct(key)}
                className={`card-institutional-elevated p-6 cursor-pointer transition-all ${
                  selectedProduct === key ? 'border-2 border-[#0E2E5C] bg-[#F6F8FB]' : 'hover:shadow-lg'
                }`}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-[#0E2E5C]">{product.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0A1F3C]">{product.name}</h3>
                    <p className="text-sm text-[#64748B]">{product.description}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#64748B]">{t('credit_products_taeg')}</span>
                  <span className="font-medium text-[#0E2E5C]">{product.taeg}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Projets Réalisés - Succès Financier */}
      <section className="section-institutional-white">
        <div className="container-institutional">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=400&fit=crop&auto=format"
                alt="Projets réalisés - Succès grâce aux solutions de crédit"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F3C]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <h3 className="text-white text-xl font-semibold mb-2">{t('credit_products_projets_realises')}</h3>
                  <p className="text-white/80 text-sm">{t('credit_products_des_milliers_projets_devenus')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Details */}
      <section className="section-institutional-stratified">
        <div className="container-institutional">
          <div className="grid grid-cols-3 gap-8">
            {/* Main Info */}
            <div className="col-span-2 space-y-8">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="card-institutional-elevated p-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-[#0E2E5C] text-2xl">{currentProduct.icon}</div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#0A1F3C]">{currentProduct.name}</h2>
                    <p className="text-[#64748B]">{currentProduct.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <span className="text-[#64748B] text-sm">{t('credit_products_montant')}</span>
                    <p className="text-xl font-semibold text-[#0A1F3C]">
                      {currentProduct.minAmount.toLocaleString('fr-FR')}€ - {currentProduct.maxAmount.toLocaleString('fr-FR')}€
                    </p>
                  </div>
                  <div>
                    <span className="text-[#64748B] text-sm">{t('credit_products_duree')}</span>
                    <p className="text-xl font-semibold text-[#0A1F3C]">
                      {currentProduct.minDuration} - {currentProduct.maxDuration} mois
                    </p>
                  </div>
                </div>

                <div className="bg-[#F6F8FB] rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#0A1F3C] mb-4">{t('credit_products_exemple_representatif')}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[#64748B] text-sm">{t('credit_products_montant_finance')}</span>
                      <p className="font-medium text-[#0A1F3C]">{currentProduct.example.amount.toLocaleString('fr-FR')}€</p>
                    </div>
                    <div>
                      <span className="text-[#64748B] text-sm">{t('credit_products_duree')}</span>
                      <p className="font-medium text-[#0A1F3C]">{currentProduct.example.duration} mois</p>
                    </div>
                    <div>
                      <span className="text-[#64748B] text-sm">{t('credit_products_taeg')}</span>
                      <p className="font-medium text-[#0A1F3C]">{currentProduct.example.taeg}%</p>
                    </div>
                    <div>
                      <span className="text-[#64748B] text-sm">{t('credit_products_mensualite')}</span>
                      <p className="font-medium text-[#0A1F3C]">{currentProduct.example.monthly.toLocaleString('fr-FR', { minimumFractionDigits: 2 })}€</p>
                    </div>
                    <div>
                      <span className="text-[#64748B] text-sm">{t('credit_products_cout_total')}</span>
                      <p className="font-medium text-[#0A1F3C]">{currentProduct.example.totalCost.toLocaleString('fr-FR', { minimumFractionDigits: 2 })}€</p>
                    </div>
                    <div>
                      <span className="text-[#64748B] text-sm">{t('credit_products_dont_interets')}</span>
                      <p className="font-medium text-[#0A1F3C]">{currentProduct.example.interest.toLocaleString('fr-FR', { minimumFractionDigits: 2 })}€</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Conditions */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="card-institutional-elevated p-8"
              >
                <h3 className="text-xl font-bold text-[#0A1F3C] mb-6">{t('credit_products_conditions_eligibilite')}</h3>
                <div className="space-y-3">
                  {(Object.entries(currentProduct?.conditions || {}) || []).map(([key, value]) => (
                    <div key={key} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-[#0A1F3C]">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Documents */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card-institutional-elevated p-8"
              >
                <h3 className="text-xl font-bold text-[#0A1F3C] mb-6">{t('credit_products_documents_requis')}</h3>
                <div className="space-y-3">
                  {(currentProduct?.documents || []).map((doc) => (
                    <div key={doc} className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-[#0E2E5C]" />
                      <span className="text-[#0A1F3C]">{doc}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Advantages */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="card-institutional-elevated p-6"
              >
                <h3 className="text-lg font-bold text-[#0A1F3C] mb-4">{t('credit_products_avantages')}</h3>
                <div className="space-y-3">
                  {(currentProduct?.advantages || []).map((advantage) => (
                    <div key={advantage} className="flex items-start space-x-3">
                      <Award className="w-5 h-5 text-[#0E2E5C] mt-0.5" />
                      <span className="text-sm text-[#64748B]">{advantage}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="card-institutional-elevated p-6 text-center"
              >
                <h3 className="text-lg font-bold text-[#0A1F3C] mb-4">Prêt à démarrer ?</h3>
                <div className="space-y-4">
                  <button 
                    onClick={() => setShowCalculator(true)}
                    className="btn-institutional-primary w-full"
                  >
                    <Calculator className="w-5 h-5" />{t('credit_products_simuler_mon_credit')}</button>
                  <Link href="/request" className="btn-institutional-secondary w-full justify-center">{t('credit_products_faire_une_demande')}<ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>

              {/* Warning */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#FEF3C7] border border-[#F59E0B] rounded-lg p-4"
              >
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-[#F59E0B] mt-0.5" />
                  <div className="text-sm text-[#92400E]">
                    <p className="font-medium mb-1">{t('credit_products_important')}</p>
                    <p>Un crédit vous engage et doit être remboursé. Vérifiez votre capacité de remboursement avant de vous engager.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Modal */}
      {showCalculator && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#0A1F3C]">{t('credit_products_simulateur_credit')}</h3>
              <button 
                onClick={() => setShowCalculator(false)}
                className="text-[#64748B] hover:text-[#0A1F3C]"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#0A1F3C] mb-2">{t('credit_products_montant_souhaite')}</label>
                <input type="range" min={currentProduct.minAmount} max={currentProduct.maxAmount} className="w-full" />
                <div className="flex justify-between text-sm text-[#64748B]">
                  <span>{currentProduct.minAmount.toLocaleString('fr-FR')}€</span>
                  <span>{currentProduct.maxAmount.toLocaleString('fr-FR')}€</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#0A1F3C] mb-2">{t('credit_products_duree')}</label>
                <input type="range" min={currentProduct.minDuration} max={currentProduct.maxDuration} className="w-full" />
                <div className="flex justify-between text-sm text-[#64748B]">
                  <span>{currentProduct.minDuration} mois</span>
                  <span>{currentProduct.maxDuration} mois</span>
                </div>
              </div>
              
              <div className="bg-[#F6F8FB] rounded-lg p-6">
                <h4 className="text-lg font-semibold text-[#0A1F3C] mb-4">{t('credit_products_resultat_simulation')}</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>{t('credit_products_mensualite_estimee')}</span>
                    <span className="font-medium text-[#0A1F3C]">XXX€</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('credit_products_taeg_estime')}</span>
                    <span className="font-medium text-[#0A1F3C]">X.X%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('credit_products_cout_total')}</span>
                    <span className="font-medium text-[#0A1F3C]">XXX€</span>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button className="btn-institutional-primary flex-1">{t('credit_products_recevoir_cette_offre')}</button>
                <button 
                  onClick={() => setShowCalculator(false)}
                  className="btn-institutional-secondary flex-1"
                >{t('credit_products_fermer')}</button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  );
}
