import { BudgetCalculations } from '@/app/simulateurs/budget/page';

interface BudgetResultsProps {
	calculations: BudgetCalculations;
}

export function BudgetResults({ calculations }: BudgetResultsProps) {
	const formatEuro = (amount: number) => {
		return new Intl.NumberFormat('fr-FR', {
			style: 'currency',
			currency: 'EUR',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		}).format(amount);
	};

	const ProgressBar = ({
		current,
		recommended,
		total,
		color,
		label
	}: {
		current: number;
		recommended: number;
		total: number;
		color: string;
		label: string;
	}) => {
		const currentPercentage = total > 0 ? (current / total) * 100 : 0;
		const recommendedPercentage = total > 0 ? (recommended / total) * 100 : 0;

		return (
			<div className="mb-4">
				<div className="flex justify-between text-sm mb-2">
					<span className="font-medium text-gray-700">{label}</span>
					<span className="text-gray-600">
						{formatEuro(current)} / {formatEuro(recommended)} recommandé
					</span>
				</div>
				<div className="w-full bg-gray-200 rounded-full h-4 relative">
					{/* Barre de progression actuelle */}
					<div
						className={`h-4 rounded-full ${color} transition-all duration-500`}
						style={{ width: `${Math.min(currentPercentage, 100)}%` }}
					></div>
					{/* Indicateur recommandé */}
					<div
						className="absolute top-0 h-4 w-1 bg-gray-600 rounded"
						style={{ left: `${Math.min(recommendedPercentage, 100)}%` }}
					></div>
				</div>
				<div className="flex justify-between text-xs text-gray-500 mt-1">
					<span>{currentPercentage.toFixed(1)}%</span>
					<span className="text-gray-600">│ {recommendedPercentage}% recommandé</span>
				</div>
			</div>
		);
	};

	const CircularProgress = ({ percentage, color, size = 120 }: {
		percentage: number;
		color: string;
		size?: number;
	}) => {
		const radius = (size - 8) / 2;
		const circumference = radius * 2 * Math.PI;
		const strokeDasharray = circumference;
		const strokeDashoffset = circumference - (Math.min(percentage, 100) / 100) * circumference;

		return (
			<div className="relative" style={{ width: size, height: size }}>
				<svg className="transform -rotate-90" width={size} height={size}>
					<circle
						cx={size / 2}
						cy={size / 2}
						r={radius}
						stroke="currentColor"
						strokeWidth="8"
						fill="transparent"
						className="text-gray-200"
					/>
					<circle
						cx={size / 2}
						cy={size / 2}
						r={radius}
						stroke="currentColor"
						strokeWidth="8"
						fill="transparent"
						strokeDasharray={strokeDasharray}
						strokeDashoffset={strokeDashoffset}
						className={color}
						style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
					/>
				</svg>
				<div className="absolute inset-0 flex items-center justify-center">
					<span className="text-xl font-bold text-gray-700">
						{percentage.toFixed(0)}%
					</span>
				</div>
			</div>
		);
	};

	if (calculations.revenuTotal === 0) {
		return (
			<div className="bg-white rounded-lg shadow-md p-6">
				<h3 className="text-lg font-semibold text-gray-900 mb-4">
					📈 Analyse de votre budget
				</h3>
				<div className="text-center text-gray-600 py-8">
					<p>Saisissez vos revenus pour voir l&apos;analyse</p>
				</div>
			</div>
		);
	}

	return (
		<div className="bg-white rounded-lg shadow-md p-6">
			<h3 className="text-lg font-semibold text-gray-900 mb-6">
				📈 Analyse de votre budget
			</h3>

			{/* Résumé global */}
			<div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
				<div className="text-center">
					<div className="text-2xl font-bold text-green-600">
						{formatEuro(calculations.revenuTotal)}
					</div>
					<div className="text-sm text-gray-600">Revenus mensuels</div>
				</div>
				<div className="text-center">
					<div className={`text-2xl font-bold ${calculations.solde >= 0 ? 'text-green-600' : 'text-red-600'}`}>
						{formatEuro(calculations.solde)}
					</div>
					<div className="text-sm text-gray-600">
						{calculations.solde >= 0 ? 'Reste à épargner' : 'Déficit'}
					</div>
				</div>
			</div>

			{/* Graphiques circulaires */}
			<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
				<div className="text-center flex flex-col items-center">
					<CircularProgress
						percentage={calculations.pourcentageChargesFixes}
						color="text-red-500"
					/>
					<div className="mt-2">
						<div className="font-medium text-gray-700">Charges fixes</div>
						<div className="text-sm text-gray-600">{formatEuro(calculations.chargesFixes)}</div>
						<div className="text-xs text-gray-500">Max 50%</div>
					</div>
				</div>

				<div className="text-center flex flex-col items-center">
					<CircularProgress
						percentage={calculations.pourcentageFlexible}
						color="text-orange-500"
					/>
					<div className="mt-2">
						<div className="font-medium text-gray-700">Dépenses flexibles</div>
						<div className="text-sm text-gray-600">{formatEuro(calculations.depensesFlexibles)}</div>
						<div className="text-xs text-gray-500">Idéal 30%</div>
					</div>
				</div>

				<div className="text-center flex flex-col items-center">
					<CircularProgress
						percentage={calculations.pourcentageEpargne}
						color="text-blue-500"
					/>
					<div className="mt-2">
						<div className="font-medium text-gray-700">Épargne</div>
						<div className="text-sm text-gray-600">{formatEuro(calculations.epargneTotal)}</div>
						<div className="text-xs text-gray-500">Idéal 20%</div>
					</div>
				</div>
			</div>

			{/* Barres de progression détaillées */}
			<div className="space-y-6">
				<h4 className="font-medium text-gray-700 border-b pb-2">
					Comparaison avec les recommandations 50-30-20
				</h4>

				<ProgressBar
					current={calculations.chargesFixes}
					recommended={calculations.recommandeChargesFixes}
					total={calculations.revenuTotal}
					color={calculations.pourcentageChargesFixes > 50 ? 'bg-red-500' : 'bg-red-400'}
					label="Charges fixes (50% max)"
				/>

				<ProgressBar
					current={calculations.depensesFlexibles}
					recommended={calculations.recommandeFlexible}
					total={calculations.revenuTotal}
					color="bg-orange-400"
					label="Dépenses flexibles (30% idéal)"
				/>

				<ProgressBar
					current={calculations.epargneTotal}
					recommended={calculations.recommandeEpargne}
					total={calculations.revenuTotal}
					color={calculations.pourcentageEpargne < 20 ? 'bg-blue-300' : 'bg-blue-500'}
					label="Épargne (20% min)"
				/>
			</div>

			{/* Conseils personnalisés */}
			<div className="mt-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
				<h4 className="font-medium text-indigo-800 mb-2">💡 Conseils pour optimiser votre budget</h4>
				<ul className="text-sm text-indigo-700 space-y-1">
					{calculations.pourcentageChargesFixes > 50 && (
						<li>• Réduisez vos charges fixes : négociez vos assurances, changez de banque, ou déménagez</li>
					)}
					{calculations.pourcentageEpargne < 20 && calculations.solde > 0 && (
						<li>• Augmentez votre épargne pour atteindre 20% minimum de vos revenus</li>
					)}
					{calculations.pourcentageFlexible > 35 && (
						<li>• Réduisez vos dépenses de loisirs et sorties pour rééquilibrer votre budget</li>
					)}
					{calculations.solde < 0 && (
						<li>• Situation critique : réduisez immédiatement vos dépenses ou augmentez vos revenus</li>
					)}
				</ul>
			</div>
		</div>
	);
}