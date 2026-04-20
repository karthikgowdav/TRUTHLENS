export default function Card({ title, children, style = {} }) {
  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        padding: '16px',
        ...style,
      }}
    >
      {title ? <h3 style={{ margin: '0 0 12px', fontSize: '16px', fontWeight: 600 }}>{title}</h3> : null}
      {children}
    </div>
  );
}
