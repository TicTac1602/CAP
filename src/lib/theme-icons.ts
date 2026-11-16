import { BriefcaseBusiness, Calculator, CalendarDays, GraduationCap, House, ListChecks, Package, Plane, Rocket, Shield, Stethoscope, Wallet } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const themeIcons: Record<string, LucideIcon> = {
	administration: ListChecks,
	logement: House,
	sante: Stethoscope,
	'banque-budget': Wallet,
	assurances: Shield,
	emploi: BriefcaseBusiness,
	demenagement: Package,
	voyages: Plane,
	entreprendre: Rocket,
	education: GraduationCap,
	health: Stethoscope,
	housing: Calculator,
	other: CalendarDays,
};