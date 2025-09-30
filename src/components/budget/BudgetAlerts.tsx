import { BudgetCalculations } from '@/types';

interface BudgetAlertsProps {
	calculations: BudgetCalculations;
}

export function BudgetAlerts({ calculations }: BudgetAlertsProps) {
	const alerts = [];

	// Alerte critique : Dépenses supérieures aux revenus
	if (calculations.solde < 0) {
		alerts.push({
			type: 'danger',
			title: '🚨 Budget déficitaire !',
			message: `Vos dépenses dépassent vos revenus de ${Math.abs(calculations.solde).toFixed(2)} €. Il est urgent de réduire vos dépenses ou d'augmenter vos revenus.`,
			priority: 1
		});
	}

	// Alerte importante : Pas d'épargne possible
	if (calculations.solde >= 0 && calculations.solde < 50 && calculations.pourcentageEpargne < 20) {
		alerts.push({
			type: 'warning',
			title: '⚠️ Épargne insuffisante',
			message: `Il ne vous reste que ${calculations.solde.toFixed(2)} € après vos dépenses. Vous ne pouvez pas constituer d'épargne de sécurité en cas d'imprévu.`,
			priority: 2
		});
	}

	// Alerte charges fixes trop importantes
	if (calculations.pourcentageChargesFixes > 50) {
		alerts.push({
			type: 'warning',
			title: '🏠 Charges fixes trop élevées',
			message: `Vos charges fixes représentent ${calculations.pourcentageChargesFixes.toFixed(1)}% de vos revenus (recommandé: 50% max). Cela réduit votre flexibilité financière.`,
			priority: 2
		});
	}

	// Alerte pas d'épargne du tout
	if (calculations.epargneTotal === 0 && calculations.solde > 0) {
		alerts.push({
			type: 'info',
			title: '💰 Pensez à épargner',
			message: `Vous pourriez épargner ${calculations.solde.toFixed(2)} € par mois. Constituez d'abord une épargne de sécurité de 3-6 mois de charges.`,
			priority: 3
		});
	}

	// Alerte bon équilibre
	if (calculations.solde > 0 && calculations.pourcentageChargesFixes <= 50 && calculations.epargneTotal > 0) {
		alerts.push({
			type: 'success',
			title: '✅ Budget équilibré',
			message: `Félicitations ! Votre budget respecte les bonnes pratiques. Continuez sur cette voie !`,
			priority: 4
		});
	}

	// Trier les alertes par priorité
	alerts.sort((a, b) => a.priority - b.priority);

	const getAlertClass = (type: string) => {
		switch (type) {
			case 'danger':
				return 'bg-red-50 border-red-200 text-red-800';
			case 'warning':
				return 'bg-yellow-50 border-yellow-200 text-yellow-800';
			case 'info':
				return 'bg-blue-50 border-blue-200 text-blue-800';
			case 'success':
				return 'bg-green-50 border-green-200 text-green-800';
			default:
				return 'bg-gray-50 border-gray-200 text-gray-800';
		}
	};

	if (alerts.length === 0) {
		return (
			<div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
				<div className="text-center text-gray-600">
					<p className="text-sm">
						Remplissez votre budget pour recevoir des conseils personnalisés
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className="space-y-4">
			<h3 className="text-lg font-semibold text-gray-900">
				🚨 Analyse de votre budget
			</h3>

			{alerts.map((alert, index) => (
				<div
					key={index}
					className={`border rounded-lg p-4 ${getAlertClass(alert.type)}`}
				>
					<h4 className="font-medium mb-2">{alert.title}</h4>
					<p className="text-sm">{alert.message}</p>
				</div>
			))}

			{/* Conseils généraux */}
			<div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
				<h4 className="font-medium text-indigo-800 mb-2">💡 Règle 50-30-20 rappel</h4>
				<div className="text-sm text-indigo-700 space-y-1">
					<p>• <strong>50%</strong> : Besoins essentiels (loyer, assurances, transports...)</p>
					<p>• <strong>30%</strong> : Envies et loisirs (sorties, hobbies, vêtements...)</p>
					<p>• <strong>20%</strong> : Épargne et investissements (urgence, retraite, projets...)</p>
				</div>
			</div>
		</div>
	);
}