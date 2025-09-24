import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeCard from '@/components/ThemeCard';
import { themes } from '@/data/themes';
import Link from 'next/link';

export default function ThemesPage() {
	return (
		<div className="min-h-screen bg-gray-50">
			<Header />

			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{/* En-tête de la page */}
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">Tous les thèmes</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Explorez tous les domaines essentiels de la vie adulte. Chaque thème contient
						des checklists pratiques, des guides détaillés et des conseils personnalisés.
					</p>
				</div>

				{/* Grille des thèmes */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{themes.map((theme) => (
						<ThemeCard key={theme.id} theme={theme} />
					))}
				</div>

				{/* Section d'aide */}
				<div className="mt-16 bg-blue-50 rounded-lg p-8">
					<div className="text-center">
						<h2 className="text-2xl font-bold text-gray-900 mb-4">Besoin d&apos;aide pour commencer ?</h2>
						<p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
							Chaque thème est conçu pour vous guider étape par étape. Commencez par valider les tâches
							que vous jugez avoir déjà accomplies et approfondissez votre démarche avec les autres tâches.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Link
								href="/faq"
								className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
							>
								Questions fréquentes
							</Link>
							<Link
								href="/simulateurs"
								className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
							>
								Simulateurs
							</Link>
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}