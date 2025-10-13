import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Mentions légales - AdulPath",
	description: "Mentions légales et informations légales obligatoires du site AdulPath - Guide pratique pour jeunes adultes.",
	robots: {
		index: true,
		follow: true,
	}
};

export default function MentionsLegalesPage() {
	return (
		<div className="min-h-screen bg-gray-50">
			<Header />
			
			<main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="bg-white rounded-lg shadow-sm p-8">
					<h1 className="text-3xl font-bold text-gray-900 mb-8">Mentions légales</h1>
					
					<div className="prose prose-blue max-w-none space-y-8">
						{/* Éditeur du site */}
						<section>
							<h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Éditeur du site</h2>
							<div className="bg-gray-50 p-4 rounded-lg">
								<p><strong>Nom du site :</strong> AdulPath</p>
								<p><strong>Adresse du site :</strong> <a href="https://adulpath.fr" className="text-blue-600 hover:text-blue-700">https://adulpath.fr</a></p>
								<p><strong>Propriétaire / Éditeur :</strong> AdulPath</p>
								<p><strong>Contact :</strong> <a href="mailto:contact.adulpath@gmail.com" className="text-blue-600 hover:text-blue-700">contact.adulpath@gmail.com</a></p>
								<p><strong>Statut :</strong> Site web d&apos;information et d&apos;aide aux démarches administratives</p>
							</div>
						</section>

						{/* Directeur de publication */}
						<section>
							<h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Directeur de la publication</h2>
							<p>Le directeur de la publication du site AdulPath est l&apos;équipe éditoriale d&apos;AdulPath.</p>
							<p><strong>Contact :</strong> <a href="mailto:contact.adulpath@gmail.com" className="text-blue-600 hover:text-blue-700">contact.adulpath@gmail.com</a></p>
						</section>

						{/* Hébergement */}
						<section>
							<h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Hébergement</h2>
							<div className="bg-gray-50 p-4 rounded-lg">
								<p><strong>Hébergeur :</strong> Vercel Inc.</p>
								<p><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
								<p><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">vercel.com</a></p>
							</div>
						</section>

						{/* Propriété intellectuelle */}
						<section>
							<h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Propriété intellectuelle</h2>
							<div className="space-y-4">
								<p>L&apos;ensemble du contenu de ce site (textes, images, vidéos, structure, charte graphique, etc.) est protégé par le droit d&apos;auteur.</p>
								
								<p>Sauf mention contraire, tous les contenus de ce site sont sous licence libre et peuvent être réutilisés dans les conditions suivantes :</p>
								<ul className="list-disc pl-6 space-y-2">
									<li>Citation de la source : &quot;AdulPath - https://adulpath.fr&quot;</li>
									<li>Usage à des fins d&apos;information et d&apos;éducation</li>
									<li>Pas d&apos;usage commercial sans autorisation expresse</li>
								</ul>
								
								<p>Pour toute demande d&apos;autorisation spécifique, contactez-nous à : <a href="mailto:contact.adulpath@gmail.com" className="text-blue-600 hover:text-blue-700">contact.adulpath@gmail.com</a></p>
							</div>
						</section>

						{/* Responsabilité */}
						<section>
							<h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitation de responsabilité</h2>
							<div className="space-y-4">
								<p><strong>Nature du contenu :</strong> Les informations diffusées sur le site AdulPath le sont à titre informatif et ne constituent pas des conseils personnalisés. Les démarches administratives pouvant évoluer, nous invitons les utilisateurs à vérifier les informations sur les sites officiels compétents.</p>
								
								<p><strong>Exactitude des informations :</strong> AdulPath s&apos;efforce de fournir des informations exactes et à jour. Cependant, nous ne pouvons garantir l&apos;exactitude, la complétude ou l&apos;actualité de toutes les informations présentes sur le site.</p>
								
								<p><strong>Liens externes :</strong> Les liens vers des sites externes sont fournis pour votre commodité. AdulPath n&apos;est pas responsable du contenu de ces sites tiers.</p>
								
								<p><strong>Simulateurs :</strong> Les résultats des simulateurs sont donnés à titre indicatif uniquement. Ils ne constituent pas un engagement et ne sauraient se substituer aux calculs officiels des administrations compétentes.</p>
							</div>
						</section>

						{/* Protection des données */}
						<section>
							<h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Protection des données personnelles</h2>
							<div className="space-y-4">
								<p><strong>Collecte de données :</strong> AdulPath ne collecte aucune donnée personnelle directement. Le site fonctionne de manière anonyme.</p>
								
								<p><strong>Stockage local :</strong> Les préférences utilisateur (progression des checklists, paramètres) sont stockées localement dans votre navigateur et ne sont jamais transmises à nos serveurs.</p>
								
								<p><strong>Analytics :</strong> Nous utilisons Vercel Analytics pour comprendre l&apos;usage du site de manière anonymisée, conformément au RGPD.</p>
								
								<p><strong>Cookies :</strong> Le site utilise uniquement des cookies techniques nécessaires au fonctionnement du site. Aucun cookie de traçage tiers n&apos;est utilisé.</p>
								
								<p><strong>Vos droits :</strong> Pour toute question relative à la protection des données, contactez-nous à : <a href="mailto:contact.adulpath@gmail.com" className="text-blue-600 hover:text-blue-700">contact.adulpath@gmail.com</a></p>
							</div>
						</section>

						{/* Droit applicable */}
						<section>
							<h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Droit applicable</h2>
							<p>Les présentes mentions légales sont soumises au droit français. Tout litige relatif à l&apos;utilisation du site AdulPath sera de la compétence des tribunaux français.</p>
						</section>

						{/* Contact */}
						<section>
							<h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact</h2>
							<div className="bg-blue-50 p-4 rounded-lg">
								<p>Pour toute question concernant ces mentions légales ou le site AdulPath :</p>
								<p><strong>Email :</strong> <a href="mailto:contact.adulpath@gmail.com" className="text-blue-600 hover:text-blue-700">contact.adulpath@gmail.com</a></p>
								<p><strong>Ou via notre page :</strong> <Link href="/contact" className="text-blue-600 hover:text-blue-700">Contact</Link></p>
							</div>
						</section>

						{/* Date de mise à jour */}
						<section className="border-t pt-6 mt-8">
							<p className="text-sm text-gray-600">
								<strong>Dernière mise à jour :</strong> 13 octobre 2025
							</p>
						</section>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}