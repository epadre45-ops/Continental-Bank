import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Building, 
  TrendingUp, 
  Award, 
  Users, 
  Target, 
  Clock, 
  Menu, 
  X,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Globe2,
  BarChart3,
  Calculator,
  User,
  FileText,
  ArrowRight,
  Gavel,
  LucideIcon,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  ChevronRight,
  Pause,
  Play,
  Lock,
  Certificate,
  Search,
  Download,
  CheckCircle,
  Heart,
  ShieldCheck,
  Newspaper,
  Scale,
  Leaf,
  FolderOpen,
  HelpCircle,
  Briefcase,
  Fingerprint,
  Eye,
  Database,
  FileCheck,
  ChevronDown,
  Star,
  Home,
  ArrowUpRight,
  Car,
  Globe,
  DollarSign
} from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '../lib/i18n';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomePage() {
  const { t } = useTranslation();
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isSliderAutoPlay, setIsSliderAutoPlay] = useState(true);
  const [activeTab, setActiveTab] = useState('tab1');
  const [activeCalculatorTab, setActiveCalculatorTab] = useState('roi');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shuffledTestimonials, setShuffledTestimonials] = useState([]);

  // Données des onglets de calculateurs financiers - Style identique à "What are you looking for?"
  const calculatorTabs = {
    roi: {
      title: t('common.roi_calculator'),
      items: [
        {
          title: t('common.calculate_return'),
          icon: 'TrendingUp',
          link: '/calculators/roi'
        },
        {
          title: t('common.investment_analysis'),
          icon: 'BarChart3',
          link: '/calculators/roi'
        }
      ]
    },
    loan: {
      title: t('common.loan_calculator'),
      items: [
        {
          title: t('common.monthly_payment'),
          icon: 'Calculator',
          link: '/calculators/loan'
        },
        {
          title: t('common.interest_rate'),
          icon: 'Target',
          link: '/calculators/loan'
        }
      ]
    },
    investment: {
      title: t('common.investment_planner'),
      items: [
        {
          title: t('common.retirement_planning'),
          icon: 'DollarSign',
          link: '/calculators/investment'
        },
        {
          title: t('common.portfolio_management'),
          icon: 'BarChart3',
          link: '/calculators/investment'
        }
      ]
    },
    currency: {
      title: t('common.currency_converter'),
      items: [
        {
          title: t('common.exchange_rates'),
          icon: 'Globe',
          link: '/calculators/currency'
        },
        {
          title: t('common.live_conversion'),
          icon: 'TrendingUp',
          link: '/calculators/currency'
        }
      ]
    }
  };

  // Données du Hero Slider KfW-Style
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1920&h=1080&fit=crop&auto=format&q=90&bright=5",
      title: t('common.cop30_conference'),
      subtitle: t('common.cbe_belem'),
      alt: "Bright modern bank office with natural lighting"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop&auto=format&q=90&bright=5",
      title: t('common.after_q3_2025'),
      subtitle: t('common.new_commitments'),
      alt: "Professional banking team in bright modern office"
    }
  ];

  const testimonials = [
    {
      name: 'Marie Dubois',
      position: t('testimonials.md_position'),
      company: t('testimonials.md_company'),
      testimonial: t('testimonials.md_text'),
      rating: 5,
      avatar: 'MD'
    },
    {
      name: 'Jean-Pierre Martin',
      position: t('testimonials.jpm_position'),
      company: t('testimonials.jpm_company'),
      testimonial: t('testimonials.jpm_text'),
      rating: 5,
      avatar: 'JM'
    },
    {
      name: 'Sophie Laurent',
      position: t('testimonials.sl_position'),
      company: t('testimonials.sl_company'),
      testimonial: t('testimonials.sl_text'),
      rating: 5,
      avatar: 'SL'
    },
    {
      name: 'Pierre Bernard',
      position: t('testimonials.pb_position'),
      company: t('testimonials.pb_company'),
      testimonial: t('testimonials.pb_text'),
      rating: 4,
      avatar: 'PB'
    },
    {
      name: 'Claire Moreau',
      position: t('testimonials.cm_position'),
      company: t('testimonials.cm_company'),
      testimonial: t('testimonials.cm_text'),
      rating: 5,
      avatar: 'CM'
    },
    {
      name: 'Thomas Dubois',
      position: t('testimonials.td_position'),
      company: t('testimonials.td_company'),
      testimonial: t('testimonials.td_text'),
      rating: 4,
      avatar: 'TD'
    },
    {
      name: 'Isabelle Mercier',
      position: t('testimonials.im_position'),
      company: t('testimonials.im_company'),
      testimonial: t('testimonials.im_text'),
      rating: 5,
      avatar: 'IM'
    },
    {
      name: 'François Lemaire',
      position: t('testimonials.fl_position'),
      company: t('testimonials.fl_company'),
      testimonial: t('testimonials.fl_text'),
      rating: 4,
      avatar: 'FL'
    }
  ];

  // Mélanger aléatoirement les témoignages au chargement
  useEffect(() => {
    const shuffled = [...testimonials].sort(() => Math.random() - 0.5);
    setShuffledTestimonials(shuffled);
  }, []);

  // Auto-play du carousel
  useEffect(() => {
    if (!isAutoPlay || shuffledTestimonials.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % shuffledTestimonials.length);
    }, 5000); // Changement toutes les 5 secondes

    return () => clearInterval(interval);
  }, [isAutoPlay, shuffledTestimonials.length]);

  // Auto-play du Hero Slider
  useEffect(() => {
    if (!isSliderAutoPlay || slides.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // Changement toutes les 5 secondes

    return () => clearInterval(interval);
  }, [isSliderAutoPlay, slides.length]);

  // Données pour les cartes de produits

  // Données pour "Que souhaitez-vous financer ?" - 3 onglets exacts
  
  const tabData = {
    tab1: {
      title: t('pages.home.personal_financing'),
      items: [
        { title: t('pages.home.new_construction'), icon: "Building", link: "/new-construction" },
        { title: t('pages.home.existing_homes'), icon: "Home", link: "/pret-immobilier" },
        { title: t('pages.home.education'), icon: "GraduationCap", link: "/pret-education" },
        { title: t('pages.home.business_creation'), icon: "Briefcase", link: "/creation-entreprise" }
      ]
    },
    tab2: {
      title: t('pages.home.professional_financing'),
      items: [
        { title: t('pages.home.creation'), icon: "Briefcase", link: "/creation-entreprise" },
        { title: t('pages.home.energy'), icon: "Zap", link: "/financement-energie" },
        { title: t('pages.home.innovation'), icon: "Lightbulb", link: "/innovation" }
      ]
    },
    tab3: {
      title: t('pages.home.institutional_financing'),
      items: [
        { title: t('pages.home.municipal_services'), icon: "Building", link: "/services-municipaux" },
        { title: t('pages.home.international'), icon: "Globe", link: "/international" }
      ]
    }
  };

  // Offres de crédit - Configuration selon spécifications détaillées
  const creditOffers = [
    {
      title: t('pages.home.personal_financing'),
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=250&fit=crop&auto=format",
      description: t('pages.home.personal_loan_desc'),
      hasButtons: false
    },
    {
      title: t('pages.home.travel_loan'),
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop&auto=format",
      description: t('pages.home.travel_loan_desc'),
      hasButtons: false
    },
    {
      title: t('pages.home.car_loan'),
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=250&fit=crop&auto=format&q=90&bright=5",
      description: t('pages.home.car_loan_desc'),
      hasButtons: false
    },
    {
      title: t('pages.home.renovation_loan'),
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop&auto=format",
      description: t('pages.home.renovation_loan_desc'),
      hasButtons: true // Prêt Travaux avec boutons flottants
    },
    {
      title: t('pages.home.personal_loan'),
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=250&fit=crop&auto=format",
      description: t('pages.home.personal_loan_desc_alt'),
      hasButtons: false,
      wide: true // Don personnel - prend 2 colonnes
    }
  ];

  // Mélanger aléatoirement les témoignages au chargement

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % shuffledTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + shuffledTestimonials.length) % shuffledTestimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonialIndex(index);
  };

  // Fonctions de navigation pour le Hero Slider
  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlideIndex(index);
  };

  const currentTestimonial = shuffledTestimonials[currentTestimonialIndex];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 transition-colors ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-gray-300'
        }`} 
      />
    ));
  };

  const services = [
    {
      icon: <Building className="w-8 h-8" />,
      title: t('services.corporate_banking'),
      description: t('services.corporate_description'),
      href: "/entreprises"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: t('services.wealth_management'),
      description: t('services.wealth_description'),
      href: "/gestion-patrimoine"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: t('services.financial_markets'),
      description: t('services.markets_description'),
      href: "/marches-financiers"
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: t('services.international'),
      description: t('services.international_description'),
      href: "/international"
    }
  ];

  const stats = [
    { value: "€61.4B", label: t('common.assets_under_management') },
    { value: "28", label: t('common.countries') },
    { value: "150+", label: t('common.years_expertise') },
    { value: "98%", label: t('common.satisfaction') }
  ];

  const expertise = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: t('expertise.quant_analysis'),
      description: t('expertise.quant_description')
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: t('expertise.bespoke_strategy'),
      description: t('expertise.bespoke_description')
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: t('expertise.op_excellence'),
      description: t('expertise.op_description')
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* 🛡️ Security & Trust Badges Section */}

      {/* Hero Slider - Ultra Premium with Mobile Optimization */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] overflow-hidden">
        <AnimatePresence mode="wait">
          {(slides || []).map((slide, index) => (
            index === currentSlideIndex && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0"
              >
                {/* Premium Background with Multiple Layers */}
                <div className="absolute inset-0">
                  {/* Main Background Image */}
                  <img 
                    src={slide.image}
                    srcSet={`${slide.image}?w=640&h=480&fit=crop&auto=format&q=95 640w,
                            ${slide.image}?w=768&h=576&fit=crop&auto=format&q=95 768w,
                            ${slide.image}?w=1024&h=768&fit=crop&auto=format&q=95 1024w,
                            ${slide.image}?w=1920&h=1080&fit=crop&auto=format&q=95 1920w`}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Premium Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F3C]/95 via-[#0E2E5C]/85 to-[#153E75]/90"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F3C]/98 via-transparent to-[#0A1F3C]/60"></div>
                  
                  {/* Decorative Light Effects */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-[#C7CCD6]/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E8D8C3]/10 rounded-full blur-3xl"></div>
                </div>

                {/* Premium Decorative Lines */}
                <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C7CCD6]/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C7CCD6]/30 to-transparent"></div>

                {/* Content Container - Mobile Optimized */}
                <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24">
                  <div className="w-full max-w-7xl mx-auto text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="space-y-6 sm:space-y-8"
                    >
                      {/* Premium Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="inline-flex items-center space-x-2 bg-white/15 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full mb-6 sm:mb-8 backdrop-blur-xl border border-white/20 shadow-2xl"
                      >
                        <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#E8D8C3]" />
                        <span className="text-xs sm:text-sm font-medium text-white tracking-wide">PREMIUM BANKING</span>
                      </motion.div>
                      
                      {/* Premium Title with Gradient Text */}
                      <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="font-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {slide.title}
                      </motion.h1>
                      
                      {/* Premium Divider with Glow Effect */}
                      <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "100px" }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="h-1 mx-auto mb-6 sm:mb-8 bg-gradient-to-r from-transparent via-[#E8D8C3] to-transparent rounded-full shadow-lg"
                      ></motion.div>
                      
                      {/* Premium Description */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light"
                      >
                        {slide.subtitle}
                      </motion.p>
                      
                      {/* Premium Stats Row - Mobile Optimized */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-12 mt-8 sm:mt-10"
                      >
                        <div className="text-center">
                          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E8D8C3] mb-1">2M+</div>
                          <div className="text-[10px] sm:text-xs text-white/70 uppercase tracking-widest">{t('common.active_clients')}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E8D8C3] mb-1">€61.4B</div>
                          <div className="text-[10px] sm:text-xs text-white/70 uppercase tracking-widest">{t('common.assets_under_management')}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E8D8C3] mb-1">150+</div>
                          <div className="text-[10px] sm:text-xs text-white/70 uppercase tracking-widest">{t('common.years_expertise')}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E8D8C3] mb-1">98%</div>
                          <div className="text-[10px] sm:text-xs text-white/70 uppercase tracking-widest">{t('common.satisfaction')}</div>
                        </div>
                      </motion.div>

                      {/* Premium Action Buttons - Mobile Stacked */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-12 px-4"
                      >
                        <Link 
                          href="/pret-personnel"
                          className="group relative w-full sm:w-auto px-6 sm:px-8 lg:px-12 py-4 sm:py-5 bg-gradient-to-r from-[#0E2E5C] to-[#153E75] text-white rounded-full font-medium text-sm sm:text-base lg:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3"
                        >
                          <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                          <span>{t('pages.home.apply_loan')}</span>
                          <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-transform" />
                        </Link>
                        <Link 
                          href="/contact"
                          className="group relative w-full sm:w-auto px-6 sm:px-8 lg:px-12 py-4 sm:py-5 bg-white/15 backdrop-blur-xl border-2 border-white/30 text-white rounded-full font-medium text-sm sm:text-base lg:text-lg hover:bg-white/25 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3"
                        >
                          <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
                          <span>{t('common.contact_us')}</span>
                          <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-transform" />
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Slider Controls - Mobile Optimized */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-3 sm:space-x-4 z-20 px-4">
          <button
            onClick={prevSlide}
            className="p-2 sm:p-3 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors backdrop-blur-sm"
            aria-label="Slide précédent"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Indicators */}
          <div className="flex items-center space-x-2">
            {(slides || []).map((_, index) => (
              <button
                key={`slide-${index}`}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlideIndex 
                    ? 'bg-white w-6 sm:w-8' 
                    : 'bg-white/50 hover:bg-white/70 w-2'
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 sm:p-3 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors backdrop-blur-sm"
            aria-label="Slide suivant"
          >
            <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Auto-play Control - Mobile Optimized */}
        <div className="absolute top-4 sm:top-8 right-4 sm:right-8 z-20">
          <button
            onClick={() => setIsSliderAutoPlay(!isSliderAutoPlay)}
            className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-white text-xs sm:text-sm transition-colors backdrop-blur-sm"
          >
            {isSliderAutoPlay ? (
              <>
                <Pause className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Lecture</span>
              </>
            )}
          </button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-24 sm:bottom-16 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[#E8D8C3] rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </section>

        {/* Section Welcome Bank - Design standard comme les autres sections */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#f8fafc] to-white">
          <div className="cherche-section max-w-6xl mx-auto px-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h2 className="text-4xl font-bold text-[#00466E] mb-5">{t('common.welcome_to_bank')}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t('common.trusted_partner')}
              </p>
            </motion.div>
          </div>
        </section>

      {/* Section Hero Ultra Premium - Design Sophistiqué */}
      <section className="relative overflow-hidden bg-white min-h-[90vh] flex items-center">

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Colonne Gauche - Contenu Sophistiqué */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="order-2 lg:order-1 space-y-6 sm:space-y-8"
            >
              {/* Badge Premium */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0E2E5C]/10 to-[#153E75]/10 border border-[#0E2E5C]/20 px-5 py-2.5 rounded-full"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-[#0E2E5C] to-[#153E75] rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-semibold text-[#0E2E5C] tracking-widest uppercase">Premium Banking</span>
              </motion.div>
              
              {/* Titre Principal - Design Ultra Premium */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-light text-[#0E2E5C] leading-[1.1] sm:leading-[1.15] lg:leading-[1.1]"
              >
                {t('pages.home.hero_title')}
              </motion.h1>
              
              {/* Ligne Décorative Élégante */}
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "80px" }}
                transition={{ duration: 1, delay: 0.4 }}
                className="h-0.5 bg-gradient-to-r from-[#0E2E5C] via-[#153E75] to-transparent"
              />
              
              {/* Sous-titre Premium */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-lg font-light"
              >
                {t('pages.home.hero_subtitle')}
              </motion.p>
              
              {/* Boutons d'Action - Design Sophistiqué */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5 pt-2"
              >
                <Link href="/loan-application" className="flex-1 sm:flex-none">
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-8 sm:px-12 lg:px-16 py-4 sm:py-5 bg-gradient-to-r from-[#0E2E5C] via-[#153E75] to-[#0E2E5C] bg-[length:200%_100%] bg-left text-white font-semibold rounded-xl hover:bg-right transition-all duration-700 shadow-2xl shadow-[#0E2E5C]/30"
                  >
                    {t('pages.home.apply_now')}
                  </motion.button>
                </Link>
                
                <Link href="/contact" className="flex-1 sm:flex-none">
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-8 sm:px-12 lg:px-16 py-4 sm:py-5 bg-white border-2 border-[#0E2E5C] text-[#0E2E5C] font-semibold rounded-xl hover:bg-[#0E2E5C] hover:text-white transition-all duration-300 shadow-lg"
                  >
                    {t('pages.home.learn_more')}
                  </motion.button>
                </Link>
              </motion.div>

              {/* Indicateurs de Confiance - Design Premium */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6 pt-4 border-t border-slate-200/50"
              >
                <div className="flex items-center space-x-2.5">
                  <Shield className="w-5 h-5 text-[#0E2E5C]" />
                  <span className="text-xs sm:text-sm text-slate-600 tracking-wide font-medium">{t('pages.home.absolute_security')}</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Phone className="w-5 h-5 text-[#0E2E5C]" />
                  <span className="text-xs sm:text-sm text-slate-600 tracking-wide font-medium">{t('pages.home.support_24_7')}</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <TrendingUp className="w-5 h-5 text-[#0E2E5C]" />
                  <span className="text-xs sm:text-sm text-slate-600 tracking-wide font-medium">{t('pages.home.innovation_first')}</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Colonne Droite - Carte Bancaire avec Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative order-1 lg:order-2"
            >
              {/* Container avec Background */}
              <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
                {/* Background Gradient Sophistiqué */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0E2E5C]/8 via-[#153E75]/5 to-[#0E2E5C]/8 rounded-3xl"></div>
                
                {/* Carte Bancaire avec Animation */}
                <motion.div
                  initial={{ opacity: 0, y: 40, rotateX: 15, rotateY: -10 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
                  transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                  className="relative w-full max-w-lg mx-auto px-6 sm:px-8"
                  style={{ perspective: 1500 }}
                >
                  {/* Image Container */}
                  <div className="relative w-full h-64 sm:h-72 lg:h-80 bg-gradient-to-br from-[#0E2E5C] to-[#153E75] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center">
                    <div className="text-center text-white">
                      <Award className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-xl font-semibold">Premium Banking</p>
                      <p className="text-sm opacity-80 mt-2">Services exclusifs</p>
                    </div>
                  </div>
                  
                  {/* Stats Card - Design Premium */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute -bottom-12 sm:-bottom-16 left-4 sm:left-6 right-4 sm:right-6"
                  >
                    <div className="bg-white/98 backdrop-blur-xl border border-slate-200/50 p-5 sm:p-6 rounded-2xl shadow-2xl shadow-[#0E2E5C]/10">
                      <div className="grid grid-cols-3 gap-4 sm:gap-6">
                        <div className="text-center">
                          <p className="text-xl sm:text-2xl font-semibold text-[#0E2E5C]">1875</p>
                          <p className="text-[10px] sm:text-xs text-slate-600 tracking-wide mt-1">{t('pages.home.since_year')}</p>
                        </div>
                        <div className="text-center border-l border-slate-200/50 pl-4 sm:pl-6">
                          <p className="text-xl sm:text-2xl font-semibold text-[#0E2E5C]">150</p>
                          <p className="text-[10px] sm:text-xs text-slate-600 tracking-wide mt-1">{t('pages.home.countries_label')}</p>
                        </div>
                        <div className="text-center border-l border-slate-200/50 pl-4 sm:pl-6">
                          <p className="text-xl sm:text-2xl font-semibold text-[#0E2E5C]">98%</p>
                          <p className="text-[10px] sm:text-xs text-slate-600 tracking-wide mt-1">{t('pages.home.satisfaction_label')}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator Subtil */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-16 bg-slate-300"
          >
            <div className="w-1 h-4 bg-slate-500 rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Section "Que cherchez-vous ?" - Spécifications exactes */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="cherche-section max-w-6xl mx-auto px-5">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold text-[#00466E] mb-5">{t('common.what_are_you_looking_for')}</h2>
          </motion.div>

          
          {/* Contenu des onglets - Style exact */}
          <AnimatePresence mode="wait">
            {Object.keys(tabData || {}).map((tabKey) => (
              activeTab === tabKey && (
                <motion.div
                  key={tabKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="tab-content active grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
                  style={{
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))'
                  }}
                >
                  {(tabData[tabKey]?.items || []).map((item, index) => {
                    // Mapper les noms d'icônes aux composants Lucide React
                    const getIconComponent = (iconName) => {
                      const icons = {
                        'Building': Building,
                        'Briefcase': Briefcase,
                        'TrendingUp': TrendingUp,
                        'BarChart3': BarChart3,
                        'Globe': Globe,
                        'Home': Home,
                        'Award': Award,
                        'Leaf': Leaf,
                        'Target': Target
                      };
                      return icons[iconName] || Building; // Icône par défaut
                    };
                    
                    const IconComponent = getIconComponent(item.icon);
                    
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="item text-center p-3 cursor-pointer hover:bg-gray-50 transition-colors duration-300"
                      >
                        <Link href={item.link} className="block">
                          <div className="icon-placeholder w-16 h-16 bg-[#EEEEEE] rounded-full mx-auto mb-3 flex items-center justify-center overflow-hidden">
                            <IconComponent className="w-8 h-8 text-[#00466E]" />
                          </div>
                          <p className="item-title text-[#2D3134] text-base font-normal inline-block m-0 relative group-hover:text-[#005A8C] transition-colors">
                            {item.title}
                            <span className="text-[#005A8C] ml-1">›</span>
                          </p>
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Premium Credit Offers Section - 100% Responsive */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="text-xs font-medium text-blue-600 mb-2 uppercase tracking-wider">{t('pages.home.borrow_money')}</div>
            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-4">
              {t('common.credit_offers')}
            </h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              {t('pages.home.credit_offers_description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {(creditOffers || []).map((offer, index) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 group ${offer.wide ? 'lg:col-span-2' : ''}`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback vers une image de secours si l'image ne charge pas
                      if (offer.title.includes('Car') || offer.title.includes('voiture')) {
                        e.target.src = "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=250&fit=crop&auto=format&q=90&bright=5";
                      } else {
                        e.target.src = "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=250&fit=crop&auto=format&q=90&bright=5";
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mb-3 leading-tight">
                    {offer.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {offer.description}
                  </p>
                  
                  {/* CTA Premium vers loan-application */}
                  <Link
                    href="/loan-application"
                    className="inline-flex items-center w-full bg-gradient-to-r from-blue-600 to-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-slate-800 transition-all duration-300 transform hover:scale-105 shadow-lg text-center justify-center"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    {t('common.learn_more')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧮 Financial Calculators Section - Same tabbed design as "What are you looking for?" */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#f8fafc] to-white">
        <div className="cherche-section max-w-6xl mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold text-[#00466E] mb-5">{t('common.financial_calculators')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('common.plan_financial_future')}
            </p>
          </motion.div>

          {/* Trois calculatrices financières - Design original */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="tab-content active grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))'
            }}
          >
            {/* Calculatrice ROI */}
            <motion.div
              key="roi"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="item text-center p-3 cursor-pointer hover:bg-gray-50 transition-colors duration-300"
            >
              <Link href="/calculators/roi" className="block">
                <div className="icon-placeholder w-16 h-16 bg-[#EEEEEE] rounded-full mx-auto mb-3 flex items-center justify-center overflow-hidden">
                  <BarChart3 className="w-8 h-8 text-[#00466E]" />
                </div>
                <p className="item-title text-[#2D3134] text-base font-normal inline-block m-0 relative group-hover:text-[#005A8C] transition-colors">
                  {t('common.investment_analysis')}
                  <span className="text-[#005A8C] ml-1">»</span>
                </p>
              </Link>
            </motion.div>

            {/* Calculatrice Investment */}
            <motion.div
              key="investment"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="item text-center p-3 cursor-pointer hover:bg-gray-50 transition-colors duration-300"
            >
              <Link href="/calculators/investment" className="block">
                <div className="icon-placeholder w-16 h-16 bg-[#EEEEEE] rounded-full mx-auto mb-3 flex items-center justify-center overflow-hidden">
                  <DollarSign className="w-8 h-8 text-[#00466E]" />
                </div>
                <p className="item-title text-[#2D3134] text-base font-normal inline-block m-0 relative group-hover:text-[#005A8C] transition-colors">
                  {t('common.investment_planner')}
                  <span className="text-[#005A8C] ml-1">»</span>
                </p>
              </Link>
            </motion.div>

            {/* Calculatrice Loan */}
            <motion.div
              key="loan"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="item text-center p-3 cursor-pointer hover:bg-gray-50 transition-colors duration-300"
            >
              <Link href="/calculators/loan" className="block">
                <div className="icon-placeholder w-16 h-16 bg-[#EEEEEE] rounded-full mx-auto mb-3 flex items-center justify-center overflow-hidden">
                  <Calculator className="w-8 h-8 text-[#00466E]" />
                </div>
                <p className="item-title text-[#2D3134] text-base font-normal inline-block m-0 relative group-hover:text-[#005A8C] transition-colors">
                  {t('common.loan_calculator')}
                  <span className="text-[#005A8C] ml-1">»</span>
                </p>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section "Ce qui est important pour nous" - Design Ultra Premium Sobriété */}
      <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Background Subtile Premium */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.03) 0%, transparent 50%),
                             radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.02) 0%, transparent 50%)`,
            backgroundSize: '100% 100%'
          }}></div>
        </div>

        {/* Lignes Structurelles Subtiles */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent"></div>
          <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
          <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-20"
          >
            {/* Badge Subtil */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center space-x-3 border border-slate-200 px-6 py-3 rounded-full mb-8"
            >
              <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
              <span className="text-sm font-medium text-slate-600 tracking-wide">{t('common.important_to_us')}</span>
            </motion.div>

            {/* Titre Principal Élégant */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-2xl sm:text-4xl lg:text-5xl font-light text-slate-900 leading-tight tracking-tight mb-8"
            >
              {t('common.success_continues').split(' ')[0]}
              <br />
              <span className="font-medium text-blue-900">{t('common.success_continues').split(' ').slice(2).join(' ')}</span>
            </motion.h2>
            
            {/* Sous-titre Premium */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-light mb-12"
            >
              {t('common.cbe_european_institutions')}
            </motion.p>

                        
            {/* Ligne Décorative Subtile - Optimisée */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "3rem" }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="h-px bg-gradient-to-r from-slate-300 to-slate-400 mx-auto"
            />
          </motion.div>
          
          {/* Contenu Principal */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
              
              {/* Colonne Gauche - Contenu Texte */}
              <div className="bg-white/60 backdrop-blur-sm border border-slate-200 p-12 lg:p-16 order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="space-y-8 h-full flex flex-col justify-center"
                >
                  <h3 className="text-2xl lg:text-3xl font-light text-slate-900 leading-tight mb-6">
                    {t('common.success_continues').split(' ')[0]} va en
                    <span className="font-medium text-blue-900">{t('common.success_continues').split(' ').slice(2).join(' ')}</span>
                  </h3>
                  
                  <p className="text-base lg:text-lg text-slate-600 leading-relaxed mb-8 font-light">
                    {t('common.cbe_european_institutions')}
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-10 py-4 bg-slate-900 text-white font-medium rounded-none hover:bg-slate-800 transition-all duration-300 tracking-wide self-start"
                  >
                    {t('common.more')}
                  </motion.button>
                </motion.div>
              </div>
              
              {/* Colonne Droite - Image */}
              <div className="relative order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.7 }}
                  className="relative overflow-hidden"
                >
                  {/* Image Premium */}
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format"
                    alt="{t('common.headquarters_cbe')} - {t('common.cbe_headquarters').split(' - ')[1]}"
                    className="w-full h-96 lg:h-[500px] object-cover"
                  />
                  
                  {/* Overlay Subtil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 via-transparent to-transparent"></div>
                  
                  {/* Cadre Élégant */}
                  <div className="absolute inset-0 border-4 border-white/20 pointer-events-none"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Texte Légal Subtil */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="max-w-4xl mx-auto mt-16 text-center"
          >
            <div className="bg-white/40 backdrop-blur-sm border border-slate-200 p-8 lg:p-10">
              <p className="text-sm text-slate-600 leading-relaxed font-light tracking-wide">
                {t('pages.home.exclusive_investment')} {t('pages.home.guaranteed_returns_desc')} {t('pages.home.provided_by')} <span className="font-semibold text-slate-800">Continental Bank</span> — {t('pages.home.trusted_since')} 1875. {t('pages.home.regulated_by')}. {t('pages.home.secure_investments')}.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Section "Ce qui est important pour nous" - Design Ultra Premium Sobriété */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0A1F3C] via-[#1A2942] to-[#0A1F3C] relative overflow-hidden">
        {/* Pattern de fond premium */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-center"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-16 max-w-5xl mx-auto border border-white/20 shadow-2xl">
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <Shield className="w-8 h-8 text-white" />
                  <div className="absolute -inset-1 bg-white/10 rounded-full blur-sm"></div>
                </div>
                <h2 className="text-3xl lg:text-4xl font-light text-white ml-4">{t('common.ready_to_structure')}</h2>
              </div>
              
              <p className="text-lg lg:text-xl font-light text-white/80 leading-relaxed mb-12 max-w-3xl mx-auto">
                {t('common.join_leading_institutions')}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link 
                  href="/pret-personnel"
                  className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl font-medium"
                >
                  <Target className="w-5 h-5" />
                  <span>{t('pages.home.apply_loan_btn')}</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
                <Link 
                  href="/contact" 
                  className="group inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 font-medium"
                >
                  <span>{t('pages.home.initiate_relation')}</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
                <Link 
                  href="/institution" 
                  className="group inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 font-medium"
                >
                  <span>{t('pages.home.discover_institution')}</span>
                  <Star className="w-5 h-5 fill-current transition-transform duration-300 group-hover:scale-110" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Styles personnalisés pour la section Offres de crédit
const styles = `
.offres-credit {
  background-color: #f7f7f7;
  padding: 20px 24px;
  box-sizing: border-box;
  font-family: sans-serif;
}

