'use client';

import { useState, useEffect, useRef } from 'react';
import { ThemeSection, ChecklistState, ChecklistSection } from '@/types';
import Link from 'next/link';

// Fonctions utilitaires exportées
/**
 * Récupère l'état sauvegardé d'une checklist depuis localStorage (format simplifié)
 * @param themeId - L'identifiant du thème
 * @returns L'état simplifié de la checklist {itemId: completed}
 */
export function getChecklistState(themeId: string): ChecklistState {
	if (typeof window === 'undefined') {
		return {};
	}

	try {
		const savedState = localStorage.getItem(`checklist-${themeId}`);
		if (savedState) {
			return JSON.parse(savedState);
		}
	} catch (error) {
		console.error('Erreur lors du chargement de la checklist:', error);
	}

	return {};
}

/**
 * Fusionne les données des thèmes avec l'état sauvegardé
 * @param checklistSections - Les sections de checklist du thème
 * @param checklistState - L'état sauvegardé
 * @returns Les sections avec l'état mis à jour
 */
export function mergeChecklistData(checklistSections: ChecklistSection[], checklistState: ChecklistState): ChecklistSection[] {
	return checklistSections.map(section => ({
		...section,
		items: section.items.map(item => ({
			...item,
			completed: checklistState[item.id] ?? false
		}))
	}));
}

/**
 * Calcule les statistiques d'une checklist avec sections
 * @param checklistSections - Les sections de checklist
 * @returns Objet avec les statistiques calculées
 */
export function calculateChecklistStats(checklistSections: ChecklistSection[]) {
	const allItems = checklistSections.flatMap(section => section.items);
	const totalTasks = allItems.length;
	const completedTasks = allItems.filter(item => item.completed).length;
	const highPriorityTasks = allItems.filter(item => item.priority === 'high').length;
	const progressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

	return {
		totalTasks,
		completedTasks,
		highPriorityTasks,
		progressPercentage
	};
}

/**
 * Calcule les statistiques globales de tous les thèmes
 * @param themes - Les thèmes avec leurs checklists
 * @returns Statistiques globales
 */
export function calculateGlobalStats(themes: ThemeSection[]) {
	let totalTasks = 0;
	let completedTasks = 0;

	themes.forEach(theme => {
		const checklistState = getChecklistState(theme.id);
		const mergedSections = mergeChecklistData(theme.checklistSections, checklistState);
		const stats = calculateChecklistStats(mergedSections);
		totalTasks += stats.totalTasks;
		completedTasks += stats.completedTasks;
	});

	const globalProgressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

	return {
		totalTasks,
		completedTasks,
		globalProgressPercentage
	};
}

/**
 * Calcule les statistiques globales de tous les thèmes sans accéder au localStorage
 * Utilisé pour le rendu côté serveur et l'état initial
 * @param themes - Les thèmes avec leurs checklists
 * @returns Statistiques globales par défaut
 */
export function calculateGlobalStatsDefault(themes: ThemeSection[]) {
	let totalTasks = 0;
	let completedTasks = 0;

	themes.forEach(theme => {
		// Utilise un état vide (pas de localStorage)
		const mergedSections = mergeChecklistData(theme.checklistSections, {});
		const stats = calculateChecklistStats(mergedSections);
		totalTasks += stats.totalTasks;
		completedTasks += stats.completedTasks;
	});

	const globalProgressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

	return {
		totalTasks,
		completedTasks,
		globalProgressPercentage
	};
}

interface ChecklistProps {
	checklistSections: ChecklistSection[];
	themeId: string;
}

