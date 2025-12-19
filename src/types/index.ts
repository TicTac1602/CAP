export interface Resource {
	title: string;
	url: string;
}

export interface ChecklistItem {
	id: string;
	title: string;
	description: string;
	completed: boolean;
	priority: 'low' | 'medium' | 'high';
	deadline?: Date;
	resources?: Resource[];
}

export interface ChecklistSection {
	id: string;
	title: string;
	description: string;
	items: ChecklistItem[];
	optional?: boolean;
}

export interface ChecklistState {
	[itemId: string]: boolean; // Stockage simplifié : id -> completed
}

export interface ThemeSection {
	id: string;
	title: string;
	description: string;
	icon: string;
	color: string;
	checklistSections: ChecklistSection[];
	vigilancePoints: VigilancePoint[];
	usefulLinks: UsefulLink[];
}

export interface VigilancePoint {
	id: string;
	title: string;
	description: string;
	type: 'deadline' | 'trap' | 'important';
}

export interface UsefulLink {
	id: string;
	title: string;
	url: string;
	description: string;
}

export interface Reminder {
	id: string;
	title: string;
	description: string;
	date: Date;
	type: 'tax' | 'insurance' | 'housing' | 'health' | 'other';
	recurring?: boolean;
}

export interface CalendarEvent {
	id: string;
	title: string;
	description: string;
	date: Date;
	type: 'administrative' | 'fiscal' | 'health' | 'housing' | 'education' | 'other';
	recurring?: 'yearly' | 'monthly' | 'none';
	icon?: string;
	color?: string;
	url?: string;
}

export interface Calculator {
	type: 'tax' | 'budget' | 'rent';
	inputs: Record<string, number>;
	result?: number;
}

export interface FAQItem {
	id: string;
	question: string;
	answer: string;
	category: string;
}

export interface GuideArticle {
	id: string;
	title: string;
	description: string;
	filePath: string;
	themeId: string;
	tags: string[];
	slug: string;
	featured?: boolean;
	readingTime?: number;
	author?: string;
	publishedAt?: string;
	updatedAt?: string;
}

export interface BudgetData {
	// Revenus
	salaire: number;
	autresRevenus: number;

	// Dépenses fixes (ne devraient pas dépasser 50% des revenus)
	loyer: number;
	assurances: number;
	abonnements: number;
	transport: number;
	remboursementDettes: number;
	autresChargesFixes: number;

	// Dépenses flexibles (30% recommandé)
	alimentation: number;
	loisirs: number;
	vetements: number;
	sorties: number;
	autresDepensesFlexibles: number;

	// Épargne et placements (20% recommandé)
	epargneUrgence: number;
	placements: number;
}

export interface BudgetCalculations {
	revenuTotal: number;
	chargesFixes: number;
	depensesFlexibles: number;
	epargneTotal: number;
	depensesTotales: number;
	solde: number;

	// Pourcentages
	pourcentageChargesFixes: number;
	pourcentageFlexible: number;
	pourcentageEpargne: number;

	// Recommandations 50-30-20
	recommandeChargesFixes: number;
	recommandeFlexible: number;
	recommandeEpargne: number;

	// Écarts par rapport aux recommandations
	ecartChargesFixes: number;
	ecartFlexible: number;
	ecartEpargne: number;
}