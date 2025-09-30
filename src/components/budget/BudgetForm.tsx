import { Dispatch, SetStateAction, useCallback, memo } from 'react';
import { BudgetData } from '@/types';

interface BudgetFormProps {
	budgetData: BudgetData;
	setBudgetData: Dispatch<SetStateAction<BudgetData>>;
}

// Composant InputField mémorisé pour éviter les re-renders inutiles
const InputField = memo(({
	label,
	placeholder = "0",
	value,
	onChange
}: {
	label: string;
	placeholder?: string;
	value: number;
	onChange: (value: number) => void;
}) => (
	<div className="mb-4">
		<label className="block text-sm font-medium text-gray-700 mb-2">
			{label}
		</label>
		<input
			type="number"
			min="0"
			step="0.01"
			placeholder={placeholder}
			value={value || ''}
			onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
			className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
		/>
	</div>
));

InputField.displayName = 'InputField';

export function BudgetForm({ budgetData, setBudgetData }: BudgetFormProps) {
	const updateField = useCallback((field: keyof BudgetData, value: number) => {
		setBudgetData(prev => ({
			...prev,
			[field]: value
		}));
	}, [setBudgetData]); return (
		<div className="bg-white rounded-lg shadow-md p-6">
			<h2 className="text-xl font-semibold text-gray-900 mb-6">
				📊 Saisie de votre budget
			</h2>

			{/* Revenus */}
			<div className="mb-8">
				<h3 className="text-lg font-medium text-green-700 mb-4 flex items-center">
					💰 Revenus mensuels
				</h3>
				<div className="bg-green-50 border border-green-200 rounded-lg p-4">
					<InputField
						label="Salaire net mensuel"
						placeholder="2500"
						value={budgetData.salaire}
						onChange={(value) => updateField('salaire', value)}
					/>
					<InputField
						label="Autres revenus (freelance, loyers, etc.)"
						placeholder="300"
						value={budgetData.autresRevenus}
						onChange={(value) => updateField('autresRevenus', value)}
					/>
				</div>
			</div>

			{/* Charges fixes */}
			<div className="mb-8">
				<h3 className="text-lg font-medium text-red-700 mb-4 flex items-center">
					🏠 Charges fixes
					<span className="text-sm font-normal text-gray-600 ml-2">(max 50% recommandé)</span>
				</h3>
				<div className="bg-red-50 border border-red-200 rounded-lg p-4">
					<InputField
						label="Loyer/Emprunt immobilier"
						placeholder="800"
						value={budgetData.loyer}
						onChange={(value) => updateField('loyer', value)}
					/>
					<InputField
						label="Assurances (auto, habitation, santé)"
						placeholder="150"
						value={budgetData.assurances}
						onChange={(value) => updateField('assurances', value)}
					/>
					<InputField
						label="Abonnements (téléphone, internet, électricité)"
						placeholder="100"
						value={budgetData.abonnements}
						onChange={(value) => updateField('abonnements', value)}
					/>
					<InputField
						label="Transport (essence, transports publics)"
						placeholder="200"
						value={budgetData.transport}
						onChange={(value) => updateField('transport', value)}
					/>
					<InputField
						label="Autres charges fixes"
						placeholder="50"
						value={budgetData.autresChargesFixes}
						onChange={(value) => updateField('autresChargesFixes', value)}
					/>
				</div>
			</div>

			{/* Dépenses flexibles */}
			<div className="mb-8">
				<h3 className="text-lg font-medium text-orange-700 mb-4 flex items-center">
					🛒 Dépenses flexibles
					<span className="text-sm font-normal text-gray-600 ml-2">(30% recommandé)</span>
				</h3>
				<div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
					<InputField
						label="Alimentation et courses"
						placeholder="400"
						value={budgetData.alimentation}
						onChange={(value) => updateField('alimentation', value)}
					/>
					<InputField
						label="Loisirs et hobbies"
						placeholder="200"
						value={budgetData.loisirs}
						onChange={(value) => updateField('loisirs', value)}
					/>
					<InputField
						label="Vêtements et beauté"
						placeholder="100"
						value={budgetData.vetements}
						onChange={(value) => updateField('vetements', value)}
					/>
					<InputField
						label="Sorties et restaurants"
						placeholder="150"
						value={budgetData.sorties}
						onChange={(value) => updateField('sorties', value)}
					/>
					<InputField
						label="Autres dépenses flexibles"
						placeholder="50"
						value={budgetData.autresDepensesFlexibles}
						onChange={(value) => updateField('autresDepensesFlexibles', value)}
					/>
				</div>
			</div>

			{/* Épargne et placements */}
			<div className="mb-6">
				<h3 className="text-lg font-medium text-blue-700 mb-4 flex items-center">
					💎 Épargne et placements
					<span className="text-sm font-normal text-gray-600 ml-2">(20% recommandé)</span>
				</h3>
				<div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
					<InputField
						label="Épargne de sécurité"
						placeholder="300"
						value={budgetData.epargneUrgence}
						onChange={(value) => updateField('epargneUrgence', value)}
					/>
					<InputField
						label="Placements et investissements"
						placeholder="200"
						value={budgetData.placements}
						onChange={(value) => updateField('placements', value)}
					/>
					<InputField
						label="Remboursement de dettes"
						placeholder="100"
						value={budgetData.remboursementDettes}
						onChange={(value) => updateField('remboursementDettes', value)}
					/>
				</div>
			</div>
		</div>
	);
}