.grille-offres {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 16px;
  justify-content: center;
}

.bloc-credit {
  background-color: #ffffff;
  position: relative;
  padding: 0;
  border-radius: 4px;
  overflow: hidden;
}

.bloc-credit img {
  width: 100%;
  height: 210px;
  display: block;
  object-fit: cover;
}

.bloc-credit h3 {
  font-size: 32px;
  font-weight: 600;
  color: #272726;
  margin: 6px 12px 10px;
  line-height: 1.2;
}

.bloc-credit p {
  font-size: 16px;
  color: #272726;
  line-height: 1.4;
  margin: 0 12px 15px;
}

.lien-plus {
  font-size: 14px;
  color: #526a9a;
  text-decoration: none;
  margin: 0 12px 12px;
  display: inline-flex;
  align-items: center;
}

/* Boutons flottants (Prêt Travaux) - Responsive */
.btn-whatsapp {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: #3DBE7E;
  color: white;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  text-decoration: none;
  display: inline-block;
  z-index: 10;
}

.btn-ouvrir {
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
  background: #3C6F89;
  color: white;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  text-decoration: none;
  display: inline-block;
  z-index: 10;
}

.btn-demander {
  position: absolute;
  top: 65%;
  right: 0.5rem;
  background: #AC6845;
  color: white;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  text-decoration: none;
  display: inline-block;
  z-index: 10;
}

