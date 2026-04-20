import HeatmapViewer from './HeatmapViewer';
import VerdictBadge from './VerdictBadge';

export default function ScanDetailModal({ open, scan, onClose }) {
  if (!open || !scan) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(17, 24, 39, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ background: 'white', width: 'min(900px, 95vw)', borderRadius: '12px', padding: '20px' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <h3 style={{ margin: 0 }}>Scan Quick View</h3>
          <button onClick={onClose} style={{ border: 'none', background: '#f3f4f6', borderRadius: '6px', padding: '6px 10px', cursor: 'pointer' }}>
            Close
          </button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div style={{ display: 'grid', gap: '8px' }}>
            <div><strong>Scan ID:</strong> {scan.scan_id}</div>
            <div><strong>Verdict:</strong> <VerdictBadge verdict={scan.verdict} /></div>
            <div><strong>Confidence:</strong> {scan.confidence}%</div>
            <div><strong>Forensic Flags:</strong> {scan.forensic_flags?.length ? scan.forensic_flags.join(', ') : '-'}</div>
          </div>
          <HeatmapViewer score={scan.forensic_score} />
        </div>
      </div>
    </div>
  );
}