export default function Checklist({ checklistSections, themeId }: ChecklistProps) {
	// État local pour le stockage simplifié - initialize with empty state for server
	const [checklistState, setChecklistState] = useState<ChecklistState>(() => ({}));

	// État pour l'expansion/collapse des sections (fermées par défaut)
	const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

	// Sections avec état mis à jour
	const mergedSections = mergeChecklistData(checklistSections, checklistState);

	// Mettre à jour si le themeId change
	useEffect(() => {
		setChecklistState(getChecklistState(themeId));
		setExpandedSections(new Set());
	}, [themeId]);

	// Sauvegarder dans localStorage à chaque changement (sauf premier rendu)
	const hasMounted = useRef(false);

	useEffect(() => {
		if (hasMounted.current) {
			localStorage.setItem(`checklist-${themeId}`, JSON.stringify(checklistState));
		} else {
			hasMounted.current = true;
		}
	}, [checklistState, themeId]);

	const toggleItem = (itemId: string) => {
		setChecklistState(prev => ({
			...prev,
			[itemId]: !prev[itemId]
		}));
	};

	const toggleSection = (sectionId: string) => {
		setExpandedSections(prev => {
			const newSet = new Set(prev);
			if (newSet.has(sectionId)) {
				newSet.delete(sectionId);
			} else {
				newSet.add(sectionId);
			}
			return newSet;
		});
	};

	const isSectionExpanded = (sectionId: string) => {
		return expandedSections.has(sectionId);
	};

	const expandAllSections = () => {
		const allSectionIds = new Set(checklistSections.map(section => section.id));
		setExpandedSections(allSectionIds);
	};

	const collapseAllSections = () => {
		setExpandedSections(new Set());
	};

	const hasExpandedSections = expandedSections.size > 0;

	const getPriorityColor = (priority: string) => {
		switch (priority) {
			case 'high':
				return 'text-red-600 bg-red-50 border-red-200';
			case 'medium':
				return 'text-yellow-600 bg-yellow-50 border-yellow-200';
			case 'low':
				return 'text-green-600 bg-green-50 border-green-200';
			default:
				return 'text-gray-600 bg-gray-50 border-gray-200';
		}
	};

	const getPriorityLabel = (priority: string) => {
		switch (priority) {
			case 'high':
				return 'Priorité haute';
			case 'medium':
				return 'Priorité moyenne';
			case 'low':
				return 'Priorité basse';
			default:
				return 'Sans priorité';
		}
	};

	const formatDeadline = (deadline?: Date) => {
		if (!deadline) return null;

		const date = new Date(deadline);
		const now = new Date();
		const diffTime = date.getTime() - now.getTime();
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

		if (diffDays < 0) {
			return { text: `Échéance dépassée de ${Math.abs(diffDays)} jour(s)`, color: 'text-red-600' };
		} else if (diffDays === 0) {
			return { text: 'Échéance aujourd\'hui', color: 'text-red-600' };
		} else if (diffDays <= 7) {
			return { text: `${diffDays} jour(s) restant(s)`, color: 'text-orange-600' };
		} else {
			return { text: `Échéance le ${date.toLocaleDateString('fr-FR')}`, color: 'text-gray-600' };
		}
	};

	const allItems = mergedSections.flatMap(section => section.items);
	const completedCount = allItems.filter(item => item.completed).length;
	const totalCount = allItems.length;
	const progressPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

	return (
		<div className="bg-white rounded-lg shadow-md p-6">
			<div className="mb-6">
				<div className="mb-2">
					<h2 className="text-2xl font-bold text-gray-900">Checklist</h2>
					<div className="flex items-center justify-between">
						<span className="text-sm text-gray-600">
							{completedCount}/{totalCount} terminées
						</span>
						<button
							onClick={hasExpandedSections ? collapseAllSections : expandAllSections}
							className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-md transition-colors duration-200"
						>
							{hasExpandedSections ? '📤 Tout replier' : '📥 Tout déplier'}
						</button>
					</div>
				</div>

				{/* Barre de progression */}
				<div className="w-full bg-gray-200 rounded-full h-3">
					<div
						className="bg-blue-600 h-3 rounded-full transition-all duration-300"
						style={{ width: `${progressPercentage}%` }}
					></div>
				</div>

				{progressPercentage === 100 && (
					<div className="mt-3 p-3 bg-green-200 border border-green-100 rounded-md">
						<p className="text-sm font-medium">
							🎉 Félicitations ! Vous avez terminé toutes les tâches de cette section.
						</p>
					</div>
				)}
			</div>

			{/* Rendu par sections */}
			<div className="space-y-8">
				{mergedSections.map((section) => {
					const isExpanded = isSectionExpanded(section.id);
					const completedItems = section.items.filter(item => item.completed).length;
					const totalItems = section.items.length;

					return (
						<div key={section.id} className="space-y-4">
							{/* En-tête de section clickable */}
							<button
								onClick={() => toggleSection(section.id)}
								className="w-full border-l-4 border-blue-500 bg-blue-50 hover:bg-blue-100 p-4 rounded-r-lg transition-colors duration-200 text-left"
							>
								<div className="flex items-center justify-between">
									<div className="flex-1">
										<div className="flex items-center space-x-2">
											<h3 className="text-lg font-semibold text-gray-900 mb-1">
												{section.title}
											</h3>

										</div>
										<p className="text-sm text-gray-600">
											{section.description}
										</p>
										<div className="mt-2 flex items-center space-x-2">
											<span className="text-xs text-gray-500">
												{completedItems}/{totalItems} tâches terminées
											</span>
											{/* Mini barre de progression pour la section */}
											<div className="flex-1 bg-gray-200 rounded-full h-1.5 max-w-24">
												<div
													className="bg-green-500 h-1.5 rounded-full transition-all duration-300"
													style={{ width: `${totalItems > 0 ? (completedItems / totalItems) * 100 : 0}%` }}
												></div>
											</div>
										</div>
									</div>

									{/* Icône expand/collapse */}
									<div className="ml-4 flex-shrink-0">
										<svg
											className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
										</svg>
									</div>
								</div>
							</button>

							{/* Items de la section (conditionnellement affichés) */}
							{isExpanded && (
								<div className="space-y-3">
									{section.items.map((item) => {
										const deadline = formatDeadline(item.deadline);

										return (
											<div
												key={item.id}
												className={`border rounded-lg p-4 transition-all duration-200 ${item.completed
													? 'bg-green-50 border-green-200'
													: 'bg-white border-gray-200'
													}`}
											>
												<div className="flex items-start space-x-3">
													{/* Checkbox */}
													<button
														onClick={() => toggleItem(item.id)}
														className={`flex-shrink-0 w-6 h-6 rounded border-2 transition-colors duration-200 ${item.completed
															? 'bg-green-500 border-green-500'
															: 'border-gray-300 hover:border-gray-400'
															}`}
													>
														{item.completed && (
															<svg className="w-4 h-4 text-white m-0.5" fill="currentColor" viewBox="0 0 20 20">
																<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
															</svg>
														)}
													</button>

													{/* Contenu */}
													<div className="flex-1">
														<div className="flex items-start justify-between">
															<div className="flex-1">
																<h4 className={`font-medium ${item.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
																	{item.title}
																</h4>
																<p className={`text-sm mt-1 ${item.completed ? 'line-through text-gray-400' : 'text-gray-600'}`}>
																	{item.description}
																</p>
															</div>

															{/* Badge priorité */}
															<span className={`px-2 py-1 text-xs font-medium rounded-md border ${getPriorityColor(item.priority)}`}>
																{getPriorityLabel(item.priority)}
															</span>
														</div>

														{/* Échéance */}
														{deadline && (
															<div className="mt-2">
																<span className={`text-xs font-medium ${deadline.color}`}>
																	⏰ {deadline.text}
																</span>
															</div>
														)}

														{/* Ressources */}
														{item.resources && item.resources.length > 0 && (
															<div className="mt-3">
																<p className="text-xs text-gray-500 mb-1">Ressources utiles :</p>
																<div className="space-y-1">
																	{item.resources.map((resource, index: number) => (
																		<Link
																			key={index}
																			href={resource.url}
																			target="_blank"
																			rel="noopener noreferrer"
																			className="text-xs text-blue-600 hover:text-blue-700 underline block"
																		>
																			{resource.title}
																		</Link>
																	))}
																</div>
															</div>
														)}
													</div>
												</div>
											</div>
										);
									})}
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}