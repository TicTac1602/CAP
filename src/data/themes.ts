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