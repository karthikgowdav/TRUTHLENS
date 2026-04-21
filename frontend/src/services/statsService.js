import { USE_MOCK } from '../constants';
import { mockStats } from '../mock/mockStats';
import { http } from './http';

export const getStats = async () => {
  if (USE_MOCK) return mockStats;
  const res = await http.get(`/stats`);
  // Backend returns: { success, data: { ...stats }, error }
  return res.data;
};

export const getHealth = async () => {
  try {
    const res = await http.get(`/health`);
    // Backend returns: { status: "ok", model_loaded: boolean } (no wrapper)
    return res.data;
  } catch {
    return { status: 'offline', model_loaded: false };
  }
};
