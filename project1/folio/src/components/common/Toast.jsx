// ─── src/components/common/Toast.jsx ─────────────────────────────────────────

export default function Toast({ toast }) {
  if (!toast) return null
  const isError = toast.type === 'error'

  return (
    <div
      className="slide-down"
      style={{
        position: 'fixed', top: 80, right: 24, zIndex: 9999,
        padding: '14px 22px', borderRadius: 13,
        background: isError ? '#2d1515' : '#0f2d15',
        border: `1px solid ${isError ? '#7f1d1d' : '#14532d'}`,
        color: isError ? '#fca5a5' : '#86efac',
        fontSize: 14, fontWeight: 500,
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
        display: 'flex', alignItems: 'center', gap: 8,
        maxWidth: 360,
      }}
    >
      <span>{isError ? '⚠' : '✓'}</span>
      {toast.msg}
    </div>
  )
}
