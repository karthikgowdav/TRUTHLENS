import { Pie, PieChart, Cell, Legend, ResponsiveContainer, Tooltip } from 'recharts';

const COLORS = { deepfake: '#DC2626', real: '#16A34A', inconclusive: '#D97706' };

export default function VerdictPieChart({ stats }) {
  const pieData = stats
    ? [
        { name: 'Deepfake', value: stats.deepfake_count },
        { name: 'Real', value: stats.real_count },
        { name: 'Inconclusive', value: stats.inconclusive_count },
      ]
    : [];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label>
          {pieData.map((entry, index) => (
            <Cell key={index} fill={COLORS[entry.name.toLowerCase()]} />
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
