export function normalizeContact(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

export function normalizePhone(value: string) {
  return value.replace(/[\s()-]/g, "");
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value);
}

export function isValidPhone(value: string) {
  return /^\+?\d{10,15}$/.test(normalizePhone(value));
}
