export interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  deadline?: Date;
  resources?: string[];
}

export interface ThemeSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  checklist: ChecklistItem[];
  guides: Guide[];
  vigilancePoints: VigilancePoint[];
  usefulLinks: UsefulLink[];
}

export interface Guide {
  id: string;
  title: string;
  content: string;
  steps: string[];
  images?: string[];
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