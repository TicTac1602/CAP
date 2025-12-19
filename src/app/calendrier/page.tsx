'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { themes } from '@/data/themes';
import { getChecklistState } from '@/components/Checklist';
import { getUpcomingEvents } from '@/data/calendar-events';

interface DeadlineItem {
	id: string;
	title: string;
	description: string;
	deadline: Date;
	themeId: string;
	themeTitle: string;
	themeIcon: string;
	themeColor: string;
	completed: boolean;
	isCustomEvent?: boolean; // Pour distinguer les événements personnalisés
	url?: string; // URL optionnelle pour les événements personnalisés
}

type ViewMode = 'list' | 'calendar';

// Composant Vue Calendrier
function CalendarView({ deadlines }: { deadlines: DeadlineItem[] }) {
	const [currentDate, setCurrentDate] = useState(new Date());
	const [selectedDeadline, setSelectedDeadline] = useState<DeadlineItem | null>(null);

	// Effet pour bloquer le scroll quand la carte est ouverte
	useEffect(() => {
		if (selectedDeadline) {
			document.body.style.overflow = 'hidden';
			document.body.style.position = 'fixed';
			document.body.style.width = '100%';
		} else {
			document.body.style.overflow = '';
			document.body.style.position = '';
			document.body.style.width = '';
		}

		return () => {
			document.body.style.overflow = '';
			document.body.style.position = '';
			document.body.style.width = '';
		};
	}, [selectedDeadline]);

	const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
	const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
	const startCalendar = new Date(startOfMonth);
	startCalendar.setDate(startCalendar.getDate() - startOfMonth.getDay());

	const endCalendar = new Date(endOfMonth);
	endCalendar.setDate(endCalendar.getDate() + (6 - endOfMonth.getDay()));

	const calendarDays = [];
	const current = new Date(startCalendar);

	while (current <= endCalendar) {
		calendarDays.push(new Date(current));
		current.setDate(current.getDate() + 1);
	}

	const getDeadlinesForDate = (date: Date) => {
		return deadlines.filter(deadline => {
			const deadlineDate = new Date(deadline.deadline);
			return deadlineDate.toDateString() === date.toDateString();
		});
	};

	const goToPreviousMonth = () => {
		setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
	};

	const goToNextMonth = () => {
		setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
	};

	const isToday = (date: Date) => {
		const today = new Date();
		return date.toDateString() === today.toDateString();
	};

	const isCurrentMonth = (date: Date) => {
		return date.getMonth() === currentDate.getMonth();
	};

	return (
		<div className="bg-white rounded-lg shadow-sm p-3 sm:p-6">
			{/* En-tête du calendrier */}
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3">
				<h2 className="text-lg sm:text-xl font-semibold text-gray-900 text-center sm:text-left">
					{currentDate.toLocaleDateString('fr-FR', {
						month: 'long',
						year: 'numeric'
					})}
				</h2>
				<div className="flex gap-1 sm:gap-2 justify-center">
					<button
						onClick={goToPreviousMonth}
						className="p-2 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors text-lg sm:text-base"
					>
						←
					</button>
					<button
						onClick={() => setCurrentDate(new Date())}
						className="px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg transition-colors"
					>
						Aujourd&apos;hui
					</button>
					<button
						onClick={goToNextMonth}
						className="p-2 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors text-lg sm:text-base"
					>
						→
					</button>
				</div>
			</div>

			{/* Grille du calendrier */}
			<div className="grid grid-cols-7 gap-0.5 sm:gap-1">
				{/* En-têtes des jours */}
				{['D', 'L', 'M', 'Me', 'J', 'V', 'S'].map((day, index) => (
					<div key={day} className="p-1 sm:p-2 text-center text-xs sm:text-sm font-medium text-gray-500">
						<span className="sm:hidden">{day}</span>
						<span className="hidden sm:inline">{['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'][index]}</span>
					</div>
				))}

				{/* Cases du calendrier */}
				{calendarDays.map((date, index) => {
					const dayDeadlines = getDeadlinesForDate(date);
					const isCurrentMonthDay = isCurrentMonth(date);
					const isTodayDate = isToday(date);
					const hasDeadlines = dayDeadlines.length > 0;
					const hasCompletedDeadlines = dayDeadlines.some(d => d.completed);
					const hasIncompleteDeadlines = dayDeadlines.some(d => !d.completed);

					return (
						<div
							key={index}
							className={`min-h-[60px] sm:min-h-[100px] border border-gray-100 relative overflow-hidden
								${!isCurrentMonthDay ? 'bg-gray-50' : ''} 
								${isTodayDate ? 'bg-blue-50 border-blue-200' : ''}
								${hasDeadlines ? 'sm:cursor-default' : ''}
								${hasDeadlines && hasIncompleteDeadlines ? 'cursor-pointer sm:cursor-default' : ''}
							`}
							onClick={() => {
								// Sur mobile, toute la case est cliquable s'il y a des événements
								if (hasDeadlines && window.innerWidth < 640) {
									setSelectedDeadline(dayDeadlines[0]);
								}
							}}
						>
							{/* Indicateur mobile - toute la case change d'apparence */}
							{hasDeadlines && (
								<div className={`absolute inset-0 sm:hidden ${
									hasIncompleteDeadlines 
										? 'bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-300' 
										: 'bg-gradient-to-br from-green-100 to-green-200 border-2 border-green-300'
								}`} />
							)}

							{/* Contenu de la case */}
							<div className={`relative p-0.5 sm:p-1 h-full ${hasDeadlines ? 'sm:p-2' : ''}`}>
								{/* Numéro du jour */}
								<div className={`text-xs sm:text-sm font-medium mb-0.5 sm:mb-1 text-center sm:text-left relative z-10 ${
									!isCurrentMonthDay ? 'text-gray-400' :
									isTodayDate ? 'text-blue-700 font-bold' : 
									hasDeadlines && hasIncompleteDeadlines ? 'text-blue-800 sm:text-gray-900 font-bold sm:font-medium' :
									hasDeadlines && hasCompletedDeadlines ? 'text-green-800 sm:text-gray-900 font-bold sm:font-medium' :
									'text-gray-900'
								}`}>
									{date.getDate()}
								</div>

								{/* Indicateur mobile simple */}
								<div className="sm:hidden relative z-10">
									{hasDeadlines && (
										<div className="text-center">
											<div className={`text-lg ${hasIncompleteDeadlines ? 'text-blue-700' : 'text-green-700'}`}>
												{hasIncompleteDeadlines ? '📌' : '✅'}
											</div>
											{dayDeadlines.length > 1 && (
												<div className={`text-xs font-bold ${hasIncompleteDeadlines ? 'text-blue-800' : 'text-green-800'}`}>
													{dayDeadlines.length}
												</div>
											)}
										</div>
									)}
								</div>

								{/* Événements desktop - version améliorée */}
								<div className="hidden sm:block space-y-1">
									{dayDeadlines.slice(0, 3).map((deadline) => (
										<div
											key={deadline.id}
											className={`text-xs sm:text-sm p-1 sm:p-2 rounded-md cursor-pointer transition-all duration-200 transform hover:scale-105 shadow-sm ${
												deadline.completed
													? 'bg-green-100 text-green-800 line-through border border-green-200'
													: 'bg-blue-100 text-blue-800 hover:bg-blue-200 hover:shadow-md border border-blue-200'
											}`}
											onClick={(e) => {
												e.stopPropagation();
												setSelectedDeadline(deadline);
											}}
											title={`${deadline.title} (${deadline.themeTitle})`}
										>
											<div className="flex items-center gap-1">
												<span className="text-sm">{deadline.themeIcon}</span>
												<span className="truncate font-medium">{deadline.title}</span>
											</div>
										</div>
									))}
									{dayDeadlines.length > 3 && (
										<div 
											className="text-xs text-gray-600 text-center cursor-pointer hover:text-gray-800 hover:bg-gray-100 rounded p-1 transition-colors"
											onClick={(e) => {
												e.stopPropagation();
												setSelectedDeadline(dayDeadlines[0]);
											}}
										>
											+{dayDeadlines.length - 3} autres
										</div>
									)}
								</div>
							</div>
						</div>
					);
				})}
			</div>

			{/* Carte contextuelle */}
			{selectedDeadline && (
				<div
					className="fixed inset-0 bg-black/75 flex items-end sm:items-center justify-center z-50 p-4 sm:p-0"
					onClick={() => setSelectedDeadline(null)}
				>
					<div
						className="bg-white rounded-t-lg sm:rounded-lg shadow-xl p-4 sm:p-6 w-full sm:max-w-md max-h-[80vh] sm:max-h-none overflow-y-auto sm:mx-4"
						onClick={(e) => e.stopPropagation()}
						onTouchMove={(e) => e.stopPropagation()}
					>
						<div className="flex items-start justify-between mb-4">
							<div className="flex items-center gap-3 flex-1 min-w-0">
								<span className="text-2xl flex-shrink-0">{selectedDeadline.themeIcon}</span>
								<div className="min-w-0 flex-1">
									<h3 className="font-semibold text-gray-900 text-sm sm:text-base">{selectedDeadline.title}</h3>
									<p className="text-xs sm:text-sm text-gray-600 truncate">{selectedDeadline.themeTitle}</p>
								</div>
							</div>
							<button
								onClick={() => setSelectedDeadline(null)}
								className="text-gray-400 hover:text-gray-600 p-1 sm:p-0 -mr-1 sm:mr-0"
							>
								✕
							</button>
						</div>

						<p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">{selectedDeadline.description}</p>

						<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm mb-6">
							<span className="text-gray-500 flex items-center gap-2">
								<span className="flex-shrink-0">📅</span>
								<span className="text-xs sm:text-sm">
									{selectedDeadline.deadline.toLocaleDateString('fr-FR', {
										weekday: 'long',
										year: 'numeric',
										month: 'long',
										day: 'numeric'
									})}
								</span>
							</span>
							{selectedDeadline.completed && (
								<span className="text-green-600 font-medium text-sm">✓ Terminé</span>
							)}
						</div>

						{selectedDeadline.isCustomEvent ? (
							// Pour les événements personnalisés, afficher le lien externe ou un badge
							selectedDeadline.url ? (
								<a
									href={selectedDeadline.url}
									target="_blank"
									rel="noopener noreferrer"
									className="block w-full text-center px-4 py-3 sm:py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm sm:text-base font-medium"
									onClick={() => setSelectedDeadline(null)}
								>
									En savoir plus →
								</a>
							) : (
								<div className="w-full text-center px-4 py-3 sm:py-2 bg-gray-100 text-gray-600 rounded-lg text-sm sm:text-base">
									Événement administratif
								</div>
							)
						) : (
							// Pour les tâches des checklists, afficher le lien vers le thème
							<Link
								href={`/theme/${selectedDeadline.themeId}`}
								className="block w-full text-center px-4 py-3 sm:py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm sm:text-base font-medium"
								onClick={() => setSelectedDeadline(null)}
							>
								Voir le thème complet →
							</Link>
						)}
					</div>
				</div>
			)}
		</div>
	);
}

