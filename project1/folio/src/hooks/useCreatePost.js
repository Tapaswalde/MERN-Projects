// ─── src/hooks/useCreatePost.js ───────────────────────────────────────────────
// All create-post logic: form state, validation, API call, global refresh.

import { useState } from 'react'
import { createPost } from '../api/postsApi'
import { usePostContext } from '../context/PostContext'

export function useCreatePost() {
  const { fetchPosts } = usePostContext()

  const [form, setFormState] = useState({ caption: '', image: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState(null)
  const [success, setSuccess] = useState(false)

  const setField = (field, value) =>
    setFormState(prev => ({ ...prev, [field]: value }))

const validate = () => {
  if (!form.image)          return 'Please select an image.'
  if (!form.caption.trim()) return 'Caption is required.'
  return null
}

  const submit = async () => {
    const validationError = validate()
    if (validationError) { setError(validationError); return false }

    setLoading(true)
    setError(null)
    try {
      await createPost(form)
      setFormState({ caption: '', image: '' })
      setSuccess(true)
      await fetchPosts()                          // refresh the global feed
      setTimeout(() => setSuccess(false), 3000)
      return true
    } catch (err) {
      setError(err.message ?? 'Something went wrong.')
      return false
    } finally {
      setLoading(false)
    }
  }

  return { form, setField, loading, error, success, submit, setError }
}
