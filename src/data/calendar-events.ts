import { CalendarEvent } from "@/types";

export const calendarEvents: CalendarEvent[] = [
	// Événements administratifs
	{
		id: 'demande-bourses-2026',
		title: 'Demande de bourse étudiante',
		description: 'Ouverture du DSE (Dossier Social Étudiant) pour l\'année suivante sur messervices.etudiant.gouv.fr',
		date: new Date(2026, 0, 15), // 15 janvier 2026
		type: 'education',
		recurring: 'yearly',
		icon: '🎓',
		color: 'bg-blue-500',
		url: 'https://www.messervices.etudiant.gouv.fr'
	},
	{
		id: 'fermeture-dse-2026',
		title: 'Date limite demande de bourse',
		description: 'Date limite pour compléter votre DSE pour la rentrée suivante',
		date: new Date(2026, 4, 15), // 15 mai 2026
		type: 'education',
		recurring: 'yearly',
		icon: '🎓',
		color: 'bg-red-500'
	},

	// Événements santé
	{
		id: 'declaration-medecin-traitant',
		title: 'Rappel : Médecin traitant',
		description: 'Vérifiez que votre médecin traitant est bien déclaré sur ameli.fr pour un meilleur remboursement',
		date: new Date(2026, 0, 30), // 30 janvier 2026
		type: 'health',
		recurring: 'yearly',
		icon: '⚕️',
		color: 'bg-green-500',
		url: 'https://www.ameli.fr'
	},

	// Événements logement
	{
		id: 'revision-loyer-2026',
		title: 'Révision annuelle du loyer',
		description: 'Période de révision des loyers selon l\'IRL (Indice de Référence des Loyers)',
		date: new Date(2026, 0, 1), // 1er janvier 2026
		type: 'housing',
		recurring: 'yearly',
		icon: '📊',
		color: 'bg-purple-500'
	}
];

/**
 * Récupère tous les événements pour une année donnée
 * Gère automatiquement les événements récurrents
 */
export function getEventsForYear(year: number): CalendarEvent[] {
	return calendarEvents.map(event => {
		const eventDate = new Date(event.date);
		
		// Si l'événement est récurrent annuellement, ajuste l'année
		if (event.recurring === 'yearly') {
			return {
				...event,
				date: new Date(year, eventDate.getMonth(), eventDate.getDate())
			};
		}
		
		return event;
	}).filter(event => event.date.getFullYear() === year);
}

/**
 * Récupère les événements à venir (futurs uniquement)
 */
export function getUpcomingEvents(limit?: number): CalendarEvent[] {
	const now = new Date();
	const currentYear = now.getFullYear();
	const nextYear = currentYear + 1;
	
	// Récupère les événements de cette année et l'année prochaine
	const thisYearEvents = getEventsForYear(currentYear);
	const nextYearEvents = getEventsForYear(nextYear);
	
	const allEvents = [...thisYearEvents, ...nextYearEvents]
		.filter(event => event.date >= now)
		.sort((a, b) => a.date.getTime() - b.date.getTime());
	
	return limit ? allEvents.slice(0, limit) : allEvents;
}

/**
 * Récupère les événements d'un mois spécifique
 */
export function getEventsForMonth(year: number, month: number): CalendarEvent[] {
	return getEventsForYear(year).filter(event => {
		const eventDate = new Date(event.date);
		return eventDate.getMonth() === month;
	});
}
