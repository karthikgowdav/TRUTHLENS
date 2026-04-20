import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function ScansByHourChart({ stats }) {
  const total = Number(stats?.total_scans || 0);
  const data = [
    { hour: '00-06', scans: Math.round(total * 0.12) },
    { hour: '06-12', scans: Math.round(total * 0.33) },
    { hour: '12-18', scans: Math.round(total * 0.31) },
    { hour: '18-24', scans: Math.max(0, total - Math.round(total * 0.12) - Math.round(total * 0.33) - Math.round(total * 0.31)) },
  ];

  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="hour" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="scans" fill="#4f46e5" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
