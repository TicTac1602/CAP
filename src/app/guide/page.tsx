'use client';

import { createElement, useState, useMemo } from 'react';
import Link from 'next/link';
import { guideArticles } from '@/data/guides';
import { themes } from '@/data/themes';
import Header from '@/components/Header';
import { BookOpen, CalendarDays, Search, Star, Timer } from 'lucide-react';
import { themeIcons } from '@/lib/theme-icons';

export default function GuidesPage() {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedTheme, setSelectedTheme] = useState<string>('all');

	// Filtrer les guides selon les critères de recherche
	const filteredGuides = useMemo(() => {
		return guideArticles.filter(guide => {
			const matchesSearch =
				guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				guide.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
				guide.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

			const matchesTheme = selectedTheme === 'all' || guide.themeId === selectedTheme;

			return matchesSearch && matchesTheme;
		});
	}, [searchTerm, selectedTheme]);

	// Obtenir le nom du thème à partir de l'ID
	const getThemeName = (themeId: string) => {
		const theme = themes.find(t => t.id === themeId);
		return theme ? theme.title : themeId;
	};

	// Obtenir l'icône du thème
	const getThemeIcon = (themeId: string) => {
		return themeIcons[themeId] ?? BookOpen;
	};

	// Obtenir la couleur du thème
	const getThemeColor = (themeId: string) => {
		const theme = themes.find(t => t.id === themeId);
		return theme ? theme.color : 'bg-gray-500';
	};

	return (
		<div className="min-h-screen">
			<Header />
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{/* En-tête */}
				<div className="text-center mb-12">
					<h1 className="text-3xl font-bold text-gray-900 mb-4">
						Tous nos guides
					</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Des guides pratiques et détaillés pour vous accompagner dans toutes vos démarches d&apos;adulte
					</p>
				</div>

				{/* Barre de recherche et filtres */}
				<div className="bg-white rounded-lg shadow-lg p-6 mb-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
						{/* Barre de recherche */}
						<div>
							<label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
								Rechercher un guide
							</label>
							<input
								id="search"
								type="text"
								placeholder="Rechercher par titre, description ou mot-clé..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
							/>
						</div>

						{/* Filtre par thème */}
						<div>
							<label htmlFor="theme" className="block text-sm font-medium text-gray-700 mb-2">
								Catégorie
							</label>
							<select
								id="theme"
								value={selectedTheme}
								onChange={(e) => setSelectedTheme(e.target.value)}
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
							>
								<option value="all">Toutes les catégories</option>
								{themes.map(theme => (
									<option key={theme.id} value={theme.id}>
										{theme.title}
									</option>
								))}
							</select>
						</div>
					</div>

					{/* Compteur de résultats */}
					<div className="text-sm text-gray-600">
						{filteredGuides.length} guide{filteredGuides.length > 1 ? 's' : ''} trouvé{filteredGuides.length > 1 ? 's' : ''}
						{searchTerm && ` pour "${searchTerm}"`}
					</div>
				</div>

				{/* Liste des guides */}
				{filteredGuides.length === 0 ? (
					<div className="text-center py-12">
						<Search size={48} className="mx-auto mb-4" aria-hidden="true" />
						<h3 className="text-xl font-semibold text-gray-700 mb-2">
							Aucun guide trouvé
						</h3>
						<p className="text-gray-500">
							Essayez de modifier vos critères de recherche ou vos filtres
						</p>
					</div>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{filteredGuides.map(guide => (
							<Link
								key={guide.id}
								href={`/guide/${guide.slug}`}
								className="group"
							>
								<div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
									{/* En-tête de la carte */}
									<div className="p-4 pb-0">
										<div className="flex justify-between items-start mb-3">
											{/* Catégorie */}
											<span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium text-white ${getThemeColor(guide.themeId)}`}>
												{createElement(getThemeIcon(guide.themeId), { size: 16, 'aria-hidden': true })} {getThemeName(guide.themeId)}
											</span>
											{guide.featured && (
												<span className="inline-flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
													<Star size={14} aria-hidden="true" /> Recommandé
												</span>
											)}
										</div>
									</div>

									{/* Contenu */}
									<div className="p-4 pt-0">
										<h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
											{guide.title}
										</h3>
										<p className="text-gray-600 text-sm mb-4 line-clamp-3">
											{guide.description}
										</p>

										{/* Tags */}
										<div className="flex flex-wrap gap-1 mb-4">
											{guide.tags.slice(0, 3).map(tag => (
												<span
													key={tag}
													className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
												>
													{tag}
												</span>
											))}
											{guide.tags.length > 3 && (
												<span className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
													+{guide.tags.length - 3}
												</span>
											)}
										</div>

										{/* Métadonnées */}
										<div className="flex items-center justify-between text-xs text-gray-500">
													<span className="flex items-center gap-1">
														<Timer size={14} aria-hidden="true" /> {guide.readingTime} min de lecture
											</span>
													<span className="inline-flex items-center gap-1">
														<CalendarDays size={14} aria-hidden="true" /> {guide.publishedAt ? new Date(guide.publishedAt).toLocaleDateString('fr-FR') : 'Date inconnue'}
											</span>
										</div>
									</div>
								</div>
							</Link>
						))}
					</div>
				)}

				{/* Suggestion d'ajout */}
				<div className="mt-12 text-center">
					<div className="bg-blue-500 rounded-lg p-6 text-white">
						<h3 className="text-xl font-semibold mb-2">
							Vous ne trouvez pas ce que vous cherchez ?
						</h3>
						<p className="mb-4">
							Proposez-nous de nouveaux guides ou sujets à traiter !
						</p>
						<Link
							href="/contact"
							className="inline-flex items-center px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
						>
							Faire une suggestion
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}