@media (max-width: 768px) {
  .btn-whatsapp,
  .btn-ouvrir,
  .btn-demander {
    position: relative;
    top: auto;
    right: auto;
    transform: none;
    display: block;
    width: 100%;
    margin: 0.5rem 0;
    text-align: center;
  }
}

.ico-info {
  position: absolute;
  bottom: 10px; right: 10px;
  background: #f7f7f7;
  color: #5DBB4B;
  width: 24px; height: 24px;
  border-radius: 50%;
  text-align: center;
  line-height: 24px;
  font-weight: bold;
}

/* Bloc Don personnel (50% largeur sur desktop) */
.bloc-don {
  grid-column: 1 / span 2;
}

/* Responsive */
@media (max-width: 900px) {
  .grille-offres {
    grid-template-columns: repeat(2, 1fr);
  }
  .bloc-don {
    grid-column: 1 / -1;
  }
}

@media (max-width: 480px) {
  .grille-offres {
    grid-template-columns: 1fr;
  }
  .btn-whatsapp,
  .btn-ouvrir,
  .btn-demander {
    position: relative;
    top: auto; right: auto;
    transform: none;
    display: block;
    width: calc(100% - 24px);
    margin: 8px auto;
  }
  .bloc-don {
    grid-column: 1 / -1;
  }
}
`;

// Note: The styles above are defined but not currently applied to the DOM
// To apply these styles properly, move them to:
// 1. A CSS module (index.module.css)
// 2. A global CSS file (styles/globals.css)
// 3. Or use styled-jsx inside the component
// Direct DOM manipulation causes React crashes and removeChild errors
