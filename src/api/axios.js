import axios from 'axios';

const backendUrl = (import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000')
  .replace(/\/+$/, '')
  .replace(/\/api$/, '');

const api = axios.create({
  baseURL: `${backendUrl}/api`,
  headers: { 'Content-Type': 'application/json' },
});

export default api;
