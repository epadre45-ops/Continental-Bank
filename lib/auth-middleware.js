import { logSecurityEvent } from './logger.js';

// Middleware to verify session tokens for protected API endpoints
export function verifySession(req) {
  const sessionId = req.headers['x-session-id'] || req.body.sessionId;
  
  if (!sessionId) {
    return { valid: false, reason: 'No session provided' };
  }

  // In production, verify against database or session store
  // For now, simple validation that session format is correct
  if (typeof sessionId !== 'string' || sessionId.length < 16) {
    logSecurityEvent('INVALID_SESSION_FORMAT', { sessionId: sessionId?.substring(0, 10) + '...' });
    return { valid: false, reason: 'Invalid session format' };
  }

  return { valid: true, sessionId };
}

// Middleware to verify JWT tokens for protected API endpoints
export function verifyToken(req) {
  const authHeader = req.headers['authorization'];
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { valid: false, reason: 'No authorization header' };
  }

  const token = authHeader.substring(7);
  
  if (!token || token.length < 20) {
    logSecurityEvent('INVALID_TOKEN', { token: token?.substring(0, 10) + '...' });
    return { valid: false, reason: 'Invalid token format' };
  }

  // In production, verify JWT signature and expiry
  // For now, simple format validation
  try {
    const parts = token.split('.');
    if (parts.length !== 3) {
      return { valid: false, reason: 'Invalid JWT format' };
    }
    
    return { valid: true, token };
  } catch (error) {
    logSecurityEvent('TOKEN_VERIFICATION_ERROR', { error: error.message });
    return { valid: false, reason: 'Token verification failed' };
  }
}

// Middleware to check if endpoint requires authentication
export function requiresAuthentication(endpoint) {
  const protectedEndpoints = [
    '/api/users',
    '/api/auth/session',
    '/api/applications'
  ];

  return protectedEndpoints.some(ep => endpoint.startsWith(ep));
}

// Middleware to block unauthorized access
export function blockUnauthorized(req, res) {
  logSecurityEvent('UNAUTHORIZED_ACCESS_ATTEMPT', {
    endpoint: req.url,
    ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
  });
  
  return res.status(401).json({ 
    message: 'Unauthorized access denied',
    code: 'UNAUTHORIZED'
  });
}

// Middleware to block forbidden access
export function blockForbidden(req, res) {
  logSecurityEvent('FORBIDDEN_ACCESS_ATTEMPT', {
    endpoint: req.url,
    ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
  });
  
  return res.status(403).json({ 
    message: 'Access forbidden',
    code: 'FORBIDDEN'
  });
}
