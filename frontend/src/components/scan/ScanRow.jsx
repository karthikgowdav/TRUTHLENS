import { Link } from 'react-router-dom';
import VerdictBadge from './VerdictBadge';
import ConfidenceBar from './ConfidenceBar';

export default function ScanRow({ scan, index, onOpenModal }) {
  return (
    <tr style={{ borderBottom: '1px solid #e5e7eb', background: index % 2 === 0 ? 'white' : '#f9fafb' }}>
      <td style={{ padding: '12px' }}>{scan.media_type}</td>
      <td style={{ padding: '12px' }}>
        <VerdictBadge verdict={scan.verdict} />
      </td>
      <td style={{ padding: '12px', width: '220px' }}>
        <ConfidenceBar confidence={scan.confidence} verdict={scan.verdict} />
        <span style={{ fontSize: '12px', color: '#6b7280' }}>{scan.confidence}%</span>
      </td>
      <td style={{ padding: '12px', fontSize: '13px', color: '#6b7280' }}>{scan.ai_platform || (scan.has_c2pa ? 'AI (C2PA)' : '-')}</td>
      <td style={{ padding: '12px', fontSize: '13px', color: '#6b7280' }}>{scan.processing_ms}ms</td>
      <td style={{ padding: '12px', fontSize: '13px', color: '#6b7280' }}>{new Date(scan.created_at).toLocaleTimeString()}</td>
      <td style={{ padding: '12px', display: 'flex', gap: '10px' }}>
        <button onClick={() => onOpenModal(scan)} style={{ border: 'none', background: '#eef2ff', color: '#3730a3', borderRadius: '8px', padding: '6px 10px', cursor: 'pointer' }}>
          Quick View
        </button>
        <Link to={`/scan/${scan.scan_id}`} style={{ color: '#4f46e5', textDecoration: 'none', fontWeight: 600 }}>
          Open
        </Link>
      </td>
    </tr>
  );
}
