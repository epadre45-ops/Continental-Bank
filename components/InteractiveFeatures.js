import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, TrendingUp, CreditCard, Smartphone, Globe, Award, Headphones, Zap, Lock, Star, Users, CheckCircle, Play, Pause, Volume2, VolumeX, Maximize, Minimize, RefreshCw, Download, Share2, Heart, MessageCircle, Bookmark, TrendingUpIcon, BarChart3, PieChart, Activity, DollarSign, Target, Rocket, Brain, Eye, Fingerprint, Bell, Wifi, Battery, Signal } from 'lucide-react';
import Link from 'next/link';

const InteractiveFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [liveData, setLiveData] = useState({
    transactions: 1247,
    usersOnline: 8923,
    satisfaction: 98.7,
    processingTime: 0.12
  });

  const features = [
    {
      id: 'ai-assistant',
      title: 'Assistant IA Ultra-Intelligent',
      description: 'Notre IA vous conseille en temps réel pour optimiser vos finances',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-accent-purple to-accent-blue',
      stats: { accuracy: '99.8%', responseTime: '0.2s', languages: 25, users: '1.2M' },
      demo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      capabilities: ['Analyse prédictive', 'Conseils personnalisés', 'Détection fraude', 'Optimisation fiscale']
    },
    {
      id: 'quantum-security',
      title: 'Sécurité Quantique',
      description: 'Protection de niveau militaire avec chiffrement quantique',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-accent-green to-accent-blue',
      stats: { encryption: '256-bit', uptime: '99.99%', breaches: 0, certifications: 12 },
      demo: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      capabilities: ['Chiffrement quantique', 'Authentification biométrique', 'Détection IA', 'Sauvegarde automatique']
    },
    {
      id: 'instant-payments',
      title: 'Paiements Instantanés Mondiaux',
      description: 'Transférez de l\'argent partout dans le monde en temps réel',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-primary-orange to-secondary-orange',
      stats: { countries: 150, currencies: 45, speed: '0.1s', fees: '0.1%' },
      demo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      capabilities: ['Virements instantanés', 'Multi-devises', 'Blockchain', 'Smart contracts']
    },
    {
      id: 'neural-dashboard',
      title: 'Tableau de Bord Neural',
      description: 'Interface neuronale adaptative qui apprend de vos habitudes',
      icon: <Activity className="w-8 h-8" />,
      color: 'from-accent-coral to-accent-yellow',
      stats: { accuracy: '97.3%', predictions: '10K/jour', automation: '85%', savings: '23%' },
      demo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      capabilities: ['Prédictions IA', 'Automatisation', 'Alertes intelligentes', 'Rapports auto']
    }
  ];

  const liveMetrics = [
    { label: 'Transactions/sec', value: liveData.transactions, icon: <TrendingUpIcon className="w-4 h-4" />, color: 'text-accent-green' },
    { label: 'Utilisateurs en ligne', value: liveData.usersOnline, icon: <Users className="w-4 h-4" />, color: 'text-accent-blue' },
    { label: 'Satisfaction', value: `${liveData.satisfaction}%`, icon: <Star className="w-4 h-4" />, color: 'text-accent-coral' },
    { label: 'Temps de réponse', value: `${liveData.processingTime}s`, icon: <Zap className="w-4 h-4" />, color: 'text-primary-orange' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => ({
        transactions: prev.transactions + Math.floor(Math.random() * 10 - 3),
        usersOnline: prev.usersOnline + Math.floor(Math.random() * 20 - 5),
        satisfaction: Math.min(100, Math.max(95, prev.satisfaction + (Math.random() - 0.5) * 0.1)),
        processingTime: Math.max(0.08, Math.min(0.2, prev.processingTime + (Math.random() - 0.5) * 0.01))
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentFeature = features[activeFeature];

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-orange-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Fonctionnalités <span className="text-primary-gradient">Revolutionnaires</span>
          </h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Découvrez les technologies de pointe qui redéfinissent l'expérience bancaire
          </p>
        </motion.div>

        {/* Live Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 mb-12"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-text-dark">Live System Status</span>
            </div>
            <div className="flex items-center space-x-4 text-xs text-text-gray">
              <Signal className="w-4 h-4" />
              <Battery className="w-4 h-4" />
              <Wifi className="w-4 h-4" />
              <span>Uptime: 99.99%</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {(liveMetrics || []).map((metric) => (
              <div key={metric.label} className="text-center">
                <div className={`flex items-center justify-center mb-2 ${metric.color}`}>
                  {metric.icon}
                </div>
                <div className="text-2xl font-bold text-text-dark">{metric.value}</div>
                <div className="text-xs text-text-gray">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Feature Selector */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {(features || []).map((feature, index) => (
            <motion.button
              key={feature.id}
              onClick={() => setActiveFeature(index)}
              className={`p-4 rounded-2xl transition-all duration-300 ${
                activeFeature === index 
                  ? 'bg-gradient-to-r ' + feature.color + ' text-white shadow-lg scale-105' 
                  : 'glass hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  activeFeature === index ? 'bg-white/20' : 'bg-gradient-to-r ' + feature.color + ' text-white'
                }`}>
                  {feature.icon}
                </div>
                <span className={`font-medium text-sm ${activeFeature === index ? 'text-white' : 'text-text-dark'}`}>
                  {feature.title}
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Main Feature Display */}
        <motion.div
          key={activeFeature}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Demo Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={currentFeature.demo} 
                alt={currentFeature.title}
                className="w-full h-96 object-cover"
              />
              
              {/* Video Controls Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                <div className="p-6 w-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white" />}
                      </button>
                      <button
                        onClick={() => setVolume(!volume)}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        {volume ? <Volume2 className="w-5 h-5 text-white" /> : <VolumeX className="w-5 h-5 text-white" />}
                      </button>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                        <Download className="w-5 h-5 text-white" />
                      </button>
                      <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                        <Share2 className="w-5 h-5 text-white" />
                      </button>
                      <button
                        onClick={() => setIsFullscreen(!isFullscreen)}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        {isFullscreen ? <Minimize className="w-5 h-5 text-white" /> : <Maximize className="w-5 h-5 text-white" />}
                      </button>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-primary-orange to-secondary-orange h-2 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: isPlaying ? '65%' : '0%' }}
                      transition={{ duration: 2 }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Interactive Hotspots */}
              <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center animate-pulse cursor-pointer">
                <Eye className="w-4 h-4 text-white" />
              </div>
              <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-accent-blue rounded-full flex items-center justify-center animate-pulse cursor-pointer">
                <Target className="w-4 h-4 text-white" />
              </div>
            </div>
            
            {/* Engagement Bar */}
            <div className="flex items-center justify-center space-x-6 mt-6">
              <button
                onClick={() => setLiked(!liked)}
                className={`flex items-center space-x-2 transition-colors ${
                  liked ? 'text-red-500' : 'text-text-gray hover:text-red-500'
                }`}
              >
                <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                <span className="text-sm">2.3K</span>
              </button>
              <button className="flex items-center space-x-2 text-text-gray hover:text-accent-blue transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm">342</span>
              </button>
              <button
                onClick={() => setBookmarked(!bookmarked)}
                className={`transition-colors ${
                  bookmarked ? 'text-accent-coral' : 'text-text-gray hover:text-accent-coral'
                }`}
              >
                <Bookmark className={`w-5 h-5 ${bookmarked ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>

          {/* Feature Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-text-dark mb-4">{currentFeature.title}</h3>
              <p className="text-lg text-text-gray mb-6">{currentFeature.description}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {(Object.entries(currentFeature?.stats || {}) || []).map(([key, value]) => (
                <div key={key} className="glass p-4 rounded-xl">
                  <div className="text-2xl font-bold text-primary-gradient">{value}</div>
                  <div className="text-sm text-text-gray capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                </div>
              ))}
            </div>

            {/* Capabilities */}
            <div>
              <h4 className="font-semibold text-text-dark mb-4">Capacités principales</h4>
              <div className="space-y-3">
                {(currentFeature?.capabilities || []).map((capability) => (
                  <div key={capability} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0" />
                    <span className="text-text-gray">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-premium flex items-center justify-center">
                <Rocket className="w-5 h-5 mr-2" />
                Essayer maintenant
              </button>
              <button className="glass px-6 py-3 rounded-lg hover:bg-white hover:bg-opacity-20 transition-all flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Voir la démo
              </button>
            </div>
          </div>
        </motion.div>

        {/* Additional Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mt-20"
        >
          <div className="glass p-6 rounded-2xl text-center group hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-gradient-to-r from-accent-green to-accent-blue rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:rotate-12 transition-transform">
              <Fingerprint className="w-8 h-8" />
            </div>
            <h4 className="font-semibold text-text-dark mb-2">Authentification Biométrique</h4>
            <p className="text-sm text-text-gray">Reconnaissance faciale, empreinte digitale et voix</p>
          </div>

          <div className="glass p-6 rounded-2xl text-center group hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-gradient-to-r from-accent-coral to-accent-yellow rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:rotate-12 transition-transform">
              <Bell className="w-8 h-8" />
            </div>
            <h4 className="font-semibold text-text-dark mb-2">Alertes Intelligentes</h4>
            <p className="text-sm text-text-gray">Notifications prédictives basées sur l'IA</p>
          </div>

          <div className="glass p-6 rounded-2xl text-center group hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-orange to-secondary-orange rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:rotate-12 transition-transform">
              <BarChart3 className="w-8 h-8" />
            </div>
            <h4 className="font-semibold text-text-dark mb-2">Analytics Avancés</h4>
            <p className="text-sm text-text-gray">Visualisations de données en temps réel</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveFeatures;
