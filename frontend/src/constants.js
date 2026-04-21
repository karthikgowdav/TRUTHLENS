// Use same-origin proxy in dev to avoid CORS/ngrok interstitial issues.
// Production builds still point at the provided backend base URL.
export const API_BASE = import.meta.env.DEV
  ? '/api'
  : 'https://cranium-deplete-wasting.ngrok-free.dev/api';
export const POLL_INTERVAL_SCANS = 25000;
export const POLL_INTERVAL_STATS = 10000;
export const USE_MOCK = false;

export const VERDICT_COLORS = {
  deepfake: { bg: '#FEE2E2', text: '#DC2626', border: '#DC2626' },
  real: { bg: '#DCFCE7', text: '#16A34A', border: '#16A34A' },
  inconclusive: { bg: '#FEF3C7', text: '#D97706', border: '#D97706' },
};
