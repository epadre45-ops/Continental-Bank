import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Plane, Calendar, Map, CreditCard, Shield, CheckCircle, Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

import { useTranslation } from '../lib/i18n';
export default function PretVoyage() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    loanAmount: '',
    destination: '',
    travelDate: '',
    returnDate: '',
    travelers: '',
    accommodationType: '',
    transportType: '',
    employmentStatus: '',
    monthlyIncome: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    consent: false,
    terms: false
  });

  const [results, setResults] = useState(null);

  const calculateLoan = () => {
    const amount = parseFloat(formData.loanAmount);
    const duration = 24; // Durée fixe pour prêt voyage
    const rate = 5.9; // Taux spécial voyage
    
    if (!amount) {
      alert('Veuillez entrer un montant');
      return;
    }

    const monthlyRate = rate / 100 / 12;
    const numPayments = duration;
    const monthlyPayment = amount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    const totalPayment = monthlyPayment * numPayments;
    const totalInterest = totalPayment - amount;

    setResults({
      monthlyPayment,
      totalPayment,
      totalInterest,
      apr: rate,
      amount,
      duration
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateLoan();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
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
              <ArrowLeft className="w-4 h-4 mr-2" />{t('pret_voyage_retour_accueil')}</Link>
            <h1 className="text-5xl font-light text-slate-900 mb-6">{t('pret_voyage_pret')}<span className="text-blue-900 font-medium">{t('pret_voyage_voyage')}</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl">{t('pret_voyage_partez_aventure_sans_attendre')}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Informations principales */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Avantages */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <h2 className="text-2xl font-medium text-slate-900 mb-6">{t('pret_voyage_avantages_pret_voyage')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-slate-900 mb-1">{t('pret_voyage_taux_voyage')}</h3>
                      <p className="text-sm text-slate-600">
                        Taux préférentiel à partir de 5.9%
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Plane className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-slate-900 mb-1">{t('pret_voyage_flexibilite')}</h3>
                      <p className="text-sm text-slate-600">{t('pret_voyage_remboursement_sur_mois')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-slate-900 mb-1">{t('pret_voyage_assurance_incluse')}</h3>
                      <p className="text-sm text-slate-600">{t('pret_voyage_assurance_voyage_gratuite')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-slate-900 mb-1">{t('pret_voyage_deblocage_rapide')}</h3>
                      <p className="text-sm text-slate-600">{t('pret_voyage_virement_sous_heures')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Destinations populaires */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <h2 className="text-2xl font-medium text-slate-900 mb-6">{t('pret_voyage_destinations_populaires')}</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'Paris', amount: '2000€' },
                    { name: 'Rome', amount: '2500€' },
                    { name: 'Bali', amount: '4000€' },
                    { name: 'New York', amount: '5000€' },
                    { name: 'Tokyo', amount: '6000€' },
                    { name: 'Dubai', amount: '3500€' }
                  ].map((dest) => (
                    <div key={dest.name} className="text-center p-4 border border-slate-200 rounded-lg hover:border-blue-300 transition-colors cursor-pointer">
                      <Map className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <h3 className="font-medium text-slate-900">{dest.name}</h3>
                      <p className="text-sm text-slate-600">à partir de {dest.amount}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Calculateur */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <h2 className="text-2xl font-medium text-slate-900 mb-6">{t('pret_voyage_simulateur_pret_voyage')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Budget voyage (€)
                    </label>
                    <input
                      type="number"
                      name="loanAmount"
                      value={formData.loanAmount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="3000"
                      min="500"
                      max="15000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_voyage_destination')}</label>
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">{t('pret_voyage_selectionner')}</option>
                      <option value="europe">{t('pret_voyage_europe')}</option>
                      <option value="asie">{t('pret_voyage_asie')}</option>
                      <option value="amerique">{t('pret_voyage_amerique')}</option>
                      <option value="afrique">{t('pret_voyage_afrique')}</option>
                      <option value="oceanie">{t('pret_voyage_oceanie')}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_voyage_date_depart')}</label>
                    <input
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_voyage_nombre_voyageurs')}</label>
                    <select
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">{t('pret_voyage_selectionner')}</option>
                      <option value="1">1 personne</option>
                      <option value="2">2 personnes</option>
                      <option value="3">3 personnes</option>
                      <option value="4">4 personnes</option>
                      <option value="5+">5+ personnes</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={calculateLoan}
                  className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium"
                >{t('pret_voyage_calculer_mensualite')}</button>

                {results && (
                  <div className="mt-6 p-6 bg-blue-50 rounded-lg">
                    <h3 className="text-lg font-medium text-slate-900 mb-4">{t('pret_voyage_resultat_simulation')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex justify-between">
                        <span className="text-slate-600">{t('pret_voyage_mensualite')}</span>
                        <span className="font-bold text-blue-600">
                          {results.monthlyPayment.toFixed(2)}€
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">{t('pret_voyage_cout_total')}</span>
                        <span className="font-bold text-slate-900">
                          {results.totalPayment.toFixed(2)}€
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">{t('pret_voyage_interets_totaux')}</span>
                        <span className="font-bold text-orange-600">
                          {results.totalInterest.toFixed(2)}€
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">{t('pret_voyage_taeg')}</span>
                        <span className="font-bold text-slate-900">
                          {results.apr}%
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Formulaire de demande */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200"
            >
              <h2 className="text-2xl font-medium text-slate-900 mb-6">{t('pret_voyage_demande_pret_voyage')}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Informations voyage */}
                <div>
                  <h3 className="text-lg font-medium text-slate-900 mb-4">{t('pret_voyage_informations_voyage')}</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Budget souhaité (€) *
                      </label>
                      <input
                        type="number"
                        name="loanAmount"
                        value={formData.loanAmount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_voyage_date_depart')}</label>
                        <input
                          type="date"
                          name="travelDate"
                          value={formData.travelDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_voyage_date_retour')}</label>
                        <input
                          type="date"
                          name="returnDate"
                          value={formData.returnDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Informations personnelles */}
                <div>
                  <h3 className="text-lg font-medium text-slate-900 mb-4">{t('pret_voyage_vos_informations')}</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Prénom *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Nom *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Consentement */}
                <div className="space-y-4">
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1"
                      required
                    />
                    <span className="text-sm text-slate-600">
                      J'accepte que Continental Bank Europe traite mes données personnelles dans le cadre de ma demande de prêt voyage.
                    </span>
                  </label>
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleChange}
                      className="mt-1"
                      required
                    />
                    <span className="text-sm text-slate-600">
                      J'ai lu et j'accepte les conditions générales du prêt voyage.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-4 rounded-lg hover:bg-blue-800 transition-colors font-medium"
                >{t('pret_voyage_reserver_mon_voyage')}</button>
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
              Prêt à partir ? Nos conseillers voyage vous accompagnent
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="inline-flex items-center text-blue-900 hover:text-blue-800">
                <Phone className="w-5 h-5 mr-2" />
                +49 69 123456789
              </Link>
              <Link href="/contact" className="inline-flex items-center text-blue-900 hover:text-blue-800">
                <Mail className="w-5 h-5 mr-2" />
                voyage@continentalbank.eu
              </Link>
              <Link href="/contact" className="inline-flex items-center text-blue-900 hover:text-blue-800">
                <MapPin className="w-5 h-5 mr-2" />{t('pret_voyage_nos_agences')}</Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
