'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { faqCategories, getFAQByCategory } from '@/data/faq';

export default function FAQPage() {
	const [activeCategory, setActiveCategory] = useState('Tous');

	const filteredFAQ = getFAQByCategory(activeCategory);

	return (
		<div className="min-h-screen">
			<Header />

			<main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{/* En-tête */}
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-gray-900 mb-4">Questions fréquentes</h1>
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
								aria-pressed={activeCategory === category}
								className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeCategory === category
									? 'bg-blue-700 text-white'
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
						<details key={item.id} className="group bg-white rounded-lg shadow-md overflow-hidden">
							<summary
								className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors cursor-pointer list-none focus-visible:outline-2 focus-visible:outline-blue-700 focus-visible:outline-offset-[-2px]"
							>
								<div className="flex justify-between items-center">
									<div className="flex-1">
										<div className="flex items-center mb-2">
											<span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded mr-3">
												{item.category}
											</span>
										</div>
										<h3 className="text-lg font-semibold text-gray-900">
											{item.question}
										</h3>
									</div>
									<svg
										className="w-6 h-6 text-gray-400 transition-transform group-open:rotate-180 shrink-0"
										aria-hidden="true"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
									</svg>
								</div>
							</summary>
							<div className="px-6 pb-6">
								<div className="border-t pt-4">
									<p className="text-gray-600 leading-relaxed">
										{item.answer}
									</p>
								</div>
							</div>
						</details>
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
							href="/guide"
							className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
						>
							Voir tous les guides
						</Link>
						<Link
							href="https://www.service-public.fr"
							target="_blank"
							rel="noopener noreferrer"
							className="px-6 py-3 border border-blue-700 text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
						>
							Service Public.fr
						</Link>
					</div>
				</div>

				{/* Suggestions d'amélioration */}
				<div className="mt-8 bg-gray-100 rounded-lg p-6">
					<h3 className="text-lg font-semibold text-gray-900 mb-2">
						Aidez-nous à améliorer cette FAQ
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