import { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Simulateur d'épargne gratuit - Projection capital, intérêts et fiscalité | AdulPath",
	description: "Simulez l'évolution de votre épargne avec capital initial, versements périodiques et rendement annuel. Comparez plusieurs produits (Livret A, LDDS, PEL, PEA...) et comprenez leur fiscalité.",
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
