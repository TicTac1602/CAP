import { MetadataRoute } from 'next'
import { themes } from '@/data/themes'
import { guideArticles } from '@/data/guides'

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://adulpath.fr'
	
	// Pages principales
	const staticPages = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'weekly' as const,
			priority: 1,
		},
		{
			url: `${baseUrl}/theme`,
			lastModified: new Date(),
			changeFrequency: 'weekly' as const,
			priority: 0.9,
		},
		{
			url: `${baseUrl}/guide`,
			lastModified: new Date(),
			changeFrequency: 'weekly' as const,
			priority: 0.9,
		},
		{
			url: `${baseUrl}/simulateurs`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.8,
		},
		{
			url: `${baseUrl}/simulateurs/budget`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.8,
		},
		{
			url: `${baseUrl}/calendrier`,
			lastModified: new Date(),
			changeFrequency: 'weekly' as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/faq`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: 'yearly' as const,
			priority: 0.5,
		},
		{
			url: `${baseUrl}/mentions-legales`,
			lastModified: new Date(),
			changeFrequency: 'yearly' as const,
			priority: 0.3,
		},
	]

	// Pages des thèmes
	const themePages = themes.map(theme => ({
		url: `${baseUrl}/theme/${theme.id}`,
		lastModified: new Date(),
		changeFrequency: 'weekly' as const,
		priority: 0.8,
	}))

	// Pages des guides
	const guidePages = guideArticles.map(guide => ({
		url: `${baseUrl}/guide/${guide.slug}`,
		lastModified: guide.updatedAt ? new Date(guide.updatedAt) : (guide.publishedAt ? new Date(guide.publishedAt) : new Date()),
		changeFrequency: 'monthly' as const,
		priority: 0.9,
	}))

	return [
		...staticPages,
		...themePages,
		...guidePages,
	]
}