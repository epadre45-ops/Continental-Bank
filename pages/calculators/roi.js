import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Calculator, DollarSign, Target, ArrowLeft } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

import { useTranslation } from '../../lib/i18n';
export default function ROICalculator() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    initialInvestment: '',
    finalValue: '',
    investmentPeriod: '',
    additionalInvestments: ''
  });

  const [results, setResults] = useState(null);

  const calculateROI = () => {
    const initial = parseFloat(formData.initialInvestment);
    const final = parseFloat(formData.finalValue);
    const period = parseFloat(formData.investmentPeriod);
    const additional = parseFloat(formData.additionalInvestments) || 0;

    if (!initial || !final || !period) {
      alert(t('roi.errors.required_fields'));
      return;
    }

    const totalInvestment = initial + (additional * period);
    const netGain = final - totalInvestment;
    const roi = (netGain / totalInvestment) * 100;
    const annualizedROI = (Math.pow(final / totalInvestment, 1 / period) - 1) * 100;

    setResults({
      totalInvestment,
      netGain,
      roi,
      annualizedROI,
      finalValue: final
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
      initialInvestment: '',
      finalValue: '',
      investmentPeriod: '',
      additionalInvestments: ''
    });
    setResults(null);
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
              <ArrowLeft className="w-4 h-4 mr-2" />{t('roi.back_to_home')}</Link>
            <h1 className="text-5xl font-light text-slate-900 mb-6">{t('roi.title')}<span className="text-blue-900 font-medium">{t('roi.roi')}</span></h1>
            <p className="text-xl text-slate-600 max-w-3xl">{t('roi.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200"
            >
              <h2 className="text-2xl font-medium text-slate-900 mb-6 flex items-center">
                <Calculator className="w-6 h-6 mr-2 text-blue-600" />{t('roi.form.title')}</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {t('roi.form.initial_investment')}
                  </label>
                  <input
                    type="number"
                    name="initialInvestment"
                    value={formData.initialInvestment}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="10 000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {t('roi.form.final_value')}
                  </label>
                  <input
                    type="number"
                    name="finalValue"
                    value={formData.finalValue}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="15 000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {t('roi.form.investment_period')}
                  </label>
                  <input
                    type="number"
                    name="investmentPeriod"
                    value={formData.investmentPeriod}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="5"
                    min="1"
                    max="30"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {t('roi.form.additional_investments')}
                  </label>
                  <input
                    type="number"
                    name="additionalInvestments"
                    value={formData.additionalInvestments}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="1 000"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={calculateROI}
                    className="flex-1 bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium flex items-center justify-center"
                  >
                    <TrendingUp className="w-5 h-5 mr-2" />{t('roi.form.calculate')}</button>
                  <button
                    onClick={resetForm}
                    className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
                  >{t('roi.form.reset')}</button>
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
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
                    <h3 className="text-2xl font-medium text-slate-900 mb-6 flex items-center">
                      <Target className="w-6 h-6 mr-2 text-blue-600" />{t('roi.results.title')}</h3>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                        <span className="text-slate-600">{t('roi.results.total_investment')}</span>
                        <span className="text-2xl font-bold text-slate-900">
                          €{results.totalInvestment.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                        <span className="text-slate-600">{t('roi.results.net_gain')}</span>
                        <span className={`text-2xl font-bold ${results.netGain >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          €{Math.abs(results.netGain).toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                        <span className="text-slate-600">{t('roi.results.total_roi')}</span>
                        <span className={`text-2xl font-bold ${results.roi >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {results.roi >= 0 ? '+' : ''}{results.roi.toFixed(2)}%
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                        <span className="text-slate-600">{t('roi.results.annualized_roi')}</span>
                        <span className={`text-2xl font-bold ${results.annualizedROI >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {results.annualizedROI >= 0 ? '+' : ''}{results.annualizedROI.toFixed(2)}%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
                    <h4 className="text-lg font-medium text-slate-900 mb-4">{t('roi.results.analysis')}</h4>
                    <div className="space-y-3">
                      {results.roi > 10 && (
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                          <p className="text-slate-600">{t('roi.analysis.excellent')}</p>
                        </div>
                      )}
                      {results.roi > 5 && results.roi <= 10 && (
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                          <p className="text-slate-600">{t('roi.analysis.good')}</p>
                        </div>
                      )}
                      {results.roi >= 0 && results.roi <= 5 && (
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                          <p className="text-slate-600">{t('roi.analysis.modest')}</p>
                        </div>
                      )}
                      {results.roi < 0 && (
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                          <p className="text-slate-600">{t('roi.analysis.loss')}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-8 h-8 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-medium text-slate-900 mb-2">
                    {t('roi.empty_state.title')}
                  </h3>
                  <p className="text-slate-600">{t('roi.empty_state.description')}</p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Informations supplémentaires */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <h2 className="text-2xl font-medium text-slate-900 mb-6">{t('roi.understanding.title')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-slate-900 mb-3">{t('roi.understanding.what_is_roi')}</h3>
                  <p className="text-slate-600 mb-4">
                    {t('roi.understanding.description')} 
                    {t('roi.understanding.formula')}
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm font-mono text-slate-700">
                      {t('roi.understanding.roi_formula')}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900 mb-3">{t('roi.understanding.annualized_title')}</h3>
                  <p className="text-slate-600 mb-4">
                    {t('roi.understanding.annualized_description')} 
                    {t('roi.understanding.annualized_formula')}
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm font-mono text-slate-700">
                      {t('roi.understanding.annualized_equation')}
                    </p>
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
