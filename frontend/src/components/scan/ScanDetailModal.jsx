import { useEffect, useState } from 'react';
import { getScanById } from '../../services/scanService';
import VerdictBadge from './VerdictBadge';
import Spinner from '../ui/Spinner';

export default function ScanDetailModal({ open, scanId, onClose }) {
  const [scan, setScan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!open || !scanId) return;
    let cancelled = false;

    const fetchDetail = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await getScanById(scanId);
        if (!cancelled) setScan(res?.data ?? null);
      } catch (e) {
        if (!cancelled) setError(e.message || 'Failed to load scan.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchDetail();
    return () => {
      cancelled = true;
    };
  }, [open, scanId]);

  if (!open || !scanId) return null;

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm">
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[min(900px,95vw)] rounded-2xl border border-slate-600/50 bg-gradient-br from-slate-900 via-slate-800 to-indigo-950 p-5 text-slate-200 shadow-2xl shadow-cyan-900/20"
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="m-0 text-lg font-bold tracking-wide">Scan Quick View</h3>
          <button onClick={onClose} className="rounded-lg border border-slate-500/50 bg-slate-700/70 px-3 py-1.5 text-sm font-semibold transition hover:bg-slate-600">
            Close
          </button>
        </div>
        {loading && <Spinner label="Loading scan detail..." />}
        {!loading && error && <p className="text-sm text-rose-300">{error}</p>}

        {!loading && !error && scan && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="grid gap-3 rounded-xl border border-slate-700/70 bg-slate-900/60 p-4">
              <div><strong className="text-cyan-300">Scan ID:</strong> <span className="break-all text-slate-300">{scan.scan_id}</span></div>
              <div><strong className="text-cyan-300">Verdict:</strong> <span className="ml-2"><VerdictBadge verdict={scan.verdict} /></span></div>
              <div><strong className="text-cyan-300">Media Type:</strong> <span className="text-slate-300">{scan.media_type}</span></div>
              <div><strong className="text-cyan-300">Confidence:</strong> <span className="text-slate-300">{scan.confidence}%</span></div>
              <div><strong className="text-cyan-300">Processing:</strong> <span className="text-slate-300">{scan.processing_ms}ms</span></div>
              <div><strong className="text-cyan-300">Timestamp:</strong> <span className="text-slate-300">{new Date(scan.created_at).toLocaleString()}</span></div>
            </div>
            <div className="grid gap-3 rounded-xl border border-slate-700/70 bg-slate-900/60 p-4">
              <div><strong className="text-cyan-300">Fake Probability:</strong> <span className="text-slate-300">{scan.fake_probability ?? '-'}</span></div>
              <div><strong className="text-cyan-300">Real Probability:</strong> <span className="text-slate-300">{scan.real_probability ?? '-'}</span></div>
              <div><strong className="text-cyan-300">Forensic Score:</strong> <span className="text-slate-300">{scan.forensic_score ?? '-'}</span></div>
              <div>
                <strong className="text-cyan-300">Forensic Flags:</strong>
                <p className="mt-1 text-slate-300">{scan.forensic_flags?.length ? scan.forensic_flags.join(', ') : '-'}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
