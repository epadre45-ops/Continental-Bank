import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calculator, DollarSign, Home, Car, Wrench, FileText, ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

import { useTranslation } from '../../lib/i18n';
export default function LoanCalculator() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    amount: '',
    duration: '',
    rate: '',
    type: 'fixed'
  });

  const [results, setResults] = useState(null);

  const calculateLoan = () => {
    const principal = parseFloat(formData.amount);
    const years = parseFloat(formData.duration);
    const annualRate = parseFloat(formData.rate);
    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = years * 12;

    if (!principal || !years || !annualRate) {
      alert('Veuillez remplir tous les champs obligatoires pour calculer votre prêt.');
      return;
    }

    if (principal < 1000 || principal > 1000000) {
      alert('Le montant du prêt doit être entre 1 000 et 1 000 000.');
      return;
    }

    if (annualRate < 0.1 || annualRate > 20) {
      alert('Le taux d\'intérêt doit être entre 0.1% et 20%.');
      return;
    }

    // Calcul mensualité (formule standard)
    const monthlyPayment = principal * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - principal;

    // Créer tableau d'amortissement simplifié
    const amortizationSchedule = [];
    let remainingBalance = principal;
    
    for (let month = 1; month <= Math.min(numberOfPayments, 12); month++) {
      const interestPayment = remainingBalance * monthlyRate;
      const principalPayment = monthlyPayment - interestPayment;
      remainingBalance -= principalPayment;
      
      amortizationSchedule.push({
        month,
        payment: monthlyPayment,
        principal: principalPayment,
        interest: interestPayment,
        balance: Math.max(0, remainingBalance)
      });
    }

    setResults({
      monthlyPayment,
      totalPayment,
      totalInterest,
      amortizationSchedule,
      principal,
      annualRate,
      years
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const resetForm = () => {
    setFormData({
      amount: '',
      duration: '',
      rate: '',
      type: 'fixed'
    });
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        {/* Hero Section with Background Image */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1560518883-ce2364c5eb2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 opacity-85"></div>
          </div>
          <div className="relative container mx-auto px-6 pt-32 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />{t('loan.back_to_home')}
              </Link>
              <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
                {t('loan.title')}<span className="text-blue-300 font-medium">{t('loan.loan')}</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                {t('loan.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <button
                  onClick={() => document.getElementById('mortgage-calculator').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate Your Loan
                </button>
                <Link 
                  href="/demande-pret" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all flex items-center justify-center"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="mortgage-calculator" className="py-20">
          <div className="container mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200"
            >
              <h2 className="text-2xl font-medium text-slate-900 mb-6 flex items-center">
                <Calculator className="w-6 h-6 mr-2 text-blue-600" />{t('loan.form.title')}</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {t('loan.form.amount')}
                  </label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="200 000"
                    min="1000"
                    max="1000000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {t('loan.form.duration')}
                  </label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">{t('loan.form.select_duration')}</option>
                    <option value="10">10 {t('common.years')}</option>
                    <option value="15">15 {t('common.years')}</option>
                    <option value="20">20 {t('common.years')}</option>
                    <option value="25">25 {t('common.years')}</option>
                    <option value="30">30 {t('common.years')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {t('loan.form.interest_rate')}
                  </label>
                  <input
                    type="number"
                    name="rate"
                    value={formData.rate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="3.5"
                    step="0.1"
                    min="0.1"
                    max="10"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('loan.form.type')}</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="type"
                        value="fixed"
                        checked={formData.type === 'fixed'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span>{t('loan.form.fixed_rate')}</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="type"
                        value="variable"
                        checked={formData.type === 'variable'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span>{t('loan.form.variable_rate')}</span>
                    </label>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={calculateLoan}
                    className="flex-1 bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium flex items-center justify-center"
                  >
                    <FileText className="w-5 h-5 mr-2" />{t('loan.form.calculate')}</button>
                  <button
                    onClick={resetForm}
                    className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
                  >{t('loan.form.reset')}</button>
                </div>
              </div>
            </motion.div>

            {/* Résultats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              {results ? (
                <>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
                    <h3 className="text-2xl font-medium text-slate-900 mb-6 flex items-center">
                      <DollarSign className="w-6 h-6 mr-2 text-green-600" />{t('loan.results.title')}</h3>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                        <span className="text-slate-600">{t('loan.results.monthly_payment')}</span>
                        <span className="text-2xl font-bold text-green-600">
                          €{results.monthlyPayment.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                        <span className="text-slate-600">{t('loan.results.total_repayment')}</span>
                        <span className="text-xl font-bold text-slate-900">
                          €{results.totalPayment.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                        <span className="text-slate-600">{t('loan.results.total_interest')}</span>
                        <span className="text-xl font-bold text-orange-600">
                          €{results.totalInterest.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                        <span className="text-slate-600">{t('loan.results.effort_rate')}</span>
                        <span className="text-xl font-bold text-slate-900">
                          {((results.monthlyPayment / 3000) * 100).toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Tableau d'amortissement */}
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
                    <h4 className="text-lg font-medium text-slate-900 mb-4">
                      {t('loan.results.amortization_schedule')}
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">{t('loan.table.month')}</th>
                            <th className="text-right py-2">{t('loan.table.payment')}</th>
                            <th className="text-right py-2">{t('loan.table.principal')}</th>
                            <th className="text-right py-2">{t('loan.table.interest')}</th>
                            <th className="text-right py-2">{t('loan.table.remaining_balance')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(results?.amortizationSchedule || []).map((payment) => (
                            <tr key={payment.month} className="border-b">
                              <td className="py-2">{payment.month}</td>
                              <td className="text-right py-2">
                                €{payment.payment.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                              </td>
                              <td className="text-right py-2">
                                €{payment.principal.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                              </td>
                              <td className="text-right py-2">
                                €{payment.interest.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                              </td>
                              <td className="text-right py-2">
                                €{payment.balance.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              ) : (
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-8 h-8 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-medium text-slate-900 mb-2">{t('loan.empty_state.title')}</h3>
                  <p className="text-slate-600">{t('loan.empty_state.description')}</p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Types de prêts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <h2 className="text-2xl font-medium text-slate-900 mb-6">{t('loan.loan_types.title')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/calculators/mortgage" className="border border-slate-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer group">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <Home className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">{t('loan.loan_types.mortgage.title')}</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {t('loan.loan_types.mortgage.description')}
                  </p>
                  <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
                    Learn More <ArrowUpRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
                <Link href="/calculators/auto-loan" className="border border-slate-200 rounded-lg p-6 hover:border-green-300 hover:shadow-lg transition-all cursor-pointer group">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                    <Car className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">{t('loan.loan_types.auto.title')}</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {t('loan.loan_types.auto.description')}
                  </p>
                  <div className="flex items-center text-green-600 text-sm font-medium group-hover:text-green-700">
                    Learn More <ArrowUpRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
                <Link href="/calculators/home-improvement" className="border border-slate-200 rounded-lg p-6 hover:border-purple-300 hover:shadow-lg transition-all cursor-pointer group">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                    <Wrench className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">{t('loan.loan_types.works.title')}</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {t('loan.loan_types.works.description')}
                  </p>
                  <div className="flex items-center text-purple-600 text-sm font-medium group-hover:text-purple-700">
                    Learn More <ArrowUpRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Section d'action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-2xl shadow-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Prêt à concrétiser votre projet ?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Nos conseillers sont disponibles pour vous accompagner dans votre demande de prêt et vous proposer les meilleures conditions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demande-pret" className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Start Application
                </Link>
                <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors inline-flex items-center justify-center">
                  Contacter un conseiller
                </Link>
              </div>
            </div>
          </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
