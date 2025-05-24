// src/api/axiosClient.js
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://threecongianphim.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
