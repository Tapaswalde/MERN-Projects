// ─── src/api/postsApi.js ──────────────────────────────────────────────────────

export const BASE_URL = 'http://localhost:5000' // 🔁 your backend URL

/**
 * Fetch all posts.
 * GET /posts
 */
export async function getAllPosts() {
  const res = await fetch(`${BASE_URL}/posts`)

  const contentType = res.headers.get('content-type')
  if (!contentType?.includes('application/json')) {
    throw new Error(`Backend not reachable at ${BASE_URL}/posts`)
  }

  if (!res.ok) throw new Error(`GET /posts failed — ${res.status}`)
  const data = await res.json()
  return Array.isArray(data) ? data : (data.posts ?? [])
}

/**
 * Create a new post — sends image as a FILE (multipart/form-data)
 * so ImageKit can receive and upload it.
 * POST /create-post
 * @param {{ image: File, caption: string }} payload
 */
export async function createPost({ image, caption }) {
  const formData = new FormData()
  formData.append('image', image)       // actual File object
  formData.append('caption', caption)

  const res = await fetch(`${BASE_URL}/create-post`, {
    method: 'POST',
    // ⚠️ Do NOT set Content-Type header manually —
    // browser sets it automatically with the correct boundary for FormData
    body: formData,
  })

  const contentType = res.headers.get('content-type')
  if (!contentType?.includes('application/json')) {
    throw new Error(`Backend not reachable at ${BASE_URL}/create-post`)
  }

  if (!res.ok) throw new Error(`POST /create-post failed — ${res.status}`)
  return res.json()
}