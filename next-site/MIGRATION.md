# Boon Website Migration Guide

## Overview

This document covers the migration from the React SPA to Next.js 14+ with App Router, including SEO best practices, deployment instructions, and maintenance guidelines.

## Quick Start

### Running Locally

```bash
# Navigate to the Next.js project
cd next-site

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Edit .env.local with your values
# Required: NEXT_PUBLIC_SITE_URL
# Optional: GEMINI_API_KEY, NEXT_PUBLIC_GA_MEASUREMENT_ID

# Start development server
npm run dev

# Open http://localhost:3000
```

### Building for Production

```bash
npm run build
npm run start

# Or for static export (if configured)
npm run build
# Deploy the `out` directory
```

---

## Project Structure

```
next-site/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout (fonts, metadata, analytics)
│   ├── page.tsx                 # Homepage (/)
│   ├── globals.css              # Global styles + Tailwind
│   ├── sitemap.ts               # Dynamic sitemap generation
│   ├── robots.ts                # Robots.txt configuration
│   ├── solutions/               # /solutions routes
│   │   ├── page.tsx             # /solutions
│   │   ├── scale/page.tsx       # /solutions/scale
│   │   ├── grow/page.tsx        # /solutions/grow
│   │   ├── exec/page.tsx        # /solutions/exec
│   │   └── together/page.tsx    # /solutions/together
│   ├── why/page.tsx             # /why
│   ├── story/page.tsx           # /story
│   ├── coaches/page.tsx         # /coaches
│   ├── individuals/page.tsx     # /individuals
│   ├── learn/                   # /learn routes
│   │   ├── page.tsx             # /learn
│   │   ├── blog/page.tsx        # /learn/blog
│   │   ├── live/page.tsx        # /learn/live
│   │   ├── podcast/page.tsx     # /learn/podcast
│   │   ├── case-studies/page.tsx # /learn/case-studies
│   │   └── resources/page.tsx   # /learn/resources
│   ├── demo/page.tsx            # /demo
│   └── blog/page.tsx            # Redirects to /learn/blog
├── components/                   # Reusable components
│   ├── layout/                  # Navbar, Footer, GlobalCTA
│   ├── ui/                      # Shared UI (SectionHeading)
│   ├── home/                    # Homepage sections
│   ├── solutions/               # Solutions page components
│   ├── demo/                    # Demo form components
│   └── why/                     # Why page components
├── lib/                         # Utilities
│   ├── seo.ts                   # SEO helpers (metadata, JSON-LD)
│   └── content.ts               # Content abstraction layer
├── public/                      # Static assets
│   └── images/                  # OG images, etc.
├── redirects.json               # URL redirect mappings
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind configuration
└── .env.example                 # Environment variable template
```

---

## Adding New Pages

### 1. Create the Page File

```bash
# Create directory if needed
mkdir -p app/new-section

# Create page file
touch app/new-section/page.tsx
```

### 2. Add Page Content

```tsx
import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Page Title',
  description: 'Page description for SEO.',
  path: '/new-section',
});

export default function NewSectionPage() {
  return (
    <main className="bg-white">
      {/* Page content */}
    </main>
  );
}
```

### 3. Add to Navigation (if needed)

Edit `components/layout/Navbar.tsx` to add the new link.

### 4. Update Sitemap

The sitemap at `app/sitemap.ts` auto-generates from static routes. Add your new route to the `staticPages` array:

```ts
const staticPages = [
  // ... existing pages
  '/new-section',
];
```

---

## Editing Content

### Static Content

Most content is directly in page components. Edit the relevant `page.tsx` file.

### Case Studies

1. Edit `lib/content.ts` to add/modify case studies in `STATIC_CASE_STUDIES`
2. Create individual case study pages at `app/learn/case-studies/[slug]/page.tsx` (dynamic route)

### Blog Posts (Future)

1. Edit `lib/content.ts` to add posts to `STATIC_BLOG_POSTS`
2. Or switch to headless WordPress by implementing the `fetchWordPress*` functions

---

## Updating Redirects

### Adding New Redirects

Edit `redirects.json`:

```json
[
  {
    "source": "/old-path",
    "destination": "/new-path",
    "permanent": true
  }
]
```

### Redirect Types

- `permanent: true` = 301 redirect (SEO-friendly, cached)
- `permanent: false` = 302 redirect (temporary)

### WordPress URL Preservation

Add WordPress URLs to `redirects.json`:

```json
{
  "source": "/blog/:slug",
  "destination": "/learn/blog/:slug",
  "permanent": true
}
```

---

## SEO Configuration

### Per-Page Metadata

Use `generatePageMetadata()` from `lib/seo.ts`:

```tsx
export const metadata: Metadata = generatePageMetadata({
  title: 'Page Title',           // Required
  description: 'Description',    // Required
  path: '/page-path',           // For canonical URL
  image: '/images/custom-og.png', // Optional OG image
  noIndex: false,               // Set true for private pages
});
```

### JSON-LD Structured Data

