import { useState } from 'react';
import { useScans } from '../hooks/useScans';
import ScanTable from '../components/scan/ScanTable';
import ScanDetailModal from '../components/scan/ScanDetailModal';
import Spinner from '../components/ui/Spinner';

export default function Dashboard() {
  const [filter, setFilter] = useState('all');
  const [selectedScan, setSelectedScan] = useState(null);
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
          Auto refresh: <span className="font-semibold text-cyan-300">5s</span>
        </div>
      </div>

      <div className="mb-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-rose-400/30 bg-rose-500/10 p-4">
          <p className="text-xs uppercase tracking-[0.12em] text-rose-300">Deepfakes</p>
          <p className="mt-2 text-3xl font-black text-rose-200">{deepfakeCount}</p>
        </div>
        <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4">
          <p className="text-xs uppercase tracking-[0.12em] text-emerald-300">Real Media</p>
          <p className="mt-2 text-3xl font-black text-emerald-200">{realCount}</p>
        </div>
        <div className="rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-4">
          <p className="text-xs uppercase tracking-[0.12em] text-cyan-300">Avg Confidence</p>
          <p className="mt-2 text-3xl font-black text-cyan-200">{avgConfidence}%</p>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {['all', 'deepfake', 'real', 'inconclusive'].map((v) => (
          <button
            key={v}
            onClick={() => setFilter(v)}
            className={`rounded-full px-4 py-2 text-xs font-bold tracking-wider transition ${
              filter === v
                ? 'bg-gradient-to-r from-cyan-300 to-indigo-300 text-slate-900 shadow-lg shadow-cyan-500/30'
                : 'border border-slate-600/70 bg-slate-900/70 text-slate-300 hover:border-cyan-300/50 hover:text-cyan-200'
            }`}
          >
            {v.toUpperCase()}
          </button>
        ))}
      </div>

      {loading && <Spinner label="Loading scans..." />}
      {!loading && error && <p className="text-rose-300">{error}</p>}

      {!loading && !error && (
        <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-3 shadow-xl backdrop-blur-xl">
          <ScanTable scans={scans} onOpenModal={setSelectedScan} />
        </div>
      )}
      <ScanDetailModal open={Boolean(selectedScan)} scan={selectedScan} onClose={() => setSelectedScan(null)} />
    </div>
  );
}
