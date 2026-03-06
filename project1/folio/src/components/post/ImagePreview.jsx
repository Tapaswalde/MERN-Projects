// ─── src/components/post/ImagePreview.jsx ────────────────────────────────────

export default function ImagePreview({ src, onError }) {
  if (!src) return null

  return (
    <div
      className="scale-in"
      style={{
        marginBottom: 24,
        borderRadius: 14,
        overflow: 'hidden',
        border: '1px solid #1e1e2e',
        position: 'relative',
      }}
    >
      <img
        src={src}
        alt="preview"
        onError={onError}
        style={{
          width: '100%', height: 260,
          objectFit: 'cover', display: 'block',
        }}
      />
      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)',
        pointerEvents: 'none',
      }} />
      <span style={{
        position: 'absolute', bottom: 14, left: 14,
        background: 'rgba(0,0,0,0.55)',
        backdropFilter: 'blur(8px)',
        borderRadius: 7, padding: '4px 11px',
        fontSize: 12, color: '#aaa',
      }}>Preview</span>
    </div>
  )
}
