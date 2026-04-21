import { useEffect, useState } from 'react';
import { getHealth, getStats } from '../services/statsService';
import { POLL_INTERVAL_STATS } from '../constants';

export function useStats() {
  const [stats, setStats] = useState(null);
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAll = async () => {
    try {
      const [s, h] = await Promise.all([getStats(), getHealth()]);
      setStats(s?.data ?? null);
      setHealth(h ?? null);
      setError(null);
    } catch (e) {
      setError(e.message || 'Failed to load analytics.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
    const interval = setInterval(fetchAll, POLL_INTERVAL_STATS);
    return () => clearInterval(interval);
  }, []);

  return { stats, health, loading, error };
}
