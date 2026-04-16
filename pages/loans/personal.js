import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Home, Car, GraduationCap, Plane, Heart, Briefcase, TrendingUp, Shield, Clock, CheckCircle, ArrowRight, DollarSign, Calendar, Users } from 'lucide-react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { useTranslation } from '../../lib/i18n';
export default function PersonalLoansPage() {
  const { t } = useTranslation();

  const [selectedLoan, setSelectedLoan] = useState(null);
  const [loanAmount, setLoanAmount] = useState(15000);
  const [loanDuration, setLoanDuration] = useState(48);
  const [showCalculator, setShowCalculator] = useState(false);

  const loanTypes = [
    {
      id: 'personal',
      title: 'Prêt Personnel',
      description: 'Financez vos projets personnels avec un taux avantageux',
      rate: '4.9% - 12.9%',
      amount: '1 000€ - 50 000€',
      duration: '12 - 84 mois',
      features: [
        'Taux fixe ou variable',
        'Pas de frais de dossier',
        'Réponse immédiate',
        'Amortissement flexible',
        'Assurance optionnelle'
      ],
      icon: <Users className="w-8 h-8" />,
      color: 'blue',
      popular: true
    },
    {
      id: 'auto',
      title: 'Prêt Auto',
      description: 'Le financement idéal pour votre prochain véhicule',
      rate: '3.9% - 9.9%',
      amount: '5 000€ - 75 000€',
      duration: '24 - 96 mois',
      features: [
        '100% du financement',
        'Garantie véhicule incluse',
        'Devis immédiat',
        'Option rachat',
        'Assurance tous risques'
      ],
      icon: <Car className="w-8 h-8" />,
      color: 'green'
    },
    {
      id: 'immobilier',
      title: 'Prêt Immobilier',
      description: 'Réalisez votre projet d\'acquisition ou de rénovation',
      rate: '2.5% - 4.5%',
      amount: '50 000€ - 500 000€',
      duration: '120 - 360 mois',
      features: [
        'Taux très compétitifs',
        'Garantie hypothécaire',
        'Report d\'échéances',
        'Remboursement anticipé',
        'Conseil patrimonial'
      ],
      icon: <Home className="w-8 h-8" />,
      color: 'purple'
    },
    {
      id: 'studies',
      title: 'Prêt Études',
      description: 'Investissez dans l\'avenir avec nos prêts étudiants',
      rate: '0% - 3.9%',
      amount: '1 000€ - 25 000€',
      duration: '12 - 120 mois',
      features: [
        'Différé de remboursement',
        'Taux préférentiel étudiants',
        'Garantie parents optionnelle',
        'Accompagnement pédagogique',
        'Flexibilité de remboursement'
      ],
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'orange'
    },
    {
      id: 'travel',
      title: 'Prêt Voyage',
      description: 'Partez l\'esprit tranquille avec notre financement voyage',
      rate: '5.9% - 8.9%',
      amount: '1 000€ - 15 000€',
      duration: '12 - 48 mois',
      features: [
        'Déblocage rapide',
        'Assurance voyage incluse',
        'Taux fixe',
        'Pas de justificatifs',
        'Flexibilité totale'
      ],
      icon: <Plane className="w-8 h-8" />,
      color: 'pink'
    },
    {
      id: 'works',
      title: 'Prêt Travaux',
      description: 'Financez vos projets de rénovation et d\'amélioration',
      rate: '3.9% - 7.9%',
      amount: '3 000€ - 100 000€',
      duration: '24 - 120 mois',
      features: [
        'Devis simplifié',
        'Versement en plusieurs fois',
        'Assurance dommages ouvrage',
        'Éco-prêts avantageux',
        'Conseil technique'
      ],
      icon: <Briefcase className="w-8 h-8" />,
      color: 'indigo'
    }
  ];

  const calculateMonthlyPayment = (amount, rate, months) => {
    const monthlyRate = rate / 100 / 12;
    const payment = (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(payment);
  };

  const calculateTotalCost = (amount, rate, months) => {
    const monthlyPayment = calculateMonthlyPayment(amount, rate, months);
    return monthlyPayment * months;
  };

  const currentLoan = loanTypes.find(loan => loan.id === selectedLoan);
  const monthlyRate = currentLoan ? parseFloat(currentLoan.rate.split(' - ')[0]) : 5.9;
  const monthlyPayment = calculateMonthlyPayment(loanAmount, monthlyRate, loanDuration);
  const totalCost = calculateTotalCost(loanAmount, monthlyRate, loanDuration);
  const totalInterest = totalCost - loanAmount;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('personal_prets_personnels')}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions de financement adaptées à tous vos projets : 
              de l'achat d'une voiture aux travaux de votre maison.
            </p>
          </motion.div>

          {/* Loan Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-blue-50 rounded-2xl p-8 mb-16"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{t('personal_simulateur_pret')}</h2>
              <button
                onClick={() => setShowCalculator(!showCalculator)}
                className="flex items-center px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium"
              >
                <Calculator className="w-5 h-5 mr-2" />
                {showCalculator ? 'Masquer' : 'Afficher'} le calculateur
              </button>
            </div>

            {showCalculator && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-4 gap-6"
              >
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">{t('personal_montant_pret')}</label>
                  <div className="relative">
                    <input
                      type="range"
                      min="1000"
                      max="100000"
                      step="1000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                      className="w-full"
                    />
                    <div className="text-center mt-2">
                      <span className="text-2xl font-bold text-blue-900">{loanAmount.toLocaleString()}€</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Durée (mois)</label>
                  <div className="relative">
                    <input
                      type="range"
                      min="12"
                      max="360"
                      step="12"
                      value={loanDuration}
                      onChange={(e) => setLoanDuration(parseInt(e.target.value))}
                      className="w-full"
                    />
                    <div className="text-center mt-2">
                      <span className="text-2xl font-bold text-blue-900">{loanDuration} mois</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">{t('personal_mensualite_estimee')}</label>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-green-600">{monthlyPayment.toLocaleString()}€</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">{t('personal_cout_total')}</label>
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900">{totalCost.toLocaleString()}€</div>
                    <div className="text-sm text-gray-600">Dont {totalInterest.toLocaleString()}€ d'intérêts</div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Loan Types */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {(loanTypes || []).map((loan, index) => (
              <motion.div
                key={loan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className={`relative bg-white border-2 rounded-xl p-8 cursor-pointer transition-all hover:shadow-lg ${
                  selectedLoan === loan.id 
                    ? 'border-blue-900 shadow-xl' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedLoan(loan.id)}
              >
                {loan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium">{t('personal_plus_choisi')}</div>
                )}
                
                {selectedLoan === loan.id && (
                  <div className="absolute -top-3 -right-3 bg-blue-900 text-white rounded-full p-2">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                )}
                
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                  loan.color === 'blue' ? 'bg-blue-100 text-blue-900' :
                  loan.color === 'green' ? 'bg-green-100 text-green-600' :
                  loan.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  loan.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                  loan.color === 'pink' ? 'bg-pink-100 text-pink-600' :
                  'bg-indigo-100 text-indigo-600'
                }`}>
                  {loan.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{loan.title}</h3>
                <p className="text-gray-600 mb-6">{loan.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{t('personal_taux')}</span>
                    <span className="font-semibold text-blue-600">{loan.rate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{t('personal_montant')}</span>
                    <span className="font-semibold text-gray-900">{loan.amount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{t('personal_duree')}</span>
                    <span className="font-semibold text-gray-900">{loan.duration}</span>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {(loan?.features?.slice(0, 3) || []).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                  {loan.features.length > 3 && (
                    <li className="text-sm text-blue-600">
                      +{loan.features.length - 3} autres avantages
                    </li>
                  )}
                </ul>
                
                <button className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium">{t('personal_demander_pret')}</button>
              </motion.div>
            ))}
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Pourquoi Choisir Nos Prêts ?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: 'Sécurité Totale',
                  description: 'Protection de vos données et transactions'
                },
                {
                  icon: <TrendingUp className="w-6 h-6" />,
                  title: 'Taux Compétitifs',
                  description: 'Des taux parmi les plus avantageux du marché'
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: 'Réponse Rapide',
                  description: 'Décision de principe en moins de 24h'
                },
                {
                  icon: <DollarSign className="w-6 h-6" />,
                  title: 'Transparence',
                  description: 'Pas de frais cachés, conditions claires'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-900">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-gray-50 rounded-2xl p-12 mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">{t('personal_votre_pret_etapes_simples')}</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: 1, title: 'Simulation', description: 'Estimez votre capacité d\'emprunt' },
                { step: 2, title: 'Demande', description: 'Remplissez votre dossier en ligne' },
                { step: 3, title: 'Validation', description: 'Réponse de principe sous 24h' },
                { step: 4, title: 'Déblocage', description: 'Versement des fonds en 48h' }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Prêt à Réaliser vos Projets ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Simulez votre prêt gratuitement et recevez une réponse immédiate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/request"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                <Calculator className="w-5 h-5 mr-2" />{t('personal_simuler_mon_pret')}</Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors font-semibold"
              >
                <ArrowRight className="w-5 h-5 mr-2" />{t('personal_parler_conseiller')}</Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
