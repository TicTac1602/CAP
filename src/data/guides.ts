import { GuideArticle } from '@/types';

export const guideArticles: GuideArticle[] = [
	{
		id: 'guide-declaration-impots',
		title: 'Guide complet : Faire sa première déclaration d\'impôts',
		description: 'Tout ce qu\'il faut savoir pour déclarer ses impôts en ligne pour la première fois',
		slug: 'declaration-impots-premiere-fois',
		themeId: 'administration',
		author: 'Équipe Cap Adulte',
		publishedAt: '2025-09-19',
		readingTime: 8,
		priority: 'high',
		tags: ['impôts', 'déclaration', 'administration', 'première fois'],
		featured: true,
		filePath: '/data/articles/declaration-impots-premiere-fois.md'
	},
	{
		id: 'guide-choisir-mutuelle',
		title: 'Comment bien choisir sa première mutuelle santé',
		description: 'Guide pour comprendre et choisir une mutuelle adaptée à ses besoins et son budget',
		slug: 'choisir-mutuelle-sante',
		themeId: 'administration',
		author: 'Dr. Marie Dubois',
		publishedAt: '2024-03-20',
		readingTime: 6,
		priority: 'medium',
		tags: ['mutuelle', 'santé', 'remboursement', 'couverture'],
		filePath: '/data/articles/choisir-mutuelle-sante.md'
	},
	{
		id: 'guide-premier-logement',
		title: 'Trouver et louer son premier logement',
		description: 'De la recherche à la signature du bail : toutes les étapes pour bien louer son premier appartement',
		slug: 'premier-logement-location',
		themeId: 'logement',
		author: 'Thomas Martin',
		publishedAt: '2024-03-25',
		readingTime: 12,
		priority: 'high',
		tags: ['logement', 'location', 'bail', 'appartement', 'première fois'],
		featured: true,
		filePath: '/data/articles/premier-logement-location.md'
	}
];

// Fonctions utilitaires
export const getGuidesByTheme = (themeId: string): GuideArticle[] => {
	return guideArticles.filter(guide => guide.themeId === themeId);
};

export const getGuideBySlug = (slug: string): GuideArticle | undefined => {
	return guideArticles.find(guide => guide.slug === slug);
};

export const getFeaturedGuides = (): GuideArticle[] => {
	return guideArticles.filter(guide => guide.featured === true);
};

export const getAllGuideSlugs = (): string[] => {
	return guideArticles.map(guide => guide.slug);
};