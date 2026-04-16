import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe2, Calculator, ArrowLeft, RefreshCw } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

import { useTranslation } from '../../lib/i18n';

export default function CurrencyCalculator() {
  const { t, i18n } = useTranslation('currency');

  const [formData, setFormData] = useState({
    amount: '',
    fromCurrency: 'EUR',
    toCurrency: 'USD'
  });

  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  // Taux de change (simulés - en réalité, on utiliserait une API)
  const exchangeRates = {
    EUR: { USD: 1.08, GBP: 0.86, CHF: 0.98, JPY: 162.45, CNY: 7.85, CAD: 1.47, AUD: 1.65 },
    USD: { EUR: 0.93, GBP: 0.80, CHF: 0.91, JPY: 150.75, CNY: 7.29, CAD: 1.36, AUD: 1.53 },
    GBP: { EUR: 1.16, USD: 1.25, CHF: 1.14, JPY: 188.20, CNY: 9.12, CAD: 1.70, AUD: 1.91 },
    CHF: { EUR: 1.02, USD: 1.10, GBP: 0.88, JPY: 165.20, CNY: 8.00, CAD: 1.50, AUD: 1.68 },
    JPY: { EUR: 0.0062, USD: 0.0066, GBP: 0.0053, CHF: 0.0061, CNY: 0.048, CAD: 0.0090, AUD: 0.010 },
    CNY: { EUR: 0.13, USD: 0.14, GBP: 0.11, CHF: 0.13, JPY: 20.70, CAD: 0.19, AUD: 0.21 },
    CAD: { EUR: 0.68, USD: 0.74, GBP: 0.59, CHF: 0.67, JPY: 110.80, CNY: 5.34, AUD: 1.12 },
    AUD: { EUR: 0.61, USD: 0.65, GBP: 0.52, CHF: 0.60, JPY: 98.50, CNY: 4.75, CAD: 0.89 }
  };

  const currencies = [
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'GBP', name: 'British Pound', symbol: '£' },
    { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF' },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
    { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
    { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' },
    { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' }
  ];

  const calculateExchange = () => {
    const amount = parseFloat(formData.amount);
    const from = formData.fromCurrency;
    const to = formData.toCurrency;

    if (!amount || amount <= 0) {
      alert(t('errors.invalid_amount'));
      return;
    }

    setLoading(true);

    // Simuler un délai d'API
    setTimeout(() => {
      const rate = exchangeRates[from][to];
      const convertedAmount = amount * rate;
      const inverseRate = exchangeRates[to][from];

      setResults({
        originalAmount: amount,
        convertedAmount,
        fromCurrency: from,
        toCurrency: to,
        rate,
        inverseRate,
        timestamp: new Date().toLocaleString(i18n.language)
      });
      setLoading(false);
    }, 500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const swapCurrencies = () => {
    setFormData({
      ...formData,
      fromCurrency: formData.toCurrency,
      toCurrency: formData.fromCurrency
    });
    setResults(null);
  };

  const resetForm = () => {
    setFormData({
      amount: '',
      fromCurrency: 'EUR',
      toCurrency: 'USD'
    });
    setResults(null);
  };

  const getCurrencyInfo = (code) => {
    return currencies.find(c => c.code === code);
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
              <ArrowLeft className="w-4 h-4 mr-2" />{t('back_to_home')}</Link>
            <h1 className="text-5xl font-light text-slate-900 mb-6">{t('title')}<span className="text-blue-900 font-medium">{t('currencies')}</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl">{t('subtitle')}</p>
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
                <Calculator className="w-6 h-6 mr-2 text-blue-600" />{t('form.title')}</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('form.amount')}</label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="1 000"
                    min="0"
                    step="0.01"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {t('form.from')}
                  </label>
                  <select
                    name="fromCurrency"
                    value={formData.fromCurrency}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {(currencies || []).map(currency => (
                      <option key={currency.code} value={currency.code}>
                        {currency.code} - {currency.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={swapCurrencies}
                    className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                    title={t('form.swap_currencies')}
                  >
                    <RefreshCw className="w-5 h-5 text-blue-600" />
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('form.to')}</label>
                  <select
                    name="toCurrency"
                    value={formData.toCurrency}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {(currencies || []).map(currency => (
                      <option key={currency.code} value={currency.code}>
                        {currency.code} - {currency.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={calculateExchange}
                    disabled={loading}
                    className="flex-1 bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium flex items-center justify-center disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        {t('result.converting')}
                      </>
                    ) : (
                      <>
                        <Globe2 className="w-5 h-5 mr-2" />{t('form.convert_button')}</>
                    )}
                  </button>
                  <button
                    onClick={resetForm}
                    className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
                  >{t('form.reset')}</button>
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
                      <Globe2 className="w-6 h-6 mr-2 text-green-600" />{t('result.title')}</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white p-6 rounded-lg">
                        <div className="text-center mb-4">
                          <p className="text-sm text-slate-600 mb-2">{t('result.original_amount')}</p>
                          <p className="text-3xl font-bold text-slate-900">
                            {getCurrencyInfo(results.fromCurrency)?.symbol}{results.originalAmount.toLocaleString(i18n.language, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </p>
                          <p className="text-sm text-slate-500 mt-1">
                            {getCurrencyInfo(results.fromCurrency)?.name}
                          </p>
                        </div>
                        
                        <div className="text-center py-4">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <ArrowUpRight className="w-4 h-4 text-green-600 rotate-90" />
                          </div>
                          <p className="text-sm text-slate-600">
                            {t('result.rate_info', { from: results.fromCurrency, rate: results.rate.toFixed(4), to: results.toCurrency })}
                          </p>
                        </div>
                        
                        <div className="text-center">
                          <p className="text-sm text-slate-600 mb-2">{t('result.converted_amount')}</p>
                          <p className="text-3xl font-bold text-green-600">
                            {getCurrencyInfo(results.toCurrency)?.symbol}{results.convertedAmount.toLocaleString(i18n.language, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </p>
                          <p className="text-sm text-slate-500 mt-1">
                            {getCurrencyInfo(results.toCurrency)?.name}
                          </p>
                        </div>
                      </div>
                      
                      <div className="text-center text-sm text-slate-500">
                        <p>{t('result.last_updated')} : {results.timestamp}</p>
                        <p className="mt-1">
                          {t('result.inverse_rate_info', { to: results.toCurrency, rate: results.inverseRate.toFixed(4), from: results.fromCurrency })}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Conversions rapides */}
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
                    <h4 className="text-lg font-medium text-slate-900 mb-4">{t('quick_conversions.title')}</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {(currencies || [])
                        .filter(c => c.code !== results.fromCurrency && c.code !== results.toCurrency)
                        .slice(0, 4)
                        .map(currency => {
                          const quickRate = exchangeRates[results.toCurrency][currency.code];
                          const quickAmount = results.convertedAmount * quickRate;
                          return (
                            <button
                              key={currency.code}
                              onClick={() => {
                                setFormData({
                                  ...formData,
                                  toCurrency: currency.code,
                                  amount: results.convertedAmount.toString()
                                });
                                setResults(null);
                              }}
                              className="p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-left"
                            >
                              <p className="text-sm font-medium text-slate-900">
                                {results.toCurrency} → {currency.code}
                              </p>
                              <p className="text-xs text-slate-600">
                                {currency.symbol}{quickAmount.toLocaleString(i18n.language, { maximumFractionDigits: 2 })}
                              </p>
                            </button>
                          );
                        })}
                    </div>
                  </div>
                </>
              ) : (
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 text-center">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe2 className="w-8 h-8 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-medium text-slate-900 mb-2">{t('empty_state.title')}</h3>
                  <p className="text-slate-600">{t('empty_state.description')}</p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Informations sur les devises */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <h2 className="text-2xl font-medium text-slate-900 mb-6">{t('available_currencies.title')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {currencies.map(currency => (
                  <div key={currency.code} className="border border-slate-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-bold text-slate-900">{currency.code}</span>
                      <span className="text-xl font-bold text-blue-600">{currency.symbol}</span>
                    </div>
                    <p className="text-sm text-slate-600">{currency.name}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>{t('info.note')}</strong> {t('info.disclaimer')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
