import { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Simulateur de budget personnel gratuit - Règle 50-30-20",
	description: "Calculateur de budget personnel gratuit basé sur la règle 50-30-20. Optimisez vos finances, gérez vos dépenses et planifiez votre épargne avec des conseils personnalisés.",
	keywords: [
		"simulateur budget personnel", "règle 50-30-20", "calculateur budget mensuel",
		"gestion finances personnelles", "planification budget", "optimisation dépenses",
		"budget étudiant", "budget jeune actif", "épargne automatique",
		"répartition revenus", "conseil budgétaire gratuit"
	],
	openGraph: {
		title: "Simulateur de budget personnel gratuit | AdulPath",
		description: "Outil gratuit pour optimiser votre budget avec la règle 50-30-20. Calculs instantanés et conseils personnalisés.",
		url: "https://adulpath.fr/simulateurs/budget",
	}
};

export default function BudgetLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}