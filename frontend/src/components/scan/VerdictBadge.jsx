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
      style={{
        background: colors.bg,
        color: colors.text,
        border: `1px solid ${colors.border}`,
        padding: '2px 10px',
        borderRadius: '9999px',
        fontSize: '12px',
        fontWeight: '600',
      }}
    >
      {labels[verdict] || verdict?.toUpperCase?.() || 'UNKNOWN'}
    </span>
  );
}
