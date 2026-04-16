import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, ArrowLeft, Users, CreditCard, Smartphone, 
  Calendar, Clock, CheckCircle, AlertCircle, Search,
  Globe, Shield, Zap, FileText, Download, Plus,
  Minus, Eye, EyeOff, QrCode, Camera
} from 'lucide-react';
import Link from 'next/link';
import { submitFormEmail, flattenForEmail } from '../utils/formSubmit';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function TransferPage() {
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState('internal');
  const [formData, setFormData] = useState({
    fromAccount: '',
    toAccount: '',
    amount: '',
    recipientName: '',
    recipientEmail: '',
    recipientPhone: '',
    recipientBank: '',
    recipientIban: '',
    recipientBic: '',
    reference: '',
    scheduledDate: '',
    recurring: false,
    frequency: 'monthly'
  });
  const [showPreview, setShowPreview] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [transferSuccess, setTransferSuccess] = useState(false);
  const [showBalance, setShowBalance] = useState(true);

  const accounts = [
    { id: 'current', name: 'Compte Courant', balance: 12450.75, currency: 'EUR', type: 'current' },
    { id: 'savings', name: 'Compte Épargne', balance: 8500.00, currency: 'EUR', type: 'savings' },
    { id: 'business', name: 'Compte Professionnel', balance: 23500.00, currency: 'EUR', type: 'business' }
  ];

  const recentTransfers = [
    { id: 1, recipient: 'Marie Dubois', amount: -250.00, date: '2024-03-15', type: 'internal', status: 'completed' },
    { id: 2, recipient: 'John Smith', amount: -500.00, date: '2024-03-14', type: 'external', status: 'completed' },
    { id: 3, recipient: 'Auto Service', amount: -89.99, date: '2024-03-13', type: 'external', status: 'pending' },
    { id: 4, recipient: 'Lucie Martin', amount: -150.00, date: '2024-03-12', type: 'internal', status: 'completed' }
  ];

  const beneficiaries = [
    { id: 1, name: 'Marie Dubois', email: 'marie.d@email.com', bank: 'EUROPA KREDIT BANK', type: 'internal' },
    { id: 2, name: 'John Smith', email: 'john.smith@email.com', bank: 'HSBC', type: 'external' },
    { id: 3, name: 'Lucie Martin', email: 'lucie.m@email.com', bank: 'EUROPA KREDIT BANK', type: 'internal' }
  ];

  const tabs = [
    { id: 'internal', label: 'Virement Interne', icon: <Users className="w-5 h-5" /> },
    { id: 'external', label: 'Virement Externe', icon: <Globe className="w-5 h-5" /> },
    { id: 'international', label: 'Virement International', icon: <Globe className="w-5 h-5" /> },
    { id: 'scheduled', label: 'Virement Programmé', icon: <Calendar className="w-5 h-5" /> }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Créer la demande de transfert via API backend sécurisée
      const transferData = {
        ...formData,
        submittedAt: new Date().toISOString(),
        userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'SSR',
        status: 'pending'
      };

      const transferResponse = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'transfer', ...transferData })
      });

      if (!transferResponse.ok) {
        const errorData = await transferResponse.json();
        throw new Error(errorData.message || 'Failed to create transfer request');
      }

      const { transfer: newTransfer } = await transferResponse.json();

      // Afficher le succès
      setShowPreview(true);
      alert(`Votre demande de transfert a été enregistrée! Référence: ${newTransfer.id}`);

    } catch (error) {
      alert(error.message || 'Unable to submit. Please try again.');
    }
  };

  const confirmTransfer = () => {
    setShowPreview(false);
    setShowConfirmation(true);
    
    // Simulate transfer processing
    setTimeout(() => {
      setShowConfirmation(false);
      setTransferSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setTransferSuccess(false);
        setFormData({
          fromAccount: '',
          toAccount: '',
          amount: '',
          recipientName: '',
          recipientEmail: '',
          recipientPhone: '',
          recipientBank: '',
          recipientIban: '',
          recipientBic: '',
          reference: '',
          scheduledDate: '',
          recurring: false,
          frequency: 'monthly'
        });
      }, 3000);
    }, 2000);
  };

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

  const validateForm = () => {
    if (!formData.fromAccount || !formData.amount) return false;
    if (activeTab === 'internal' && !formData.toAccount) return false;
    if (activeTab === 'external' && (!formData.recipientName || !formData.recipientIban)) return false;
    if (activeTab === 'international' && (!formData.recipientName || !formData.recipientIban || !formData.recipientBic)) return false;
    return true;
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
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('transfer_virements')}</h1>
            <p className="text-gray-600">{t('transfer_effectuez_des_virements_rapidement')}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              {/* Tabs */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {(tabs || []).map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-900 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <span className="mr-2">{tab.icon}</span>
                      <span className="text-sm font-medium">{tab.label}</span>
                    </button>
                  ))}
                </div>

                {/* Transfer Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* From Account */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">{t('transfer_compte_emetteur')}</label>
                    <div className="relative">
                      <select
                        name="fromAccount"
                        value={formData.fromAccount}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors appearance-none"
                      >
                        <option value="">{t('transfer_selectionner_compte')}</option>
                        {(accounts || []).map((account) => (
                          <option key={account.id} value={account.id}>
                            {account.name} - {showBalance ? formatCurrency(account.balance) : '••••••'}
                          </option>
                        ))}
                      </select>
                      <button
                        type="button"
                        onClick={() => setShowBalance(!showBalance)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showBalance ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Amount */}
                  <div>
                    <label className="form-label form-label-required">{t('transfer_montant')}</label>
                    <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleInputChange}
                      required
                      min="1"
                      step="0.01"
                      className="form-input"
                      placeholder="0,00"
                    />
                  </div>

                  {/* Internal Transfer */}
                  {activeTab === 'internal' && (
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">{t('transfer_compte_beneficiaire')}</label>
                      <select
                        name="toAccount"
                        value={formData.toAccount}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                      >
                        <option value="">{t('transfer_selectionner_compte')}</option>
                        {(accounts?.filter(acc => acc.id !== formData.fromAccount) || []).map((account) => (
                          <option key={account.id} value={account.id}>
                            {account.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* External Transfer */}
                  {activeTab === 'external' && (
                    <>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">{t('transfer_nom_beneficiaire')}</label>
                        <input
                          type="text"
                          name="recipientName"
                          value={formData.recipientName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                          placeholder="Jean Dupont"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">{t('transfer_iban')}</label>
                        <input
                          type="text"
                          name="recipientIban"
                          value={formData.recipientIban}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors uppercase"
                          placeholder="FR76 3000 6000 0112 3456 7890 189"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">{t('transfer_bic_swift')}</label>
                        <input
                          type="text"
                          name="recipientBic"
                          value={formData.recipientBic}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors uppercase"
                          placeholder="BNPAFRPPXXX"
                        />
                      </div>
                    </>
                  )}

                  {/* International Transfer */}
                  {activeTab === 'international' && (
                    <>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">{t('transfer_nom_beneficiaire')}</label>
                        <input
                          type="text"
                          name="recipientName"
                          value={formData.recipientName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">{t('transfer_banque_beneficiaire')}</label>
                        <input
                          type="text"
                          name="recipientBank"
                          value={formData.recipientBank}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                          placeholder="HSBC Bank"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">{t('transfer_iban')}</label>
                        <input
                          type="text"
                          name="recipientIban"
                          value={formData.recipientIban}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors uppercase"
                          placeholder="GB82 WEST 1234 5698 7654 32"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">{t('transfer_bic_swift')}</label>
                        <input
                          type="text"
                          name="recipientBic"
                          value={formData.recipientBic}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors uppercase"
                          placeholder="HBUKGB4BXXX"
                        />
                      </div>
                    </>
                  )}

                  {/* Scheduled Transfer */}
                  {activeTab === 'scheduled' && (
                    <>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">{t('transfer_date_virement')}</label>
                        <input
                          type="date"
                          name="scheduledDate"
                          value={formData.scheduledDate}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="recurring"
                          checked={formData.recurring}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-900 bg-white border-gray-300 rounded focus:ring-blue-900 mr-3"
                        />
                        <label className="text-sm font-medium text-gray-700">{t('transfer_virement_recurrent')}</label>
                      </div>
                      {formData.recurring && (
                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-700">{t('transfer_frequence')}</label>
                          <select
                            name="frequency"
                            value={formData.frequency}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                          >
                            <option value="weekly">{t('transfer_hebdomadaire')}</option>
                            <option value="monthly">{t('transfer_mensuel')}</option>
                            <option value="quarterly">{t('transfer_trimestriel')}</option>
                            <option value="yearly">{t('transfer_annuel')}</option>
                          </select>
                        </div>
                      )}
                    </>
                  )}

                  {/* Reference */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Référence (optionnel)</label>
                    <input
                      type="text"
                      name="reference"
                      value={formData.reference}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                      placeholder="Paiement facture..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={!validateForm()}
                    className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                  >
                    {activeTab === 'scheduled' ? 'Programmer le virement' : 'Effectuer le virement'}
                  </button>
                </form>
              </div>

              {/* Preview Modal */}
              {showPreview && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl p-8 max-w-md w-full"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-6">{t('transfer_recapitulatif_virement')}</h3>
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600">{t('transfer_text_29')}</span>
                        <span className="font-medium">{accounts.find(a => a.id === formData.fromAccount)?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">{t('transfer_montant')}</span>
                        <span className="font-bold text-lg">{formatCurrency(parseFloat(formData.amount))}</span>
                      </div>
                      {activeTab === 'internal' && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">{t('transfer_vers')}</span>
                          <span className="font-medium">{accounts.find(a => a.id === formData.toAccount)?.name}</span>
                        </div>
                      )}
                      {(activeTab === 'external' || activeTab === 'international') && (
                        <>
                          <div className="flex justify-between">
                            <span className="text-gray-600">{t('transfer_beneficiaire')}</span>
                            <span className="font-medium">{formData.recipientName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">{t('transfer_iban')}</span>
                            <span className="font-medium text-sm">{formData.recipientIban}</span>
                          </div>
                        </>
                      )}
                      {formData.reference && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">{t('transfer_reference')}</span>
                          <span className="font-medium">{formData.reference}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setShowPreview(false)}
                        className="flex-1 px-4 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                      >{t('transfer_annuler')}</button>
                      <button
                        onClick={confirmTransfer}
                        className="flex-1 px-4 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium"
                      >{t('transfer_confirmer')}</button>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* Confirmation Modal */}
              {showConfirmation && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl p-8 max-w-md w-full text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-blue-900 animate-spin" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t('transfer_virement_cours')}</h3>
                    <p className="text-gray-600 mb-6">
                      Votre virement est en cours de traitement. Veuillez patienter...
                    </p>
                  </motion.div>
                </motion.div>
              )}

              {/* Success Modal */}
              {transferSuccess && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl p-8 max-w-md w-full text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t('transfer_virement_effectue')}</h3>
                    <p className="text-gray-600 mb-6">
                      Votre virement de {formatCurrency(parseFloat(formData.amount))} a été effectué avec succès.
                    </p>
                    <button
                      onClick={() => setTransferSuccess(false)}
                      className="w-full px-4 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium"
                    >
                      OK
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-1 space-y-6"
            >
              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('transfer_actions_rapides')}</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <QrCode className="w-5 h-5 mr-3 text-blue-900" />
                    <span className="text-gray-700">{t('transfer_scanner_code')}</span>
                  </button>
                  <button className="w-full flex items-center px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Users className="w-5 h-5 mr-3 text-blue-900" />
                    <span className="text-gray-700">{t('transfer_ajouter_beneficiaire')}</span>
                  </button>
                  <button className="w-full flex items-center px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <FileText className="w-5 h-5 mr-3 text-blue-900" />
                    <span className="text-gray-700">{t('transfer_historique')}</span>
                  </button>
                </div>
              </div>

              {/* Recent Transfers */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('transfer_virements_recents')}</h3>
                <div className="space-y-3">
                  {(recentTransfers || []).map((transfer) => (
                    <div key={transfer.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{transfer.recipient}</div>
                        <div className="text-xs text-gray-600">{formatDate(transfer.date)}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-red-600">{formatCurrency(transfer.amount)}</div>
                        <div className={`text-xs ${
                          transfer.status === 'completed' ? 'text-green-600' : 'text-yellow-600'
                        }`}>
                          {transfer.status === 'completed' ? 'Effectué' : 'En cours'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/history"
                  className="block text-center mt-4 text-blue-900 hover:text-blue-700 font-medium text-sm"
                >{t('transfer_voir_tout_historique')}</Link>
              </div>

              {/* Security Info */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">{t('transfer_securite')}</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-blue-900 mr-3 mt-0.5" />
                    <div>
                      <div className="font-medium text-blue-900 text-sm">{t('transfer_protection_avancee')}</div>
                      <div className="text-blue-800 text-xs">{t('transfer_vos_virements_sont_proteges')}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Zap className="w-5 h-5 text-blue-900 mr-3 mt-0.5" />
                    <div>
                      <div className="font-medium text-blue-900 text-sm">{t('transfer_virements_instantanes')}</div>
                      <div className="text-blue-800 text-xs">{t('transfer_transfert_temps_reel')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
