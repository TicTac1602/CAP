import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Simulateurs financiers gratuits - Budget, impôts, épargne",
	description: "Outils de simulation gratuits pour gérer vos finances : calculateur de budget personnel, simulateur d'impôts, estimation capacité d'emprunt. Conseils personnalisés inclus.",
	keywords: [
		"simulateur budget gratuit", "calculateur budget personnel", "simulateur impôts",
		"règle 50-30-20", "gestion budget étudiant", "calculateur épargne",
		"simulation capacité emprunt", "outil financier gratuit",
		"budget mensuel", "optimisation budget", "conseil financier"
	],
	openGraph: {
		title: "Simulateurs financiers gratuits | AdulPath",
		description: "Outils gratuits pour optimiser votre budget et vos finances personnelles. Calculs instantanés avec conseils personnalisés.",
		url: "https://adulpath.fr/simulateurs",
	}
};

// Liste des simulateurs disponibles
const simulateurs = [
	{
		id: 'budget',
		title: 'Simulateur de budget',
		description: 'Calculez et optimisez votre budget mensuel personnel',
		icon: '💰',
		color: 'bg-green-500',
		available: true,
		difficulty: 'Facile',
		duration: '5 min'
	},
	{
		id: 'impots',
		title: 'Simulateur d\'impôts',
		description: 'Estimez votre impôt sur le revenu et optimisez vos déclarations',
		icon: '🧾',
		color: 'bg-blue-500',
		available: false,
		difficulty: 'Moyen',
		duration: '10 min'
	},
	{
		id: 'emprunt',
		title: 'Capacité d\'emprunt',
		description: 'Calculez votre capacité d\'emprunt immobilier et vos mensualités',
		icon: '🏠',
		color: 'bg-purple-500',
		available: false,
		difficulty: 'Moyen',
		duration: '8 min'
	},
	{
		id: 'epargne',
		title: 'Simulateur d\'épargne',
		description: 'Planifiez vos objectifs d\'épargne et calculez les intérêts',
		icon: '�',
		color: 'bg-yellow-500',
		available: false,
		difficulty: 'Facile',
		duration: '5 min'
	},
	{
		id: 'retraite',
		title: 'Simulateur retraite',
		description: 'Estimez votre pension de retraite et planifiez votre future',
		icon: '👴',
		color: 'bg-indigo-500',
		available: false,
		difficulty: 'Avancé',
		duration: '15 min'
	}
];

export default function SimulateursPage() {
	const availableSimulators = simulateurs.filter(sim => sim.available);
	const upcomingSimulators = simulateurs.filter(sim => !sim.available);

	return (
		<div className="min-h-screen bg-gray-50">
			<Header />

			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{/* En-tête */}
				<div className="text-center mb-12">
					<h1 className="text-3xl font-bold text-gray-900 mb-4">
						Simulateurs
					</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Des outils de calcul personnalisés pour vous aider à prendre les bonnes décisions financières
					</p>
				</div>

				{/* Statistiques rapides */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
					<div className="bg-white rounded-lg shadow-sm p-6 text-center">
						<div className="text-3xl font-bold text-green-600 mb-2">{availableSimulators.length}</div>
						<div className="text-sm text-gray-600">Simulateurs disponibles</div>
					</div>
					<div className="bg-white rounded-lg shadow-sm p-6 text-center">
						<div className="text-3xl font-bold text-blue-600 mb-2">{upcomingSimulators.length}</div>
						<div className="text-sm text-gray-600">Bientôt disponibles</div>
					</div>
					<div className="bg-white rounded-lg shadow-sm p-6 text-center">
						<div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
						<div className="text-sm text-gray-600">Gratuits</div>
					</div>
				</div>

				{/* Simulateurs disponibles */}
				<section className="mb-12">
					<h2 className="text-2xl font-bold text-gray-900 mb-6">✅ Simulateurs disponibles</h2>

					{availableSimulators.length > 0 ? (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{availableSimulators.map((simulateur) => (
								<Link
									key={simulateur.id}
									href={`/simulateurs/${simulateur.id}`}
									className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 overflow-hidden"
								>
									<div className="p-6">
										<div className="flex items-center mb-4">
											<div className={`${simulateur.color} text-white rounded-lg p-3 mr-4`}>
												<span className="text-2xl">{simulateur.icon}</span>
											</div>
											<div className="flex-1">
												<h3 className="text-lg font-semibold text-gray-900 mb-1">
													{simulateur.title}
												</h3>
												<div className="flex items-center gap-3 text-xs text-gray-500">
													<span className="bg-gray-100 px-2 py-1 rounded">
														{simulateur.difficulty}
													</span>
													<span>⏱️ {simulateur.duration}</span>
												</div>
											</div>
										</div>

										<p className="text-gray-600 mb-4 text-sm">
											{simulateur.description}
										</p>

										<div className="flex items-center text-blue-600 font-medium text-sm">
											Utiliser ce simulateur
											<svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
											</svg>
										</div>
									</div>
								</Link>
							))}
						</div>
					) : (
						<div className="text-center py-12">
							<span className="text-6xl mb-4 block">🚧</span>
							<h3 className="text-lg font-medium text-gray-900 mb-2">
								Aucun simulateur disponible pour le moment
							</h3>
							<p className="text-gray-600">
								Nos simulateurs sont en cours de développement et seront bientôt disponibles.
							</p>
						</div>
					)}
				</section>

				{/* Simulateurs à venir */}
				{upcomingSimulators.length > 0 && (
					<section>
						<h2 className="text-2xl font-bold text-gray-900 mb-6">🚧 Prochainement disponibles</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{upcomingSimulators.map((simulateur) => (
								<div
									key={simulateur.id}
									className="bg-white rounded-lg shadow-sm overflow-hidden opacity-75"
								>
									<div className="p-6">
										<div className="flex items-center mb-4">
											<div className={`${simulateur.color} text-white rounded-lg p-3 mr-4 opacity-60`}>
												<span className="text-2xl">{simulateur.icon}</span>
											</div>
											<div className="flex-1">
												<h3 className="text-lg font-semibold text-gray-600 mb-1">
													{simulateur.title}
												</h3>
												<div className="flex items-center gap-3 text-xs text-gray-400">
													<span className="bg-gray-100 px-2 py-1 rounded">
														{simulateur.difficulty}
													</span>
													<span>⏱️ {simulateur.duration}</span>
												</div>
											</div>
										</div>

										<p className="text-gray-500 mb-4 text-sm">
											{simulateur.description}
										</p>

										<div className="flex items-center text-gray-400 text-sm">
											<span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-xs">
												Bientôt disponible
											</span>
										</div>
									</div>
								</div>
							))}
						</div>
					</section>
				)}

				{/* Call to action */}
				<div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 text-center">
					<h2 className="text-2xl font-bold mb-4">
						Vous avez une idée de simulateur ?
					</h2>
					<p className="text-blue-100 mb-6 max-w-2xl mx-auto">
						Nous sommes toujours à l&apos;écoute de vos besoins ! Suggérez-nous de nouveaux simulateurs
						qui vous seraient utiles dans votre vie adulte.
					</p>
					<Link
						href="/contact"
						className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
					>
						Faire une suggestion
						<svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
						</svg>
					</Link>
				</div>
			</main>

			<Footer />
		</div>
	);
}