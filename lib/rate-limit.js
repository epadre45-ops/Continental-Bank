// Simple in-memory rate limiter for API protection
// For production, use Redis or similar distributed cache

const rateLimitMap = new Map();

export function checkRateLimit(identifier, maxRequests, windowMs) {
  const now = Date.now();
  const windowStart = now - windowMs;

  let requests = rateLimitMap.get(identifier) || [];

  // Filter out requests outside the time window
  requests = requests.filter(timestamp => timestamp > windowStart);

  // Check if limit exceeded
  if (requests.length >= maxRequests) {
    return false;
  }

  // Add current request
  requests.push(now);
  rateLimitMap.set(identifier, requests);

  return true;
}

export function getClientIP(req) {
  return req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
}

export function getRateLimitHeaders(identifier, maxRequests, windowMs) {
  const requests = rateLimitMap.get(identifier) || [];
  const now = Date.now();
  const windowStart = now - windowMs;
  
  const validRequests = requests.filter(timestamp => timestamp > windowStart);
  const remaining = Math.max(0, maxRequests - validRequests.length);
  const resetTime = new Date(windowStart + windowMs).toISOString();

  return {
    'X-RateLimit-Limit': maxRequests,
    'X-RateLimit-Remaining': remaining,
    'X-RateLimit-Reset': resetTime
  };
}
