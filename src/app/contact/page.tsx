import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
	return (
		<div className="min-h-screen">
			<Header />

			<main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="text-center mb-12">
					<h1 className="text-3xl font-bold text-gray-900 mb-4">
						Contactez-nous
					</h1>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Une question ? Une suggestion d&apos;amélioration ? Nous sommes là pour vous aider !
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Section Email */}
					<div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
						<div className="text-center">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">📧</span>
							</div>
							<h2 className="text-xl font-semibold text-gray-900 mb-3">
								Email
							</h2>
							<p className="text-gray-600 mb-6">
								Pour toute question, suggestion ou signalement de problème
							</p>
							<a
								href="mailto:contact.capadulte@gmail.com"
								className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium"
							>
								Contactez-nous !
							</a>
							<span className="text-sm text-gray-500 mt-2 block">
								contact.capadulte@gmail.com
							</span>
						</div>
					</div>

					{/* Section Réseaux Sociaux */}
					<div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
						<div className="text-center">
							<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">🌐</span>
							</div>
							<h2 className="text-xl font-semibold text-gray-900 mb-3">
								Suivez-nous
							</h2>
							<p className="text-gray-600 mb-6">
								Restez informés des nouveautés et améliorations
							</p>

							{/* Liens sociaux */}
							<div className="flex flex-col gap-3">
								<a
									href="https://github.com/TicTac1602/CAP"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-3 px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
								>
									<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
									</svg>
									<span className="flex-1 text-left">
										<div className="font-medium">GitHub</div>
										<div className="text-sm text-gray-300">Contribuer au projet</div>
									</span>
								</a>

								<a
									href="https://instagram.com/"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
								>
									<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
									</svg>
									<span className="flex-1 text-left">
										<div className="font-medium">Instagram</div>
										<div className="text-sm text-pink-100">Présentation et communauté</div>
									</span>
								</a>

								<a
									href="https://linkedin.com/company/"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-3 px-4 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
								>
									<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
									</svg>
									<span className="flex-1 text-left">
										<div className="font-medium">LinkedIn</div>
										<div className="text-sm text-blue-200">Réseau professionnel</div>
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
