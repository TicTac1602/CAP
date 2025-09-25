'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BudgetForm } from '@/components/budget/BudgetForm';
import { BudgetResults } from '@/components/budget/BudgetResults';
import { BudgetAlerts } from '@/components/budget/BudgetAlerts';

export interface BudgetData {
	// Revenus
	salaire: number;
	autresRevenus: number;

	// Dépenses fixes (ne devraient pas dépasser 50% des revenus)
	loyer: number;
	assurances: number;
	abonnements: number;
	transport: number;
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
	remboursementDettes: number;
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

export default function BudgetSimulatorPage() {
	const [budgetData, setBudgetData] = useState<BudgetData>({
		salaire: 0,
		autresRevenus: 0,
		loyer: 0,
		assurances: 0,
		abonnements: 0,
		transport: 0,
		autresChargesFixes: 0,
		alimentation: 0,
		loisirs: 0,
		vetements: 0,
		sorties: 0,
		autresDepensesFlexibles: 0,
		epargneUrgence: 0,
		placements: 0,
		remboursementDettes: 0
	});

	const calculations: BudgetCalculations = useMemo(() => {
		const revenuTotal = budgetData.salaire + budgetData.autresRevenus;
		const chargesFixes = budgetData.loyer + budgetData.assurances + budgetData.abonnements +
			budgetData.transport + budgetData.autresChargesFixes;
		const depensesFlexibles = budgetData.alimentation + budgetData.loisirs + budgetData.vetements +
			budgetData.sorties + budgetData.autresDepensesFlexibles;
		const epargneTotal = budgetData.epargneUrgence + budgetData.placements + budgetData.remboursementDettes;
		const depensesTotales = chargesFixes + depensesFlexibles + epargneTotal;
		const solde = revenuTotal - depensesTotales;

		const pourcentageChargesFixes = revenuTotal > 0 ? (chargesFixes / revenuTotal) * 100 : 0;
		const pourcentageFlexible = revenuTotal > 0 ? (depensesFlexibles / revenuTotal) * 100 : 0;
		const pourcentageEpargne = revenuTotal > 0 ? (epargneTotal / revenuTotal) * 100 : 0;

		const recommandeChargesFixes = revenuTotal * 0.5;
		const recommandeFlexible = revenuTotal * 0.3;
		const recommandeEpargne = revenuTotal * 0.2;

		const ecartChargesFixes = chargesFixes - recommandeChargesFixes;
		const ecartFlexible = depensesFlexibles - recommandeFlexible;
		const ecartEpargne = epargneTotal - recommandeEpargne;

		return {
			revenuTotal,
			chargesFixes,
			depensesFlexibles,
			epargneTotal,
			depensesTotales,
			solde,
			pourcentageChargesFixes,
			pourcentageFlexible,
			pourcentageEpargne,
			recommandeChargesFixes,
			recommandeFlexible,
			recommandeEpargne,
			ecartChargesFixes,
			ecartFlexible,
			ecartEpargne
		};
	}, [budgetData]);

	return (
		<div className="min-h-screen bg-gray-50">
			<Header />

			<main className="container mx-auto px-4 py-8">
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-gray-900 mb-4">
						💰 Simulateur de Budget Personnel
					</h1>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Optimisez votre budget avec la règle 50-30-20 : 50% pour les besoins essentiels,
						30% pour les loisirs et 20% pour l&apos;épargne
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<div>
						<BudgetForm
							budgetData={budgetData}
							setBudgetData={setBudgetData}
						/>
					</div>

					<div className="space-y-6">
						<BudgetAlerts calculations={calculations} />
						<BudgetResults calculations={calculations} />
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}