import axios from 'axios';

const configuredBackendUrl = import.meta.env.VITE_API_URL || import.meta.env.VITE_BACKEND_URL || 'https://my-portfolio-admin-7f6p.onrender.com';
const fallbackBackendUrl = typeof window !== 'undefined' && window.location.hostname === 'localhost'
  ? 'http://localhost:5000'
  : configuredBackendUrl;

const backendUrl = (fallbackBackendUrl || configuredBackendUrl)
  .replace(/\/+$/, '')
  .replace(/\/api$/, '');

const api = axios.create({
  baseURL: `${backendUrl}/api`,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
  timeout: 20000,
});

export default api;
