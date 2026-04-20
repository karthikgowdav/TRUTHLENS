export default function Spinner({ label = 'Loading...' }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
      <span
        style={{
          width: '16px',
          height: '16px',
          border: '2px solid #d1d5db',
          borderTopColor: '#4f46e5',
          borderRadius: '50%',
          display: 'inline-block',
          animation: 'spin 1s linear infinite',
        }}
      />
      <span style={{ color: '#6b7280', fontSize: '14px' }}>{label}</span>
      <style>{'@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }'}</style>
    </div>
  );
}
