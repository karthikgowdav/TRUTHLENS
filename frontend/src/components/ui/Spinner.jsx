export default function Spinner({ label = 'Loading...' }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/80 px-3 py-1.5">
      <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-600 border-t-cyan-400" />
      <span className="text-sm text-slate-300">{label}</span>
    </div>
  );
}
