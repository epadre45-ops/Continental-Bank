import { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Shield, Zap, Globe, Smartphone, CheckCircle, ArrowRight, Star, Lock, QrCode, ShoppingBag, Plane, Coffee } from 'lucide-react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { useTranslation } from '../../lib/i18n';
export default function CreditCardsPage() {
  const { t } = useTranslation();

  const [selectedCard, setSelectedCard] = useState(null);
  const [compareMode, setCompareMode] = useState(false);
  const [cardsToCompare, setCardsToCompare] = useState([]);

  const cardTypes = [
    {
      id: 'classic',
      title: 'Carte Classique',
      description: 'Une carte simple et efficace pour le quotidien',
      annualFee: 'Gratuite',
      creditLimit: 'Jusqu\'à 2 000€',
      interestRate: '19.9% TAEG',
      features: [
        'Paiements sans contact',
        'Retraits d\'argent',
        'Virements',
        'Application mobile',
        'Alertes sécurité'
      ],
      benefits: [
        'Assurance perte et vol',
        'Garantie prolongée',
        'Service client 24/7'
      ],
      color: 'blue',
      popular: false,
      metal: 'standard'
    },
    {
      id: 'gold',
      title: 'Carte Gold',
      description: 'Des avantages premium pour votre style de vie',
      annualFee: '49€/an',
      creditLimit: 'Jusqu\'à 5 000€',
      interestRate: '17.9% TAEG',
      features: [
        'Paiements sans contact',
        'Retraits illimités',
        'Assurance voyage',
        'Lounge accès aéroport',
        'Conciergerie 24/7'
      ],
      benefits: [
        'Cashback 2%',
        'Réductions partenaires',
        'Assurance multirisques',
        'Programme fidélité'
      ],
      color: 'gold',
      popular: true,
      metal: 'gold'
    },
    {
      id: 'platinum',
      title: 'Carte Platinum',
      description: 'L\'excellence bancaire pour les plus exigeants',
      annualFee: '149€/an',
      creditLimit: 'Jusqu\'à 10 000€',
      interestRate: '16.9% TAEG',
      features: [
        'Limite de crédit élevée',
        'Assurance premium',
        'Accès salons privés',
        'Service personnel dédié',
        'Gestion multi-devises'
      ],
      benefits: [
        'Cashback 3%',
        'Lounge accès worldwide',
        'Programme voyage premium',
        'Conciergerie personnalisée',
        'Protection achat étendue'
      ],
      color: 'gray',
      popular: false,
      metal: 'platinum'
    },
    {
      id: 'virtual',
      title: 'Carte Virtuelle',
      description: 'La carte 100% digitale pour vos achats en ligne',
      annualFee: 'Gratuite',
      creditLimit: 'Jusqu\'à 1 500€',
      interestRate: '18.9% TAEG',
      features: [
        'Création instantanée',
        'Utilisation immédiate',
        'Blocage/déblocage',
        'Cartes éphémères',
        'Intégration mobile'
      ],
      benefits: [
        'Sécurité renforcée',
        'Pas de risque de perte',
        'Contrôle total des dépenses',
        'Multi-cartes possibles'
      ],
      color: 'purple',
      popular: false,
      metal: 'virtual'
    }
  ];

  const spendingCategories = [
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: 'Shopping',
      cashback: '2%',
      description: 'Achats en ligne et en magasin'
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: 'Restaurants',
      cashback: '3%',
      description: 'Restaurants, bars et cafés'
    },
    {
      icon: <Plane className="w-6 h-6" />,
      title: 'Voyages',
      cashback: '5%',
      description: 'Billets, hôtels et location'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Services',
      cashback: '1%',
      description: 'Abonnements et services en ligne'
    }
  ];

  const securityFeatures = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: '3D Secure',
      description: 'Authentification renforcée pour chaque paiement en ligne'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Alertes Instantanées',
      description: 'Notifications pour chaque transaction sur votre carte'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Contrôle Mobile',
      description: 'Bloquez et débloquez votre carte depuis l\'application'
    },
    {
      icon: <QrCode className="w-6 h-6" />,
      title: 'Paiement QR Code',
      description: 'Payez simplement en scannant les QR codes'
    }
  ];

  const handleCompare = (cardId) => {
    if (compareMode) {
      if (cardsToCompare.includes(cardId)) {
        setCardsToCompare(cardsToCompare.filter(id => id !== cardId));
      } else if (cardsToCompare.length < 3) {
        setCardsToCompare([...cardsToCompare, cardId]);
      }
    }
  };

  const getCardStyle = (metal) => {
    switch(metal) {
      case 'gold': return 'bg-gradient-to-br from-yellow-100 to-yellow-200 border-yellow-300';
      case 'platinum': return 'bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300';
      case 'virtual': return 'bg-gradient-to-br from-purple-100 to-purple-200 border-purple-300';
      default: return 'bg-gradient-to-br from-blue-100 to-blue-200 border-blue-300';
    }
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('credit_cards_cartes_credit')}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos cartes de paiement adaptées à vos besoins : 
              du quotidien au premium, en passant par le 100% digital.
            </p>
          </motion.div>

          {/* Compare Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <button
              onClick={() => setCompareMode(!compareMode)}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                compareMode 
                  ? 'bg-blue-900 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <CreditCard className="w-5 h-5 mr-2" />
              {compareMode ? `Comparer (${cardsToCompare.length}/3)` : 'Comparer les cartes'}
            </button>
          </motion.div>

          {/* Card Types */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {(cardTypes || []).map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className={`relative border-2 rounded-xl p-8 cursor-pointer transition-all hover:shadow-lg ${
                  selectedCard === card.id 
                    ? 'border-blue-900 shadow-xl' 
                    : 'border-gray-200 hover:border-gray-300'
                } ${getCardStyle(card.metal)}`}
                onClick={() => setSelectedCard(card.id)}
              >
                {card.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium">{t('credit_cards_plus_populaire')}</div>
                )}
                
                {selectedCard === card.id && (
                  <div className="absolute -top-3 -right-3 bg-blue-900 text-white rounded-full p-2">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{card.title}</h3>
                    <div className="text-sm text-gray-600 mb-4">{card.description}</div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">{t('credit_cards_frais_annuels')}</span>
                        <span className="font-semibold text-gray-900">{card.annualFee}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">{t('credit_cards_limite_credit')}</span>
                        <span className="font-semibold text-gray-900">{card.creditLimit}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">{t('credit_cards_taeg')}</span>
                        <span className="font-semibold text-blue-600">{card.interestRate}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-16 h-10 bg-white rounded-lg shadow-md flex items-center justify-center">
                    <CreditCard className="w-8 h-8 text-gray-700" />
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">{t('credit_cards_caracteristiques_principales')}</h4>
                  <ul className="space-y-2">
                    {(card?.features?.slice(0, 4) || []).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {card.features.length > 4 && (
                      <li className="text-sm text-blue-600">
                        +{card.features.length - 4} autres avantages
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium">{t('credit_cards_demander_cette_carte')}</button>
                  {compareMode && (
                    <button
                      onClick={() => handleCompare(card.id)}
                      className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                        cardsToCompare.includes(card.id)
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {cardsToCompare.includes(card.id) ? '✓' : '+'}
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Cashback Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{t('credit_cards_cashback_sur_vos_depenses')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(spendingCategories || []).map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 text-center"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-900">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <div className="text-2xl font-bold text-green-600 mb-2">{category.cashback}%</div>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Security Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{t('credit_cards_securite_controle')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(securityFeatures || []).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-900">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Digital Wallet Integration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-blue-50 rounded-2xl p-12 mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">{t('credit_cards_integration_portefeuilles_digitaux')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-10 h-10 text-gray-700" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('credit_cards_apple_pay')}</h3>
                <p className="text-sm text-gray-600">{t('credit_cards_payez_avec_votre_iphone')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-10 h-10 text-gray-700" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('credit_cards_google_pay')}</h3>
                <p className="text-sm text-gray-600">{t('credit_cards_paiements_rapides_securises_sur')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-4">
                  <QrCode className="w-10 h-10 text-gray-700" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('credit_cards_samsung_pay')}</h3>
                <p className="text-sm text-gray-600">{t('credit_cards_compatible_avec_les_appareils')}</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">{t('credit_cards_choisissez_votre_carte_ideale')}</h2>
            <p className="text-xl mb-8 opacity-90">
              Simulez votre demande et recevez une réponse immédiate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/request"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                <CreditCard className="w-5 h-5 mr-2" />{t('credit_cards_demander_une_carte')}</Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors font-semibold"
              >
                <ArrowRight className="w-5 h-5 mr-2" />{t('credit_cards_parler_conseiller')}</Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
