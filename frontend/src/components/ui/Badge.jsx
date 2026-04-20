export default function Badge({ text, bg = '#f3f4f6', color = '#111827' }) {
  return (
    <span
      style={{
        background: bg,
        color,
        borderRadius: '9999px',
        padding: '3px 10px',
        fontSize: '12px',
        fontWeight: 600,
      }}
    >
      {text}
    </span>
  );
}
