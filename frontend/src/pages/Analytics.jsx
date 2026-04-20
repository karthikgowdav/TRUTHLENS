import { useStats } from '../hooks/useStats';
import MetricCard from '../components/analytics/MetricCard';
import VerdictPieChart from '../components/analytics/VerdictPieChart';
import ScansByHourChart from '../components/analytics/ScansByHourChart';
import SystemStatusBar from '../components/analytics/SystemStatusBar';
import Card from '../components/ui/Card';
import Spinner from '../components/ui/Spinner';

export default function Analytics() {
  const { stats, health, loading } = useStats();

  if (loading) return <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6"><Spinner label="Loading analytics..." /></div>;

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="space-y-2">
          <h1 className="text-3xl font-black text-white sm:text-4xl">Analytics</h1>
          <p className="text-slate-400">Performance trends, verdict breakdown, and model health indicators.</p>
        </div>
        <SystemStatusBar health={health} />
      </div>

      {stats && (
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <MetricCard label="Total Scans" value={stats.total_scans} />
          <MetricCard label="Deepfakes Caught" value={stats.deepfake_count} color="#DC2626" />
          <MetricCard label="Deepfake Ratio" value={`${stats.deepfake_ratio}%`} />
          <MetricCard label="Avg Confidence" value={`${stats.avg_confidence}%`} color="#16A34A" />
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
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
