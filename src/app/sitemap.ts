import { MetadataRoute } from 'next'
import { ARTICLES } from '@/content/insights'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.vaslix.com'

  const routes = [
    '',
    '/ai-agents',
    '/automation',
    '/software',
    '/work',
    '/about',
    '/insights',
    '/contact',
    '/vaslix-ai',
    ...ARTICLES.map((a) => `/insights/${a.slug}`)
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
