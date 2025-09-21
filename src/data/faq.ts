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
  }
];

export const faqCategories = ['Tous', 'Administration', 'Santé', 'Logement', 'Banque', 'Assurances', 'Budget'];

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