import { useState } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../lib/i18n';
import { Phone, Mail, MapPin, Building, HeadphonesIcon, Briefcase, Target, Send, CheckCircle, AlertCircle, Globe, Clock, Shield, User, FileText } from 'lucide-react';
import Link from 'next/link';
import { useNotifications } from '../components/NotificationManager';
import { generateCSRFToken } from '../lib/csrf';

export default function ContactPage() {
  const { t } = useTranslation();
  const { success, error, info } = useNotifications();

  const [formData, setFormData] = useState({
    institution: '',
    person: '',
    position: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactOptions = [
    {
      icon: HeadphonesIcon,
      title: t('pages.contact.opt_1_title'),
      description: t('pages.contact.opt_1_desc'),
      phone: "+49 89 12345678",
      email: "contact@continentalbk.de",
      color: "from-blue-400/30 to-blue-600/30",
      iconColor: "text-blue-300"
    },
    {
      icon: Building,
      title: t('pages.contact.opt_2_title'),
      description: t('pages.contact.opt_2_desc'),
      phone: "+49 89 12345678",
      email: "contact@continentalbk.de",
      color: "from-purple-400/30 to-purple-600/30",
      iconColor: "text-purple-300"
    },
    {
      icon: Target,
      title: t('pages.contact.opt_3_title'),
      description: t('pages.contact.opt_3_desc'),
      phone: "+49 89 12345678",
      email: "contact@continentalbk.de",
      color: "from-pink-400/30 to-pink-600/30",
      iconColor: "text-pink-300"
    }
  ];

  const services = [
    t('pages.contact.svc_investment'),
    t('pages.contact.svc_wealth'),
    t('pages.contact.svc_structured'),
    t('pages.contact.svc_digital'),
    t('pages.contact.svc_consulting'),
    t('pages.contact.svc_support'),
    t('pages.contact.svc_other')
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.institution.trim()) newErrors.institution = t('pages.contact.err_institution');
    if (!formData.person.trim()) newErrors.person = t('pages.contact.err_person');
    if (!formData.position.trim()) newErrors.position = t('pages.contact.err_position');
    if (!formData.email.trim()) newErrors.email = t('pages.contact.err_email_required');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = t('pages.contact.err_email_invalid');
    if (!formData.phone.trim()) newErrors.phone = t('pages.contact.err_phone_required');
    else if (!/^\+?[\d\s\-\(\)]+$/.test(formData.phone)) newErrors.phone = t('pages.contact.err_phone_invalid');
    if (!formData.service) newErrors.service = t('pages.contact.err_service');
    if (!formData.message.trim()) newErrors.message = t('pages.contact.err_message_required');
    else if (formData.message.length < 10) newErrors.message = t('pages.contact.err_message_short');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    
    try {
      // Generate CSRF token
      const csrfToken = generateCSRFToken();
      
      info('Envoi en cours', 'Transmission de votre message...');
      
      const response = await fetch('/api/forms/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formName: 'Contact Form',
          payload: formData,
          replyTo: formData.email,
          csrfToken
        })
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to send contact form');
      }
      
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      success(
        'Message envoyé avec succès !',
        'Nous avons bien reçu votre message. Notre équipe vous répondra sous 24h.',
        {
          details: ['Référence : Contact-' + Date.now()],
          duration: 6000
        }
      );
      
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({ institution: '', person: '', position: '', email: '', phone: '', service: '', message: '' });
      }, 3000);
    } catch (error) {
      setIsSubmitting(false);
      error(
        'Échec de l\'envoi',
        'Impossible d\'envoyer votre message pour le moment',
        {
          details: [error.message || 'Veuillez réessayer plus tard'],
          duration: 6000
        }
      );
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a192f] via-[#1e3a5f] to-[#2c5282] flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 max-w-md sm:max-w-lg md:max-w-2xl w-full text-center"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">{t('pages.contact.success_title')}</h1>
          <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">{t('pages.contact.success_desc')}</p>
          <Link href="/" className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all text-sm sm:text-base">
            <span>{t('pages.contact.back_home')}</span>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] via-[#1e3a5f] to-[#2c5282] flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6 sm:mb-8 max-w-md sm:max-w-2xl md:max-w-4xl"
      >
        <div className="flex items-center justify-center mb-4 sm:mb-6">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-400/20 to-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl flex items-center justify-center shadow-lg">
            <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-300" />
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">{t('pages.contact.hero_title')}</h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-4 sm:mb-6">{t('pages.contact.hero_subtitle')}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 max-w-md sm:max-w-2xl md:max-w-6xl w-full"
      >
        {(contactOptions || []).map((option, index) => (
          <motion.div
            key={option.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            className="bg-white rounded-2xl shadow-xl p-4 sm:p-5 md:p-6 hover:shadow-2xl transition-shadow"
          >
            <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${option.color} rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg backdrop-blur-sm border border-white/20`}>
              <option.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${option.iconColor} drop-shadow-sm`} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2">{option.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">{option.description}</p>
            <div className="space-y-1.5 sm:space-y-2">
              <a href={`tel:${option.phone}`} className="flex items-center space-x-1.5 sm:space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" /><span className="text-xs sm:text-sm">{option.phone}</span>
              </a>
              <a href={`mailto:${option.email}`} className="flex items-center space-x-1.5 sm:space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" /><span className="text-xs sm:text-sm">{option.email}</span>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl w-full"
      >
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1.5 sm:mb-2">{t('pages.contact.form_title')}</h2>
          <p className="text-gray-600 text-sm sm:text-base">{t('pages.contact.form_subtitle')}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { field: 'institution', label: t('pages.contact.field_institution'), placeholder: t('pages.contact.placeholder_institution'), icon: Building, type: 'text' },
              { field: 'person', label: t('pages.contact.field_person'), placeholder: t('pages.contact.placeholder_person'), icon: User, type: 'text' },
              { field: 'position', label: t('pages.contact.field_position'), placeholder: t('pages.contact.placeholder_position'), icon: Briefcase, type: 'text' },
              { field: 'email', label: t('pages.contact.field_email'), placeholder: t('pages.contact.placeholder_email'), icon: Mail, type: 'email' },
              { field: 'phone', label: t('pages.contact.field_phone'), placeholder: t('pages.contact.placeholder_phone'), icon: Phone, type: 'tel' },
            ].map(({ field, label, placeholder, icon: Icon, type }) => (
              <div key={field}>
                <label className="form-label form-label-required">{label}</label>
                <input
                  type={type}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  className={`form-input ${errors[field] ? 'form-input-error' : ''}`}
                  placeholder={placeholder}
                />
                {errors[field] && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="form-error"
                  >
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {errors[field]}
                  </motion.p>
                )}
              </div>
            ))}

            <div>
              <label className="form-label form-label-required">{t('pages.contact.field_service')}</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className={`form-select ${errors.service ? 'form-input-error' : ''}`}
              >
                <option value="">{t('pages.contact.placeholder_service')}</option>
                {(services || []).map(service => <option key={service} value={service}>{service}</option>)}
              </select>
              {errors.service && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="form-error"
                >
                  <AlertCircle className="w-3 h-3 mr-1" />
                  {errors.service}
                </motion.p>
              )}
            </div>
          </div>

          <div>
            <label className="form-label form-label-required">{t('pages.contact.field_message')}</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className={`form-textarea ${errors.message ? 'form-input-error' : ''}`}
              placeholder={t('pages.contact.placeholder_message')}
            />
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="form-error"
              >
                <AlertCircle className="w-3 h-3 mr-1" />
                {errors.message}
              </motion.p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="text-xs sm:text-sm text-gray-600">
              <span className="font-medium">{t('pages.contact.response_time')}</span> {t('pages.contact.response_value')}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="form-button-primary"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>{t('pages.contact.sending')}</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow-sm" />
                  <span>{t('pages.contact.send_btn')}</span>
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
