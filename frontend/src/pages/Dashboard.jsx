import { useState } from 'react';
import { useScans } from '../hooks/useScans';
import ScanTable from '../components/scan/ScanTable';
import ScanDetailModal from '../components/scan/ScanDetailModal';
import FilterBar from '../components/scan/FilterBar';
import Spinner from '../components/ui/Spinner';

export default function Dashboard() {
  const [filter, setFilter] = useState('all');
  const [selectedScanId, setSelectedScanId] = useState(null);
  const { scans, loading, error } = useScans(filter);
  const deepfakeCount = scans.filter((s) => s.verdict === 'deepfake').length;
  const realCount = scans.filter((s) => s.verdict === 'real').length;
  const avgConfidence = scans.length ? (scans.reduce((sum, s) => sum + Number(s.confidence || 0), 0) / scans.length).toFixed(1) : '0.0';

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="mb-2 text-3xl font-black text-white sm:text-4xl">TruthLens Dashboard</h1>
          <p className="text-slate-400">Live scan feed with real-time verdict monitoring and quick forensic preview.</p>
        </div>
        <div className="rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-xs text-slate-300">
          Auto refresh: <span className="font-semibold text-cyan-300">25s</span>
        </div>
      </div>

      <div className="mb-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-700/60 bg-[#1e293b] p-4">
          <p className="text-xs uppercase tracking-[0.12em] text-rose-300">Deepfakes</p>
          <p className="mt-2 text-3xl font-black text-rose-200">{deepfakeCount}</p>
        </div>
        <div className="rounded-2xl border border-slate-700/60 bg-[#1e293b] p-4">
          <p className="text-xs uppercase tracking-[0.12em] text-emerald-300">Real Media</p>
          <p className="mt-2 text-3xl font-black text-emerald-200">{realCount}</p>
        </div>
        <div className="rounded-2xl border border-slate-700/60 bg-[#1e293b] p-4">
          <p className="text-xs uppercase tracking-[0.12em] text-cyan-300">Avg Confidence</p>
          <p className="mt-2 text-3xl font-black text-cyan-200">{avgConfidence}%</p>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <FilterBar value={filter} onChange={setFilter} />
        <div className="text-xs text-slate-400">
          Showing <span className="font-semibold text-slate-200">{scans.length}</span> scans
        </div>
      </div>

      {loading && <Spinner label="Loading scans..." />}
      {!loading && error && <p className="text-rose-300">{error}</p>}

      {!loading && !error && (
        <div className="rounded-2xl border border-slate-700/70 bg-[#1e293b] p-3 shadow-xl">
          <ScanTable scans={scans} onRowClick={(scanId) => setSelectedScanId(scanId)} />
        </div>
      )}
      <ScanDetailModal open={Boolean(selectedScanId)} scanId={selectedScanId} onClose={() => setSelectedScanId(null)} />
    </div>
  );
}