export default function CalendrierPage() {
	const [viewMode, setViewMode] = useState<ViewMode>('list');
	const [deadlines, setDeadlines] = useState<DeadlineItem[]>([]);
	const [isHydrated, setIsHydrated] = useState(false);

	useEffect(() => {
		// Récupérer tous les items avec des deadlines des checklists
		const allDeadlines: DeadlineItem[] = [];

		themes.forEach(theme => {
			const checklistState = getChecklistState(theme.id);

			theme.checklistSections.forEach(section => {
				section.items.forEach(item => {
					if (item.deadline) {
						allDeadlines.push({
							id: item.id,
							title: item.title,
							description: item.description,
							deadline: item.deadline,
							themeId: theme.id,
							themeTitle: theme.title,
							themeIcon: theme.icon,
							themeColor: theme.color,
							completed: checklistState[item.id] ?? false,
							isCustomEvent: false
						});
					}
				});
			});
		});

		// Ajouter les événements personnalisés du calendrier
		const customEvents = getUpcomingEvents();
		customEvents.forEach(event => {
			allDeadlines.push({
				id: event.id,
				title: event.title,
				description: event.description,
				deadline: event.date,
				themeId: event.type, // Utilise le type comme themeId
				themeTitle: event.type.charAt(0).toUpperCase() + event.type.slice(1),
				themeIcon: event.icon || '📅',
				themeColor: event.color || 'bg-blue-500',
				completed: false, // Les événements personnalisés ne sont pas "complétables"
				isCustomEvent: true,
				url: event.url
			});
		});

		// Trier par date (plus proche en premier)
		allDeadlines.sort((a, b) => a.deadline.getTime() - b.deadline.getTime());

		setDeadlines(allDeadlines);
		setIsHydrated(true);
	}, []);

	const formatDate = (date: Date) => {
		return date.toLocaleDateString('fr-FR', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	};

	const getTimeUntilDeadline = (deadline: Date) => {
		const now = new Date();
		const timeDiff = deadline.getTime() - now.getTime();
		const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

		if (daysDiff < 0) {
			return `Échéance passée (${Math.abs(daysDiff)} jour${Math.abs(daysDiff) > 1 ? 's' : ''})`;
		} else if (daysDiff === 0) {
			return "Aujourd'hui !";
		} else if (daysDiff === 1) {
			return "Demain";
		} else if (daysDiff <= 7) {
			return `Dans ${daysDiff} jours`;
		} else if (daysDiff <= 30) {
			return `Dans ${daysDiff} jours`;
		} else {
			const months = Math.floor(daysDiff / 30);
			return `Dans ${months} mois`;
		}
	};

	if (!isHydrated) {
		return (
			<div className="min-h-screen">
				<Header />
				<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					<div className="animate-pulse">
						<div className="h-8 bg-gray-300 rounded w-1/3 mb-4"></div>
						<div className="space-y-4">
							{[1, 2, 3].map(i => (
								<div key={i} className="h-24 bg-gray-300 rounded"></div>
							))}
						</div>
					</div>
				</main>
				<Footer />
			</div>
		);
	}

	return (
		<div className="min-h-screen">
			<Header />

			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
				{/* En-tête */}
				<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8 gap-4">
					<div className="text-center sm:text-left">
						<h1 className="text-3xl font-bold text-gray-900">Calendrier des échéances</h1>
						<p className="text-xl text-gray-600 mt-1 sm:mt-2">
							Suivez toutes vos deadlines importantes
						</p>
					</div>

					{/* Toggle vue liste/calendrier */}
					<div className="flex rounded-lg bg-gray-100 p-1 w-full sm:w-auto">
						<button
							onClick={() => setViewMode('list')}
							className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-md font-medium transition-colors text-sm sm:text-base ${viewMode === 'list'
								? 'bg-white text-blue-700 shadow-sm'
								: 'text-gray-600 hover:text-gray-900'
								}`}
						>
							Liste
						</button>
						<button
							onClick={() => setViewMode('calendar')}
							className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-md font-medium transition-colors text-sm sm:text-base ${viewMode === 'calendar'
								? 'bg-white text-blue-700 shadow-sm'
								: 'text-gray-600 hover:text-gray-900'
								}`}
						>
							Calendrier
						</button>
					</div>
				</div>

				{/* Contenu principal */}
				{viewMode === 'list' ? (
					<div className="space-y-4">
						{deadlines.length === 0 ? (
							<div className="text-center py-12">
								<div className="text-6xl mb-4">📅</div>
								<h3 className="text-lg font-medium text-gray-900 mb-2">
									Aucune échéance trouvée
								</h3>
								<p className="text-gray-600">
									Les échéances apparaîtront ici au fur et à mesure de vos tâches.
								</p>
							</div>
						) : (
							deadlines.map((deadline) => (
								<div
									key={deadline.id}
									className={`bg-white rounded-lg shadow-sm border-l-4 p-4 sm:p-6 ${deadline.completed
										? 'border-l-green-500 opacity-75'
										: 'border-l-blue-500'
										}`}
								>
									<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
										<div className="flex-1 min-w-0">
											<div className="flex items-center gap-3 mb-2">
												<span className="text-xl sm:text-2xl flex-shrink-0">{deadline.themeIcon}</span>
												<div className="min-w-0 flex-1">
													<h3 className={`font-semibold text-sm sm:text-base ${deadline.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
														{deadline.title}
													</h3>
													<p className="text-xs sm:text-sm text-gray-600 truncate">
														{deadline.themeTitle}
														{deadline.isCustomEvent && <span className="ml-2 text-purple-600">• Événement</span>}
													</p>
												</div>
											</div>
											<p className={`text-sm text-gray-600 mb-3 ${deadline.completed ? 'line-through' : ''}`}>
												{deadline.description}
											</p>
											<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm">
												<span className="text-gray-500 flex items-center gap-1">
													<span className="flex-shrink-0">📅</span>
													<span className="truncate">{formatDate(deadline.deadline)}</span>
													<span className="flex-shrink-0 ml-4">⏰</span>
													<span>{getTimeUntilDeadline(deadline.deadline)}</span>
												</span>
											</div>
										</div>
										{deadline.isCustomEvent ? (
											deadline.url ? (
												<a
													href={deadline.url}
													target="_blank"
													rel="noopener noreferrer"
													className="w-full sm:w-auto sm:ml-4 px-3 sm:px-4 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors text-xs sm:text-sm font-medium text-center whitespace-nowrap"
												>
													En savoir plus →
												</a>
											) : (
												<div className="w-full sm:w-auto sm:ml-4 px-3 sm:px-4 py-2 bg-gray-50 text-gray-500 rounded-lg text-xs sm:text-sm font-medium text-center whitespace-nowrap">
													Événement
												</div>
											)
										) : (
											<Link
												href={`/theme/${deadline.themeId}`}
												className="w-full sm:w-auto sm:ml-4 px-3 sm:px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-xs sm:text-sm font-medium text-center whitespace-nowrap"
											>
												Voir le thème →
											</Link>
										)}
									</div>
								</div>
							))
						)}
					</div>
				) : (
					<CalendarView deadlines={deadlines} />
				)}
			</main>

			<Footer />
		</div>
	);
}