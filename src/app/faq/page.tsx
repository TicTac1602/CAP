'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { faqCategories, getFAQByCategory } from '@/data/faq';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [openItems, setOpenItems] = useState<string[]>([]);

  const filteredFAQ = getFAQByCategory(activeCategory);

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
            {faqCategories.map((category) => (
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