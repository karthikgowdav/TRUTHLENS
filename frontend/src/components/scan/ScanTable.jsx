import ScanRow from './ScanRow';

export default function ScanTable({ scans, onRowClick }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-700/70">
      <table className="min-w-[940px] w-full border-collapse">
        <thead>
          <tr className="bg-slate-800/80 text-left">
            <th className="px-3.5 py-3 text-sm font-semibold text-cyan-300">Media Type</th>
            <th className="px-3.5 py-3 text-sm font-semibold text-cyan-300">Verdict</th>
            <th className="px-3.5 py-3 text-sm font-semibold text-cyan-300">Confidence</th>
            <th className="px-3.5 py-3 text-sm font-semibold text-cyan-300">Fake Probability</th>
            <th className="px-3.5 py-3 text-sm font-semibold text-cyan-300">Real Probability</th>
            <th className="px-3.5 py-3 text-sm font-semibold text-cyan-300">Processing Time</th>
            <th className="px-3.5 py-3 text-sm font-semibold text-cyan-300">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {scans.map((scan, index) => (
            <ScanRow key={scan.scan_id} scan={scan} index={index} onRowClick={onRowClick} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
