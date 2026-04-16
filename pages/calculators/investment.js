import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Calculator, Target, PiggyBank, ArrowLeft } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

import { useTranslation } from '../../lib/i18n';
export default function InvestmentCalculator() {
  const { t } = useTranslation('investment');

  const [formData, setFormData] = useState({
    initialAmount: '',
    monthlyContribution: '',
    annualReturn: '',
    investmentPeriod: '',
    compoundFrequency: 'monthly'
  });

  const [results, setResults] = useState(null);

  const calculateInvestment = () => {
    const principal = parseFloat(formData.initialAmount);
    const monthly = parseFloat(formData.monthlyContribution) || 0;
    const annualRate = parseFloat(formData.annualReturn) / 100;
    const years = parseFloat(formData.investmentPeriod);
    const frequency = formData.compoundFrequency;

    if (!principal || !annualRate || !years) {
      alert(t('investment.errors.required_fields'));
      return;
    }

    let n, ratePerPeriod;
    switch (frequency) {
      case 'daily':
        n = 365;
        ratePerPeriod = annualRate / 365;
        break;
      case 'monthly':
        n = 12;
        ratePerPeriod = annualRate / 12;
        break;
      case 'quarterly':
        n = 4;
        ratePerPeriod = annualRate / 4;
        break;
      case 'annually':
        n = 1;
        ratePerPeriod = annualRate;
        break;
      default:
        n = 12;
        ratePerPeriod = annualRate / 12;
    }

    const totalPeriods = years * n;
    const monthlyEquivalent = monthly * 12 / n;

    // Calcul de la valeur future avec capitalisation
    const futureValue = principal * Math.pow(1 + ratePerPeriod, totalPeriods) +
                      monthlyEquivalent * ((Math.pow(1 + ratePerPeriod, totalPeriods) - 1) / ratePerPeriod);

    const totalContributions = principal + (monthly * 12 * years);
    const totalEarnings = futureValue - totalContributions;

    // Projection année par année
    const yearlyProjection = [];
    let currentValue = principal;
    
    for (let year = 1; year <= years; year++) {
      currentValue = currentValue * Math.pow(1 + annualRate, 1) + (monthly * 12) * ((Math.pow(1 + annualRate, 1) - 1) / annualRate);
      yearlyProjection.push({
        year,
        value: currentValue,
        contributions: principal + (monthly * 12 * year),
        earnings: currentValue - (principal + (monthly * 12 * year))
      });
    }

    setResults({
      futureValue,
      totalContributions,
      totalEarnings,
      yearlyProjection,
      annualRate,
      years,
      monthly
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
      initialAmount: '',
      monthlyContribution: '',
      annualReturn: '',
      investmentPeriod: '',
      compoundFrequency: 'monthly'
    });
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />
      
      <main className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 sm:mb-8"
          >
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 sm:mb-6 text-sm sm:text-base">
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />{t('investment.back_to_home')}</Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 mb-4 sm:mb-6">
              {t('investment.title')}<span className="text-blue-900 font-medium">{t('investment.investment')}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl sm:max-w-3xl">{t('investment.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-slate-200"
            >
              <h2 className="text-xl sm:text-2xl font-medium text-slate-900 mb-4 sm:mb-6 flex items-center">
                <Calculator className="w-5 h-5 sm:w-6 sm:h-6 mr-1.5 sm:mr-2 text-blue-600" />{t('investment.form.title')}</h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">
                    {t('investment.form.initial_amount')}
                  </label>
                  <input
                    type="number"
                    name="initialAmount"
                    value={formData.initialAmount}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="10 000"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">
                    {t('investment.form.monthly_contribution')}
                  </label>
                  <input
                    type="number"
                    name="monthlyContribution"
                    value={formData.monthlyContribution}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="500"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">
                    {t('investment.form.annual_return')}
                  </label>
                  <input
                    type="number"
                    name="annualReturn"
                    value={formData.annualReturn}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="7"
                    step="0.1"
                    min="0"
                    max="30"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">
                    {t('investment.form.duration')}
                  </label>
                  <select
                    name="investmentPeriod"
                    value={formData.investmentPeriod}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  >
                    <option value="">{t('investment.form.select_duration')}</option>
                    <option value="5">5 {t('common.years')}</option>
                    <option value="10">10 {t('common.years')}</option>
                    <option value="15">15 {t('common.years')}</option>
                    <option value="20">20 {t('common.years')}</option>
                    <option value="25">25 {t('common.years')}</option>
                    <option value="30">30 {t('common.years')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">{t('investment.form.compound_frequency')}</label>
                  <select
                    name="compoundFrequency"
                    value={formData.compoundFrequency}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  >
                    <option value="daily">{t('investment.form.daily')}</option>
                    <option value="monthly">{t('investment.form.monthly')}</option>
                    <option value="quarterly">{t('investment.form.quarterly')}</option>
                    <option value="annually">{t('investment.form.annually')}</option>
                  </select>
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <button
                    onClick={calculateInvestment}
                    className="flex-1 bg-blue-900 text-white py-3 sm:py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium flex items-center justify-center text-sm sm:text-base"
                  >
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />{t('investment.form.calculate')}</button>
                  <button
                    onClick={resetForm}
                    className="px-4 sm:px-6 py-3 sm:py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium text-sm sm:text-base"
                  >{t('investment.form.reset')}</button>
                </div>
              </div>
            </motion.div>

            {/* Résultats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4 sm:space-y-6"
            >
              {results ? (
                <>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-6 md:p-8 rounded-2xl border border-purple-200">
                    <h3 className="text-xl sm:text-2xl font-medium text-slate-900 mb-4 sm:mb-6 flex items-center">
                      <Target className="w-5 h-5 sm:w-6 sm:h-6 mr-1.5 sm:mr-2 text-purple-600" />{t('investment.results.title')}</h3>
                    
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex justify-between items-center p-3 sm:p-4 bg-white rounded-lg">
                        <span className="text-sm sm:text-base text-slate-600">{t('investment.results.final_value')}</span>
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-purple-600">
                          €{results.futureValue.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 sm:p-4 bg-white rounded-lg">
                        <span className="text-sm sm:text-base text-slate-600">{t('investment.results.total_contributions')}</span>
                        <span className="text-base sm:text-lg md:text-xl font-bold text-slate-900">
                          €{results.totalContributions.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 sm:p-4 bg-white rounded-lg">
                        <span className="text-sm sm:text-base text-slate-600">{t('investment.results.total_earnings')}</span>
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-green-600">
                          €{results.totalEarnings.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 sm:p-4 bg-white rounded-lg">
                        <span className="text-sm sm:text-base text-slate-600">{t('investment.results.total_return')}</span>
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-green-600">
                          {((results.totalEarnings / results.totalContributions) * 100).toFixed(2)}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Graphique de projection */}
                  <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-slate-200">
                    <h4 className="text-base sm:text-lg font-medium text-slate-900 mb-3 sm:mb-4">{t('investment.results.year_by_year')}</h4>
                    <div className="space-y-2">
                      {(results?.yearlyProjection || []).map((year) => (
                        <div key={year.year} className="flex items-center">
                          <span className="w-10 sm:w-12 text-xs sm:text-sm text-slate-600">{t('common.year')} {year.year}</span>
                          <div className="flex-1 mx-2 sm:mx-4">
                            <div className="bg-slate-200 rounded-full h-3 sm:h-4">
                              <div 
                                className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 sm:h-4 rounded-full"
                                style={{ width: `${Math.min((year.value / results.futureValue) * 100, 100)}%` }}
                              ></div>
                            </div>
                          </div>
                          <span className="text-xs sm:text-sm font-medium text-slate-900 w-24 sm:w-32 text-right">
                            €{year.value.toLocaleString('fr-FR', { maximumFractionDigits: 0 })}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-slate-200 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <PiggyBank className="w-6 h-6 sm:w-8 sm:h-8 text-slate-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-900 mb-2">{t('investment.empty_state.title')}</h3>
                  <p className="text-sm sm:text-base text-slate-600">{t('investment.empty_state.description')}</p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Informations sur les intérêts composés */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 sm:mt-12 md:mt-16"
          >
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-slate-200">
              <h2 className="text-xl sm:text-2xl font-medium text-slate-900 mb-4 sm:mb-6">{t('investment.compound_interest.title')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-slate-900 mb-2 sm:mb-3">{t('investment.compound_interest.how_it_works')}</h3>
                  <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4">
                    {t('investment.compound_interest.description')}
                  </p>
                  <div className="bg-slate-50 p-3 sm:p-4 rounded-lg">
                    <p className="text-xs sm:text-sm font-mono text-slate-700">
                      {t('investment.compound_interest.formula')}
                    </p>
                    <p className="text-[10px] sm:text-xs text-slate-500 mt-1.5 sm:mt-2">{t('investment.compound_interest.formula_legend')}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-slate-900 mb-2 sm:mb-3">{t('investment.example.title')}</h3>
                  <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4">{t('investment.example.description')}</p>
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm sm:text-base text-slate-600">{t('investment.example.without_monthly')}</span>
                      <span className="font-medium text-sm sm:text-base">38 697€</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm sm:text-base text-slate-600">{t('investment.example.with_monthly')}</span>
                      <span className="font-medium text-sm sm:text-base">103 767€</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm sm:text-base text-slate-600">{t('investment.example.total_contributed')}</span>
                      <span className="font-medium text-sm sm:text-base">58 000€</span>
                    </div>
                    <div className="flex justify-between font-medium text-green-600">
                      <span className="text-sm sm:text-base">{t('investment.example.total_earnings')}</span>
                      <span className="text-sm sm:text-base">45 767€</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
