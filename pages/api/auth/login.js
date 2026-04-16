import crypto from 'crypto';
import db from '../../../lib/database.js';
import { verifyPassword, generateToken, sanitizeInput, checkRateLimit } from '../../../utils/auth.js';
import { logSecurityEvent } from '../../../lib/logger.js';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  try {
    const { email, password, rememberMe } = req.body;

    // Input validation and sanitization
    if (!email || !password) {
      return res.status(400).json({ message: 'Email et mot de passe requis' });
    }

    const sanitizedEmail = sanitizeInput(email.toLowerCase());

    // Rate limiting check
    const clientIP = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '127.0.0.1';
    if (!checkRateLimit(`login_${clientIP}`, 5, 900000)) { // 5 attempts per 15 minutes
      try { logSecurityEvent('RATE_LIMIT_EXCEEDED', { email: sanitizedEmail, ip: clientIP }); } catch(e){}
      return res.status(429).json({ message: 'Trop de tentatives de connexion. Veuillez réessayer plus tard.' });
    }

    // Find user by email in MySQL
    const users = await db.query('SELECT * FROM users WHERE email = ? AND isActive = 1 LIMIT 1', [sanitizedEmail]);

    if (users.length === 0) {
      try { logSecurityEvent('LOGIN_FAILED_USER_NOT_FOUND', { email: sanitizedEmail, ip: clientIP }); } catch(e){}
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }

    const user = users[0];

    // Verify password
    const isPasswordValid = await verifyPassword(password, user.password);
    
    if (!isPasswordValid) {
      try { logSecurityEvent('LOGIN_FAILED_PASSWORD', { email: sanitizedEmail, ip: clientIP }); } catch(e){}
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }

    // Update last login
    const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
    await db.query('UPDATE users SET lastLogin = ? WHERE id = ?', [now, user.id]);

    // Generate JWT token
    const tokenExpiry = rememberMe ? '30d' : '24h';
    // Mettre un rôle par défaut "user" si user.role n'existe pas dans le schema de base
    const role = user.role || 'user';
    const token = generateToken(user.id, user.email, role, tokenExpiry);

    // Create session in MySQL
    const expiresAtDate = new Date(Date.now() + (rememberMe ? 30 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000));
    
    const session = {
      id: crypto.randomUUID(),
      userId: user.id,
      isActive: true,
      createdAt: now,
      expiresAt: expiresAtDate.toISOString().slice(0, 19).replace('T', ' ')
    };

    await db.query('INSERT INTO sessions SET ?', [session]);

    // Log successful login
    try {
      logSecurityEvent('LOGIN_SUCCESS', { 
        email: sanitizedEmail, 
        ip: clientIP, 
        userId: user.id,
        rememberMe 
      });
    } catch(e){}

    // Remove sensitive data from user object
    const { password: _, ...userWithoutPassword } = user;

    // Return success response
    res.status(200).json({
      message: 'Connexion réussie',
      token,
      user: {
        id: user.id,
        name: user.firstName ? `${user.firstName} ${user.lastName || ''}`.trim() : 'User',
        email: user.email,
        role: role,
        lastLogin: now
      }
    });

  } catch (error) {
    console.error('[API LOGIN ERROR]:', error);
    try { logSecurityEvent('LOGIN_ERROR', { error: error.message }); } catch(e){}
    res.status(500).json({ message: 'Erreur serveur. Veuillez réessayer plus tard.' });
  }
}
