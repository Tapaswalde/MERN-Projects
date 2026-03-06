// ─── src/components/post/PostForm.jsx ────────────────────────────────────────

import { useState, useRef } from 'react'
import theme from '../../styles/theme'
import Spinner from '../common/Spinner'

function FieldLabel({ children }) {
  return (
    <label style={{
      display: 'block', fontSize: 12, color: theme.muted,
      marginBottom: 10, letterSpacing: '0.08em',
      textTransform: 'uppercase', fontWeight: 500,
    }}>
      {children}
    </label>
  )
}

export default function PostForm({ form, setField, onSubmit, loading, error }) {
  const [preview, setPreview] = useState('')   // local blob URL for preview
  const [dragOver, setDragOver] = useState(false)
  const fileRef = useRef()

  // When user picks / drops a file
  const handleFile = (file) => {
    if (!file || !file.type.startsWith('image/')) return
    setField('image', file)                         // store File object
    setPreview(URL.createObjectURL(file))           // show preview instantly
  }

  const handleInputChange = (e) => handleFile(e.target.files[0])

  const handleDrop = (e) => {
    e.preventDefault()
    setDragOver(false)
    handleFile(e.dataTransfer.files[0])
  }

  return (
    <div style={{
      background: theme.card,
      border: `1px solid ${theme.border}`,
      borderRadius: 20, padding: 32,
    }}>

      {/* ── Image File Picker ── */}
      <div style={{ marginBottom: 24 }}>
        <FieldLabel>Image</FieldLabel>

        {/* Drop Zone */}
        <div
          onClick={() => fileRef.current.click()}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          style={{
            border: `2px dashed ${dragOver ? theme.accent : theme.border}`,
            borderRadius: 14, padding: '28px 20px',
            textAlign: 'center', cursor: 'pointer',
            background: dragOver ? 'rgba(249,115,22,0.05)' : theme.glass,
            transition: 'all 0.2s',
          }}
        >
          {preview ? (
            // Preview of selected image
            <div style={{ position: 'relative' }}>
              <img
                src={preview}
                alt="preview"
                style={{
                  width: '100%', height: 220,
                  objectFit: 'cover', borderRadius: 10,
                  display: 'block',
                }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)',
                borderRadius: 10, pointerEvents: 'none',
              }} />
              <span style={{
                position: 'absolute', bottom: 10, left: 12,
                background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)',
                borderRadius: 6, padding: '3px 10px',
                fontSize: 12, color: '#ccc',
              }}>
                {form.image?.name}
              </span>
              <span style={{
                position: 'absolute', bottom: 10, right: 12,
                background: theme.accent, borderRadius: 6,
                padding: '3px 10px', fontSize: 12, color: '#fff',
              }}>
                Click to change
              </span>
            </div>
          ) : (
            // Empty state
            <div style={{ pointerEvents: 'none' }}>
              <div style={{ fontSize: 36, marginBottom: 10 }}>🖼</div>
              <p style={{ color: theme.text, fontSize: 15, marginBottom: 4 }}>
                Drop your image here
              </p>
              <p style={{ color: theme.muted, fontSize: 13 }}>
                or <span style={{ color: theme.accent }}>click to browse</span>
              </p>
              <p style={{ color: theme.muted, fontSize: 11, marginTop: 8 }}>
                PNG, JPG, WEBP supported
              </p>
            </div>
          )}
        </div>

        {/* Hidden file input */}
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          onChange={handleInputChange}
          style={{ display: 'none' }}
        />
      </div>

      {/* ── Caption ── */}
      <div style={{ marginBottom: 28 }}>
        <FieldLabel>Caption</FieldLabel>
        <textarea
          className="input-field"
          rows={4}
          placeholder="Write something beautiful..."
          value={form.caption}
          onChange={e => setField('caption', e.target.value)}
          style={{ minHeight: 110 }}
        />
        <div style={{
          textAlign: 'right', fontSize: 12,
          color: theme.muted, marginTop: 6,
        }}>
          {form.caption.length} characters
        </div>
      </div>

      {/* ── Validation Error ── */}
      {error && (
        <p style={{
          color: '#fca5a5', fontSize: 13,
          marginBottom: 16, display: 'flex', gap: 6,
        }}>
          <span>⚠</span> {error}
        </p>
      )}

      {/* ── Submit ── */}
      <button
        className="btn-primary"
        onClick={onSubmit}
        disabled={loading}
      >
        {loading ? <><Spinner /> Uploading to ImageKit…</> : 'Publish Post ✦'}
      </button>
    </div>
  )
}