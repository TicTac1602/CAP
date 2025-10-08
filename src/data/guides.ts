import { GuideArticle } from '@/types';

export const guideArticles: GuideArticle[] = [
	// {
	// 	id: 'guide-declaration-impots',
	// 	title: 'Guide complet : Faire sa déclaration d\'impôts',
	// 	description: 'Tout ce qu\'il faut savoir pour déclarer ses impôts en ligne',
	// 	slug: 'declaration-impots-premiere-fois',
	// 	themeId: 'administration',
	// 	author: 'Équipe Cap Adulte',
	// 	publishedAt: '2025-09-26',
	// 	readingTime: 8,
	// 	tags: ['impôts', 'déclaration', 'administration', 'première fois'],
	// 	featured: true,
	// 	filePath: '/data/articles/declaration-impots-premiere-fois.md'
	// },
	// {
	// 	id: 'guide-choisir-mutuelle',
	// 	title: 'Comment bien choisir sa première mutuelle santé',
	// 	description: 'Guide pour comprendre et choisir une mutuelle adaptée à ses besoins et son budget',
	// 	slug: 'choisir-mutuelle-sante',
	// 	themeId: 'administration',
	// 	author: 'Dr. Marie Dubois',
	// 	publishedAt: '2024-03-20',
	// 	readingTime: 6,
	// 	priority: 'medium',
	// 	tags: ['mutuelle', 'santé', 'remboursement', 'couverture'],
	// 	filePath: '/data/articles/choisir-mutuelle-sante.md'
	// },
	{
		id: 'guide-constituer-dossier-logement',
		title: 'Trouver et constituer son dossier pour louer un logement',
		description: 'De la recherche à la signature du bail : étapes clés et conseils pratiques',
		slug: 'premier-logement-location',
		themeId: 'logement',
		author: 'Équipe Cap Adulte',
		publishedAt: '2025-10-08',
		readingTime: 15,
		tags: ['logement', 'location', 'bail', 'appartement', 'première fois', 'budget', 'dossier locataire', 'visite', 'négociation', 'aides au logement', 'APL', 'état des lieux', 'DPE'],
		featured: true,
		filePath: '/data/articles/premier-logement-location.md'
	},
	{
		id: 'guide-comprendre-fiche-paie',
		title: 'Comprendre sa fiche de paie',
		description: 'Décryptage complet de votre bulletin de salaire : du brut au net, cotisations et protection sociale',
		slug: 'comprendre-fiche-paie',
		themeId: 'emploi',
		author: 'Équipe Cap Adulte',
		publishedAt: '2025-09-30',
		readingTime: 10,
		tags: ['fiche de paie', 'bulletin salaire', 'cotisations', 'salaire brut', 'salaire net', 'protection sociale', 'vérifications'],
		featured: true,
		filePath: '/data/articles/comprendre-fiche-paie.md'
	},
	{
		id: 'guide-comprendre-impots',
		title: 'Comprendre les impôts en France : guide complet',
		description: 'Panorama complet du système fiscal français : types d\'impôts, objectifs, collecte et répartition des recettes',
		slug: 'comprendre-les-impots',
		themeId: 'administration',
		author: 'Équipe Cap Adulte',
		publishedAt: '2025-10-06',
		readingTime: 15,
		tags: ['impôts', 'fiscalité', 'TVA', 'cotisations sociales', 'taxes locales', 'IR', 'système fiscal', 'prélèvements obligatoires'],
		featured: true,
		filePath: '/data/articles/comprendre-les-impots.md'
	},
	// {
	// 	id: 'guide-premier-achat-immobilier',
	// 	title: 'Guide complet pour son premier achat immobilier',
	// 	description: 'Tout ce qu\'il faut savoir pour acheter son premier bien immobilier en toute sérénité',
	// 	slug: 'premier-achat-immobilier',
	// 	themeId: 'logement',
	// 	author: 'Équipe Cap Adulte',
	// 	publishedAt: '2025-09-22',
	// 	readingTime: 10,
	// 	tags: ['logement', 'achat', 'immobilier', 'première fois'],
	// 	filePath: '/data/articles/premier-achat-immobilier.md'
	// },
	{
		id: 'guide-reussir-entretiens',
		title: 'Réussir ses entretiens d\'embauche',
		description: 'De la préparation au suivi : méthodologie complète avec méthode STAR et négociation salariale',
		slug: 'reussir-entretiens-embauche',
		themeId: 'emploi',
		author: 'Équipe Cap Adulte',
		publishedAt: '2025-09-30',
		readingTime: 8,
		tags: ['entretien', 'préparation', 'méthode STAR', 'négociation salariale', 'questions', 'suivi', 'relance', 'recrutement'],
		filePath: '/data/articles/reussir-entretiens-embauche.md'
	},
	{
		id: 'guide-cv-lettre-motivation',
		title: 'Créer un CV et une lettre de motivation qui se démarquent',
		description: 'Structure, contenu et astuces pour optimiser vos candidatures',
		slug: 'cv-lettre-motivation-efficaces',
		themeId: 'emploi',
		author: 'Équipe Cap Adulte',
		publishedAt: '2025-09-30',
		readingTime: 15,
		tags: ['CV', 'lettre de motivation', 'ATS',  'candidatures internationales',  'recherche emploi'],
		filePath: '/data/articles/cv-lettre-motivation-efficaces.md'
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