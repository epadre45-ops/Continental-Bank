import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

const JWT_SECRET = process.env.JWT_SECRET || crypto.randomBytes(64).toString('hex');
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '24h';

// Development warning if JWT_SECRET is not set
if (!process.env.JWT_SECRET) {
  console.warn('⚠️  SECURITY WARNING: JWT_SECRET not set in .env.local');
  console.warn('Using auto-generated secret for DEVELOPMENT ONLY.');
  console.warn('For production, add this to your .env.local:');
  console.warn(`JWT_SECRET=${JWT_SECRET}`);
}

// Password hashing and verification
export const hashPassword = async (password) => {
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
};

export const verifyPassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

// JWT token generation and verification
export const generateToken = (userId, email, role = 'user', expiresIn = JWT_EXPIRES_IN) => {
  return jwt.sign(
    { 
      userId, 
      email, 
      role,
      iat: Math.floor(Date.now() / 1000)
    },
    JWT_SECRET,
    { 
      expiresIn,
      algorithm: 'HS256',
      issuer: 'ultra-bank',
      audience: 'ultra-bank-users'
    }
  );
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET, {
      algorithms: ['HS256'],
      issuer: 'ultra-bank',
      audience: 'ultra-bank-users'
    });
  } catch (error) {
    throw new Error('Token invalide ou expiré');
  }
};

// Refresh token generation
export const generateRefreshToken = (userId) => {
  const refreshToken = crypto.randomBytes(64).toString('hex');
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
  
  return {
    token: refreshToken,
    expiresAt,
    userId
  };
};

// Input sanitization
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  return input
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .replace(/data:/gi, '')
    .replace(/vbscript:/gi, '')
    .replace(/file:/gi, '')
    .replace(/ftp:/gi, '')
    .trim();
};

// Email validation
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone number validation
export const validatePhone = (phone) => {
  const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
};

// Password strength validation
export const validatePassword = (password) => {
  const requirements = {
    minLength: password.length >= 8,
    hasLowercase: /[a-z]/.test(password),
    hasUppercase: /[A-Z]/.test(password),
    hasNumbers: /\d/.test(password),
    hasSpecialChars: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    noCommonPatterns: !/(.)\1{2,}|123|abc|qwer|password/i.test(password)
  };

  const isValid = Object.values(requirements).every(req => req === true);
  
  return {
    isValid,
    requirements,
    missingRequirements: (Object.entries(requirements || {})
      .filter(([key, value]) => !value)
      .map(([key]) => key) || [])
  };
};

// Account number generation
export const generateAccountNumber = () => {
  const prefix = 'FR76';
  const bankCode = '30004';
  const branchCode = Math.floor(Math.random() * 90000) + 10000;
  const accountNumber = Math.floor(Math.random() * 90000000000) + 10000000000;
  const key = Math.floor(Math.random() * 90) + 10;
  
  return `${prefix} ${bankCode} ${branchCode} ${accountNumber} ${key}`;
};

// IBAN validation
export const validateIBAN = (iban) => {
  // Remove spaces and convert to uppercase
  const cleanIBAN = iban.replace(/\s/g, '').toUpperCase();
  
  // Check basic format
  if (!/^[A-Z]{2}[0-9]{2}[A-Z0-9]{11,30}$/.test(cleanIBAN)) {
    return false;
  }
  
  // Move first two characters to end
  const rearranged = cleanIBAN.slice(2) + cleanIBAN.slice(0, 2);
  
  // Replace letters with numbers
  const numeric = rearranged.replace(/[A-Z]/g, char => (char.charCodeAt(0) - 55).toString());
  
  // Mod 97 check
  let remainder = numeric;
  while (remainder.length > 2) {
    const block = remainder.slice(0, 9);
    remainder = (parseInt(block, 10) % 97).toString() + remainder.slice(9);
  }
  
  return parseInt(remainder, 10) % 97 === 1;
};

// Transaction reference generation
export const generateTransactionReference = () => {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substr(2, 9);
  return `TRX-${timestamp.toUpperCase()}-${random.toUpperCase()}`;
};

// Card number generation
export const generateCardNumber = () => {
  // Generate 15 random digits
  let digits = '';
  for (let i = 0; i < 15; i++) {
    digits += Math.floor(Math.random() * 10);
  }
  
  // Calculate Luhn checksum
  let sum = 0;
  let isEven = false;
  
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits[i]);
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  const checksum = (10 - (sum % 10)) % 10;
  
  // Format as XXXX-XXXX-XXXX-XXXX
  const fullNumber = digits + checksum;
  return fullNumber.match(/.{1,4}/g).join('-');
};

