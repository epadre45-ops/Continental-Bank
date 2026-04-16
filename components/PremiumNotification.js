import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';

/**
 * Premium Notification Component
 * Ultra-premium design for form submission feedback
 */
export default function PremiumNotification({
  type = 'success', // success, error, warning, info
  title,
  message,
  details,
  duration = 5000,
  onClose,
  showProgress = true
}) {
  const icons = {
    success: CheckCircle,
    error: XCircle,
    warning: AlertCircle,
    info: Info
  };

  const colors = {
    success: {
      bg: 'bg-gradient-to-r from-emerald-50 to-teal-50',
      border: 'border-emerald-200',
      icon: 'text-emerald-600',
      iconBg: 'bg-emerald-100',
      progress: 'bg-emerald-500'
    },
    error: {
      bg: 'bg-gradient-to-r from-red-50 to-rose-50',
      border: 'border-red-200',
      icon: 'text-red-600',
      iconBg: 'bg-red-100',
      progress: 'bg-red-500'
    },
    warning: {
      bg: 'bg-gradient-to-r from-amber-50 to-orange-50',
      border: 'border-amber-200',
      icon: 'text-amber-600',
      iconBg: 'bg-amber-100',
      progress: 'bg-amber-500'
    },
    info: {
      bg: 'bg-gradient-to-r from-blue-50 to-indigo-50',
      border: 'border-blue-200',
      icon: 'text-emerald-600',
      iconBg: 'bg-blue-100',
      progress: 'bg-blue-500'
    }
  };

  const config = colors[type];
  const Icon = icons[type];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 100, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 100, scale: 0.9 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className={`relative overflow-hidden ${config.bg} border ${config.border} rounded-2xl shadow-2xl shadow-black/5`}
      >
        {/* Progress Bar */}
        {showProgress && (
          <motion.div
            initial={{ width: '100%' }}
            animate={{ width: '0%' }}
            transition={{ duration: duration / 1000, ease: 'linear' }}
            className={`absolute top-0 left-0 h-1 ${config.progress}`}
          />
        )}

        <div className="p-6">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className={`flex-shrink-0 w-12 h-12 ${config.iconBg} rounded-xl flex items-center justify-center ${config.icon}`}>
              <Icon className="w-6 h-6" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {message}
              </p>
              
              {details && (
                <div className="mt-3 p-3 bg-white/50 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-500 font-medium mb-2">Détails :</p>
                  {typeof details === 'string' ? (
                    <p className="text-sm text-gray-700">{details}</p>
                  ) : (
                    <ul className="space-y-1">
                      {(details || []).map((detail) => (
                        <li key={detail} className="text-sm text-gray-700 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>

            {/* Close Button */}
            {onClose && (
              <button
                onClick={onClose}
                className="flex-shrink-0 p-2 hover:bg-white/50 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            )}
          </div>
        </div>

        {/* Premium Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shine pointer-events-none" />
      </motion.div>
    </AnimatePresence>
  );
}
