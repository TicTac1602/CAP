'use client';

import { useState, useEffect } from 'react';
import { themes } from '@/data/themes';
import { guideArticles } from '@/data/guides';
import { calculateGlobalStats, calculateGlobalStatsDefault } from '@/components/Checklist';

export default function GlobalStats() {
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
		<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
			<div className="bg-blue-50 rounded-lg p-8">
				<div className="text-3xl font-bold text-blue-600 mb-2">
					{themes.length}
				</div>
				<div className="text-gray-600">Thèmes disponibles</div>
				<div className="text-sm text-gray-500 mt-1">
					Domaines essentiels
				</div>
			</div>
			<div className="bg-green-50 rounded-lg p-8">
				<div className="text-3xl font-bold text-green-600 mb-2">
					{globalStats.completedTasks}/{globalStats.totalTasks}
				</div>
				<div className="text-gray-600">Tâches accomplies</div>
				<div className="text-sm text-gray-500 mt-1">
					{Math.round(globalStats.globalProgressPercentage)}% de progression
				</div>
			</div>
			<div className="bg-purple-50 rounded-lg p-8">
				<div className="text-3xl font-bold text-purple-600 mb-2">
					{guideArticles.length}
				</div>
				<div className="text-gray-600">Guides pratiques</div>
				<div className="text-sm text-gray-500 mt-1">
					Pas à pas détaillés
				</div>
			</div>
		</div>
	);
}