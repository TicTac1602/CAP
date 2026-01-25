'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmpruntForm from '@/components/emprunt/EmpruntForm';
import EmpruntResults from '@/components/emprunt/EmpruntResults';

interface EmpruntFormData {
	budgetProjet: number;
	apportPersonnel: number;
	typeBien: 'ancien' | 'neuf';
	categorieBien: 'appartement' | 'maison';
	usage: 'principale' | 'locatif';
	dureeAnnees: number;
	revenusMensuels: number;
	primoAccedant: boolean;
	zoneGeographique: 'A' | 'A bis' | 'B1' | 'B2' | 'C';
}

interface EmpruntResults {
	// Informations du projet
	budgetProjet: number;
	apportPersonnel: number;
	fraisNotaire: number;
	typeBien: string;
	categorieBien: string;
	usage: string;
	
	// Calculs du prêt
	capital: number;
	tauxAnnuel: number;
	tauxAssurance: number;
	nombreMois: number;
	dureeAnnees: number;
	
	// Mensualités et coûts
	mensualiteHorsAssurance: number;
	assuranceMensuelle: number;
	mensualiteTotale: number;
	coutInteretsTotal: number;
	coutAssuranceTotal: number;
	coutTotalCredit: number;
	
	// Capacité d'emprunt
	tauxEndettement: number;
	resteAVivre: number;
	revenusMensuels: number;
	
	// PTZ
	eligiblePTZ: boolean;
	montantMaxPTZ: number;
	quotitePTZ: number;
	capitalHorsPTZ: number;
	primoAccedant: boolean;
	zoneGeographique: string;
	pourcentageApport: number;
}

