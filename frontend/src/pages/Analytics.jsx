import { useStats } from '../hooks/useStats';
import MetricCard from '../components/analytics/MetricCard';
import VerdictPieChart from '../components/analytics/VerdictPieChart';
import ComparisonBarChart from '../components/analytics/ComparisonBarChart';
import SystemStatusBar from '../components/analytics/SystemStatusBar';
import Card from '../components/ui/Card';
import Spinner from '../components/ui/Spinner';

export default function Analytics() {
  const { stats, health, loading, error } = useStats();

  if (loading) return <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6"><Spinner label="Loading analytics..." /></div>;
  if (error) return <div className="mx-auto w-full max-w-7xl px-4 py-8 text-rose-300 sm:px-6">{error}</div>;

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
          <MetricCard label="Deepfake Count" value={stats.deepfake_count} color="#DC2626" />
          <MetricCard label="Real Count" value={stats.real_count} color="#16A34A" />
          <MetricCard label="Deepfake Ratio" value={`${stats.deepfake_ratio}%`} />
          <MetricCard label="Average Confidence" value={`${stats.avg_confidence}%`} />
          <MetricCard label="Avg Processing Time" value={`${stats.avg_processing_ms} ms`} />
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <Card title="Verdict Distribution">
          <VerdictPieChart stats={stats} />
        </Card>
        <Card title="Deepfake vs Real">
          <ComparisonBarChart stats={stats} />
        </Card>
      </div>
    </div>
  );
}
