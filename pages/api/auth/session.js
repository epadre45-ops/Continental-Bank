import crypto from 'crypto';
import db from '../../../lib/database.js';
import { checkRateLimit } from '../../../lib/rateLimit.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Rate limiting: 20 requests per minute per IP
  const clientIP = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '127.0.0.1';
  if (!checkRateLimit(`session_${clientIP}`, 20, 60000)) {
    return res.status(429).json({ message: 'Too many requests. Please try again later.' });
  }

  try {
    const { userId, action, sessionId } = req.body;

    if (action === 'create') {
      // Create new session
      if (!userId) {
        return res.status(400).json({ message: 'User ID is required' });
      }

      const newSessionId = crypto.randomUUID();

      await db.query(
        'INSERT INTO sessions (id, userId, isActive, createdAt, expiresAt) VALUES (?, ?, 1, NOW(), DATE_ADD(NOW(), INTERVAL 30 MINUTE))', 
        [newSessionId, userId]
      );

      // On récupère la date d'expiration exacte générée par MySQL pour la renvoyer au client
      const created = await db.query('SELECT expiresAt FROM sessions WHERE id = ?', [newSessionId]);

      return res.status(201).json({
        message: 'Session created',
        session: {
          id: newSessionId,
          userId: userId,
          expiresAt: created[0]?.expiresAt || new Date(Date.now() + 30*60000).toISOString()
        }
      });

    } else if (action === 'get') {
      // Get active session
      if (!sessionId) {
        return res.status(400).json({ message: 'Session ID is required' });
      }

      const sessions = await db.query('SELECT * FROM sessions WHERE id = ? AND isActive = 1 AND expiresAt > NOW() LIMIT 1', [sessionId]);

      if (sessions.length === 0) {
        // Clean up expired session automatically
        await db.query('UPDATE sessions SET isActive = 0, deactivatedAt = NOW() WHERE id = ? AND expiresAt <= NOW()', [sessionId]);
        return res.status(404).json({ message: 'Session not found or expired' });
      }

      const session = sessions[0];

      return res.status(200).json({
        session: {
          id: session.id,
          userId: session.userId,
          expiresAt: session.expiresAt
        }
      });

    } else if (action === 'destroy') {
      // Destroy session
      if (!sessionId) {
        return res.status(400).json({ message: 'Session ID is required' });
      }

      await db.query('UPDATE sessions SET isActive = 0, deactivatedAt = NOW() WHERE id = ?', [sessionId]);

      return res.status(200).json({ message: 'Session destroyed' });

    } else if (action === 'extend') {
      // Extend session
      if (!sessionId) {
        return res.status(400).json({ message: 'Session ID is required' });
      }

      await db.query('UPDATE sessions SET expiresAt = DATE_ADD(NOW(), INTERVAL 30 MINUTE) WHERE id = ? AND isActive = 1', [sessionId]);

      return res.status(200).json({ message: 'Session extended' });

    } else {
      return res.status(400).json({ message: 'Invalid action' });
    }

  } catch (error) {
    console.error('[API SESSION] Error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
