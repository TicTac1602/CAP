import { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Calendrier des échéances administratives",
	description: "Consultez les échéances associées à vos checklists administratives. Vérifiez les dates applicables à votre situation auprès des organismes officiels.",
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
