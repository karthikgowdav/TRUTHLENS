export default function MetricCard({ label, value, sub, color = '#4f46e5' }) {
  return (
    <div className="group rounded-2xl border border-slate-700/70 bg-gradient-br from-slate-900 via-slate-800 to-indigo-950 p-5 shadow-xl transition hover:-translate-y-1 hover:border-cyan-400/35 hover:shadow-cyan-900/20">
      <p className="mb-2 text-[11px] uppercase tracking-[0.12em] text-cyan-300">{label}</p>
      <p className="mb-1 text-3xl font-extrabold leading-none transition group-hover:scale-[1.02]" style={{ color }}>
        {value}
      </p>
      {sub && <p className="text-xs text-slate-400">{sub}</p>}
    </div>
  );
}
