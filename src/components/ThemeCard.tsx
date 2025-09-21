'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ThemeSection } from '@/types';
import { getGuidesByTheme } from '@/data/guides';
import { getChecklistState, calculateChecklistStats, mergeChecklistData } from '@/components/Checklist';

interface ThemeCardProps {
	theme: ThemeSection;
}

export default function ThemeCard({ theme }: ThemeCardProps) {
	// Initialize with default stats (no localStorage access)
	const [stats, setStats] = useState(() => {
		// Always use default stats on server and initial client render
		const mergedSections = mergeChecklistData(theme.checklistSections, {});
		return calculateChecklistStats(mergedSections);
	});
	const [isHydrated, setIsHydrated] = useState(false);
	const themeGuides = getGuidesByTheme(theme.id);

	// Mettre à jour les statistiques quand le composant se monte et périodiquement
	useEffect(() => {
		const updateStats = () => {
			const checklistState = getChecklistState(theme.id);
			const mergedSections = mergeChecklistData(theme.checklistSections, checklistState);
			const newStats = calculateChecklistStats(mergedSections);
			setStats(newStats);
		};

		// Mettre à jour immédiatement après l'hydratation
		updateStats();
		setIsHydrated(true);

		// Écouter les changements du localStorage
		const handleStorageChange = (e: StorageEvent) => {
			if (e.key === `checklist-${theme.id}`) {
				updateStats();
			}
		};

		window.addEventListener('storage', handleStorageChange);

		// Polling pour détecter les changements dans le même onglet
		const interval = setInterval(updateStats, 3000);

		return () => {
			window.removeEventListener('storage', handleStorageChange);
			clearInterval(interval);
		};
	}, [theme.id, theme.checklistSections]);

	return (
		<Link href={`/theme/${theme.id}`} className="group">
			<div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 h-full">
				{/* Header avec icône et titre */}
				<div className="flex items-center mb-4">
					<div className={`${theme.color} text-white rounded-lg p-3 mr-4`}>
						<span className="text-2xl">{theme.icon}</span>
					</div>
					<div className="flex-1">
						<h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
							{theme.title}
						</h3>
						<p className="text-sm text-gray-600 mt-1">
							{theme.description}
						</p>
					</div>
				</div>

				{/* Statistiques */}
				<div className="space-y-3">
					{/* Barre de progression */}
					<div>
						<div className="flex justify-between text-sm text-gray-600 mb-1">
							<span>Progression</span>
							<span>{stats.completedTasks}/{stats.totalTasks} tâches</span>
						</div>
						<div className="w-full bg-gray-200 rounded-full h-2">
							<div
								className={`h-2 rounded-full ${theme.color} transition-all duration-300`}
								style={{ width: `${stats.progressPercentage}%` }}
							></div>
						</div>
					</div>

					{/* Indicateurs */}
					<div className="flex justify-between text-sm">
						<div className="flex items-center">
							<span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>
							<span className="text-gray-600">{stats.highPriorityTasks} tâche{stats.highPriorityTasks > 1 ? 's' : ''} importante{stats.highPriorityTasks > 1 ? 's' : ''}</span>
						</div>
						<div className="flex items-center">
							<span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
							<span className="text-gray-600">{themeGuides.length} guide{themeGuides.length > 1 ? 's' : ''}</span>
						</div>
					</div>
				</div>

				{/* Call to action */}
				<div className="mt-4 pt-4 border-t border-gray-100">
					<span className="text-blue-600 text-sm font-medium group-hover:text-blue-700">
						Voir les détails →
					</span>
				</div>
			</div>
		</Link>
	);
}