import { useState } from 'react';
import { useScans } from '../hooks/useScans';
import ScanTable from '../components/scan/ScanTable';
import ScanDetailModal from '../components/scan/ScanDetailModal';
import Spinner from '../components/ui/Spinner';

export default function Dashboard() {
  const [filter, setFilter] = useState('all');
  const [selectedScan, setSelectedScan] = useState(null);
  const { scans, loading, error } = useScans(filter);

  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px' }}>TruthLens Dashboard</h1>
      <p style={{ color: '#6b7280', marginBottom: '24px' }}>Live scan feed - updates every 5 seconds</p>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        {['all', 'deepfake', 'real', 'inconclusive'].map((v) => (
          <button
            key={v}
            onClick={() => setFilter(v)}
            style={{
              padding: '6px 16px',
              borderRadius: '9999px',
              cursor: 'pointer',
              background: filter === v ? '#4f46e5' : '#f3f4f6',
              color: filter === v ? 'white' : '#374151',
              border: 'none',
              fontWeight: '500',
            }}
          >
            {v.toUpperCase()}
          </button>
        ))}
      </div>

      {loading && <Spinner label="Loading scans..." />}
      {!loading && error && <p style={{ color: '#DC2626' }}>{error}</p>}

      {!loading && !error && (
        <ScanTable scans={scans} onOpenModal={setSelectedScan} />
      )}
      <ScanDetailModal open={Boolean(selectedScan)} scan={selectedScan} onClose={() => setSelectedScan(null)} />
    </div>
  );
}
