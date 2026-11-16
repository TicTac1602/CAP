'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calculator } from 'lucide-react';
import EmpruntForm from '@/components/emprunt/EmpruntForm';
import EmpruntResults from '@/components/emprunt/EmpruntResults';
import { EmpruntFormData, EmpruntSimulationResult } from '@/components/emprunt/types';
import { buildSimulationResult } from '@/components/emprunt/calculations';

export default function EmpruntPage() {
	const [results, setResults] = useState<EmpruntSimulationResult | null>(null);

	const handleCalculate = (data: EmpruntFormData) => {
		setResults(buildSimulationResult(data));
	};

	return (
		<div className="min-h-screen">
			<Header />

			<main className="container mx-auto px-4 py-8">
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-gray-900 mb-4">
						Simulateur de Prêt Immobilier
					</h1>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Estimez vos mensualités ou votre budget immobilier à partir de vos revenus et de votre apport, sans connaître les taux bancaires
					</p>
				</div>

				{/* Avertissement pédagogique */}
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
								Ce simulateur vous aide à <strong>comprendre</strong> le fonctionnement d&apos;un prêt immobilier. 
								Les résultats sont <strong>indicatifs</strong> et ne constituent pas une offre de prêt. 
								Seule une banque peut vous fournir une offre officielle après étude de votre dossier.
							</p>
						</div>
					</div>
				</div>

				{/* Contenu principal */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Formulaire */}
					<div>
						<EmpruntForm onCalculate={handleCalculate} />
					</div>

					{/* Résultats */}
					<div>
						{results ? (
							<EmpruntResults results={results} />
						) : (
							<div className="bg-white rounded-lg shadow-sm p-8 text-center">
								<Calculator size={48} className="mx-auto mb-4" aria-hidden="true" />
								<h3 className="text-lg font-semibold text-gray-900 mb-2">Prêt à calculer ?</h3>
								<p className="text-gray-600">Indiquez vos revenus, l&apos;argent disponible pour l&apos;achat et la durée souhaitée. Si vous avez déjà un logement en vue, ajoutez son prix.</p>
							</div>
						)}
					</div>
				</div>

				<section aria-labelledby="financement-guide" className="mt-12 border-t border-gray-200 pt-8">
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
						<div className="max-w-2xl">
							<h2 id="financement-guide" className="text-xl font-semibold text-gray-900 mb-2">En apprendre plus sur votre financement</h2>
							<p className="text-gray-600 leading-relaxed">PTZ, Action Logement, aides locales et offres pour primo-accédants : découvrez les solutions à étudier et les questions à poser avant de choisir un prêt.</p>
						</div>
						<Link href="/guide/financer-premier-achat-immobilier" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-700 text-white rounded-md font-medium hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 sm:shrink-0">
							Lire le guide<ArrowRight size={18} aria-hidden="true" />
						</Link>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}
