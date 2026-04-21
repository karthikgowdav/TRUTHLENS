export default function FilterBar({ value, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <label className="text-xs font-semibold tracking-wider text-slate-300">
        Filter
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="ml-2 rounded-xl border border-slate-600/70 bg-slate-900/60 px-3 py-2 text-xs font-semibold text-slate-100 outline-none transition focus:border-cyan-300/50"
        >
          <option value="all">all</option>
          <option value="deepfake">deepfake</option>
          <option value="real">real</option>
        </select>
      </label>
    </div>
  );
}
