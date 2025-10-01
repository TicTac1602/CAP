import { FAQItem } from '@/types';

export const faqData: FAQItem[] = [
	{
		id: '1',
		question: 'À quel âge dois-je commencer à déclarer mes impôts ?',
		answer: 'Vous devez déclarer vos impôts dès que vous percevez des revenus, même en étant étudiant. Si vous habitez encore chez vos parents et avez moins de 25 ans, vous pouvez être rattaché à leur foyer fiscal, mais ce n\'est pas obligatoire.',
		category: 'Administration'
	},
	{
		id: '2',
		question: 'Comment choisir ma première mutuelle ?',
		answer: 'Comparez les garanties proposées (remboursement dentaire, optique, hospitalisation), les tarifs, et vérifiez si votre employeur propose une mutuelle d\'entreprise obligatoire. Les mutuelles étudiantes ou jeunes actifs offrent souvent des tarifs préférentiels.',
		category: 'Santé'
	},
	{
		id: '3',
		question: 'Qu\'est-ce que le dépôt de garantie et combien ça coûte ?',
		answer: 'Le dépôt de garantie est une somme versée au propriétaire lors de la signature du bail. Il ne peut pas dépasser 1 mois de loyer hors charges pour un logement vide, ou 2 mois pour un meublé. Il vous sera rendu à la fin du bail, déduction faite d\'éventuels frais de réparation.',
		category: 'Logement'
	},
	{
		id: '4',
		question: 'Comment ouvrir mon premier compte bancaire ?',
		answer: 'Il vous faut une pièce d\'identité, un justificatif de domicile, et éventuellement un justificatif de revenus. Comparez les banques traditionnelles et en ligne, les frais de tenue de compte, et les services proposés (carte bancaire, découvert autorisé).',
		category: 'Banque'
	},
	{
		id: '5',
		question: 'Suis-je obligé d\'avoir une assurance auto ?',
		answer: 'Oui, l\'assurance responsabilité civile (au tiers) est obligatoire pour conduire, même occasionnellement. Sans assurance, vous risquez une amende de 3750€, la suspension de permis et la confiscation du véhicule.',
		category: 'Assurances'
	},
	{
		id: '6',
		question: 'Comment savoir si j\'ai droit aux APL ?',
		answer: 'Les APL dépendent de vos revenus, de votre situation familiale, et du type de logement. Utilisez le simulateur sur caf.fr pour connaître vos droits. La demande doit être faite dès l\'entrée dans le logement.',
		category: 'Logement'
	},
	{
		id: '7',
		question: 'Que faire si je n\'ai pas de médecin traitant ?',
		answer: 'Vous pouvez consulter n\'importe quel médecin, mais vous serez moins bien remboursé. Choisissez un médecin généraliste près de chez vous et déclarez-le comme médecin traitant sur ameli.fr ou lors d\'une consultation.',
		category: 'Santé'
	},
	{
		id: '8',
		question: 'Comment créer un budget quand on a des revenus irréguliers ?',
		answer: 'Basez-vous sur vos revenus minimums garantis. Constituez un fonds d\'urgence les bons mois. Priorisez les charges fixes (logement, assurances) et ajustez les dépenses variables selon vos rentrées d\'argent.',
		category: 'Budget'
	},
	{
		id: '9',
		question: 'Combien de temps est valable ma carte d\'identité ?',
		answer: 'Une carte d\'identité est valable 15 ans pour les majeurs et 10 ans pour les mineurs. Pensez à la renouveler avant expiration car les délais peuvent être longs.',
		category: 'Administration'
	},
	{
		id: '10',
		question: 'Est-ce que je dois m\'inscrire sur les listes électorales ?',
		answer: 'L\'inscription est souvent automatique à 18 ans si vos parents sont inscrits. Sinon, vous devez vous inscrire avant le 31 décembre de l\'année précédant une élection. C\'est obligatoire pour pouvoir voter.',
		category: 'Administration'
	},
	{
		id: '11',
		question: 'Comment obtenir ma carte vitale ?',
		answer: 'Vous pouvez faire votre demande en ligne sur ameli.fr ou vous rendre dans votre CPAM avec une pièce d\'identité et un justificatif de domicile. La carte vitale est gratuite et indispensable pour vos remboursements.',
		category: 'Administration'
	},
	{
		id: '12',
		question: 'Quelles aides financières puis-je demander ?',
		answer: 'Utilisez le simulateur sur mesdroitssociaux.gouv.fr pour connaître toutes les aides auxquelles vous avez droit : APL, prime d\'activité, RSA, bourses étudiantes, etc. Les critères dépendent de vos revenus et situation.',
		category: 'Administration'
	},
	{
		id: '13',
		question: 'Qu\'est-ce qu\'un état des lieux et pourquoi c\'est important ?',
		answer: 'L\'état des lieux compare l\'état du logement à l\'entrée et à la sortie. Il doit être très précis pour éviter que des dégradations préexistantes vous soient imputées. Prenez des photos et notez tous les détails.',
		category: 'Logement'
	},
	{
		id: '14',
		question: 'Quel délai de préavis dois-je respecter pour quitter mon logement ?',
		answer: 'Généralement 3 mois pour un logement vide et 1 mois pour un meublé. Ce délai peut être réduit à 1 mois dans certaines zones tendues ou situations particulières (mutation, perte d\'emploi, etc.).',
		category: 'Logement'
	},
	{
		id: '15',
		question: 'Quand dois-je souscrire mon assurance habitation ?',
		answer: 'L\'assurance habitation doit être souscrite avant la remise des clés et l\'attestation fournie au propriétaire. Sans cette assurance, vous ne pourrez pas emménager. Comparez les garanties et tarifs.',
		category: 'Logement'
	},
	{
		id: '16',
		question: 'Comment faire pour avoir l\'électricité et l\'eau dans mon nouveau logement ?',
		answer: 'Contactez les fournisseurs (EDF, Engie, etc.) environ 15 jours avant votre emménagement. Pour l\'eau, renseignez-vous auprès de la mairie. Prévoyez un délai pour l\'ouverture des compteurs.',
		category: 'Logement'
	},
	{
		id: '17',
		question: 'Comment bien choisir mon médecin traitant ?',
		answer: 'Choisissez un médecin généraliste proche de chez vous, avec des horaires qui vous conviennent. Vérifiez qu\'il accepte de nouveaux patients. Vous pouvez le déclarer lors d\'une consultation ou sur ameli.fr.',
		category: 'Santé'
	},
	{
		id: '18',
		question: 'Dois-je mettre à jour mes vaccins en devenant adulte ?',
		answer: 'Oui, vérifiez votre carnet de vaccination. Certains rappels sont nécessaires (DTP tous les 20 ans, puis tous les 10 ans après 65 ans). Consultez votre médecin pour faire le point.',
		category: 'Santé'
	},
	{
		id: '19',
		question: 'Comment créer mon premier CV sans expérience ?',
		answer: 'Mettez en avant votre formation, vos stages, jobs étudiants, projets personnels et compétences. Utilisez un format simple et lisible. Adaptez votre CV à chaque offre d\'emploi en utilisant les mots-clés de l\'annonce.',
		category: 'Emploi'
	},
	{
		id: '20',
		question: 'Dois-je m\'inscrire à France Travail même si j\'ai un job ?',
		answer: 'Si vous cherchez un emploi ou une formation, oui. L\'inscription vous donne accès aux offres, conseils et certaines aides. Vous pouvez aussi vous inscrire en cas de contrat précaire pour sécuriser vos droits.',
		category: 'Emploi'
	},
	{
		id: '21',
		question: 'Que dois-je vérifier dans mon premier contrat de travail ?',
		answer: 'Vérifiez le type de contrat (CDI, CDD, stage), la durée, le salaire, les horaires, le lieu de travail, la période d\'essai et les congés. N\'hésitez pas à poser des questions avant de signer.',
		category: 'Emploi'
	},
	{
		id: '22',
		question: 'Quelles sont les dates importantes à retenir pour les impôts ?',
		answer: 'Déclaration des revenus : avril à juin (date exacte selon votre département). Paiement du solde : 31 décembre maximum. Surveillez vos prélèvements à la source et ajustez si nécessaire.',
		category: 'Administration'
	},
	{
		id: '23',
		question: 'Que risque-t-il si je ne paie pas mes impôts à temps ?',
		answer: 'Majorations de 10% dès le premier jour de retard, puis intérêts de retard. En cas de retard répété, les pénalités peuvent atteindre 40%. Contactez rapidement le service des impôts si vous avez des difficultés.',
		category: 'Administration'
	},
	{
		id: '24',
		question: 'Mon propriétaire peut-il garder tout mon dépôt de garantie ?',
		answer: 'Non, il ne peut garder que ce qui correspond aux réparations nécessaires (hors usure normale). Il doit vous restituer le reste dans les 2 mois maximum, avec un état des lieux détaillé des retenues.',
		category: 'Logement'
	},
	{
		id: '25',
		question: 'À partir de quel salaire dois-je payer des impôts ?',
		answer: 'En 2024, vous commencez à payer des impôts à partir d\'environ 17 275€ de revenus nets annuels pour une personne seule. Mais vous devez déclarer vos revenus dès le premier euro, même si vous ne payez rien.',
		category: 'Administration'
	},
	{
		id: '26',
		question: 'Comment économiser quand on gagne le SMIC ?',
		answer: 'Appliquez la règle 50/30/20 : 50% pour les besoins essentiels, 30% pour les loisirs, 20% pour l\'épargne. Commencez par 50€/mois si possible. Profitez des apps anti-gaspi, des bons plans étudiants et négociez vos abonnements.',
		category: 'Budget'
	},
	{
		id: '27',
		question: 'Combien d\'argent dois-je avoir de côté "au cas où" ?',
		answer: 'L\'idéal est d\'avoir 3 à 6 mois de charges courantes de côté (loyer, nourriture, transport). Si vous débutez, commencez par 1000€ d\'urgence, puis augmentez progressivement.',
		category: 'Budget'
	},
	{
		id: '28',
		question: 'Est-ce que je peux vivre sans assurance habitation ?',
		answer: 'Non si vous êtes locataire, c\'est obligatoire par la loi. Si vous êtes propriétaire, ce n\'est pas obligatoire mais fortement recommandé. Sans assurance, vous risquez de tout perdre en cas d\'incendie ou dégât des eaux.',
		category: 'Assurances'
	},
	{
		id: '29',
		question: 'Dois-je prendre l\'assurance proposée avec mon téléphone/ordinateur ?',
		answer: 'Vérifiez d\'abord si votre assurance habitation ou carte bancaire ne couvre pas déjà ces appareils. Les assurances vendeurs sont souvent chères avec beaucoup d\'exclusions. Lisez bien les conditions avant de souscrire.',
		category: 'Assurances'
	},
	{
		id: '30',
		question: 'Comment négocier mon premier salaire ?',
		answer: 'Renseignez-vous sur les salaires du secteur sur des sites comme Glassdoor. Mettez en avant vos compétences spécifiques, stages et projets. Pour un premier emploi, négociez aussi les avantages : formation, télétravail, mutuelle.',
		category: 'Emploi'
	},
	{
		id: '31',
		question: 'Que faire si mon employeur ne me paie pas ?',
		answer: 'Envoyez d\'abord une mise en demeure par courrier recommandé. Si pas de réponse sous 15 jours, contactez l\'inspection du travail et le conseil de prud\'hommes. Vous pouvez aussi demander une avance à France Travail sur vos droits.',
		category: 'Emploi'
	},
	{
		id: '32',
		question: 'Comment démissionner sans perdre mes droits au chômage ?',
		answer: 'Depuis 2019, vous pouvez toucher le chômage après démission si vous avez travaillé 5 ans dans les 45 derniers mois ET que vous avez un "projet professionnel sérieux" (formation, création d\'entreprise, reconversion).',
		category: 'Emploi'
	},
	{
		id: '33',
		question: 'Combien coûte vraiment un déménagement ?',
		answer: 'Comptez 800-1500€ pour un déménageur professionnel (studio/T2), 300-600€ si vous le faites vous-même (location camion + essence + aides). Ajoutez les frais : caution nouveau logement, changements d\'adresse, nouveaux contrats.',
		category: 'Déménagement'
	},
	{
		id: '35',
		question: 'Dois-je prévenir tout le monde quand je déménage ?',
		answer: 'Oui ! Faites votre changement d\'adresse à La Poste, puis prévenez : impôts, CAF, sécurité sociale, banque, assurances, employeur, fournisseurs d\'énergie. Utilisez le service en ligne pour certains organismes.',
		category: 'Déménagement'
	},
	{
		id: '36',
		question: 'Ai-je besoin d\'un visa pour voyager en Europe ?',
		answer: 'Non, avec une carte d\'identité ou un passeport français valide, vous pouvez voyager librement dans l\'Union Européenne. Pour certains pays (Royaume-Uni, Russie, Balkans hors UE), vérifiez les conditions sur diplomatie.gouv.fr.',
		category: 'Voyages'
	},
	{
		id: '37',
		question: 'Mon assurance carte bancaire suffit-elle pour voyager ?',
		answer: 'Pour l\'Europe, souvent oui si vous avez une carte haut de gamme. Pour l\'étranger lointain, vérifiez les plafonds de couverture médicale (souvent insuffisants). Une assurance voyage dédiée est recommandée pour l\'Amérique ou l\'Asie.',
		category: 'Voyages'
	},
	{
		id: '38',
		question: 'Que faire si je perds mes papiers en voyage ?',
		answer: 'Contactez immédiatement le consulat français le plus proche avec vos photocopies. Ils peuvent émettre un laissez-passer. C\'est pourquoi il faut toujours avoir des copies physiques et numériques de vos documents séparées des originaux.',
		category: 'Voyages'
	},
	{
		id: '39',
		question: 'Peut-on créer son entreprise quand on est salarié ?',
		answer: 'Oui, mais vérifiez votre contrat de travail (clause de non-concurrence). Vous devez informer votre employeur si votre entreprise fait de la concurrence. Le statut de micro-entrepreneur est compatible avec un emploi salarié.',
		category: 'Entreprendre'
	},
	{
		id: '40',
		question: 'Combien ça coûte de créer son entreprise ?',
		answer: 'Micro-entreprise : gratuit. SASU/EURL : environ 200-500€ (frais greffe, publication légale). SARL/SAS : 500-1000€. Ajoutez les frais annexes : comptable, assurances, domiciliation. Certaines aides peuvent réduire ces coûts.',
		category: 'Entreprendre'
	},
	{
		id: '41',
		question: 'Micro-entreprise ou vraie société : comment choisir ?',
		answer: 'Micro-entreprise si CA prévisible < 77 000€ (services) ou 188 000€ (vente), peu d\'investissements, activité simple. Société (SASU/EURL) si CA plus élevé, besoin de déduire des charges, protection patrimoine personnelle.',
		category: 'Entreprendre'
	},
	{
		id: '42',
		question: 'Puis-je toucher le chômage si je crée mon entreprise ?',
		answer: 'Oui, avec l\'ARCE (45% de vos droits en capital) ou l\'ARE maintenue partiellement selon vos revenus d\'entrepreneur. L\'ACRE vous exonère aussi de cotisations sociales la première année. Rapprochez-vous de France Travail.',
		category: 'Entreprendre'
	},
	{
		id: '43',
		question: 'Comment savoir si mon idée d\'entreprise est viable ?',
		answer: 'Testez votre idée : sondez votre entourage, créez un MVP (produit minimum viable), vendez en précommande. Analysez la concurrence, calculez vos coûts réels. Utilisez les outils gratuits de Bpifrance pour valider votre business model.',
		category: 'Entreprendre'
	},
	{
		id: '44',
		question: 'À quoi sert vraiment le Livret A ?',
		answer: 'Le Livret A est votre épargne de sécurité : argent disponible immédiatement, sans risque, défiscalisé. Taux bas (3% en 2024) mais c\'est normal, c\'est pour vos urgences, pas pour faire fortune. Plafond : 22 950€.',
		category: 'Budget'
	},
	{
		id: '45',
		question: 'Découvert ou crédit conso : qu\'est-ce qui coûte le moins cher ?',
		answer: 'Le découvert coûte très cher (15-20% par an) et doit rester exceptionnel. Un crédit conso a des taux plus bas (3-8%) mais vous engage sur la durée. Pour un besoin ponctuel, demandez plutôt une avance à un proche.',
		category: 'Budget'
	},
	{
		id: '46',
		question: 'Mes parents peuvent-ils se porter garants pour mon logement ?',
		answer: 'Oui, c\'est très courant et souvent exigé par les propriétaires pour les jeunes. Vos parents s\'engagent à payer si vous ne pouvez plus. Alternative : la garantie Visale (gratuite) pour les moins de 30 ans ou apprentis.',
		category: 'Logement'
	},
	{
		id: '47',
		question: 'Colocation : qui paie quoi si un coloc part sans prévenir ?',
		answer: 'Si vous êtes tous sur le bail (clause de solidarité), vous êtes tous responsables du loyer total. Le propriétaire peut vous demander de payer la part du coloc parti. D\'où l\'importance d\'une bonne entente et d\'un règlement de colocation écrit.',
		category: 'Logement'
	},
	{
		id: '48',
		question: 'Que faire si je tombe malade à l\'étranger ?',
		answer: 'En Europe : utilisez votre carte européenne d\'assurance maladie (CEAM) pour être remboursé. Hors Europe : avancez les frais, gardez tous les justificatifs. Votre mutuelle et assurance voyage vous rembourseront selon les garanties.',
		category: 'Santé'
	},
	{
		id: '49',
		question: 'Contraception : qu\'est-ce qui est gratuit ?',
		answer: 'Depuis 2022, pour les moins de 26 ans : pilule, stérilet, implant, préservatifs sont gratuits en pharmacie sur prescription. Pour tous : centres de planification familiale gratuits, préservatifs gratuits dans certains lieux (universités, centres de santé).',
		category: 'Santé'
	},
	{
		id: '50',
		question: 'Dois-je déclarer mes jobs d\'été/étudiants aux impôts ?',
		answer: 'Oui, tous vos revenus doivent être déclarés (jobs, stages rémunérés, auto-entreprise). Mais si vous gagnez moins de 4 936€ par an en jobs étudiants (2024), vous êtes exonéré d\'impôt. Déclarez quand même pour justifier vos ressources.',
		category: 'Administration'
	}
];

export const faqCategories = ['Tous', 'Administration', 'Santé', 'Logement', 'Banque', 'Assurances', 'Budget', 'Emploi', 'Déménagement', 'Voyages', 'Entreprendre'];

// Fonction utilitaire pour obtenir les FAQ par catégorie
export const getFAQByCategory = (category: string): FAQItem[] => {
	if (category === 'Tous') {
		return faqData;
	}
	return faqData.filter(item => item.category === category);
};

// Fonction utilitaire pour obtenir une FAQ par ID
export const getFAQById = (id: string): FAQItem | undefined => {
	return faqData.find(item => item.id === id);
};