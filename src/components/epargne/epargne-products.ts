export type FrequenceVersement = 'mensuel' | 'trimestriel' | 'annuel';
export type PeaProfilRisque = 'prudent' | 'equilibre' | 'dynamique';

export type ProduitEpargneId =
	| 'livret-jeune'
	| 'livret-a'
	| 'ldds'
	| 'pel'
	| 'pea'
	| 'assurance-vie-euro'
	| 'compte-titres';

export interface ProduitEpargne {
	id: ProduitEpargneId;
	nom: string;
	tauxIndicatif: number;
	risque: 'faible' | 'modere' | 'eleve';
	fiscalite: string;
	fiscaliteDetaillee: string;
	plafond?: number;
	plafondTexte?: string;
	dureeMaxAnnees?: number;
	description: string;
}

export const PEA_PROFILS: Record<PeaProfilRisque, {
	label: string;
	tauxIndicatif: number;
	risque: 'modere' | 'eleve';
	description: string;
}> = {
	prudent: {
		label: 'PEA prudent (ETF larges, exposition actions limitée)',
		tauxIndicatif: 4,
		risque: 'modere',
		description: 'Allocation plus défensive avec une part actions plus mesurée.'
	},
	equilibre: {
		label: 'PEA équilibré (ETF actions diversifiés)',
		tauxIndicatif: 6,
		risque: 'eleve',
		description: 'Allocation actions diversifiée, adaptée à un horizon long.'
	},
	dynamique: {
		label: 'PEA dynamique (actions/secteurs plus volatils)',
		tauxIndicatif: 8,
		risque: 'eleve',
		description: 'Recherche de performance plus élevée avec volatilité plus forte.'
	}
};

export const PRODUITS_EPARGNE: ProduitEpargne[] = [
	{
		id: 'livret-jeune',
		nom: 'Livret Jeune',
		tauxIndicatif: 1.75,
		risque: 'faible',
		fiscalite: 'Intérêts exonérés d\'impôt sur le revenu et de prélèvements sociaux.',
		fiscaliteDetaillee: 'Intérêts totalement exonérés: 0% d\'impôt sur le revenu et 0% de prélèvements sociaux. Destiné aux jeunes de 12 à 25 ans, avec un plafond de versements plus bas que le Livret A.',
		plafond: 1600,
		plafondTexte: '1 600 EUR de versements (hors intérêts capitalisés).',
		dureeMaxAnnees: 13,
		description: 'Placement sécurisé pour les jeunes, avec un taux souvent plus attractif que le Livret A.'
	},
	{
		id: 'livret-a',
		nom: 'Livret A',
		tauxIndicatif: 1.5,
		risque: 'faible',
		fiscalite: 'Intérêts exonérés d\'impôt sur le revenu et de prélèvements sociaux.',
		fiscaliteDetaillee: 'Intérêts totalement exonérés: 0% d\'impôt sur le revenu et 0% de prélèvements sociaux. Une partie des fonds contribue au financement du logement social et de la politique de la ville.',
		plafond: 22950,
		plafondTexte: '22 950 EUR de versements (hors intérêts capitalisés).',
		description: 'Placement sécurisé et liquide pour l\'épargne de précaution, avec une finalité d\'intérêt général via le financement du logement social.'
	},
	{
		id: 'ldds',
		nom: 'LDDS',
		tauxIndicatif: 1.5,
		risque: 'faible',
		fiscalite: 'Intérêts exonérés d\'impôt sur le revenu et de prélèvements sociaux.',
		fiscaliteDetaillee: 'Même régime que le Livret A: intérêts exonérés d\'impôt et de prélèvements sociaux. Ce livret vise aussi le financement de la transition énergétique et de l\'économie sociale et solidaire.',
		plafond: 12000,
		plafondTexte: '12 000 EUR de versements (hors intérêts capitalisés).',
		description: 'Alternative au Livret A avec la même sécurité, orientée vers des usages de financement durable (transition énergétique et ESS).'
	},
	{
		id: 'pel',
		nom: 'PEL',
		tauxIndicatif: 2.25,
		risque: 'faible',
		fiscalite: 'Intérêts soumis au PFU (31,4%) pour les PEL récents; règles selon la date d\'ouverture.',
		fiscaliteDetaillee: 'Depuis le 1er janvier 2026, le PFU est de 31,4% (12,8% d\'impôt sur le revenu + 18,6% de prélèvements sociaux). Pour les PEL ouverts depuis 2018, ce régime s\'applique dès la première année. Les PEL plus anciens restent soumis à des règles transitoires.',
		plafond: 61200,
		plafondTexte: '61 200 EUR de versements (hors capitalisation des intérêts).',
		dureeMaxAnnees: 15,
		description: 'Placement encadré, horizon moyen-long terme, durée réglementée.'
	},
	{
		id: 'pea',
		nom: 'PEA',
		tauxIndicatif: 6,
		risque: 'modere',
		fiscalite: 'Après 5 ans, exonération d\'impôt sur les gains (hors prélèvements sociaux).',
		fiscaliteDetaillee: 'Avant 5 ans, un retrait entraîne en principe la clôture et les gains sont taxés au PFU de 31,4% (12,8% d\'impôt sur le revenu + 18,6% de prélèvements sociaux) sauf exceptions. Après 5 ans, les gains restent exonérés d\'impôt sur le revenu, mais les prélèvements sociaux (18,6%) demeurent dus sur les gains réalisés.',
		plafond: 150000,
		plafondTexte: '150 000 EUR de versements pour un PEA classique (cumul PEA + PEA-PME plafonné à 225 000 EUR selon les cas).',
		description: 'L\'exposition et le risque dépendent des actions ou ETF choisis; la simulation propose plusieurs profils de risque.'
	},
	{
		id: 'assurance-vie-euro',
		nom: 'Assurance vie (fonds euros)',
		tauxIndicatif: 2.8,
		risque: 'faible',
		fiscalite: 'Fiscalité plus favorable après 8 ans selon les retraits effectués.',
		fiscaliteDetaillee: 'Pas d\'impôt tant qu\'il n\'y a pas de rachat. Après 8 ans: abattement annuel de 4 600 EUR (9 200 EUR pour un couple), puis taxation selon la part de gains et la date/montant des versements.',
		plafondTexte: 'Pas de plafond légal de versements. Les seuils fiscaux ne constituent pas un plafond de versements.',
		description: 'Placement prudent, souple pour préparer des projets de moyen/long terme.'
	},
	{
		id: 'compte-titres',
		nom: 'Compte-titres (ETF diversifié)',
		tauxIndicatif: 6.5,
		risque: 'eleve',
		fiscalite: 'Gains généralement soumis au PFU de 31,4% (ou barème sur option).',
		fiscaliteDetaillee: 'Depuis le 1er janvier 2026, dividendes et plus-values sont imposés au PFU de 31,4% (12,8% d\'impôt sur le revenu + 18,6% de prélèvements sociaux), avec option possible pour le barème progressif.',
		plafondTexte: 'Pas de plafond de versements.',
		description: 'Potentiel de rendement élevé avec fluctuations marquées.'
	}
];

export const FREQUENCES: Record<FrequenceVersement, { label: string; mois: number }> = {
	mensuel: { label: 'Mensuel', mois: 1 },
	trimestriel: { label: 'Trimestriel', mois: 3 },
	annuel: { label: 'Annuel', mois: 12 }
};
