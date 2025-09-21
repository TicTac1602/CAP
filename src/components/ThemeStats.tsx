'use client';

import { useState, useEffect } from 'react';
import { themes } from '@/data/themes';
import { guideArticles } from '@/data/guides';
import { calculateGlobalStats, calculateGlobalStatsDefault } from '@/components/Checklist';

export default function ThemeStats() {
	// Initialize with default stats (no localStorage access)
	const [globalStats, setGlobalStats] = useState(() => calculateGlobalStatsDefault(themes));
	const [isHydrated, setIsHydrated] = useState(false);

	useEffect(() => {
		const updateStats = () => {
			const newStats = calculateGlobalStats(themes);
			setGlobalStats(newStats);
		};

		// Mettre à jour immédiatement après l'hydratation
		updateStats();
		setIsHydrated(true);

		// Écouter les changements du localStorage pour toutes les checklists
		const handleStorageChange = (e: StorageEvent) => {
			if (e.key?.startsWith('checklist-')) {
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
	}, []);

	return (
		<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
			<div className="bg-white rounded-lg shadow-md p-6 text-center">
				<div className="text-3xl font-bold text-blue-600 mb-2">
					{themes.length}
				</div>
				<div className="text-gray-600">Thèmes disponibles</div>
			</div>
			<div className="bg-white rounded-lg shadow-md p-6 text-center">
				<div className="text-3xl font-bold text-purple-600 mb-2">
					{guideArticles.length}
				</div>
				<div className="text-gray-600">Guides pratiques</div>
			</div>
			<div className="bg-white rounded-lg shadow-md p-6 text-center">
				<div className="text-3xl font-bold text-green-600 mb-2">
					{globalStats.completedTasks}/{globalStats.totalTasks}
				</div>
				<div className="text-gray-600">Tâches accomplies</div>
			</div>
			<div className="bg-white rounded-lg shadow-md p-6 text-center">
				<div className="text-3xl font-bold text-red-600 mb-2">
					{themes.reduce((total, theme) => total + theme.vigilancePoints.length, 0)}
				</div>
				<div className="text-gray-600">Points de vigilance</div>
			</div>
		</div>
	);
}