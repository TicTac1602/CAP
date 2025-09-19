import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Checklist from '@/components/Checklist';
import { getThemeById } from '@/data/themes';

export default function AdministrationPage() {
  const theme = getThemeById('administration');

  if (!theme) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* En-tête de la page */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className={`${theme.color} text-white rounded-lg p-4 mr-6`}>
              <span className="text-4xl">{theme.icon}</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{theme.title}</h1>
              <p className="text-xl text-gray-600">{theme.description}</p>
            </div>
          </div>

          {/* Navigation rapide */}
          <div className="border-t pt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Navigation rapide</h2>
            <div className="flex flex-wrap gap-2">
              <a href="#checklist" className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                📋 Checklist
              </a>
              <a href="#guides" className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                📚 Guides
              </a>
              <a href="#vigilance" className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors">
                ⚠️ Points de vigilance
              </a>
              <a href="#liens" className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors">
                🔗 Liens utiles
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checklist */}
          <div id="checklist">
            <Checklist items={theme.checklist} themeId={theme.id} />
          </div>

          {/* Guides et informations */}
          <div className="space-y-8">
            {/* Guides */}
            {theme.guides.length > 0 && (
              <div id="guides" className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Guides pratiques</h2>
                <div className="space-y-6">
                  {theme.guides.map((guide) => (
                    <div key={guide.id} className="border-l-4 border-blue-500 pl-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{guide.title}</h3>
                      <p className="text-gray-600 mb-4">{guide.content}</p>
                      
                      {guide.steps.length > 0 && (
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Étapes à suivre :</h4>
                          <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
                            {guide.steps.map((step, index) => (
                              <li key={index}>{step}</li>
                            ))}
                          </ol>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Points de vigilance */}
            {theme.vigilancePoints.length > 0 && (
              <div id="vigilance" className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Points de vigilance</h2>
                <div className="space-y-4">
                  {theme.vigilancePoints.map((point) => (
                    <div key={point.id} className={`p-4 rounded-lg border-l-4 ${
                      point.type === 'deadline' ? 'bg-red-50 border-red-400' :
                      point.type === 'trap' ? 'bg-yellow-50 border-yellow-400' :
                      'bg-blue-50 border-blue-400'
                    }`}>
                      <h3 className="font-semibold text-gray-900 mb-1">{point.title}</h3>
                      <p className="text-sm text-gray-600">{point.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Liens utiles */}
            {theme.usefulLinks.length > 0 && (
              <div id="liens" className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Liens utiles</h2>
                <div className="space-y-3">
                  {theme.usefulLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <h3 className="font-semibold text-blue-600 mb-1">{link.title}</h3>
                      <p className="text-sm text-gray-600">{link.description}</p>
                      <span className="text-xs text-gray-500">{link.url}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation vers autres thèmes */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Autres thèmes essentiels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="/logement" className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🏠</span>
                <div>
                  <h3 className="font-semibold">Logement</h3>
                  <p className="text-sm text-gray-600">Location, achat, assurance</p>
                </div>
              </div>
            </a>
            <a href="/sante" className="p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🏥</span>
                <div>
                  <h3 className="font-semibold">Santé</h3>
                  <p className="text-sm text-gray-600">Mutuelle, médecin traitant</p>
                </div>
              </div>
            </a>
            <a href="/banque-budget" className="p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
              <div className="flex items-center">
                <span className="text-2xl mr-3">💰</span>
                <div>
                  <h3 className="font-semibold">Banque & Budget</h3>
                  <p className="text-sm text-gray-600">Compte, épargne, budget</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}