import { motion } from 'framer-motion';
import { ArrowRight, Shield, Star, Users, Headphones, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  const stats = [
    { number: "250K+", label: "Clients satisfaits", icon: <Users className="w-6 h-6" /> },
    { number: "15M€", label: "Prêts accordés", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "98%", label: "Satisfaction client", icon: <Star className="w-6 h-6" /> },
    { number: "24/7", label: "Support disponible", icon: <Headphones className="w-6 h-6" /> }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-bg-light via-orange-50 to-bg-light opacity-90"></div>
        <img 
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop" 
          alt="Banking background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 text-center relative z-10"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-primary-gradient">Votre Banque</span><br />
          <span className="text-text-dark">Ultra Premium</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-text-gray mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Pour vous, on réinvente la banque. Découvrez une expérience bancaire confortable, 
          sécurisée et sophistiquée au quotidien.
        </motion.p>

        <motion.div 
          className="flex flex-col md:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/register" className="btn-premium inline-flex items-center justify-center text-lg px-8 py-4">
            Ouvrir un compte
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link href="/loans" className="glass px-8 py-4 rounded-lg hover:bg-white hover:bg-opacity-20 transition-all inline-flex items-center justify-center text-lg">
            Demander un crédit
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {(stats || []).map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-center justify-center mb-2 text-primary-orange">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-text-dark">{stat.number}</div>
              <div className="text-sm text-text-gray">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{ float: 6 }}
        className="absolute top-20 left-10 w-20 h-20 bg-primary-orange rounded-full opacity-20 blur-xl"
      />
      <motion.div
        animate={{ float: 8 }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-secondary-orange rounded-full opacity-20 blur-xl"
      />
    </section>
  );
};

export default HeroSection;
