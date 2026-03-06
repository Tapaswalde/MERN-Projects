// ─── src/utils/helpers.js ────────────────────────────────────────────────────

/**
 * Filter posts whose caption contains the search query (case-insensitive).
 * Returns all posts when query is blank.
 */
export function filterByCaption(posts, query) {
  if (!query.trim()) return posts
  const q = query.toLowerCase()
  return posts.filter(p => p.caption?.toLowerCase().includes(q))
}

/**
 * Naive URL validator — rejects obviously broken strings.
 */
export function isValidUrl(str) {
  try { new URL(str); return true } catch { return false }
}
