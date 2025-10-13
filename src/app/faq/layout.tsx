import { Metadata } from 'next';

export const metadata: Metadata = {
	title: "FAQ - Questions fréquentes jeunes adultes | Démarches administratives",
	description: "80+ questions-réponses sur l'autonomie des jeunes adultes : administration, logement, santé, budget, emploi. Toutes les réponses à vos questions pratiques.",
	keywords: [
		"FAQ jeunes adultes", "questions fréquentes administration", "aide démarches administratives",
		"première fois logement", "première fois impôts", "première fois emploi",
		"questions pratiques autonomie", "réponses démarches France",
		"aide carte identité", "aide première déclaration", "aide premier appartement"
	],
	openGraph: {
		title: "FAQ - Toutes vos questions sur l'autonomie | AdulPath",
		description: "Plus de 80 questions-réponses pour vous aider dans vos démarches d'autonomie. Administration, logement, emploi, santé...",
		url: "https://adulpath.fr/faq",
	}
};

export default function FAQLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}