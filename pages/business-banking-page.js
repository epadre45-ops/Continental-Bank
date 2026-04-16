import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  CheckCircle, 
  AlertCircle, 
  Building, 
  Users, 
  CreditCard, 
  FileText, 
  TrendingUp, 
  DollarSign, 
  Globe, 
  Flag, 
  ChevronDown, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  MessageCircle, 
  Award, 
  Target, 
  Zap, 
  Star, 
  Headphones, 
  Lock, 
  Briefcase, 
  Calculator, 
  PiggyBank, 
  HandCoins, 
  Receipt, 
  ChartBar, 
  Wallet, 
  Banknote, 
  ArrowTrendingUp, 
  ShieldCheck, 
  Clock, 
  User, 
  Settings, 
  Database, 
  Cloud, 
  Smartphone, 
  Laptop, 
  Monitor, 
  Server, 
  Network 
} from 'lucide-react';
import Link from 'next/link';
import { submitFormEmail, flattenForEmail } from '../utils/formSubmit';

import { useTranslation } from '../lib/i18n';
export default function BusinessBankingPage() {
  const { t } = useTranslation();

  const [selectedService, setSelectedService] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState('Français');
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: '',
    employees: '',
    revenue: '',
    service: '',
    message: ''
  });
  const [showContactForm, setShowContactForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'español', flag: '🇪🇸' },
    { code: 'it', name: 'italiano', flag: '🇮🇹' },
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'pt', name: 'português', flag: '🇵🇹' }
  ];

  const services = [
    {
      id: 'accounts',
      title: 'Comptes Professionnels',
      description: 'Solutions de gestion de trésorerie adaptées aux entreprises de toutes tailles',
      icon: <Building className="w-8 h-8" />,
      features: [
        'Compte courant professionnel',
        'Compte épargne entreprise',
        'Gestion multi-devises',
        'Virements internationaux',
        'Encaissements et paiements'
      ],
      benefits: ['Frais réduits', 'Gestion en ligne', 'Support dédié'],
      color: 'bg-blue-100 text-blue-900'
    },
    {
      id: 'financing',
      title: 'Financement Professionnel',
      description: 'Prêts et crédits pour développer votre activité et financer vos projets',
      icon: <HandCoins className="w-8 h-8" />,
      features: [
        'Prêt à la consommation professionnelle',
        'Crédit-bail immobilier',
        'Affacturage',
        'Découvert autorisé',
        'Ligne de crédit'
      ],
      benefits: ['Taux compétitifs', 'Réponse rapide', 'Montants flexibles'],
      color: 'bg-green-100 text-green-900'
    },
    {
      id: 'international',
      title: 'Services Internationaux',
      description: 'Opérations internationales et gestion des risques de change',
      icon: <Globe className="w-8 h-8" />,
      features: [
        'Virements internationaux',
        'Change de devises',
        'Couverture change',
        'Commerce international',
        'Lettres de crédit'
      ],
      benefits: ['Taux avantageux', 'Exécution rapide', 'Support expert'],
      color: 'bg-purple-100 text-purple-900'
    },
    {
      id: 'cash-management',
      title: 'Cash Management',
      description: 'Optimisez votre trésorerie et améliorez votre gestion financière',
      icon: <Calculator className="w-8 h-8" />,
      features: [
        'Optimisation trésorerie',
        'Prévisionnels',
        'Gestion des flux',
        'Concentration de trésorerie',
        'Reporting avancé'
      ],
      benefits: ['Gain de temps', 'Visibilité accrue', 'Décisions éclairées'],
      color: 'bg-orange-100 text-orange-900'
    },
    {
      id: 'digital-banking',
      title: 'Banque Digitale',
      description: 'Solutions numériques pour une gestion bancaire moderne et efficace',
      icon: <Smartphone className="w-8 h-8" />,
      features: [
        'Application mobile',
        'Plateforme en ligne',
        'API bancaire',
        'Automatisation',
        'Intégration ERP'
      ],
      benefits: ['24/7 access', 'Automatisation', 'Sécurité renforcée'],
      color: 'bg-indigo-100 text-indigo-900'
    },
    {
      id: 'trade-finance',
      title: 'Trade Finance',
      description: 'Solutions de financement du commerce international et des opérations d\'import-export',
      icon: <Receipt className="w-8 h-8" />,
      features: [
        'Financement import-export',
        'Crédits documentaires',
        'Garanties bancaires',
        'Standby letters',
        'Forfaitage'
      ],
      benefits: ['Sécurité', 'Flexibilité', 'Accompagnement'],
      color: 'bg-red-100 text-red-900'
    }
  ];

  const testimonials = [
    {
      name: 'Tech Innovation SAS',
      industry: 'Technologie',
      content: 'EUROPA-KREDIT-BANK nous a accompagnés dans notre croissance avec des solutions de financement adaptées à notre secteur innovant.',
      rating: 5,
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Export France',
      industry: 'Commerce International',
      content: 'Les services de trade finance nous ont permis de développer notre activité à l\'international en toute sécurité.',
      rating: 5,
      logo: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Industrie Moderne',
      industry: 'Manufacturier',
      content: 'Le cash management a transformé notre gestion financière. Une visibilité et un contrôle sans précédent.',
      rating: 5,
      logo: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Retail Premium',
      industry: 'Commerce de détail',
      content: 'La plateforme digitale nous a fait gagner un temps précieux dans nos opérations bancaires quotidiennes.',
      rating: 5,
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const benefits = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Sécurité Maximale',
      description: 'Protection avancée de vos transactions et données sensibles'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Gain de Temps',
      description: 'Automatisation des processus et gestion en ligne 24/7'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Croissance Accompagnée',
      description: 'Solutions qui évoluent avec votre entreprise'
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: 'Support Expert',
      description: 'Conseillers dédiés pour vous accompagner dans vos projets'
    }
  ];

  const businessTypes = [
    'Startup',
    'PME',
    'Grande Entreprise',
    'Profession Libéral',
    'Association',
    'Auto-entrepreneur',
    'Société Civile',
    'Autre'
  ];

  const employeeRanges = [
    '1-10',
    '11-50',
    '51-200',
    '201-500',
    '500+'
  ];

  const revenueRanges = [
    'Moins de 100K€',
    '100K€ - 500K€',
    '500K€ - 1M€',
    '1M€ - 5M€',
    '5M€ - 10M€',
    'Plus de 10M€'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Créer la demande business banking dans la base de données
      const businessData = {
        ...formData,
        submittedAt: new Date().toISOString(),
        userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'SSR',
        selectedService: selectedService
      };

      await submitFormEmail({
        formName: 'Business Banking',
        payload: flattenForEmail(businessData),
        replyTo: formData.email
      });

      const businessResponse = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'business-banking', ...businessData })
      });

      if (!businessResponse.ok) {
        const errorData = await businessResponse.json();
        throw new Error(errorData.message || 'Failed to create business banking application');
      }

      const { application: newApplication } = await businessResponse.json();

      setSuccess(true);
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        businessType: '',
        employees: '',
        revenue: '',
        service: '',
        message: ''
      });
      
      // Afficher le succès
      alert(`Your business banking request was submitted. Reference: ${newApplication.id}`);
      
    } catch (err) {
      console.error('Erreur lors de la soumission:', err);
      alert(err.message || 'Unable to submit. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar Orange */}
      <div className="bg-orange-600 text-white py-3">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center text-sm">
            {/* Left - Address */}
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Kardinal-Faulhaber-Straße 12, 80333 Munich</span>
            </div>

            {/* Center - Contact */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+49 89 12345678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contact@continentalbk.de</span>
              </div>
            </div>

            {/* Right - Language */}
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-orange-200 transition-colors">
                <Flag className="w-4 h-4" />
                <span>{currentLanguage}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              <div className="absolute top-full right-0 mt-1 w-32 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                {(languages || []).map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setCurrentLanguage(lang.name)}
                    className="flex items-center space-x-2 w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Shield className="w-7 h-7 text-blue-900" />
              </div>
              <div className="text-white">
                <div className="text-xl font-bold uppercase tracking-wide">{t('business_banking_europa')}</div>
                <div className="text-xl font-bold uppercase tracking-wide">{t('business_banking_kredit')}</div>
                <div className="text-xl font-bold uppercase tracking-wide">{t('business_banking_bank')}</div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-orange-400 transition-colors font-medium">{t('business_banking_accueil')}</Link>
              <Link href="/about" className="text-white hover:text-orange-400 transition-colors font-medium">{t('business_banking_propos')}</Link>
              <Link href="/business-banking" className="text-orange-400 font-medium">{t('business_banking_banque_entreprise')}</Link>
              <Link href="/personal-banking" className="text-white hover:text-orange-400 transition-colors font-medium">{t('business_banking_banque_personnelle')}</Link>
              <Link href="/loans" className="text-white hover:text-orange-400 transition-colors font-medium">{t('business_banking_prets')}</Link>
              <Link href="/login" className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{t('business_banking_connexion')}</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">{t('business_banking_banque')}<span className="text-blue-900">{t('business_banking_entreprise')}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Des solutions bancaires sur mesure pour accompagner la croissance de votre entreprise. 
              De la startup à la grande entreprise, nous avons la solution qu'il vous faut.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowContactForm(true)}
                className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors inline-flex items-center justify-center font-bold text-lg"
              >{t('business_banking_demander_une_consultation')}<ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <Link href="/request" className="bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors inline-flex items-center justify-center font-bold text-lg">{t('business_banking_acces_entreprise')}<Building className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pourquoi nous choisir?</h2>
            <p className="text-xl text-gray-600">{t('business_banking_des_avantages_concrets_pour')}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(benefits || []).map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-900">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('business_banking_nos_services')}</h2>
            <p className="text-xl text-gray-600">{t('business_banking_des_solutions_completes_pour')}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(services || []).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg border-2 overflow-hidden hover:shadow-xl transition-all cursor-pointer ${
                  selectedService?.id === service.id ? 'border-blue-900' : 'border-gray-200'
                }`}
                onClick={() => setSelectedService(service)}
              >
                <div className="p-6">
                  <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">{t('business_banking_caracteristiques_principales')}</h4>
                    <ul className="space-y-2">
                      {(service?.features?.slice(0, 3) || []).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {(service?.benefits || []).map((benefit, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-900 px-3 py-1 rounded-full text-sm font-medium">
                        {benefit}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setFormData(prev => ({ ...prev, service: service.title }));
                      setShowContactForm(true);
                    }}
                    className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold flex items-center justify-center"
                  >{t('business_banking_savoir_plus')}<ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('business_banking_ils_nous_font_confiance')}</h2>
            <p className="text-xl text-gray-600">{t('business_banking_decouvrez_les_temoignages_nos')}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(testimonials || []).map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.logo} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.industry}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Prêt à développer votre entreprise?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contactez nos experts pour une consultation personnalisée et découvrez comment nous pouvons 
              accompagner votre croissance.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowContactForm(true)}
                className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors inline-flex items-center justify-center font-bold text-lg"
              >{t('business_banking_demander_une_consultation')}<ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <Link href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center font-bold text-lg">{t('business_banking_contacter_conseiller')}<Phone className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{t('business_banking_demande_consultation')}</h3>
                <button
                  onClick={() => setShowContactForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {success ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{t('business_banking_demande_envoyee')}</h4>
                  <p className="text-gray-600 mb-6">
                    Nous avons bien reçu votre demande. Notre équipe vous contactera dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => {
                      setShowContactForm(false);
                      setSuccess(false);
                    }}
                    className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold"
                  >{t('business_banking_fermer')}</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t('business_banking_nom_entreprise')}</label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                        placeholder="Tech Innovation SAS"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t('business_banking_nom_contact')}</label>
                      <input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t('business_banking_email')}</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                        placeholder="jean.dupont@entreprise.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t('business_banking_telephone')}</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                        placeholder="+49 89 12345678"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t('business_banking_type_entreprise')}</label>
                      <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                      >
                        <option value="">Sélectionnez...</option>
                        {(businessTypes || []).map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t('business_banking_nombre_employes')}</label>
                      <select
                        name="employees"
                        value={formData.employees}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                      >
                        <option value="">Sélectionnez...</option>
                        {(employeeRanges || []).map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t('business_banking_chiffre_affaires')}</label>
                      <select
                        name="revenue"
                        value={formData.revenue}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                      >
                        <option value="">Sélectionnez...</option>
                        {(revenueRanges || []).map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t('business_banking_service_interesse')}</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                    >
                      <option value="">Sélectionnez un service...</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.title}>{service.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t('business_banking_message')}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors resize-none"
                      placeholder="Décrivez vos besoins et objectifs..."
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setShowContactForm(false)}
                      className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
                    >{t('business_banking_annuler')}</button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Envoi en cours...
                        </div>
                      ) : (
                        'Envoyer la demande'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-bold text-xl mb-6">{t('business_banking_propos')}</h3>
              <p className="text-gray-400 text-sm">
                EUROPA-KREDIT-BANK est votre partenaire bancaire de confiance pour tous vos projets financiers.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-xl mb-4">{t('business_banking_services')}</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/business-banking" className="text-gray-400 hover:text-white">{t('business_banking_banque_entreprise')}</Link></li>
                <li><Link href="/personal-banking" className="text-gray-400 hover:text-white">{t('business_banking_banque_personnelle')}</Link></li>
                <li><Link href="/mobile-banking" className="text-gray-400 hover:text-white">{t('business_banking_mobilite_bancaire')}</Link></li>
                <li><Link href="/loans" className="text-gray-400 hover:text-white">{t('business_banking_prets_credits')}</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-xl mb-4">{t('business_banking_support')}</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contact" className="text-gray-400 hover:text-white">{t('business_banking_contact')}</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-white">{t('business_banking_faq')}</Link></li>
                <li><Link href="/help" className="text-gray-400 hover:text-white">{t('business_banking_aide')}</Link></li>
                <li><Link href="/security" className="text-gray-400 hover:text-white">{t('business_banking_securite')}</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-xl mb-4">{t('business_banking_suivez_nous')}</h3>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 EUROPA-KREDIT-BANK. Tous Droits Réservés.</p>
            <div className="flex justify-center space-x-6 mt-4">
              <Link href="/terms" className="hover:text-white">{t('business_banking_termes_conditions')}</Link>
              <Link href="/privacy" className="hover:text-white">{t('business_banking_politique_confidentialite')}</Link>
              <Link href="/disclaimer" className="hover:text-white">{t('business_banking_avertissements')}</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
