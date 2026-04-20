import { VERDICT_COLORS } from '../../constants';

export default function VerdictBadge({ verdict }) {
  const colors = VERDICT_COLORS[verdict] || VERDICT_COLORS.inconclusive;
  const labels = {
    deepfake: 'DEEPFAKE',
    real: 'REAL',
    inconclusive: 'INCONCLUSIVE',
  };

  return (
    <span
      className="inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wider"
      style={{ background: `${colors.bg}22`, color: colors.text, borderColor: colors.border }}
    >
      {labels[verdict] || verdict?.toUpperCase?.() || 'UNKNOWN'}
    </span>
  );
}
