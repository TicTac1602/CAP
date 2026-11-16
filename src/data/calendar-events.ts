import { CalendarEvent } from "@/types";

export const calendarEvents: CalendarEvent[] = [
	// Événements administratifs
	{
		id: 'demande-bourses',
		title: 'Demande de bourse étudiante',
		description: 'Ouverture du DSE (Dossier Social Étudiant) pour l\'année suivante sur messervices.etudiant.gouv.fr',
		date: new Date(2027, 0, 15), // 15 janvier 2027
		type: 'education',
		recurring: 'yearly',
		icon: '🎓',
		color: 'bg-blue-500',
		url: 'https://www.etudiant.gouv.fr/fr/bourse-et-logement-constituez-votre-dossier-social-etudiant-dse-409'
	},
	{
		id: 'fermeture-dse',
		title: 'Date limite demande de bourse',
		description: 'Date limite pour compléter votre DSE pour la rentrée suivante',
		date: new Date(2027, 4, 15), // 15 mai 2027
		type: 'education',
		recurring: 'yearly',
		icon: '🎓',
		color: 'bg-red-500',
		url: 'https://www.etudiant.gouv.fr/fr/bourse-et-logement-constituez-votre-dossier-social-etudiant-dse-409'
	},

	// Événements santé
	{
		id: 'declaration-medecin-traitant',
		title: 'Rappel : Médecin traitant',
		description: 'Vérifiez que votre médecin traitant est bien déclaré sur ameli.fr pour un meilleur remboursement',
		date: new Date(2027, 0, 30), // 30 janvier 2027
		type: 'health',
		recurring: 'yearly',
		icon: '⚕️',
		color: 'bg-green-500',
		url: 'https://www.ameli.fr'
	},

	// Événements logement
	{
		id: 'revision-loyer',
		title: 'Révision annuelle du loyer',
		description: 'Période de révision des loyers selon l\'IRL (Indice de Référence des Loyers)',
		date: new Date(2027, 0, 1), // 1er janvier 2027
		type: 'housing',
		recurring: 'yearly',
		icon: '📊',
		color: 'bg-purple-500',
		url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F1311'
	}
];

/**
 * Récupère tous les événements pour une année donnée
 * Gère automatiquement les événements récurrents
 */
export function getEventsForYear(year: number): CalendarEvent[] {
	return calendarEvents.map(event => {
		if (!event.date) return event;
		const eventDate = new Date(event.date);
		
		// Si l'événement est récurrent annuellement, ajuste l'année
		if (event.recurring === 'yearly') {
			const baseId = event.id.replace(/-\d{4}$/, '');
			return {
				...event,
				id: `${baseId}-${year}`,
				date: new Date(year, eventDate.getMonth(), eventDate.getDate())
			};
		}
		
		return event;
	}).filter(event => !event.date || event.date.getFullYear() === year);
}

/**
 * Récupère les événements à venir (futurs uniquement)
 */
export function getUpcomingEvents(limit?: number): CalendarEvent[] {
	const now = new Date();
	now.setHours(0, 0, 0, 0);
	const currentYear = now.getFullYear();
	const nextYear = currentYear + 1;
	
	// Récupère les événements de cette année et l'année prochaine
	const thisYearEvents = getEventsForYear(currentYear);
	const nextYearEvents = getEventsForYear(nextYear);
	
	const allEvents = [...thisYearEvents, ...nextYearEvents.filter(event => event.date)]
		.filter(event => !event.date || event.date >= now)
		.sort((a, b) => (a.date?.getTime() ?? Infinity) - (b.date?.getTime() ?? Infinity));
	
	return limit ? allEvents.slice(0, limit) : allEvents;
}

/**
 * Récupère les événements d'un mois spécifique
 */
export function getEventsForMonth(year: number, month: number): CalendarEvent[] {
	return getEventsForYear(year).filter(event => {
		if (!event.date) return false;
		const eventDate = new Date(event.date);
		return eventDate.getMonth() === month;
	});
}
