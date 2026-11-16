'use client';

import { useMemo, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EpargneForm, { EpargneFormData } from '@/components/epargne/EpargneForm';
import EpargneResults, { EpargnePoint } from '@/components/epargne/EpargneResults';
import { EpargnePlacementComparison } from '@/components/epargne/EpargneResults';
import { FREQUENCES, PEA_PROFILS, PRODUITS_EPARGNE } from '@/components/epargne/epargne-products';

const DEFAULT_FORM_DATA: EpargneFormData = {
	capitalDepart: 2000,
	ajoutPeriodique: 150,
	frequenceVersement: 'mensuel',
	horizonAnnees: 20,
	modeRendement: 'produit',
	tauxAnnuel: 2.4,
	produitSelectionne: 'livret-a',
	peaProfil: 'equilibre'
};

function computeEpargneProjection(formData: EpargneFormData): {
	points: EpargnePoint[];
	tauxAnnuelUtilise: number;
	horizonEffectif: number;
} {
	const selectedProduit = PRODUITS_EPARGNE.find((produit) => produit.id === formData.produitSelectionne);
	const plafondVersements = formData.modeRendement === 'produit' && selectedProduit?.plafond !== undefined 
		? selectedProduit.plafond
		: Number.POSITIVE_INFINITY;
	const tauxPeaProfil = PEA_PROFILS[formData.peaProfil].tauxIndicatif;
	const tauxAnnuelUtilise = formData.modeRendement === 'produit'
		? selectedProduit?.id === 'pea'
			? tauxPeaProfil
			: selectedProduit?.tauxIndicatif ?? 0
		: formData.tauxAnnuel;

	const horizonSaisi = Math.min(Math.max(Math.round(formData.horizonAnnees), 1), 40);
	const horizonEffectif = formData.modeRendement === 'produit' && selectedProduit?.dureeMaxAnnees
		? Math.min(horizonSaisi, selectedProduit.dureeMaxAnnees)
		: horizonSaisi;

	const frequence = FREQUENCES[formData.frequenceVersement];
	const moisEntreVersements = frequence.mois;
	const totalMois = horizonEffectif * 12;

	const points: EpargnePoint[] = [];
	const monthlyRate = Math.pow(1 + Math.max(tauxAnnuelUtilise, 0) / 100, 1 / 12) - 1;

	let versementsCumules = Math.min(Math.max(formData.capitalDepart, 0), plafondVersements);
	let capital = versementsCumules;

	points.push({
		annee: 0,
		capital,
		versementsCumules,
		interetsCumules: 0
	});

	for (let month = 1; month <= totalMois; month++) {
		capital = capital * (1 + monthlyRate);

		if (formData.ajoutPeriodique > 0 && month % moisEntreVersements === 0) {
			const capaciteRestante = Math.max(0, plafondVersements - versementsCumules);
			const versementEffectif = Math.min(formData.ajoutPeriodique, capaciteRestante);

			if (versementEffectif > 0) {
				capital += versementEffectif;
				versementsCumules += versementEffectif;
			}
		}

		if (month % 12 === 0) {
			points.push({
				annee: month / 12,
				capital,
				versementsCumules,
				interetsCumules: capital - versementsCumules
			});
		}
	}

	return {
		points,
		tauxAnnuelUtilise,
		horizonEffectif
	};
}

export default function EpargnePage() {
	const [formData, setFormData] = useState<EpargneFormData>(DEFAULT_FORM_DATA);

	const selectedProduit = useMemo(
		() => PRODUITS_EPARGNE.find((produit) => produit.id === formData.produitSelectionne),
		[formData.produitSelectionne]
	);

	const { points, tauxAnnuelUtilise, horizonEffectif } = useMemo(
		() => computeEpargneProjection(formData),
		[formData]
	);

	const produitAvecLimite = formData.modeRendement === 'produit' && !!selectedProduit?.dureeMaxAnnees;
	const horizonLimite = produitAvecLimite && formData.horizonAnnees > (selectedProduit?.dureeMaxAnnees ?? 40);

	return (
		<div className="min-h-screen">
			<Header />

			<main className="container mx-auto px-4 py-8">
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-gray-900 mb-4">
						Simulateur d&apos;épargne
					</h1>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Projetez votre capital sur le long terme avec intérêts composés et versements périodiques
					</p>
				</div>

				<div className="mb-8 bg-blue-100 border-l-4 border-blue-500 p-4 rounded-r-lg">
					<div className="flex items-start">
						<svg className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
							<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
						</svg>
						<div>
							<h3 className="text-sm font-semibold text-blue-900 mb-1">
								Outil à vocation pédagogique
							</h3>
							<p className="text-sm text-blue-800">
								Cette simulation illustre la dynamique de l&aposépargne. Les rendements varient dans la réalité,
								en fonction des marchés, des frais, de la fiscalité réelle et de l&aposinflation.
							</p>
						</div>
					</div>
				</div>

				{horizonLimite && selectedProduit?.dureeMaxAnnees && (
					<div className="mb-8 bg-orange-100 border-l-4 border-orange-500 p-4 rounded-r-lg text-sm text-orange-900">
						Horizon ajusté à <strong>{selectedProduit.dureeMaxAnnees} ans</strong> pour {selectedProduit.nom},
						car ce produit a un cadre réglementaire spécifique.
					</div>
				)}

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<div>
						<EpargneForm formData={formData} onChange={setFormData} />
					</div>

					<div>
						<EpargneResults
							points={points}
							tauxAnnuelUtilise={tauxAnnuelUtilise}
							produitSelectionne={formData.modeRendement === 'produit' ? selectedProduit : undefined}
							peaProfil={formData.peaProfil}
							horizonEffectif={horizonEffectif}
						/>
					</div>
				</div>

				<div className="mt-8">
					<EpargnePlacementComparison />
				</div>
			</main>

			<Footer />
		</div>
	);
}
