import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft, CheckCircle, AlertCircle, Lock, Shield } from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useTranslation } from '../lib/i18n';
export default function ForgotPasswordPage() {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [step, setStep] = useState(1);
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          setStep(2);
          setSuccess(false);
        }, 2000);
      } else {
        setError(data.message || 'Erreur lors de l\'envoi de l\'email');
      }
    } catch (err) {
      setError('Erreur de connexion. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerificationSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/verify-reset-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          code: verificationCode
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStep(3);
      } else {
        setError(data.message || 'Code de vérification invalide');
      }
    } catch (err) {
      setError('Erreur de vérification. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (newPassword !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          code: verificationCode,
          newPassword
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          window.location.href = '/login?message=Mot de passe réinitialisé avec succès';
        }, 2000);
      } else {
        setError(data.message || 'Erreur lors de la réinitialisation');
      }
    } catch (err) {
      setError('Erreur de connexion. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-md mx-auto"
          >
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
              {/* Logo */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">{t('forgot_password_europa_kredit_bank')}</h1>
                <p className="text-gray-600 mt-2">{t('forgot_password_recuperation_mot_passe')}</p>
              </div>

              {/* Step 1: Email Request */}
              {step === 1 && (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="text-center mb-6">
                      <Lock className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <h2 className="text-lg font-semibold text-gray-900 mb-2">
                        Mot de passe oublié ?
                      </h2>
                      <p className="text-gray-600 text-sm">
                        Entrez votre adresse email et nous vous enverrons un code de réinitialisation.
                      </p>
                    </div>

                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center mb-6"
                      >
                        <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                        <span className="text-red-600 text-sm">{error}</span>
                      </motion.div>
                    )}

                    {success && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center mb-6"
                      >
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span className="text-green-600 text-sm">{t('forgot_password_email_envoye_avec_succes')}</span>
                      </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="form-label form-label-required">{t('forgot_password_adresse_email')}</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="form-input"
                          placeholder="votre@email.com"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="form-button-primary w-full"
                      >
                        {isLoading ? (
                          <div className="flex items-center justify-center">
                            <div className="loading-spinner w-5 h-5 mr-2"></div>
                            Envoi en cours...
                          </div>
                        ) : (
                          'Envoyer le code'
                        )}
                      </button>
                    </form>
                  </motion.div>
                </>
              )}

              {/* Step 2: Verification Code */}
              {step === 2 && (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="text-center mb-6">
                      <Mail className="w-12 h-12 text-blue-900 mx-auto mb-3" />
                      <h2 className="text-lg font-semibold text-gray-900 mb-2">{t('forgot_password_verifiez_votre_email')}</h2>
                      <p className="text-gray-600 text-sm">
                        Nous avons envoyé un code à {email}
                      </p>
                    </div>

                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center mb-6"
                      >
                        <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                        <span className="text-red-600 text-sm">{error}</span>
                      </motion.div>
                    )}

                    <form onSubmit={handleVerificationSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">{t('forgot_password_code_verification')}</label>
                        <input
                          type="text"
                          value={verificationCode}
                          onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                          required
                          maxLength={6}
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors text-center text-2xl tracking-widest"
                          placeholder="000000"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading || verificationCode.length !== 6}
                        className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                      >
                        {isLoading ? (
                          <div className="flex items-center justify-center">
                            <div className="loading-spinner w-5 h-5 mr-2"></div>
                            Vérification...
                          </div>
                        ) : (
                          'Vérifier le code'
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                      >
                        <ArrowLeft className="w-4 h-4 inline mr-2" />{t('forgot_password_retour')}</button>
                    </form>
                  </motion.div>
                </>
              )}

              {/* Step 3: New Password */}
              {step === 3 && (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="text-center mb-6">
                      <Lock className="w-12 h-12 text-green-600 mx-auto mb-3" />
                      <h2 className="text-lg font-semibold text-gray-900 mb-2">{t('forgot_password_nouveau_mot_passe')}</h2>
                      <p className="text-gray-600 text-sm">{t('forgot_password_choisissez_nouveau_mot_passe')}</p>
                    </div>

                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center mb-6"
                      >
                        <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                        <span className="text-red-600 text-sm">{error}</span>
                      </motion.div>
                    )}

                    {success && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center mb-6"
                      >
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span className="text-green-600 text-sm">{t('forgot_password_mot_passe_reinitialise')}</span>
                      </motion.div>
                    )}

                    <form onSubmit={handlePasswordReset} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">{t('forgot_password_nouveau_mot_passe')}</label>
                        <input
                          type="password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          required
                          minLength={8}
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                          placeholder="••••••••"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">{t('forgot_password_confirmer_mot_passe')}</label>
                        <input
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                          minLength={8}
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                          placeholder="••••••••"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                      >
                        {isLoading ? (
                          <div className="flex items-center justify-center">
                            <div className="loading-spinner w-5 h-5 mr-2"></div>
                            Réinitialisation...
                          </div>
                        ) : (
                          'Réinitialiser le mot de passe'
                        )}
                      </button>
                    </form>
                  </motion.div>
                </>
              )}

              {/* Back to Login */}
              <div className="mt-8 text-center">
                <Link
                  href="/login"
                  className="inline-flex items-center text-blue-900 hover:text-blue-700 transition-colors font-medium"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />{t('forgot_password_retour_connexion')}</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
