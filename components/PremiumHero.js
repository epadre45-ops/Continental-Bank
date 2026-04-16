import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const PremiumHero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/api/placeholder/1920/1080"
          alt="Deux femmes professionnelles dans un couloir moderne"
          className="w-full h-full object-cover"
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            {/* Main Title */}
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Votre banque en ligne<br/>
              confortable et sécurisé<br/>
              au quotidien
            </h1>

            {/* Description */}
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-lg">
              Pour que vos choix soient synonymes de liberté, nous réinventons l'esprit banque privée guidé par une conviction forte.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/register"
                className="inline-flex items-center px-8 py-4 bg-[#0C3B66] text-white rounded-lg hover:bg-[#0E3A5D] transition-colors font-bold text-lg shadow-lg"
              >
                OUVRIR UN COMPTE
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                href="/request"
                className="inline-flex items-center px-8 py-4 bg-[#F26A21] text-white rounded-lg hover:bg-[#E7661C] transition-colors font-bold text-lg shadow-lg"
              >
                DEMANDE DE CRÉDIT
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PremiumHero;
