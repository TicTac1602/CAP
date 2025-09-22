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
		question: 'Dois-je m\'inscrire à Pôle Emploi même si j\'ai un job ?',
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
	}
];

export const faqCategories = ['Tous', 'Administration', 'Santé', 'Logement', 'Banque', 'Assurances', 'Budget', 'Emploi'];

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