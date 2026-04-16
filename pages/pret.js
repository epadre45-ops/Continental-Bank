import { useState, useEffect } from 'react';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../lib/i18n';
import { 
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
  ArrowLeft,
  CreditCard,
  Building,
  Calendar,
  Euro,
  Users,
  Lock,
  AlertCircle,
  Clock,
  TrendingUp,
  Award,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import { submitFormEmail, flattenForEmail } from '../utils/formSubmit';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Pret() {
  const { t } = useTranslation();
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
    land: 'deutschland',
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
      setIsSubmitting(true);
      
      try {
        // Créer la demande de prêt dans la base de données
        const loanData = {
          ...formData,
          submittedAt: new Date().toISOString(),
          ipAddress: e.target.ipAddress?.value || 'unknown',
          userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'SSR'
        };

        try {
          await submitFormEmail({
            formName: 'Loan Application (pret)',
            payload: flattenForEmail(loanData),
            replyTo: formData.email
          });
        } catch (emailError) {
          console.error('Email submission failed:', emailError);
          // Continue with database submission even if email fails
        }

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

        // Afficher le succès
        alert(`Ihre Kreditanfrage wurde erfolgreich übermittelt! Antragsnummer: ${newApplication.id}. Wir melden uns innerhalb von 24 Stunden bei Ihnen.`);
        
        // Réinitialiser le formulaire
        setFormData({
          anrede: '',
          vorname: '',
          nachname: '',
          geburtsdatum: '',
          geburtsort: '',
          staatsangehoerigkeit: '',
          email: '',
          telefon: '',
          strasse: '',
          hausnummer: '',
          plz: '',
          stadt: '',
          land: '',
          beschaeftigung: '',
          arbeitgeber: '',
          beruf: '',
          einkommen: '',
          weitere_einkuenfte: '',
          ausgaben: '',
          kreditbetrag: '',
          laufzeit: '',
          verwendungszweck: '',
          kontoinhaber: '',
          iban: '',
          bic: '',
          bank: ''
        });
        
        setCurrentStep(1);
        
      } catch (error) {
        alert(error.message || 'Unable to submit. Please try again.');
      }
      
      setIsSubmitting(false);
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
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">{t('pret_personliche_daten')}</h3>
                <p className="text-slate-600">{t('pret_grundlegende_informationen_ihrer_pers')}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_anrede')}<span className="text-red-500">*</span>
                </label>
                <select
                  name="anrede"
                  value={formData.anrede}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.anrede ? 'border-red-500' : 'border-slate-300'
                  }`}
                >
                  <option value="">{t('pret_bitte_wahlen')}</option>
                  <option value="herr">{t('pret_herr')}</option>
                  <option value="frau">{t('pret_frau')}</option>
                  <option value="divers">{t('pret_divers')}</option>
                </select>
                {errors.anrede && <p className="text-red-500 text-sm mt-1">{errors.anrede}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_vorname')}<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="vorname"
                  value={formData.vorname}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.vorname ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="Max"
                />
                {errors.vorname && <p className="text-red-500 text-sm mt-1">{errors.vorname}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_nachname')}<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="nachname"
                  value={formData.nachname}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.nachname ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="Mustermann"
                />
                {errors.nachname && <p className="text-red-500 text-sm mt-1">{errors.nachname}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_geburtsdatum')}<span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="geburtsdatum"
                  value={formData.geburtsdatum}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.geburtsdatum ? 'border-red-500' : 'border-slate-300'
                  }`}
                />
                {errors.geburtsdatum && <p className="text-red-500 text-sm mt-1">{errors.geburtsdatum}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_geburtsort')}</label>
                <input
                  type="text"
                  name="geburtsort"
                  value={formData.geburtsort}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Berlin"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_staatsangehorigkeit')}<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="staatsangehoerigkeit"
                  value={formData.staatsangehoerigkeit}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.staatsangehoerigkeit ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="Deutsch"
                />
                {errors.staatsangehoerigkeit && <p className="text-red-500 text-sm mt-1">{errors.staatsangehoerigkeit}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_familienstand')}</label>
                <select
                  name="familienstand"
                  value={formData.familienstand}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">{t('pret_bitte_wahlen')}</option>
                  <option value="ledig">{t('pret_ledig')}</option>
                  <option value="verheiratet">{t('pret_verheiratet')}</option>
                  <option value="verwitwet">{t('pret_verwitwet')}</option>
                  <option value="geschieden">{t('pret_geschieden')}</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_anzahl_kinder')}</label>
                <input
                  type="number"
                  name="anzahlKinder"
                  value={formData.anzahlKinder}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">{t('loan_form.address_title')}</h3>
                <p className="text-slate-600">{t('loan_form.address_subtitle')}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_stra')}<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="strasse"
                  value={formData.strasse}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.strasse ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="Hauptstraße"
                />
                {errors.strasse && <p className="text-red-500 text-sm mt-1">{errors.strasse}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_hausnummer')}<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="hausnummer"
                  value={formData.hausnummer}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.hausnummer ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="123"
                />
                {errors.hausnummer && <p className="text-red-500 text-sm mt-1">{errors.hausnummer}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_plz')}<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="plz"
                  value={formData.plz}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.plz ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="10115"
                  maxLength="5"
                />
                {errors.plz && <p className="text-red-500 text-sm mt-1">{errors.plz}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_ort')}<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="ort"
                  value={formData.ort}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.ort ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="Berlin"
                />
                {errors.ort && <p className="text-red-500 text-sm mt-1">{errors.ort}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_land')}</label>
                <select
                  name="land"
                  value={formData.land}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="deutschland">{t('pret_deutschland')}</option>
                  <option value="österreich">{t('pret_osterreich')}</option>
                  <option value="schweiz">{t('pret_schweiz')}</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_wohnsituation')}</label>
                <select
                  name="wohnsituation"
                  value={formData.wohnsituation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">{t('pret_bitte_wahlen')}</option>
                  <option value="miete">{t('pret_zur_miete')}</option>
                  <option value="eigentum">{t('pret_eigentum')}</option>
                  <option value="bei_eltern">{t('pret_bei_eltern')}</option>
                  <option value="wohngemeinschaft">{t('pret_wohngemeinschaft')}</option>
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
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">{t('pret_berufliche_angaben')}</h3>
                <p className="text-slate-600">{t('pret_ihre_berufliche_situation')}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_beruf')}<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="beruf"
                  value={formData.beruf}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.beruf ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="Softwareentwickler"
                />
                {errors.beruf && <p className="text-red-500 text-sm mt-1">{errors.beruf}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_arbeitgeber')}<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="arbeitgeber"
                  value={formData.arbeitgeber}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.arbeitgeber ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="Continental Bank Europe"
                />
                {errors.arbeitgeber && <p className="text-red-500 text-sm mt-1">{errors.arbeitgeber}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_beschaftigung_seit')}</label>
                <input
                  type="month"
                  name="beschaeftigungSeit"
                  value={formData.beschaeftigungSeit}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_beschaftigungsart')}</label>
                <select
                  name="beschaeftigungsart"
                  value={formData.beschaeftigungsart}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">{t('pret_bitte_wahlen')}</option>
                  <option value="unbefristet">{t('pret_unbefristet')}</option>
                  <option value="befristet">{t('pret_befristet')}</option>
                  <option value="selbstaendig">{t('pret_selbststandig')}</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_branche')}</label>
                <select
                  name="branche"
                  value={formData.branche}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">{t('pret_bitte_wahlen')}</option>
                  <option value="it">{t('pret_telekommunikation')}</option>
                  <option value="finanzen">{t('pret_finanzdienstleistungen')}</option>
                  <option value="industrie">{t('pret_industrie')}</option>
                  <option value="handel">{t('pret_handel')}</option>
                  <option value="dienstleistung">{t('pret_dienstleistungen')}</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Monatsgehalt (netto) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="monatsgehaltNetto"
                  value={formData.monatsgehaltNetto}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
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
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">{t('pret_bankverbindung')}</h3>
                <p className="text-slate-600">{t('pret_ihre_kontodaten_fur_die')}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_kontoinhaber')}<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="kontoinhaber"
                  value={formData.kontoinhaber}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.kontoinhaber ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="Max Mustermann"
                />
                {errors.kontoinhaber && <p className="text-red-500 text-sm mt-1">{errors.kontoinhaber}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_iban')}<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="iban"
                  value={formData.iban}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.iban ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="DE89370400440532013000"
                />
                {errors.iban && <p className="text-red-500 text-sm mt-1">{errors.iban}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_bic')}</label>
                <input
                  type="text"
                  name="bic"
                  value={formData.bic}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="DEUTDEFF"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_kreditinstitut')}</label>
                <input
                  type="text"
                  name="kreditinstitut"
                  value={formData.kreditinstitut}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">{t('pret_kreditspezifikation')}</h3>
                <p className="text-slate-600">{t('pret_details_ihrem_kreditwunsch')}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Kreditbetrag (€) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="kreditbetrag"
                  value={formData.kreditbetrag}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
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
                  Laufzeit (Monate) <span className="text-red-500">*</span>
                </label>
                <select
                  name="kreditlaufzeit"
                  value={formData.kreditlaufzeit}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.kreditlaufzeit ? 'border-red-500' : 'border-slate-300'
                  }`}
                >
                  <option value="">{t('pret_bitte_wahlen')}</option>
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
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_kreditzweck')}<span className="text-red-500">*</span>
                </label>
                <select
                  name="kreditzweck"
                  value={formData.kreditzweck}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.kreditzweck ? 'border-red-500' : 'border-slate-300'
                  }`}
                >
                  <option value="">{t('pret_bitte_wahlen')}</option>
                  <option value="autokauf">{t('pret_autokauf')}</option>
                  <option value="renovierung">{t('pret_renovierung')}</option>
                  <option value="reise">{t('pret_reise')}</option>
                  <option value="ausbildung">{t('pret_ausbildung')}</option>
                  <option value="freizeit">{t('pret_freizeit')}</option>
                  <option value="sonstiges">{t('pret_sonstiges')}</option>
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
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">{t('pret_bestehende_verpflichtungen')}</h3>
                <p className="text-slate-600">{t('pret_aktuelle_kredite_und_finanzielle')}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_bestehende_kredite')}</label>
                <select
                  name="bestehendeKredite"
                  value={formData.bestehendeKredite}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">{t('pret_bitte_wahlen')}</option>
                  <option value="keine">{t('pret_keine')}</option>
                  <option value="einer">{t('pret_ein_bestehender_kredit')}</option>
                  <option value="mehrere">{t('pret_mehrere_kredite')}</option>
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
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">{t('pret_kontaktdaten')}</h3>
                <p className="text-slate-600">{t('pret_wie_wir_sie_erreichen')}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_mail')}<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.email ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="max.mustermann@email.de"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_telefon')}<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.telefon ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="+49 30 12345678"
                />
                {errors.telefon && <p className="text-red-500 text-sm mt-1">{errors.telefon}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('pret_mobiltelefon')}</label>
                <input
                  type="tel"
                  name="mobil"
                  value={formData.mobil}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">{t('pret_einverstandnisserklarung')}</h3>
                <p className="text-slate-600">{t('pret_ihre_zustimmung_zur_verarbeitung')}</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-semibold text-slate-900 mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-blue-600" />{t('pret_wichtige_informationen')}</h4>
                <div className="space-y-3 text-sm text-slate-700">
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ihre Daten werden sicher und verschlüsselt übertragen.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Eine SCHUFA-Auskunft wird zur Bonitätsprüfung durchgeführt.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Die Bearbeitung Ihrer Anfrage dauert 24-48 Stunden.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Sie haben jederzeit das Recht auf Widerruf und Auskunft.</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <label className="flex items-start space-x-3 p-4 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    name="datenschutz"
                    checked={formData.datenschutz}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <span className="text-sm text-slate-600">{t('pret_ich_stimme_der')}<Link href="/datenschutz" className="text-blue-600 hover:underline font-medium">{t('pret_datenschutzerklarung')}</Link> zu. Meine Daten werden zur Bearbeitung meiner Kreditanfrage verwendet.
                  </span>
                </label>
                {errors.datenschutz && <p className="text-red-500 text-sm mt-1">{errors.datenschutz}</p>}
                
                <label className="flex items-start space-x-3 p-4 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    name="agb"
                    checked={formData.agb}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <span className="text-sm text-slate-600">{t('pret_ich_habe_die')}<Link href="/agb" className="text-blue-600 hover:underline font-medium">{t('pret_allgemeinen_geschaftsbedingungen')}</Link> gelesen und akzeptiere diese.
                  </span>
                </label>
                {errors.agb && <p className="text-red-500 text-sm mt-1">{errors.agb}</p>}
                
                <label className="flex items-start space-x-3 p-4 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
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
                
                <label className="flex items-start space-x-3 p-4 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
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
        {/* Hero Section Premium */}
        <div className="relative h-[400px] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=400&fit=crop&auto=format&q=80"
              alt="German banking and finance"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                className="max-w-4xl"
              >
                <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white/90 text-sm font-medium">{t('pret_schnelle_kreditentscheidung')}</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">{t('pret_ihr')}<span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">{t('pret_kreditantrag')}</span>
                </h1>
                
                <p className="text-xl text-white/80 max-w-3xl mb-8 leading-relaxed">
                  Professionelle Kreditlösungen nach deutschen Bankstandards. 
                  Füllen Sie das Formular aus und erhalten Sie eine schnelle Entscheidung.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-white/90">
                      <Clock className="w-5 h-5 mr-2" />
                      <span className="text-sm">24h Entscheidung</span>
                    </div>
                    <div className="flex items-center text-white/90">
                      <Shield className="w-5 h-5 mr-2" />
                      <span className="text-sm">{t('pret_sicher_verschlusselt')}</span>
                    </div>
                    <div className="flex items-center text-white/90">
                      <Award className="w-5 h-5 mr-2" />
                      <span className="text-sm">{t('pret_deutsche_bankqualitat')}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="container mx-auto px-6 mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-slate-600">
              Schritt {currentStep} von {totalSteps}
            </span>
            <span className="text-sm text-slate-500">
              {Math.round((currentStep / totalSteps) * 100)}% abgeschlossen
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

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="container mx-auto px-6"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
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
                    className="px-6 py-3 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >{t('pret_zuruck')}</button>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-sm text-slate-500">
                      Pflichtfelder sind mit * markiert
                    </div>
                    
                    {currentStep < totalSteps ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                      >{t('pret_weiter')}</button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Wird verarbeitet...</span>
                          </>
                        ) : (
                          <>
                            <FileText className="w-5 h-5" />
                            <span>{t('pret_antrag_absenden')}</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="container mx-auto px-6 mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{t('pret_schnelle_bearbeitung')}</h3>
              <p className="text-slate-600">{t('pret_kreditentscheidung_innerhalb_von_stun')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{t('pret_wettbewerbsfahige_konditionen')}</h3>
              <p className="text-slate-600">{t('pret_tageaktuelle_zinsen_und_flexible')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{t('pret_datensicherheit')}</h3>
              <p className="text-slate-600">{t('pret_verschlusselte_ubertragung_nach_dsgvo')}</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="container mx-auto px-6 mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-3xl p-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">
              Benötigen Sie Hilfe?
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
                <span>{t('pret_unsere_filialen')}</span>
              </div>
            </div>
            <p className="text-sm text-slate-600 mt-4 text-center">
              Mo-Fr: 8:00 - 18:00 Uhr | Wir sind für Sie da!
            </p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
