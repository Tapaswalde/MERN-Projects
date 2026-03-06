# Folio ✦

A beautiful post-sharing app built with **Vite + React**.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Point to your backend
#    Open src/api/postsApi.js and set:
#    export const BASE_URL = 'https://your-api.com'

# 3. Run dev server (http://localhost:3000)
npm run dev

# 4. Build for production
npm run build
```

## Backend Contract

| Method | Endpoint  | Body / Response |
|--------|-----------|-----------------|
| GET    | `/posts`  | `[{ id, image, caption }]` |
| POST   | `/posts`  | Body: `{ image, caption }` → `{ id, image, caption }` |

## Project Structure

```
folio/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx              ← Vite entry point
    ├── App.jsx               ← Root: Provider + Navbar + page router
    │
    ├── api/
    │   └── postsApi.js       ← All fetch calls isolated here
    │
    ├── context/
    │   └── PostContext.jsx   ← Global posts state (PostProvider)
    │
    ├── hooks/
    │   ├── usePosts.js       ← Feed fetch + refetch
    │   ├── useCreatePost.js  ← Form state + validation + submit
    │   └── useToast.js       ← Toast manager
    │
    ├── styles/
    │   ├── index.css         ← Global resets + animations + utilities
    │   └── theme.js          ← Design tokens
    │
    ├── utils/
    │   └── helpers.js        ← filterByCaption, isValidUrl
    │
    ├── components/
    │   ├── layout/
    │   │   └── Navbar.jsx
    │   ├── common/
    │   │   ├── Toast.jsx
    │   │   ├── Spinner.jsx
    │   │   ├── ErrorBanner.jsx
    │   │   └── SkeletonCard.jsx
    │   └── post/
    │       ├── ImagePreview.jsx
    │       ├── PostForm.jsx
    │       ├── PostCard.jsx
    │       └── PostGrid.jsx
    │
    └── pages/
        ├── FeedPage.jsx
        └── CreatePostPage.jsx
```

## Data Flow

```
postsApi.js  →  PostContext  →  usePosts / useCreatePost  →  Pages  →  Components
```
