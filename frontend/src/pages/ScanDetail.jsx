import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getScanById } from '../services/scanService';
import VerdictBadge from '../components/scan/VerdictBadge';
import Spinner from '../components/ui/Spinner';

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

  if (loading) return <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6"><Spinner label="Loading scan detail..." /></div>;
  if (error) return <div className="mx-auto w-full max-w-7xl px-4 py-8 text-rose-300 sm:px-6">{error}</div>;
  if (!scan) return <div className="mx-auto w-full max-w-7xl px-4 py-8 text-slate-300 sm:px-6">Scan not found.</div>;

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
      <h1 className="mb-4 text-3xl font-black text-white sm:text-4xl">Scan Detail</h1>
      <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-xl backdrop-blur-xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <DetailItem label="Scan ID" value={scan.scan_id} />
          <DetailItem label="Media Type" value={scan.media_type} />
          <div>
            <strong className="text-cyan-300">{'Verdict'}</strong>
            <div className="mt-1.5"><VerdictBadge verdict={scan.verdict} /></div>
          </div>
          <DetailItem label="Confidence" value={`${scan.confidence}%`} />
          <DetailItem label="AI Platform" value={scan.ai_platform || '-'} />
          <DetailItem label="Has C2PA" value={String(scan.has_c2pa)} />
          <DetailItem label="Has EXIF" value={String(scan.has_exif)} />
          <DetailItem label="ELA Score" value={scan.ela_score} />
          <DetailItem label="Processing" value={`${scan.processing_ms}ms`} />
          <DetailItem label="Created" value={scan.created_at} />
          <div className="sm:col-span-2 xl:col-span-3">
            <strong className="text-cyan-300">Forensic Flags</strong>
            <p className="mt-1.5 text-slate-300">{scan.forensic_flags?.length ? scan.forensic_flags.join(', ') : '-'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailItem({ label, value }) {
  return (
    <div>
      <strong className="text-cyan-300">{label}</strong>
      <p className="mt-1.5 text-slate-300">{value}</p>
    </div>
  );
}
