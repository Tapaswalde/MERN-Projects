// ─── src/components/common/Spinner.jsx ───────────────────────────────────────

export default function Spinner({ size = 18, color = '#fff' }) {
  return (
    <span style={{
      display: 'inline-block',
      width: size, height: size,
      border: '2px solid rgba(255,255,255,0.25)',
      borderTopColor: color,
      borderRadius: '50%',
      animation: 'spin 0.7s linear infinite',
      flexShrink: 0,
    }} />
  )
}
