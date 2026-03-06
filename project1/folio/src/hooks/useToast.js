// ─── src/hooks/useToast.js ────────────────────────────────────────────────────
// Tiny toast manager — show(msg, type) auto-dismisses after 3.5 s.

import { useState, useCallback } from 'react'

export function useToast() {
  const [toast, setToast] = useState(null) // { msg: string, type: 'success'|'error' }

  const show = useCallback((msg, type = 'success') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 3500)
  }, [])

  const hide = useCallback(() => setToast(null), [])

  return { toast, show, hide }
}