// CVV generation
export const generateCVV = () => {
  return Math.floor(Math.random() * 900) + 100;
};

// Expiry date generation
export const generateExpiryDate = () => {
  const currentDate = new Date();
  const expiryYear = currentDate.getFullYear() + Math.floor(Math.random() * 4) + 1;
  const expiryMonth = Math.floor(Math.random() * 12) + 1;
  
  return {
    month: expiryMonth.toString().padStart(2, '0'),
    year: expiryYear.toString().slice(-2),
    fullYear: expiryYear
  };
};

// Rate limiting
const rateLimitStore = new Map();

export const checkRateLimit = (key, limit = 5, windowMs = 60000) => {
  const now = Date.now();
  const requests = rateLimitStore.get(key) || [];
  
  // Remove old requests
  const validRequests = requests.filter(time => now - time < windowMs);
  
  if (validRequests.length >= limit) {
    return false;
  }
  
  validRequests.push(now);
  rateLimitStore.set(key, validRequests);
  
  // Clean up old entries
  setTimeout(() => {
    const currentRequests = rateLimitStore.get(key) || [];
    const filteredRequests = currentRequests.filter(time => now - time < windowMs);
    if (filteredRequests.length === 0) {
      rateLimitStore.delete(key);
    } else {
      rateLimitStore.set(key, filteredRequests);
    }
  }, windowMs);
  
  return true;
};

// CSRF token generation
export const generateCSRFToken = () => {
  return crypto.randomBytes(32).toString('hex');
};

// Secure random token generation
export const generateSecureToken = (length = 32) => {
  return crypto.randomBytes(length).toString('hex');
};

// Amount validation
export const validateAmount = (amount, currency = 'EUR') => {
  const numAmount = parseFloat(amount);
  
  if (isNaN(numAmount) || numAmount <= 0) {
    return { isValid: false, error: 'Montant invalide' };
  }
  
  if (numAmount > 1000000) {
    return { isValid: false, error: 'Montant trop élevé' };
  }
  
  // Check decimal places (max 2 for most currencies)
  const decimalPlaces = (numAmount.toString().split('.')[1] || '').length;
  if (decimalPlaces > 2) {
    return { isValid: false, error: 'Maximum 2 décimales autorisées' };
  }
  
  return { isValid: true, amount: numAmount };
};

// API key generation
export const generateAPIKey = () => {
  const prefix = 'UBK'; // Ultra Bank Key
  const randomPart = crypto.randomBytes(24).toString('base64').replace(/[+/=]/g, '');
  return `${prefix}_${randomPart}`;
};

// Session management
export const createSession = (userId, userAgent, ip) => {
  return {
    id: crypto.randomUUID(),
    userId,
    userAgent,
    ip,
    createdAt: new Date(),
    lastActivity: new Date(),
    isActive: true,
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours
  };
};

// Permission checking
export const hasPermission = (userRole, requiredRole) => {
  const roleHierarchy = {
    'admin': 5,
    'manager': 4,
    'employee': 3,
    'premium': 2,
    'user': 1
  };
  
  return roleHierarchy[userRole] >= roleHierarchy[requiredRole];
};

// Middleware for authentication
export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Token d\'authentification requis' });
  }
  
  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Token invalide ou expiré' });
  }
};

// Middleware for role-based access
export const requireRole = (roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Authentification requise' });
    }
    
    const userRole = req.user.role;
    const hasRequiredRole = Array.isArray(roles) ? roles.includes(userRole) : userRole === roles;
    
    if (!hasRequiredRole) {
      return res.status(403).json({ message: 'Permissions insuffisantes' });
    }
    
    next();
  };
};

export default {
  hashPassword,
  verifyPassword,
  generateToken,
  verifyToken,
  generateRefreshToken,
  sanitizeInput,
  validateEmail,
  validatePhone,
  validatePassword,
  generateAccountNumber,
  validateIBAN,
  generateTransactionReference,
  generateCardNumber,
  generateCVV,
  generateExpiryDate,
  checkRateLimit,
  generateCSRFToken,
  generateSecureToken,
  validateAmount,
  generateAPIKey,
  createSession,
  hasPermission,
  authenticateToken,
  requireRole
};
