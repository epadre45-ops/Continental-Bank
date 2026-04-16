import { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Smartphone, Globe, Shield, TrendingUp, CheckCircle, ArrowRight, Home, Car, ShoppingBag, Coffee, Plane, Gift, Zap, Users } from 'lucide-react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { useTranslation } from '../../lib/i18n';
export default function CurrentAccountPage() {
  const { t } = useTranslation();

  const [selectedAccount, setSelectedAccount] = useState(null);

  const accountTypes = [
    {
      id: 'essential',
      title: 'Compte Essentiel',
      description: 'Un compte bancaire simple et sans frais pour le quotidien',
      price: 'Gratuit',
      features: [
        'Carte de débit Visa',
        'Virements SEPA gratuits',
        'Application mobile',
        'Alertes SMS/Email',
        '10 retraits gratuits/mois'
      ],
      icon: <CreditCard className="w-8 h-8" />,
      color: 'blue',
      popular: false
    },
    {
      id: 'premium',
      title: 'Compte Premium',
      description: 'Des avantages exclusifs pour une expérience bancaire supérieure',
      price: '9.90€/mois',
      features: [
        'Carte Gold Visa',
        'Assurance voyage',
        'Cashback 2%',
        'Conseiller dédié',
        'Retraits illimités',
        'Gestions multi-devises'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'gold',
      popular: true
    },
    {
      id: 'student',
      title: 'Compte Étudiant',
      description: 'Conçu pour les étudiants avec des avantages spécifiques',
      price: 'Gratuit',
      features: [
        'Carte étudiant Visa',
        'Pas de frais de tenue',
        'Réductions partenaires',
        'Application éducative',
        'Budget intelligent',
        'Alertes études'
      ],
      icon: <Users className="w-8 h-8" />,
      color: 'green',
      popular: false
    },
    {
      id: 'family',
      title: 'Compte Famille',
      description: 'Une solution complète pour toute la famille',
      price: '14.90€/mois',
      features: [
        '4 cartes gratuites',
        'Comptes pour enfants',
        'Carnet de santé',
        'Assurance scolaire',
        'Budget familial',
        'Contrôle parental'
      ],
      icon: <Home className="w-8 h-8" />,
      color: 'purple',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Virements Instantanés',
      description: 'Envoyez de l\'argent en temps réel 24/7'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Sécurité Renforcée',
      description: 'Protection anti-fraude et double authentification'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Application Mobile',
      description: 'Gérez vos comptes depuis votre smartphone'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Services Internationaux',
      description: 'Virements et paiements dans le monde entier'
    }
  ];

  const spendingCategories = [
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: 'Shopping',
      percentage: 35,
      color: 'blue'
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Restaurants',
      percentage: 25,
      color: 'orange'
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Transport',
      percentage: 20,
      color: 'green'
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: 'Voyages',
      percentage: 15,
      color: 'purple'
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'Loisirs',
      percentage: 5,
      color: 'pink'
    }
  ];

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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('current_account_comptes_courants')}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos comptes bancaires adaptés à vos besoins du quotidien, 
              avec des tarifs transparents et des services innovants.
            </p>
          </motion.div>

          {/* Account Types */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {(accountTypes || []).map((account, index) => (
              <motion.div
                key={account.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`relative bg-white border-2 rounded-xl p-8 cursor-pointer transition-all hover:shadow-lg ${
                  selectedAccount === account.id 
                    ? 'border-blue-900 shadow-xl' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedAccount(account.id)}
              >
                {account.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium">{t('current_account_plus_populaire')}</div>
                )}
                
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
                    <div className="text-2xl font-bold text-gray-900">{account.price}</div>
                    <div className="text-sm text-gray-500">{t('current_account_par_mois')}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{account.title}</h3>
                <p className="text-gray-600 mb-6">{account.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {(account?.features || []).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium">{t('current_account_choisir_compte')}</button>
              </motion.div>
            ))}
          </motion.div>

          {/* Spending Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-50 rounded-2xl p-8 mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">{t('current_account_analyse_vos_depenses')}</h2>
            <div className="grid md:grid-cols-5 gap-4 mb-8">
              {(spendingCategories || []).map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-white rounded-lg p-4 text-center"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
                    category.color === 'blue' ? 'bg-blue-100 text-blue-900' :
                    category.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                    category.color === 'green' ? 'bg-green-100 text-green-600' :
                    category.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                    'bg-pink-100 text-pink-600'
                  }`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{category.title}</h3>
                  <div className="text-2xl font-bold text-gray-900">{category.percentage}%</div>
                </motion.div>
              ))}
            </div>
            <div className="text-center text-sm text-gray-600">{t('current_account_analyse_basee_sur_vos')}</div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Pourquoi Choisir EUROPA KREDIT BANK ?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(benefits || []).map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
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

          {/* Additional Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">{t('current_account_services_complementaires')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <TrendingUp className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{t('current_account_epargne_automatisee')}</h3>
                <p className="text-sm text-gray-600 mb-4">{t('current_account_programmez_des_virements_reguliers')}</p>
                <Link href="/personal-banking/saving" className="text-blue-900 hover:text-blue-700 font-medium text-sm">{t('current_account_decouvrir')}</Link>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <CreditCard className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{t('current_account_assurances')}</h3>
                <p className="text-sm text-gray-600 mb-4">{t('current_account_protegez_vous_avec_nos')}</p>
                <Link href="/personal-banking/insurance" className="text-blue-900 hover:text-blue-700 font-medium text-sm">{t('current_account_explorer')}</Link>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <Smartphone className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{t('current_account_banking_mobile')}</h3>
                <p className="text-sm text-gray-600 mb-4">{t('current_account_gerez_vos_comptes_effectuez')}</p>
                <Link href="/mobile-banking" className="text-blue-900 hover:text-blue-700 font-medium text-sm">{t('current_account_savoir_plus')}</Link>
              </div>
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
              Prêt à nous Rejoindre ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Ouvrez votre compte en quelques minutes et bénéficiez de tous nos avantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                <CreditCard className="w-5 h-5 mr-2" />{t('current_account_ouvrir_compte')}</Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors font-semibold"
              >
                <ArrowRight className="w-5 h-5 mr-2" />{t('current_account_demander_conseil')}</Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
