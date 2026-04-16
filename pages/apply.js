import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Upload, 
  CheckCircle,
  AlertCircle,
  Briefcase
} from 'lucide-react';
import Link from 'next/link';
import { submitFormEmail, flattenForEmail } from '../utils/formSubmit';

import { useTranslation } from '../lib/i18n';
export default function ApplyPage() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    department: '',
    experience: '',
    motivation: '',
    cvFile: null
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const departments = [
    'Banque d\'Investissement',
    'Technologie',
    'Gestion des Risques',
    'Conformité',
    'Marketing',
    'Ressources Humaines'
  ];

  const experienceLevels = [
    'Junior (0-2 ans)',
    'Intermédiaire (2-5 ans)',
    'Senior (5-10 ans)',
    'Expert (10+ ans)'
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'Le prénom est requis';
    if (!formData.lastName.trim()) newErrors.lastName = 'Le nom est requis';
    if (!formData.email.trim()) newErrors.email = 'L\'email est requis';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email invalide';
    if (!formData.phone.trim()) newErrors.phone = 'Le téléphone est requis';
    if (!formData.position.trim()) newErrors.position = 'La position est requise';
    if (!formData.department) newErrors.department = 'Le département est requis';
    if (!formData.experience) newErrors.experience = 'Le niveau d\'expérience est requis';
    if (!formData.motivation.trim()) newErrors.motivation = 'La lettre de motivation est requise';
    if (!formData.cvFile) newErrors.cvFile = 'Le CV est requis';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors((prev) => ({ ...prev, general: '' }));

    try {
      const file = formData.cvFile;
      const payload = flattenForEmail({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        position: formData.position,
        department: formData.department,
        experience: formData.experience,
        motivation: formData.motivation,
        cvFileName: file ? file.name : '',
        cvFileSize: file ? String(file.size) : '',
      });

      await submitFormEmail({
        formName: 'Job Application',
        payload,
        replyTo: formData.email,
      });

      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          position: '',
          department: '',
          experience: '',
          motivation: '',
          cvFile: null,
        });
      }, 3000);
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        general: err.message || 'Unable to submit application. Please try again.',
      }));
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
    
    // Effacer l'erreur quand l'utilisateur commence à taper
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        cvFile: file
      }));
      
      // Effacer l'erreur de fichier
      if (errors.cvFile) {
        setErrors(prev => ({
          ...prev,
          cvFile: ''
        }));
      }
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-[#0A1F3C] text-white p-4">
          <div className="container mx-auto">
            <Link href="/careers" className="inline-flex items-center space-x-2 text-white/80 hover:text-white">
              <ArrowLeft className="w-4 h-4" />
              <span>{t('apply_retour_aux_carrieres')}</span>
            </Link>
          </div>
        </div>
        
        <section className="pt-32 bg-[#0A1F3C]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-4xl font-bold mb-6 text-white">{t('apply_candidature_soumise_avec_succes')}</h1>
              
              <p className="text-lg text-white/80 mb-8">
                Merci pour votre intérêt chez EUROPA KREDIT BANK. 
                Votre candidature a été reçue et notre équipe des RH l'examinera attentivement.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">{t('apply_prochaines_etapes')}</h3>
                <ul className="text-left text-white/90 space-y-2">
                  <li>• Confirmation email envoyée à {formData.email}</li>
                  <li>{t('apply_examen_votre_candidature_par')}</li>
                  <li>{t('apply_contact_sous_jours_ouvrables')}</li>
                </ul>
              </div>
              
              <Link href="/careers" className="inline-flex items-center space-x-2 bg-white text-[#0A1F3C] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors mt-8">
                <ArrowLeft className="w-4 h-4" />
                <span>{t('apply_retour_aux_carrieres')}</span>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#0A1F3C] text-white p-4">
        <div className="container mx-auto">
          <Link href="/careers" className="inline-flex items-center space-x-2 text-white/80 hover:text-white">
            <ArrowLeft className="w-4 h-4" />
            <span>{t('apply_retour_aux_carrieres')}</span>
          </Link>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="pt-32 bg-[#0A1F3C]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Briefcase className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">{t('apply_postuler')}</span>
            </div>
            
            <h1 className="text-4xl font-bold mb-6 text-white">{t('apply_rejoignez_excellence')}</h1>
            
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Démarrez votre carrière chez EUROPA KREDIT BANK en complétant 
              le formulaire de candidature ci-dessous.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {errors.general && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                  {errors.general}
                </div>
              )}
              {/* Personal Information */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-[#0A1F3C]">{t('apply_informations_personnelles')}</h2>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#0A1F3C] mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E2E5C] ${
                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Jean"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#0A1F3C] mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E2E5C] ${
                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Dupont"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-medium text-[#0A1F3C] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E2E5C] ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="jean.dupont@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#0A1F3C] mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E2E5C] ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="+33 6 12 34 56 78"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-[#0A1F3C]">{t('apply_informations_professionnelles')}</h2>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#0A1F3C] mb-2">
                      Position Recherchée *
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E2E5C] ${
                        errors.position ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Analyste Financier Senior"
                    />
                    {errors.position && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.position}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#0A1F3C] mb-2">
                      Département *
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E2E5C] ${
                        errors.department ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">{t('apply_selectionner_departement')}</option>
                      {(departments || []).map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                    {errors.department && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.department}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="mt-6">
                  <label className="block text-sm font-medium text-[#0A1F3C] mb-2">
                    Niveau d'Expérience *
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E2E5C] ${
                      errors.experience ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">{t('apply_selectionner_votre_niveau')}</option>
                    {(experienceLevels || []).map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                  {errors.experience && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.experience}
                    </p>
                  )}
                </div>
              </div>

              {/* Motivation */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-[#0A1F3C]">{t('apply_lettre_motivation')}</h2>
                
                <div>
                  <label className="block text-sm font-medium text-[#0A1F3C] mb-2">
                    Pourquoi voulez-vous rejoindre EUROPA KREDIT BANK ? *
                  </label>
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E2E5C] ${
                      errors.motivation ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Expliquez votre motivation et pourquoi vous êtes le candidat idéal..."
                  />
                  {errors.motivation && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.motivation}
                    </p>
                  )}
                </div>
              </div>

              {/* Documents */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-[#0A1F3C]">{t('apply_documents')}</h2>
                
                <div>
                  <label className="block text-sm font-medium text-[#0A1F3C] mb-2">
                    CV (PDF, DOC, DOCX) *
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      id="cv-file"
                    />
                    <label
                      htmlFor="cv-file"
                      className={`flex items-center justify-center w-full px-4 py-8 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
                        errors.cvFile ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-[#0E2E5C]'
                      }`}
                    >
                      <Upload className="w-8 h-8 text-gray-500 mr-3" />
                      <div className="text-left">
                        <p className="text-sm font-medium text-[#0A1F3C]">
                          {formData.cvFile ? formData.cvFile.name : 'Cliquez pour télécharger votre CV'}
                        </p>
                        <p className="text-xs text-gray-500">{t('apply_pdf_doc_docx_jusqu')}</p>
                      </div>
                    </label>
                  </div>
                  {errors.cvFile && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.cvFile}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#0E2E5C] text-white px-8 py-4 rounded-lg hover:bg-[#0A1F3C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>{t('apply_soumettre_candidature')}</>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
