import { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Calendrier des échéances administratives - Jeunes adultes | AdulPath",
	description: "Ne manquez plus aucune démarche importante ! Calendrier interactif des échéances administratives pour jeunes adultes : déclaration d'impôts, renouvellement CNI, assurances, APL. Rappels personnalisés et alertes pour vos deadlines.",
	keywords: [
		"calendrier échéances", "rappels administratifs", "deadlines impôts", "déclaration impôts date",
		"renouvellement carte identité", "échéances APL", "dates importantes administratives",
		"planning démarches", "agenda administratif", "rappels jeunes adultes",
		"échéances étudiants", "dates limites impôts", "organisation administrative",
		"gestion échéances", "calendrier fiscal", "rappels mutuelle", "échéances assurance"
	],
	openGraph: {
		title: "Calendrier des échéances administratives pour jeunes adultes",
		description: "Suivez toutes vos échéances importantes : impôts, renouvellements, assurances. Calendrier interactif avec rappels personnalisés.",
		url: "https://adulpath.fr/calendrier",
		type: "website",
	},
	alternates: {
		canonical: "https://adulpath.fr/calendrier"
	}
};

export default function CalendrierLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
