import axios from 'axios';

const baseURL = import.meta.env.DEV
  ? (import.meta.env.VITE_API_URL_DEV || 'http://localhost:3000/api')
  : (import.meta.env.VITE_API_URL_PROD || import.meta.env.VITE_API_URL || 'https://snapart-be.onrender.com/api');

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
