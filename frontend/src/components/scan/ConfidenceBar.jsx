export default function ConfidenceBar({ confidence, verdict }) {
  const color = verdict === 'deepfake' ? '#DC2626' : verdict === 'real' ? '#16A34A' : '#D97706';

  return (
    <div className="h-2.5 w-full rounded-full bg-slate-700/50">
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{
          width: `${confidence}%`,
          background: `linear-gradient(90deg, ${color}, ${color}cc)`,
        }}
      />
    </div>
  );
}
