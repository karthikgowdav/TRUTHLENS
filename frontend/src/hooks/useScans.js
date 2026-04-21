import { useEffect, useState } from 'react';
import { getScans } from '../services/scanService';
import { POLL_INTERVAL_SCANS } from '../constants';

export function useScans(verdict = 'all') {
  const [scans, setScans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchScans = async () => {
    setLoading(true);
    try {
      const res = await getScans(50, 0, verdict);
      const list = Array.isArray(res?.data?.scans) ? res.data.scans : [];
      // Always show latest scan at top
      const sorted = [...list].sort((a, b) => new Date(b?.created_at).getTime() - new Date(a?.created_at).getTime());
      setScans(sorted);
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
