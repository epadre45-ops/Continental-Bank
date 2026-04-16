/**
 * CSRF Protection Utility
 * Generates and validates CSRF tokens for form submissions
 */

// Generate a random token
const generateToken = () => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

// Store token in sessionStorage (client-side only)
export const generateCSRFToken = () => {
  if (typeof window === 'undefined') return null;
  
  const token = generateToken();
  sessionStorage.setItem('csrf_token', token);
  sessionStorage.setItem('csrf_token_timestamp', Date.now().toString());
  
  return token;
};

// Get current CSRF token
export const getCSRFToken = () => {
  if (typeof window === 'undefined') return null;
  return sessionStorage.getItem('csrf_token');
};

// Validate CSRF token (server-side)
export const validateCSRFToken = (token) => {
  if (!token || typeof token !== 'string') return false;
  
  // Token should be 64 hex characters (32 bytes)
  if (token.length !== 64) return false;
  
  // Validate hex format
  return /^[a-f0-9]{64}$/i.test(token);
};

// Clear CSRF token
export const clearCSRFToken = () => {
  if (typeof window === 'undefined') return;
  sessionStorage.removeItem('csrf_token');
  sessionStorage.removeItem('csrf_token_timestamp');
};
