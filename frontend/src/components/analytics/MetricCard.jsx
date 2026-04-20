export default function MetricCard({ label, value, sub, color = '#4f46e5' }) {
  return (
    <div
      style={{
        background: '#f9fafb',
        borderRadius: '12px',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <p style={{ fontSize: '13px', color: '#6b7280', margin: '0 0 8px' }}>{label}</p>
      <p style={{ fontSize: '32px', fontWeight: '700', color, margin: '0 0 4px' }}>{value}</p>
      {sub && <p style={{ fontSize: '12px', color: '#9ca3af', margin: 0 }}>{sub}</p>}
    </div>
  );
}
