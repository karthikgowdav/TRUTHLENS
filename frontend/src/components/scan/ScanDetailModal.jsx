import HeatmapViewer from './HeatmapViewer';
import VerdictBadge from './VerdictBadge';

export default function ScanDetailModal({ open, scan, onClose }) {
  if (!open || !scan) return null;

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm">
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[min(900px,95vw)] animate-pulse rounded-2xl border border-slate-600/50 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 p-5 text-slate-200 shadow-2xl shadow-cyan-900/20"
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="m-0 text-lg font-bold tracking-wide">Scan Quick View</h3>
          <button onClick={onClose} className="rounded-lg border border-slate-500/50 bg-slate-700/70 px-3 py-1.5 text-sm font-semibold transition hover:bg-slate-600">
            Close
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="grid gap-3 rounded-xl border border-slate-700/70 bg-slate-900/60 p-4">
            <div><strong className="text-cyan-300">Scan ID:</strong> <span className="break-all text-slate-300">{scan.scan_id}</span></div>
            <div><strong className="text-cyan-300">Verdict:</strong> <span className="ml-2"><VerdictBadge verdict={scan.verdict} /></span></div>
            <div><strong className="text-cyan-300">Confidence:</strong> <span className="text-slate-300">{scan.confidence}%</span></div>
            <div><strong className="text-cyan-300">Forensic Flags:</strong> <span className="text-slate-300">{scan.forensic_flags?.length ? scan.forensic_flags.join(', ') : '-'}</span></div>
          </div>
          <HeatmapViewer score={scan.forensic_score} />
        </div>
      </div>
    </div>
  );
}
