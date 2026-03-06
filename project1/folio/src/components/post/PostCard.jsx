// ─── src/components/post/PostCard.jsx ────────────────────────────────────────

import { useState } from 'react'
import theme from '../../styles/theme'

export default function PostCard({ post, index }) {
  const [liked, setLiked]         = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgError, setImgError]   = useState(false)

  return (
    <article
      className="card-hover fade-up"
      style={{
        background: theme.card,
        border: `1px solid ${theme.border}`,
        borderRadius: 20,
        overflow: 'hidden',
        animationDelay: `${index * 0.07}s`,
        opacity: 0,
      }}
    >
      {/* ── Image ── */}
      <div style={{ position: 'relative', overflow: 'hidden', height: 240 }}>

        {/* Skeleton while loading */}
        {!imgLoaded && !imgError && (
          <div className="skeleton" style={{ position: 'absolute', inset: 0 }} />
        )}

        {/* Fallback if image fails */}
        {imgError && (
          <div style={{
            position: 'absolute', inset: 0,
            background: theme.border,
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: 32,
          }}>🖼</div>
        )}

        <img
          src={post.image}
          alt={post.caption}
          onLoad={() => setImgLoaded(true)}
          onError={() => { setImgError(true); setImgLoaded(true) }}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', display: 'block',
            transition: 'transform 0.5s ease',
            opacity: imgLoaded && !imgError ? 1 : 0,
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.06)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
        />

        {/* Bottom gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />

        {/* Like button */}
        <button
          onClick={() => setLiked(l => !l)}
          aria-label={liked ? 'Unlike post' : 'Like post'}
          style={{
            position: 'absolute', top: 14, right: 14,
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(10px)',
            border: liked ? `1px solid ${theme.accent}` : '1px solid transparent',
            borderRadius: '50%',
            width: 38, height: 38,
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 17,
            transition: 'transform 0.2s, border 0.2s',
            color: liked ? theme.accent : '#fff',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.15)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
        >
          {liked ? '♥' : '♡'}
        </button>
      </div>

      {/* ── Caption & Meta ── */}
      <div style={{ padding: '18px 20px 20px' }}>
        <p style={{
          fontSize: 15, lineHeight: 1.65, color: theme.text,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {post.caption}
        </p>

        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 14,
        }}>
          <span style={{
            fontSize: 12, color: theme.muted,
            background: theme.glass,
            border: `1px solid ${theme.border}`,
            borderRadius: 6, padding: '3px 10px',
          }}>
            #{post.id ?? '—'}
          </span>
          <span style={{
            fontSize: 12,
            color: liked ? theme.accent : theme.muted,
            transition: 'color 0.2s',
            fontWeight: liked ? 500 : 400,
          }}>
            {liked ? '♥ Liked' : '♡ Like'}
          </span>
        </div>
      </div>
    </article>
  )
}
