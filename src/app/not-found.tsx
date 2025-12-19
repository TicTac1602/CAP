import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="min-h-screen flex flex-col">
			<main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
				<div className="max-w-lg w-full text-center">
					{/* Icône 404 */}
					<div className="mb-8">
						<div className="text-6xl md:text-8xl font-bold text-blue-700 mb-4">
							404
						</div>
						<div className="w-24 h-1 bg-blue-700 mx-auto rounded-full"></div>
					</div>

					{/* Message principal */}
					<h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
						Page non trouvée
					</h1>
					
					<p className="text-lg text-gray-600 mb-8 leading-relaxed">
						Oops ! La page que vous cherchez semble avoir disparu. 
						Elle a peut-être été déplacée ou supprimée.
					</p>

					{/* Boutons d'action */}
					<div className="space-y-4">
						<Link
							href="/"
							className="inline-block w-full sm:w-auto bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
						>
							← Retour à l&apos;accueil
						</Link>
						
						<div className="text-sm text-gray-500">
							ou
						</div>
						
						<div className="flex flex-col sm:flex-row gap-3 justify-center">
							<Link
								href="/theme"
								className="inline-block border-2 border-blue-700 text-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition-colors"
							>
								Explorer les thèmes
							</Link>
							<Link
								href="/guide"
								className="inline-block border-2 border-blue-700 text-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition-colors"
							>
								Voir les guides
							</Link>
							<Link
								href="/faq"
								className="inline-block border-2 border-blue-700 text-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition-colors"
							>
								FAQ
							</Link>
						</div>
					</div>

					{/* Message d'aide supplémentaire */}
					<div className="mt-12 p-4 bg-blue-50 rounded-lg border border-blue-200">
						<p className="text-sm text-blue-800">
							<strong>Besoin d&apos;aide ?</strong> Utilisez la navigation ci-dessus ou{' '}
							<Link href="/contact" className="underline hover:no-underline">
								contactez-nous
							</Link>{' '}
							si vous pensez qu&apos;il s&apos;agit d&apos;une erreur.
						</p>
					</div>
				</div>
			</main>
		</div>
	);
}