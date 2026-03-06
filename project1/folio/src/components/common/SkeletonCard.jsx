// ─── src/components/common/SkeletonCard.jsx ──────────────────────────────────

import theme from '../../styles/theme'

export default function SkeletonCard({ delay = 0 }) {
  return (
    <div style={{
      borderRadius: 20,
      overflow: 'hidden',
      border: `1px solid ${theme.border}`,
      animationDelay: `${delay}s`,
    }}>
      <div className="skeleton" style={{ height: 240 }} />
      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div className="skeleton" style={{ height: 15, width: '80%' }} />
        <div className="skeleton" style={{ height: 13, width: '55%' }} />
        <div className="skeleton" style={{ height: 13, width: '40%' }} />
      </div>
    </div>
  )
}
