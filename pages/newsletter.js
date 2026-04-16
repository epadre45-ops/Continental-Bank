import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Bell, 
  TrendingUp, 
  Shield, 
  Globe, 
  Star,
  ArrowRight,
  Users,
  Calendar,
  FileText,
  Check,
  Lock
} from 'lucide-react';
import Link from 'next/link';
import { submitFormEmail, flattenForEmail } from '../utils/formSubmit';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function NewsletterPage() {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [preferences, setPreferences] = useState({
    products: false,
    news: false,
    promotions: false,
    financialTips: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const subscriptionData = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        preferences: preferences,
        subscribedAt: new Date().toISOString(),
        userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'SSR'
      };

      await submitFormEmail({
        formName: 'Newsletter',
        payload: flattenForEmail(subscriptionData),
        replyTo: email
      });

      try {
        const newsletterResponse = await fetch('/api/applications', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'newsletter', ...subscriptionData })
        });

        if (!newsletterResponse.ok) {
          // API call failed but email was sent, continue
        }
      } catch (dbErr) {
        // API call failed but email was sent, continue
      }

      setSubmitSuccess(true);
      setEmail('');
      setFirstName('');
      setLastName('');
      setPreferences({
        products: false,
        news: false,
        promotions: false,
        financialTips: false
      });
      
    } catch (error) {
      setError(error.message || 'Unable to subscribe right now. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePreferenceChange = (preference) => {
    setPreferences(prev => ({
      ...prev,
      [preference]: !prev[preference]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <div className="relative h-[400px] overflow-hidden mb-16">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1611224923853-80b023f2d71b?w=1920&h=400&fit=crop&auto=format&q=80"
              alt="Newsletter Continental Bank Europe"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/80 to-blue-900/60"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                className="max-w-4xl"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white/90 text-sm font-medium">{t('newsletter_newsletter')}</div>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">{t('newsletter_restez')}<span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">{t('newsletter_informe')}</span>
                </h1>
                
                <p className="text-xl text-white/80 max-w-3xl mb-8 leading-relaxed">{t('newsletter_abonnez_vous_notre_newsletter')}</p>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            {/* Formulaire d'abonnement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              {submitSuccess ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{t('newsletter_abonnement_reussi')}</h3>
                  <p className="text-gray-600 mb-6">
                    Merci de vous être abonné à notre newsletter. 
                    Vous recevrez bientôt nos dernières actualités.
                  </p>
                  <Link 
                    href="/"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >{t('newsletter_retour_accueil')}<ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-light text-gray-900 mb-4">{t('newsletter_abonnez_vous_notre')}<span className="font-semibold text-blue-900">{t('newsletter_newsletter')}</span>
                    </h2>
                    <p className="text-gray-600">{t('newsletter_recevez_nos_dernieres_actualites')}</p>
                  </div>

                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-red-700">{error}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t('newsletter_prenom')}</label>
                        <input
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Jean"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t('newsletter_nom')}</label>
                        <input
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Dupont"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t('newsletter_email')}</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="jean.dupont@email.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">{t('newsletter_centres_interet')}</label>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={preferences.products}
                            onChange={() => handlePreferenceChange('products')}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <span className="ml-3 text-gray-700">{t('newsletter_nouveaux_produits_services')}</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={preferences.news}
                            onChange={() => handlePreferenceChange('news')}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <span className="ml-3 text-gray-700">{t('newsletter_actualites_bancaires')}</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={preferences.promotions}
                            onChange={() => handlePreferenceChange('promotions')}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <span className="ml-3 text-gray-700">{t('newsletter_offres_exclusives')}</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={preferences.financialTips}
                            onChange={() => handlePreferenceChange('financialTips')}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <span className="ml-3 text-gray-700">{t('newsletter_conseils_financiers')}</span>
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Traitement en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-3" />{t('newsletter_abonner')}</>
                      )}
                    </button>
                  </form>
                </>
              )}
            </motion.div>

            {/* Avantages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('newsletter_actualites')}</h3>
                <p className="text-gray-600 text-sm">{t('newsletter_dernieres_nouvelles_secteur_bancaire')}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('newsletter_securite')}</h3>
                <p className="text-gray-600 text-sm">{t('newsletter_conseils_pour_proteger_vos')}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('newsletter_offres')}</h3>
                <p className="text-gray-600 text-sm">{t('newsletter_promotions_exclusives_reservees_aux')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
