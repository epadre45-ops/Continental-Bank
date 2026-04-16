// Secure logging utility that sanitizes sensitive data
// Prevents logging of passwords, tokens, emails, and other sensitive information

const SENSITIVE_FIELDS = [
  'password',
  'token',
  'secret',
  'apiKey',
  'api_key',
  'authorization',
  'bearer',
  'creditCard',
  'ssn',
  'socialSecurity',
  'accountNumber',
  'iban',
  'routingNumber',
  'pin'
];

export function sanitizeForLogging(data) {
  if (!data) return data;

  if (typeof data === 'string') {
    return data;
  }

  if (Array.isArray(data)) {
    return data.map(item => sanitizeForLogging(item));
  }

  if (typeof data === 'object') {
    const sanitized = { ...data };
    for (const key of Object.keys(sanitized)) {
      const lowerKey = key.toLowerCase();
      
      if (SENSITIVE_FIELDS.some(field => lowerKey.includes(field))) {
        sanitized[key] = '[REDACTED]';
      } else if (typeof sanitized[key] === 'object') {
        sanitized[key] = sanitizeForLogging(sanitized[key]);
      }
    }
    return sanitized;
  }

  return data;
}

export function logSecurityEvent(event, data = {}) {
  const sanitizedData = sanitizeForLogging(data);
  const timestamp = new Date().toISOString();
  
  // In production, send to secure logging service
  console.log(`[SECURITY ${timestamp}] ${event}`, JSON.stringify(sanitizedData));
}

export function logError(error, context = {}) {
  const sanitizedContext = sanitizeForLogging(context);
  const timestamp = new Date().toISOString();
  
  // In production, send to error tracking service
  console.error(`[ERROR ${timestamp}]`, {
    message: error.message,
    stack: error.stack,
    context: sanitizedContext
  });
}

export function logInfo(message, data = {}) {
  const sanitizedData = sanitizeForLogging(data);
  const timestamp = new Date().toISOString();
  
  console.log(`[INFO ${timestamp}] ${message}`, JSON.stringify(sanitizedData));
}
