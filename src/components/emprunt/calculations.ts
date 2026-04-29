import { EmpruntFormData, EmpruntSimulationResult } from '@/components/emprunt/types';

export const TAUX_ASSURANCE = 0.3;
export const TAUX_ENDETTEMENT_MAX = 0.33;

const getTauxFraisNotaire = (typeBien: EmpruntFormData['typeBien']) => {
	return typeBien === 'neuf' ? 0.025 : 0.075;
};

const getTauxAnnuel = (data: EmpruntFormData, budgetReference?: number) => {
	let tauxAnnuel = 3.5;

	if (data.typeBien === 'neuf') tauxAnnuel -= 0.1;
	if (data.usage === 'locatif') tauxAnnuel += 0.4;
	if (data.usage === 'principale' && data.primoAccedant) tauxAnnuel -= 0.1;
	if (data.dureeAnnees > 20) tauxAnnuel += 0.2;
	if (data.dureeAnnees < 15) tauxAnnuel -= 0.1;

	const budgetDeReference = budgetReference ?? data.budgetProjet;
	const pourcentageApport = budgetDeReference > 0
		? (data.apportPersonnel / budgetDeReference) * 100
		: 0;

	if (pourcentageApport >= 20) tauxAnnuel -= 0.15;
	else if (pourcentageApport < 10) tauxAnnuel += 0.3;

	return tauxAnnuel;
};

const getPtzData = (data: EmpruntFormData) => {
	const eligiblePTZ = data.primoAccedant && data.usage === 'principale' && data.typeBien === 'neuf';

	let quotitePTZ = 0;
	if (eligiblePTZ) {
		quotitePTZ = ['A bis', 'A', 'B1'].includes(data.zoneGeographique) ? 40 : 20;
	}

	return { eligiblePTZ, quotitePTZ };
};

const getMensualiteHorsAssurance = (capital: number, tauxAnnuel: number, nombreMois: number) => {
	if (capital <= 0 || nombreMois <= 0) return 0;

	const tauxMensuel = tauxAnnuel / 100 / 12;
	if (tauxMensuel === 0) return capital / nombreMois;

	return (capital * tauxMensuel) / (1 - Math.pow(1 + tauxMensuel, -nombreMois));
};

const getFacteurMensualiteBancaire = (tauxAnnuel: number, tauxAssurance: number, nombreMois: number) => {
	if (nombreMois <= 0) return 0;

	const tauxMensuel = tauxAnnuel / 100 / 12;
	const facteurCredit = tauxMensuel === 0
		? 1 / nombreMois
		: tauxMensuel / (1 - Math.pow(1 + tauxMensuel, -nombreMois));
	const facteurAssurance = (tauxAssurance / 100) / 12;

	return facteurCredit + facteurAssurance;
};

