import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowLeft, 
  ArrowUpRight, 
  FileText, 
  User, 
  Home, 
  Briefcase, 
  Calculator, 
  Shield, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin, 
  CreditCard,
  Building,
  Calendar,
  DollarSign,
  TrendingUp,
  Target,
  Award,
  Users,
  Star,
  Clock,
  AlertCircle,
  Lock,
  Eye,
  EyeOff,
  Info
} from 'lucide-react';
import Link from 'next/link';
import { submitFormEmail, flattenForEmail } from '../utils/formSubmit';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNotifications } from '../components/NotificationManager';
import { checkEligibility, getScoreColor, getScoreLabel } from '../lib/eligibilityChecker';

import { useTranslation } from '../lib/i18n';
export default function DemandePret() {
  const { t } = useTranslation();
  const { success, error, warning, info } = useNotifications();

  const [formData, setFormData] = useState({
    // Section 1: Personalien (Informations personnelles)
    anrede: '',
    vorname: '',
    nachname: '',
    geburtsdatum: '',
    geburtsort: '',
    staatsangehoerigkeit: '',
    familienstand: '',
    anzahlKinder: '',
    
    // Section 2: Wohnadresse (Adresse)
    strasse: '',
    hausnummer: '',
    plz: '',
    ort: '',
    land: '',
    wohnsituation: '',
    wohnhaftSeit: '',
    
    // Section 3: Berufliche Angaben (Informations professionnelles)
    beruf: '',
    arbeitgeber: '',
    beschaeftigungSeit: '',
    beschaeftigungsart: '',
    branche: '',
    monatsgehaltNetto: '',
    weitereEinkuenfte: '',
    
    // Section 4: Finanzdaten (Données financières)
    kontoinhaber: '',
    iban: '',
    bic: '',
    kreditinstitut: '',
    
    // Section 5: Kreditspezifikation (Spécifications du prêt)
    kreditbetrag: '',
    kreditlaufzeit: '',
    kreditzweck: '',
    ratenzahlung: '',
    
    // Section 6: Bestehende Verpflichtungen (Engagements existants)
    bestehendeKredite: '',
    monatlicheBelastung: '',
    
    // Section 7: Kontaktdaten (Coordonnées)
    email: '',
    telefon: '',
    mobil: '',
    
    // Section 8: Einverständnis (Consentement)
    datenschutz: false,
    agb: false,
    schufaEinverstaendnis: false,
    werbeeinverstaendnis: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 8;

  const validateStep = (step) => {
    const newErrors = {};
    
    switch(step) {
      case 1:
        if (!formData.anrede) newErrors.anrede = 'Anrede ist erforderlich';
        if (!formData.vorname) newErrors.vorname = 'Vorname ist erforderlich';
        if (!formData.nachname) newErrors.nachname = 'Nachname ist erforderlich';
        if (!formData.geburtsdatum) newErrors.geburtsdatum = 'Geburtsdatum ist erforderlich';
        if (!formData.staatsangehoerigkeit) newErrors.staatsangehoerigkeit = 'Staatsangehörigkeit ist erforderlich';
        break;
      case 2:
        if (!formData.strasse) newErrors.strasse = 'Straße ist erforderlich';
        if (!formData.hausnummer) newErrors.hausnummer = 'Hausnummer ist erforderlich';
        if (!formData.plz) newErrors.plz = 'PLZ ist erforderlich';
        if (!formData.ort) newErrors.ort = 'Ort ist erforderlich';
        break;
      case 3:
        if (!formData.beruf) newErrors.beruf = 'Beruf ist erforderlich';
        if (!formData.arbeitgeber) newErrors.arbeitgeber = 'Arbeitgeber ist erforderlich';
        if (!formData.monatsgehaltNetto) newErrors.monatsgehaltNetto = 'Monatsgehalt ist erforderlich';
        break;
      case 4:
        if (!formData.kontoinhaber) newErrors.kontoinhaber = 'Kontoinhaber ist erforderlich';
        if (!formData.iban) newErrors.iban = 'IBAN ist erforderlich';
        break;
      case 5:
        if (!formData.kreditbetrag) newErrors.kreditbetrag = 'Kreditbetrag ist erforderlich';
        if (!formData.kreditlaufzeit) newErrors.kreditlaufzeit = 'Laufzeit ist erforderlich';
        if (!formData.kreditzweck) newErrors.kreditzweck = 'Kreditzweck ist erforderlich';
        break;
      case 7:
        if (!formData.email) newErrors.email = 'E-Mail ist erforderlich';
        if (!formData.telefon) newErrors.telefon = 'Telefon ist erforderlich';
        break;
      case 8:
        if (!formData.datenschutz) newErrors.datenschutz = 'Datenschutz ist erforderlich';
        if (!formData.agb) newErrors.agb = 'AGB sind erforderlich';
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      try {
        setIsSubmitting(true);
        
        // 1. Vérifier l'éligibilité
        info('Analyse en cours', 'Vérification de votre éligibilité...');
        
        const eligibility = checkEligibility(formData);

        if (!eligibility.eligible) {
          error('Non éligible', 'Votre demande ne répond pas aux critères requis', {
            details: (eligibility.issues || []).map(issue => issue.message)
          });
          setIsSubmitting(false);
          return;
        }

        if (eligibility.eligibleWithWarnings) {
          warning('Éligible avec avertissements', 'Votre demande est éligible mais présente certains points à surveiller', {
            details: (eligibility.warnings || []).map(w => w.message)
          });
        } else {
          success('Éligible', 'Votre demande répond à tous les critères requis', {
            details: [`Score d'éligibilité : ${eligibility.score}/100 - ${getScoreLabel(eligibility.score)}`]
          });
        }
        
        // 2. Créer la demande de prêt dans la base de données
        const loanData = {
          ...formData,
          submittedAt: new Date().toISOString(),
          userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'SSR',
          currentStep: currentStep,
          eligibilityScore: eligibility.score,
          eligibilityStatus: eligibility.summary
        };

        const loanResponse = await fetch('/api/applications', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'loan', ...loanData })
        });

        if (!loanResponse.ok) {
          const errorData = await loanResponse.json();
          throw new Error(errorData.message || 'Failed to create loan application');
        }

        const { application: newApplication } = await loanResponse.json();

        // 3. ENVOYER L'EMAIL avec toutes les données du formulaire
        const emailPayload = flattenForEmail({
          ...formData,
          loanApplicationId: newApplication.id,
          submittedAt: new Date().toISOString(),
          currentStep: currentStep,
          totalSteps: totalSteps,
          eligibilityScore: eligibility.score,
          eligibilityStatus: eligibility.summary
        });

        await submitFormEmail({
          formName: 'Loan Application - Demande de Prêt',
          payload: emailPayload,
          replyTo: formData.email || formData.telefon
        });
        
        // 4. Afficher le succès avec notification premium
        success(
          'Demande soumise avec succès !',
          `Votre demande de prêt a été enregistrée. Référence : ${newApplication.id}`,
          {
            details: [
              `Score d'éligibilité : ${eligibility.score}/100`,
              `Statut : ${eligibility.summary}`,
              'Vous recevrez une réponse sous 24h'
            ],
            duration: 8000
          }
        );
        
        // 5. Réinitialiser le formulaire
        setFormData({
          anrede: '',
          vorname: '',
          nachname: '',
          geburtsdatum: '',
          geburtsort: '',
          staatsangehoerigkeit: '',
          familienstand: '',
          anzahlKinder: '',
          strasse: '',
          hausnummer: '',
          plz: '',
          ort: '',
          land: '',
          wohnsituation: '',
          wohnhaftSeit: '',
          beruf: '',
          arbeitgeber: '',
          beschaeftigungSeit: '',
          beschaeftigungsart: '',
          branche: '',
          monatsgehaltNetto: '',
          weitereEinkuenfte: '',
          kontoinhaber: '',
          iban: '',
          bic: '',
          kreditinstitut: '',
          kreditbetrag: '',
          kreditlaufzeit: '',
          kreditzweck: '',
          ratenzahlung: '',
          bestehendeKredite: '',
          monatlicheBelastung: '',
          email: '',
          telefon: '',
          mobil: '',
          datenschutz: false,
          agb: false,
          schufaEinverstaendnis: false,
          werbeeinverstaendnis: false
        });
        
        setCurrentStep(1);
        setIsSubmitting(false);
        
      } catch (error) {
        alert(error.message || 'Unable to submit. Please try again.');
        error(
          'Échec de la soumission',
          'Une erreur est survenue lors de l\'envoi de votre demande',
          {
            details: [error.message || 'Veuillez réessayer plus tard'],
            duration: 6000
          }
        );
      }
    }
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center">
              <User className="w-6 h-6 mr-3 text-blue-600" />
              {t('pages.loan_request.personal_data')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t('pages.register.anrede')} *
                </label>
                <select
                  name="anrede"
                  value={formData.anrede}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.anrede ? 'border-red-500' : 'border-slate-300'
                  }`}
                >
                  <option value="">Bitte wählen</option>
                  <option value="herr">Herr</option>
                  <option value="frau">Frau</option>
                  <option value="divers">Divers</option>
                </select>
                {errors.anrede && <p className="text-red-500 text-sm mt-1">{errors.anrede}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t('pages.register.vorname')} *
                </label>
                <input
                  type="text"
                  name="vorname"
                  value={formData.vorname}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.vorname ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="Max"
                />
                {errors.vorname && <p className="text-red-500 text-sm mt-1">{errors.vorname}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t('pages.register.nachname')} *
                </label>
                <input
                  type="text"
                  name="nachname"
                  value={formData.nachname}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.nachname ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="Mustermann"
                />
                {errors.nachname && <p className="text-red-500 text-sm mt-1">{errors.nachname}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t('pages.register.geburtsdatum')} *
                </label>
                <input
                  type="date"
                  name="geburtsdatum"
                  value={formData.geburtsdatum}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.geburtsdatum ? 'border-red-500' : 'border-slate-300'
                  }`}
                />
                {errors.geburtsdatum && <p className="text-red-500 text-sm mt-1">{errors.geburtsdatum}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Geburtsort
                </label>
                <input
                  type="text"
                  name="geburtsort"
                  value={formData.geburtsort}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Berlin"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t('pages.register.staatsangehoerigkeit')} *
                </label>
                <input
                  type="text"
                  name="staatsangehoerigkeit"
                  value={formData.staatsangehoerigkeit}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.staatsangehoerigkeit ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="Deutsch"
                />
                {errors.staatsangehoerigkeit && <p className="text-red-500 text-sm mt-1">{errors.staatsangehoerigkeit}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t('pages.register.familienstand')}
                </label>
                <select
                  name="familienstand"
                  value={formData.familienstand}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Bitte wählen</option>
                  <option value="ledig">Ledig</option>
                  <option value="verheiratet">Verheiratet</option>
                  <option value="verwitwet">Verwitwet</option>
                  <option value="geschieden">Geschieden</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Anzahl Kinder
                </label>
                <input
                  type="number"
                  name="anzahlKinder"
                  value={formData.anzahlKinder}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="0"
                  min="0"
                />
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center">
              <Home className="w-6 h-6 mr-3 text-blue-600" />
              {t('pages.loan_request.address')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t('pages.register.strasse')} *
                </label>
                <input
                  type="text"
                  name="strasse"
                  value={formData.strasse}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.strasse ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="Hauptstraße"
                />
                {errors.strasse && <p className="text-red-500 text-sm mt-1">{errors.strasse}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t('pages.register.hausnummer')} *
                </label>
                <input
                  type="text"
                  name="hausnummer"
                  value={formData.hausnummer}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.hausnummer ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="123"
                />
                {errors.hausnummer && <p className="text-red-500 text-sm mt-1">{errors.hausnummer}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t('pages.register.plz')} *
                </label>
                <input
                  type="text"
                  name="plz"
                  value={formData.plz}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.plz ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="10115"
                  maxLength="5"
                />
                {errors.plz && <p className="text-red-500 text-sm mt-1">{errors.plz}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t('pages.register.ort')} *
                </label>
                <input
                  type="text"
                  name="ort"
                  value={formData.ort}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.ort ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="Berlin"
                />
                {errors.ort && <p className="text-red-500 text-sm mt-1">{errors.ort}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t('pages.register.country')}
                </label>
                <select
                  name="land"
                  value={formData.land}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="deutschland">Deutschland</option>
                  <option value="österreich">Österreich</option>
                  <option value="schweiz">Schweiz</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t('pages.register.wohnsituation')}
                </label>
                <select
                  name="wohnsituation"
                  value={formData.wohnsituation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Bitte wählen</option>
                  <option value="miete">Zur Miete</option>
                  <option value="eigentum">Im Eigentum</option>
                  <option value="bei_eltern">Bei Eltern</option>
                  <option value="wohngemeinschaft">Wohngemeinschaft</option>
                </select>
              </div>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center">
              <Briefcase className="w-6 h-6 mr-3 text-blue-600" />
              {t('pages.loan_request.employment')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Beruf *
                </label>
                <input
                  type="text"
                  name="beruf"
                  value={formData.beruf}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.beruf ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="Softwareentwickler"
                />
                {errors.beruf && <p className="text-red-500 text-sm mt-1">{errors.beruf}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Arbeitgeber *
                </label>
                <input
                  type="text"
                  name="arbeitgeber"
                  value={formData.arbeitgeber}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.arbeitgeber ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="Continental Bank Europe"
                />
                {errors.arbeitgeber && <p className="text-red-500 text-sm mt-1">{errors.arbeitgeber}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Beschäftigung seit
                </label>
                <input
                  type="month"
                  name="beschaeftigungSeit"
                  value={formData.beschaeftigungSeit}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Beschäftigungsart
                </label>
                <select
                  name="beschaeftigungsart"
                  value={formData.beschaeftigungsart}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Bitte wählen</option>
                  <option value="unbefristet">Unbefristet</option>
                  <option value="befristet">Befristet</option>
                  <option value="selbstaendig">Selbstständig</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Branche
                </label>
                <select
                  name="branche"
                  value={formData.branche}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Bitte wählen</option>
                  <option value="it">IT & Telekommunikation</option>
                  <option value="finanzen">Finanzdienstleistungen</option>
                  <option value="industrie">Industrie</option>
                  <option value="handel">Handel</option>
                  <option value="dienstleistung">Dienstleistungen</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Monatsgehalt (netto) *
                </label>
                <input
                  type="number"
                  name="monatsgehaltNetto"
                  value={formData.monatsgehaltNetto}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.monatsgehaltNetto ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="3500"
                />
                {errors.monatsgehaltNetto && <p className="text-red-500 text-sm mt-1">{errors.monatsgehaltNetto}</p>}
              </div>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center">
              <CreditCard className="w-6 h-6 mr-3 text-blue-600" />
              {t('pages.loan_request.bank_connection')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Kontoinhaber *
                </label>
                <input
                  type="text"
                  name="kontoinhaber"
                  value={formData.kontoinhaber}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.kontoinhaber ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="Max Mustermann"
                />
                {errors.kontoinhaber && <p className="text-red-500 text-sm mt-1">{errors.kontoinhaber}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  IBAN *
                </label>
                <input
                  type="text"
                  name="iban"
                  value={formData.iban}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.iban ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="DE89370400440532013000"
                />
                {errors.iban && <p className="text-red-500 text-sm mt-1">{errors.iban}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  BIC
                </label>
                <input
                  type="text"
                  name="bic"
                  value={formData.bic}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="DEUTDEFF"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Kreditinstitut
                </label>
                <input
                  type="text"
                  name="kreditinstitut"
                  value={formData.kreditinstitut}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Deutsche Bank"
                />
              </div>
            </div>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center">
              <Calculator className="w-6 h-6 mr-3 text-blue-600" />
              {t('pages.loan_request.specifications')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Kreditbetrag (€) *
                </label>
                <input
                  type="number"
                  name="kreditbetrag"
                  value={formData.kreditbetrag}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.kreditbetrag ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="10000"
                  min="1000"
                  max="50000"
                />
                {errors.kreditbetrag && <p className="text-red-500 text-sm mt-1">{errors.kreditbetrag}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Laufzeit (Monate) *
                </label>
                <select
                  name="kreditlaufzeit"
                  value={formData.kreditlaufzeit}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.kreditlaufzeit ? 'border-red-500' : 'border-slate-300'
                  }`}
                >
                  <option value="">Bitte wählen</option>
                  <option value="12">12 Monate</option>
                  <option value="24">24 Monate</option>
                  <option value="36">36 Monate</option>
                  <option value="48">48 Monate</option>
                  <option value="60">60 Monate</option>
                  <option value="72">72 Monate</option>
                  <option value="84">84 Monate</option>
                </select>
                {errors.kreditlaufzeit && <p className="text-red-500 text-sm mt-1">{errors.kreditlaufzeit}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Kreditzweck *
                </label>
                <select
                  name="kreditzweck"
                  value={formData.kreditzweck}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.kreditzweck ? 'border-red-500' : 'border-slate-300'
                  }`}
                >
                  <option value="">Bitte wählen</option>
                  <option value="autokauf">Autokauf</option>
                  <option value="renovierung">Renovierung</option>
                  <option value="reise">Reise</option>
                  <option value="ausbildung">Ausbildung</option>
                  <option value="freizeit">Freizeit</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
                {errors.kreditzweck && <p className="text-red-500 text-sm mt-1">{errors.kreditzweck}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Gewünschte Rate (€)
                </label>
                <input
                  type="number"
                  name="ratenzahlung"
                  value={formData.ratenzahlung}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="250"
                />
              </div>
            </div>
          </motion.div>
        );

      case 6:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center">
              <AlertCircle className="w-6 h-6 mr-3 text-blue-600" />
              {t('pages.loan_request.commitments')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Bestehende Kredite
                </label>
                <select
                  name="bestehendeKredite"
                  value={formData.bestehendeKredite}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Bitte wählen</option>
                  <option value="keine">Keine</option>
                  <option value="einer">Ein bestehender Kredit</option>
                  <option value="mehrere">Mehrere Kredite</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Monatliche Belastung (€)
                </label>
                <input
                  type="number"
                  name="monatlicheBelastung"
                  value={formData.monatlicheBelastung}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="500"
                />
              </div>
            </div>
          </motion.div>
        );

      case 7:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center">
              <Phone className="w-6 h-6 mr-3 text-blue-600" />
              {t('pages.loan_request.contact_data')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.email ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="max.mustermann@email.de"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.telefon ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="+49 30 12345678"
                />
                {errors.telefon && <p className="text-red-500 text-sm mt-1">{errors.telefon}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Mobiltelefon
                </label>
                <input
                  type="tel"
                  name="mobil"
                  value={formData.mobil}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+49 170 12345678"
                />
              </div>
            </div>
          </motion.div>
        );

      case 8:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-blue-600" />
              {t('pages.loan_request.consent')}
            </h3>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-4">{t('pages.loan_request.important_notes')}</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ihre Daten werden sicher und verschlüsselt übertragen.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Eine SCHUFA-Auskunft wird zur Bonitätsprüfung durchgeführt.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Die Bearbeitung Ihrer Anfrage dauert in der Regel 24-48 Stunden.</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="datenschutz"
                    checked={formData.datenschutz}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <span className="text-sm text-slate-600">
                    Ich stimme der <Link href="/datenschutz" className="text-blue-600 hover:underline">Datenschutzerklärung</Link> zu. Meine Daten werden zur Bearbeitung meiner Kreditanfrage verwendet.
                  </span>
                </label>
                {errors.datenschutz && <p className="text-red-500 text-sm mt-1">{errors.datenschutz}</p>}
                
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="agb"
                    checked={formData.agb}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <span className="text-sm text-slate-600">
                    Ich habe die <Link href="/agb" className="text-blue-600 hover:underline">Allgemeinen Geschäftsbedingungen</Link> gelesen und akzeptiere diese.
                  </span>
                </label>
                {errors.agb && <p className="text-red-500 text-sm mt-1">{errors.agb}</p>}
                
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="schufaEinverstaendnis"
                    checked={formData.schufaEinverstaendnis}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <span className="text-sm text-slate-600">
                    Ich bin damit einverstanden, dass eine SCHUFA-Auskunft zur Prüfung meiner Kreditwürdigkeit eingeholt wird.
                  </span>
                </label>
                
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="werbeeinverstaendnis"
                    checked={formData.werbeeinverstaendnis}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <span className="text-sm text-slate-600">
                    Ich möchte Informationen über Angebote und Produkte von Continental Bank Europe per E-Mail erhalten.
                  </span>
                </label>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
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
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('common.back_to_home')}
            </Link>
            <h1 className="text-5xl font-light text-slate-900 mb-6">
              {t('pages.loan_request.title')}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl">
              {t('pages.loan_request.subtitle')}
            </p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-slate-600">
                {t('common.step')} {currentStep} {t('common.of')} {totalSteps}
              </span>
              <span className="text-sm text-slate-500">
                {Math.round((currentStep / totalSteps) * 100)}% {t('common.completed')}
              </span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Trust Badges Strip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="max-w-4xl mx-auto mb-6 bg-blue-50/50 rounded-xl px-4 py-3 border border-blue-100/50"
          >
            <div className="flex flex-wrap justify-center items-center gap-4 text-xs md:text-sm font-medium text-slate-600">
              <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-white rounded-lg shadow-sm">
                <Shield className="w-4 h-4 text-green-500" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-white rounded-lg shadow-sm">
                <Award className="w-4 h-4 text-blue-500" />
                <span>BaFin Reguliert</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-white rounded-lg shadow-sm">
                <Lock className="w-4 h-4 text-slate-500" />
                <span>Datenschutz (GDPR)</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
              <form onSubmit={handleSubmit} className="p-8">
                <AnimatePresence mode="wait">
                  {renderStep()}
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200">
                    <button
                      type="button"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                      className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {t('common.previous')}
                    </button>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-sm text-slate-500">
                        {t('common.required_fields')}
                      </div>
                      
                      {currentStep < totalSteps ? (
                        <button
                          type="button"
                          onClick={nextStep}
                          className="px-8 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium"
                        >
                          {t('common.next')}
                        </button>
                    ) : (
                        <button
                          type="submit"
                          className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 font-medium shadow-lg"
                        >
                          <span className="flex items-center">
                            <FileText className="w-5 h-5 mr-2" />
                            {t('pages.loan_request.submit')}
                          </span>
                        </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">
                {t('pages.loan_request.need_help')}
              </h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <div className="flex items-center text-slate-700">
                  <Phone className="w-5 h-5 mr-2 text-blue-600" />
                  <span>+49 69 123456789</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <Mail className="w-5 h-5 mr-2 text-blue-600" />
                  <span>kredit@continentalbank.eu</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                  <span>Unsere Filialen</span>
                </div>
              </div>
              <p className="text-sm text-slate-600 mt-4">
                {t('pages.loan_request.business_hours')}
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
