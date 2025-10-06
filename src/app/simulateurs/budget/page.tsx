'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BudgetData, BudgetCalculations } from '@/types';
import { BudgetForm } from '@/components/budget/BudgetForm';
import { BudgetResults } from '@/components/budget/BudgetResults';
import { BudgetAlerts } from '@/components/budget/BudgetAlerts';

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
			budgetData.transport + budgetData.remboursementDettes + budgetData.autresChargesFixes;
		const depensesFlexibles = budgetData.alimentation + budgetData.loisirs + budgetData.vetements +
			budgetData.sorties + budgetData.autresDepensesFlexibles;
		const epargneTotal = budgetData.epargneUrgence + budgetData.placements;
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
						Simulateur de Budget Personnel
					</h1>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Optimisez votre budget avec la règle 50-30-20
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