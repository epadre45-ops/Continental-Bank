import { useState, useCallback, createContext, useContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import PremiumNotification from './PremiumNotification';

const NotificationContext = createContext(null);

export const useNotifications = () => useContext(NotificationContext);

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  const addNotification = useCallback((notification) => {
    const id = Date.now();
    const newNotification = {
      id,
      ...notification,
      duration: notification.duration || 5000
    };

    setNotifications(prev => [...prev, newNotification]);

    // Auto-remove after duration
    if (newNotification.duration > 0) {
      setTimeout(() => {
        removeNotification(id);
      }, newNotification.duration);
    }

    return id;
  }, []);

  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  const success = useCallback((title, message, options = {}) => {
    return addNotification({ type: 'success', title, message, ...options });
  }, [addNotification]);

  const error = useCallback((title, message, options = {}) => {
    return addNotification({ type: 'error', title, message, ...options });
  }, [addNotification]);

  const warning = useCallback((title, message, options = {}) => {
    return addNotification({ type: 'warning', title, message, ...options });
  }, [addNotification]);

  const info = useCallback((title, message, options = {}) => {
    return addNotification({ type: 'info', title, message, ...options });
  }, [addNotification]);

  return (
    <NotificationContext.Provider value={{ addNotification, removeNotification, success, error, warning, info }}>
      {children}
      
      {/* Notification Container */}
      <div className="fixed top-24 right-6 z-[100] flex flex-col gap-3 max-w-md pointer-events-none">
        <AnimatePresence>
          {(notifications || []).map(notification => (
            <div key={notification.id} className="pointer-events-auto">
              <PremiumNotification
                {...notification}
                onClose={() => removeNotification(notification.id)}
              />
            </div>
          ))}
        </AnimatePresence>
      </div>
    </NotificationContext.Provider>
  );
}
