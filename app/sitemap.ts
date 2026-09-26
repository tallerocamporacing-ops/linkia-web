import type { MetadataRoute } from 'next'
import { posts } from '@/lib/blog'

export const dynamic = 'force-static'

const BASE = 'https://www.linkia.com.ar'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    ...posts.map((p) => ({
      url: `${BASE}/blog/${p.slug}`,
      lastModified: new Date(`${p.date}T12:00:00Z`),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
