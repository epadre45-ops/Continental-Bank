import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Car, Home, Users, Briefcase, Plane, CheckCircle, ArrowRight, Phone, Mail, Clock, Award, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { useTranslation } from '../../lib/i18n';
export default function PersonalInsurancePage() {
  const { t } = useTranslation();

  const [selectedInsurance, setSelectedInsurance] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    insuranceType: '',
    message: ''
  });

  const insuranceTypes = [
    {
      id: 'auto',
      title: 'Assurance Auto',
      description: 'Protégez votre véhicule avec une couverture complète',
      price: 'À partir de 35€/mois',
      coverage: ['Responsabilité civile', 'Tous risques', 'Bris de glace', 'Vol et incendie'],
      features: [
        'Assistance 24/7',
        'Véhicule de remplacement',
        'Protection juridique',
        'Bonus malus avantageux',
        'Franchise réduite'
      ],
      icon: <Car className="w-8 h-8" />,
      color: 'blue'
    },
    {
      id: 'home',
      title: 'Assurance Habitation',
      description: 'Sécurisez votre logement et vos biens',
      price: 'À partir de 25€/mois',
      coverage: ['Incendie', 'Dégâts des eaux', 'Vol', 'Catastrophes naturelles'],
      features: [
        'Responsabilité civile vie privée',
        'Protection juridique',
        'Assistance dépannage',
        'Biens précieux couverts',
        'Extension vacances'
      ],
      icon: <Home className="w-8 h-8" />,
      color: 'green'
    },
    {
      id: 'health',
      title: 'Assurance Santé',
      description: 'Accédez aux meilleurs soins médicaux',
      price: 'À partir de 45€/mois',
      coverage: ['Hôpital', 'Médecins', 'Spécialistes', 'Pharmacie', 'Optique', 'Dentaire'],
      features: [
        'Remboursement immédiat',
        'Réseau de professionnels',
        'Tiers payant',
        'Prévention santé',
        'Téléconsultation'
      ],
      icon: <Heart className="w-8 h-8" />,
      color: 'red'
    },
    {
      id: 'life',
      title: 'Assurance Vie',
      description: 'Préparez l\'avenir de vos proches',
      price: 'À partir de 20€/mois',
      coverage: ['Décès', 'Invalidité', 'Perte d\'emploi', 'Dépendance'],
      features: [
        'Capital garanti',
        'Rente éducative',
        'Anticipation médicale',
        'Fiscalité avantageuse',
        'Flexibilité de versement'
      ],
      icon: <Users className="w-8 h-8" />,
      color: 'purple'
    },
    {
      id: 'travel',
      title: 'Assurance Voyage',
      description: 'Partez l\'esprit tranquille où que vous soyez',
      price: 'À partir de 15€/voyage',
      coverage: ['Annulation', 'Bagages', 'Responsabilité civile', 'Assistance médicale'],
      features: [
        'Couverture mondiale',
        'Assistance 24/7',
        'Sports extrêmes inclus',
        'Documents perdus',
        'Retard de vol'
      ],
      icon: <Plane className="w-8 h-8" />,
      color: 'orange'
    },
    {
      id: 'professional',
      title: 'Assurance Professionnelle',
      description: 'Protégez votre activité et vos revenus',
      price: 'À partir de 40€/mois',
      coverage: ['Responsabilité civile professionnelle', 'Perte d\'exploitation', 'Matériel professionnel'],
      features: [
        'Protection juridique',
        'Accompagnement sinistres',
        'Formation continue',
        'Réseau d\'experts',
        'Conseil préventif'
      ],
      icon: <Briefcase className="w-8 h-8" />,
      color: 'indigo'
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Couverture Complète',
      description: 'Des garanties adaptées à tous les risques de la vie quotidienne'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Intervention Rapide',
      description: 'Une équipe disponible 24/7 pour vous assister en cas de sinistre'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Expertise Reconnue',
      description: 'Plus de 20 ans d\'expérience dans l\'assurance et la protection'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Service Client Premium',
      description: 'Des conseillers dédiés pour vous accompagner dans vos démarches'
    }
  ];

  const handleQuoteRequest = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Quote request:', formData);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('insurance_assurances_personnelles')}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protégez-vous, vos proches et vos biens avec nos solutions d'assurance 
              complètes et adaptées à vos besoins.
            </p>
          </motion.div>

          {/* Insurance Types */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {(insuranceTypes || []).map((insurance, index) => (
              <motion.div
                key={insurance.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`bg-white border-2 rounded-xl p-8 cursor-pointer transition-all hover:shadow-lg ${
                  selectedInsurance === insurance.id 
                    ? 'border-blue-900 shadow-xl' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedInsurance(insurance.id)}
              >
                {selectedInsurance === insurance.id && (
                  <div className="absolute -top-3 -right-3 bg-blue-900 text-white rounded-full p-2">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                )}
                
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                  insurance.color === 'blue' ? 'bg-blue-100 text-blue-900' :
                  insurance.color === 'green' ? 'bg-green-100 text-green-600' :
                  insurance.color === 'red' ? 'bg-red-100 text-red-600' :
                  insurance.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  insurance.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                  'bg-indigo-100 text-indigo-600'
                }`}>
                  {insurance.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{insurance.title}</h3>
                <p className="text-gray-600 mb-4">{insurance.description}</p>
                
                <div className="mb-6">
                  <span className="text-sm text-gray-500">{t('insurance_partir')}</span>
                  <span className="font-semibold text-blue-900">{insurance.price}</span>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">{t('insurance_couvertures_principales')}</h4>
                  <ul className="space-y-1">
                    {(insurance?.coverage?.slice(0, 3) || []).map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                    {insurance.coverage.length > 3 && (
                      <li className="text-sm text-blue-600">
                        +{insurance.coverage.length - 3} autres garanties
                      </li>
                    )}
                  </ul>
                </div>
                
                <button className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium">{t('insurance_obtenir_devis')}</button>
              </motion.div>
            ))}
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Pourquoi Nos Assurances ?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(benefits || []).map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
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

          {/* Quote Request Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gray-50 rounded-2xl p-12 mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">{t('insurance_demandez_devis_personnalise')}</h2>
            <form onSubmit={handleQuoteRequest} className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">{t('insurance_nom_complet')}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">{t('insurance_email')}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                    placeholder="jean.dupont@email.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">{t('insurance_telephone')}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">{t('insurance_type_assurance')}</label>
                  <select
                    name="insuranceType"
                    value={formData.insuranceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                  >
                    <option value="">Sélectionnez...</option>
                    {(insuranceTypes || []).map(insurance => (
                      <option key={insurance.id} value={insurance.id}>
                        {insurance.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-gray-700">Message (optionnel)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                  placeholder="Décrivez vos besoins spécifiques..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-4 rounded-lg hover:bg-blue-800 transition-colors font-semibold"
              >{t('insurance_demander_mon_devis_gratuit')}</button>
            </form>
          </motion.div>

          {/* Emergency Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-red-50 border border-red-200 rounded-xl p-8 mb-16"
          >
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-red-900 mb-2">
                  Urgence ? Contactez-nous 24/7
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">{t('insurance_assistance_sinistres')}</h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Phone className="w-4 h-4 text-red-600 mr-2" />
                        <span className="text-red-800">0 800 123 456 (Appel gratuit)</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Mail className="w-4 h-4 text-red-600 mr-2" />
                        <span className="text-red-800">contact@continentalbk.de</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">{t('insurance_conseil_assurance')}</h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Phone className="w-4 h-4 text-red-600 mr-2" />
                        <span className="text-red-800">+33 7 80 93 38 72</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Mail className="w-4 h-4 text-red-600 mr-2" />
                        <span className="text-red-800">contact@continentalbk.de</span>
                      </div>
                    </div>
                  </div>
                </div>
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
            <h2 className="text-3xl font-bold mb-4">{t('insurance_protegez_qui_compte_plus')}</h2>
            <p className="text-xl mb-8 opacity-90">
              Obtenez un devis personnalisé en quelques minutes et bénéficiez de couvertures adaptées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/request"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                <Shield className="w-5 h-5 mr-2" />{t('insurance_demander_devis')}</Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors font-semibold"
              >
                <ArrowRight className="w-5 h-5 mr-2" />{t('insurance_parler_expert')}</Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
