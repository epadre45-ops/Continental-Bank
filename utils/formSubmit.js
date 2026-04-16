import { generateCSRFToken, getCSRFToken } from '../lib/csrf';

/**
 * Flatten nested objects for email table (string values only).
 */
export function flattenForEmail(obj, parentKey = '') {
  const result = {};
  if (obj === null || obj === undefined) {
    return parentKey ? { [parentKey]: '' } : {};
  }
  if (typeof obj !== 'object' || Array.isArray(obj)) {
    const key = parentKey || 'value';
    result[key] = Array.isArray(obj) ? obj.join(', ') : String(obj);
    return result;
  }
  for (const [key, value] of Object.entries(obj)) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      Object.assign(result, flattenForEmail(value, newKey));
    } else {
      result[newKey] =
        value === null || value === undefined
          ? ''
          : Array.isArray(value)
            ? value.join(', ')
            : String(value);
    }
  }
  return result;
}

export async function submitFormEmail({ formName, payload, replyTo }) {
  // Generate or get existing CSRF token
  let csrfToken = getCSRFToken();
  if (!csrfToken) {
    csrfToken = generateCSRFToken();
  }

  const response = await fetch('/api/forms/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      formName,
      payload,
      replyTo: replyTo || undefined,
      csrfToken,
    }),
  });

  if (!response.ok) {
    let message = 'Failed to send form';
    try {
      const data = await response.json();
      if (data.message) message = data.message;
    } catch (_) {
      /* ignore */
    }
    throw new Error(message);
  }
}
