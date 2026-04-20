export default function Landing() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
        background: '#f9fafb',
      }}
    >
      <h1 style={{ fontSize: '48px', fontWeight: '800', color: '#1a1a2e', marginBottom: '8px' }}>TruthLens</h1>
      <p style={{ fontSize: '20px', color: '#4f46e5', marginBottom: '48px' }}>Forward it. We'll tell you if it's real.</p>

      <div
        style={{
          background: 'white',
          borderRadius: '16px',
          padding: '40px',
          textAlign: 'center',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          marginBottom: '32px',
        }}
      >
        <div
          style={{
            width: '200px',
            height: '200px',
            background: '#e5e7eb',
            borderRadius: '12px',
            margin: '0 auto 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            color: '#6b7280',
          }}
        >
          QR Code Here
        </div>

        <p style={{ fontWeight: '600', marginBottom: '4px' }}>Scan to open Telegram bot</p>
        <p style={{ color: '#6b7280', fontSize: '14px' }}>@truthlens_bot</p>
      </div>

      <div style={{ display: 'flex', gap: '24px' }}>
        <a
          href="/dashboard"
          style={{
            padding: '12px 24px',
            background: '#4f46e5',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
          }}
        >
          View Dashboard
        </a>
        <a
          href="/analytics"
          style={{
            padding: '12px 24px',
            background: 'white',
            color: '#4f46e5',
            border: '1px solid #4f46e5',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
          }}
        >
          View Analytics
        </a>
      </div>
    </div>
  );
}
