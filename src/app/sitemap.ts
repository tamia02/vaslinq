import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vaslix.com'

  const routes = [
    '',
    '/ai-agents',
    '/automation',
    '/software',
    '/work',
    '/about',
    '/insights',
    '/contact'
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
