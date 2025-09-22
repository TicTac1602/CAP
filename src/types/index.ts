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
	priority: 'low' | 'medium' | 'high';
	slug: string;
	featured?: boolean;
	readingTime?: number;
	author?: string;
	publishedAt?: string;
	updatedAt?: string;
}