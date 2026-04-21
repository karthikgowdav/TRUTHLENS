export default function SystemStatusBar({ health }) {
  const modelLoaded = Boolean(health?.model_loaded);
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold ${
        modelLoaded ? 'border-emerald-400/40 bg-emerald-500/15 text-emerald-300' : 'border-rose-400/40 bg-rose-500/15 text-rose-300'
      }`}
    >
      <span>{health?.status === 'ok' ? 'System Online' : 'System Offline'}</span>
      <span className="opacity-80">Model: {modelLoaded ? 'Loaded' : 'Not Loaded'}</span>
    </div>
  );
}
