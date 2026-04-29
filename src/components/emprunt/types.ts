export type EmpruntSimulationMode = 'project' | 'capacity';

export interface EmpruntFormData {
	mode: EmpruntSimulationMode;
	budgetProjet: number;
	apportPersonnel: number;
	typeBien: 'ancien' | 'neuf';
	categorieBien: 'appartement' | 'maison';
	usage: 'principale' | 'locatif';
	dureeAnnees: number;
	revenusMensuels: number;
	revenusCoEmprunteur: number;
	chargesMensuellesExistantes: number;
	primoAccedant: boolean;
	zoneGeographique: 'A bis' | 'A' | 'B1' | 'B2' | 'C';
}

export interface EmpruntSimulationResult {
	mode: EmpruntSimulationMode;
	budgetProjet: number;
	apportPersonnel: number;
	fraisNotaire: number;
	coutAcquisitionTotal: number;
	typeBien: EmpruntFormData['typeBien'];
	categorieBien: EmpruntFormData['categorieBien'];
	usage: EmpruntFormData['usage'];
	capitalBancaire: number;
	besoinFinancementTotal: number;
	tauxAnnuel: number;
	tauxAssurance: number;
	nombreMois: number;
	dureeAnnees: number;
	mensualiteHorsAssurance: number;
	assuranceMensuelle: number;
	mensualiteTotale: number;
	mensualitePTZLissee: number;
	mensualiteTotaleAvecPTZ: number;
	coutInteretsTotal: number;
	coutAssuranceTotal: number;
	coutTotalCredit: number;
	tauxEndettement: number;
	resteAVivre: number;
	revenusMensuels: number;
	revenusCoEmprunteur: number;
	revenusTotaux: number;
	chargesMensuellesExistantes: number;
	mensualiteMaxSupportable: number;
	eligiblePTZ: boolean;
	montantMaxPTZ: number;
	quotitePTZ: number;
	primoAccedant: boolean;
	zoneGeographique: EmpruntFormData['zoneGeographique'];
	pourcentageApport: number;
	projetRealiste: boolean | null;
}