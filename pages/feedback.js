import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Star, 
  ThumbsUp, 
  ThumbsDown,
  ArrowRight,
  Users,
  FileText,
  Lightbulb,
  Target
} from 'lucide-react';
import Link from 'next/link';
import { submitFormEmail, flattenForEmail } from '../utils/formSubmit';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function FeedbackPage() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'general',
    rating: 5,
    subject: '',
    message: '',
    improvements: '',
    recommendations: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');

  const feedbackTypes = [
    { value: 'general', label: 'Général', icon: <MessageSquare className="w-4 h-4" /> },
    { value: 'website', label: 'Site Web', icon: <FileText className="w-4 h-4" /> },
    { value: 'service', label: 'Service Client', icon: <Users className="w-4 h-4" /> },
    { value: 'product', label: 'Produits/Services', icon: <Target className="w-4 h-4" /> },
    { value: 'suggestion', label: 'Suggestion', icon: <Lightbulb className="w-4 h-4" /> }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const feedbackData = {
        ...formData,
        submittedAt: new Date().toISOString(),
        userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'SSR',
        status: 'pending'
      };

      await submitFormEmail({
        formName: 'Feedback',
        payload: flattenForEmail(feedbackData),
        replyTo: formData.email
      });

      const feedbackResponse = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'feedback', ...feedbackData })
      });

      if (!feedbackResponse.ok) {
        const errorData = await feedbackResponse.json();
        throw new Error(errorData.message || 'Failed to submit feedback');
      }

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        type: 'general',
        rating: 5,
        subject: '',
        message: '',
        improvements: '',
        recommendations: ''
      });
      
    } catch (err) {
      alert(err.message || 'Unable to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingChange = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating: rating
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <div className="relative h-[300px] overflow-hidden mb-16">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb46f83f274c?w=1920&h=300&fit=crop&auto=format&q=80"
              alt="Feedback Continental Bank Europe"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 via-purple-900/80 to-purple-900/60"></div>
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
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white/90 text-sm font-medium">{t('feedback_feedback')}</div>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">{t('feedback_votre_avis')}<span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200">{t('feedback_compte')}</span>
                </h1>
                
                <p className="text-xl text-white/80 max-w-3xl mb-8 leading-relaxed">{t('feedback_aidez_nous_ameliorer_nos')}</p>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Formulaire de feedback */}
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
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{t('feedback_merci_pour_votre_feedback')}</h3>
                  <p className="text-gray-600 mb-6">
                    Votre avis a été enregistré et nous aidera à améliorer nos services.
                  </p>
                  <Link 
                    href="/"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                  >{t('feedback_retour_accueil')}<ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-light text-gray-900 mb-4">{t('feedback_partagez_votre')}<span className="font-semibold text-purple-900">{t('feedback_experience')}</span>
                    </h2>
                    <p className="text-gray-600">{t('feedback_votre_feedback_est_essentiel')}</p>
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
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t('feedback_nom')}</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="Votre nom"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t('feedback_email')}</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="votre@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t('feedback_type_feedback')}</label>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                        {(feedbackTypes || []).map((type) => (
                          <label
                            key={type.value}
                            className={`flex items-center justify-center p-3 border rounded-lg cursor-pointer transition-colors ${
                              formData.type === type.value
                                ? 'border-purple-500 bg-purple-50 text-purple-700'
                                : 'border-gray-300 hover:border-gray-400'
                            }`}
                          >
                            <input
                              type="radio"
                              name="type"
                              value={type.value}
                              checked={formData.type === type.value}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <div className="flex items-center space-x-2">
                              {type.icon}
                              <span className="text-sm">{type.label}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t('feedback_note_globale')}</label>
                      <div className="flex items-center space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => handleRatingChange(star)}
                            className="p-1"
                          >
                            <Star
                              className={`w-8 h-8 ${
                                star <= formData.rating
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          </button>
                        ))}
                        <span className="ml-2 text-gray-600">
                          {formData.rating}/5
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t('feedback_sujet')}</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Sujet de votre feedback"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t('feedback_message_detaille')}</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Décrivez votre expérience en détail..."
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t('feedback_suggestions_amelioration')}</label>
                      <textarea
                        name="improvements"
                        value={formData.improvements}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Que pourrions-nous améliorer ?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t('feedback_recommandations')}</label>
                      <textarea
                        name="recommendations"
                        value={formData.recommendations}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Recommanderiez-vous nos services ? Pourquoi ?"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-purple-600 text-white py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Traitement en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-3" />{t('feedback_envoyer_feedback')}</>
                      )}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