Available helpers in `lib/seo.ts`:

- `organizationJsonLd` - Sitewide organization schema (in layout.tsx)
- `generateServiceJsonLd()` - For product/service pages
- `generateArticleJsonLd()` - For blog posts
- `generateFAQJsonLd()` - For FAQ sections

### Canonical URLs

Automatically generated from `NEXT_PUBLIC_SITE_URL` + page path.

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes | Base URL for canonical tags, sitemap |
| `GEMINI_API_KEY` | No | Google Generative AI key (server-side) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | Google Analytics 4 ID |
| `WORDPRESS_API_URL` | No | WordPress GraphQL endpoint (future) |

---

## SEO Launch Checklist

### Pre-Launch

- [ ] Set `NEXT_PUBLIC_SITE_URL` to production URL
- [ ] Verify all pages have unique titles and descriptions
- [ ] Check canonical URLs are correct
- [ ] Test OG images display correctly (use Facebook Debugger, Twitter Card Validator)
- [ ] Verify sitemap.xml generates correctly at `/sitemap.xml`
- [ ] Verify robots.txt at `/robots.txt`
- [ ] Test all redirects work correctly
- [ ] Run Lighthouse audit (aim for 90+ performance, 100 SEO)

### Post-Launch

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up Google Analytics (if using)
- [ ] Monitor Search Console for crawl errors
- [ ] Test mobile rendering on actual devices
- [ ] Verify 301 redirects from old URLs

### WordPress Migration Specific

- [ ] Map all WordPress URLs to new paths
- [ ] Add redirects for all existing blog posts
- [ ] Update any external links to new URLs
- [ ] Monitor 404 errors in Search Console
- [ ] Preserve URL slugs where possible

---

## Migration Notes

### What Changed

| Old (React SPA) | New (Next.js) |
|-----------------|---------------|
| Client-side routing via `useState` | File-based App Router |
| Tailwind via CDN | PostCSS-compiled Tailwind |
| `<img>` tags | `next/image` for optimization |
| Google Fonts via `<link>` | `next/font` for performance |
| No SEO (SPA) | Full SSG/SSR with metadata |
| `process.env.API_KEY` client-side | Server-side API keys |
| Custom scroll handling | Automatic scroll restoration |

### SEO Improvements

1. **Server-rendered HTML** - All content visible without JavaScript
2. **Per-page metadata** - Unique titles, descriptions, OG tags
3. **Canonical URLs** - Prevent duplicate content issues
4. **JSON-LD schemas** - Rich results in search
5. **Sitemap/robots** - Proper search engine guidance
6. **301 redirects** - Preserve SEO equity from old URLs

### SEO Risks Mitigated

| Risk | Mitigation |
|------|------------|
| Content hidden behind JS | SSG renders full HTML |
| Duplicate content | Canonical tags on all pages |
| Lost URL equity | 301 redirects configured |
| Missing metadata | `generatePageMetadata()` enforces structure |
| Slow page loads | Image optimization, font loading, code splitting |
| Broken internal links | `next/link` for client navigation |

---

## Component Architecture

### Server Components (Default)

Most pages are Server Components for SEO:
- Render HTML on the server
- No client-side JavaScript for static content
- Better Core Web Vitals

### Client Components (`'use client'`)

Only used when needed:
- `Navbar.tsx` - Dropdown state, mobile menu
- `DemoForm.tsx` - Form state management
- `CoachSection.tsx` - Filter state
- `EconomicImpactModel.tsx` - Interactive calculator
- `SystemArchitect.tsx` - Tab selection
- `AccordionSection.tsx` - Expand/collapse state

### Pattern

```tsx
// page.tsx (Server Component)
import { ClientComponent } from '@/components/ClientComponent';

export default function Page() {
  return (
    <main>
      {/* Static content rendered on server */}
      <h1>Title</h1>

      {/* Interactive component rendered on client */}
      <ClientComponent />
    </main>
  );
}
```

---

## Future CMS Integration

The `lib/content.ts` file provides a clean seam for CMS integration:

```ts
// Current: Static data
export async function getCaseStudies() {
  return STATIC_CASE_STUDIES;
}

// Future: WordPress
export async function getCaseStudies() {
  if (process.env.WORDPRESS_API_URL) {
    return fetchWordPressCaseStudies();
  }
  return STATIC_CASE_STUDIES;
}
```

To switch to headless WordPress:

1. Set `WORDPRESS_API_URL` in `.env.local`
2. Implement `fetchWordPress*` functions in `lib/content.ts`
3. No changes needed to page components

---

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

### Other Platforms

The project works with any Next.js-compatible host:
- Netlify
- AWS Amplify
- Railway
- Self-hosted (Node.js server)

For static export (no server features):

```ts
// next.config.ts
const nextConfig: NextConfig = {
  output: 'export',
};
```

---

## Support

For questions about this migration:
- Check Next.js docs: https://nextjs.org/docs
- Review the component comments in source files
- Test changes locally before deploying
