import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useTranslation } from '../lib/i18n';
import { 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  CheckCircle, 
  AlertCircle, 
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
  Wallet, 
  Banknote, 
  ArrowTrendingUp, 
  ShieldCheck, 
  Clock, 
  User, 
  Settings, 
  Home, 
  Car, 
  Plane, 
  Heart, 
  GraduationCap, 
  Smartphone, 
  CreditCard as CreditCardIcon,
  Building,
  TrendingDown,
  Shield as ShieldIcon,
  Eye,
  EyeOff,
  Calendar,
  MapPin as MapPinIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  User as UserIcon,
  Lock as LockIcon,
  CheckCircle as CheckCircleIcon,
  AlertCircle as AlertCircleIcon,
  ArrowRight as ArrowRightIcon
} from 'lucide-react';
import Link from 'next/link';

export default function PersonalBankingPage() {
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState('Français');
  const [showCalculator, setShowCalculator] = useState(false);
  const [calculatorData, setCalculatorData] = useState({
    amount: 10000,
    duration: 12,
    rate: 3.5
  });
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const router = useRouter();
  const { t } = useTranslation();

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'español', flag: '🇪🇸' },
    { code: 'it', name: 'italiano', flag: '🇮🇹' },
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'pt', name: 'português', flag: '🇵🇹' }
  ];

  const accounts = [
    {
      id: 'current',
      title: t('personal_banking.current_account.title'),
      description: t('personal_banking.current_account.description'),
      icon: <Wallet className="w-8 h-8" />,
      features: [
        t('personal_banking.current_account.debit_card'),
        t('personal_banking.current_account.free_transfers'),
        t('personal_banking.current_account.mobile_app'),
        t('personal_banking.current_account.sms_alerts'),
        t('personal_banking.current_account.budget_management')
      ],
      benefits: [
        t('personal_banking.current_account.no_fees'),
        t('personal_banking.current_account.branches_everywhere'),
        t('personal_banking.current_account.support_24_7')
      ],
      color: 'bg-blue-100 text-blue-900',
      rate: null
    },
    {
      id: 'savings',
      title: t('personal_banking.savings_account.title'),
      description: t('personal_banking.savings_account.description'),
      icon: <PiggyBank className="w-8 h-8" />,
      features: [
        t('personal_banking.savings_account.attractive_rates'),
        t('personal_banking.savings_account.flexible_withdrawal'),
        t('personal_banking.savings_account.interest_calculation'),
        t('personal_banking.savings_account.savings_goals'),
        t('personal_banking.savings_account.guaranteed_capital')
      ],
      benefits: [
        t('personal_banking.savings_account.rates_up_to'),
        t('personal_banking.savings_account.no_fees'),
        t('personal_banking.savings_account.available_online')
      ],
      color: 'bg-green-100 text-green-900',
      rate: 3.5
    },
    {
      id: 'youth',
      title: t('personal_banking.youth_account.title'),
      description: t('personal_banking.youth_account.description'),
      icon: <Users className="w-8 h-8" />,
      features: [
        t('personal_banking.youth_account.free_debit_card'),
        t('personal_banking.youth_account.mobile_banking'),
        t('personal_banking.youth_account.parental_controls'),
        t('personal_banking.youth_account.financial_education'),
        t('personal_banking.youth_account.partner_offers')
      ],
      benefits: [
        t('personal_banking.youth_account.no_fees'),
        t('personal_banking.youth_account.cashback'),
        t('personal_banking.youth_account.student_benefits')
      ],
      color: 'bg-purple-100 text-purple-900',
      rate: null
    },
    {
      id: 'premium',
      title: 'Compte Premium',
      description: 'Services exclusifs et avantages premium pour une expérience bancaire supérieure',
      icon: <Award className="w-8 h-8" />,
      features: [
        'Conseiller personnel',
        'Assurances incluses',
        'Services conciergerie',
        'Taux préférentiels',
        'Accès salons privés'
      ],
      benefits: ['Service prioritaire', 'Avantages exclusifs', 'Assurance voyage'],
      color: 'bg-orange-100 text-orange-900',
      rate: null
    }
  ];

  const cards = [
    {
      id: 'classic',
      title: 'Carte Classique',
      description: 'Carte de débit standard pour tous vos achats quotidiens',
      icon: <CreditCardIcon className="w-8 h-8" />,
      features: [
        'Paiements contactless',
        'Retraits gratuits',
        'Alertes transactions',
        'Application mobile',
        'Blocage temporaire'
      ],
      benefits: ['Gratuite', 'Acceptée mondiale', 'Sécurité NFC'],
      color: 'bg-gray-100 text-gray-900',
      annualFee: 0
    },
    {
      id: 'gold',
      title: 'Carte Gold',
      description: 'Carte premium avec avantages et assurances voyage',
      icon: <CreditCardIcon className="w-8 h-8" />,
      features: [
        'Assurance voyage',
        'Cashback 1%',
        'Lounge access',
        'Conciergerie',
        'Protection achats'
      ],
      benefits: ['Assurances incluses', 'Cashback', 'Services premium'],
      color: 'bg-yellow-100 text-yellow-900',
      annualFee: 120
    },
    {
      id: 'platinum',
      title: 'Carte Platinum',
      description: 'Carte haut de gamme avec services exclusifs et avantages illimités',
      icon: <CreditCardIcon className="w-8 h-8" />,
      features: [
        'Cashback 2%',
        'Lounge illimité',
        'Conciergerie 24/7',
        'Assurance premium',
        'Programme fidélité'
      ],
      benefits: ['Cashback élevé', 'Services VIP', 'Avantages illimités'],
      color: 'bg-gray-800 text-white',
      annualFee: 300
    }
  ];

  const loans = [
    {
      id: 'personal',
      title: 'Prêt Personnel',
      description: 'Financez tous vos projets personnels à taux avantageux',
      icon: <Home className="w-8 h-8" />,
      amount: 'Jusqu\'à 50 000€',
      rate: 'À partir de 5.9%',
      duration: 'Jusqu\'à 7 ans',
      color: 'bg-blue-100 text-blue-900'
    },
    {
      id: 'auto',
      title: 'Prêt Auto',
      description: 'Achat de véhicule neuf ou d\'occasion',
      icon: <Car className="w-8 h-8" />,
      amount: 'Jusqu\'à 75 000€',
      rate: 'À partir de 4.9%',
      duration: 'Jusqu\'à 7 ans',
      color: 'bg-green-100 text-green-900'
    },
    {
      id: 'travel',
      title: 'Prêt Voyage',
      description: 'Réalisez vos rêves de voyage',
      icon: <Plane className="w-8 h-8" />,
      amount: 'Jusqu\'à 25 000€',
      rate: 'À partir de 6.2%',
      duration: 'Jusqu\'à 4 ans',
      color: 'bg-purple-100 text-purple-900'
    },
    {
      id: 'studies',
      title: 'Prêt Études',
      description: 'Investissez dans votre avenir et votre formation',
      icon: <GraduationCap className="w-8 h-8" />,
      amount: 'Jusqu\'à 45 000€',
      rate: 'À partir de 2.9%',
      duration: 'Jusqu\'à 10 ans',
      color: 'bg-indigo-100 text-indigo-900'
    }
  ];

  const insurance = [
    {
      id: 'home',
      title: 'Assurance Habitation',
      description: 'Protégez votre logement et vos biens',
      icon: <Home className="w-8 h-8" />,
      coverage: 'Incendie, vol, dégâts des eaux',
      price: 'À partir de 15€/mois',
      color: 'bg-red-100 text-red-900'
    },
    {
      id: 'car',
      title: 'Assurance Auto',
      description: 'Assurance complète pour votre véhicule',
      icon: <Car className="w-8 h-8" />,
      coverage: 'Tous risques, assistance 24/7',
      price: 'À partir de 35€/mois',
      color: 'bg-blue-100 text-blue-900'
    },
    {
      id: 'health',
      title: 'Assurance Santé',
      description: 'Couverture santé complète pour vous et votre famille',
      icon: <Heart className="w-8 h-8" />,
      coverage: 'Hôpital, médecins, dentaire, optique',
      price: 'À partir de 25€/mois',
      color: 'bg-green-100 text-green-900'
    },
    {
      id: 'life',
      title: 'Assurance Vie',
      description: 'Préparez l\'avenir de vos proches',
      icon: <ShieldIcon className="w-8 h-8" />,
      coverage: 'Capital décès, garantie vie',
      price: 'À partir de 20€/mois',
      color: 'bg-purple-100 text-purple-900'
    }
  ];

  const testimonials = [
    {
      name: 'Marie Laurent',
      account: 'Compte Premium',
      content: 'Le service client est exceptionnel et les avantages premium font vraiment la différence. Je recommande vivement!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Pierre Martin',
      account: 'Compte Courant + Prêt Auto',
      content: 'J\'ai obtenu mon prêt auto rapidement à un excellent taux. Le processus était simple et transparent.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Sophie Dubois',
      account: 'Compte Épargne',
      content: 'Le taux d\'intérêt du compte épargne est très compétitif. J\'apprécie également la flexibilité des retraits.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Jean Bernard',
      account: 'Compte Jeune',
      content: 'En tant qu\'étudiant, le compte jeune est parfait. Aucun frais et des avantages vraiment utiles.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
    }
  ];

  useEffect(() => {
    calculateMonthlyPayment();
  }, [calculatorData]);

  const calculateMonthlyPayment = () => {
    const principal = calculatorData.amount;
    const monthlyRate = calculatorData.rate / 100 / 12;
    const numberOfPayments = calculatorData.duration;
    
    const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    setMonthlyPayment(Math.round(payment * 100) / 100);
  };

  const handleCalculatorChange = (field, value) => {
    setCalculatorData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar Orange */}
      <div className="bg-orange-600 text-white py-3">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center text-sm">
            {/* Left - Address */}
            <div className="flex items-center space-x-2">
              <MapPinIcon className="w-4 h-4" />
              <span>Kardinal-Faulhaber-Straße 12, 80333 Munich</span>
            </div>

            {/* Center - Contact */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-4 h-4" />
                <span>+49 89 12345678</span>
              </div>
              <div className="flex items-center space-x-2">
                <MailIcon className="w-4 h-4" />
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
                <div className="text-xl font-bold uppercase tracking-wide">EUROPA</div>
                <div className="text-xl font-bold uppercase tracking-wide">KREDIT</div>
                <div className="text-xl font-bold uppercase tracking-wide">BANK</div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-orange-400 transition-colors font-medium">Accueil</Link>
              <Link href="/about" className="text-white hover:text-orange-400 transition-colors font-medium">À propos</Link>
              <Link href="/business-banking" className="text-white hover:text-orange-400 transition-colors font-medium">Banque d'entreprise</Link>
              <Link href="/personal-banking" className="text-orange-400 font-medium">Banque personnelle</Link>
              <Link href="/loans" className="text-white hover:text-orange-400 transition-colors font-medium">Prêts</Link>
              <Link href="/login" className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center space-x-2">
                <UserIcon className="w-4 h-4" />
                <span>CONNEXION</span>
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
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Banque <span className="text-blue-900">Personnelle</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Des solutions bancaires complètes pour gérer vos finances au quotidien. 
              Comptes, cartes, prêts et assurances adaptés à vos besoins.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/register" className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors inline-flex items-center justify-center font-bold text-lg">
                Ouvrir un compte
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <button
                onClick={() => setShowCalculator(true)}
                className="bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors inline-flex items-center justify-center font-bold text-lg"
              >
                Calculateur d'épargne
                <Calculator className="w-5 h-5 ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calculator Modal */}
      {showCalculator && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-md w-full p-8"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Calculateur d'Épargne</h3>
              <button
                onClick={() => setShowCalculator(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Montant initial (€)</label>
                <input
                  type="number"
                  value={calculatorData.amount}
                  onChange={(e) => handleCalculatorChange('amount', Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none"
                  placeholder="10000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Durée (mois)</label>
                <input
                  type="number"
                  value={calculatorData.duration}
                  onChange={(e) => handleCalculatorChange('duration', Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none"
                  placeholder="12"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Taux d'intérêt (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={calculatorData.rate}
                  onChange={(e) => handleCalculatorChange('rate', Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none"
                  placeholder="3.5"
                />
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Résultats</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Intérêts gagnés:</span>
                    <span className="font-semibold text-blue-900">
                      {((calculatorData.amount * calculatorData.rate / 100 * calculatorData.duration / 12).toFixed(2))}€
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Montant total:</span>
                    <span className="font-semibold text-blue-900">
                      {(calculatorData.amount + (calculatorData.amount * calculatorData.rate / 100 * calculatorData.duration / 12)).toFixed(2)}€
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowCalculator(false)}
                className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold"
              >
                Fermer
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Accounts Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Comptes</h2>
            <p className="text-xl text-gray-600">Choisissez le compte qui correspond à vos besoins</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(accounts || []).map((account, index) => (
              <motion.div
                key={account.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg border-2 overflow-hidden hover:shadow-xl transition-all cursor-pointer ${
                  selectedAccount?.id === account.id ? 'border-blue-900' : 'border-gray-200'
                }`}
                onClick={() => setSelectedAccount(account)}
              >
                <div className="p-6">
                  <div className={`w-16 h-16 ${account.color} rounded-full flex items-center justify-center mb-6`}>
                    {account.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{account.title}</h3>
                  <p className="text-gray-600 mb-6">{account.description}</p>
                  
                  {account.rate && (
                    <div className="bg-green-50 rounded-lg p-3 mb-6">
                      <div className="text-center">
                        <span className="text-sm text-gray-600">Taux d'intérêt</span>
                        <div className="text-2xl font-bold text-green-900">{account.rate}%</div>
                      </div>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Caractéristiques</h4>
                    <ul className="space-y-2">
                      {(account?.features?.slice(0, 3) || []).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {(account?.benefits || []).map((benefit, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-900 px-3 py-1 rounded-full text-sm font-medium">
                        {benefit}
                      </span>
                    ))}
                  </div>

                  <Link href="/register" className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold flex items-center justify-center">
                    Ouvrir ce compte
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Cartes</h2>
            <p className="text-xl text-gray-600">La carte parfaite pour votre style de vie</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {(cards || []).map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg border-2 overflow-hidden hover:shadow-xl transition-all ${
                  card.id === 'platinum' ? 'border-gray-800' : 'border-gray-200'
                }`}
              >
                <div className="p-6">
                  <div className={`w-16 h-16 ${card.color} rounded-full flex items-center justify-center mb-6`}>
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-600 mb-6">{card.description}</p>
                  
                  <div className="bg-gray-50 rounded-lg p-3 mb-6">
                    <div className="text-center">
                      <span className="text-sm text-gray-600">Frais annuels</span>
                      <div className="text-2xl font-bold text-gray-900">
                        {card.annualFee === 0 ? 'Gratuite' : `${card.annualFee}€`}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Avantages</h4>
                    <ul className="space-y-2">
                      {(card?.features?.slice(0, 3) || []).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/register" className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold flex items-center justify-center">
                    Demander cette carte
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Loans Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Prêts Personnels</h2>
            <p className="text-xl text-gray-600">Financez tous vos projets à taux avantageux</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(loans || []).map((loan, index) => (
              <motion.div
                key={loan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="p-6">
                  <div className={`w-16 h-16 ${loan.color} rounded-full flex items-center justify-center mb-6`}>
                    {loan.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{loan.title}</h3>
                  <p className="text-gray-600 mb-6">{loan.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Montant:</span>
                      <span className="font-semibold">{loan.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Taux:</span>
                      <span className="font-semibold text-green-600">{loan.rate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Durée:</span>
                      <span className="font-semibold">{loan.duration}</span>
                    </div>
                  </div>

                  <Link href="/request" className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold flex items-center justify-center">
                    Faire une demande
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Assurances</h2>
            <p className="text-xl text-gray-600">Protégez ce qui compte le plus pour vous</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(insurance || []).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="p-6">
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mb-6`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-sm text-gray-600 mb-2">Couverture:</div>
                    <div className="font-semibold text-gray-900">{item.coverage}</div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-3 mb-6">
                    <div className="text-center">
                      <span className="text-sm text-gray-600">À partir de</span>
                      <div className="text-xl font-bold text-blue-900">{item.price}</div>
                    </div>
                  </div>

                  <Link href="/contact" className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold flex items-center justify-center">
                    Demander un devis
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Témoignages Clients</h2>
            <p className="text-xl text-gray-600">Découvrez ce que nos clients pensent de nous</p>
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
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.account}</p>
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
            <h2 className="text-4xl font-bold text-white mb-6">Prêt à nous rejoindre?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Ouvrez votre compte aujourd'hui et profitez de tous les avantages de la banque digitale moderne.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/register" className="bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors inline-flex items-center justify-center font-bold text-lg">
                Ouvrir un compte
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center font-bold text-lg">
                Contacter un conseiller
                <PhoneIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-bold text-xl mb-6">À propos</h3>
              <p className="text-gray-400 text-sm">
                EUROPA-KREDIT-BANK est votre partenaire bancaire de confiance pour tous vos projets financiers.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-xl mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/business-banking" className="text-gray-400 hover:text-white">Banque d'entreprise</Link></li>
                <li><Link href="/personal-banking" className="text-gray-400 hover:text-white">Banque personnelle</Link></li>
                <li><Link href="/mobile-banking" className="text-gray-400 hover:text-white">Mobilité bancaire</Link></li>
                <li><Link href="/loans" className="text-gray-400 hover:text-white">Prêts et crédits</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-xl mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
                <li><Link href="/help" className="text-gray-400 hover:text-white">Aide</Link></li>
                <li><Link href="/security" className="text-gray-400 hover:text-white">Sécurité</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-xl mb-4">Suivez-nous</h3>
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
              <Link href="/terms" className="hover:text-white">Termes et Conditions</Link>
              <Link href="/privacy" className="hover:text-white">Politique de Confidentialité</Link>
              <Link href="/disclaimer" className="hover:text-white">Avertissements</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
