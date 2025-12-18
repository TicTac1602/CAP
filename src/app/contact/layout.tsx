import { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Contact - Posez vos questions sur l'autonomie | AdulPath",
	description: "Une question sur vos démarches administratives ? Besoin de conseils pour votre vie d'adulte ? Contactez l'équipe AdulPath par email. Nous répondons à toutes vos interrogations sur l'autonomie, les impôts, le logement, l'emploi.",
	keywords: [
		"contact AdulPath", "poser une question", "aide démarches administratives",
		"conseil jeunes adultes", "support autonomie", "questions impôts", "aide logement",
		"contact guide adulte", "assistance administrative", "conseils vie adulte"
	],
	openGraph: {
		title: "Contactez AdulPath - Aide et conseils pour votre autonomie",
		description: "Des questions sur vos démarches d'adulte ? Notre équipe est là pour vous accompagner.",
		url: "https://adulpath.fr/contact",
		type: "website",
	},
	alternates: {
		canonical: "https://adulpath.fr/contact"
	}
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
