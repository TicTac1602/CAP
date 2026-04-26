'use client';

import { PeaProfilRisque, PEA_PROFILS, ProduitEpargne, PRODUITS_EPARGNE } from '@/components/epargne/epargne-products';

export interface EpargnePoint {
	annee: number;
	capital: number;
	versementsCumules: number;
	interetsCumules: number;
}

interface EpargneResultsProps {
	points: EpargnePoint[];
	tauxAnnuelUtilise: number;
	produitSelectionne?: ProduitEpargne;
	peaProfil: PeaProfilRisque;
	horizonEffectif: number;
}

export function EpargnePlacementComparison() {
	return (
		<div className="bg-white rounded-lg shadow-sm p-6">
			<h3 className="text-lg font-semibold text-gray-900 mb-4">Repères pour comparer les placements</h3>
			<div className="space-y-3 text-sm text-gray-700">
				<p>
					Le rendement affiché dans une simulation ne suffit pas à comparer deux produits. Le cadre fiscal peut changer
					 fortement le résultat net selon la durée de détention, le type de retrait et votre situation personnelle.
				</p>
				<p>
					La disponibilité des fonds est également déterminante: une épargne totalement liquide n'a pas la même fonction
					 qu'une enveloppe d'investissement de long terme. Pour un projet robuste, il est pertinent de séparer l'épargne
					 de sécurité et l'épargne de performance.
				</p>
				<p>
					Le tableau ci-dessous synthétise les principaux régimes de plafond et de fiscalité, mais les règles exactes
					 dépendent toujours de la date d'ouverture, des versements et des retraits effectivement réalisés.
				</p>
			</div>

			<div className="mt-4 overflow-x-auto">
				<table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
					<thead className="bg-gray-50 text-gray-700">
						<tr>
							<th className="text-left px-3 py-2">Produit</th>
							<th className="text-left px-3 py-2">Plafond</th>
							<th className="text-left px-3 py-2">Fiscalité</th>
						</tr>
					</thead>
					<tbody>
						{PRODUITS_EPARGNE.map((produit) => (
							<tr key={produit.id} className="border-t border-gray-200">
								<td className="px-3 py-2 font-medium text-gray-900">{produit.nom}</td>
								<td className="px-3 py-2 text-gray-700">{produit.plafondTexte ?? 'Pas de plafond légal'}</td>
								<td className="px-3 py-2 text-gray-700">{produit.fiscaliteDetaillee}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default function EpargneResults({
	points,
	tauxAnnuelUtilise,
	produitSelectionne,
	peaProfil,
	horizonEffectif
}: EpargneResultsProps) {
	const lastPoint = points[points.length - 1];

	const formatCurrency = (value: number) => {
		return new Intl.NumberFormat('fr-FR', {
			style: 'currency',
			currency: 'EUR',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		}).format(value);
	};

	if (!lastPoint) {
		return (
			<div className="bg-white rounded-lg shadow-sm p-6 text-center text-gray-600">
				Renseignez vos paramètres pour visualiser l'évolution de votre épargne.
			</div>
		);
	}

	const finalCapital = lastPoint.capital;
	const totalVersements = lastPoint.versementsCumules;
	const totalInterets = lastPoint.interetsCumules;
	const partInterets = finalCapital > 0 ? (totalInterets / finalCapital) * 100 : 0;

	const chartWidth = 680;
	const chartHeight = 280;
	const paddingTop = 24;
	const paddingBottom = 36;
	const paddingLeft = 64;
	const paddingRight = 20;

	const minY = 0;
	const maxY = Math.max(...points.map((point) => Math.max(point.capital, point.versementsCumules)), 1);
	const xScale = (annee: number) => paddingLeft + (annee / Math.max(horizonEffectif, 1)) * (chartWidth - paddingLeft - paddingRight);
	const yScale = (value: number) => chartHeight - paddingBottom - ((value - minY) / (maxY - minY || 1)) * (chartHeight - paddingTop - paddingBottom);

	const lineCapitalPath = points
		.map((point, index) => `${index === 0 ? 'M' : 'L'} ${xScale(point.annee)} ${yScale(point.capital)}`)
		.join(' ');
	const lineVersementsPath = points
		.map((point, index) => `${index === 0 ? 'M' : 'L'} ${xScale(point.annee)} ${yScale(point.versementsCumules)}`)
		.join(' ');

	const gainsAreaPath = [
		...points.map((point) => `${xScale(point.annee)} ${yScale(point.capital)}`),
		...points.slice().reverse().map((point) => `${xScale(point.annee)} ${yScale(point.versementsCumules)}`)
	].join(' L ');

	const yTicks = 4;
	const xTicks = Math.min(8, horizonEffectif);
	const hasPlafondTexte = !!produitSelectionne?.plafondTexte;
	const yTickValues = Array.from({ length: yTicks + 1 }, (_, index) => {
		return (maxY / yTicks) * (yTicks - index);
	});

	const risqueAffiche = produitSelectionne?.id === 'pea'
		? PEA_PROFILS[peaProfil].risque
		: produitSelectionne?.risque;

	const getRiskClass = (risque: ProduitEpargne['risque'] | 'modere' | 'eleve' | undefined) => {
		switch (risque) {
			case 'faible':
				return 'bg-green-50 border-green-200 text-green-700';
			case 'modere':
				return 'bg-orange-50 border-orange-200 text-orange-700';
			case 'eleve':
				return 'bg-red-50 border-red-200 text-red-700';
			default:
				return 'bg-gray-50 border-gray-200 text-gray-700';
		}
	};

	return (
		<div className="space-y-6">
			<div className="bg-white rounded-lg shadow-sm p-6">
				<h3 className="text-lg font-semibold text-gray-900 mb-4">
					Projection de votre épargne
				</h3>

				<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
					<div className="rounded-lg bg-gray-50 p-4 text-center">
						<div className="text-sm text-gray-600 mb-1">Capital final estimé</div>
						<div className="text-2xl font-bold text-green-700">{formatCurrency(finalCapital)}</div>
					</div>
					<div className="rounded-lg bg-gray-50 p-4 text-center">
						<div className="text-sm text-gray-600 mb-1">Total versé</div>
						<div className="text-2xl font-bold text-gray-900">{formatCurrency(totalVersements)}</div>
					</div>
					<div className="rounded-lg bg-gray-50 p-4 text-center">
						<div className="text-sm text-gray-600 mb-1">Intérêts cumulés</div>
						<div className="text-2xl font-bold text-blue-700">{formatCurrency(totalInterets)}</div>
					</div>
				</div>

				<div className="mb-3 text-sm text-gray-600">
					Hypothèse de rendement annuel utilisée : <strong>{tauxAnnuelUtilise.toFixed(2)}%</strong>
					{produitSelectionne ? ` via ${produitSelectionne.nom}` : ''}.
				</div>
				{produitSelectionne?.id === 'pea' && (
					<div className="mb-3 text-sm text-gray-600">
						Profil PEA appliqué : <strong>{PEA_PROFILS[peaProfil].label}</strong>.
					</div>
				)}

				<div className="rounded-lg border border-gray-200 bg-white">
					<div className="w-full aspect-[17/7] min-h-[240px]">
						<svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-full" preserveAspectRatio="none" role="img" aria-label="Graphique de l'évolution de l'épargne">
						<defs>
							<linearGradient id="gainsArea" x1="0" y1="0" x2="0" y2="1">
								<stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.25" />
								<stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.05" />
							</linearGradient>
						</defs>

						{yTickValues.map((value, index) => {
							const y = yScale(value);
							return (
								<g key={`y-${index}`}>
									<line x1={paddingLeft} y1={y} x2={chartWidth - paddingRight} y2={y} stroke="#e5e7eb" strokeWidth="1" />
									<text x={paddingLeft - 8} y={y + 4} textAnchor="end" fontSize="11" fill="#6b7280">
										{Math.round(value).toLocaleString('fr-FR')}
									</text>
								</g>
							);
						})}

						{Array.from({ length: xTicks + 1 }).map((_, index) => {
							const annee = Math.round((horizonEffectif / xTicks) * index);
							const x = xScale(annee);
							return (
								<g key={`x-${index}`}>
									<line x1={x} y1={paddingTop} x2={x} y2={chartHeight - paddingBottom} stroke="#f3f4f6" strokeWidth="1" />
									<text x={x} y={chartHeight - 12} textAnchor="middle" fontSize="11" fill="#6b7280">
										A{annee}
									</text>
								</g>
							);
						})}

						<path d={`M ${gainsAreaPath} Z`} fill="url(#gainsArea)" />
						<path d={lineVersementsPath} fill="none" stroke="#d97706" strokeWidth="2.5" strokeDasharray="6 6" strokeLinecap="round" />
						<path d={lineCapitalPath} fill="none" stroke="#1d4ed8" strokeWidth="3" strokeLinecap="round" />

						<circle cx={xScale(lastPoint.annee)} cy={yScale(lastPoint.capital)} r="4" fill="#1d4ed8" />
						<circle cx={xScale(lastPoint.annee)} cy={yScale(lastPoint.versementsCumules)} r="3.5" fill="#d97706" />
						</svg>
					</div>
					<div className="flex flex-wrap items-center gap-4 px-4 pb-4 text-xs text-gray-700">
						<div className="flex items-center gap-2">
							<span className="inline-block h-0.5 w-8 bg-blue-700" />
							<span>Capital total</span>
						</div>
						<div className="flex items-center gap-2">
							<span className="inline-block h-0.5 w-8 border-t-2 border-dashed border-amber-600" />
							<span>Total versé par l'épargnant</span>
						</div>
						<div className="text-gray-600">Zone bleue: effet cumulé des intérêts composés</div>
					</div>
				</div>

				<div className="mt-4 text-sm text-gray-600">
					Part des gains dans le capital final : <strong>{partInterets.toFixed(1)}%</strong>.
				</div>
			</div>

			{produitSelectionne && (
				<div className="bg-white rounded-lg shadow-sm p-6">
					<h3 className="text-lg font-semibold text-gray-900 mb-4">Caractéristiques du placement</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
						<div className="rounded-lg border border-gray-200 p-4">
							<div className="text-sm text-gray-600 mb-1">Produit</div>
							<div className="font-semibold text-gray-900">{produitSelectionne.nom}</div>
						</div>
						<div className={`rounded-lg border p-4 ${getRiskClass(risqueAffiche)}`}>
							<div className="text-sm mb-1">Niveau de risque</div>
							<div className="font-semibold uppercase tracking-wide">{risqueAffiche}</div>
						</div>
					</div>

					{produitSelectionne.id === 'pea' && (
						<p className="text-sm text-gray-700 mb-3">
							Le niveau de risque du PEA dépend directement des titres choisis (actions/ETF). Le profil sélectionné
							 ajuste le rendement simulé pour refléter cette réalité.
						</p>
					)}

					<p className="text-sm text-gray-700 mb-3">{produitSelectionne.description}</p>

					<div className="rounded-lg bg-blue-50 border border-blue-200 p-4 mb-3">
						<div className="text-sm font-semibold text-blue-900 mb-1">Fiscalité</div>
						<p className="text-sm text-blue-800 mb-2">{produitSelectionne.fiscalite}</p>
						<p className="text-sm text-blue-900">{produitSelectionne.fiscaliteDetaillee}</p>
					</div>

					{hasPlafondTexte && (
						<div className="rounded-lg bg-yellow-50 border border-yellow-200 p-4 text-sm text-yellow-900 mb-3">
							<strong>Plafond et règles de versement:</strong> {produitSelectionne.plafondTexte}
						</div>
					)}

					{produitSelectionne.dureeMaxAnnees && (
						<div className="rounded-lg bg-orange-50 border border-orange-200 p-4 text-sm text-orange-900">
							Ce produit est généralement encadré dans le temps (jusqu'à <strong>{produitSelectionne.dureeMaxAnnees} ans</strong> pour la simulation).
						</div>
					)}
				</div>
			)}

		</div>
	);
}
