import '../styles/globals.css';
import { motion } from 'framer-motion';
import { SecurityProvider } from '../utils/security';
import { TranslationProvider } from '../lib/i18n';
import { NotificationProvider } from '../components/NotificationManager';
import Head from 'next/head';
import { useEffect } from 'react';

// ==========================================
// PATCH ANTI-CRASH POUR GOOGLE TRANSLATE 
// Empeche React de crasher si un plugin de
// traduction (Google Translate, etc) modifie
// le DOM en injectant des balises <font>
// ==========================================
function installGoogleTranslatePatch() {
  if (typeof Node === 'function' && Node.prototype) {
    const originalRemoveChild = Node.prototype.removeChild;
    Node.prototype.removeChild = function (child) {
      if (child.parentNode !== this) {
        if (console) {
          console.warn('Google Translate Crash Prevented: Cannot remove a child from a different parent');
        }
        return child;
      }
      return originalRemoveChild.apply(this, arguments);
    };

    const originalInsertBefore = Node.prototype.insertBefore;
    Node.prototype.insertBefore = function (newNode, referenceNode) {
      if (referenceNode && referenceNode.parentNode !== this) {
        if (console) {
          console.warn('Google Translate Crash Prevented: Cannot insert before a reference node from a different parent');
        }
        return newNode;
      }
      return originalInsertBefore.apply(this, arguments);
    };
  }
}

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    // Appliquer le patch de prévention de crash uniquement côté client (navigateur)
    if (typeof window !== 'undefined') {
      installGoogleTranslatePatch();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Continental Bank</title>
        <meta name="description" content="Banque européenne moderne et sécurisée" />
      </Head>
      
      <TranslationProvider>
        <SecurityProvider>
          <NotificationProvider>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Component {...pageProps} />
            </motion.div>
          </NotificationProvider>
        </SecurityProvider>
      </TranslationProvider>
    </>
  );
}

export default MyApp;
