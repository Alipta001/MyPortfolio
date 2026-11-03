import axios from 'axios';

const configuredBackendUrl = import.meta.env.VITE_API_URL || import.meta.env.VITE_BACKEND_URL;
const fallbackBackendUrl = typeof window !== 'undefined' && window.location.hostname === 'localhost'
  ? 'http://localhost:4000'
  : 'https://my-portfolio-admin-7f6p.onrender.com';

export const backendUrl = (configuredBackendUrl || fallbackBackendUrl)
  .replace(/\/+$/, '')
  .replace(/\/api$/, '');

export function resolveImageUrl(imagePath) {
  if (!imagePath || typeof imagePath !== 'string') return '';
  const trimmed = imagePath.trim();
  if (!trimmed) return '';

  // Already absolute or data URI
  if (/^(https?:)?\/\//i.test(trimmed) || trimmed.startsWith('data:')) {
    return trimmed;
  }

  // Relative path like /uploads/...
  const cleanPath = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  return `${backendUrl}${cleanPath}`;
}

const api = axios.create({
  baseURL: `${backendUrl}/api`,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
  timeout: 90000,
});

export default api;
