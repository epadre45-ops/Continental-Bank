import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, Shield, Lock, Eye, EyeOff, Plus, 
  Settings, Download, QrCode, Camera, Smartphone,
  CheckCircle, AlertCircle, TrendingUp, Clock,
  ArrowUp, ArrowDown, Filter, Search, Bell
} from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function CardsPage() {
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState('my-cards');
  const [showCardDetails, setShowCardDetails] = useState(null);
  const [showBalance, setShowBalance] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const cards = [
    {
      id: 1,
      type: 'gold',
      name: 'Carte Gold',
      number: '•••• •••• •••• 4582',
      expiry: '08/26',
      cvv: '•••',
      balance: 5234.50,
      limit: 10000,
      status: 'active',
      color: 'from-yellow-400 to-yellow-600',
      icon: 'gold',
      features: ['Cashback 2%', 'Assurance voyage', 'Lounge accès']
    },
    {
      id: 2,
      type: 'classic',
      name: 'Carte Classique',
      number: '•••• •••• •••• 7234',
      expiry: '12/25',
      cvv: '•••',
      balance: 1250.75,
      limit: 2000,
      status: 'active',
      color: 'from-blue-400 to-blue-600',
      icon: 'classic',
      features: ['Paiements sans contact', 'Retraits gratuits']
    },
    {
      id: 3,
      type: 'virtual',
      name: 'Carte Virtuelle',
      number: '•••• •••• •••• 9876',
      expiry: '06/24',
      cvv: '•••',
      balance: 500.00,
      limit: 1500,
      status: 'active',
      color: 'from-purple-400 to-purple-600',
      icon: 'virtual',
      features: ['Utilisation en ligne', 'Blocage instantané']
    },
    {
      id: 4,
      type: 'platinum',
      name: 'Carte Platinum',
      number: '•••• •••• •••• 2341',
      expiry: '03/27',
      cvv: '•••',
      balance: 15420.00,
      limit: 25000,
      status: 'blocked',
      color: 'from-gray-400 to-gray-600',
      icon: 'platinum',
      features: ['Cashback 3%', 'Conciergerie', 'Assurance premium']
    }
  ];

  const transactions = [
    { id: 1, date: '2024-03-15', merchant: 'Amazon', amount: -89.99, type: 'online', cardId: 1 },
    { id: 2, date: '2024-03-14', merchant: 'Carrefour', amount: -156.32, type: 'retail', cardId: 2 },
    { id: 3, date: '2024-03-13', merchant: 'Total', amount: -65.00, type: 'fuel', cardId: 1 },
    { id: 4, date: '2024-03-12', merchant: 'Netflix', amount: -15.99, type: 'subscription', cardId: 3 },
    { id: 5, date: '2024-03-11', merchant: 'Restaurant Le Gourmet', amount: -45.50, type: 'restaurant', cardId: 1 }
  ];

  const tabs = [
    { id: 'my-cards', label: 'Mes Cartes', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'transactions', label: 'Transactions', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'settings', label: 'Paramètres', icon: <Settings className="w-5 h-5" /> }
  ];

  const filters = [
    { id: 'all', label: 'Toutes' },
    { id: 'active', label: 'Actives' },
    { id: 'blocked', label: 'Bloquées' },
    { id: 'expired', label: 'Expirées' }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fr-FR', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  const getCardTypeColor = (type) => {
    switch(type) {
      case 'gold': return 'bg-gradient-to-br from-yellow-400 to-yellow-600';
      case 'platinum': return 'bg-gradient-to-br from-gray-400 to-gray-600';
      case 'virtual': return 'bg-gradient-to-br from-purple-400 to-purple-600';
      default: return 'bg-gradient-to-br from-blue-400 to-blue-600';
    }
  };

  const filteredCards = cards.filter(card => {
    const matchesSearch = card.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || 
      (selectedFilter === 'active' && card.status === 'active') ||
      (selectedFilter === 'blocked' && card.status === 'blocked');
    return matchesSearch && matchesFilter;
  });

  const getCardTransactions = (cardId) => {
    return transactions.filter(t => t.cardId === cardId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-between items-center mb-8"
          >
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('cards_mes_cartes')}</h1>
              <p className="text-gray-600">{t('cards_gerez_vos_cartes_paiement')}</p>
            </div>
            <button className="flex items-center px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium">
              <Plus className="w-5 h-5 mr-2" />{t('cards_nouvelle_carte')}</button>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              {/* Navigation Tabs */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <nav className="space-y-2">
                  {(tabs || []).map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-900 text-white'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <span className="mr-3">{tab.icon}</span>
                      <span className="text-sm font-medium">{tab.label}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('cards_apercu')}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('cards_cartes_actives')}</span>
                    <span className="font-semibold text-gray-900">{cards.filter(c => c.status === 'active').length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('cards_limite_totale')}</span>
                    <span className="font-semibold text-gray-900">
                      {formatCurrency(cards.reduce((sum, card) => sum + card.limit, 0))}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('cards_solde_total')}</span>
                    <span className="font-semibold text-gray-900">
                      {formatCurrency(cards.reduce((sum, card) => sum + card.balance, 0))}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              {/* My Cards Tab */}
              {activeTab === 'my-cards' && (
                <div className="space-y-6">
                  {/* Search and Filter */}
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex flex-col sm:flex-row gap-4 mb-4">
                      <div className="flex-1">
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Rechercher une carte..."
                          className="w-full px-4 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="flex gap-2">
                        {(filters || []).map((filter) => (
                          <button
                            key={filter.id}
                            onClick={() => setSelectedFilter(filter.id)}
                            className={`px-4 py-3 rounded-lg transition-colors ${
                              selectedFilter === filter.id
                                ? 'bg-blue-900 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {filter.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Cards Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {(filteredCards || []).map((card, index) => (
                      <motion.div
                        key={card.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        {/* Card Front */}
                        <div className={`h-48 bg-gradient-to-br ${card.color} p-6 text-white relative`}>
                          <div className="flex justify-between items-start mb-8">
                            <div>
                              <h3 className="text-lg font-bold">{card.name}</h3>
                              <p className="text-sm opacity-90">{card.type}</p>
                            </div>
                            <div className="flex gap-2">
                              <button
                                onClick={() => setShowCardDetails(card.id === showCardDetails ? null : card.id)}
                                className="p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors">
                                <Settings className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="text-xl font-mono tracking-wider">
                              {showCardDetails === card.id ? '4582 7234 9876 2341' : card.number}
                            </div>
                            <div className="flex justify-between items-end">
                              <div>
                                <p className="text-xs opacity-75">{t('cards_expiry')}</p>
                                <p className="font-mono">{card.expiry}</p>
                              </div>
                              <div>
                                <p className="text-xs opacity-75">{t('cards_cvv')}</p>
                                <p className="font-mono">{showCardDetails === card.id ? '123' : card.cvv}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Card Details */}
                        <div className="p-6">
                          <div className="flex justify-between items-center mb-4">
                            <div>
                              <p className="text-sm text-gray-600">{t('cards_solde_disponible')}</p>
                              <div className="flex items-center">
                                <span className="text-2xl font-bold text-gray-900">
                                  {showBalance ? formatCurrency(card.balance) : '•••••'}
                                </span>
                                <button
                                  onClick={() => setShowBalance(!showBalance)}
                                  className="ml-2 p-1 text-gray-400 hover:text-gray-600"
                                >
                                  {showBalance ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                              </div>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                              card.status === 'active' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {card.status === 'active' ? 'Active' : 'Bloquée'}
                            </div>
                          </div>

                          <div className="mb-4">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-gray-600">{t('cards_limite_utilisee')}</span>
                              <span className="font-medium">
                                {formatCurrency(card.limit - card.balance)} / {formatCurrency(card.limit)}
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-900 h-2 rounded-full transition-all"
                                style={{ width: `${((card.limit - card.balance) / card.limit) * 100}%` }}
                              />
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <button className="flex-1 flex items-center justify-center px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                              <QrCode className="w-4 h-4 mr-2" />{t('cards_code')}</button>
                            <button className="flex-1 flex items-center justify-center px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                              <Download className="w-4 h-4 mr-2" />{t('cards_details')}</button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Transactions Tab */}
              {activeTab === 'transactions' && (
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">{t('cards_transactions_recentes')}</h3>
                  <div className="space-y-4">
                    {(transactions || []).map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                            <ArrowDown className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{transaction.merchant}</div>
                            <div className="text-sm text-gray-600">{formatDate(transaction.date)}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-red-600">{formatCurrency(transaction.amount)}</div>
                          <div className="text-xs text-gray-600">{transaction.type}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">{t('cards_parametres_des_cartes')}</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">{t('cards_securite')}</h4>
                      <div className="space-y-3">
                        <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-medium text-gray-900">{t('cards_paiements_sans_contact')}</div>
                            <div className="text-sm text-gray-600">{t('cards_activer_les_paiements_nfc')}</div>
                          </div>
                          <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-900" />
                        </label>
                        <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-medium text-gray-900">{t('cards_alertes_transaction')}</div>
                            <div className="text-sm text-gray-600">{t('cards_recevoir_une_notification_pour')}</div>
                          </div>
                          <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-900" />
                        </label>
                        <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-medium text-gray-900">{t('cards_limite_depense')}</div>
                            <div className="text-sm text-gray-600">{t('cards_definir_une_limite_journaliere')}</div>
                          </div>
                          <input type="checkbox" className="w-5 h-5 text-blue-900" />
                        </label>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">{t('cards_notifications')}</h4>
                      <div className="space-y-3">
                        <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-medium text-gray-900">{t('cards_email')}</div>
                            <div className="text-sm text-gray-600">{t('cards_recevoir_les_alertes_par')}</div>
                          </div>
                          <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-900" />
                        </label>
                        <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-medium text-gray-900">{t('cards_sms')}</div>
                            <div className="text-sm text-gray-600">{t('cards_recevoir_les_alertes_par')}</div>
                          </div>
                          <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-900" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
