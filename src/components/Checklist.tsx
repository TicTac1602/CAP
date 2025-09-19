'use client';

import { useState, useEffect } from 'react';
import { ChecklistItem } from '@/types';

interface ChecklistProps {
  items: ChecklistItem[];
  themeId: string;
}

export default function Checklist({ items, themeId }: ChecklistProps) {
  const [checklistItems, setChecklistItems] = useState<ChecklistItem[]>(items);

  // Charger l'état depuis localStorage au montage
  useEffect(() => {
    const savedState = localStorage.getItem(`checklist-${themeId}`);
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState);
        setChecklistItems(parsedState);
      } catch (error) {
        console.error('Erreur lors du chargement de la checklist:', error);
      }
    }
  }, [themeId]);

  // Sauvegarder dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem(`checklist-${themeId}`, JSON.stringify(checklistItems));
  }, [checklistItems, themeId]);

  const toggleItem = (itemId: string) => {
    setChecklistItems(prev =>
      prev.map(item =>
        item.id === itemId
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low':
        return 'text-green-600 bg-green-50 border-green-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'Priorité haute';
      case 'medium':
        return 'Priorité moyenne';
      case 'low':
        return 'Priorité basse';
      default:
        return 'Sans priorité';
    }
  };

  const formatDeadline = (deadline?: Date) => {
    if (!deadline) return null;
    const date = new Date(deadline);
    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      return { text: `Échéance dépassée de ${Math.abs(diffDays)} jour(s)`, color: 'text-red-600' };
    } else if (diffDays === 0) {
      return { text: 'Échéance aujourd\'hui', color: 'text-red-600' };
    } else if (diffDays <= 7) {
      return { text: `${diffDays} jour(s) restant(s)`, color: 'text-orange-600' };
    } else {
      return { text: `Échéance le ${date.toLocaleDateString('fr-FR')}`, color: 'text-gray-600' };
    }
  };

  const completedCount = checklistItems.filter(item => item.completed).length;
  const totalCount = checklistItems.length;
  const progressPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-bold text-gray-900">Checklist</h2>
          <span className="text-sm text-gray-600">
            {completedCount}/{totalCount} terminées
          </span>
        </div>
        
        {/* Barre de progression */}
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-blue-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        
        {progressPercentage === 100 && (
          <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-md">
            <p className="text-green-800 text-sm font-medium">
              🎉 Félicitations ! Vous avez terminé toutes les tâches de cette section.
            </p>
          </div>
        )}
      </div>

      <div className="space-y-4">
        {checklistItems.map((item) => {
          const deadline = formatDeadline(item.deadline);
          
          return (
            <div
              key={item.id}
              className={`border rounded-lg p-4 transition-all duration-200 ${
                item.completed
                  ? 'bg-green-50 border-green-200'
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-start space-x-3">
                {/* Checkbox */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className={`flex-shrink-0 w-6 h-6 rounded border-2 transition-colors duration-200 ${
                    item.completed
                      ? 'bg-green-600 border-green-600'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {item.completed && (
                    <svg className="w-4 h-4 text-white m-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>

                {/* Contenu */}
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className={`font-medium ${item.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                        {item.title}
                      </h3>
                      <p className={`text-sm mt-1 ${item.completed ? 'line-through text-gray-400' : 'text-gray-600'}`}>
                        {item.description}
                      </p>
                    </div>

                    {/* Badge priorité */}
                    <span className={`inline-block px-2 py-1 text-xs font-medium rounded-md border ${getPriorityColor(item.priority)}`}>
                      {getPriorityLabel(item.priority)}
                    </span>
                  </div>

                  {/* Échéance */}
                  {deadline && (
                    <div className="mt-2">
                      <span className={`text-xs font-medium ${deadline.color}`}>
                        ⏰ {deadline.text}
                      </span>
                    </div>
                  )}

                  {/* Ressources */}
                  {item.resources && item.resources.length > 0 && (
                    <div className="mt-3">
                      <p className="text-xs text-gray-500 mb-1">Ressources utiles :</p>
                      <div className="space-y-1">
                        {item.resources.map((resource, index) => (
                          <a
                            key={index}
                            href={resource}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-600 hover:text-blue-700 underline block"
                          >
                            {resource}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}