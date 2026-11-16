import { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Simulateur de prêt immobilier : mensualités et capacité d'emprunt",
	description: "Estimez vos mensualités, assurance comprise, et votre capacité d'emprunt selon vos hypothèses de taux. Résultats indicatifs, hors PTZ et autres prêts aidés.",
	keywords: [
		"simulateur prêt immobilier", "calcul mensualité crédit", "capacité d'emprunt",
		"taux d'intérêt immobilier", "coût crédit immobilier", "calculateur prêt maison",
		"simulation emprunt", "mensualité prêt",
		"primo-accédant", "taux d'effort 35%",
		"frais de notaire", "assurance emprunteur", "crédit immobilier neuf ancien",
		"investissement locatif", "résidence principale", "simulateur crédit maison appartement"
	],
	openGraph: {
		title: "Simulateur de prêt immobilier : mensualités et capacité | AdulPath",
		description: "Estimez un prêt immobilier avec vos hypothèses de taux, d'assurance et de revenus. Le PTZ et les autres prêts aidés ne sont pas inclus.",
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
