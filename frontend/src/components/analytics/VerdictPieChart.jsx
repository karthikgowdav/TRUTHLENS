import { Pie, PieChart, Cell, Legend, ResponsiveContainer, Tooltip } from 'recharts';

const COLORS = { deepfake: '#DC2626', real: '#16A34A' };

export default function VerdictPieChart({ stats }) {
  // Backend doesn't provide distribution array; derive manually from counts
  const pieData = stats
    ? [
        { key: 'deepfake', name: 'Deepfake', value: Number(stats.deepfake_count || 0) },
        { key: 'real', name: 'Real', value: Number(stats.real_count || 0) },
      ]
    : [];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label>
          {pieData.map((entry, index) => (
            <Cell key={entry.key || index} fill={COLORS[entry.key] || '#94a3b8'} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            background: 'rgba(15, 23, 42, 0.95)',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            borderRadius: '10px',
            color: '#e2e8f0',
          }}
        />
        <Legend wrapperStyle={{ color: '#cbd5e1' }} />
      </PieChart>
    </ResponsiveContainer>
  );
}
