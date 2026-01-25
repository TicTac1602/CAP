import { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Simulateur de prêt immobilier gratuit - Calcul mensualités et capacité d'emprunt | AdulPath",
	description: "Calculez vos mensualités de prêt immobilier, le coût total de votre crédit et votre taux d'endettement. Vérifiez votre éligibilité au PTZ (prêt à taux zéro). Outil pédagogique gratuit pour primo-accédants et investisseurs.",
	keywords: [
		"simulateur prêt immobilier", "calcul mensualité crédit", "capacité d'emprunt",
		"taux d'intérêt immobilier", "coût crédit immobilier", "calculateur prêt maison",
		"simulation emprunt", "mensualité prêt", "PTZ prêt à taux zéro",
		"éligibilité PTZ", "primo-accédant", "taux d'endettement 35%",
		"frais de notaire", "assurance emprunteur", "crédit immobilier neuf ancien",
		"investissement locatif", "résidence principale", "simulateur crédit maison appartement"
	],
	openGraph: {
		title: "Simulateur de prêt immobilier gratuit - Calcul mensualités, PTZ et taux d'endettement | AdulPath",
		description: "Calculez vos mensualités, vérifiez votre éligibilité au PTZ et votre taux d'endettement. Outil pédagogique gratuit avec explications détaillées pour primo-accédants et investisseurs.",
		url: "https://adulpath.fr/simulateurs/emprunt",
		type: "website",
	},
	alternates: {
		canonical: 'https://adulpath.fr/simulateurs/emprunt'
	}
};

export default function EmpruntLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
