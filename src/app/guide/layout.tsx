import { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Guides détaillés pour jeunes adultes - Démarches administratives",
	description: "Guides complets et détaillés pour réussir vos démarches : premier logement, comprendre sa fiche de paie, déclaration d'impôts, entretiens d'embauche, CV efficace. Conseils pratiques et étapes détaillées.",
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
	}
};

export default function GuideLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}