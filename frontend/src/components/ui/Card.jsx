export default function Card({ title, children, style = {} }) {
  return (
    <div
      className="rounded-2xl border border-slate-700/60 bg-slate-900/70 p-5 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:shadow-cyan-500/10"
      style={style}
    >
      {title ? <h3 className="mb-3 text-base font-semibold text-slate-100">{title}</h3> : null}
      {children}
    </div>
  );
}
