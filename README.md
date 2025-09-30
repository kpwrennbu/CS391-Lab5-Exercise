# 🧪 Next.js + AntD Student Exercise

This lab introduces **Next.js App Router**, **Ant Design (AntD)**, and **basic navigation** with `next/link`.

You will complete the TODOs inside:
- `app/layout.tsx`
- `app/page.tsx` (Home page)
- `app/about/page.tsx` (About page)
- `.env.local`

After filling the TODOs, run:

```bash
npm run dev
# open http://localhost:3000
```

---

## 🗂 Files with TODOs

### 1) `app/layout.tsx`

```tsx
// TODO(1): import AntD reset css

import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Student Exercise',
  description: 'Next.js + AntD Exercise',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* TODO(2): add a header with links to Home and About (use <Link>) */}
        {children}
      </body>
    </html>
  );
}
```

---

### 2) `app/page.tsx` (Home)

```tsx
'use client';

import { useState } from 'react';
import { Button, Input, Typography } from 'antd';
const { Title } = Typography;

// TODO(3): read API base from env (ONE LINE, fallback to PokeAPI)

export default function HomePage() {
  // TODO(4): add search state (useState)

  const handleClick = () => {
    // TODO(5): console.log the API URL using the search term
  };

  return (
    <div style={{ padding: 24 }}>
      {/* TODO(6): Add Title element */}
      {/* TODO(7): Add Input bound to state */}
      {/* TODO(8): Add Button that calls handleClick */}
    </div>
  );
}
```

---

### 3) `app/about/page.tsx`

```tsx
import { Typography } from 'antd';
import Link from 'next/link';
const { Title } = Typography;

export default function AboutPage() {
  return (
    <div style={{ padding: 24 }}>
      {/* TODO(9): Add Title “About This Demo” */}
      {/* TODO(10): Add text explaining this page */}
      {/* TODO(11): Add Link back to Home */}
    </div>
  );
}
```

---

### 4) `.env.local`

```env
# TODO(12): set NEXT_PUBLIC_API_BASE to pokeapi
NEXT_PUBLIC_API_BASE=https://pokeapi.co/api/v2
```

---

## ✅ Answers & Explanations 

### TODO(1) — AntD CSS
```ts
import 'antd/dist/reset.css';
```
Loads AntD global styles so components look correct. In App Router, global CSS imports live in a `layout.tsx` (Server Component).

### TODO(2) — Global nav with `next/link`
```tsx
import Link from 'next/link';

<header style={{ margin: '16px 0' }}>
  <nav style={{ display: 'flex', gap: 12 }}>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
  </nav>
</header>
```
`Link` enables client-side navigation (prefetching) for snappy route changes. Putting this in the layout makes it appear on every page.

---

### TODO(3) — Env base for API
```ts
const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'https://pokeapi.co/api/v2';
```
Client Components can only see env vars starting with `NEXT_PUBLIC_`. We add a fallback for reliability.

### TODO(4) — Search state
```ts
const [search, setSearch] = useState('');
```
A controlled input will bind to this state.

### TODO(5) — Add image state
```ts
  const [imageSrc, setImageSrc] = useState('');
```
Sets up state to hold the image Src for the pokemon

### TODO(6) — Setting Image state
```tsx
try {
      const res = await fetch(`${API_BASE}/pokemon/${search.toLowerCase()}`);
      const data = await res.json();
      setImageSrc(data.sprites.front_default);
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
      setImageSrc('');
    }
```
Sets image src according and catches error if necessary


### TODO(7) — Title
```tsx
<Title level={3}>Home Page</Title>
```
Uses AntD typography for a consistent heading.

### TODO(8) — Input
```tsx
<Input
  placeholder="Search Pokémon"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  style={{ width: 220, marginRight: 8 }}
/>
```
Controlled input updates `search` as you type.

### TODO(9) — Button
```tsx
<Button type="primary" onClick={handleClick}>Search</Button>
```
Calls your function to demonstrate building URLs / making requests.

---

### TODO(10–12) — About page content & link
```tsx
<Title level={3}>About This Demo</Title>
<p>This page exists to practice Next.js routing using the App Router.</p>
<Link href="/">← Back to Home</Link>
```
Shows another route and a navigation link back.

---

### TODO(13) — `.env.local` value
```env
NEXT_PUBLIC_API_BASE=https://pokeapi.co/api/v2
```
Client code can access only `NEXT_PUBLIC_*` vars. Restart `npm run dev` after changing `.env.local` so Next rebuilds with new values.

---

## 🧭 What to check when done
- Header links work (Home ↔ About).
- Typing in Home updates the input; clicking **Search** logs a URL using your input.
- Changing `.env.local` and restarting dev server changes the logged base URL.

---

## 🧠 Next.js concepts reinforced
- **Layouts** wrap every page (global elements live here).
- **App Router** auto-routes folders under `app/` (`/about` from `app/about/page.tsx`).
- **Client vs Server**: `'use client'` enables hooks & browser events.
- **`next/link`**: fast client-side navigation.
- **Env vars**: `NEXT_PUBLIC_*` for client; server secrets stay unprefixed.
