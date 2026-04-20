import { Link } from 'react-router-dom';
import VerdictBadge from './VerdictBadge';
import ConfidenceBar from './ConfidenceBar';

export default function ScanRow({ scan, index, onOpenModal }) {
  return (
    <tr className={`border-b border-slate-700/40 transition-colors ${index % 2 === 0 ? 'bg-slate-900/40' : 'bg-slate-800/30'} hover:bg-indigo-500/10`}>
      <td className="px-3 py-3 text-sm font-semibold capitalize text-slate-100">{scan.media_type}</td>
      <td className="px-3 py-3">
        <VerdictBadge verdict={scan.verdict} />
      </td>
      <td className="w-[220px] px-3 py-3">
        <ConfidenceBar confidence={scan.confidence} verdict={scan.verdict} />
        <span className="mt-1 inline-block text-xs text-slate-400">{scan.confidence}%</span>
      </td>
      <td className="px-3 py-3 text-sm text-slate-400">{scan.ai_platform || (scan.has_c2pa ? 'AI (C2PA)' : '-')}</td>
      <td className="px-3 py-3 text-sm text-slate-400">{scan.processing_ms}ms</td>
      <td className="px-3 py-3 text-sm text-slate-400">{new Date(scan.created_at).toLocaleTimeString()}</td>
      <td className="flex gap-2 px-3 py-3">
        <button onClick={() => onOpenModal(scan)} className="rounded-lg border border-cyan-300/40 bg-slate-800/80 px-2.5 py-1.5 text-xs font-semibold text-cyan-300 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-400/10">
          Quick View
        </button>
        <Link to={`/scan/${scan.scan_id}`} className="rounded-lg px-2.5 py-1.5 text-xs font-semibold text-violet-300 transition hover:bg-violet-400/15">
          Open
        </Link>
      </td>
    </tr>
  );
}
