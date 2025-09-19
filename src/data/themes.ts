import { ThemeSection } from '@/types';

export const themes: ThemeSection[] = [
  {
    id: 'administration',
    title: 'Administration',
    description: 'Impôts, carte d\'identité, sécurité sociale et démarches administratives',
    icon: '📋',
    color: 'bg-blue-500',
    checklist: [
      {
        id: 'admin-1',
        title: 'Déclarer ses impôts',
        description: 'Faire sa première déclaration de revenus en ligne',
        completed: false,
        priority: 'high',
        deadline: new Date('2024-05-31'),
        resources: ['https://www.impots.gouv.fr']
      },
      {
        id: 'admin-2',
        title: 'Obtenir sa carte d\'identité',
        description: 'Renouveler ou obtenir sa première carte d\'identité',
        completed: false,
        priority: 'medium',
        resources: ['https://www.service-public.fr']
      },
      {
        id: 'admin-3',
        title: 'S\'inscrire à la sécurité sociale',
        description: 'Ouvrir ses droits à l\'assurance maladie',
        completed: false,
        priority: 'high'
      }
    ],
    guides: [
      {
        id: 'guide-admin-1',
        title: 'Comment déclarer ses impôts en ligne',
        content: 'Guide complet pour faire sa première déclaration de revenus.',
        steps: [
          'Créer un compte sur impots.gouv.fr',
          'Rassembler les documents nécessaires (bulletins de salaire, attestations)',
          'Remplir la déclaration en ligne',
          'Vérifier et valider',
          'Conserver le récépissé'
        ]
      }
    ],
    vigilancePoints: [
      {
        id: 'vigilance-admin-1',
        title: 'Date limite déclaration d\'impôts',
        description: 'Ne pas dépasser la date limite du 31 mai pour la déclaration en ligne',
        type: 'deadline'
      }
    ],
    usefulLinks: [
      {
        id: 'link-admin-1',
        title: 'Service Public - Particuliers',
        url: 'https://www.service-public.fr/particuliers/',
        description: 'Toutes les démarches administratives'
      }
    ]
  },
  {
    id: 'logement',
    title: 'Logement',
    description: 'Location, achat, assurance habitation et aides au logement',
    icon: '🏠',
    color: 'bg-green-500',
    checklist: [
      {
        id: 'housing-1',
        title: 'Vérifier le bail avant signature',
        description: 'Contrôler toutes les clauses du contrat de location',
        completed: false,
        priority: 'high'
      },
      {
        id: 'housing-2',
        title: 'Souscrire une assurance habitation',
        description: 'Obligatoire pour les locataires',
        completed: false,
        priority: 'high'
      },
      {
        id: 'housing-3',
        title: 'Faire les demandes d\'aides (APL, ALS)',
        description: 'Déposer sa demande sur caf.fr',
        completed: false,
        priority: 'medium'
      }
    ],
    guides: [
      {
        id: 'guide-housing-1',
        title: 'Comprendre les charges locatives',
        content: 'Tout savoir sur les charges récupérables et non récupérables.',
        steps: [
          'Identifier les charges récupérables',
          'Vérifier les justificatifs',
          'Calculer sa part',
          'Contester si nécessaire'
        ]
      }
    ],
    vigilancePoints: [
      {
        id: 'vigilance-housing-1',
        title: 'Dépôt de garantie',
        description: 'Maximum 1 mois de loyer pour un logement vide, 2 mois pour un meublé',
        type: 'important'
      }
    ],
    usefulLinks: [
      {
        id: 'link-housing-1',
        title: 'CAF - Mes Aides',
        url: 'https://www.caf.fr/',
        description: 'Simuler et demander ses aides au logement'
      }
    ]
  },
  {
    id: 'sante',
    title: 'Santé',
    description: 'Mutuelle, médecin traitant, remboursements et urgences',
    icon: '🏥',
    color: 'bg-red-500',
    checklist: [
      {
        id: 'health-1',
        title: 'Choisir un médecin traitant',
        description: 'Déclarer son médecin traitant auprès de l\'Assurance Maladie',
        completed: false,
        priority: 'high'
      },
      {
        id: 'health-2',
        title: 'Souscrire une mutuelle',
        description: 'Complémentaire santé pour réduire le reste à charge',
        completed: false,
        priority: 'medium'
      },
      {
        id: 'health-3',
        title: 'Mettre à jour ses vaccins',
        description: 'Vérifier son carnet de vaccination',
        completed: false,
        priority: 'medium'
      }
    ],
    guides: [],
    vigilancePoints: [],
    usefulLinks: [
      {
        id: 'link-health-1',
        title: 'Ameli.fr',
        url: 'https://www.ameli.fr/',
        description: 'Compte Assurance Maladie'
      }
    ]
  },
  {
    id: 'banque-budget',
    title: 'Banque & Budget',
    description: 'Compte bancaire, budget, épargne et crédit',
    icon: '💰',
    color: 'bg-yellow-500',
    checklist: [
      {
        id: 'bank-1',
        title: 'Ouvrir un compte bancaire',
        description: 'Choisir sa banque et ouvrir son premier compte',
        completed: false,
        priority: 'high'
      },
      {
        id: 'bank-2',
        title: 'Créer un budget mensuel',
        description: 'Établir ses revenus et dépenses',
        completed: false,
        priority: 'medium'
      },
      {
        id: 'bank-3',
        title: 'Mettre en place une épargne',
        description: 'Ouvrir un livret A ou LDD',
        completed: false,
        priority: 'low'
      }
    ],
    guides: [],
    vigilancePoints: [],
    usefulLinks: []
  },
  {
    id: 'assurances',
    title: 'Assurances',
    description: 'Auto, habitation, responsabilité civile et prévoyance',
    icon: '🛡️',
    color: 'bg-purple-500',
    checklist: [
      {
        id: 'insurance-1',
        title: 'Souscrire une assurance auto',
        description: 'Obligatoire pour conduire (au minimum au tiers)',
        completed: false,
        priority: 'high'
      },
      {
        id: 'insurance-2',
        title: 'Vérifier sa responsabilité civile',
        description: 'Souvent incluse dans l\'assurance habitation',
        completed: false,
        priority: 'medium'
      }
    ],
    guides: [],
    vigilancePoints: [],
    usefulLinks: []
  },
  {
    id: 'emploi',
    title: 'Emploi',
    description: 'CV, entretiens, contrats de travail et droits du salarié',
    icon: '💼',
    color: 'bg-indigo-500',
    checklist: [
      {
        id: 'job-1',
        title: 'Créer son CV',
        description: 'Rédiger un CV attractif et professionnel',
        completed: false,
        priority: 'high'
      },
      {
        id: 'job-2',
        title: 'S\'inscrire à Pôle Emploi',
        description: 'Obtenir son numéro d\'identifiant Pôle Emploi',
        completed: false,
        priority: 'medium'
      },
      {
        id: 'job-3',
        title: 'Comprendre son contrat de travail',
        description: 'Lire et vérifier les clauses importantes',
        completed: false,
        priority: 'high'
      }
    ],
    guides: [],
    vigilancePoints: [],
    usefulLinks: []
  }
];

export const getThemeById = (id: string): ThemeSection | undefined => {
  return themes.find(theme => theme.id === id);
};

export const getThemesByPriority = (): ThemeSection[] => {
  return themes.sort((a, b) => {
    const highPriorityA = a.checklist.filter(item => item.priority === 'high').length;
    const highPriorityB = b.checklist.filter(item => item.priority === 'high').length;
    return highPriorityB - highPriorityA;
  });
};