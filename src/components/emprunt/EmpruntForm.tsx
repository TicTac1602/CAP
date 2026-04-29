'use client';

import { useState } from 'react';
import { EmpruntFormData } from '@/components/emprunt/types';

interface EmpruntFormProps {
	onCalculate: (data: EmpruntFormData) => void;
}

export default function EmpruntForm({ onCalculate }: EmpruntFormProps) {
	const [formData, setFormData] = useState<EmpruntFormData>({
		mode: 'project',
		budgetProjet: 50000,
		apportPersonnel: 0,
		typeBien: 'ancien',
		categorieBien: 'appartement',
		usage: 'principale',
		dureeAnnees: 20,
		revenusMensuels: 2500,
		revenusCoEmprunteur: 0,
		chargesMensuellesExistantes: 0,
		primoAccedant: false,
		zoneGeographique: 'A'
	});

	const [showTooltip, setShowTooltip] = useState<string | null>(null);
	const revenusTotaux = formData.revenusMensuels + formData.revenusCoEmprunteur;
	const mensualiteMaxSupportable = Math.max(0, (revenusTotaux * 0.33) - formData.chargesMensuellesExistantes);
	const apportMax = formData.mode === 'project'
		? Math.max(formData.budgetProjet, 0)
		: 1000000;
	const apportSliderMax = formData.mode === 'project'
		? Math.min(apportMax, 200000)
		: 500000;
	const pourcentageApport = formData.budgetProjet > 0
		? ((formData.apportPersonnel / formData.budgetProjet) * 100).toFixed(1)
		: '0.0';

	const clamp = (value: number, min: number, max: number) => {
		if (!Number.isFinite(value)) return min;
		return Math.min(Math.max(value, min), max);
	};

	const getSanitizedData = (source: EmpruntFormData): EmpruntFormData => {
		const sanitizedBudgetProjet = clamp(source.budgetProjet, 50000, 1000000);
		const sanitizedApportMax = source.mode === 'project' ? sanitizedBudgetProjet : 1000000;

		return {
			...source,
			budgetProjet: sanitizedBudgetProjet,
			apportPersonnel: clamp(source.apportPersonnel, 0, sanitizedApportMax),
			dureeAnnees: clamp(source.dureeAnnees, 5, 27),
			revenusMensuels: clamp(source.revenusMensuels, 0, 50000),
			revenusCoEmprunteur: clamp(source.revenusCoEmprunteur, 0, 50000),
			chargesMensuellesExistantes: clamp(source.chargesMensuellesExistantes, 0, 15000)
		};
	};

	const handleModeSwitch = (mode: EmpruntFormData['mode']) => {
		if (formData.mode === mode) {
			return;
		}

		const nextData: EmpruntFormData = { ...formData, mode };
		setFormData(nextData);
		onCalculate(getSanitizedData(nextData));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onCalculate(getSanitizedData(formData));
	};

	const handleChange = (field: string, value: number | string | boolean) => {
		// Validation pour éviter les NaN pour les nombres
		if (typeof value === 'number') {
			const validValue = isNaN(value) || value === null || value === undefined ? 0 : value;
			setFormData(prev => ({ ...prev, [field]: validValue }));
		} else {
			setFormData(prev => ({ ...prev, [field]: value }));
		}
	};

	return (
		<form onSubmit={handleSubmit} noValidate className="bg-white rounded-lg shadow-sm p-6">
			<h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
				<span>🏡</span>
				Votre simulation immobilière
			</h2>

			<div className="space-y-6">
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-3">
						Choisissez votre point de départ
					</label>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
						<button
							type="button"
							onClick={() => handleModeSwitch('project')}
							className={`p-4 border-2 rounded-lg text-left transition-all ${
								formData.mode === 'project'
									? 'border-purple-600 bg-purple-50 text-purple-900'
									: 'border-gray-200 hover:border-gray-300'
							}`}
						>
							<div className="font-semibold text-sm mb-1">Je connais déjà mon projet</div>
							<div className="text-xs text-gray-600">Vous saisissez le budget du bien et le simulateur vérifie si la mensualité reste réaliste.</div>
						</button>
						<button
							type="button"
							onClick={() => handleModeSwitch('capacity')}
							className={`p-4 border-2 rounded-lg text-left transition-all ${
								formData.mode === 'capacity'
									? 'border-purple-600 bg-purple-50 text-purple-900'
									: 'border-gray-200 hover:border-gray-300'
							}`}
						>
							<div className="font-semibold text-sm mb-1">Je pars de mes revenus</div>
							<div className="text-xs text-gray-600">Le simulateur estime le budget projet accessible selon le foyer, les charges et la durée.</div>
						</button>
					</div>
				</div>

				<div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
					<h3 className="text-sm font-semibold text-gray-900 mb-4">Situation financière du foyer</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label htmlFor="revenusMensuels" className="block text-sm font-medium text-gray-700 mb-2">
								Revenus nets mensuels du 1er emprunteur
							</label>
							<div className="relative">
								<input
									type="number"
									id="revenusMensuels"
									min="0"
									max="50000"
									step="100"
									value={formData.revenusMensuels || ''}
									onChange={(e) => handleChange('revenusMensuels', parseFloat(e.target.value) || 0)}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
								/>
								<span className="absolute right-4 top-3 text-gray-500 font-medium">€/mois</span>
							</div>
						</div>

						<div>
							<label htmlFor="revenusCoEmprunteur" className="block text-sm font-medium text-gray-700 mb-2">
								Revenus nets mensuels du co-emprunteur
							</label>
							<div className="relative">
								<input
									type="number"
									id="revenusCoEmprunteur"
									min="0"
									max="50000"
									step="100"
									value={formData.revenusCoEmprunteur || ''}
									onChange={(e) => handleChange('revenusCoEmprunteur', parseFloat(e.target.value) || 0)}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
									placeholder="0 si vous empruntez seul"
								/>
								<span className="absolute right-4 top-3 text-gray-500 font-medium">€/mois</span>
							</div>
						</div>

						<div className="md:col-span-2">
							<div className="flex items-center gap-2 mb-2">
								<label htmlFor="chargesMensuellesExistantes" className="block text-sm font-medium text-gray-700">
									Charges de crédit déjà en cours
								</label>
								<button
									type="button"
									onMouseEnter={() => setShowTooltip('charges')}
									onMouseLeave={() => setShowTooltip(null)}
									className="text-gray-400 hover:text-gray-600 relative"
								>
									<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
									</svg>
									{showTooltip === 'charges' && (
										<div className="absolute left-6 top-0 w-64 bg-gray-900 text-white text-xs rounded-lg p-3 z-10">
											Additionnez vos mensualités de crédits déjà en cours. Elles pèsent déjà dans votre taux d&apos;endettement.
										</div>
									)}
								</button>
							</div>
							<div className="relative">
								<input
									type="number"
									id="chargesMensuellesExistantes"
									min="0"
									max="15000"
									step="50"
									value={formData.chargesMensuellesExistantes || ''}
									onChange={(e) => handleChange('chargesMensuellesExistantes', parseFloat(e.target.value) || 0)}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
								/>
								<span className="absolute right-4 top-3 text-gray-500 font-medium">€/mois</span>
							</div>
						</div>
					</div>

					<div className="mt-4 p-3 bg-white rounded-lg border border-gray-200 text-sm">
						<div className="flex justify-between mb-1">
							<span className="text-gray-600">Revenus du foyer</span>
							<span className="font-semibold text-gray-900">{revenusTotaux.toLocaleString('fr-FR')} € / mois</span>
						</div>
						<div className="flex justify-between mb-1">
							<span className="text-gray-600">Crédits existants</span>
							<span className="font-semibold text-gray-900">{formData.chargesMensuellesExistantes.toLocaleString('fr-FR')} € / mois</span>
						</div>
						<div className="flex justify-between pt-2 border-t border-gray-200">
							<span className="text-gray-900 font-semibold">Mensualité maximale estimée à 33%</span>
							<span className="font-bold text-purple-700">{mensualiteMaxSupportable.toLocaleString('fr-FR')} € / mois</span>
						</div>
					</div>
				</div>

				{/* Budget du projet */}
				{formData.mode === 'project' && (
					<div>
					<div className="flex items-center gap-2 mb-2">
						<label htmlFor="budgetProjet" className="block text-sm font-medium text-gray-700">
							Budget total du projet
						</label>
						<button
							type="button"
							onMouseEnter={() => setShowTooltip('budget')}
							onMouseLeave={() => setShowTooltip(null)}
							className="text-gray-400 hover:text-gray-600 relative"
						>
							<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
							</svg>
							{showTooltip === 'budget' && (
								<div className="absolute left-6 top-0 w-64 bg-gray-900 text-white text-xs rounded-lg p-3 z-10">
									Le prix du bien immobilier que vous souhaitez acheter (hors frais de notaire)
								</div>
							)}
						</button>
					</div>
					<div className="relative">
						<input
							type="number"
							id="budgetProjet"
							min="50000"
							max="1000000"
							step="5000"
							value={formData.budgetProjet || ''}
							onChange={(e) => handleChange('budgetProjet', parseFloat(e.target.value) || 0)}
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
						/>
						<span className="absolute right-4 top-3 text-gray-500 font-medium">€</span>
					</div>
					<input
						type="range"
						min="50000"
						max="800000"
						step="10000"
						value={formData.budgetProjet || 50000}
						onChange={(e) => handleChange('budgetProjet', parseFloat(e.target.value) || 0)}
						className="w-full mt-2"
					/>
					<div className="flex justify-between text-xs text-gray-500 mt-1">
						<span>50 000 €</span>
						<span>800 000 €</span>
					</div>
					</div>
				)}

				{/* Apport personnel */}
				<div>
					<div className="flex items-center gap-2 mb-2">
						<label htmlFor="apportPersonnel" className="block text-sm font-medium text-gray-700">
							Votre apport personnel
						</label>
						<button
							type="button"
							onMouseEnter={() => setShowTooltip('apport')}
							onMouseLeave={() => setShowTooltip(null)}
							className="text-gray-400 hover:text-gray-600 relative"
						>
							<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
							</svg>
							{showTooltip === 'apport' && (
								<div className="absolute left-6 top-0 w-64 bg-gray-900 text-white text-xs rounded-lg p-3 z-10">
									L&apos;argent que vous pouvez mettre de votre poche. Généralement 10% minimum du prix est recommandé
								</div>
							)}
						</button>
					</div>
					<div className="relative">
						<input
							type="number"
							id="apportPersonnel"
							min="0"
							max={apportMax}
							step="1000"
							value={formData.apportPersonnel || ''}
							onChange={(e) => handleChange('apportPersonnel', parseFloat(e.target.value) || 0)}
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
						/>
						<span className="absolute right-4 top-3 text-gray-500 font-medium">€</span>
					</div>
					<input
						type="range"
						min="0"
						max={apportSliderMax}
						step="1000"
						value={Math.min(formData.apportPersonnel, apportSliderMax) || 0}
						onChange={(e) => handleChange('apportPersonnel', parseFloat(e.target.value) || 0)}
						className="w-full mt-2"
					/>
					<div className="text-xs text-gray-600 mt-1">
						{formData.mode === 'project'
							? `Soit ${pourcentageApport}% du budget saisi`
							: `Apport saisi: ${formData.apportPersonnel.toLocaleString('fr-FR')} €`}
						{formData.mode === 'project' && formData.apportPersonnel < formData.budgetProjet * 0.1 && formData.budgetProjet > 0 && (
							<span className="text-orange-600 ml-2">⚠️ Moins de 10%</span>
						)}
					</div>
				</div>

				{/* Type de bien */}
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Type de bien
					</label>
					<div className="grid grid-cols-2 gap-3">
						<button
							type="button"
							onClick={() => handleChange('typeBien', 'ancien')}
							className={`p-4 border-2 rounded-lg transition-all ${
								formData.typeBien === 'ancien'
									? 'border-purple-600 bg-purple-50 text-purple-900'
									: 'border-gray-200 hover:border-gray-300'
							}`}
						>
							<div className="text-2xl mb-1">🏚️</div>
							<div className="font-semibold text-sm">Ancien</div>
							<div className="text-xs text-gray-600 mt-1">Frais notaire ~7-8%</div>
						</button>
						<button
							type="button"
							onClick={() => handleChange('typeBien', 'neuf')}
							className={`p-4 border-2 rounded-lg transition-all ${
								formData.typeBien === 'neuf'
									? 'border-purple-600 bg-purple-50 text-purple-900'
									: 'border-gray-200 hover:border-gray-300'
							}`}
						>
							<div className="text-2xl mb-1">🏗️</div>
							<div className="font-semibold text-sm">Neuf</div>
							<div className="text-xs text-gray-600 mt-1">Frais notaire ~2-3%</div>
						</button>
					</div>
				</div>

				{/* Catégorie de bien */}
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Catégorie de bien
					</label>
					<div className="grid grid-cols-2 gap-3">
						<button
							type="button"
							onClick={() => handleChange('categorieBien', 'appartement')}
							className={`p-4 border-2 rounded-lg transition-all ${
								formData.categorieBien === 'appartement'
									? 'border-purple-600 bg-purple-50 text-purple-900'
									: 'border-gray-200 hover:border-gray-300'
							}`}
						>
							<div className="text-2xl mb-1">🏢</div>
							<div className="font-semibold text-sm">Appartement</div>
						</button>
						<button
							type="button"
							onClick={() => handleChange('categorieBien', 'maison')}
							className={`p-4 border-2 rounded-lg transition-all ${
								formData.categorieBien === 'maison'
									? 'border-purple-600 bg-purple-50 text-purple-900'
									: 'border-gray-200 hover:border-gray-300'
							}`}
						>
							<div className="text-2xl mb-1">🏡</div>
							<div className="font-semibold text-sm">Maison</div>
						</button>
					</div>
				</div>

				{/* Usage du bien */}
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Usage du bien
					</label>
					<div className="grid grid-cols-2 gap-3">
						<button
							type="button"
							onClick={() => handleChange('usage', 'principale')}
							className={`p-4 border-2 rounded-lg transition-all ${
								formData.usage === 'principale'
									? 'border-purple-600 bg-purple-50 text-purple-900'
									: 'border-gray-200 hover:border-gray-300'
							}`}
						>
							<div className="text-2xl mb-1">🏠</div>
							<div className="font-semibold text-sm">Résidence principale</div>
							<div className="text-xs text-gray-600 mt-1">Meilleurs taux</div>
						</button>
						<button
							type="button"
							onClick={() => handleChange('usage', 'locatif')}
							className={`p-4 border-2 rounded-lg transition-all ${
								formData.usage === 'locatif'
									? 'border-purple-600 bg-purple-50 text-purple-900'
									: 'border-gray-200 hover:border-gray-300'
							}`}
						>
							<div className="text-2xl mb-1">🔑</div>
							<div className="font-semibold text-sm">Investissement locatif</div>
							<div className="text-xs text-gray-600 mt-1">Taux +0.3-0.5%</div>
						</button>
					</div>
				</div>

				{/* Durée */}
				<div>
					<div className="flex items-center gap-2 mb-2">
						<label htmlFor="dureeAnnees" className="block text-sm font-medium text-gray-700">
							Durée du prêt
						</label>
						<button
							type="button"
							onMouseEnter={() => setShowTooltip('duree')}
							onMouseLeave={() => setShowTooltip(null)}
							className="text-gray-400 hover:text-gray-600 relative"
						>
							<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
							</svg>
							{showTooltip === 'duree' && (
								<div className="absolute left-6 top-0 w-64 bg-gray-900 text-white text-xs rounded-lg p-3 z-10">
									Plus la durée est longue, plus la mensualité est faible mais plus le coût total est élevé
								</div>
							)}
						</button>
					</div>
					<div className="relative">
						<input
							type="number"
							id="dureeAnnees"
							min="5"
							max="27"
							value={formData.dureeAnnees || ''}
							onChange={(e) => handleChange('dureeAnnees', parseFloat(e.target.value) || 0)}
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
						/>
						<span className="absolute right-4 top-3 text-gray-500 font-medium">ans</span>
					</div>
					<input
						type="range"
						min="5"
						max="27"
						step="1"
						value={formData.dureeAnnees || 5}
						onChange={(e) => handleChange('dureeAnnees', parseFloat(e.target.value) || 0)}
						className="w-full mt-2"
					/>
					<div className="flex justify-between text-xs text-gray-500 mt-1">
						<span>5 ans</span>
						<span>27 ans (max légal)</span>
					</div>
				</div>

				{/* Primo-accédant et PTZ */}
				<div className="pt-4 border-t border-gray-200">
					<div className="flex items-center gap-2 mb-3">
						<input
							type="checkbox"
							id="primoAccedant"
							checked={formData.primoAccedant}
							onChange={(e) => handleChange('primoAccedant', e.target.checked)}
							className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
						/>
						<label htmlFor="primoAccedant" className="text-sm font-medium text-gray-700">
							Je suis primo-accédant
						</label>
						<button
							type="button"
							onMouseEnter={() => setShowTooltip('primo')}
							onMouseLeave={() => setShowTooltip(null)}
							className="text-gray-400 hover:text-gray-600 relative"
						>
							<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
							</svg>
							{showTooltip === 'primo' && (
								<div className="absolute left-6 top-0 w-64 bg-gray-900 text-white text-xs rounded-lg p-3 z-10">
									Vous n&apos;avez pas été propriétaire de votre résidence principale au cours des 2 dernières années. Vous pouvez être éligible au PTZ !
								</div>
							)}
						</button>
					</div>

					{formData.primoAccedant && formData.usage === 'principale' && (
						<div className="ml-6 p-3 border-l-4 rounded-r-lg">
							<label className="block text-xs text-gray-700 mb-2">
								Zone géographique du bien
							</label>
							<select
								value={formData.zoneGeographique}
								onChange={(e) => handleChange('zoneGeographique', e.target.value)}
								className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
							>
								<option value="A bis">Zone A bis - Paris et proche banlieue</option>
								<option value="A">Zone A - Grandes agglomérations</option>
								<option value="B1">Zone B1 - Villes de plus de 250k habitants</option>
								<option value="B2">Zone B2 - Villes de plus de 50k habitants</option>
								<option value="C">Zone C - Reste du territoire</option>
							</select>
							<p className="text-xs mt-2">
								Le PTZ est un prêt sans intérêt qui peut financer jusqu&apos;à 40% de votre projet
							</p>
						</div>
					)}
				</div>

				<div className="pt-4 border-t border-gray-200 text-sm text-gray-600">
					{formData.mode === 'project'
						? 'Le simulateur vérifiera si ce projet reste compatible avec votre endettement actuel et la règle des 33%.'
						: 'Le simulateur calculera un budget de bien estimatif hors frais de notaire à partir de vos revenus, de vos charges et de la durée choisie.'}
				</div>
			</div>

			{/* Bouton de calcul */}
			<button
				type="submit"
				className="w-full mt-8 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
			>
				<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
				</svg>
				{formData.mode === 'project' ? 'Vérifier mon projet' : 'Calculer mon budget immobilier'}
			</button>
		</form>
	);
}
