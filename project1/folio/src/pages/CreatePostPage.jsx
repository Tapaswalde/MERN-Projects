// ─── src/pages/CreatePostPage.jsx ────────────────────────────────────────────

import { useEffect } from 'react'
import theme from '../styles/theme'
import { useCreatePost } from '../hooks/useCreatePost'
import { useToast } from '../hooks/useToast'
import PostForm from '../components/post/PostForm'
import Toast from '../components/common/Toast'

export default function CreatePostPage({ onSuccess }) {
  const {
    form, setField,
    loading, error, success,
    submit, setError,
  } = useCreatePost()

  const { toast, show } = useToast()

  // Surface API errors as toasts
  useEffect(() => {
    if (error) show(error, 'error')
  }, [error]) // eslint-disable-line react-hooks/exhaustive-deps

  // On success: toast → redirect to Feed after a short delay
  useEffect(() => {
    if (success) {
      show('Post published successfully! 🎉', 'success')
      const timer = setTimeout(() => onSuccess?.(), 1400)
      return () => clearTimeout(timer)
    }
  }, [success]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = async () => {
    setError(null)
    await submit()
  }

  return (
    <main style={{ maxWidth: 640, margin: '0 auto', padding: '44px 20px' }}>
      <Toast toast={toast} />

      {/* ── Page Header ── */}
      <div className="fade-up" style={{ marginBottom: 40 }}>
        <p style={{
          color: theme.accent, fontSize: 12,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          marginBottom: 8, fontWeight: 500,
        }}>
          New Entry
        </p>
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(28px, 5vw, 42px)',
          fontWeight: 700, lineHeight: 1.15,
          letterSpacing: '-0.02em',
        }}>
          Create a{' '}
          <em style={{ fontStyle: 'italic', color: theme.accent }}>Post</em>
        </h1>
        <p style={{ color: theme.muted, fontSize: 14, marginTop: 10 }}>
          Share an image and caption with the world.
        </p>
      </div>

      {/* ── Form Card ── */}
      <div
        className="fade-up"
        style={{ animationDelay: '0.12s', opacity: 0 }}
      >
        <PostForm
          form={form}
          setField={setField}
          onSubmit={handleSubmit}
          loading={loading}
          error={null} /* validation errors surfaced via toast */
        />
      </div>
    </main>
  )
}
