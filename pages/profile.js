import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  User, Mail, Phone, MapPin, Calendar, Shield, Settings, 
  Camera, Edit2, Save, X, CheckCircle, AlertCircle,
  CreditCard, Smartphone, Lock, Bell, Globe, Briefcase,
  FileText, Download, Eye, EyeOff
} from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function ProfilePage() {
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState('personal');
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState({
    firstName: 'Jean',
    lastName: 'Dupont',
    email: 'contact@continentalbk.de',
    phone: '+33 6 12 34 56 78',
    dateOfBirth: '1985-06-15',
    address: '123 Rue de la République',
    city: 'Paris',
    postalCode: '75001',
    country: 'France',
    occupation: 'Développeur Senior',
    company: 'Tech Solutions SAS',
    income: '75 000€',
    bio: 'Passionné par la technologie et la finance.'
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: true,
    push: false,
    marketing: false
  });

  const [security, setSecurity] = useState({
    twoFactor: true,
    loginAlerts: true,
    sessionTimeout: true
  });

  const tabs = [
    { id: 'personal', label: 'Informations Personnelles', icon: <User className="w-5 h-5" /> },
    { id: 'security', label: 'Sécurité', icon: <Shield className="w-5 h-5" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="w-5 h-5" /> },
    { id: 'preferences', label: 'Préférences', icon: <Settings className="w-5 h-5" /> }
  ];

  const handleSave = async () => {
    setIsEditing(false);
    setSuccessMessage('Profil mis à jour avec succès!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }
    // Handle password change logic here
    setSuccessMessage('Mot de passe changé avec succès!');
    setTimeout(() => setSuccessMessage(''), 3000);
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNotificationChange = (key, value) => {
    setNotifications(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSecurityChange = (key, value) => {
    setSecurity(prev => ({
      ...prev,
      [key]: value
    }));
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('profile_mon_profil')}</h1>
            <p className="text-gray-600">{t('profile_gerez_vos_informations_personnelles')}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar Navigation */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-xl shadow-sm p-6">
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
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              {/* Success Message */}
              {successMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-green-800">{successMessage}</span>
                </motion.div>
              )}

              {/* Personal Information Tab */}
              {activeTab === 'personal' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-xl shadow-sm p-8"
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">{t('profile_informations_personnelles')}</h2>
                    <button
                      onClick={() => setIsEditing(!isEditing)}
                      className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                        isEditing
                          ? 'bg-red-600 text-white hover:bg-red-700'
                          : 'bg-blue-900 text-white hover:bg-blue-800'
                      }`}
                    >
                      {isEditing ? (
                        <>
                          <X className="w-4 h-4 mr-2" />{t('profile_annuler')}</>
                      ) : (
                        <>
                          <Edit2 className="w-4 h-4 mr-2" />{t('profile_modifier')}</>
                      )}
                    </button>
                  </div>

                  {/* Profile Picture */}
                  <div className="flex items-center mb-8">
                    <div className="relative">
                      <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="w-12 h-12 text-blue-900" />
                      </div>
                      {isEditing && (
                        <button className="absolute bottom-0 right-0 bg-blue-900 text-white p-2 rounded-full hover:bg-blue-800 transition-colors">
                          <Camera className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    <div className="ml-6">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {formData.firstName} {formData.lastName}
                      </h3>
                      <p className="text-gray-600">{formData.email}</p>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">{t('profile_prenom')}</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors disabled:bg-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">{t('profile_nom')}</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors disabled:bg-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">{t('profile_email')}</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors disabled:bg-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">{t('profile_telephone')}</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors disabled:bg-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">{t('profile_date_naissance')}</label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors disabled:bg-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">{t('profile_adresse')}</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors disabled:bg-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">{t('profile_ville')}</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors disabled:bg-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">{t('profile_code_postal')}</label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors disabled:bg-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">{t('profile_pays')}</label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors disabled:bg-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">{t('profile_profession')}</label>
                      <input
                        type="text"
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors disabled:bg-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">{t('profile_entreprise')}</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors disabled:bg-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700">{t('profile_revenu_annuel')}</label>
                      <input
                        type="text"
                        name="income"
                        value={formData.income}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors disabled:bg-gray-100"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2 text-gray-700">{t('profile_biographie')}</label>
                      <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        rows={3}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors disabled:bg-gray-100"
                      />
                    </div>
                  </div>

                  {isEditing && (
                    <div className="mt-8 flex justify-end">
                      <button
                        onClick={handleSave}
                        className="flex items-center px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium"
                      >
                        <Save className="w-4 h-4 mr-2" />{t('profile_enregistrer_les_modifications')}</button>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Security Tab */}
              {activeTab === 'security' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-6"
                >
                  <div className="bg-white rounded-xl shadow-sm p-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">{t('profile_securite_compte')}</h2>
                    
                    {/* Password Change */}
                    <div className="mb-8">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">{t('profile_changer_mot_passe')}</h3>
                      <form onSubmit={handlePasswordChange} className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-700">{t('profile_mot_passe_actuel')}</label>
                          <input
                            type="password"
                            value={passwordData.currentPassword}
                            onChange={(e) => setPasswordData(prev => ({ ...prev, currentPassword: e.target.value }))}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-700">{t('profile_nouveau_mot_passe')}</label>
                          <input
                            type="password"
                            value={passwordData.newPassword}
                            onChange={(e) => setPasswordData(prev => ({ ...prev, newPassword: e.target.value }))}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-gray-700">{t('profile_confirmer_mot_passe')}</label>
                          <input
                            type="password"
                            value={passwordData.confirmPassword}
                            onChange={(e) => setPasswordData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium"
                        >{t('profile_changer_mot_passe')}</button>
                      </form>
                    </div>

                    {/* Security Settings */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">{t('profile_parametres_securite')}</h3>
                      <div className="space-y-4">
                        {[
                          { key: 'twoFactor', label: 'Authentification à deux facteurs', description: 'Ajoutez une couche de sécurité supplémentaire' },
                          { key: 'loginAlerts', label: 'Alertes de connexion', description: 'Recevez une notification à chaque connexion' },
                          { key: 'sessionTimeout', label: 'Déconnexion automatique', description: 'Déconnexion après 30 minutes d\'inactivité' }
                        ].map((setting) => (
                          <div key={setting.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div>
                              <h4 className="font-medium text-gray-900">{setting.label}</h4>
                              <p className="text-sm text-gray-600">{setting.description}</p>
                            </div>
                            <button
                              onClick={() => handleSecurityChange(setting.key, !security[setting.key])}
                              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                security[setting.key] ? 'bg-blue-900' : 'bg-gray-300'
                              }`}
                            >
                              <span
                                className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                                  security[setting.key] ? 'translate-x-6' : 'translate-x-1'
                                }`}
                              />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Other tabs placeholder */}
              {activeTab === 'notifications' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-xl shadow-sm p-8"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">{t('profile_preferences_notification')}</h2>
                  <div className="space-y-4">
                    {[
                      { key: 'email', label: 'Notifications par email', description: 'Recevez des alertes importantes par email' },
                      { key: 'sms', label: 'Notifications SMS', description: 'Alertes instantanées sur votre mobile' },
                      { key: 'push', label: 'Notifications push', description: 'Notifications sur l\'application mobile' },
                      { key: 'marketing', label: 'Communications marketing', description: 'Offres et promotions personnalisées' }
                    ].map((setting) => (
                      <div key={setting.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">{setting.label}</h4>
                          <p className="text-sm text-gray-600">{setting.description}</p>
                        </div>
                        <button
                          onClick={() => handleNotificationChange(setting.key, !notifications[setting.key])}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notifications[setting.key] ? 'bg-blue-900' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                              notifications[setting.key] ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'preferences' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-xl shadow-sm p-8 text-center"
                >
                  <Settings className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('profile_preferences')}</h3>
                  <p className="text-gray-600">
                    Cette section est en cours de développement.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
