import { Metadata } from 'next';
import { faqData } from '@/data/faq';

export const metadata: Metadata = {
	title: "FAQ - Questions fréquentes jeunes adultes | Démarches administratives",
	description: `${faqData.length} questions-réponses pour comprendre vos démarches en France : administration, logement, santé, budget et emploi.`,
	keywords: [
		"FAQ jeunes adultes", "questions fréquentes administration", "aide démarches administratives",
		"première fois logement", "première fois impôts", "première fois emploi",
		"questions pratiques autonomie", "réponses démarches France",
		"aide carte identité", "aide première déclaration", "aide premier appartement"
	],
	openGraph: {
		title: "FAQ - Toutes vos questions sur l'autonomie | AdulPath",
		description: `${faqData.length} questions-réponses sur vos premières démarches : administration, logement, emploi, santé et budget.`,
		url: "https://adulpath.fr/faq",
	},
	alternates: {
		canonical: "https://adulpath.fr/faq"
	}
};

export default function FAQLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}