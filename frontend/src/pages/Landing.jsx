export default function Landing() {
  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-10 sm:px-6">
      <div className="pointer-events-none absolute -left-8 top-20 h-48 w-48 animate-pulse rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-4 bottom-10 h-56 w-56 animate-pulse rounded-full bg-violet-500/20 blur-3xl" />

      <div className="grid w-full gap-8 rounded-3xl border border-slate-700/70 bg-slate-900/65 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl md:grid-cols-2 md:p-8">
        <div className="grid content-center gap-5">
          <span className="w-fit rounded-full border border-cyan-300/35 bg-cyan-400/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-300">
            AI Authenticity Assistant
          </span>
          <h1 className="text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            TruthLens
          </h1>
          <p className="max-w-xl text-base text-slate-300 sm:text-lg">
            Forward it. We will tell you if it is real. Monitor scans in real time and track deepfake detection analytics in one place.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/dashboard"
              className="rounded-xl bg-gradient-to-r from-cyan-300 to-indigo-300 px-5 py-3 text-sm font-bold text-slate-900 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              Open Dashboard
            </a>
            <a
              href="/analytics"
              className="rounded-xl border border-slate-500/60 bg-slate-800/75 px-5 py-3 text-sm font-bold text-slate-100 transition hover:-translate-y-1 hover:border-violet-300/60 hover:bg-violet-500/20"
            >
              View Analytics
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-600/50 bg-gradient-to-br from-slate-800 to-indigo-950 p-5 text-center shadow-lg shadow-indigo-950/40">
          <img
            src="/truthlens-qr.png"
            alt="TruthLens Telegram bot QR code"
            className="mx-auto mb-4 w-full max-w-[340px] rounded-xl border border-slate-500/40 transition duration-300 hover:scale-[1.02]"
          />

          <p className="mb-1 text-sm font-bold text-slate-100 sm:text-base">Scan to open Telegram bot</p>
          <p className="text-sm text-slate-400">@truthlens_bot</p>
        </div>
      </div>
    </div>
  );
}
