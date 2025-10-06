# Guide de contribution - Cap Adulte 🤝

Merci de votre intérêt pour contribuer à Cap Adulte ! Ce guide vous explique comment participer efficacement au développement de la plateforme.

## 🎯 Vision du projet

Cap Adulte vise à simplifier la transition vers l'autonomie pour les jeunes adultes en France. Toute contribution doit s'aligner sur cette mission :

- **🎓 Pédagogie** : Rendre l'information accessible et compréhensible
- **🛡️ Fiabilité** : Garantir des informations exactes et à jour
- **🎨 Simplicité** : Privilégier la clarté à la complexité
- **♿ Accessibilité** : Être utilisable par tous, partout

## 🚀 Comment contribuer

### 📝 **Améliorer le contenu**

#### Guides et articles
- **Corriger des erreurs** : Fautes, informations obsolètes, liens brisés
- **Enrichir le contenu** : Ajouter des détails, exemples, captures d'écran
- **Créer de nouveaux guides** : Suivre le template Markdown existant
- **Actualiser les données** : Barèmes fiscaux, plafonds, dates limites

#### Checklists et FAQ
- **Ajouter des tâches** : Nouvelles démarches importantes à ne pas oublier
- **Améliorer la priorisation** : Ajuster l'importance des tâches
- **Enrichir les ressources** : Liens vers sites officiels et outils
- **Nouvelles questions FAQ** : Issues des retours utilisateurs

### 🔧 **Développement technique**

#### Frontend et UX
- **Améliorer l'interface** : Composants React, design responsive
- **Optimiser les performances** : Bundle size, Core Web Vitals, SEO
- **Accessibilité** : WCAG 2.1, navigation clavier, lecteurs d'écran
- **Tests** : Tests unitaires, tests d'intégration, tests E2E

#### Nouvelles fonctionnalités
- **Simulateurs** : Impôts, épargne, capacité d'emprunt
- **Outils pratiques** : Calendrier avancé, notifications, recherche
- **Intégrations** : APIs officielles, export PDF, partage social

### 🐛 **Reporter des bugs**

Avant de créer une issue :
1. **Vérifiez** qu'elle n'existe pas déjà
2. **Testez** sur la dernière version
3. **Reproduisez** le problème de manière fiable

#### Template de bug report
```markdown
## 🐛 Description du bug
Description claire et concise du problème.

## 🔄 Étapes pour reproduire
1. Aller sur '...'
2. Cliquer sur '...'
3. Scroller vers '...'
4. Voir l'erreur

## ✅ Comportement attendu
Ce qui devrait normalement se passer.

## 📱 Environnement
- OS: [ex: macOS 14.0]
- Navigateur: [ex: Chrome 118.0]
- Device: [ex: iPhone 14, Desktop]

## 📷 Captures d'écran
Si applicable, ajoutez des captures d'écran.

## 📋 Contexte additionnel
Toute autre information utile sur le problème.
```

### 💡 **Proposer des fonctionnalités**

#### Template de feature request
```markdown
## 🚀 Résumé de la fonctionnalité
Description courte de ce que vous aimeriez voir implémenté.

## 🎯 Problème résolu
Quel problème cette fonctionnalité résoudrait-elle ?

## 💭 Solution proposée
Description claire de ce que vous voulez qui arrive.

## 🔄 Alternatives considérées
Autres solutions que vous avez envisagées.

## 👥 Impact utilisateur
Qui bénéficierait de cette fonctionnalité ?

## 📊 Priorité
- [ ] Critique - Bloque l'utilisation
- [ ] Haute - Amélioration significative
- [ ] Moyenne - Nice to have
- [ ] Basse - Future consideration
```

## 🛠️ Processus de développement

### 🌿 **Workflow Git**

1. **Créer une branche** pour votre contribution
   ```bash
   git checkout -b feature/nom-de-la-fonctionnalite
   # ou
   git checkout -b fix/correction-du-bug
   # ou
   git checkout -b content/nouveau-guide
   ```

2. **Faire vos modifications**
   - Code avec des standards de qualité
   - Messages de commit descriptifs
   - Tests si applicable

3. **Tester localement**
   ```bash
   npm run build  # Vérifier que le build fonctionne
   ```

4. **Créer une Pull Request**
   - Titre clair et descriptif
   - Description détaillée des changements
   - Screenshots si changements visuels
   - Lier les issues concernées

### ✅ **Standards de qualité**

#### Code
- **TypeScript** : Typage strict, interfaces bien définies
- **ESLint** : Respecter la configuration du projet
- **Prettier** : Formatage automatique du code
- **Performance** : Optimiser les imports, lazy loading
- **Accessibilité** : Attributs ARIA, contraste, navigation

#### Contenu
- **Français correct** : Orthographe, grammaire, syntaxe
- **Sources fiables** : Liens vers sites officiels uniquement
- **Actualité** : Informations à jour et vérifiées
- **Pédagogie** : Langage simple, exemples concrets

#### Commits
```bash
# Format recommandé
git commit -m "type(scope): description courte

Description plus détaillée si nécessaire.

Fixes #123"

# Types acceptés
feat:     Nouvelle fonctionnalité
fix:      Correction de bug
docs:     Documentation
style:    Formatage, styling
refactor: Refactoring sans changement fonctionnel
test:     Ajout ou modification de tests
chore:    Maintenance, mise à jour dépendances
content:  Nouveau contenu ou mise à jour
```

### 🔍 **Review process**

1. **Review automatique**
   - Pas encore en place (à venir)

2. **Review humaine**
   - Code review par l'équipe
   - Test des fonctionnalités
   - Vérification du contenu

3. **Merge**
   - Validation finale
   - Squash and merge
   - Deploy automatique

---

## 🎉 **Merci !**

Chaque contribution, petite ou grande, nous aide à rendre l'administratif français plus accessible. Ensemble, nous simplifions la vie de milliers de jeunes adultes !

**Happy contributing! 🚀**