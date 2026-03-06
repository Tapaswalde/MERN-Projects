// ─── src/context/PostContext.jsx ─────────────────────────────────────────────
// Global state: the posts list lives here so both pages share the same data.

import { createContext, useContext, useState, useCallback } from 'react'
import { getAllPosts } from '../api/postsApi'

const PostContext = createContext(null)

export function PostProvider({ children }) {
  const [posts, setPosts]     = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState(null)

  const fetchPosts = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await getAllPosts()
      setPosts(data)
    } catch (err) {
      setError(err.message)
      // Fallback demo data so the UI never looks broken during development
      setPosts([
        { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600', caption: 'The mountains call, and I must go.' },
        { id: 2, image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600', caption: 'Golden hour magic.' },
        { id: 3, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600', caption: 'Tech aesthetics ✦' },
        { id: 4, image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600', caption: "Nature's geometry." },
        { id: 5, image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600', caption: 'Into the wild.' },
        { id: 6, image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600', caption: 'Code. Create. Iterate.' },
      ])
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <PostContext.Provider value={{ posts, loading, error, fetchPosts, setPosts }}>
      {children}
    </PostContext.Provider>
  )
}

export function usePostContext() {
  const ctx = useContext(PostContext)
  if (!ctx) throw new Error('usePostContext must be used inside <PostProvider>')
  return ctx
}
