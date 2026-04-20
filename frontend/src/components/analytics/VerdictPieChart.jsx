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
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
