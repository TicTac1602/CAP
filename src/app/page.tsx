import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeCard from '@/components/ThemeCard';
import { themes } from '@/data/themes';

export default function Home() {
	const featuredThemes = themes.slice(0, 3); // Les 3 premiers thèmes

	return (
		<div className="min-h-screen bg-gray-50">
			<Header />

			<main>
				{/* Hero Section */}
				<section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center">
							<h1 className="text-4xl md:text-6xl font-bold mb-6">
								Cap Adulte
							</h1>
							<p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
								Toutes les informations et démarches pratiques pour bien démarrer
								votre vie indépendante. Guides clairs, checklists et rappels
								pour éviter les oublis et les erreurs.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Link
									href="#themes"
									className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
								>
									Explorer les thèmes
								</Link>
								<Link
									href="/calendrier"
									className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
								>
									Voir le calendrier
								</Link>
							</div>
						</div>
					</div>
				</section>

				{/* Section Thèmes principaux */}
				<section id="themes" className="py-16 bg-gray-50">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-gray-900 mb-4">
								Les thèmes essentiels
							</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">
								Explorez les domaines clés de la vie adulte avec nos guides
								complets et checklists interactives.
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
							{featuredThemes.map((theme) => (
								<ThemeCard key={theme.id} theme={theme} />
							))}
						</div>

						<div className="text-center">
							<Link
								href="/theme"
								className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
							>
								Voir tous les thèmes
								<svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							</Link>
						</div>
					</div>
				</section>

				{/* Section Fonctionnalités */}
				<section className="py-16 bg-white">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-gray-900 mb-4">
								Vos outils pour réussir
							</h2>
							<p className="text-lg text-gray-600">
								Des fonctionnalités pensées pour vous simplifier la vie
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							<div className="text-center">
								<div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
									<span className="text-2xl">📋</span>
								</div>
								<h3 className="text-lg font-semibold mb-2">Checklists interactives</h3>
								<p className="text-gray-600 text-sm">
									Cochez vos tâches accomplies et suivez votre progression
								</p>
							</div>

							<div className="text-center">
								<div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
									<span className="text-2xl">📅</span>
								</div>
								<h3 className="text-lg font-semibold mb-2">Calendrier de rappels</h3>
								<p className="text-gray-600 text-sm">
									Ne ratez plus aucune échéance importante
								</p>
							</div>

							<div className="text-center">
								<div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
									<span className="text-2xl">🧮</span>
								</div>
								<h3 className="text-lg font-semibold mb-2">Simulateurs</h3>
								<p className="text-gray-600 text-sm">
									Calculez vos impôts, votre budget et plus encore
								</p>
							</div>

							<div className="text-center">
								<div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
									<span className="text-2xl">📚</span>
								</div>
								<h3 className="text-lg font-semibold mb-2">Guides détaillés</h3>
								<p className="text-gray-600 text-sm">
									Des explications claires pour chaque démarche
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Call to Action final */}
				<section className="py-16 bg-blue-600">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
						<h2 className="text-3xl font-bold text-white mb-4">
							Prêt à commencer votre checklist ?
						</h2>
						<p className="text-xl text-blue-100 mb-8">
							Choisissez votre premier thème et commencez dès maintenant
						</p>
						<Link
							href="/theme"
							className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
						>
							Commencer maintenant
							<svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
							</svg>
						</Link>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}