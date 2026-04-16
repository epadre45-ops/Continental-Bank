import { hashPassword, sanitizeInput, validateEmail, validatePassword } from '../../utils/auth.js';
import crypto from 'crypto';
import { checkRateLimit, getClientIP } from '../../lib/rateLimit.js';
import { logSecurityEvent, logError, logInfo } from '../../lib/logger.js';
import db from '../../lib/database.js'; // Utilisé directement ici puisque j'ai remanié le nom et pool dedans

export default async function handler(req, res) {
  if (req.method === 'POST') {
    return handleCreateUser(req, res);
  } else if (req.method === 'GET') {
    return handleFindUser(req, res);
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}

async function handleCreateUser(req, res) {
  // Adaptation de la fonction getClientIP selon la version
  const clientIP = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '127.0.0.1';
  
  if (!checkRateLimit(`user_create_${clientIP}`, 5, 900000)) {
    try { logSecurityEvent('RATE_LIMIT_EXCEEDED', { endpoint: 'users/create', ip: clientIP }); } catch(e){}
    return res.status(429).json({ message: 'Too many requests. Please try again later.' });
  }

  try {
    const { email, password, firstName, lastName, institutionName, contactPerson } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    const passwordValidation = validatePassword(password);
    if (!passwordValidation.isValid) {
      return res.status(400).json({ 
        message: 'Password does not meet security requirements',
        missingRequirements: passwordValidation.missingRequirements
      });
    }

    const sanitizedEmail = sanitizeInput(email.toLowerCase().trim());

    // Check if user already exists in MySQL
    const existingUsers = await db.query('SELECT id FROM users WHERE email = ? AND isActive = 1', [sanitizedEmail]);
    if (existingUsers.length > 0) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const hashedPassword = await hashPassword(password);
    const userId = crypto.randomUUID();
    const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');

    const finalFirstName = firstName || contactPerson || institutionName || null;

    const newUser = {
      id: userId,
      email: sanitizedEmail,
      password: hashedPassword,
      firstName: finalFirstName,
      lastName: lastName || null,
      isActive: true,
      createdAt: createdAt,
      lastLogin: null
    };

    await db.query('INSERT INTO users SET ?', [newUser]);
    const { password: _, ...userWithoutPassword } = newUser;

    try { logInfo('USER_CREATED', { email: sanitizedEmail }); } catch(e){}

    return res.status(201).json({
      message: 'User created successfully',
      user: userWithoutPassword
    });

  } catch (error) {
    console.error('[API USERS]', error);
    try { logError('USER_CREATION_ERROR', error); } catch(e){}
    return res.status(500).json({ 
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}

async function handleFindUser(req, res) {
  const clientIP = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '127.0.0.1';
  if (!checkRateLimit(`user_find_${clientIP}`, 10, 60000)) {
    try { logSecurityEvent('RATE_LIMIT_EXCEEDED', { endpoint: 'users/find', ip: clientIP }); } catch(e){}
    return res.status(429).json({ message: 'Too many requests. Please try again later.' });
  }

  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    const sanitizedEmail = sanitizeInput(email.toLowerCase().trim());

    const users = await db.query('SELECT * FROM users WHERE email = ? AND isActive = 1 LIMIT 1', [sanitizedEmail]);

    if(users.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // Au test GET (pour vérifier l'existence), on renvoie une 200 avec message empty
    // Le register.js cherche .status(200) ok pour dire "L'email existe déjà"
    return res.status(200).json({ message: "User exists" });

  } catch (error) {
    console.error('[API USERS FIND]', error);
    try { logError('USER_FIND_ERROR', error); } catch(e){}
    return res.status(500).json({ message: 'Internal server error' });
  }
}
