import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Checklist from '@/components/Checklist';
import { getThemeById, themes, getOtherThemes } from '@/data/themes';
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


	const currentIndex = themes.findIndex(t => t.id === id);
	const themeCount = themes.length;
	const otherThemes = getOtherThemes(currentIndex, themeCount);

	return (
		<div className="min-h-screen bg-gray-50">
			<Header />

			<main className="max-w-7xl mx-auto px-4 sm:px-6 sm:py-8 lg:px-8">
				{/* En-tête de la page */}
				<div className="bg-white rounded-lg shadow-md p-8 mb-8">
					<div className="flex items-center mb-6">
						<div className={`${theme.color} text-white rounded-lg p-4 mr-6`}>
							<span className="text-2xl">{theme.icon}</span>
						</div>
						<div>
							<h1 className="text-xl font-bold text-gray-900 mb-2">{theme.title}</h1>
							<p className="text-l text-gray-600">{theme.description}</p>
						</div>
					</div>

					{/* Navigation rapide */}
					<div className="border-t pt-6">
						<h2 className="text-lg font-semibold text-gray-900 mb-4">Navigation rapide</h2>
						<div className="flex flex-wrap gap-2">
							<Link href="#checklist" className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
								📋 Checklist
							</Link>
							{themeGuides.length > 0 && (
								<Link href="#guides" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
									📚 Guides
								</Link>
							)}
							{theme.vigilancePoints.length > 0 && (
								<Link href="#vigilance" className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors">
									⚠️ Points de vigilance
								</Link>
							)}
							{theme.usefulLinks.length > 0 && (
								<Link href="#liens" className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors">
									🔗 Liens utiles
								</Link>
							)}
						</div>
					</div>
				</div>

				{/* Checklist et Guides côte à côte */}
				<div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Checklist principale */}
					<div id="checklist">
						<Checklist checklistSections={theme.checklistSections} themeId={theme.id} />
					</div>

					{/* Guides */}
					{themeGuides.length > 0 && (
						<div id="guides" className="bg-white rounded-lg shadow-md p-6">
							<h2 className="text-xl font-bold text-gray-900 mb-6">Guides pratiques</h2>
							<div className="space-y-4">
								{themeGuides.map((guide) => (
									<Link
										key={guide.id}
										href={`/guide/${guide.slug}`}
										className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
									>
										<h3 className="text-lg font-semibold text-gray-900 mb-2">{guide.title}</h3>
										<p className="text-gray-600 mb-3 text-sm">{guide.description}</p>
										<div className="flex items-center text-xs text-gray-500 space-x-3 mb-2">
											<span>⏱️ {guide.readingTime} min</span>
											<span>👤 {guide.author}</span>
											{guide.featured && (
												<span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
													⭐ À la une
												</span>
											)}
										</div>
										<div className="flex flex-wrap gap-1">
											{guide.tags.slice(0, 3).map((tag: string) => (
												<span key={tag} className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs">
													{tag}
												</span>
											))}
										</div>
									</Link>
								))}
							</div>
						</div>
					)}
				</div>

				{/* Sections supplémentaires en pleine largeur */}
				<div className="space-y-8">
					{/* Points de vigilance */}
					{theme.vigilancePoints.length > 0 && (
						<div id="vigilance" className="bg-white rounded-lg shadow-md p-6">
							<h2 className="text-xl font-bold text-gray-900 mb-6">Points de vigilance</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
							<h2 className="text-xl font-bold text-gray-900 mb-6">Liens utiles</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
								{theme.usefulLinks.map((link) => (
									<Link
										key={link.id}
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
									>
										<h3 className="font-semibold text-blue-600 mb-1 text-sm">{link.title}</h3>
										<p className="text-xs text-gray-600 mb-2">{link.description}</p>
										<p className="text-xs text-gray-500 truncate" title={link.url}>{link.url}</p>
									</Link>
								))}
							</div>
						</div>
					)}
				</div>

				{/* Navigation vers autres thèmes */}
				{otherThemes.length > 0 && (
					<div className="mt-12 bg-white rounded-lg shadow-md p-6">
						<h2 className="text-xl font-bold text-gray-900 mb-4">Autres thèmes essentiels</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
							{otherThemes.map((otherTheme) => (
								<Link
									key={otherTheme.id}
									href={`/theme/${otherTheme.id}`}
									className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
								>
									<div className="flex items-center">
										<span className="text-xl mr-3">{otherTheme.icon}</span>
										<div>
											<h3 className="font-semibold">{otherTheme.title}</h3>
											<p className="text-sm text-gray-600">{otherTheme.description}</p>
										</div>
									</div>
								</Link>
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