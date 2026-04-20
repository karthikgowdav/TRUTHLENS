import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getScanById } from '../services/scanService';
import VerdictBadge from '../components/scan/VerdictBadge';

export default function ScanDetail() {
  const { id } = useParams();
  const [scan, setScan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScan = async () => {
      try {
        const res = await getScanById(id);
        setScan(res?.data ?? null);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchScan();
  }, [id]);

  if (loading) return <div style={{ padding: '24px' }}>Loading...</div>;
  if (error) return <div style={{ padding: '24px', color: '#DC2626' }}>{error}</div>;
  if (!scan) return <div style={{ padding: '24px' }}>Scan not found.</div>;

  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '16px' }}>Scan Detail</h1>
      <div style={{ display: 'grid', gap: '12px', maxWidth: '700px' }}>
        <div>
          <strong>Scan ID:</strong> {scan.scan_id}
        </div>
        <div>
          <strong>Media Type:</strong> {scan.media_type}
        </div>
        <div>
          <strong>Verdict:</strong> <VerdictBadge verdict={scan.verdict} />
        </div>
        <div>
          <strong>Confidence:</strong> {scan.confidence}%
        </div>
        <div>
          <strong>AI Platform:</strong> {scan.ai_platform || '-'}
        </div>
        <div>
          <strong>Has C2PA:</strong> {String(scan.has_c2pa)}
        </div>
        <div>
          <strong>Has EXIF:</strong> {String(scan.has_exif)}
        </div>
        <div>
          <strong>ELA Score:</strong> {scan.ela_score}
        </div>
        <div>
          <strong>Forensic Flags:</strong> {scan.forensic_flags?.length ? scan.forensic_flags.join(', ') : '-'}
        </div>
        <div>
          <strong>Processing:</strong> {scan.processing_ms}ms
        </div>
        <div>
          <strong>Created:</strong> {scan.created_at}
        </div>
      </div>
    </div>
  );
}
