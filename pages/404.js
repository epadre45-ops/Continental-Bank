import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Search, ArrowLeft, RefreshCw, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Custom404() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  const suggestedPages = [
    { title: 'Accueil', href: '/', description: 'Retourner à la page d\'accueil' },
    { title: 'Banque d\'entreprise', href: '/business-banking', description: 'Services pour les entreprises' },
    { title: 'Banque personnelle', href: '/personal-banking', description: 'Services bancaires personnels' },
    { title: 'Prêts et crédits', href: '/loans', description: 'Nos offres de financement' },
    { title: 'Contact', href: '/contact', description: 'Nous contacter' },
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
            {/* 404 Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-8"
            >
              <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <AlertTriangle className="w-16 h-16 text-blue-900" />
              </div>
            </motion.div>

            {/* Error Message */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-6xl font-bold text-gray-900 mb-4"
            >
              404
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-semibold text-gray-800 mb-4"
            >
              Page non trouvée
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 mb-12 max-w-2xl mx-auto"
            >
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée. 
              Vous pouvez utiliser la recherche ci-dessous ou naviguer vers l'une de nos pages principales.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="max-w-2xl mx-auto mb-12"
            >
              <form onSubmit={handleSearch} className="flex gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Rechercher sur le site..."
                    className="w-full px-4 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium"
                >
                  Rechercher
                </button>
              </form>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium"
              >
                <Home className="w-5 h-5 mr-2" />
                Page d'accueil
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Page précédente
              </button>
              
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Actualiser
              </button>
            </motion.div>

            {/* Suggested Pages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-left"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">Pages populaires</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {(suggestedPages || []).map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="block p-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 hover:border-blue-300 transition-all group"
                  >
                    <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-900 transition-colors">
                      {page.title}
                    </h4>
                    <p className="text-sm text-gray-600">{page.description}</p>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Help Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-16 p-6 bg-blue-50 rounded-lg max-w-2xl mx-auto"
            >
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Besoin d'aide ?</h3>
              <p className="text-blue-800 mb-4">
                Si vous pensez qu'il s'agit d'une erreur de notre part, 
                n'hésitez pas à nous contacter pour que nous puissions vous aider.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm font-medium"
              >
                Contacter le support
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
