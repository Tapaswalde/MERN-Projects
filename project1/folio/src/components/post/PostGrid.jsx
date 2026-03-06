// ─── src/components/post/PostGrid.jsx ────────────────────────────────────────

import PostCard from './PostCard'
import SkeletonCard from '../common/SkeletonCard'
import theme from '../../styles/theme'

const GRID = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: 24,
}

function EmptyState() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '80px 20px',
      color: theme.muted,
    }}>
      <div style={{ fontSize: 52, marginBottom: 18 }}>✦</div>
      <p style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: 24, color: theme.text,
        marginBottom: 10,
      }}>
        Nothing here yet
      </p>
      <p style={{ fontSize: 14 }}>
        Be the first to share something beautiful.
      </p>
    </div>
  )
}

export default function PostGrid({ posts, loading }) {
  if (loading) {
    return (
      <div style={GRID}>
        {Array.from({ length: 6 }, (_, i) => (
          <SkeletonCard key={i} delay={i * 0.05} />
        ))}
      </div>
    )
  }

  if (!posts.length) return <EmptyState />

  return (
    <div style={GRID}>
      {posts.map((post, i) => (
        <PostCard key={post.id ?? i} post={post} index={i} />
      ))}
    </div>
  )
}
