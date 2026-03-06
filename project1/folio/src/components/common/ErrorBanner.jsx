// ─── src/components/common/ErrorBanner.jsx ───────────────────────────────────

export default function ErrorBanner({ message }) {
  if (!message) return null
  return (
    <div style={{
      background: '#1a0e0e',
      border: '1px solid #3d1515',
      borderRadius: 12,
      padding: '12px 18px',
      marginBottom: 28,
      color: '#fca5a5',
      fontSize: 13,
      display: 'flex', alignItems: 'center', gap: 8,
    }}>
      <span>⚠</span> {message}
    </div>
  )
}
