import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Checklist from '@/components/Checklist';
import { getThemeById, themes } from '@/data/themes';
import { getGuidesByTheme } from '@/data/guides';

interface ThemePageProps {
	params: Promise<{ id: string }>;
}

export default async function ThemePage({ params }: ThemePageProps) {
	const { id } = await params;
	const theme = getThemeById(id);

	if (!theme) {
		notFound();
	}

	// Récupérer les guides pour ce thème
	const themeGuides = getGuidesByTheme(id);

	// Filtrer les autres thèmes pour la navigation
	const otherThemes = themes.filter(t => t.id !== theme.id).slice(0, 3);

	return (
		<div className="min-h-screen bg-gray-50">
			<Header />

			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{/* En-tête de la page */}
				<div className="bg-white rounded-lg shadow-md p-8 mb-8">
					<div className="flex items-center mb-6">
						<div className={`${theme.color} text-white rounded-lg p-4 mr-6`}>
							<span className="text-2xl">{theme.icon}</span>
						</div>
						<div>
							<h1 className="text-2xl font-bold text-gray-900 mb-2">{theme.title}</h1>
							<p className="text-xl text-gray-600">{theme.description}</p>
						</div>
					</div>

					{/* Navigation rapide */}
					<div className="border-t pt-6">
						<h2 className="text-lg font-semibold text-gray-900 mb-4">Navigation rapide</h2>
						<div className="flex flex-wrap gap-2">
							<a href="#checklist" className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
								📋 Checklist
							</a>
							{themeGuides.length > 0 && (
								<a href="#guides" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
									📚 Guides
								</a>
							)}
							{theme.vigilancePoints.length > 0 && (
								<a href="#vigilance" className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors">
									⚠️ Points de vigilance
								</a>
							)}
							{theme.usefulLinks.length > 0 && (
								<a href="#liens" className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors">
									🔗 Liens utiles
								</a>
							)}
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Checklist */}
					<div id="checklist">
						<Checklist checklistSections={theme.checklistSections} themeId={theme.id} />
					</div>

					{/* Guides et informations */}
					<div className="space-y-8">
						{/* Guides */}
						{themeGuides.length > 0 && (
							<div id="guides" className="bg-white rounded-lg shadow-md p-6">
								<h2 className="text-2xl font-bold text-gray-900 mb-6">Guides pratiques</h2>
								<div className="space-y-4">
									{themeGuides.map((guide) => (
										<Link
											key={guide.id}
											href={`/guide/${guide.slug}`}
											className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
										>
											<div className="flex items-center justify-between">
												<div className="flex-1">
													<h3 className="text-lg font-semibold text-gray-900 mb-2">{guide.title}</h3>
													<p className="text-gray-600 mb-2">{guide.description}</p>
													<div className="flex items-center text-sm text-gray-500 space-x-4">
														<span>⏱️ {guide.readingTime} min de lecture</span>
														<span>👤 {guide.author}</span>
														{guide.featured && (
															<span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
																⭐ À la une
															</span>
														)}
													</div>
													<div className="flex flex-wrap gap-1 mt-2">
														{guide.tags.map((tag: string) => (
															<span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
																{tag}
															</span>
														))}
													</div>
												</div>
												<div className="ml-4">
													<span className="text-blue-600 hover:text-blue-800">
														→
													</span>
												</div>
											</div>
										</Link>
									))}
								</div>
							</div>
						)}            {/* Points de vigilance */}
						{theme.vigilancePoints.length > 0 && (
							<div id="vigilance" className="bg-white rounded-lg shadow-md p-6">
								<h2 className="text-2xl font-bold text-gray-900 mb-6">Points de vigilance</h2>
								<div className="space-y-4">
									{theme.vigilancePoints.map((point) => (
										<div key={point.id} className={`p-4 rounded-lg border-l-4 ${point.type === 'deadline' ? 'bg-red-50 border-red-400' :
												point.type === 'trap' ? 'bg-yellow-50 border-yellow-400' :
													'bg-blue-50 border-blue-400'
											}`}>
											<h3 className="font-semibold text-gray-900 mb-1">{point.title}</h3>
											<p className="text-sm text-gray-600">{point.description}</p>
										</div>
									))}
								</div>
							</div>
						)}

						{/* Liens utiles */}
						{theme.usefulLinks.length > 0 && (
							<div id="liens" className="bg-white rounded-lg shadow-md p-6">
								<h2 className="text-2xl font-bold text-gray-900 mb-6">Liens utiles</h2>
								<div className="space-y-3">
									{theme.usefulLinks.map((link) => (
										<a
											key={link.id}
											href={link.url}
											target="_blank"
											rel="noopener noreferrer"
											className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
										>
											<h3 className="font-semibold text-blue-600 mb-1">{link.title}</h3>
											<p className="text-sm text-gray-600">{link.description}</p>
											<span className="text-xs text-gray-500">{link.url}</span>
										</a>
									))}
								</div>
							</div>
						)}

						{/* Section vide avec message si aucun contenu */}
						{themeGuides.length === 0 && theme.vigilancePoints.length === 0 && theme.usefulLinks.length === 0 && (
							<div className="bg-white rounded-lg shadow-md p-6">
								<div className="text-center py-8">
									<span className="text-2xl mb-4 block">🚧</span>
									<h3 className="text-lg font-semibold text-gray-900 mb-2">Contenu en cours de développement</h3>
									<p className="text-gray-600">
										Les guides, points de vigilance et liens utiles pour ce thème seront bientôt disponibles.
									</p>
								</div>
							</div>
						)}
					</div>
				</div>

				{/* Navigation vers autres thèmes */}
				{otherThemes.length > 0 && (
					<div className="mt-12 bg-white rounded-lg shadow-md p-6">
						<h2 className="text-xl font-bold text-gray-900 mb-4">Autres thèmes essentiels</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
							{otherThemes.map((otherTheme) => (
								<a
									key={otherTheme.id}
									href={`/theme/${otherTheme.id}`}
									className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
								>
									<div className="flex items-center">
										<span className="text-2xl mr-3">{otherTheme.icon}</span>
										<div>
											<h3 className="font-semibold">{otherTheme.title}</h3>
											<p className="text-sm text-gray-600">{otherTheme.description}</p>
										</div>
									</div>
								</a>
							))}
						</div>
					</div>
				)}
			</main>

			<Footer />
		</div>
	);
}

// Générer les routes statiques pour tous les thèmes
export async function generateStaticParams() {
	return themes.map((theme) => ({
		id: theme.id,
	}));
}