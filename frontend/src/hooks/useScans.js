import { useEffect, useState } from 'react';
import { getScans } from '../services/scanService';
import { POLL_INTERVAL_SCANS } from '../constants';

export function useScans(verdict = 'all') {
  const [scans, setScans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchScans = async () => {
    try {
      const res = await getScans(50, 0, verdict);
      setScans(res?.data?.scans ?? []);
      setError(null);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchScans();
    const interval = setInterval(fetchScans, POLL_INTERVAL_SCANS);
    return () => clearInterval(interval);
  }, [verdict]);

  return { scans, loading, error, refetch: fetchScans };
}
