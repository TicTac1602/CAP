'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'À quel âge dois-je commencer à déclarer mes impôts ?',
    answer: 'Vous devez déclarer vos impôts dès que vous percevez des revenus, même en étant étudiant. Si vous habitez encore chez vos parents et avez moins de 25 ans, vous pouvez être rattaché à leur foyer fiscal, mais ce n\'est pas obligatoire.',
    category: 'Administration'
  },
  {
    id: '2',
    question: 'Comment choisir ma première mutuelle ?',
    answer: 'Comparez les garanties proposées (remboursement dentaire, optique, hospitalisation), les tarifs, et vérifiez si votre employeur propose une mutuelle d\'entreprise obligatoire. Les mutuelles étudiantes ou jeunes actifs offrent souvent des tarifs préférentiels.',
    category: 'Santé'
  },
  {
    id: '3',
    question: 'Qu\'est-ce que le dépôt de garantie et combien ça coûte ?',
    answer: 'Le dépôt de garantie est une somme versée au propriétaire lors de la signature du bail. Il ne peut pas dépasser 1 mois de loyer hors charges pour un logement vide, ou 2 mois pour un meublé. Il vous sera rendu à la fin du bail, déduction faite d\'éventuels frais de réparation.',
    category: 'Logement'
  },
  {
    id: '4',
    question: 'Comment ouvrir mon premier compte bancaire ?',
    answer: 'Il vous faut une pièce d\'identité, un justificatif de domicile, et éventuellement un justificatif de revenus. Comparez les banques traditionnelles et en ligne, les frais de tenue de compte, et les services proposés (carte bancaire, découvert autorisé).',
    category: 'Banque'
  },
  {
    id: '5',
    question: 'Suis-je obligé d\'avoir une assurance auto ?',
    answer: 'Oui, l\'assurance responsabilité civile (au tiers) est obligatoire pour conduire, même occasionnellement. Sans assurance, vous risquez une amende de 3750€, la suspension de permis et la confiscation du véhicule.',
    category: 'Assurances'
  },
  {
    id: '6',
    question: 'Comment savoir si j\'ai droit aux APL ?',
    answer: 'Les APL dépendent de vos revenus, de votre situation familiale, et du type de logement. Utilisez le simulateur sur caf.fr pour connaître vos droits. La demande doit être faite dès l\'entrée dans le logement.',
    category: 'Logement'
  },
  {
    id: '7',
    question: 'Que faire si je n\'ai pas de médecin traitant ?',
    answer: 'Vous pouvez consulter n\'importe quel médecin, mais vous serez moins bien remboursé. Choisissez un médecin généraliste près de chez vous et déclarez-le comme médecin traitant sur ameli.fr ou lors d\'une consultation.',
    category: 'Santé'
  },
  {
    id: '8',
    question: 'Comment créer un budget quand on a des revenus irréguliers ?',
    answer: 'Basez-vous sur vos revenus minimums garantis. Constituez un fonds d\'urgence les bons mois. Priorisez les charges fixes (logement, assurances) et ajustez les dépenses variables selon vos rentrées d\'argent.',
    category: 'Budget'
  }
];

const categories = ['Tous', 'Administration', 'Santé', 'Logement', 'Banque', 'Assurances', 'Budget'];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [openItems, setOpenItems] = useState<string[]>([]);

  const filteredFAQ = activeCategory === 'Tous' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* En-tête */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Questions fréquentes</h1>
          <p className="text-xl text-gray-600">
            Les réponses aux questions les plus courantes des jeunes adultes
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Filtrer par thème</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Liste des FAQ */}
        <div className="space-y-4">
          {filteredFAQ.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded mr-3">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.question}
                    </h3>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-400 transition-transform ${
                      openItems.includes(item.id) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openItems.includes(item.id) && (
                <div className="px-6 pb-6">
                  <div className="border-t pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Section contact */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Vous ne trouvez pas la réponse à votre question ?
          </h2>
          <p className="text-gray-600 mb-6">
            N&apos;hésitez pas à consulter nos guides détaillés ou les sites officiels
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#themes"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Voir tous les guides
            </Link>
            <a
              href="https://www.service-public.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Service Public.fr
            </a>
          </div>
        </div>

        {/* Suggestions d'amélioration */}
        <div className="mt-8 bg-gray-100 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            💡 Aidez-nous à améliorer cette FAQ
          </h3>
          <p className="text-gray-600 text-sm">
            Cette FAQ évolue constamment. Si vous avez des suggestions de questions 
            à ajouter ou des améliorations à proposer, n&apos;hésitez pas à nous le faire savoir.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}