import axios from 'axios';

// Ganti URL sesuai dengan base URL API backend Anda
const api = axios.create({
  baseURL: import.meta.env.vite_BASE_URL ,
  timeout: 3000,
});


const axiosInstance = axios.create({
  baseURL: import.meta.env.vite_BASE_URL ,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor untuk menyertakan token jika ada
axiosInstance.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem('yoga_user'));
    if (user && user.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default {axiosInstance, api};
