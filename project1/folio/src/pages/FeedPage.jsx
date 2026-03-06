// ─── src/pages/FeedPage.jsx ───────────────────────────────────────────────────

import { useState } from 'react'
import theme from '../styles/theme'
import { usePosts } from '../hooks/usePosts'
import { filterByCaption } from '../utils/helpers'
import PostGrid from '../components/post/PostGrid'
import ErrorBanner from '../components/common/ErrorBanner'

export default function FeedPage() {
  const { posts, loading, error, refetch } = usePosts()
  const [search, setSearch] = useState('')

  const filtered = filterByCaption(posts, search)

  return (
    <main style={{ maxWidth: 1100, margin: '0 auto', padding: '44px 20px' }}>

      {/* ── Page Header ── */}
      <div className="fade-up" style={{ marginBottom: 44 }}>
        <p style={{
          color: theme.accent, fontSize: 12,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          marginBottom: 8, fontWeight: 500,
        }}>
          Explore
        </p>

        <div style={{
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 16,
        }}>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(28px, 5vw, 42px)',
            fontWeight: 700, lineHeight: 1.15,
            letterSpacing: '-0.02em',
          }}>
            The{' '}
            <em style={{ fontStyle: 'italic', color: theme.accent }}>Feed</em>
          </h1>

          <button
            onClick={refetch}
            style={{
              background: 'transparent',
              border: `1px solid ${theme.border}`,
              borderRadius: 10, padding: '9px 20px',
              color: theme.muted, cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 13, transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = theme.accent
              e.currentTarget.style.color = theme.accent
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = theme.border
              e.currentTarget.style.color = theme.muted
            }}
          >
            ↻ Refresh
          </button>
        </div>

        {/* Search */}
        <div style={{ marginTop: 24, position: 'relative' }}>
          <span style={{
            position: 'absolute', left: 16,
            top: '50%', transform: 'translateY(-50%)',
            color: theme.muted, fontSize: 18,
            pointerEvents: 'none',
          }}>⌕</span>
          <input
            className="input-field"
            type="text"
            placeholder="Search captions…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ paddingLeft: 48 }}
          />
        </div>
      </div>

      {/* ── Error Banner ── */}
      <ErrorBanner
        message={error ? `${error} — showing demo posts below.` : null}
      />

      {/* ── Grid ── */}
      <PostGrid posts={filtered} loading={loading} />

      {/* ── Count ── */}
      {!loading && filtered.length > 0 && (
        <p style={{
          textAlign: 'center', color: theme.muted,
          fontSize: 13, marginTop: 44,
        }}>
          {filtered.length} post{filtered.length !== 1 ? 's' : ''} ✦
        </p>
      )}
    </main>
  )
}
