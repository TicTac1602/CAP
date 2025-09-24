import { ThemeSection } from '@/types';

export const themes: ThemeSection[] = [
	// #region ADMINISTRATION
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
						resources: [
							{
								title: 'Démarches carte d\'identité - Service Public',
								url: 'https://www.service-public.fr/particuliers/vosdroits/R62483'
							}
						]
					},
					{
						id: 'admin-4',
						title: 'Obtenir un passeport',
						description: 'Renouveler ou obtenir son passeport pour voyager à l\'étranger',
						completed: false,
						priority: 'high',
						resources: [
							{
								title: 'Démarches passeport - Service Public',
								url: 'https://www.service-public.fr/particuliers/vosdroits/R62483'
							}
						]
					},
					{
						id: 'admin-3',
						title: 'Obtenir son permis de conduire',
						description: 'Renouveler ou obtenir un permis de conduire',
						completed: false,
						priority: 'medium',
						resources: [
							{
								title: 'Demande de permis de conduire - Service Public',
								url: 'https://permisdeconduire.ants.gouv.fr/demarches-en-ligne/demander-la-fabrication-de-votre-permis-de-conduire'
							}
						]
					},
					{
						id: 'admin-5',
						title: 'Obtenir une carte électorale',
						description: 'Faire une demande de carte électorale',
						completed: false,
						priority: 'low',
						resources: [
							{
								title: 'Inscription sur les listes électorales - Service Public',
								url: 'https://www.service-public.fr/particuliers/vosdroits/R16396'
							}
						]
					},
					{
						id: 'admin-6',
						title: 'Obtenir une carte vitale',
						description: 'Faire une demande de carte vitale',
						completed: false,
						priority: 'low',
						resources: [
							{
								title: 'Carte Vitale - Service Public',
								url: 'https://www.service-public.fr/particuliers/vosdroits/F265'
							}
						]
					}
				]
			},
			{
				id: 'admin-fiscalite',
				title: 'Fiscalité',
				description: 'Impôts et déclarations fiscales',
				items: [
					{
						id: 'admin-0',
						title: 'Vérifier le montant des prélèvements à la source',
						description: 'S\'assurer que ses prélèvements à la source sont corrects et calculer sa partie d\'impôts à payer en fin d\'année',
						completed: false,
						priority: 'medium',
						deadline: new Date('2026-01-31'),
					},
					{
						id: 'admin-2',
						title: 'Déclarer ses revenus',
						description: 'Généralement entre avril et juin chaque année il faut déclarer ses revenus sur le site des impôts',
						completed: false,
						priority: 'high',
						deadline: new Date('2026-05-31'),
						resources: [
							{
								title: 'Site officiel des impôts',
								url: 'https://www.impots.gouv.fr'
							},
							{
								title: 'Guide impôt sur le revenu - Économie.gouv',
								url: 'https://www.economie.gouv.fr/particuliers/impots-et-fiscalite/gerer-mon-impot-sur-le-revenu'
							}
						]
					},
					{
						id: 'admin-7',
						title: 'Vérifier ses prélèvements et budgéter ses impôts',
						description: 'S\'assurer que ses prélèvements à la source sont corrects et calculer sa partie d\'impôts à payer en fin d\'année',
						completed: false,
						priority: 'medium',
					},
					{
						id: 'admin-10',
						title: 'Paiement taxe foncière',
						description: 'Effectuer le paiement de la taxe foncière si concerné',
						completed: false,
						priority: 'high',
						deadline: new Date('2025-10-20'),
					},
					{
						id: 'admin-8',
						title: 'Paiement des impôts sur le revenu',
						description: 'Effectuer le paiement des impôts sur le revenu',
						completed: false,
						priority: 'high',
						deadline: new Date('2025-12-31'),
						resources: [
							{
								title: 'Site officiel des impôts',
								url: 'https://www.impots.gouv.fr'
							},
							{
								title: 'Guide impôt sur le revenu - Économie.gouv',
								url: 'https://www.economie.gouv.fr/particuliers/impots-et-fiscalite/gerer-mon-impot-sur-le-revenu'
							}
						]
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
						resources: [
							{
								title: 'Simulateur des droits sociaux - Mes Droits Sociaux',
								url: 'https://www.mesdroitssociaux.gouv.fr/dd1pnds-ria/#destination/simu-foyer'
							}
						]
					}
				]
			}
		],
		vigilancePoints: [
			{
				id: 'vigilance-admin-4',
				title: 'Inscription sur les listes électorales',
				description: 'Obligatoire pour voter, à faire avant le 31 décembre de l\'année précédant une élection. Souvent l\'inscription est automatique à 18 ans si les parents sont inscrits.',
				type: 'important'
			},
			{
				id: 'vigilance-admin-0',
				title: 'Validité de la carte d\'identité',
				description: 'Valable 15 ans pour les majeurs, 10 ans pour les mineurs',
				type: 'trap'
			},
			{
				id: 'vigilance-admin-2',
				title: 'Validité du passeport',
				description: 'Valable 10 ans pour les majeurs, 5 ans pour les mineurs',
				type: 'trap'
			},
			{
				id: 'vigilance-admin-1',
				title: 'Date limite déclaration revenus',
				description: 'Ne pas dépasser la date limite de déclaration des revenus (généralement entre avril et juin)',
				type: 'deadline'
			},
			{
				id: 'vigilance-admin-3',
				title: 'Date limite paiement impôts',
				description: 'Ne pas dépasser la date limite du 31 décembre pour le paiement des impôts sur le revenu',
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
	// #endregion
	// #region LOGEMENT
	{
		id: 'logement',
		title: 'Logement',
		description: 'Location, achat, assurance habitation et aides au logement',
		icon: '🏠',
		color: 'bg-green-500',
		checklistSections: [
			{
				id: 'logement-location',
				title: 'Recherche et dossier de location',
				description: 'Trouver et construire un dossier solide pour sa location',
				items: [
					{
						id: 'housing-0',
						title: 'Définir ses critères de recherche et son budget',
						description: 'Emplacement, type de logement, loyer maximum',
						completed: false,
						priority: 'medium'
					},
					{
						id: 'housing-4',
						title: 'Constituer un dossier de location complet',
						description: 'Pièces justificatives, garant, etc.',
						completed: false,
						priority: 'medium',
						resources: [
							{
								title: 'Dossier de location - Service Public',
								url: 'https://www.service-public.fr/particuliers/vosdroits/F1169'
							}
						]
					},
					{
						id: 'housing-5',
						title: 'Visiter des logements',
						description: 'Préparer des questions à poser au propriétaire ou à l\'agence. Vérifier l\'état général du logement et des équipements.',
						completed: false,
						priority: 'medium'
					},
					{
						id: 'housing-1',
						title: 'Vérifier le bail avant signature',
						description: 'Contrôler toutes les clauses du contrat de location',
						completed: false,
						priority: 'high',
						resources: [
							{
								title: 'Contrat de location - Service Public',
								url: 'https://www.service-public.fr/particuliers/vosdroits/F35109/0_0'
							}
						]
					},
					{
						id: 'housing-7',
						title: 'Souscrire aux services essentiels',
						description: 'Électricité, gaz, eau, internet ...',
						completed: false,
						priority: 'medium'
					},
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
				id: 'logement-achat',
				title: 'Recherche et Achat immobilier',
				description: 'Étapes pour acheter son premier logement',
				items: [
					{
						id: 'housing-6',
						title: 'Évaluer sa capacité d\'emprunt',
						description: 'Calculer son budget en fonction de ses revenus et charges',
						completed: false,
						priority: 'medium'
					},
					{
						id: 'housing-3',
						title: 'Rechercher un bien immobilier',
						description: 'Utiliser des sites spécialisés, agences immobilières, etc.',
						completed: false,
						priority: 'medium'
					},
					{
						id: 'housing-8',
						title: 'Faire une offre d\'achat',
						description: 'Négocier le prix avec le vendeur',
						completed: false,
						priority: 'high'
					},
					{
						id: 'housing-9',
						title: 'Signer le compromis de vente',
						description: 'Engagement réciproque entre l\'acheteur et le vendeur',
						completed: false,
						priority: 'high'
					},
					{
						id: 'housing-10',
						title: 'Finaliser le prêt immobilier',
						description: 'Obtenir l\'accord de la banque et signer l\'offre de prêt',
						completed: false,
						priority: 'high'
					},
					{
						id: 'housing-11',
						title: 'Signer l\'acte de vente chez le notaire',
						description: 'Devenir officiellement propriétaire du bien',
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
						id: 'housing-12',
						title: 'Faire les demandes d\'aides (APL, ALS)',
						description: 'Déposer sa demande sur caf.fr',
						completed: false,
						priority: 'medium',
						resources: [
							{
								title: 'Aide personnalisée au logement (APL) - Service Public',
								url: 'https://www.service-public.fr/particuliers/vosdroits/F12006'
							},
							{
								title: 'Allocation de logement sociale (ALS) - Service Public',
								url: 'https://www.service-public.fr/particuliers/vosdroits/F1280'
							}
						]
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
			},
			{
				id: 'vigilance-housing-3',
				title: 'Assurance habitation',
				description: 'Obligatoire pour les locataires, à fournir au propriétaire lors de la remise des clés',
				type: 'important'
			},
			{
				id: 'vigilance-housing-2',
				title: 'État des lieux',
				description: 'Faire un état des lieux précis à l\'entrée et à la sortie pour éviter les litiges',
				type: 'trap'
			},
			{
				id: 'vigilance-housing-4',
				title: 'Loyer impayé',
				description: 'Risques de procédure d\'expulsion en cas de non-paiement',
				type: 'trap'
			},
			{
				id: 'vigilance-housing-5',
				title: 'Délai de préavis',
				description: 'Respecter le délai de préavis en cas de départ du logement',
				type: 'important'
			}
		],
		usefulLinks: [
			{
				id: 'link-housing-1',
				title: 'CAF - Mes Aides',
				url: 'https://wwwd.caf.fr/wps/portal/caffr/aidesetdemarches/mesdemarches/faireunesimulation/lelogement#/preparation',
				description: 'Simuler et demander ses aides au logement'
			}
		]
	},
	// #endregion
	// #region SANTÉ
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
					},
					{
						id: 'health-6',
						title: 'Effectuer un bilan de santé annuel',
						description: 'Consulter son médecin traitant pour un check-up complet',
						completed: false,
						priority: 'medium'
					},
					{
						id: 'health-7',
						title: 'Effectuer un bilan dentaire annuel',
						description: 'Consulter son dentiste pour un contrôle et un nettoyage',
						completed: false,
						priority: 'medium'
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
					},
					{
						id: 'health-5',
						title: 'Couverture santé à l\'étranger',
						description: 'Obtenir la carte européenne d\'assurance maladie (CEAM) pour les voyages en Europe',
						completed: false,
						priority: 'low',
						resources: [
							{
								title: 'Carte Européenne d\'Assurance Maladie - Ameli.fr',
								url: 'https://www.ameli.fr/assure/adresses-et-contacts/votre-carte-vitale-appli-carte-vitale-carte-europeenne-d-assurance-maladie-ceam/commander-une-carte-europeenne-d-assurance-maladie-ceam'
							},
							{
								title: 'Protections sociale à l\'étranger - Ameli.fr',
								url: 'https://www.ameli.fr/assure/droits-demarches/europe-international/protection-sociale-etranger'
							}
						]
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
						priority: 'medium',
						resources: [
							{
								title: 'Calendrier vaccinal - Ministère de la Santé',
								url: 'https://sante.gouv.fr/prevention-en-sante/preserver-sa-sante/vaccination/calendrier-vaccinal'
							}
						]
					},
					{
						id: 'health-11',
						title: 'Dépistage du VIH et autres IST',
						description: 'Connaître les lieux de dépistage et l\'importance du dépistage régulier',
						completed: false,
						priority: 'medium',
						resources: [
							{
								title: 'Dépistage VIH - Sida Info Service',
								url: 'https://www.sida-info-service.org/mon-test-ist/'
							}
						]
					}
				]
			},
			{
				id: 'sante-urgences',
				title: 'Aides',
				description: 'Se proteger soi même et les autres',
				items: [
					{
						id: 'health-9',
						title: 'Apprendre les gestes de premiers secours',
						description: 'Suivre une formation aux premiers secours (PSC1)',
						completed: false,
						priority: 'low'
					},
					{
						id: 'health-10',
						title: 'Donner son sang',
						description: 'S\'inscrire comme donneur de sang et participer aux collectes',
						completed: false,
						priority: 'medium',
						resources: [
							{
								title: 'Don du sang - EFS',
								url: 'https://dondesang.efs.sante.fr/trouver-une-collecte'
							}
						]
					}
				]
			}
		],
		vigilancePoints: [
			{
				id: 'vigilance-health-1',
				title: 'Déclaration du médecin traitant',
				description: 'Indispensable pour bénéficier du parcours de soins coordonnés et d\'un meilleur remboursement',
				type: 'deadline'
			},
			{
				id: 'vigilance-health-2',
				title: 'Validité de la carte vitale',
				description: 'Mettre à jour sa carte vitale chaque année avec les informations de l\'Assurance Maladie',
				type: 'trap'
			},
			{
				id: 'vigilance-health-3',
				title: 'Souscription à une mutuelle',
				description: 'Comparer les offres pour choisir une mutuelle adaptée à ses besoins et éviter les mauvaises surprises',
				type: 'important'
			},
			{
				id: 'vigilance-health-4',
				title: 'Vaccins et traitement nécessaires',
				description: 'Si vous voyagez à l\'étranger, vérifier les vaccins obligatoires et recommandés pour la destination',
				type: 'deadline'
			}
		],
		usefulLinks: [
			{
				id: 'link-health-1',
				title: 'Ameli.fr',
				url: 'https://www.ameli.fr/',
				description: 'Compte Assurance Maladie'
			},
			{
				id: 'link-health-2',
				title: 'Trouver son médecin traitant - Ameli.fr',
				url: 'https://www.ameli.fr/assure/droits-demarches/principes/choisir-et-declarer-votre-medecin-traitant',
				description: 'Site de l\'Assurance Maladie pour choisir et déclarer son médecin traitant'
			},
			{
				id: 'link-health-3',
				title: 'Recommandation vaccinal - Ministère de la Santé',
				url: 'https://sante.gouv.fr/prevention-en-sante/preserver-sa-sante/vaccination/',
				description: 'Informations officielles sur la vaccination en France'
			}
		]
	},
	// #endregion
	// #region BANQUE & BUDGET
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
	// #endregion
	// #region ASSURANCES
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
	// #endregion
	// #region EMPLOI
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