import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* À propos */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              À propos
            </h3>
            <div className="mt-4 space-y-4">
              <p className="text-sm text-gray-600">
                La Checklist de l&apos;Adulte vous accompagne dans vos démarches administratives 
                et vous aide à bien démarrer votre vie indépendante.
              </p>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Liens rapides
            </h3>
            <div className="mt-4 space-y-4">
              <Link href="/administration" className="text-sm text-gray-600 hover:text-blue-600 block">
                Administration
              </Link>
              <Link href="/logement" className="text-sm text-gray-600 hover:text-blue-600 block">
                Logement
              </Link>
              <Link href="/sante" className="text-sm text-gray-600 hover:text-blue-600 block">
                Santé
              </Link>
              <Link href="/banque-budget" className="text-sm text-gray-600 hover:text-blue-600 block">
                Banque & Budget
              </Link>
            </div>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Ressources
            </h3>
            <div className="mt-4 space-y-4">
              <Link href="/simulateurs" className="text-sm text-gray-600 hover:text-blue-600 block">
                Simulateurs
              </Link>
              <Link href="/calendrier" className="text-sm text-gray-600 hover:text-blue-600 block">
                Calendrier
              </Link>
              <Link href="/faq" className="text-sm text-gray-600 hover:text-blue-600 block">
                FAQ
              </Link>
              <Link href="/telechargements" className="text-sm text-gray-600 hover:text-blue-600 block">
                Téléchargements
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Aide
            </h3>
            <div className="mt-4 space-y-4">
              <a 
                href="https://www.service-public.fr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-blue-600 block"
              >
                Service Public
              </a>
              <a 
                href="https://www.caf.fr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-blue-600 block"
              >
                CAF
              </a>
              <a 
                href="https://www.impots.gouv.fr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-blue-600 block"
              >
                Impôts
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-400 text-center">
            © 2024 La Checklist de l&apos;Adulte. Conçu pour faciliter votre transition vers l&apos;autonomie.
          </p>
        </div>
      </div>
    </footer>
  );
}