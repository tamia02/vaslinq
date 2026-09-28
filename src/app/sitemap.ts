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
    '/ai-agency-uttar-pradesh',
    '/vaslix-ai',
    ...ARTICLES.map((a) => `/insights/${a.slug}`)
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : route === '/ai-agency-uttar-pradesh' ? 0.9 : 0.8,
  }))
}
