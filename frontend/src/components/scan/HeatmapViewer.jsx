export default function HeatmapViewer({ score = 0 }) {
  const intensity = Math.max(0, Math.min(100, Number(score) || 0));
  const alpha = 0.15 + intensity / 140;
  return (
    <div>
      <div
        style={{
          height: '170px',
          borderRadius: '12px',
          background: `radial-gradient(circle at 30% 40%, rgba(220, 38, 38, ${alpha}) 0%, rgba(220, 38, 38, 0) 45%),
                      radial-gradient(circle at 70% 60%, rgba(220, 38, 38, ${alpha / 1.4}) 0%, rgba(220, 38, 38, 0) 40%),
                      #111827`,
          border: '1px solid #374151',
        }}
      />
      <p style={{ marginTop: '8px', color: '#6b7280', fontSize: '12px' }}>
        Forensic heatmap preview - score {intensity}
      </p>
    </div>
  );
}
