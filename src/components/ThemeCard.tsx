import Link from 'next/link';
import { ThemeSection } from '@/types';

interface ThemeCardProps {
  theme: ThemeSection;
}

export default function ThemeCard({ theme }: ThemeCardProps) {
  const totalTasks = theme.checklist.length;
  const highPriorityTasks = theme.checklist.filter(item => item.priority === 'high').length;
  const completedTasks = theme.checklist.filter(item => item.completed).length;
  const progressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <Link href={`/${theme.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 h-full">
        {/* Header avec icône et titre */}
        <div className="flex items-center mb-4">
          <div className={`${theme.color} text-white rounded-lg p-3 mr-4`}>
            <span className="text-2xl">{theme.icon}</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {theme.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {theme.description}
            </p>
          </div>
        </div>

        {/* Statistiques */}
        <div className="space-y-3">
          {/* Barre de progression */}
          <div>
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Progression</span>
              <span>{completedTasks}/{totalTasks} tâches</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${theme.color} transition-all duration-300`}
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Indicateurs */}
          <div className="flex justify-between text-sm">
            <div className="flex items-center">
              <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              <span className="text-gray-600">{highPriorityTasks} prioritaire{highPriorityTasks > 1 ? 's' : ''}</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              <span className="text-gray-600">{theme.guides.length} guide{theme.guides.length > 1 ? 's' : ''}</span>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="text-blue-600 text-sm font-medium group-hover:text-blue-700">
            Voir les détails →
          </span>
        </div>
      </div>
    </Link>
  );
}