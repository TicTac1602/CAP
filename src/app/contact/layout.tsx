import { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Contact : questions, suggestions et signalements",
	description: "Contactez AdulPath par email pour signaler une erreur, suggérer un contenu ou partager votre expérience des premières démarches administratives.",
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
