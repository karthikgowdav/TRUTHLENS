import VerdictBadge from './VerdictBadge';
import ConfidenceBar from './ConfidenceBar';

export default function ScanRow({ scan, index, onRowClick }) {
  return (
    <tr
      onClick={() => onRowClick?.(scan.scan_id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onRowClick?.(scan.scan_id)}
      className={`cursor-pointer border-b border-slate-700/40 transition-colors ${index % 2 === 0 ? 'bg-slate-900/40' : 'bg-slate-800/30'} hover:bg-indigo-500/10`}
    >
      <td className="px-3 py-3 text-sm font-semibold capitalize text-slate-100">{scan.media_type}</td>
      <td className="px-3 py-3">
        <VerdictBadge verdict={scan.verdict} />
      </td>
      <td className="w-[220px] px-3 py-3">
        <ConfidenceBar confidence={scan.confidence} verdict={scan.verdict} />
        <span className="mt-1 inline-block text-xs text-slate-400">{scan.confidence}%</span>
      </td>
      <td className="px-3 py-3 text-sm text-slate-300">{Number(scan.fake_probability ?? 0).toFixed(2)}</td>
      <td className="px-3 py-3 text-sm text-slate-300">{Number(scan.real_probability ?? 0).toFixed(2)}</td>
      <td className="px-3 py-3 text-sm text-slate-400">{scan.processing_ms}ms</td>
      <td className="px-3 py-3 text-sm text-slate-400">{new Date(scan.created_at).toLocaleString()}</td>
    </tr>
  );
}
