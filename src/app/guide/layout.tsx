import { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Guides détaillés pour jeunes adultes - Démarches administratives",
	description: "Guides pour comprendre vos premières démarches en France : location, fiche de paie, fonctionnement des impôts, CV et entretiens d'embauche.",
	keywords: [
		"guide premier logement", "guide fiche de paie", "guide déclaration impôts", 
		"guide entretien embauche", "guide CV", "guide lettre motivation",
		"démarches administratives détaillées", "étapes location appartement",
		"comprendre bulletin salaire", "première déclaration fiscale"
	],
	openGraph: {
		title: "Guides détaillés pour jeunes adultes | AdulPath",
		description: "Guides complets avec étapes détaillées pour réussir toutes vos démarches administratives et personnelles.",
		url: "https://adulpath.fr/guide",
	},
	alternates: {
		canonical: 'https://adulpath.fr/guide'
	}
};

export default function GuideLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}