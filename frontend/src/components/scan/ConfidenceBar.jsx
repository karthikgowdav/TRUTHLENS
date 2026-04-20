export default function ConfidenceBar({ confidence, verdict }) {
  const color = verdict === 'deepfake' ? '#DC2626' : verdict === 'real' ? '#16A34A' : '#D97706';

  return (
    <div style={{ width: '100%', background: '#e5e7eb', borderRadius: '4px', height: '8px' }}>
      <div
        style={{
          width: `${confidence}%`,
          background: color,
          height: '100%',
          borderRadius: '4px',
          transition: 'width 0.3s ease',
        }}
      />
    </div>
  );
}
