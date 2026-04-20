export default function SystemStatusBar({ health }) {
  const online = health?.status === 'ok';
  return (
    <div
      style={{
        padding: '8px 14px',
        borderRadius: '9999px',
        fontSize: '13px',
        fontWeight: 600,
        background: online ? '#DCFCE7' : '#FEE2E2',
        color: online ? '#16A34A' : '#DC2626',
        display: 'inline-flex',
        gap: '8px',
        alignItems: 'center',
      }}
    >
      <span>{online ? 'System Online' : 'System Offline'}</span>
      <span style={{ opacity: 0.8 }}>Model: {health?.model_loaded ? 'Loaded' : 'Not Loaded'}</span>
    </div>
  );
}
