import axios from 'axios';
import { API_BASE, USE_MOCK } from '../constants';
import { mockScans } from '../mock/mockScans';

export const getScans = async (limit = 50, offset = 0, verdict = 'all') => {
  if (USE_MOCK) return mockScans;
  const res = await axios.get(`${API_BASE}/scans`, {
    params: { limit, offset, verdict },
  });
  return res.data;
};

export const getScanById = async (scanId) => {
  if (USE_MOCK) {
    const scan = mockScans.data.scans.find((s) => s.scan_id === scanId);
    return { success: true, data: scan, error: null };
  }
  const res = await axios.get(`${API_BASE}/scans/${scanId}`);
  return res.data;
};
