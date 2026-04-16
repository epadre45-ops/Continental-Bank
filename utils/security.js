import React, { createContext, useContext, useEffect, useState } from 'react';

const SecurityContext = createContext();

export const useSecurity = () => {
  const context = useContext(SecurityContext);
  if (!context) {
    throw new Error('useSecurity must be used within a SecurityProvider');
  }
  return context;
};

export const SecurityProvider = ({ children }) => {
  const [securityLevel, setSecurityLevel] = useState('standard');
  const [isSecure, setIsSecure] = useState(false);
  const [sessionTimeout, setSessionTimeout] = useState(30 * 60 * 1000); // 30 minutes
  const [lastActivity, setLastActivity] = useState(Date.now());

  // Security headers are now handled server-side in next.config.js for better reliability
  // and compliance with browser security standards (X-Frame-Options, HSTS, etc.)
  useEffect(() => {
    // This effect is intentionally left empty to mark the transition to server-side headers.
    // Client-side CSP meta tags have limited support and are less secure than real HTTP headers.
  }, []);

  // Session management
  useEffect(() => {
    const checkSession = () => {
      const now = Date.now();
      const timeSinceLastActivity = now - lastActivity;
      
      if (timeSinceLastActivity > sessionTimeout) {
        // Session expired
        handleSessionExpired();
      }
    };

    const interval = setInterval(checkSession, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [lastActivity, sessionTimeout]);

  // Track user activity
  useEffect(() => {
    const trackActivity = () => {
      setLastActivity(Date.now());
    };

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    events.forEach(event => {
      document.addEventListener(event, trackActivity, true);
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, trackActivity, true);
      });
    };
  }, []);

  const handleSessionExpired = () => {
    // Clear session
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    
    // Redirect to login
    window.location.href = '/login';
  };

  // CSRF protection
  const generateCSRFToken = () => {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  };

  // XSS protection
  const sanitizeInput = (input) => {
    if (typeof input !== 'string') return input;
    
    return input
      .replace(/[<>]/g, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '')
      .trim();
  };

  // Rate limiting
  const rateLimit = new Map();
  const checkRateLimit = (key, limit = 5, windowMs = 60000) => {
    const now = Date.now();
    const requests = rateLimit.get(key) || [];
    
    // Remove old requests
    const validRequests = requests.filter(time => now - time < windowMs);
    
    if (validRequests.length >= limit) {
      return false;
    }
    
    validRequests.push(now);
    rateLimit.set(key, validRequests);
    return true;
  };

  // Encryption utilities
  const encryptData = async (data, key) => {
    try {
      const encoder = new TextEncoder();
      const dataBuffer = encoder.encode(JSON.stringify(data));
      
      const keyBuffer = await crypto.subtle.importKey(
        'raw',
        encoder.encode(key),
        { name: 'AES-GCM' },
        false,
        ['encrypt']
      );
      
      const iv = crypto.getRandomValues(new Uint8Array(12));
      const encryptedData = await crypto.subtle.encrypt(
        { name: 'AES-GCM', iv },
        keyBuffer,
        dataBuffer
      );
      
      return {
        iv: Array.from(iv),
        data: Array.from(new Uint8Array(encryptedData))
      };
    } catch (error) {
      console.error('Encryption error:', error);
      return null;
    }
  };

  const decryptData = async (encryptedData, key) => {
    try {
      const encoder = new TextEncoder();
      const decoder = new TextDecoder();
      
      const keyBuffer = await crypto.subtle.importKey(
        'raw',
        encoder.encode(key),
        { name: 'AES-GCM' },
        false,
        ['decrypt']
      );
      
      const decryptedData = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv: new Uint8Array(encryptedData.iv) },
        keyBuffer,
        new Uint8Array(encryptedData.data)
      );
      
      return JSON.parse(decoder.decode(decryptedData));
    } catch (error) {
      console.error('Decryption error:', error);
      return null;
    }
  };

  // Password strength checker
  const checkPasswordStrength = (password) => {
    let strength = 0;
    const feedback = [];

    // Length check
    if (password.length >= 8) {
      strength += 1;
    } else {
      feedback.push('Le mot de passe doit contenir au moins 8 caractères');
    }

    // Complexity checks
    if (/[a-z]/.test(password)) strength += 1;
    else feedback.push('Ajoutez des lettres minuscules');

    if (/[A-Z]/.test(password)) strength += 1;
    else feedback.push('Ajoutez des lettres majuscules');

    if (/[0-9]/.test(password)) strength += 1;
    else feedback.push('Ajoutez des chiffres');

    if (/[^a-zA-Z0-9]/.test(password)) strength += 1;
    else feedback.push('Ajoutez des caractères spéciaux');

    // Common patterns
    const commonPatterns = /(.)\1{2,}|123|abc|qwer|password/i;
    if (commonPatterns.test(password)) {
      strength -= 1;
      feedback.push('Évitez les motifs courants');
    }

    const strengthLevels = ['Très faible', 'Faible', 'Moyen', 'Fort', 'Très fort'];
    return {
      score: Math.max(0, Math.min(4, strength)),
      level: strengthLevels[Math.max(0, Math.min(4, strength))],
      feedback
    };
  };

  // Two-factor authentication
  const generate2FASecret = () => {
    const secret = crypto.getRandomValues(new Uint8Array(20));
    return Array.from(secret, byte => byte.toString(16).padStart(2, '0')).join('');
  };

  const verify2FACode = (secret, token) => {
    // This would integrate with a TOTP library
    // For demo purposes, we'll use a simple verification
    return token.length === 6 && /^\d{6}$/.test(token);
  };

  // Audit logging
  const logSecurityEvent = (event, details) => {
    const logEntry = {
      timestamp: new Date().toISOString(),
      event,
      details,
      userAgent: navigator.userAgent,
      ip: 'client-side' // In production, this would be server-side
    };

    // Store in localStorage for demo (in production, send to server)
    const logs = JSON.parse(localStorage.getItem('securityLogs') || '[]');
    logs.push(logEntry);
    
    // Keep only last 100 logs
    if (logs.length > 100) {
      logs.shift();
    }
    
    localStorage.setItem('securityLogs', JSON.stringify(logs));
  };

  // Biometric authentication support
  const checkBiometricSupport = async () => {
    if (!window.PublicKeyCredential) {
      return false;
    }

    try {
      const available = await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
      return available;
    } catch (error) {
      return false;
    }
  };

  const value = {
    securityLevel,
    isSecure,
    setSecurityLevel,
    generateCSRFToken,
    sanitizeInput,
    checkRateLimit,
    encryptData,
    decryptData,
    checkPasswordStrength,
    generate2FASecret,
    verify2FACode,
    logSecurityEvent,
    checkBiometricSupport,
    setSessionTimeout
  };

  return (
    <SecurityContext.Provider value={value}>
      {children}
    </SecurityContext.Provider>
  );
};

export default SecurityContext;
