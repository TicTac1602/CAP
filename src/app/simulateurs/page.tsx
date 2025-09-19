'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface BudgetData {
  revenus: {
    salaire: number;
    aides: number;
    autres: number;
  };
  charges: {
    logement: number;
    alimentation: number;
    transport: number;
    sante: number;
    loisirs: number;
    autres: number;
  };
}

export default function SimulateursPage() {
  const [budgetData, setBudgetData] = useState<BudgetData>({
    revenus: {
      salaire: 0,
      aides: 0,
      autres: 0
    },
    charges: {
      logement: 0,
      alimentation: 0,
      transport: 0,
      sante: 0,
      loisirs: 0,
      autres: 0
    }
  });

  const totalRevenus = Object.values(budgetData.revenus).reduce((sum, val) => sum + val, 0);
  const totalCharges = Object.values(budgetData.charges).reduce((sum, val) => sum + val, 0);
  const solde = totalRevenus - totalCharges;

  const updateRevenu = (type: keyof BudgetData['revenus'], value: string) => {
    setBudgetData(prev => ({
      ...prev,
      revenus: {
        ...prev.revenus,
        [type]: parseFloat(value) || 0
      }
    }));
  };

  const updateCharge = (type: keyof BudgetData['charges'], value: string) => {
    setBudgetData(prev => ({
      ...prev,
      charges: {
        ...prev.charges,
        [type]: parseFloat(value) || 0
      }
    }));
  };

  const getAdvice = () => {
    if (solde > 0) {
      if (solde > totalRevenus * 0.2) {
        return {
          type: 'success',
          message: 'Excellent ! Vous avez une bonne capacité d\'épargne. Pensez à constituer une épargne de précaution.',
          icon: '🎉'
        };
      } else {
        return {
          type: 'success',
          message: 'Bien ! Votre budget est équilibré avec un petit surplus.',
          icon: '✅'
        };
      }
    } else if (solde === 0) {
      return {
        type: 'warning',
        message: 'Votre budget est équilibré, mais sans marge. Essayez de dégager une épargne de précaution.',
        icon: '⚖️'
      };
    } else {
      return {
        type: 'danger',
        message: 'Attention ! Vos charges dépassent vos revenus. Il faut réduire certaines dépenses.',
        icon: '⚠️'
      };
    }
  };

  const advice = getAdvice();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* En-tête */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Simulateurs</h1>
          <p className="text-xl text-gray-600">Calculez et planifiez votre budget personnel</p>
        </div>

        {/* Simulateur de budget */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📊 Simulateur de budget mensuel</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Revenus */}
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-4">💰 Revenus</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Salaire net mensuel
                  </label>
                  <input
                    type="number"
                    value={budgetData.revenus.salaire || ''}
                    onChange={(e) => updateRevenu('salaire', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Aides (APL, bourses...)
                  </label>
                  <input
                    type="number"
                    value={budgetData.revenus.aides || ''}
                    onChange={(e) => updateRevenu('aides', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Autres revenus
                  </label>
                  <input
                    type="number"
                    value={budgetData.revenus.autres || ''}
                    onChange={(e) => updateRevenu('autres', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between font-semibold text-green-600">
                    <span>Total revenus:</span>
                    <span>{totalRevenus.toFixed(2)} €</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Charges */}
            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-4">💸 Charges</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Logement (loyer, charges)
                  </label>
                  <input
                    type="number"
                    value={budgetData.charges.logement || ''}
                    onChange={(e) => updateCharge('logement', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Alimentation
                  </label>
                  <input
                    type="number"
                    value={budgetData.charges.alimentation || ''}
                    onChange={(e) => updateCharge('alimentation', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Transport
                  </label>
                  <input
                    type="number"
                    value={budgetData.charges.transport || ''}
                    onChange={(e) => updateCharge('transport', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Santé (mutuelle, médecin)
                  </label>
                  <input
                    type="number"
                    value={budgetData.charges.sante || ''}
                    onChange={(e) => updateCharge('sante', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Loisirs
                  </label>
                  <input
                    type="number"
                    value={budgetData.charges.loisirs || ''}
                    onChange={(e) => updateCharge('loisirs', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Autres charges
                  </label>
                  <input
                    type="number"
                    value={budgetData.charges.autres || ''}
                    onChange={(e) => updateCharge('autres', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between font-semibold text-red-600">
                    <span>Total charges:</span>
                    <span>{totalCharges.toFixed(2)} €</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Résultats */}
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-4">📈 Résultats</h3>
              
              {/* Solde */}
              <div className={`p-6 rounded-lg mb-6 ${
                solde > 0 ? 'bg-green-50 border border-green-200' :
                solde === 0 ? 'bg-yellow-50 border border-yellow-200' :
                'bg-red-50 border border-red-200'
              }`}>
                <div className="text-center">
                  <div className={`text-3xl font-bold mb-2 ${
                    solde > 0 ? 'text-green-600' :
                    solde === 0 ? 'text-yellow-600' :
                    'text-red-600'
                  }`}>
                    {solde > 0 ? '+' : ''}{solde.toFixed(2)} €
                  </div>
                  <div className="text-sm text-gray-600">
                    {solde > 0 ? 'Épargne possible' : solde === 0 ? 'Budget équilibré' : 'Déficit'}
                  </div>
                </div>
              </div>

              {/* Conseil */}
              <div className={`p-4 rounded-lg mb-6 ${
                advice.type === 'success' ? 'bg-green-50 border border-green-200' :
                advice.type === 'warning' ? 'bg-yellow-50 border border-yellow-200' :
                'bg-red-50 border border-red-200'
              }`}>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">{advice.icon}</span>
                  <div>
                    <h4 className="font-semibold mb-1">Conseil</h4>
                    <p className="text-sm">{advice.message}</p>
                  </div>
                </div>
              </div>

              {/* Répartition recommandée */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold mb-3">💡 Répartition recommandée</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Logement:</span>
                    <span>≤ 30% des revenus</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Alimentation:</span>
                    <span>≤ 20% des revenus</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transport:</span>
                    <span>≤ 15% des revenus</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Épargne:</span>
                    <span>≥ 10% des revenus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Autres simulateurs à venir */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Autres simulateurs (bientôt disponibles)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg opacity-50">
                <h4 className="font-semibold text-gray-700">🧮 Simulateur d&apos;impôts</h4>
                <p className="text-sm text-gray-600">Estimez votre impôt sur le revenu</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg opacity-50">
                <h4 className="font-semibold text-gray-700">🏠 Simulateur de capacité d&apos;emprunt</h4>
                <p className="text-sm text-gray-600">Calculez votre capacité d&apos;achat immobilier</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}