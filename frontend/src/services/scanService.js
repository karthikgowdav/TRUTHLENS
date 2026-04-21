import { API_BASE, USE_MOCK } from '../constants';
import { mockScans } from '../mock/mockScans';
import { http } from './http';

export const getScans = async (limit = 50, offset = 0, verdict = 'all') => {
  if (USE_MOCK) return mockScans;
  const res = await http.get(`/scans`, {
    params: { limit, offset, verdict },
  });
  // Backend returns: { success, data: { scans: [...] }, error }
  return res.data;
};

export const getScanById = async (scanId) => {
  if (USE_MOCK) {
    const scans = Array.isArray(mockScans?.data) ? mockScans.data : mockScans?.data?.scans;
    const scan = (scans || []).find((s) => s.scan_id === scanId);
    return scan ?? null;
  }
  const res = await http.get(`/scans/${scanId}`);
  // Backend returns: { success, data: { ...scan }, error }
  return res.data;
};
