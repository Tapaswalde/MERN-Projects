// ─── src/components/layout/Navbar.jsx ────────────────────────────────────────

import theme from '../../styles/theme'

const TABS = [
  { id: 'feed',   label: '✦ Feed'   },
  { id: 'create', label: '+ Create' },
]

export default function Navbar({ page, setPage }) {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(10,10,15,0.88)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: `1px solid ${theme.border}`,
      padding: '0 24px',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', height: 64,
      }}>

        {/* ── Logo ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 9,
            background: `linear-gradient(135deg,${theme.accent},${theme.accent2})`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18, boxShadow: `0 0 16px rgba(249,115,22,0.35)`,
          }}>✦</div>
          <span style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em',
          }}>Folio</span>
        </div>

        {/* ── Tab Switcher ── */}
        <div style={{
          display: 'flex', gap: 4,
          background: theme.card,
          border: `1px solid ${theme.border}`,
          borderRadius: 13, padding: 4,
        }}>
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setPage(tab.id)}
              style={{
                padding: '8px 22px', borderRadius: 10, border: 'none',
                background: page === tab.id
                  ? `linear-gradient(135deg,${theme.accent},${theme.accent2})`
                  : 'transparent',
                color: page === tab.id ? '#fff' : theme.muted,
                cursor: 'pointer',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 14, fontWeight: 500,
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
              }}
            >{tab.label}</button>
          ))}
        </div>
      </div>
    </nav>
  )
}
