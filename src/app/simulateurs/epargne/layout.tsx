import { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Simulateur d'épargne : capital et intérêts composés",
	description: "Projetez votre épargne avec un capital initial, des versements réguliers et une hypothèse de rendement. Résultats bruts indicatifs, hors frais, fiscalité et inflation.",
	keywords: [
		"simulateur épargne", "calcul intérêts composés", "versement mensuel",
		"projection capital", "livret a", "ldds", "pel", "pea",
		"fiscalité placements", "éducation financière", "épargne long terme"
	],
	openGraph: {
		title: "Simulateur d'épargne gratuit - Projection et pédagogie | AdulPath",
		description: "Calculez la croissance de votre épargne et comparez les placements avec une explication simple de la fiscalité.",
		url: "https://adulpath.fr/simulateurs/epargne",
		type: "website"
	},
	alternates: {
		canonical: 'https://adulpath.fr/simulateurs/epargne'
	}
};

export default function EpargneLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
