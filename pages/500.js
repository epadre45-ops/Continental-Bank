import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, RefreshCw, AlertTriangle, Mail, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Custom500() {
  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetry = () => {
    setIsRetrying(true);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const errorTypes = [
    {
      title: 'Erreur de serveur',
      description: 'Nos serveurs rencontrent temporairement des difficultés techniques.',
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      title: 'Maintenance en cours',
      description: 'Nous effectuons actuellement une maintenance pour améliorer nos services.',
      icon: <RefreshCw className="w-6 h-6" />
    },
    {
      title: 'Surcharge temporaire',
      description: 'Le site connaît actuellement une forte activité. Veuillez réessayer plus tard.',
      icon: <MessageCircle className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* 500 Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-8"
            >
              <div className="w-32 h-32 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <AlertTriangle className="w-16 h-16 text-red-600" />
              </div>
            </motion.div>

            {/* Error Message */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-6xl font-bold text-gray-900 mb-4"
            >
              500
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-semibold text-gray-800 mb-4"
            >
              Erreur serveur interne
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 mb-12 max-w-2xl mx-auto"
            >
              Une erreur inattendue s'est produite sur nos serveurs. 
              Notre équipe technique a été notifiée et travaille à résoudre le problème.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <button
                onClick={handleRetry}
                disabled={isRetrying}
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <RefreshCw className={`w-5 h-5 mr-2 ${isRetrying ? 'animate-spin' : ''}`} />
                {isRetrying ? 'Tentative en cours...' : 'Réessayer'}
              </button>
              
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                <Home className="w-5 h-5 mr-2" />
                Page d'accueil
              </Link>
            </motion.div>

            {/* Error Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-left mb-16"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">Ce qui peut avoir causé cette erreur</h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {(errorTypes || []).map((error) => (
                  <div key={error.title} className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-900">
                      {error.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{error.title}</h4>
                    <p className="text-sm text-gray-600">{error.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-red-50 rounded-lg p-8 max-w-2xl mx-auto"
            >
              <h3 className="text-lg font-semibold text-red-900 mb-4">Le problème persiste ?</h3>
              <p className="text-red-800 mb-6">
                Si l'erreur continue après plusieurs tentatives, notre équipe de support est là pour vous aider.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-4">
                <Link
                  href="/contact"
                  className="flex flex-col items-center p-4 bg-white rounded-lg hover:bg-red-100 transition-colors group"
                >
                  <Mail className="w-8 h-8 text-red-600 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-gray-900">Email</span>
                  <span className="text-xs text-gray-600">contact@continentalbk.de</span>
                </Link>
                
                <a
                  href="tel:+33780933872"
                  className="flex flex-col items-center p-4 bg-white rounded-lg hover:bg-red-100 transition-colors group"
                >
                  <Phone className="w-8 h-8 text-red-600 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-gray-900">Téléphone</span>
                  <span className="text-xs text-gray-600">+49 89 12345678</span>
                </a>
                
                <a
                  href="https://api.whatsapp.com/send?phone=+498912345678&text=Hallo, ich habe einen 500-Fehler auf Ihrer Website festgestellt."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-4 bg-white rounded-lg hover:bg-red-100 transition-colors group"
                >
                  <MessageCircle className="w-8 h-8 text-red-600 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-gray-900">WhatsApp</span>
                  <span className="text-xs text-gray-600">Chat instantané</span>
                </a>
              </div>
            </motion.div>

            {/* Status Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-16 text-center"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600">
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Vérification du statut du service en cours...
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Erreur ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
