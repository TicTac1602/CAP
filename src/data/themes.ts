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
						resources: [
							{
								title: 'Gerer mon prélèvement à la source - Impots.gouv',
								url: 'https://www.impots.gouv.fr/questions/theme/avis-impot/3'
							}
						]
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
						id: 'admin-10',
						title: 'Paiement taxe foncière',
						description: 'Effectuer le paiement de la taxe foncière si concerné',
						completed: false,
						priority: 'high',
						deadline: new Date('2025-10-20'),
						resources: [
							{
								title: 'Site officiel des impôts',
								url: 'https://www.impots.gouv.fr'
							}
						]
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
								title: 'Notre simulateur d\'impôt sur le revenu',
								url: '../simulateurs'
							},
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
		description: 'Location, achat et aides au logement',
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
						priority: 'medium',
						deadline: new Date('2026-09-01')
					},
					{
						id: 'health-7',
						title: 'Effectuer un bilan dentaire annuel',
						description: 'Consulter son dentiste pour un contrôle et un nettoyage',
						completed: false,
						priority: 'medium',
						deadline: new Date('2026-09-01')
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
						description: 'Vérifier son carnet de vaccination et le calendrier vaccinal',
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
				title: 'Ouverture et gestion de compte',
				description: 'Premier compte bancaire et services essentiels',
				items: [
					{
						id: 'bank-1',
						title: 'Choisir et ouvrir un compte bancaire',
						description: 'Comparer les banques (frais, services) et ouvrir son premier compte courant',
						completed: false,
						priority: 'high',
						resources: [
							{
								title: 'Comparateur banques - UFC Que Choisir',
								url: 'https://www.tarifs-bancaires.gouv.fr/'
							}
						]
					},
					{
						id: 'bank-2',
						title: 'Obtenir une carte bancaire',
						description: 'Choisir le type de carte adapté (débit, crédit, internationale)',
						completed: false,
						priority: 'high',
						resources: [
							{
								title: 'Les différents types de cartes - Service Public',
								url: 'https://www.service-public.fr/particuliers/vosdroits/F2424'
							}
						]
					},
					{
						id: 'bank-4',
						title: 'Comprendre les frais bancaires',
						description: 'Identifier tous les frais (tenue de compte, virements, découvert)',
						completed: false,
						priority: 'medium',
						resources: [
							{
								title: 'Frais bancaires - Banque de France',
								url: 'https://www.banque-france.fr/fr/a-votre-service/particuliers/connaitre-pratiques-bancaires-assurance/compte-frais/les-frais-bancaires'
							}
						]
					}
				]
			},
			{
				id: 'banque-budget',
				title: 'Gestion du budget',
				description: 'Planification et suivi financier',
				items: [
					{
						id: 'budget-1',
						title: 'Établir un budget mensuel',
						description: 'Lister revenus, charges fixes et variables pour équilibrer ses finances',
						completed: false,
						priority: 'high',
						resources: [
							{
								title: 'Notre simulateur de budget',
								url: '/simulateurs/budget'
							},
							{
								title: 'Notre template de budget (Excel)',
								url: '/documents/template-budget.xlsx'
							}
						]
					},
					{
						id: 'budget-2',
						title: 'Suivre ses dépenses quotidiennes',
						description: 'Utiliser une app pour tracker vos dépenses. Bankin, Linxo, etc.',
						completed: false,
						priority: 'medium',
						resources: []
					},
					{
						id: 'budget-4',
						title: 'Anticiper les dépenses exceptionnelles',
						description: 'Dans son budget, prévoir les vacances, cadeaux, réparations, impôts, etc.',
						completed: false,
						priority: 'medium',
						resources: []
					}
				]
			},
			{
				id: 'banque-epargne',
				title: 'Épargne et investissement',
				description: 'Constituer et faire fructifier son épargne',
				items: [
					{
						id: 'budget-3',
						title: 'Définir des objectifs d\'épargne',
						description: 'Fixer un montant mensuel à épargner selon ses moyens',
						completed: false,
						priority: 'medium',
						resources: []
					},
					{
						id: 'epargne-1',
						title: 'Ouvrir un Livret A/LDDS/LEP',
						description: 'Épargne disponible, défiscalisée et sécurisée. Attentions aux plafonds et intérêts faibles quand l\'inflation est élevée',
						completed: false,
						priority: 'high',
						resources: [
							{
								title: 'Livret A - Service Public',
								url: 'https://www.service-public.fr/particuliers/vosdroits/F2365'
							}
						]
					},
					{
						id: 'epargne-2',
						title: 'Constituer une épargne de précaution',
						description: 'Épargne équivalente à 3-6 mois de charges pour les urgences',
						completed: false,
						priority: 'high',
						resources: []
					},
					{
						id: 'epargne-3',
						title: 'Découvrir le PEL (Plan Épargne Logement)',
						description: 'Épargne bloquée pour un futur projet immobilier',
						completed: false,
						priority: 'low',
						resources: [
							{
								title: 'PEL - Service Public',
								url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F16140'
							}
						]
					},
					{
						id: 'epargne-4',
						title: 'S\'informer sur l\'assurance vie',
						description: 'Placement moyen/long terme avec avantages fiscaux',
						completed: false,
						priority: 'low',
						resources: [
							{
								title: 'Assurance vie - Service Public',
								url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F15274'
							}
						]
					}
				]
			},
			{
				id: 'banque-credit',
				title: 'Crédit et endettement',
				description: 'Emprunter de manière responsable',
				items: [
					{
						id: 'credit-1',
						title: 'Connaître sa capacité d\'endettement',
						description: 'Maximum 33% des revenus nets pour tous les crédits',
						completed: false,
						priority: 'medium',
						resources: [
							{
								title: 'Calculateur d\'endettement simplifié - Service Public',
								url: 'https://www.lafinancepourtous.com/outils/calculateurs/calculateur-d-endettement/'
							}
						]
					},
					{
						id: 'credit-2',
						title: 'Comprendre les différents types de crédit',
						description: 'Crédit consommation, immobilier, revolving, leurs risques et avantages',
						completed: false,
						priority: 'medium',
						resources: [
							{
								title: 'Types de crédits - Service Public',
								url: 'https://www.service-public.fr/particuliers/vosdroits/N96'
							}
						]
					}
				]
			},
		],
		vigilancePoints: [
			{
				id: 'vigilance-budget-1',
				title: 'Frais bancaires excessifs',
				description: 'Vérifier régulièrement ses relevés : commissions, frais de tenue de compte peuvent s\'accumuler',
				type: 'trap'
			},
			{
				id: 'vigilance-credit-1',
				title: 'Éviter le surendettement',
				description: 'Ne jamais emprunter plus que ce que l\'on peut rembourser. En cas de difficultés, contacter la Banque de France',
				type: 'deadline'
			},
			{
				id: 'vigilance-budget-2',
				title: 'Découvert autorisé piège',
				description: 'Agios très élevés (15-20% par an) : éviter de rester à découvert',
				type: 'trap'
			},
			{
				id: 'vigilance-budget-3',
				title: 'Règle des 33%',
				description: 'Ne jamais dépasser 33% de ses revenus nets en remboursements de crédits',
				type: 'important'
			},
			{
				id: 'vigilance-budget-4',
				title: 'Épargne de précaution prioritaire',
				description: 'Constituer d\'abord 3-6 mois de charges avant tout placement risqué',
				type: 'important'
			},
			{
				id: 'vigilance-budget-5',
				title: 'Crédit à la consommation',
				description: 'Taux d\'intérêt souvent très élevé, bien lire le contrat avant de s\'engager',
				type: 'trap'
			}
		],
		usefulLinks: [
		]
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
				id: 'assurances-obligatoires',
				title: 'Assurances obligatoires',
				description: 'Couvertures imposées par la loi selon votre situation',
				items: [
					{
						id: 'assurances-1',
						title: 'Assurance habitation (locataires)',
						description: 'Obligation légale pour tous les locataires, garantie minimale risques locatifs',
						completed: false,
						priority: 'high',
						resources: [
							{
								title: 'Assurance habitation - Service Public',
								url: 'https://www.service-public.fr/particuliers/vosdroits/F2123'
							}
						]
					},
					{
						id: 'assurances-2',
						title: 'Assurance auto (propriétaires véhicule)',
						description: 'Responsabilité civile minimale obligatoire pour tout véhicule motorisé',
						completed: false,
						priority: 'high',
						resources: [
							{
								title: 'Assurance auto - Service Public',
								url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F2628'
							}
						]
					},
					{
						id: 'assurances-3',
						title: 'Assurance RC professionnelle (certains métiers)',
						description: 'Obligatoire pour professions réglementées : médecins, avocats, experts-comptables, etc.',
						completed: false,
						priority: 'medium',
						resources: [
							{
								title: 'RC professionnelle - Service Public',
								url: 'https://entreprendre.service-public.gouv.fr/vosdroits/F23667'
							}
						]
					},
					{
						id: 'assurances-4',
						title: 'Assurance décennale (BTP)',
						description: 'Obligatoire pour tous les professionnels du bâtiment',
						completed: false,
						priority: 'medium',
						resources: [
							{
								title: 'Assurance décennale - Service Public',
								url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F2034'
							}
						]
					},
					{
						id: 'assurances-5',
						title: 'Assurance chasse (chasseurs)',
						description: 'Obligatoire pour tous les détenteurs de permis de chasser',
						completed: false,
						priority: 'medium',
						resources: [
							{
								title: 'Assurance chasse',
								url: 'https://www.chasse-assurances.com/'
							}
						]
					}
				]
			},
			{
				id: 'assurances-recommandees',
				title: 'Assurances recommandées',
				description: 'Protections facultatives mais fortement conseillées',
				items: [
					{
						id: 'assurances-6',
						title: 'Assurance habitation (propriétaires)',
						description: 'Protection du bien et responsabilité civile propriétaire',
						completed: false,
						priority: 'high',
						resources: [
							{
								title: 'Assurance propriétaire - Service Public',
								url: 'https://www.service-public.fr/particuliers/vosdroits/F2123'
							}
						]
					},
					{
						id: 'assurances-7',
						title: 'Mutuelle santé complémentaire',
						description: 'Complément Sécurité Sociale pour frais médicaux non remboursés',
						completed: false,
						priority: 'high',
						resources: [
							{
								title: 'Complémentaire santé - Ameli',
								url: 'https://www.ameli.fr/assure/droits-demarches/difficultes-acces-droits-soins/complementaire-sante'
							}
						]
					}
				]
			},
			{
				id: 'assurances-specifiques',
				title: 'Assurances spécifiques',
				description: 'Selon activités et mode de vie particuliers',
				items: [
					{
						id: 'assurances-11',
						title: 'Assurance voyage',
						description: 'Couverture médicale et rapatriement à l\'étranger',
						completed: false,
						priority: 'medium',
						resources: [
						]
					},
					{
						id: 'assurances-12',
						title: 'Assurance scolaire/extrascolaire',
						description: 'Protection enfants à l\'école et activités périscolaires',
						completed: false,
						priority: 'medium',
						resources: []
					},
					{
						id: 'assurances-14',
						title: 'Assurance animaux',
						description: 'Frais vétérinaires et responsabilité civile pour animaux de compagnie',
						completed: false,
						priority: 'low',
						resources: []
					}
				]
			},
			{
				id: 'assurances-gestion',
				title: 'Gestion des assurances',
				description: 'Optimisation et suivi de vos contrats',
				items: [
					{
						id: 'assurances-16',
						title: 'Faire un audit de ses assurances',
						description: 'Vérifier les doublons, lacunes et sur-assurances',
						completed: false,
						priority: 'medium',
						resources: []
					},
					{
						id: 'assurances-17',
						title: 'Comparer les offres annuellement',
						description: 'Utiliser les comparateurs et négocier avec son assureur',
						completed: false,
						priority: 'medium',
						resources: [
							{
								title: 'Comparateur assurances - UFC Que Choisir',
								url: 'https://www.quechoisir.org/rub-comparateur-t621/'
							}
						],
						deadline: new Date("2026-01-01")
					}
				]
			}
		],
		vigilancePoints: [
			{
				id: 'vigilance-assurances-1',
				title: 'Franchises et plafonds cachés',
				description: 'Vérifier les franchises (reste à charge) et plafonds de remboursement qui peuvent limiter la couverture réelle',
				type: 'trap'
			},
			{
				id: 'vigilance-assurances-2',
				title: 'Exclusions de garanties',
				description: 'Lire attentivement les exclusions : catastrophes naturelles, sports à risques, négligence peuvent être exclus',
				type: 'important'
			},
			{
				id: 'vigilance-assurances-4',
				title: 'Délais de carence',
				description: 'Certaines garanties ne s\'activent qu\'après plusieurs mois : prévoir la transition entre contrats',
				type: 'deadline'
			},
			{
				id: 'vigilance-assurances-5',
				title: 'Sur-assurance par méconnaissance',
				description: 'Éviter les doublons entre assurances : carte bancaire, mutuelle employeur, assurance habitation peuvent se chevaucher',
				type: 'trap'
			},
			{
				id: 'vigilance-assurances-6',
				title: 'Résiliation automatique manquée',
				description: 'La Loi Hamon vous permet la résiliation après 1 an sans préavis, ni frais.',
				type: 'deadline'
			}
		],
		usefulLinks: [
			{
				id: 'link-assurances-1',
				title: 'France Assureurs',
				url: 'https://www.franceassureurs.fr/',
				description: 'Fédération française de l\'assurance'
			},
			{
				id: 'link-assurances-2',
				title: 'Service-Public.fr - Assurances',
				url: 'https://www.service-public.fr/particuliers/vosdroits/N44',
				description: 'Guide complet des assurances'
			},
			{
				id: 'link-assurances-3',
				title: 'Médiation Assurance',
				url: 'https://www.mediation-assurance.org/',
				description: 'Résoudre les litiges avec son assureur'
			}
		]
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
				id: 'emploi-droits',
				title: 'Bases du droit du travail',
				description: 'Connaître ses droits et obligations fondamentaux',
				items: [
					{
						id: 'job-2',
						title: 'Connaître ses droits aux congés payés',
						description: 'Calculer ses congés acquis (2,5 jours par mois) et comprendre les règles de prise de congés',
						completed: false,
						priority: 'medium',
						resources: [
							{
								title: 'Congés payés - Service Public',
								url: 'https://www.economie.gouv.fr/entreprises/gerer-ses-ressources-humaines-et-ses-salaries/les-conges-payes-de-vos-salaries-en-8#-comprendre-les-cong-s-pay-s-des_0'
							}
						]
					},
					{
						id: 'job-3',
						title: 'Comprendre son bulletin de paie',
						description: 'Vérifier les cotisations, salaire net, net imposable et identifier d\'éventuelles erreurs',
						completed: false,
						priority: 'medium'
					},
					{
						id: 'job-4',
						title: 'Connaître les procédures de démission',
						description: 'Respecter le préavis et les démarches pour quitter son emploi en bonne et due forme',
						completed: false,
						priority: 'low',
						resources: [
							{
								title: 'Démission - Service Public',
								url: 'https://www.droit-travail-france.fr/demission.php'
							}
						]
					},
					{
						id: 'job-5',
						title: 'Comprendre ses droits en cas de licenciement',
						description: 'Connaître les motifs valables, indemnités légales et recours possibles',
						completed: false,
						priority: 'medium',
						resources: [
							{
								title: 'Licenciement - Service Public',
								url: 'https://code.travail.gouv.fr/themes/licenciement-droits-des-salaries-et-procedures'
							}
						]
					}
				]
			},
			{
				id: 'emploi-profil',
				title: 'Création et mise à jour du profil emploi',
				description: 'Construire et maintenir sa présence professionnelle',
				items: [
					{
						id: 'job-8',
						title: 'Créer ou mettre à jour son CV',
						description: 'Rédiger un CV attractif, professionnel et adapté aux postes visés',
						completed: false,
						priority: 'high',
						resources: [
							{
								title: 'France Travail - Préparer sa candidature',
								url: 'https://www.francetravail.fr/candidat/votre-recherche-demploi.html#preparer-candidature'
							},
							{
								title: 'Modèles de CV - Canva',
								url: 'https://www.canva.com/fr_fr/creer/cv/'
							}
						]
					},
					{
						id: 'job-11',
						title: 'Rédiger une lettre de motivation type',
						description: 'Préparer une base personnalisable pour ses candidatures',
						completed: false,
						priority: 'low',
						resources: [
							{
								title: 'Exemples de lettres de motivation - France Travail',
								url: 'https://www.emploi-store.fr/portail/services/maLettreDeMotivation'
							}
						]
					},
					{
						id: 'job-9',
						title: 'Avoir ou Mettre à jour son profil LinkedIn',
						description: 'Compléter son profil, ajouter des compétences, photo professionnelle et réseau',
						completed: false,
						priority: 'medium',
						resources: [
							{
								title: 'LinkedIn',
								url: 'https://www.linkedin.com/'
							}
						]
					},
					{
						id: 'job-12',
						title: 'Créer un portfolio professionnel',
						description: 'Rassembler ses réalisations, projets et témoignages pour les présenter si applicable dans votre domaine',
						completed: false,
						priority: 'low'
					}
				]
			},
			{
				id: 'emploi-recherche',
				title: 'Recherche d\'emploi active',
				description: 'Stratégies et démarches pour trouver un emploi',
				items: [
					{
						id: 'job-10',
						title: 'Mettre à jour son profil France Travail',
						description: 'Actualiser ses compétences, expériences et critères de recherche',
						completed: false,
						priority: 'high',
						resources: [
							{
								title: 'France Travail - Mon espace personnel',
								url: 'https://authentification-candidat.francetravail.fr/connexion/XUI/?realm=/individu&goto=https://authentification-candidat.francetravail.fr/connexion/oauth2/realms/root/realms/individu/authorize?realm%3D/individu%26response_type%3Did_token%2520token%26scope%3Dapplication_USG_PN073-tdbcandidat_6408B42F17FC872440D4FF01BA6BAB16999CD903772C528808D1E6FA2B585CF2%2520compteUsager%2520contexteAuthentification%2520coordonnees%2520courrier%2520email%2520etatcivil%2520idIdentiteExterne%2520idRci%2520individu%2520logW%2520messagerieintegree%2520navigation%2520nomenclature%2520notifications%2520openid%2520pilote%2520pole_emploi%2520prdvl%2520profile%2520reclamation%2520suggestions%2520mesrdvs%2520offre%2520criteresrecherchesoffres%2520profilpro%26client_id%3DUSG_PN073-tdbcandidat_6408B42F17FC872440D4FF01BA6BAB16999CD903772C528808D1E6FA2B585CF2%26state%3DbM3OltINeffKt0xc%26nonce%3DDx9PEi5taedla8E5%26redirect_uri%3Dhttps://candidat.francetravail.fr/espacepersonnel/#login/'
							}
						]
					},
					{
						id: 'job-14',
						title: 'Faire un bilan de compétences',
						description: 'Identifier ses forces, axes d\'amélioration et projet professionnel',
						completed: false,
						priority: 'medium',
						resources: [
							{
								title: 'France Travail - Bilan de compétences',
								url: 'https://www.francetravail.fr/candidat/votre-recherche-demploi.html?at_medium=CMP&at_campaign=dircom&at_cmp_indicateur1=partage_contenu_contribue&at_cmp_indicateur2=lien_court#preparer-candidature'
							}
						]
					},
					{
						id: 'job-15',
						title: 'Définir sa stratégie de recherche',
						description: 'Cibler les secteurs, types de postes et entreprises qui correspondent à son profil',
						completed: false,
						priority: 'medium',
						resources: [
							{
								title: 'France Travail - Trouver un emploi',
								url: 'https://www.francetravail.fr/candidat/votre-recherche-demploi.html?at_medium=CMP&at_campaign=dircom&at_cmp_indicateur1=partage_contenu_contribue&at_cmp_indicateur2=lien_court#trouver-un-emploi'
							}
						]
					},
					{
						id: 'job-18',
						title: 'Suivre une formation pour améliorer ses compétences',
						description: 'Identifier les compétences manquantes et utiliser son CPF si nécessaire',
						completed: false,
						priority: 'medium',
						resources: [
							{
								title: 'Mon Compte Formation',
								url: 'https://www.moncompteformation.gouv.fr/'
							}
						]
					},
					{
						id: 'job-19',
						title: 'Organiser ses candidatures',
						description: 'Tenir un tableau de suivi des candidatures envoyées, relances et réponses reçues. Cela sera utile pour les entretiens, choix et aperçu de votre progression.',
						completed: false,
						priority: 'medium'
					}
				]
			}
		],
		vigilancePoints: [
			{
				id: 'vigilance-job-0',
				title: 'Comprendre son contrat de travail',
				description: 'Lire et vérifier toutes les clauses importantes (salaire, horaires, congés, préavis) et signature uniquement si tout est clair',
				type: 'deadline'
			},
			{
				id: 'vigilance-job-1',
				title: 'Actualisation Pôle Emploi',
				description: 'Ne pas oublier son actualisation mensuelle sous peine de perdre ses droits aux allocations',
				type: 'deadline'
			},
			{
				id: 'vigilance-job-2',
				title: 'Déclaration des revenus d\'activité',
				description: 'Tout travail, même ponctuel, doit être déclaré à Pôle Emploi et aux impôts',
				type: 'trap'
			},
			{
				id: 'vigilance-job-3',
				title: 'Période d\'essai',
				description: 'Connaître la durée de sa période d\'essai. Généralement 1 à 3 mois renouvelable une fois',
				type: 'important'
			},
			{
				id: 'vigilance-job-4',
				title: 'Préavis de démission',
				description: 'Respecter le délai de préavis mentionné dans son contrat ou la convention collective',
				type: 'deadline'
			},
			{
				id: 'vigilance-job-5',
				title: 'Discrimination à l\'embauche',
				description: 'Un recruteur ne peut pas poser certaines questions (vie privée, santé, syndicats...)',
				type: 'trap'
			},
			{
				id: 'vigilance-job-6',
				title: 'Harcèlement au travail',
				description: 'Connaître ses recours et les personnes à contacter en cas de harcèlement moral ou sexuel',
				type: 'deadline'
			},
			{
				id: 'vigilance-job-7',
				title: 'Règles du temps de travail',
				description: 'Durée légale 35h/semaine, heures supplémentaires majorées, repos compensateur obligatoire et repos hebdomadaire de 24h consécutives minimum',
				type: 'important'
			}
		],
		usefulLinks: [
			{
				id: 'link-job-6',
				title: 'APEC',
				url: 'https://www.apec.fr/',
				description: 'Emploi des cadres et jeunes diplômés'
			},
			{
				id: 'link-job-7',
				title: '1 jeune 1 solution',
				url: 'https://www.1jeune1solution.gouv.fr/',
				description: 'Aides et services pour les jeunes de 16 à 30 ans'
			},
			{
				id: 'link-job-1',
				title: 'France Travail (Pôle Emploi)',
				url: 'https://www.francetravail.fr/',
				description: 'Services aux demandeurs d\'emploi et offres'
			},
			{
				id: 'link-job-2',
				title: 'Mon Compte Formation',
				url: 'https://www.moncompteformation.gouv.fr/',
				description: 'Utiliser ses droits à la formation'
			},
			{
				id: 'link-job-4',
				title: 'LinkedIn',
				url: 'https://www.linkedin.com/',
				description: 'Réseau professionnel et recherche d\'emploi'
			},
			{
				id: 'link-job-5',
				title: 'Indeed',
				url: 'https://fr.indeed.com/',
				description: 'Moteur de recherche d\'emploi'
			},
			{
				id: 'link-job-3',
				title: 'Code du travail numérique',
				url: 'https://code.travail.gouv.fr/',
				description: 'Connaître ses droits et obligations'
			},
		]
	},
	//#endregion
	// #region DÉMÉNAGEMENT
	{
		id: 'demenagement',
		title: 'Déménagement',
		description: 'Changement d\'adresse, transferts de contrats et démarches administratives',
		icon: '📦',
		color: 'bg-orange-500',
		checklistSections: [
			{
				id: 'demenagement-avant',
				title: 'Avant le déménagement',
				description: 'Préparatifs et organisation',
				items: [
					{
						id: 'demenagement-1',
						title: 'Choisir une entreprise de déménagement',
						description: 'Comparer les devis et vérifier les assurances',
						completed: false,
						priority: 'high',
						resources: [
							{
								title: 'Guide du déménagement - Service Public',
								url: 'https://www.service-public.fr/particuliers/vosdroits/F14128'
							}
						]
					},
					{
						id: 'demenagement-2',
						title: 'Résilier ou transférer les contrats du logement actuel',
						description: 'Électricité, gaz, internet, assurance habitation',
						completed: false,
						priority: 'high',
						resources: [
							{
								title: 'Mes droits sur la garantie - Service Public',
								url: 'https://www.service-public.fr/particuliers/vosdroits/F31269'
							}
						]
					},
					{
						id: 'demenagement-4',
						title: 'Faire le tri dans ses affaires',
						description: 'Donner, vendre ou jeter ce qui n\'est plus utile',
						completed: false,
						priority: 'medium',
						resources: [
							{
								title: 'Emmaus France',
								url: 'https://emmaus-france.org/'
							}
						]
					}
				]
			},
			{
				id: 'demenagement-changement-adresse',
				title: 'Changement d\'adresse',
				description: 'Déclarations et notifications officielles',
				items: [
					{
						id: 'demenagement-5',
						title: 'Faire sa demande de changement d\'adresse à La Poste',
						description: 'Service de réexpédition du courrier',
						completed: false,
						priority: 'medium',
						resources: [
							{
								title: 'Changement d\'adresse - La Poste',
								url: 'https://www.laposte.fr/changement-adresse-demenagement-reexpedition'
							}
						]
					},
					{
						id: 'demenagement-6',
						title: 'Déclarer son changement d\'adresse aux différents organismes (impôts, CAF, sécurité sociale, etc.)',
						description: 'Mettre à jour son adresse fiscale',
						completed: false,
						priority: 'medium',
						resources: [
							{
								title: 'Changement d\'adresse - Impôts',
								url: 'https://www.impots.gouv.fr/'
							},
							{
								title: 'Changement de situation - CAF',
								url: 'https://www.caf.fr/'
							}
						]
					}
				]
			},
			{
				id: 'demenagement-nouveau-logement',
				title: 'Nouveau logement',
				description: 'Installation et souscription aux services',
				items: [
					{
						id: 'demenagement-10',
						title: 'Souscrire aux contrats',
						description: 'Électricité, eau, internet, téléphone et gaz dans le nouveau logement. Si vous avez déjà transféré vos contrats vous pouvez ignorer.',
						completed: false,
						priority: 'high',
						resources: [
							{
								title: 'Comparateur énergie - Médiateur National',
								url: 'https://www.energie-info.fr/'
							},
							{
								title: 'Comparateur internet - France Conso',
								url: 'https://comparateur.france-conso.info/#etape-1'
							}
						]
					},
					{
						id: 'demenagement-11',
						title: 'Souscrire à une assurance habitation',
						description: 'Obligatoire pour les locataires, recommandée pour les propriétaires',
						completed: false,
						priority: 'high',
						resources: [
							{
								title: 'Assurance habitation - Service Public',
								url: 'https://www.service-public.fr/particuliers/vosdroits/F2123'
							}
						]
					},
					{
						id: 'demenagement-13',
						title: 'S\'inscrire dans une nouvelle commune',
						description: 'Inscription sur les listes électorales si changement de commune',
						completed: false,
						priority: 'medium',
						resources: [
							{
								title: 'Inscription listes électorales - Service Public',
								url: 'https://www.service-public.fr/particuliers/vosdroits/R16396'
							}
						]
					}
				]
			}
		],
		vigilancePoints: [
			{
				id: 'vigilance-demenagement-1',
				title: 'Délais de préavis',
				description: 'Respecter les délais de préavis (1 à 3 mois selon le bail)',
				type: 'deadline'
			},
			{
				id: 'vigilance-demenagement-2',
				title: 'État des lieux de sortie',
				description: 'Effectuer l\'état des lieux complets pour récupérer le dépôt de garantie sans litige',
				type: 'important'
			},
			{
				id: 'vigilance-demenagement-3',
				title: 'Assurance déménagement',
				description: 'Vérifier la couverture assurance de l\'entreprise de déménagement',
				type: 'trap'
			},
			{
				id: 'vigilance-demenagement-4',
				title: 'Changement d\'adresse tardif',
				description: 'Effectuer tous les changements d\'adresse rapidement pour éviter les complications administratives',
				type: 'deadline'
			},
			{
				id: 'vigilance-demenagement-5',
				title: 'Frais cachés du déménagement',
				description: 'Bien lire les devis : étages, distance, emballage, assurance peuvent être facturés en supplément',
				type: 'trap'
			}
		],
		usefulLinks: [
		]
	},
	// #endregion
	// #region VOYAGES
	{
		id: 'voyages',
		title: 'Voyages',
		description: 'Préparation, formalités et conseils pour voyager à l\'étranger',
		icon: '✈️',
		color: 'bg-teal-500',
		checklistSections: [
			{
				id: 'voyages-avant-depart',
				title: 'Avant le départ',
				description: 'Préparatifs et formalités essentielles',
				items: [
					{
						id: 'voyages-1',
						title: 'Vérifier la validité de son passeport',
						description: 'Le passeport doit être valide au moins 6 mois après le retour',
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
						id: 'voyages-2',
						title: 'Vérifier les exigences de visa',
						description: 'Se renseigner sur les formalités d\'entrée du pays de destination',
						completed: false,
						priority: 'high',
						resources: [
							{
								title: 'Conseils aux voyageurs - France Diplomatie',
								url: 'https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/'
							}
						]
					},
					{
						id: 'voyages-3',
						title: 'Souscrire une assurance voyage',
						description: 'Couverture médicale et rapatriement indispensables',
						completed: false,
						priority: 'low',
						resources: [
						]
					},
					{
						id: 'voyages-4',
						title: 'Vérifier les vaccinations obligatoires',
						description: 'Consulter un centre de vaccinations internationales',
						completed: false,
						priority: 'high',
						resources: [
							{
								title: 'Vaccinations voyage - Institut Pasteur',
								url: 'https://www.pasteur.fr/fr/centre-medical/preparer-son-voyage'
							}
						]
					},
					{
						id: 'voyages-5',
						title: 'Utiliser sa banque à l\'étranger',
						description: 'Éviter le blocage des cartes bancaires à l\'étranger',
						completed: false,
						priority: 'medium',
						resources: []
					},
					{
						id: 'voyages-6',
						title: 'Faire des copies de documents',
						description: 'Pour les voyages hors de France : photocopies et versions numériques des documents importants (passeport, visa, assurance, cartes bancaires). Utile en cas de perte ou vol.',
						completed: false,
						priority: 'medium',
						resources: []
					},
					{
						id: 'voyages-9',
						title: 'Se renseigner sur la situation sécuritaire',
						description: 'Consulter les conseils aux voyageurs actualisés',
						completed: false,
						priority: 'high',
						resources: [
							{
								title: 'France Diplomatie - Conseils par pays',
								url: 'https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/conseils-par-pays-destination/'
							}
						]
					}
				]
			},
			{
				id: 'voyages-pratique',
				title: 'Aspects pratiques',
				description: 'Organisation et logistique du voyage',
				items: [
					{
						id: 'voyages-10',
						title: 'Organiser les transports sur place',
						description: 'Réservations et solutions de transport local',
						completed: false,
						priority: 'medium',
						resources: []
					},
					{
						id: 'voyages-11',
						title: 'Préparer un budget voyage',
						description: 'Estimer les coûts et prévoir les moyens de paiement',
						completed: false,
						priority: 'medium',
						resources: [
							{
								title: 'Convertisseur de devises - XE',
								url: 'https://www.xe.com/fr/currencyconverter/'
							}
						]
					},
					{
						id: 'voyages-12',
						title: 'Souscrire une protection annulation',
						description: 'Assurance pour annulation ou modification de voyage',
						completed: false,
						priority: 'low',
						resources: []
					}
				]
			}
		],
		vigilancePoints: [
			{
				id: 'vigilance-voyages-1',
				title: 'Destinations tropicales',
				description: 'Afrique, Asie du Sud-Est, Amérique du Sud : risques de paludisme, fièvre jaune, dengue. Vaccinations et prophylaxie indispensables',
				type: 'important'
			},
			{
				id: 'vigilance-voyages-2',
				title: 'Pays en tension géopolitique',
				description: 'Moyen-Orient, certaines zones d\'Afrique et d\'Asie : surveiller les conseils France Diplomatie, éviter les zones rouges',
				type: 'trap'
			},
			{
				id: 'vigilance-voyages-3',
				title: 'Destinations froides (Russie, Canada, Scandinavie)',
				description: 'Si besoin prévoir un équipement spécialisé (vêtements thermiques, chaussures adaptées)',
				type: 'important'
			},
			{
				id: 'vigilance-voyages-5',
				title: 'Destinations isolées (îles du Pacifique, Antarctique)',
				description: 'Évacuation médicale très coûteuse (>100 000€), assurance spécialisée obligatoire',
				type: 'trap'
			},
			{
				id: 'vigilance-voyages-7',
				title: 'Formalités USA/Canada/Australie',
				description: 'ESTA, eTA, ETA obligatoires même pour transit, demandes 72h minimum avant départ',
				type: 'deadline'
			},
			{
				id: 'vigilance-voyages-8',
				title: 'Bagages et objets interdits',
				description: 'Réglementations strictes variables selon pays : drones, médicaments, produits alimentaires peuvent être interdits',
				type: 'trap'
			}
		],
		usefulLinks: [
			{
				id: 'link-voyages-1',
				title: 'France Diplomatie - Conseils aux voyageurs',
				url: 'https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/',
				description: 'Conseils officiels par destination'
			},
			{
				id: 'link-voyages-2',
				title: 'Institut Pasteur - Médecine des voyages',
				url: 'https://www.pasteur.fr/fr/centre-medical/preparer-son-voyage',
				description: 'Conseils médicaux et vaccinations'
			},
			{
				id: 'link-voyages-4',
				title: 'Douanes françaises',
				url: 'https://www.douane.gouv.fr/particuliers',
				description: 'Règles douanières et déclarations'
			},
			{
				id: 'link-voyages-6',
				title: 'IATA - Exigences de voyage',
				url: 'https://www.iatatravelcentre.com/',
				description: 'Vérifier visas et documents requis'
			}
		]
	},

	// #region ENTREPRENDRE
	{
		id: 'entreprendre',
		title: 'Entreprendre',
		description: 'Création d\'entreprise, statuts juridiques et démarches entrepreneuriales',
		icon: '🚀',
		color: 'bg-pink-500',
		checklistSections: [
			{
				id: 'entreprendre-projet',
				title: 'Définir son projet',
				description: 'Validation et structuration de l\'idée',
				items: [
					{
						id: 'entreprendre-1',
						title: 'Étudier la faisabilité et viabilité du projet',
						description: 'Analyse de marché, concurrence et besoins clients',
						completed: false,
						priority: 'high',
						resources: [
							{
								title: 'Bpifrance - Outils interactifs',
								url: 'https://bpifrance-creation.fr/outils-interactifs'
							}
						]
					},
					{
						id: 'entreprendre-3',
						title: 'Déterminer les besoins de financement',
						description: 'Estimation du capital nécessaire et sources de financement',
						completed: false,
						priority: 'high',
						resources: [
							{
								title: 'CCI - Aides à la création d\'entreprise',
								url: 'https://www.cci.fr/ressources/creation-dentreprise/accompagnement-et-aides/les-aides-principales-pour-entreprendre-ou-reprendre'
							}
						]
					},
					{
						id: 'entreprendre-5',
						title: 'Comparer et choisir les statuts juridiques',
						description: 'Micro-entreprise, EURL, SASU, SARL, SAS selon activité',
						completed: false,
						priority: 'high',
						resources: [
							{
								title: 'Comparateur statuts - Service Public',
								url: 'https://www.service-public.fr/professionnels-entreprises/vosdroits/N31901'
							},
							{
								title: 'Aide au choix du statut - Bpifrance',
								url: 'https://bpifrance-creation.fr/aideauchoixdustatut'
							}]
					}
				]
			},
			{
				id: 'entreprendre-creation',
				title: 'Formalités de création',
				description: 'Démarches administratives et immatriculation',
				items: [
					{
						id: 'entreprendre-8',
						title: 'Domicilier son entreprise',
						description: 'Siège social : domicile, local commercial, pépinière',
						completed: false,
						priority: 'high',
						resources: [
							{
								title: 'Domiciliation - Service Public',
								url: 'https://entreprendre.service-public.gouv.fr/vosdroits/F2160'
							}
						]
					},
					{
						id: 'entreprendre-9',
						title: 'Rédiger les statuts si nécessaire (EURL, SASU, SARL, SAS)',
						description: 'Acte constitutif et règles de fonctionnement',
						completed: false,
						priority: 'high',
						resources: [
						]
					},
					{
						id: 'entreprendre-10',
						title: 'Immatriculer l\'entreprise',
						description: 'Guichet unique des formalités entreprises',
						completed: false,
						priority: 'high',
						resources: [
							{
								title: 'Guichet unique - Formalités',
								url: 'https://formalites.entreprises.gouv.fr/'
							}
						]
					},
					{
						id: 'entreprendre-11',
						title: 'Ouvrir un compte bancaire professionnel',
						description: 'Séparation patrimoine personnel et professionnel',
						completed: false,
						priority: 'high',
						resources: []
					}
				]
			},
			{
				id: 'entreprendre-lancement',
				title: 'Lancer son activité',
				description: 'Premiers clients et développement',
				items: [
					{
						id: 'entreprendre-13',
						title: 'Mettre en place la comptabilité',
						description: 'Logiciel comptable ou expert-comptable',
						completed: false,
						priority: 'high',
						resources: [
						]
					},
					{
						id: 'entreprendre-14',
						title: 'Développer sa clientèle',
						description: 'Stratégie commerciale et marketing',
						completed: false,
						priority: 'medium',
						resources: [
							{
								title: 'Développement commercial - CCI',
								url: 'https://www.cci.fr/ressources/booster-son-business/trouver-des-clients-partenaires-fournisseurs'
							}
						]
					},
					{
						id: 'entreprendre-15',
						title: 'Se faire accompagner',
						description: 'Rejoindre un réseau d\'entrepreneurs ou un incubateur',
						completed: false,
						priority: 'medium',
						resources: [
							{
								title: 'Réseau Entreprendre',
								url: 'https://www.reseau-entreprendre.org/fr/creation-entreprise/'
							}
						]
					}
				]
			}
		],
		vigilancePoints: [
			{
				id: 'vigilance-entreprendre-1',
				title: 'Charges sociales sous-estimées',
				description: 'Au-delà des seuils micro-entreprise, les charges sociales peuvent représenter 25-45% du CA selon le statut',
				type: 'trap'
			},
			{
				id: 'vigilance-entreprendre-2',
				title: 'Trésorerie de démarrage',
				description: 'Prévoir 6-12 mois de charges fixes : les premiers clients n\'arrivent pas immédiatement',
				type: 'important'
			},
			{
				id: 'vigilance-entreprendre-3',
				title: 'Micro-entreprise : plafonds à surveiller',
				description: '77 700€ (services) ou 188 700€ (vente) : dépassement = bascule automatique vers régime réel',
				type: 'deadline'
			},
			{
				id: 'vigilance-entreprendre-4',
				title: 'Responsabilité du dirigeant',
				description: 'En EURL/entreprise individuelle : patrimoine personnel engagé. Préférer SASU pour protection',
				type: 'important'
			},
			{
				id: 'vigilance-entreprendre-5',
				title: 'CFE et obligations déclaratives',
				description: 'Cotisation Foncière des Entreprises due dès la 2e année. Déclarations TVA, sociales à dates fixes',
				type: 'deadline'
			},
			{
				id: 'vigilance-entreprendre-6',
				title: 'Secteurs réglementés',
				description: 'Alimentaire, santé, bâtiment, sécurité : qualifications obligatoires et autorisations spécifiques',
				type: 'trap'
			},
			{
				id: 'vigilance-entreprendre-7',
				title: 'Propriété intellectuelle',
				description: 'Protéger sa marque, nom de domaine et innovations avant le lancement public',
				type: 'important'
			}
		],
		usefulLinks: [
			{
				id: 'link-entreprendre-1',
				title: 'Guichet unique des formalités',
				url: 'https://formalites.entreprises.gouv.fr/',
				description: 'Toutes les démarches de création'
			},
			{
				id: 'link-entreprendre-2',
				title: 'Bpifrance Création',
				url: 'https://bpifrance-creation.fr/',
				description: 'Guides et outils pour créer son entreprise'
			},
			{
				id: 'link-entreprendre-3',
				title: 'CCI - Chambre de Commerce',
				url: 'https://www.cci.fr/',
				description: 'Accompagnement local des entrepreneurs'
			},
			{
				id: 'link-entreprendre-4',
				title: 'APCE - Agence France Entrepreneur',
				url: 'https://www.afecreation.fr/',
				description: 'Informations et conseils création'
			},
			{
				id: 'link-entreprendre-5',
				title: 'URSSAF Entreprises',
				url: 'https://www.urssaf.fr/',
				description: 'Cotisations sociales et micro-entreprise'
			},
			{
				id: 'link-entreprendre-6',
				title: 'Infogreffe',
				url: 'https://www.infogreffe.fr/',
				description: 'Registre du commerce et des sociétés'
			},
			{
				id: 'link-entreprendre-7',
				title: 'INPI - Propriété intellectuelle',
				url: 'https://www.inpi.fr/',
				description: 'Protection marques et brevets'
			}
		]
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

export const getOtherThemes = (currentIndex: number, themeCount: number): ThemeSection[] => {
	const otherThemes: ThemeSection[] = [];
	const usedIndices = new Set([currentIndex]);

	for (let shift = -2; shift <= 2; shift++) {
		if (shift === 0) continue;
		const newIndex = (currentIndex + shift + themeCount) % themeCount;

		if (!usedIndices.has(newIndex)) {
			otherThemes.push(themes[newIndex]);
			usedIndices.add(newIndex);
		}
	}
	return otherThemes;
};