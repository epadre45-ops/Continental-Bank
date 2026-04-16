import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase, TrendingUp, Target, Phone, Mail, MapPin, ArrowLeft, CheckCircle, Rocket, Users, FileText } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { submitFormEmail, flattenForEmail } from '../utils/formSubmit';

import { useTranslation } from '../lib/i18n';
export default function BusinessStartup() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    businessType: '',
    industry: '',
    fundingAmount: '',
    businessStage: '',
    name: '',
    email: '',
    phone: '',
    businessName: '',
    description: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        submittedAt: new Date().toISOString(),
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : ''
      };
      await submitFormEmail({
        formName: 'Business Startup',
        payload: flattenForEmail(payload),
        replyTo: formData.email
      });
      alert('Thank you. Your request has been sent.');
    } catch (error) {
      console.error('Business startup submit:', error);
      alert(error.message || 'Unable to submit. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />{t('business_startup_retour_accueil')}</Link>
            <h1 className="text-5xl font-light text-slate-900 mb-6">
              Création d'{';'}<span className="text-blue-900 font-medium">{t('business_startup_entreprise')}</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">{t('business_startup_accompagnement_financement_pour')}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Informations principales */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Notre accompagnement */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <h2 className="text-2xl font-medium text-slate-900 mb-6">{t('business_startup_notre_accompagnement_complet')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <Rocket className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-slate-900 mb-1">{t('business_startup_financement_sur_mesure')}</h3>
                      <p className="text-sm text-slate-600">{t('business_startup_solutions_adaptees_chaque_stade')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-slate-900 mb-1">{t('business_startup_conseil_experts')}</h3>
                      <p className="text-sm text-slate-600">{t('business_startup_acces_notre_reseau_mentors')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Target className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-slate-900 mb-1">{t('business_startup_accelerateur_croissance')}</h3>
                      <p className="text-sm text-slate-600">{t('business_startup_programme_intensif_pour_startups')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FileText className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-slate-900 mb-1">{t('business_startup_support_administratif')}</h3>
                      <p className="text-sm text-slate-600">{t('business_startup_aide_pour_les_demarches')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Types de financement */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <h2 className="text-2xl font-medium text-slate-900 mb-6">{t('business_startup_nos_solutions_financement')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-slate-200 rounded-lg p-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                      <Briefcase className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-medium text-slate-900 mb-2">{t('business_startup_pret_demarrage')}</h3>
                    <p className="text-sm text-slate-600 mb-3">{t('business_startup_jusqu_000_pour_les')}</p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>{t('business_startup_taux_preferentiel')}</li>
                      <li>{t('business_startup_remboursement_differe')}</li>
                      <li>{t('business_startup_garantie_personnelle')}</li>
                    </ul>
                  </div>
                  <div className="border border-slate-200 rounded-lg p-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-medium text-slate-900 mb-2">{t('business_startup_ligne_credit')}</h3>
                    <p className="text-sm text-slate-600 mb-3">{t('business_startup_jusqu_200_000_tresorerie')}</p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>{t('business_startup_flexibilite_totale')}</li>
                      <li>{t('business_startup_interets_sur_utilise')}</li>
                      <li>{t('business_startup_renouvelable')}</li>
                    </ul>
                  </div>
                  <div className="border border-slate-200 rounded-lg p-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                      <Target className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-medium text-slate-900 mb-2">{t('business_startup_investissement_equity')}</h3>
                    <p className="text-sm text-slate-600 mb-3">{t('business_startup_partenariat_avec_notre_fonds')}</p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>{t('business_startup_pas_remboursement')}</li>
                      <li>{t('business_startup_support_strategique')}</li>
                      <li>{t('business_startup_reseau_etendu')}</li>
                    </ul>
                  </div>
                  <div className="border border-slate-200 rounded-lg p-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                      <FileText className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="font-medium text-slate-900 mb-2">{t('business_startup_leasing_professionnel')}</h3>
                    <p className="text-sm text-slate-600 mb-3">{t('business_startup_equipement_materiel_sans_apport')}</p>
                    <ul className="text-xs text-slate-600 space-y-1">
                      <li>{t('business_startup_deductible_fiscalement')}</li>
                      <li>{t('business_startup_maintenance_incluse')}</li>
                      <li>{t('business_startup_renouvellement')}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Secteurs soutenus */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <h2 className="text-2xl font-medium text-slate-900 mb-6">{t('business_startup_secteurs_que_nous_soutenons')}</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    'Tech', 'Retail', 'Services', 'Santé',
                    'Éducation', 'Énergie', 'Transport', 'Finance'
                  ].map((sector) => (
                    <div key={sector} className="text-center p-3 border border-slate-200 rounded-lg">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-xs font-bold text-blue-600">
                          {sector.charAt(0)}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-slate-900">{sector}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200"
            >
              <h2 className="text-2xl font-medium text-slate-900 mb-6">{t('business_startup_demarrez_votre_projet')}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('business_startup_type_entreprise')}</label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">{t('business_startup_selectionner')}</option>
                    <option value="autoentrepreneur">{t('business_startup_auto_entrepreneur')}</option>
                    <option value="sas">{t('business_startup_sas_sasu')}</option>
                    <option value="sarleurlu">{t('business_startup_sarl_eurl')}</option>
                    <option value="sci">{t('business_startup_sci')}</option>
                    <option value="autre">{t('business_startup_autre')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('business_startup_secteur_activite')}</label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">{t('business_startup_selectionner')}</option>
                    <option value="technologie">{t('business_startup_technologie')}</option>
                    <option value="commerce">{t('business_startup_commerce')}</option>
                    <option value="services">{t('business_startup_services')}</option>
                    <option value="industrie">{t('business_startup_industrie')}</option>
                    <option value="sante">{t('business_startup_sante')}</option>
                    <option value="education">{t('business_startup_education')}</option>
                    <option value="autre">{t('business_startup_autre')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Montant souhaité (€)
                  </label>
                  <input
                    type="text"
                    name="fundingAmount"
                    value={formData.fundingAmount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="25 000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('business_startup_stade_projet')}</label>
                  <select
                    name="businessStage"
                    value={formData.businessStage}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">{t('business_startup_selectionner')}</option>
                    <option value="idee">{t('business_startup_idee_concept')}</option>
                    <option value="prototype">{t('business_startup_prototype')}</option>
                    <option value="lancement">{t('business_startup_lancement_imminent')}</option>
                    <option value="debut">{t('business_startup_debut_activite')}</option>
                    <option value="croissance">{t('business_startup_croissance')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('business_startup_nom_entreprise')}</label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('business_startup_description_projet')}</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Décrivez votre projet en quelques lignes..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('business_startup_votre_nom_complet')}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t('business_startup_email')}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t('business_startup_telephone')}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-4 rounded-lg hover:bg-blue-800 transition-colors font-medium flex items-center justify-center"
                >
                  <Rocket className="w-5 h-5 mr-2" />{t('business_startup_lancer_demande')}</button>
              </form>
            </motion.div>
          </div>

          {/* Contact rapide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-slate-600 mb-8">
              Prêt à lancer votre entreprise ? Nos experts entrepreneurs vous accompagnent
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="inline-flex items-center text-blue-900 hover:text-blue-800">
                <Phone className="w-5 h-5 mr-2" />
                +49 69 123456789
              </Link>
              <Link href="/contact" className="inline-flex items-center text-blue-900 hover:text-blue-800">
                <Mail className="w-5 h-5 mr-2" />
                startup@continentalbank.eu
              </Link>
              <Link href="/contact" className="inline-flex items-center text-blue-900 hover:text-blue-800">
                <MapPin className="w-5 h-5 mr-2" />{t('business_startup_nos_agences')}</Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
