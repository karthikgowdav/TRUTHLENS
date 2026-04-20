import { useStats } from '../hooks/useStats';
import MetricCard from '../components/analytics/MetricCard';
import VerdictPieChart from '../components/analytics/VerdictPieChart';
import ScansByHourChart from '../components/analytics/ScansByHourChart';
import SystemStatusBar from '../components/analytics/SystemStatusBar';
import Card from '../components/ui/Card';
import Spinner from '../components/ui/Spinner';

export default function Analytics() {
  const { stats, health, loading } = useStats();

  if (loading) return <div style={{ padding: '24px' }}><Spinner label="Loading analytics..." /></div>;

  return (
    <div style={{ padding: '24px', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '700' }}>Analytics</h1>
        <SystemStatusBar health={health} />
      </div>

      {stats && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
          <MetricCard label="Total Scans" value={stats.total_scans} />
          <MetricCard label="Deepfakes Caught" value={stats.deepfake_count} color="#DC2626" />
          <MetricCard label="Deepfake Ratio" value={`${stats.deepfake_ratio}%`} />
          <MetricCard label="Avg Confidence" value={`${stats.avg_confidence}%`} color="#16A34A" />
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <Card title="Verdict Distribution">
          <VerdictPieChart stats={stats} />
        </Card>
        <Card title="Scans by Hour">
          <ScansByHourChart stats={stats} />
        </Card>
      </div>
    </div>
  );
}
