// ─── src/App.jsx ─────────────────────────────────────────────────────────────

import { useState } from 'react'
import { PostProvider } from './context/PostContext'
import Navbar from './components/layout/Navbar'
import FeedPage from './pages/FeedPage'
import CreatePostPage from './pages/CreatePostPage'

export default function App() {
  const [page, setPage] = useState('feed')

  return (
    <PostProvider>
      <Navbar page={page} setPage={setPage} />

      {page === 'feed'
        ? <FeedPage />
        : <CreatePostPage onSuccess={() => setPage('feed')} />
      }
    </PostProvider>
  )
}
