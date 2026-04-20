import ScanRow from './ScanRow';

export default function ScanTable({ scans, onOpenModal }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ background: '#f9fafb', textAlign: 'left' }}>
          <th style={{ padding: '12px', fontWeight: '600' }}>Type</th>
          <th style={{ padding: '12px', fontWeight: '600' }}>Verdict</th>
          <th style={{ padding: '12px', fontWeight: '600' }}>Confidence</th>
          <th style={{ padding: '12px', fontWeight: '600' }}>Platform</th>
          <th style={{ padding: '12px', fontWeight: '600' }}>Time</th>
          <th style={{ padding: '12px', fontWeight: '600' }}>When</th>
          <th style={{ padding: '12px', fontWeight: '600' }}>Action</th>
        </tr>
      </thead>
      <tbody>
        {scans.map((scan, index) => (
          <ScanRow key={scan.scan_id} scan={scan} index={index} onOpenModal={onOpenModal} />
        ))}
      </tbody>
    </table>
  );
}
