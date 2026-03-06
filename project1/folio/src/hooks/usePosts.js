// ─── src/hooks/usePosts.js ────────────────────────────────────────────────────
// Drives the Feed page: auto-fetches on first mount, exposes refetch.

import { useEffect } from 'react'
import { usePostContext } from '../context/PostContext'

export function usePosts() {
  const { posts, loading, error, fetchPosts } = usePostContext()

  useEffect(() => {
    // Only fetch if we have no data yet (avoids re-fetch on every tab switch)
    if (posts.length === 0) fetchPosts()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return { posts, loading, error, refetch: fetchPosts }
}