export default function EmpruntPage() {
	const [results, setResults] = useState<EmpruntResults | null>(null);

	const handleCalculate = (data: EmpruntFormData) => {
		const tauxFraisNotaire = data.typeBien === 'neuf' ? 0.025 : 0.075; // 2.5% neuf, 7.5% ancien
		const fraisNotaire = data.budgetProjet * tauxFraisNotaire;

		const capital = data.budgetProjet + fraisNotaire - data.apportPersonnel;

		let tauxAnnuel = 3.5; // Taux de base en 2026
		
		// Ajustements selon le type de bien et usage
		if (data.typeBien === 'neuf') tauxAnnuel -= 0.1; // Légèrement meilleur pour le neuf
		if (data.usage === 'locatif') tauxAnnuel += 0.4; // Plus élevé pour l'investissement locatif
		if (data.usage === 'principale' && data.primoAccedant) tauxAnnuel -= 0.1; // Bonus primo-accédant
		
		// Ajustement selon la durée
		if (data.dureeAnnees > 20) tauxAnnuel += 0.2;
		if (data.dureeAnnees < 15) tauxAnnuel -= 0.1;

		// Ajustement selon l'apport
		const pourcentageApport = (data.apportPersonnel / data.budgetProjet) * 100;
		if (pourcentageApport >= 20) tauxAnnuel -= 0.15;
		else if (pourcentageApport < 10) tauxAnnuel += 0.3;

		const tauxAssurance = 0.30; // Taux moyen

		const nombreMois = data.dureeAnnees * 12;
		const tauxMensuel = tauxAnnuel / 100 / 12;

		const mensualiteHorsAssurance = tauxMensuel === 0 
			? capital / nombreMois 
			: (capital * tauxMensuel) / (1 - Math.pow(1 + tauxMensuel, -nombreMois));

		const assuranceMensuelle = (capital * tauxAssurance / 100) / 12;
		const mensualiteTotale = mensualiteHorsAssurance + assuranceMensuelle;

		const coutTotalCredit = (mensualiteTotale * nombreMois) - capital;
		const coutAssuranceTotal = assuranceMensuelle * nombreMois;
		const coutInteretsTotal = coutTotalCredit - coutAssuranceTotal;

		const tauxEndettement = data.revenusMensuels > 0 
			? (mensualiteTotale / data.revenusMensuels) * 100 
			: 0;

		const resteAVivre = data.revenusMensuels > 0 
			? data.revenusMensuels - mensualiteTotale 
			: 0;

		// 8. Vérification éligibilité PTZ et calcul du montant
		const eligiblePTZ = data.primoAccedant && 
							data.usage === 'principale' && 
							data.typeBien === 'neuf';

		// Calcul du montant PTZ potentiel selon la zone
		let montantMaxPTZ = 0;
		let quotitePTZ = 0; // Pourcentage du projet finançable
		
		if (eligiblePTZ) {
			// Quotité selon la zone (données 2026)
			if (data.zoneGeographique === 'A bis' || data.zoneGeographique === 'A' || data.zoneGeographique === 'B1') {
				quotitePTZ = 40; // 40% en zone B1
			} else {
				quotitePTZ = 20; // 20% en zone C
			}
			
			montantMaxPTZ = (data.budgetProjet * quotitePTZ) / 100;
		}

		// Capital à emprunter hors PTZ
		const capitalHorsPTZ = Math.max(0, capital - montantMaxPTZ);

		setResults({
			// Informations du projet
			budgetProjet: data.budgetProjet,
			apportPersonnel: data.apportPersonnel,
			fraisNotaire,
			typeBien: data.typeBien,
			categorieBien: data.categorieBien,
			usage: data.usage,
			
			// Calculs du prêt
			capital,
			tauxAnnuel,
			tauxAssurance,
			nombreMois,
			dureeAnnees: data.dureeAnnees,
			
			// Mensualités et coûts
			mensualiteHorsAssurance,
			assuranceMensuelle,
			mensualiteTotale,
			coutInteretsTotal,
			coutAssuranceTotal,
			coutTotalCredit,
			
			// Capacité d'emprunt
			tauxEndettement,
			resteAVivre,
			revenusMensuels: data.revenusMensuels,
			
			// PTZ
			eligiblePTZ,
			montantMaxPTZ,
			quotitePTZ,
			capitalHorsPTZ,
			primoAccedant: data.primoAccedant,
			zoneGeographique: data.zoneGeographique,
			pourcentageApport
		});
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
						Calculez vos mensualités et estimez le coût total de votre crédit
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
								<div className="text-6xl mb-4">📊</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-2">
									Prêt à calculer ?
								</h3>
								<p className="text-gray-600">
									Remplissez le formulaire pour voir vos résultats détaillés
								</p>
							</div>
						)}
					</div>
				</div>

				{/* Section explicative et conseils */}
				<div className="mt-12 bg-white rounded-lg shadow-sm p-8">
					<h2 className="text-2xl font-bold text-gray-900 mb-6">
						Comprendre et optimiser votre prêt immobilier
					</h2>
					
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{/* Comment ça fonctionne */}
						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-3">
								Le calcul des mensualités
							</h3>
							<p className="text-gray-600 mb-3 text-sm">
								La mensualité comprend deux parties :
							</p>
							<ul className="space-y-2 text-sm text-gray-600">
								<li className="flex items-start gap-2">
									<span className="font-semibold text-blue-700 mt-0.5">1.</span>
									<span><strong>Le capital + intérêts</strong> : remboursement du prêt à la banque</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="font-semibold text-blue-700 mt-0.5">2.</span>
									<span><strong>L&apos;assurance emprunteur</strong> : protection en cas de décès ou invalidité</span>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-3">
								Le coût total du crédit
							</h3>
							<p className="text-gray-600 mb-3 text-sm">
								Au-delà du capital emprunté, vous payez :
							</p>
							<ul className="space-y-2 text-sm text-gray-600">
								<li className="flex items-start gap-2">
									<span className="text-red-600 mt-0.5">→</span>
									<span>Les <strong>intérêts</strong> : rémunération de la banque</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-red-600 mt-0.5">→</span>
									<span>L&apos;<strong>assurance</strong> : coût de la protection</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-red-600 mt-0.5">→</span>
									<span>Les <strong>frais de dossier</strong> : non inclus dans ce simulateur</span>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-3">
								Le taux d&apos;endettement
							</h3>
							<p className="text-gray-600 text-sm">
								C&apos;est le ratio entre vos mensualités de crédit et vos revenus. 
								Depuis 2022, les banques ne peuvent pas dépasser <strong>35% d&apos;endettement</strong> 
								(sauf exceptions). C&apos;est une protection pour éviter le surendettement.
							</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-3">
								Le PTZ (Prêt à Taux Zéro)
							</h3>
							<p className="text-gray-600 text-sm">
								Si vous êtes primo-accédant et achetez du neuf pour votre résidence principale, 
								vous pouvez bénéficier d&apos;un <strong>prêt sans intérêts</strong> finançant jusqu&apos;à 40% de votre projet. 
								Un vrai coup de pouce pour démarrer !
							</p>
						</div>

						{/* Conseils d'optimisation */}
						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-3">
								Comparez plusieurs banques
							</h3>
							<p className="text-gray-600 text-sm">
								Les taux peuvent varier de <strong>0,5% à 1%</strong> entre établissements. 
								Sur 20 ans, cela représente des <strong>milliers d&apos;euros</strong> d&apos;économies ! 
								Utilisez un courtier ou négociez directement.
							</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-3">
								Négociez l&apos;assurance emprunteur
							</h3>
							<p className="text-gray-600 text-sm">
								Vous pouvez choisir une <strong>assurance externe</strong> (délégation d&apos;assurance) 
								souvent 30 à 50% moins chère que celle de la banque. C&apos;est votre droit !
							</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-3">
								Maximisez votre apport
							</h3>
							<p className="text-gray-600 text-sm">
								Plus votre apport est élevé, meilleur sera votre taux. 
								Visez au moins <strong>20% du prix</strong> pour obtenir les meilleures conditions. 
								Moins d&apos;emprunter = moins d&apos;intérêts !
							</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-3">
								Choisissez la bonne durée
							</h3>
							<p className="text-gray-600 text-sm">
								Une durée plus courte coûte <strong>beaucoup moins cher</strong> au total, 
								mais avec des mensualités plus élevées. Trouvez le bon équilibre pour votre budget.
							</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-3">
								Remboursement anticipé
							</h3>
							<p className="text-gray-600 text-sm">
								Vérifiez les <strong>conditions de remboursement anticipé</strong>. 
								Certaines banques facturent des pénalités, d&apos;autres non. 
								C&apos;est important si vous prévoyez de revendre.
							</p>
						</div>

						<div>
							<h3 className="text-lg font-semibold text-gray-900 mb-3">
								Gardez une marge de sécurité
							</h3>
							<p className="text-gray-600 text-sm">
								Ne vous endettez pas au maximum des 35%. 
								Gardez une <strong>marge de manœuvre</strong> pour les imprévus 
								(travaux, perte d&apos;emploi, etc.).
							</p>
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
