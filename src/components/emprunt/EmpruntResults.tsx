'use client';

interface EmpruntResultsProps {
	results: {
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
	};
}

export default function EmpruntResults({ results }: EmpruntResultsProps) {
	const formatCurrency = (value: number) => {
		return new Intl.NumberFormat('fr-FR', {
			style: 'currency',
			currency: 'EUR',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(value);
	};

	const formatCurrencyDetailed = (value: number) => {
		return new Intl.NumberFormat('fr-FR', {
			style: 'currency',
			currency: 'EUR',
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		}).format(value);
	};

	const getTauxEndettementColor = (taux: number) => {
		if (taux === 0) return 'text-gray-500';
		if (taux <= 33) return 'text-green-600';
		if (taux <= 35) return 'text-orange-600';
		return 'text-red-600';
	};

	const getTauxEndettementBg = (taux: number) => {
		if (taux === 0) return 'bg-gray-50';
		if (taux <= 33) return 'bg-green-50';
		if (taux <= 35) return 'bg-orange-50';
		return 'bg-red-50';
	};

	const getTauxEndettementBorder = (taux: number) => {
		if (taux === 0) return 'border-gray-200';
		if (taux <= 33) return 'border-green-500';
		if (taux <= 35) return 'border-orange-500';
		return 'border-red-500';
	};

	const getTauxEndettementMessage = (taux: number) => {
		if (taux === 0) return null;
		if (taux <= 33) return '✅ Excellent ! Votre taux d\'endettement est confortable';
		if (taux <= 35) return '⚠️ Limite acceptable mais proche du maximum réglementaire';
		return '❌ Attention : vous dépassez la limite légale de 35%';
	};

	return (
		<div className="space-y-6">
			{/* Résumé du projet */}
			<div className="bg-white rounded-lg shadow-sm p-6">
				<h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
					<span>📋</span>
					Récapitulatif de votre projet
				</h3>
				<div className="grid grid-cols-2 gap-4 text-sm">
					<div>
						<div className="text-gray-600 mb-1">Type de bien</div>
						<div className="font-semibold">{results.typeBien === 'neuf' ? '🏗️ Neuf' : '🏚️ Ancien'} - {results.categorieBien === 'appartement' ? 'Appartement' : 'Maison'}</div>
					</div>
					<div>
						<div className="text-gray-600 mb-1">Usage</div>
						<div className="font-semibold">{results.usage === 'principale' ? '🏠 Résidence principale' : '🔑 Locatif'}</div>
					</div>
					<div>
						<div className="text-gray-600 mb-1">Budget projet</div>
						<div className="font-semibold text-lg">{formatCurrency(results.budgetProjet)}</div>
					</div>
					<div>
						<div className="text-gray-600 mb-1">Votre apport</div>
						<div className="font-semibold text-lg text-green-600">{formatCurrency(results.apportPersonnel)}</div>
					</div>
					{results.eligiblePTZ && (
						<div>
							<div className="text-gray-600 mb-1">PTZ (zone {results.zoneGeographique})</div>
							<div className="font-semibold text-lg">{formatCurrency(results.montantMaxPTZ)}</div>
						</div>
					)}
					<div>
						<div className="text-gray-600 mb-1">Frais de notaire estimés</div>
						<div className="font-semibold">{formatCurrency(results.fraisNotaire)}</div>
					</div>
					<div>
						<div className="text-gray-600 mb-1">Taux estimé</div>
						<div className="font-semibold text-purple-600">{results.tauxAnnuel.toFixed(2)}%</div>
					</div>
				</div>
			</div>

			{/* Résultat principal */}
			<div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-lg shadow-lg p-6">
				<div className="flex items-center gap-3 mb-4">
					<span className="text-3xl">💳</span>
					<h2 className="text-2xl font-bold">Votre mensualité</h2>
				</div>
				
				<div className="text-5xl font-bold mb-2">
					{formatCurrency(results.mensualiteTotale)}
				</div>
				<p className="text-purple-100 text-sm">
					par mois pendant {results.dureeAnnees} ans ({results.nombreMois} mensualités)
				</p>

				<div className="mt-6 pt-6 border-t border-purple-500">
					<div className="grid grid-cols-2 gap-4 text-sm">
						<div>
							<div className="text-purple-200 mb-1">Capital + Intérêts</div>
							<div className="font-semibold text-lg">{formatCurrencyDetailed(results.mensualiteHorsAssurance)}</div>
						</div>
						<div>
							<div className="text-purple-200 mb-1">Assurance</div>
							<div className="font-semibold text-lg">{formatCurrencyDetailed(results.assuranceMensuelle)}</div>
						</div>
					</div>
				</div>
			</div>

			{/* Coût total avec explications */}
			<div className="bg-white rounded-lg shadow-sm p-6">
				<div className="flex items-center gap-2 mb-4">
					<span className="text-2xl">💰</span>
					<h3 className="text-lg font-semibold text-gray-900">Analyse du crédit</h3>
				</div>

				<div className="space-y-4">
					{/* Décomposition du coût total */}
					<div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
						<div>
							<div className="text-gray-700 font-medium">Budget du bien</div>
							<div className="text-xs text-gray-600">Prix d&apos;achat</div>
						</div>
						<span className="font-semibold text-gray-900">{formatCurrency(results.budgetProjet)}</span>
					</div>

					<div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
						<div>
							<div className="text-gray-700 font-medium">+ Frais de notaire</div>
							<div className="text-xs text-gray-600">{results.typeBien === 'neuf' ? '~2.5%' : '~7.5%'} du prix</div>
						</div>
						<span className="font-semibold text-gray-900">{formatCurrency(results.fraisNotaire)}</span>
					</div>

					<div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
						<div>
							<div className="text-gray-700 font-medium">- Votre apport</div>
							<div className="text-xs text-gray-600">{results.pourcentageApport.toFixed(1)}% du budget</div>
						</div>
						<span className="font-semibold text-green-700">- {formatCurrency(results.apportPersonnel)}</span>
					</div>

					{results.eligiblePTZ && (
						<div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg border-l-4 border-emerald-400">
							<div>
								<div className="text-gray-700 font-medium">- Prêt à taux zéro (PTZ)</div>
								<div className="text-xs text-gray-600">{results.quotitePTZ}% du budget - Zone {results.zoneGeographique}</div>
								<div className="text-xs text-gray-600">Demande a faire sur <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F10871" className="underline" target="_blank">Service Public - PTZ</a> </div>
								<div className="text-xs text-gray-600">Vérifiez votre éligibilité et la participation de votre établissements bancaire.</div>
							</div>
							<span className="font-semibold text-emerald-700">- {formatCurrency(results.montantMaxPTZ)}</span>
						</div>
					)}

					<div className="flex justify-between items-center p-3 bg-purple-100 rounded-lg border-2 border-purple-400">
						<div>
							<div className="text-gray-900 font-bold">= {results.eligiblePTZ ? 'Prêt bancaire' : 'Montant emprunté'}</div>
							<div className="text-xs text-gray-600">{results.eligiblePTZ ? 'À souscrire auprès d\'une banque' : 'Capital à rembourser'}</div>
						</div>
						<span className="font-bold text-purple-700 text-xl">{formatCurrency(results.eligiblePTZ ? results.capitalHorsPTZ : results.capital)}</span>
					</div>

					<div className="h-px bg-gray-200 my-4" />

					{/* Intérêts */}
					<div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
						<div>
							<div className="text-gray-700 font-medium">+ Intérêts du prêt</div>
							<div className="text-xs text-gray-600">Coût de l&apos;emprunt à {results.tauxAnnuel.toFixed(2)}%</div>
						</div>
						<span className="font-semibold text-red-700">{formatCurrency(results.coutInteretsTotal)}</span>
					</div>

					{/* Assurance */}
					<div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
						<div>
							<div className="text-gray-700 font-medium">+ Assurance</div>
							<div className="text-xs text-gray-600">Protection emprunteur obligatoire</div>
						</div>
						<span className="font-semibold text-orange-700">{formatCurrency(results.coutAssuranceTotal)}</span>
					</div>

					{/* Total */}
					<div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg border-2 border-purple-400">
						<div>
							<div className="text-gray-700 font-bold text-lg">= Coût total emprunt</div>
							<div className="text-xs text-gray-600">Intérêts + Assurance</div>
						</div>
						<span className="font-bold text-purple-700 text-2xl">{formatCurrency(results.coutTotalCredit)}</span>
					</div>
				</div>

				{/* Explication pédagogique */}
				<div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
					<div className="flex items-start gap-2">
						<svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
							<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
						</svg>
						<div className="text-sm text-blue-900">
							<strong>Comprendre le coût :</strong> Au total, vous rembourserez <strong>{formatCurrency(results.capital + results.coutTotalCredit)}</strong> sur {results.dureeAnnees} ans. 
							Le coût du crédit représente <strong>{((results.coutTotalCredit / results.capital) * 100).toFixed(1)}%</strong> du capital emprunté.
						</div>
					</div>
				</div>
			</div>

			{/* Taux d'endettement */}
			{results.revenusMensuels > 0 && (
				<div className={`rounded-lg shadow-sm p-6 border-l-4 ${getTauxEndettementBg(results.tauxEndettement)} ${getTauxEndettementBorder(results.tauxEndettement)}`}>
					<div className="flex items-center gap-2 mb-4">
						<span className="text-2xl">⚖️</span>
						<h3 className="text-lg font-semibold text-gray-900">Analyse de votre capacité</h3>
					</div>

					<div className="space-y-4">
						{/* Taux d'endettement */}
						<div>
							<div className="flex justify-between items-center mb-2">
								<span className="text-gray-700 font-medium">Taux d&apos;endettement</span>
								<span className={`text-3xl font-bold ${getTauxEndettementColor(results.tauxEndettement)}`}>
									{results.tauxEndettement.toFixed(1)}%
								</span>
							</div>
							
							{/* Barre de progression */}
							<div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
								<div 
									className={`h-full transition-all duration-500 ${
										results.tauxEndettement <= 33 ? 'bg-green-500' :
										results.tauxEndettement <= 35 ? 'bg-orange-500' :
										'bg-red-500'
									}`}
									style={{ width: `${Math.min(results.tauxEndettement, 100)}%` }}
								/>
								{/* Ligne de limite à 35% */}
								<div className="absolute top-0 left-[35%] w-0.5 h-full bg-red-700" />
							</div>
							<div className="flex justify-between text-xs text-gray-500 mt-1">
								<span>0%</span>
								<span className="text-red-700 font-semibold">↑ 35% (max)</span>
								<span>100%</span>
							</div>

							{/* Message explicatif */}
							{getTauxEndettementMessage(results.tauxEndettement) && (
								<div className="mt-3 p-3 bg-white rounded-lg">
									<p className="text-sm font-medium text-gray-900">
										{getTauxEndettementMessage(results.tauxEndettement)}
									</p>
								</div>
							)}
						</div>

						{/* Reste à vivre */}
						<div className="pt-4 border-t border-gray-200">
							<div className="flex justify-between items-center">
								<div>
									<div className="text-gray-700 font-medium">Reste à vivre</div>
									<div className="text-xs text-gray-600">Après paiement de la mensualité</div>
								</div>
								<span className="text-2xl font-bold text-gray-900">
									{formatCurrency(results.resteAVivre)}
								</span>
							</div>
						</div>

						{/* Détails revenus */}
						<div className="p-3 bg-white rounded-lg text-sm">
							<div className="flex justify-between mb-1">
								<span className="text-gray-600">Revenus mensuels</span>
								<span className="font-medium">{formatCurrency(results.revenusMensuels)}</span>
							</div>
							<div className="flex justify-between mb-1">
								<span className="text-gray-600">Mensualité prêt</span>
								<span className="font-medium text-red-600">- {formatCurrency(results.mensualiteTotale)}</span>
							</div>
							<div className="flex justify-between pt-2 border-t border-gray-200">
								<span className="text-gray-900 font-semibold">Reste disponible</span>
								<span className="font-bold text-green-600">{formatCurrency(results.resteAVivre)}</span>
							</div>
						</div>
					</div>

					{/* Explication pédagogique */}
					<div className="mt-4 p-4 bg-white border-l-4 border-blue-400 rounded-r-lg">
						<div className="flex items-start gap-2">
							<svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
							</svg>
							<div className="text-sm text-gray-700">
								<strong>La règle des 35% :</strong> Depuis 2022, les banques ne peuvent pas prêter si vos mensualités dépassent 35% de vos revenus. 
								C&apos;est une protection pour éviter le surendettement et vous assurer un reste à vivre suffisant.
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
