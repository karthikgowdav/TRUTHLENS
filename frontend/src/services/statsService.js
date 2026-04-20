import axios from 'axios';
import { API_BASE, USE_MOCK } from '../constants';
import { mockStats } from '../mock/mockStats';

export const getStats = async () => {
  if (USE_MOCK) return mockStats;
  const res = await axios.get(`${API_BASE}/stats`);
  return res.data;
};

export const getHealth = async () => {
  try {
    const res = await axios.get(`${API_BASE}/health`);
    return res.data;
  } catch {
    return { status: 'offline', model_loaded: false };
  }
};
