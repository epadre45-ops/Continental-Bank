import { useState, useEffect } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, LogOut, Users, FileText, CreditCard, TrendingUp, Shield, Lock, Settings, Bell, Search, Building, Globe, Award, ChevronRight, ArrowUpRight, ArrowRight, Star, BarChart3, PieChart, Target, Activity, DollarSign, Briefcase, Download, Eye, Calendar, Clock, TrendingDown, User, AlertCircle, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from '../lib/i18n';

export default function DashboardInstitutional() {
  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    loadUserData();
  }, []);

  // Charger les données utilisateur et statistiques via API backend sécurisée
  const loadUserData = async () => {
    const sessionId = localStorage.getItem('continentalBank_session');

    if (sessionId) {
      try {
        const sessionResponse = await fetch('/api/auth/session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'get', sessionId })
        });

        if (sessionResponse.ok) {
          const { session } = await sessionResponse.json();
          if (session) {
            // Pour l'instant, utiliser des données mock pour stats car API stats non créée
            setUser({ id: session.userId, email: 'user@example.com' });
            setStats({ totalUsers: 0, totalApplications: 0, activeSessions: 0 });
          }
        }
      } catch (error) {
        console.error('Error loading user data:', error);
      }
    }

    setLoading(false);
  };

  const handleLogout = async () => {
    const sessionId = localStorage.getItem('continentalBank_session');
    if (sessionId) {
      try {
        await fetch('/api/auth/session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'destroy', sessionId })
        });
      } catch (error) {
        console.error('Error destroying session:', error);
      }
    }

    localStorage.removeItem('continentalBank_session');
    localStorage.removeItem('continentalBank_token');
    window.location.href = '/login';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('common.session_expired')}</h2>
          <p className="text-gray-600 mb-4">{t('common.please_relogin')}</p>
          <Link href="/login" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            {t('common.login')}
          </Link>
        </div>
      </div>
    );
  }

  const portfolioData = [
    { name: 'Actions', value: 45, change: 2.3, trend: 'up' },
    { name: 'Obligations', value: 30, change: -0.8, trend: 'down' },
    { name: 'Immobilier', value: 15, change: 1.2, trend: 'up' },
    { name: 'Alternatifs', value: 10, change: 3.1, trend: 'up' }
  ];

  const recentTransactions = [
    { id: 'TRX001', type: 'Achat', asset: 'Actions Apple', amount: '€125,000', date: '2024-01-15', status: 'Complété' },
    { id: 'TRX002', type: 'Vente', asset: 'Obligations EU', amount: '€500,000', date: '2024-01-14', status: 'Complété' },
    { id: 'TRX003', type: 'Achat', asset: 'Fonds Immobilier', amount: '€250,000', date: '2024-01-13', status: 'En cours' },
    { id: 'TRX004', type: 'Vente', asset: 'Actions Tesla', amount: '€85,000', date: '2024-01-12', status: 'Complété' }
  ];

  const notifications = [
    { id: 1, type: 'alert', message: 'Revue trimestrielle disponible', time: 'Il y a 2 heures' },
    { id: 2, type: 'success', message: 'Transaction TRX003 complétée', time: 'Il y a 5 heures' },
    { id: 3, type: 'info', message: 'Nouveau rapport d\'analyse publié', time: 'Hier' }
  ];

  const quickActions = [
    { icon: <TrendingUp className="w-5 h-5" />, title: 'Analyser Portefeuille', href: '/portfolio' },
    { icon: <FileText className="w-5 h-5" />, title: 'Générer Rapport', href: '/reports' },
    { icon: <Target className="w-5 h-5" />, title: 'Nouvelle Transaction', href: '/trading' },
    { icon: <Users className="w-5 h-5" />, title: 'Contacter Conseiller', href: '/contact' }
  ];

  const headerActions = [
    { icon: <Search className="w-4 h-4" />, label: 'Rechercher', action: () => {} },
    { icon: <Bell className="w-4 h-4" />, label: 'Notifications', action: () => {}, hasBadge: true },
    { icon: <Settings className="w-4 h-4" />, label: 'Paramètres', href: '/settings' }
  ];

  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      <Header />
      
      <div className="container-institutional pt-20 md:pt-24 pb-8 md:pb-12 relative">
        {/* Image de fond - Dashboard monitoring */}
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1551288049-be2da8e9db4c?w=1920&h=600&fit=crop&auto=format"
            srcSet="https://images.unsplash.com/photo-1551288049-be2da8e9db4c?w=640&h=400&fit=crop&auto=format 640w,
                    https://images.unsplash.com/photo-1551288049-be2da8e9db4c?w=768&h=500&fit=crop&auto=format 768w,
                    https://images.unsplash.com/photo-1551288049-be2da8e9db4c?w=1024&h=600&fit=crop&auto=format 1024w,
                    https://images.unsplash.com/photo-1551288049-be2da8e9db4c?w=1920&h=600&fit=crop&auto=format 1920w"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            alt="Tableau de bord - Monitoring financier et analyse en temps réel"
            className="w-full h-full object-cover opacity-8"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F6F8FB]/95 via-[#F6F8FB]/90 to-[#F6F8FB]/95"></div>
        </div>
        
        {/* Header Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="h2-institutional mb-2">{t('pages.dashboard.title')}</h1>
              <p className="text-[#64748B]">{t('pages.dashboard.subtitle')}</p>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden p-2 bg-white border border-[rgba(10,30,60,0.08)] rounded-lg hover:bg-[#F6F8FB] transition-colors"
            >
              <Settings className="w-5 h-5 text-[#64748B]" />
            </button>

            {/* Desktop Actions */}
            <div className="hidden sm:flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white border border-[rgba(10,30,60,0.08)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0E2E5C]"
                />
              </div>
              <button className="relative p-2 bg-white border border-[rgba(10,30,60,0.08)] rounded-lg hover:bg-[#F6F8FB] transition-colors">
                <Bell className="w-5 h-5 text-[#64748B]" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <Link href="/settings" className="flex items-center space-x-2 bg-white border border-[rgba(10,30,60,0.08)] rounded-lg px-4 py-2 hover:bg-[#F6F8FB] transition-colors">
                <Settings className="w-4 h-4 text-[#64748B]" />
                <span className="text-sm text-[#64748B]">{t('common.settings')}</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="sm:hidden mt-4 bg-white border border-[rgba(10,30,60,0.08)] rounded-xl p-4 space-y-3"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#F6F8FB] border border-[rgba(10,30,60,0.08)] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0E2E5C]"
                />
              </div>
              <Link href="/notifications" className="flex items-center justify-between p-3 bg-[#F6F8FB] rounded-lg hover:bg-white transition-colors">
                <span className="text-[#0A1F3C]">Notifications</span>
                <div className="flex items-center">
                  <Bell className="w-4 h-4 text-[#64748B]" />
                  <span className="ml-2 w-2 h-2 bg-red-500 rounded-full"></span>
                </div>
              </Link>
              <Link href="/settings" className="flex items-center justify-between p-3 bg-[#F6F8FB] rounded-lg hover:bg-white transition-colors">
                <span className="text-[#0A1F3C]">{t('common.settings')}</span>
                <Settings className="w-4 h-4 text-[#64748B]" />
              </Link>
            </motion.div>
          )}
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {[
            { label: t('pages.dashboard.portfolio_value'), value: '€12.5M', change: '+2.3%', trend: 'up', icon: <DollarSign className="w-5 h-5 sm:w-6 sm:h-6" /> },
            { label: t('pages.dashboard.annual_return'), value: '8.7%', change: '+0.5%', trend: 'up', icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" /> },
            { label: t('pages.dashboard.transactions_count'), value: '24', change: '+12%', trend: 'up', icon: <Activity className="w-5 h-5 sm:w-6 sm:h-6" /> },
            { label: t('pages.dashboard.risk_score'), value: 'A+', change: 'Stable', trend: 'neutral', icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" /> }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-institutional-elevated p-4 sm:p-6"
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="text-[#0E2E5C]">{stat.icon}</div>
                <div className={`flex items-center space-x-1 text-xs sm:text-sm ${
                  stat.trend === 'up' ? 'text-green-500' : 
                  stat.trend === 'down' ? 'text-red-500' : 'text-[#64748B]'
                }`}>
                  {stat.trend === 'up' && <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />}
                  {stat.trend === 'down' && <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4" />}
                  <span>{stat.change}</span>
                </div>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-[#0A1F3C] mb-0.5 sm:mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-[#64748B]">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Image Performance - Excellence Financière */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mb-6 sm:mb-8"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=300&fit=crop&auto=format"
              srcSet="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&h=300&fit=crop&auto=format 640w,
                      https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=768&h=300&fit=crop&auto=format 768w,
                      https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1024&h=300&fit=crop&auto=format 1024w,
                      https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=300&fit=crop&auto=format 1200w"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
              alt="Performance financière - Excellence en gestion de portefeuille"
              className="w-full h-40 sm:h-48 md:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F3C]/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
                <h3 className="text-white text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2">Performance Exceptionnelle</h3>
                <p className="text-white/80 text-xs sm:text-sm">Suivez vos performances en temps réel avec des analyses précises et des prévisions fiables</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column - Portfolio & Chart */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Portfolio Allocation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-institutional-elevated p-6 sm:p-8"
            >
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-[#0A1F3C]">{t('pages.dashboard.allocation')}</h3>
                <button className="text-[#0E2E5C] hover:text-[#0A1F3C] transition-colors">
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {(portfolioData || []).map((item) => (
                  <div key={item.name} className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-20 sm:w-24 md:w-28 lg:w-32 text-xs sm:text-sm font-medium text-[#0A1F3C]">{item.name}</div>
                    <div className="flex-1 bg-[#F6F8FB] rounded-full h-4 sm:h-6 relative overflow-hidden">
                      <div 
                        className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#0E2E5C] to-[#153E75] rounded-full transition-all duration-1000"
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                    <div className="w-10 sm:w-12 md:w-14 lg:w-16 text-right">
                      <div className="text-xs sm:text-sm font-semibold text-[#0A1F3C]">{item.value}%</div>
                      <div className={`text-[10px] sm:text-xs ${
                        item.trend === 'up' ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {item.change > 0 ? '+' : ''}{item.change}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Transactions */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card-institutional-elevated p-6 sm:p-8"
            >
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-[#0A1F3C]">{t('pages.dashboard.recent_transactions')}</h3>
                <Link href="/transactions" className="text-[#0E2E5C] hover:text-[#0A1F3C] text-xs sm:text-sm font-medium transition-colors">
                  {t('common.more')}
                </Link>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {(recentTransactions || []).map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-3 sm:p-4 bg-[#F6F8FB] rounded-lg hover:bg-white transition-colors">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                        transaction.status === 'Complété' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}></div>
                      <div>
                        <div className="font-medium text-[#0A1F3C] text-sm sm:text-base">{transaction.asset}</div>
                        <div className="text-xs sm:text-sm text-[#64748B]">{transaction.id} • {transaction.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-[#0A1F3C] text-sm sm:text-base">{transaction.amount}</div>
                      <div className="text-xs sm:text-sm text-[#64748B]">{transaction.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Quick Actions & Notifications */}
          <div className="space-y-6 sm:space-y-8">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card-institutional-elevated p-6 sm:p-8"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-[#0A1F3C] mb-4 sm:mb-6">{t('pages.dashboard.quick_actions')}</h3>
              <div className="space-y-2 sm:space-y-3">
                {(quickActions || []).map((action) => (
                  <Link
                    key={action.href}
                    href={action.href}
                    className="flex items-center space-x-2 sm:space-x-3 p-2.5 sm:p-3 bg-[#F6F8FB] rounded-lg hover:bg-white hover:shadow-md transition-all group"
                  >
                    <div className="text-[#0E2E5C] group-hover:scale-110 transition-transform">
                      {action.icon}
                    </div>
                    <span className="text-[#0A1F3C] group-hover:text-[#0A1F3C] transition-colors text-sm sm:text-base">
                      {action.title}
                    </span>
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#94A3B8] group-hover:text-[#0E2E5C] group-hover:translate-x-1 transition-all ml-auto" />
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Notifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="card-institutional-elevated p-6 sm:p-8"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-[#0A1F3C] mb-4 sm:mb-6">{t('pages.dashboard.notifications')}</h3>
              <div className="space-y-3 sm:space-y-4">
                {(notifications || []).map((notification) => (
                  <div key={notification.message} className="flex items-start space-x-2 sm:space-x-3 p-2.5 sm:p-3 bg-[#F6F8FB] rounded-lg">
                    <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-1.5 sm:mt-2 ${
                      notification.type === 'alert' ? 'bg-yellow-500' :
                      notification.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <div className="text-xs sm:text-sm text-[#0A1F3C] mb-0.5 sm:mb-1">{notification.message}</div>
                      <div className="text-[10px] sm:text-xs text-[#94A3B8]">{notification.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Performance Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-institutional p-6 sm:p-8"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-[#0A1F3C] mb-4 sm:mb-6">{t('pages.dashboard.performance')}</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-[#64748B]">{t('pages.dashboard.current_month')}</span>
                  <span className="text-xs sm:text-sm text-green-500 font-semibold">+2.3%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-[#64748B]">{t('pages.dashboard.quarter')}</span>
                  <span className="text-xs sm:text-sm text-green-500 font-semibold">+5.7%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-[#64748B]">{t('pages.dashboard.year')}</span>
                  <span className="text-xs sm:text-sm text-green-500 font-semibold">+12.4%</span>
                </div>
                <div className="border-t border-[rgba(10,30,60,0.08)] pt-3 sm:pt-4 mt-3 sm:mt-4">
                  <Link href="/performance" className="btn-institutional-secondary w-full justify-center text-xs sm:text-sm">
                    {t('pages.dashboard.full_report')}
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
