import axios from 'axios';

// Always use localhost for development
// For production, use VITE_API_URL_PROD if set, otherwise fallback to the Render backend directly.
// This prevents the local .env (VITE_API_URL=http://localhost...) from breaking production.
const baseURL = import.meta.env.DEV
  ? 'http://localhost:3000/api'
  : (import.meta.env.VITE_API_URL_PROD || 'https://snapart-be.onrender.com/api');

const http = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default http;
