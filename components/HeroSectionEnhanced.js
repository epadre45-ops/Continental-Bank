import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Star, Users, Headphones, TrendingUp, Play, Zap, Globe, Award, CheckCircle, ArrowDown, Sparkles, Brain, Rocket, Target } from 'lucide-react';
import Link from 'next/link';

const HeroSectionEnhanced = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    clients: 0,
    loans: 0,
    satisfaction: 0,
    support: 0
  });

  const stats = [
    { number: 250000, label: 'Clients satisfaits', icon: <Users className="w-6 h-6" />, suffix: '+' },
    { number: 15000000, label: 'Prêts accordés', icon: <TrendingUp className="w-6 h-6" />, suffix: '€' },
    { number: 98, label: 'Satisfaction client', icon: <Star className="w-6 h-6" />, suffix: '%' },
    { number: 24, label: 'Support disponible', icon: <Headphones className="w-6 h-6" />, suffix: '/7' }
  ];

  const features = [
    { icon: <Brain className="w-6 h-6" />, title: 'IA Intégrée', description: 'Conseillers virtuels intelligents' },
    { icon: <Rocket className="w-6 h-6" />, title: 'Transactions Instantanées', description: 'Virements en temps réel' },
    { icon: <Shield className="w-6 h-6" />, title: 'Sécurité Quantique', description: 'Protection de nouvelle génération' },
    { icon: <Globe className="w-6 h-6" />, title: 'Banque Mondiale', description: 'Opérations dans 150+ pays' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateNumbers = () => {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedNumbers({
          clients: Math.floor(250000 * progress),
          loans: Math.floor(15000000 * progress),
          satisfaction: Math.floor(98 * progress),
          support: Math.floor(24 * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    };

    animateNumbers();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-bg-light via-orange-50/30 to-bg-light opacity-90"></div>
        
        {/* Animated Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop" 
            alt="Banking background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-light via-transparent to-transparent"></div>
        </div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary-orange to-secondary-orange rounded-full opacity-20 blur-2xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full opacity-20 blur-2xl"
        />
        <motion.div
          animate={{ 
            x: [0, 30, 0],
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-accent-green to-accent-coral rounded-full opacity-20 blur-2xl"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-orange-200"
        >
          <Sparkles className="w-5 h-5 text-primary-orange" />
          <span className="text-sm font-medium text-text-dark">Nouvelle Génération Bancaire 2026</span>
          <Award className="w-5 h-5 text-accent-coral" />
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-primary-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary-orange via-secondary-orange to-accent-coral animate-pulse-slow">
              Votre Banque
            </span>
            <br />
            <span className="text-text-dark relative">
              Ultra Premium
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-orange to-secondary-orange rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-text-gray mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Pour vous, on réinvente la banque. Découvrez une expérience bancaire 
            <span className="text-primary-orange font-semibold"> confortable</span>, 
            <span className="text-accent-blue font-semibold"> sécurisée</span> et 
            <span className="text-accent-purple font-semibold"> sophistiquée</span> au quotidien.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col md:flex-row gap-6 justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/register" className="group relative btn-premium text-lg px-8 py-4 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center">
              Ouvrir un compte
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent-coral to-accent-yellow"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.3 }}
            />
          </Link>
          
          <Link href="/loans" className="group glass px-8 py-4 rounded-lg hover:bg-white hover:bg-opacity-30 transition-all inline-flex items-center justify-center text-lg border border-white/20">
            <span className="flex items-center">
              Demander un crédit
              <Calculator className="ml-2 w-5 h-5" />
            </span>
          </Link>

          <button className="group glass px-8 py-4 rounded-lg hover:bg-white hover:bg-opacity-30 transition-all inline-flex items-center justify-center text-lg border border-white/20">
            <Play className="w-5 h-5 mr-2" />
            Voir la démo
          </button>
        </motion.div>

        {/* Dynamic Stats Display */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {(stats || []).map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className={`text-center p-6 rounded-2xl glass transition-all duration-300 ${
                currentStat === index ? 'ring-2 ring-primary-orange bg-white/20' : ''
              }`}
            >
              <motion.div 
                className="flex items-center justify-center mb-4 text-primary-orange"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {stat.icon}
              </motion.div>
              <div className="text-3xl md:text-4xl font-bold text-text-dark mb-2">
                {index === 0 && animatedNumbers.clients.toLocaleString('fr-FR')}
                {index === 1 && animatedNumbers.loans.toLocaleString('fr-FR')}
                {index === 2 && animatedNumbers.satisfaction}
                {index === 3 && animatedNumbers.support}
                {stat.suffix}
              </div>
              <div className="text-sm text-text-gray font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
        >
          {(features || []).map((feature, index) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -5, scale: 1.05 }}
              className="glass p-6 rounded-2xl text-center group cursor-pointer"
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:rotate-12 transition-transform"
              >
                {feature.icon}
              </motion.div>
              <h3 className="font-semibold text-text-dark mb-2">{feature.title}</h3>
              <p className="text-sm text-text-gray">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap justify-center items-center gap-8 text-sm text-text-gray"
        >
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-accent-green" />
            <span>Sécurité certifiée</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-accent-blue" />
            <span>Régulé par l'ACPR</span>
          </div>
          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4 text-accent-purple" />
            <span>Présence mondiale</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="w-4 h-4 text-accent-coral" />
            <span>Award Winner 2026</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-primary-orange" />
      </motion.div>
    </section>
  );
};

export default HeroSectionEnhanced;