export const buildSimulationResult = (data: EmpruntFormData): EmpruntSimulationResult => {
	const tauxFraisNotaire = getTauxFraisNotaire(data.typeBien);
	const { eligiblePTZ, quotitePTZ } = getPtzData(data);
	const nombreMois = data.dureeAnnees * 12;
	const revenusTotaux = data.revenusMensuels + data.revenusCoEmprunteur;
	const mensualiteMaxSupportable = revenusTotaux > 0
		? Math.max(0, (revenusTotaux * TAUX_ENDETTEMENT_MAX) - data.chargesMensuellesExistantes)
		: 0;
	let tauxAnnuel = getTauxAnnuel(data);

	let budgetProjet = data.budgetProjet;
	let fraisNotaire = 0;
	let coutAcquisitionTotal = 0;
	let besoinFinancementTotal = 0;
	let montantMaxPTZ = 0;
	let capitalBancaire = 0;

	if (data.mode === 'capacity') {
		const ratioPTZ = eligiblePTZ ? quotitePTZ / 100 : 0;
		const getBudgetFromMensualiteContrainte = (mensualiteContrainte: number, taux: number) => {
			const facteurBancaire = getFacteurMensualiteBancaire(taux, TAUX_ASSURANCE, nombreMois);
			const denominateurBudget = ((1 + tauxFraisNotaire - ratioPTZ) * facteurBancaire) + (ratioPTZ / Math.max(nombreMois, 1));

			if (denominateurBudget <= 0) return 0;

			return Math.max(0, (mensualiteContrainte + (data.apportPersonnel * facteurBancaire)) / denominateurBudget);
		};

		budgetProjet = getBudgetFromMensualiteContrainte(mensualiteMaxSupportable, tauxAnnuel);
		tauxAnnuel = getTauxAnnuel(data, budgetProjet);
		budgetProjet = getBudgetFromMensualiteContrainte(mensualiteMaxSupportable, tauxAnnuel);
		fraisNotaire = budgetProjet * tauxFraisNotaire;
		coutAcquisitionTotal = budgetProjet + fraisNotaire;
		besoinFinancementTotal = Math.max(0, coutAcquisitionTotal - data.apportPersonnel);
		montantMaxPTZ = eligiblePTZ ? Math.min(budgetProjet * ratioPTZ, besoinFinancementTotal) : 0;
		capitalBancaire = Math.max(0, besoinFinancementTotal - montantMaxPTZ);
	} else {
		tauxAnnuel = getTauxAnnuel(data, budgetProjet);
		fraisNotaire = budgetProjet * tauxFraisNotaire;
		coutAcquisitionTotal = budgetProjet + fraisNotaire;
		besoinFinancementTotal = Math.max(0, coutAcquisitionTotal - data.apportPersonnel);
		montantMaxPTZ = eligiblePTZ ? Math.min((budgetProjet * quotitePTZ) / 100, besoinFinancementTotal) : 0;
		capitalBancaire = Math.max(0, besoinFinancementTotal - montantMaxPTZ);
	}

	const mensualiteHorsAssurance = getMensualiteHorsAssurance(capitalBancaire, tauxAnnuel, nombreMois);
	const assuranceMensuelle = capitalBancaire > 0 ? (capitalBancaire * TAUX_ASSURANCE / 100) / 12 : 0;
	const mensualiteTotale = mensualiteHorsAssurance + assuranceMensuelle;
	const mensualitePTZLissee = montantMaxPTZ > 0 && nombreMois > 0 ? montantMaxPTZ / nombreMois : 0;
	const mensualiteTotaleAvecPTZ = mensualiteTotale + mensualitePTZLissee;
	const coutAssuranceTotal = assuranceMensuelle * nombreMois;
	const coutInteretsTotal = (mensualiteHorsAssurance * nombreMois) - capitalBancaire;
	const coutTotalCredit = coutInteretsTotal + coutAssuranceTotal;
	const tauxEndettement = revenusTotaux > 0
		? ((data.chargesMensuellesExistantes + mensualiteTotaleAvecPTZ) / revenusTotaux) * 100
		: 0;
	const resteAVivre = revenusTotaux - data.chargesMensuellesExistantes - mensualiteTotaleAvecPTZ;
	const pourcentageApport = budgetProjet > 0 ? (data.apportPersonnel / budgetProjet) * 100 : 0;
	const projetRealiste = revenusTotaux > 0
		? mensualiteTotaleAvecPTZ <= mensualiteMaxSupportable + 0.01
		: null;

	return {
		mode: data.mode,
		budgetProjet,
		apportPersonnel: data.apportPersonnel,
		fraisNotaire,
		coutAcquisitionTotal,
		typeBien: data.typeBien,
		categorieBien: data.categorieBien,
		usage: data.usage,
		capitalBancaire,
		besoinFinancementTotal,
		tauxAnnuel,
		tauxAssurance: TAUX_ASSURANCE,
		nombreMois,
		dureeAnnees: data.dureeAnnees,
		mensualiteHorsAssurance,
		assuranceMensuelle,
		mensualiteTotale,
		mensualitePTZLissee,
		mensualiteTotaleAvecPTZ,
		coutInteretsTotal,
		coutAssuranceTotal,
		coutTotalCredit,
		tauxEndettement,
		resteAVivre,
		revenusMensuels: data.revenusMensuels,
		revenusCoEmprunteur: data.revenusCoEmprunteur,
		revenusTotaux,
		chargesMensuellesExistantes: data.chargesMensuellesExistantes,
		mensualiteMaxSupportable,
		eligiblePTZ,
		montantMaxPTZ,
		quotitePTZ,
		primoAccedant: data.primoAccedant,
		zoneGeographique: data.zoneGeographique,
		pourcentageApport,
		projetRealiste
	};
};