/**
 * Rate Limiting Utility
 * Prevents form submission spam using in-memory storage
 */

// In-memory storage for rate limiting (resets on server restart)
const rateLimitStore = new Map();

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute in milliseconds
const RATE_LIMIT_MAX_REQUESTS = 5; // Max 5 submissions per minute per identifier

export const checkRateLimit = (identifier) => {
  const now = Date.now();
  const entry = rateLimitStore.get(identifier);
  
  // If no entry exists or window expired, create new entry
  if (!entry || now > entry.resetTime) {
    rateLimitStore.set(identifier, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW
    });
    
    return {
      allowed: true,
      remaining: RATE_LIMIT_MAX_REQUESTS - 1,
      resetTime: now + RATE_LIMIT_WINDOW
    };
  }
  
  // If within window, increment count
  if (entry.count < RATE_LIMIT_MAX_REQUESTS) {
    entry.count++;
    rateLimitStore.set(identifier, entry);
    
    return {
      allowed: true,
      remaining: RATE_LIMIT_MAX_REQUESTS - entry.count,
      resetTime: entry.resetTime
    };
  }
  
  // Rate limit exceeded
  return {
    allowed: false,
    remaining: 0,
    resetTime: entry.resetTime
  };
};

// Clean up expired entries (call periodically)
export const cleanupRateLimitStore = () => {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore.entries()) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(key);
    }
  }
};

// Get identifier from request (IP or email)
export const getRateLimitIdentifier = (req) => {
  // Try to get IP from headers (common patterns)
  const ip = 
    (req.headers['x-forwarded-for'] && req.headers['x-forwarded-for'].split(',')[0].trim()) ||
    req.headers['x-real-ip'] ||
    (req.socket && req.socket.remoteAddress) ||
    'unknown';
  
  // If email is provided in body, use it for more precise limiting
  const email = (req.body && req.body.payload && req.body.payload.email) || (req.body && req.body.email);
  
  return email ? `email:${email}` : `ip:${ip}`;
};
