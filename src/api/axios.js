import axios from 'axios';

const fallbackBackendUrl = typeof window !== 'undefined' && window.location.hostname !== 'localhost'
  ? 'https://my-portfolio-admin-7f6p.onrender.com'
  : 'http://localhost:5000';

const backendUrl = (import.meta.env.VITE_BACKEND_URL || fallbackBackendUrl)
  .replace(/\/+$/, '')
  .replace(/\/api$/, '');

const api = axios.create({
  baseURL: `${backendUrl}/api`,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

export default api;
