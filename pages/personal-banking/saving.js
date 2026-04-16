import { useState } from 'react';
import { motion } from 'framer-motion';
import { PiggyBank, TrendingUp, Shield, Clock, Target, DollarSign, Calendar, Award, CheckCircle, ArrowRight, Home, Car, GraduationCap, Plane } from 'lucide-react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { useTranslation } from '../../lib/i18n';
export default function PersonalSavingsPage() {
  const { t } = useTranslation();

  const [selectedAccount, setSelectedAccount] = useState(null);
  const [savingsGoal, setSavingsGoal] = useState('');

  const savingsAccounts = [
    {
      id: 'classic',
      title: 'Compte Épargne Classique',
      description: 'Une solution simple et efficace pour commencer à épargner',
      rate: '1.5%',
      minDeposit: '100€',
      features: [
        'Sans frais de gestion',
        'Accès permanent aux fonds',
        'Virements gratuits',
        'Application mobile',
        'Alertes par email'
      ],
      icon: <PiggyBank className="w-8 h-8" />,
      color: 'blue'
    },
    {
      id: 'premium',
      title: 'Compte Épargne Premium',
      description: 'Taux avantageux et services exclusifs',
      rate: '2.5%',
      minDeposit: '1 000€',
      features: [
        'Taux boosté',
        'Conseiller dédié',
        'Assurance vie incluse',
        'Carte premium',
        'Gestion multi-devises'
      ],
      icon: <Award className="w-8 h-8" />,
      color: 'gold'
    },
    {
      id: 'youth',
      title: 'Compte Épargne Jeune',
      description: 'Spécialement conçu pour les 18-25 ans',
      rate: '2.0%',
      minDeposit: '50€',
      features: [
        'Taux jeunesse avantageux',
        'Pas de frais',
        'Application éducative',
        'Objectifs d\'épargne',
        'Cashback partenaires'
      ],
      icon: <Target className="w-8 h-8" />,
      color: 'green'
    },
    {
      id: 'retirement',
      title: 'Plan Épargne Retraite',
      description: 'Préparez votre avenir avec notre solution retraite',
      rate: '3.0%',
      minDeposit: '500€',
      features: [
        'Avantages fiscaux',
        'Gestion pilotée',
        'Flexibilité de versement',
        'Simulation retraite',
        'Conseil patrimonial'
      ],
      icon: <Calendar className="w-8 h-8" />,
      color: 'purple'
    }
  ];

  const savingsGoals = [
    {
      id: 'home',
      title: 'Achat Immobilier',
      description: 'Constituez l\'apport pour votre future maison',
      icon: <Home className="w-8 h-8" />,
      color: 'blue',
      avgTime: '3-5 ans',
      avgAmount: '30 000€'
    },
    {
      id: 'car',
      title: 'Véhicule',
      description: 'Épargnez pour votre prochaine voiture',
      icon: <Car className="w-8 h-8" />,
      color: 'green',
      avgTime: '1-2 ans',
      avgAmount: '15 000€'
    },
    {
      id: 'education',
      title: 'Études',
      description: 'Préparez l\'avenir éducatif de vos enfants',
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'purple',
      avgTime: '5-10 ans',
      avgAmount: '20 000€'
    },
    {
      id: 'travel',
      title: 'Voyage',
      description: 'Réalisez vos rêves de voyage',
      icon: <Plane className="w-8 h-8" />,
      color: 'orange',
      avgTime: '6-12 mois',
      avgAmount: '5 000€'
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Sécurité Totale',
      description: 'Vos fonds sont protégés jusqu\'à 100 000€'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Taux Compétitifs',
      description: 'Des taux parmi les meilleurs du marché'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Disponibilité 24/7',
      description: 'Accédez à votre épargne à tout moment'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Frais Minimaux',
      description: 'Gérez votre épargne sans frais cachés'
    }
  ];

  const calculatorData = {
    monthly: 200,
    rate: 2.5,
    years: 5,
    total: 12929
  };

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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('saving_comptes_epargne')}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions d'épargne adaptées à vos objectifs pour faire fructifier votre argent 
              en toute sécurité.
            </p>
          </motion.div>

          {/* Savings Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-blue-50 rounded-2xl p-8 mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">{t('saving_simulateur_epargne')}</h2>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">{t('saving_versement_mensuel')}</label>
                <input
                  type="number"
                  value={calculatorData.monthly}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">{t('saving_taux_annuel')}</label>
                <input
                  type="number"
                  value={calculatorData.rate}
                  step="0.1"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Durée (années)</label>
                <input
                  type="number"
                  value={calculatorData.years}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">{t('saving_total_estime')}</label>
                <div className="px-4 py-3 bg-green-100 text-green-800 rounded-lg font-bold text-lg">
                  {calculatorData.total.toLocaleString()}€
                </div>
              </div>
            </div>
          </motion.div>

          {/* Savings Accounts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {(savingsAccounts || []).map((account, index) => (
              <motion.div
                key={account.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className={`bg-white border-2 rounded-xl p-8 cursor-pointer transition-all hover:shadow-lg ${
                  selectedAccount === account.id 
                    ? 'border-blue-900 shadow-xl' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedAccount(account.id)}
              >
                {selectedAccount === account.id && (
                  <div className="absolute -top-3 -right-3 bg-blue-900 text-white rounded-full p-2">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    account.color === 'blue' ? 'bg-blue-100 text-blue-900' :
                    account.color === 'gold' ? 'bg-yellow-100 text-yellow-600' :
                    account.color === 'green' ? 'bg-green-100 text-green-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    {account.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{account.rate}</div>
                    <div className="text-sm text-gray-500">{t('saving_taux_annuel')}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{account.title}</h3>
                <p className="text-gray-600 mb-6">{account.description}</p>
                
                <div className="mb-6">
                  <span className="text-sm text-gray-500">{t('saving_depot_minimum')}</span>
                  <span className="font-semibold text-gray-900">{account.minDeposit}</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {(account?.features || []).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium">{t('saving_ouvrir_compte')}</button>
              </motion.div>
            ))}
          </motion.div>

          {/* Savings Goals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{t('saving_projets_epargne')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(savingsGoals || []).map((goal, index) => (
                <motion.div
                  key={goal.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    goal.color === 'blue' ? 'bg-blue-100 text-blue-900' :
                    goal.color === 'green' ? 'bg-green-100 text-green-600' :
                    goal.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                    'bg-orange-100 text-orange-600'
                  }`}>
                    {goal.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{goal.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{goal.description}</p>
                  <div className="text-xs text-gray-500">
                    <div>Durée moyenne: {goal.avgTime}</div>
                    <div>Montant moyen: {goal.avgAmount}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{t('saving_les_avantages_europa_kredit')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(benefits || []).map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
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

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">{t('saving_commencez_epargner_des_aujourd')}</h2>
            <p className="text-xl mb-8 opacity-90">
              Faites travailler votre argent et atteignez vos objectifs plus rapidement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                <PiggyBank className="w-5 h-5 mr-2" />{t('saving_ouvrir_compte')}</Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors font-semibold"
              >
                <ArrowRight className="w-5 h-5 mr-2" />{t('saving_parler_conseiller')}</Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
