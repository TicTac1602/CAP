import { ThemeSection } from '@/types';

export const themes: ThemeSection[] = [
  {
    id: 'administration',
    title: 'Administration',
    description: 'Impôts, carte d\'identité, sécurité sociale et démarches administratives',
    icon: '📋',
    color: 'bg-blue-500',
    checklistSections: [
      {
        id: 'admin-citoyennete',
        title: 'Gestion de la citoyenneté',
        description: 'Documents officiels et pièces d\'identité',
        items: [
          {
            id: 'admin-1',
            title: 'Obtenir sa carte d\'identité',
            description: 'Renouveler ou obtenir sa première carte d\'identité',
            completed: false,
            priority: 'high',
            resources: ['https://www.service-public.fr']
          },
          {
            id: 'admin-4',
            title: 'Obtenir un passeport',
            description: 'Renouveler ou obtenir son passeport pour voyager à l\'étranger',
            completed: false,
            priority: 'high',
            resources: ['https://www.service-public.fr']
          },
          {
            id: 'admin-5',
            title: 'Obtenir une carte électorale',
            description: 'Faire une demande de carte électorale',
            completed: false,
            priority: 'high',
            resources: ['https://www.service-public.fr']
          },
		  {
			id: 'admin-6',
			title: 'Obtenir une carte vitale',
			description: 'Faire une demande de carte vitale',
			completed: false,
			priority: 'high',
			resources: ['https://www.service-public.fr']
		  }
        ]
      },
      {
        id: 'admin-fiscalite',
        title: 'Fiscalité',
        description: 'Impôts et déclarations fiscales',
        items: [
          {
            id: 'admin-2',
            title: 'Déclarer ses revenus',
            description: 'Généralement entre avril et juin chaque année il faut déclarer ses revenus sur le site des impôts',
            completed: false,
            priority: 'high',
            deadline: new Date('2026-05-31'),
            resources: ['https://www.impots.gouv.fr', 'https://www.economie.gouv.fr/particuliers/impots-et-fiscalite/gerer-mon-impot-sur-le-revenu']
          },
		  {
			id: 'admin-7',
			title: 'Vérifier ses prélèvements et budgéter ses impôts',
			description: 'S\'assurer que ses prélèvements à la source sont corrects et calculer sa partie d\'impôts à payer en fin d\'année',
			completed: false,
			priority: 'medium',
		  },
		  {
			id: 'admin-8',
			title: 'Paiement des impôts sur le revenu',
			description: 'Effectuer le paiement des impôts sur le revenu',
			completed: false,
			priority: 'high',
			deadline: new Date('2026-12-31'),
			resources: ['https://www.impots.gouv.fr', 'https://www.economie.gouv.fr/particuliers/impots-et-fiscalite/gerer-mon-impot-sur-le-revenu']
		  }
        ]
      },
	  {
		id: 'admin-aides',
		title: 'Aides et subventions',
		description: 'Accéder aux aides financières de l\'état',
		items: [
		  {
			id: 'admin-9',
			title: 'Consulter les aides disponibles',
			description: 'Vérifier les aides auxquelles vous pouvez prétendre',
			completed: false,
			priority: 'high',
			resources: ['https://www.mesdroitssociaux.gouv.fr/dd1pnds-ria/#destination/simu-foyer']
		  }
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
      },
	  {
        id: 'link-admin-2',
        title: 'Impots.gouv.fr',
        url: 'https://www.impots.gouv.fr/',
        description: 'Site officiel des impôts'
      },
	  {
        id: 'link-admin-3',
        title: 'Site de l\'économie.gouv.fr sur la gestion de l\'impôt sur le revenu',
        url: 'https://www.economie.gouv.fr/particuliers/impots-et-fiscalite/gerer-mon-impot-sur-le-revenu',
        description: 'Gérer son impôt sur le revenu'
      }
    ]
  },
  {
    id: 'logement',
    title: 'Logement',
    description: 'Location, achat, assurance habitation et aides au logement',
    icon: '🏠',
    color: 'bg-green-500',
    checklistSections: [
      {
        id: 'logement-recherche',
        title: 'Recherche et signature',
        description: 'Trouver et sécuriser son logement',
        items: [
          {
            id: 'housing-1',
            title: 'Vérifier le bail avant signature',
            description: 'Contrôler toutes les clauses du contrat de location',
            completed: false,
            priority: 'high'
          }
        ]
      },
      {
        id: 'logement-assurance',
        title: 'Assurance et protection',
        description: 'Se protéger et assurer son logement',
        items: [
          {
            id: 'housing-2',
            title: 'Souscrire une assurance habitation',
            description: 'Obligatoire pour les locataires',
            completed: false,
            priority: 'high'
          }
        ]
      },
      {
        id: 'logement-aides',
        title: 'Aides au logement',
        description: 'Bénéficier des aides financières',
        items: [
          {
            id: 'housing-3',
            title: 'Faire les demandes d\'aides (APL, ALS)',
            description: 'Déposer sa demande sur caf.fr',
            completed: false,
            priority: 'medium'
          }
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
    checklistSections: [
      {
        id: 'sante-parcours',
        title: 'Parcours de soins',
        description: 'Organisation de son suivi médical',
        items: [
          {
            id: 'health-1',
            title: 'Choisir un médecin traitant',
            description: 'Déclarer son médecin traitant auprès de l\'Assurance Maladie',
            completed: false,
            priority: 'high'
          }
        ]
      },
      {
        id: 'sante-couverture',
        title: 'Couverture santé',
        description: 'Assurance et remboursements',
        items: [
          {
            id: 'health-2',
            title: 'Souscrire une mutuelle',
            description: 'Complémentaire santé pour réduire le reste à charge',
            completed: false,
            priority: 'medium'
          }
        ]
      },
      {
        id: 'sante-prevention',
        title: 'Prévention',
        description: 'Vaccins et suivi préventif',
        items: [
          {
            id: 'health-3',
            title: 'Mettre à jour ses vaccins',
            description: 'Vérifier son carnet de vaccination',
            completed: false,
            priority: 'medium'
          }
        ]
      }
    ],
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
    checklistSections: [
      {
        id: 'banque-ouverture',
        title: 'Ouverture de compte',
        description: 'Premier compte bancaire',
        items: [
          {
            id: 'bank-1',
            title: 'Ouvrir un compte bancaire',
            description: 'Choisir sa banque et ouvrir son premier compte',
            completed: false,
            priority: 'high'
          }
        ]
      },
      {
        id: 'banque-gestion',
        title: 'Gestion financière',
        description: 'Budget et épargne',
        items: [
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
        ]
      }
    ],
    vigilancePoints: [],
    usefulLinks: []
  },
  {
    id: 'assurances',
    title: 'Assurances',
    description: 'Auto, habitation, responsabilité civile et prévoyance',
    icon: '🛡️',
    color: 'bg-purple-500',
    checklistSections: [
      {
        id: 'assurances-transport',
        title: 'Assurances transport',
        description: 'Véhicules et mobilité',
        items: [
          {
            id: 'insurance-1',
            title: 'Souscrire une assurance auto',
            description: 'Obligatoire pour conduire (au minimum au tiers)',
            completed: false,
            priority: 'high'
          }
        ]
      },
      {
        id: 'assurances-responsabilite',
        title: 'Responsabilité civile',
        description: 'Protection contre les dommages causés',
        items: [
          {
            id: 'insurance-2',
            title: 'Vérifier sa responsabilité civile',
            description: 'Souvent incluse dans l\'assurance habitation',
            completed: false,
            priority: 'medium'
          }
        ]
      }
    ],
    vigilancePoints: [],
    usefulLinks: []
  },
  {
    id: 'emploi',
    title: 'Emploi',
    description: 'CV, entretiens, contrats de travail et droits du salarié',
    icon: '💼',
    color: 'bg-indigo-500',
    checklistSections: [
      {
        id: 'emploi-recherche',
        title: 'Recherche d\'emploi',
        description: 'Outils et démarches pour trouver un emploi',
        items: [
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
          }
        ]
      },
      {
        id: 'emploi-contrat',
        title: 'Contrat de travail',
        description: 'Comprendre ses droits et devoirs',
        items: [
          {
            id: 'job-3',
            title: 'Comprendre son contrat de travail',
            description: 'Lire et vérifier les clauses importantes',
            completed: false,
            priority: 'high'
          }
        ]
      }
    ],
    vigilancePoints: [],
    usefulLinks: []
  }
];

export const getThemeById = (id: string): ThemeSection | undefined => {
  return themes.find(theme => theme.id === id);
};

export const getThemesByPriority = (): ThemeSection[] => {
  return themes.sort((a, b) => {
    const getAllItems = (theme: ThemeSection) => 
      theme.checklistSections.flatMap(section => section.items);
    
    const highPriorityA = getAllItems(a).filter(item => item.priority === 'high').length;
    const highPriorityB = getAllItems(b).filter(item => item.priority === 'high').length;
    return highPriorityB - highPriorityA;
  });
};