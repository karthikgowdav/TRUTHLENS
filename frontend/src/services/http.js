import axios from 'axios';
import { API_BASE } from '../constants';

export const http = axios.create({
  baseURL: API_BASE,
  timeout: 20000,
  headers: {
    // Helps bypass ngrok's browser warning interstitial when present
    'ngrok-skip-browser-warning': '1',
  },
});

