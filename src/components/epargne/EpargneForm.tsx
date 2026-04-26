'use client';

import { ProduitEpargneId, PRODUITS_EPARGNE, FREQUENCES, FrequenceVersement } from '@/components/epargne/epargne-products';
import { PEA_PROFILS, PeaProfilRisque } from '@/components/epargne/epargne-products';

export interface EpargneFormData {
	capitalDepart: number;
	ajoutPeriodique: number;
	frequenceVersement: FrequenceVersement;
	horizonAnnees: number;
	modeRendement: 'taux' | 'produit';
	tauxAnnuel: number;
	produitSelectionne: ProduitEpargneId;
	peaProfil: PeaProfilRisque;
}

interface EpargneFormProps {
	formData: EpargneFormData;
	onChange: (newData: EpargneFormData) => void;
}

export default function EpargneForm({ formData, onChange }: EpargneFormProps) {
	const selectedProduit = PRODUITS_EPARGNE.find((produit) => produit.id === formData.produitSelectionne);
	const horizonMax = selectedProduit?.dureeMaxAnnees ?? 40;

	const handleNumberChange = (field: keyof EpargneFormData, value: number) => {
		const sanitizedValue = field === 'horizonAnnees'
			? Math.min(horizonMax, Math.max(0, Number.isFinite(value) ? value : 0))
			: Number.isFinite(value) && value >= 0 ? value : 0;

		onChange({
			...formData,
			[field]: sanitizedValue
		});
	};

	const handleProduitChange = (produitId: ProduitEpargneId) => {
		const produit = PRODUITS_EPARGNE.find((item) => item.id === produitId);
		if (!produit) return;
		const tauxProduit = produit.id === 'pea'
			? PEA_PROFILS[formData.peaProfil].tauxIndicatif
			: produit.tauxIndicatif;

		onChange({
			...formData,
			produitSelectionne: produitId,
			tauxAnnuel: tauxProduit,
			horizonAnnees: Math.min(formData.horizonAnnees, produit.dureeMaxAnnees ?? 40)
		});
	};

	const tauxAfficheProduit = selectedProduit
		? selectedProduit.id === 'pea'
			? PEA_PROFILS[formData.peaProfil].tauxIndicatif
			: selectedProduit.tauxIndicatif
		: 0;

	return (
		<div className="bg-white rounded-lg shadow-sm p-6">
			<h2 className="text-xl font-bold text-gray-900 mb-6">
				Paramètres de simulation
			</h2>

			<div className="space-y-6">
				<div>
					<label htmlFor="capitalDepart" className="block text-sm font-medium text-gray-700 mb-2">
						Capital de départ
					</label>
					<div className="relative">
						<input
							type="number"
							id="capitalDepart"
							min="0"
							step="100"
							value={formData.capitalDepart || ''}
							onChange={(e) => handleNumberChange('capitalDepart', parseFloat(e.target.value) || 0)}
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
						/>
						<span className="absolute right-4 top-3 text-gray-500 font-medium">EUR</span>
					</div>
				</div>

				<div>
					<label htmlFor="ajoutPeriodique" className="block text-sm font-medium text-gray-700 mb-2">
						Ajout périodique
					</label>
					<div className="relative">
						<input
							type="number"
							id="ajoutPeriodique"
							min="0"
							step="10"
							value={formData.ajoutPeriodique || ''}
							onChange={(e) => handleNumberChange('ajoutPeriodique', parseFloat(e.target.value) || 0)}
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
						/>
						<span className="absolute right-4 top-3 text-gray-500 font-medium">EUR</span>
					</div>
				</div>

				<div>
					<label htmlFor="frequenceVersement" className="block text-sm font-medium text-gray-700 mb-2">
						Fréquence d'ajout
					</label>
					<select
						id="frequenceVersement"
						value={formData.frequenceVersement}
						onChange={(e) => onChange({ ...formData, frequenceVersement: e.target.value as FrequenceVersement })}
						className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
					>
						{Object.entries(FREQUENCES).map(([key, value]) => (
							<option key={key} value={key}>
								{value.label}
							</option>
						))}
					</select>
				</div>

				<div>
					<label htmlFor="horizonAnnees" className="block text-sm font-medium text-gray-700 mb-2">
						Horizon de simulation
					</label>
					<div className="relative">
						<input
							type="number"
							id="horizonAnnees"
							min="0"
							max={horizonMax}
							value={formData.horizonAnnees || ''}
							onChange={(e) => handleNumberChange('horizonAnnees', parseFloat(e.target.value) || 0)}
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
						/>
						<span className="absolute right-4 top-3 text-gray-500 font-medium">ans</span>
					</div>
					<p className="text-xs text-gray-500 mt-2">
						Horizon maximal autorisé pour ce produit: {horizonMax} ans.
					</p>
				</div>

				<div className="pt-4 border-t border-gray-200">
					<label className="block text-sm font-medium text-gray-700 mb-3">
						Choix du rendement
					</label>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
						<button
							type="button"
							onClick={() => onChange({ ...formData, modeRendement: 'produit' })}
							className={`p-3 rounded-lg border-2 text-left transition-all ${
								formData.modeRendement === 'produit'
									? 'border-yellow-500 bg-yellow-50 text-yellow-900'
									: 'border-gray-200 hover:border-gray-300'
							}`}
						>
							<div className="font-semibold text-sm">Produit connu</div>
							<div className="text-xs text-gray-600">Taux indicatif et infos pédagogiques</div>
						</button>
						<button
							type="button"
							onClick={() => onChange({ ...formData, modeRendement: 'taux' })}
							className={`p-3 rounded-lg border-2 text-left transition-all ${
								formData.modeRendement === 'taux'
									? 'border-yellow-500 bg-yellow-50 text-yellow-900'
									: 'border-gray-200 hover:border-gray-300'
							}`}
						>
							<div className="font-semibold text-sm">Taux personnalisé</div>
							<div className="text-xs text-gray-600">Vous saisissez votre hypothèse annuelle</div>
						</button>
					</div>
				</div>

				{formData.modeRendement === 'taux' ? (
					<div>
						<label htmlFor="tauxAnnuel" className="block text-sm font-medium text-gray-700 mb-2">
							Taux de rendement annuel
						</label>
						<div className="relative">
							<input
								type="number"
								id="tauxAnnuel"
								min="0"
								max="20"
								step="0.1"
								value={formData.tauxAnnuel || ''}
								onChange={(e) => handleNumberChange('tauxAnnuel', parseFloat(e.target.value) || 0)}
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
							/>
							<span className="absolute right-4 top-3 text-gray-500 font-medium">%</span>
						</div>
					</div>
				) : (
					<div>
						<label htmlFor="produitSelectionne" className="block text-sm font-medium text-gray-700 mb-2">
							Sélection de produit d'épargne
						</label>
						<select
							id="produitSelectionne"
							value={formData.produitSelectionne}
							onChange={(e) => handleProduitChange(e.target.value as ProduitEpargneId)}
							className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
						>
							{PRODUITS_EPARGNE.map((produit) => (
								<option key={produit.id} value={produit.id}>
									{produit.nom} ({produit.tauxIndicatif.toFixed(2)}% indicatif)
								</option>
							))}
						</select>

						{selectedProduit && (
							<div className="mt-3 p-3 rounded-lg bg-blue-50 border border-blue-200">
								<div className="text-sm text-blue-900 font-medium">{selectedProduit.nom}</div>
								<div className="text-xs text-blue-800 mt-1">{selectedProduit.description}</div>
								<div className="text-xs text-blue-800 mt-1">
									Taux utilisé dans la simulation : <strong>{tauxAfficheProduit.toFixed(2)}%</strong>
								</div>
							</div>
						)}

						{selectedProduit?.id === 'pea' && (
							<div className="mt-3">
								<label htmlFor="peaProfil" className="block text-sm font-medium text-gray-700 mb-2">
									Profil de risque du PEA
								</label>
								<select
									id="peaProfil"
									value={formData.peaProfil}
									onChange={(e) => {
										const nextProfil = e.target.value as PeaProfilRisque;
										onChange({
											...formData,
											peaProfil: nextProfil,
											tauxAnnuel: PEA_PROFILS[nextProfil].tauxIndicatif
										});
									}}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
								>
									{Object.entries(PEA_PROFILS).map(([key, profil]) => (
										<option key={key} value={key}>
											{profil.label} ({profil.tauxIndicatif.toFixed(2)}%)
										</option>
									))}
								</select>
								<p className="text-xs text-gray-600 mt-2">
									{PEA_PROFILS[formData.peaProfil].description}
								</p>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
}
