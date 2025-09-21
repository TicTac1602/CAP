# Cap Adulte 📋

Une plateforme web qui centralise toutes les informations et démarches pratiques qu'un jeune adulte doit connaître pour bien démarrer sa vie indépendante.

## 🎯 Objectif

Offrir des guides clairs, des checklists interactives, des rappels et des outils pour éviter les oublis et les erreurs lors de la transition vers l'autonomie.

## ✨ Fonctionnalités

### 🏠 Pages thématiques
- **Administration** : Impôts, carte d'identité, sécurité sociale
- **Logement** : Location, achat, assurance habitation, aides
- **Santé** : Mutuelle, médecin traitant, remboursements
- **Banque & Budget** : Compte bancaire, budget, épargne
- **Assurances** : Auto, habitation, responsabilité civile
- **Emploi** : CV, entretiens, contrats de travail

### 📋 Checklists interactives
- Progression sauvegardée localement
- Priorités visuelles (haute, moyenne, basse)
- Échéances et rappels
- Liens vers ressources utiles

### 🧮 Simulateurs
- **Budget mensuel** : Calcul revenus/charges avec conseils personnalisés
- Répartition recommandée des dépenses
- Conseils d'épargne

### ❓ FAQ complète
- Questions fréquentes par thème
- Filtres par catégorie
- Réponses détaillées et pratiques

## 🛠 Technologies utilisées

- **Frontend** : Next.js 15, React, TypeScript
- **Styling** : Tailwind CSS
- **Stockage** : LocalStorage (pour les préférences utilisateur)
- **Déploiement** : Vercel
- **Package Manager** : npm

## 🚀 Installation et développement

```bash
# Cloner le projet
git clone [URL_DU_REPO]
cd checklist-adulte

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Lancer en production
npm start
```

Le site sera accessible sur `http://localhost:3000`

## 📁 Structure du projet

```
src/
├── app/                 # Pages Next.js (App Router)
│   ├── page.tsx        # Page d'accueil
│   ├── administration/ # Page Administration
│   ├── logement/       # Page Logement
│   ├── simulateurs/    # Simulateurs
│   └── faq/           # Questions fréquentes
├── components/         # Composants React réutilisables
│   ├── Header.tsx     # Navigation principale
│   ├── Footer.tsx     # Pied de page
│   ├── ThemeCard.tsx  # Carte de thème
│   └── Checklist.tsx  # Checklist interactive
├── data/              # Données statiques
│   └── themes.ts      # Contenu des thèmes
└── types/             # Types TypeScript
    └── index.ts       # Interfaces et types
```

## 🎨 Design et UX

- **Mobile-first** : Interface responsive
- **Accessible** : Couleurs contrastées, navigation claire
- **Progressif** : Sauvegarde automatique des checklists
- **Intuitif** : Navigation simple, pas de jargon technique

## 📊 Données et contenu

Les données sont organisées en thèmes contenant :
- **Checklists** : Tâches avec priorités et échéances
- **Guides** : Explications étape par étape
- **Points de vigilance** : Dates limites, pièges à éviter
- **Liens utiles** : Sites officiels et ressources

## 🔄 Évolutions prévues

### Version 2.0
- [ ] Calendrier de rappels personnalisé
- [ ] Simulateur d'impôts avancé
- [ ] Guides avec captures d'écran
- [ ] Système de commentaires (Disqus/Giscus)
- [ ] Recherche globale

### Version 3.0
- [ ] Notifications push
- [ ] Mode sombre
- [ ] Téléchargements PDF (modèles de lettres)
- [ ] API pour les mises à jour de contenu
- [ ] Statistiques d'usage anonymes

## 🤝 Contribution

Les contributions sont les bienvenues ! Merci de :
1. Créer une issue pour discuter des changements
2. Fork le projet
3. Créer une branche pour votre fonctionnalité
4. Commiter vos modifications
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🙏 Ressources et remerciements

- [Service-Public.fr](https://www.service-public.fr) - Informations officielles
- [CAF](https://www.caf.fr) - Aides au logement
- [Impôts.gouv.fr](https://www.impots.gouv.fr) - Déclaration de revenus
- [Ameli.fr](https://www.ameli.fr) - Sécurité sociale

## 📞 Contact

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue sur GitHub.

---

**Cap Adulte** - Parce que devenir adulte, ça s'apprend ! 🎓✨
