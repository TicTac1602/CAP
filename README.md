# Cap Adulte 📋

Une plateforme web moderne qui centralise toutes les informations et démarches pratiques qu'un jeune adulte doit connaître pour bien démarrer sa vie indépendante. Cap Adulte accompagne les 18-30 ans dans leur transition vers l'autonomie grâce à des outils interactifs, des guides pratiques et des simulateurs personnalisés.

## 🎯 Objectif

Simplifier la vie des jeunes adultes en proposant :
- **Des checklists interactives** pour ne rien oublier dans ses démarches
- **Des guides détaillés** pour comprendre les procédures administratives
- **Des simulateurs pratiques** pour prendre les bonnes décisions financières
- **Un calendrier personnalisé** pour gérer ses échéances importantes
- **Une FAQ complète** pour répondre aux questions les plus fréquentes

## ✨ Fonctionnalités principales

### 🏠 **9 Thèmes essentiels**
- **👨‍💼 Administration** : Impôts, carte d'identité, sécurité sociale, aides publiques
- **🏠 Logement** : Location, achat, assurance habitation, aides au logement
- **🏥 Santé** : Mutuelle, médecin traitant, remboursements, urgences
- **💳 Banque & Budget** : Compte bancaire, budget, épargne, crédit
- **🚗 Assurances** : Auto, habitation, responsabilité civile, garanties
- **💼 Emploi** : CV, entretiens, contrats de travail, droits du travail
- **📦 Déménagement** : Préparation, organisation, astuces
- **✈️ Voyages** : Passeport, visas, assurances, conseils pratiques
- **🚀 Entreprendre** : Statuts juridiques, démarches, fiscalité, aides

### 📋 **Checklists intelligentes**
- **Progression sauvegardée** automatiquement en local
- **Système de priorités** avec codes couleurs (haute/moyenne/basse)
- **Ressources contextuelles** avec liens vers sites officiels
- **Statistiques de progression** par thème

### 📚 **Guides détaillés avec Markdown enrichi**
- **Articles complets** sur les démarches importantes
- **Rendu moderne** avec composants React optimisés
- **Navigation par ancres** pour accès direct aux sections
- **Design cohérent** avec le reste de la plateforme
- **Liens externes** clairement identifiés

### 🧮 **Simulateurs financiers**
- **💰 Simulateur de budget** : Règle 50-30-20 avec conseils personnalisés
- **📊 Analyse des dépenses** avec recommandations
- **⚠️ Alertes budgétaires** pour une meilleure gestion
- **📈 Prochains simulateurs** : Impôts, capacité d'emprunt, épargne, retraite

### 📅 **Calendrier personnalisé**
- **Échéances importantes** regroupées par mois
- **Rappels automatiques** pour les démarches à ne pas oublier

### ❓ **FAQ complète et searchable**
- **80+ questions** couvrant tous les thèmes
- **Filtres par catégorie** pour recherche ciblée

## 🛠 Stack technologique

### **Frontend moderne**
- **⚛️ Next.js 15** : Framework React avec App Router et SSG
- **🔷 TypeScript** : Typage strict pour un code robuste
- **🎨 Tailwind CSS 4** : Styling utilitaire et responsive design
- **📝 React Markdown** : Rendu enrichi des guides avec `remark-gfm`

### **Développement et qualité**
- **🔍 ESLint 9** : Linting avec config Next.js
- **📊 Vercel Analytics** : Mesure de performance et usage
- **⚡ PostCSS** : Optimisation CSS avancée
- **🏗️ TypeScript strict mode** : Configuration type-safe

### **Architecture et données**
- **📂 App Router** : Routing moderne de Next.js 15
- **💾 LocalStorage** : Sauvegarde côté client sans backend
- **📊 Données statiques** : JSON/TypeScript pour contenu structuré
- **🔗 Génération statique** : SSG pour des performances optimales

### **Déploiement et performance**
- **☁️ Vercel** : Déploiement automatique avec preview
- **🚀 Edge Functions** : Performance globale optimisée
- **♿ Accessibilité** : Standards WCAG respectés

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

## � Roadmap et évolutions

### **🔄 Version actuelle (1.0)**
- ✅ 9 thèmes complets avec checklists interactives
- ✅ 8 guides détaillés en Markdown enrichi
- ✅ Simulateur de budget avec règle 50-30-20
- ✅ FAQ complète avec 80+ questions
- ✅ Interface responsive et accessible
- ✅ Sauvegarde locale des progressions

### **📈 Version 2.0 (Q1 2026)**
- [ ] **🧮 Nouveaux simulateurs** : Impôts, capacité d'emprunt, épargne
- [ ] **📅 Calendrier avancé** : Rappels personnalisés et notifications
- [ ] **🔍 Recherche globale** : Moteur de recherche dans tout le contenu
- [ ] **📸 Guides visuels** : Screenshots et vidéos tutorielles
- [ ] **💬 Système de commentaires** : Intégration Giscus/Disqus
- [ ] **📊 Analytics avancées** : Tableaux de bord utilisateur

### **🌟 Version 3.0 (Q3 2026)**
- [ ] **🔔 Notifications intelligentes** : Push notifications web
- [ ] **🌙 Mode sombre** : Thème dark/light avec préférence système
- [ ] **📄 Génération PDF** : Export de checklists et modèles de lettres
- [ ] **🔗 API externe** : Intégration données temps réel (barèmes, taux)
- [ ] **👥 Profils utilisateur** : Comptes optionnels pour sync multi-device
- [ ] **🎯 Personnalisation** : Recommandations basées sur le profil

### **💡 Idées à long terme**
- [ ] **🤖 Assistant IA** : Chatbot pour questions personnalisées
- [ ] **📲 App mobile native** : iOS/Android avec notifications push
- [ ] **🏛️ Partenariats officiels** : Intégrations directes administrations
- [ ] **🌍 Localisation** : Support multi-régional (DOM-TOM)
- [ ] **📊 Comparateurs** : Banques, assurances, mutuelles

## 🤝 Contribution

Les contributions sont les bienvenues ! Merci de :
1. Créer une issue pour discuter des changements
2. Fork le projet
3. Créer une branche pour votre fonctionnalité
4. Commiter vos modifications
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## **🤝 Contribution**
Les contributions sont encouragées ! Voir [CONTRIBUTING.md](./CONTRIBUTING.md) pour :
- 📝 **Améliorer le contenu** : Corriger, enrichir, actualiser
- 🐛 **Reporter des bugs** : Issues détaillées avec reproductions
- ✨ **Proposer des fonctionnalités** : Nouvelles idées et améliorations  
- 🔧 **Contribuer au code** : Pull requests avec tests

---

## 🎯 Mission

> **Cap Adulte accompagne la transition vers l'autonomie en rendant l'administratif français accessible, compréhensible et moins stressant pour tous les jeunes adultes.**

**Parce que devenir adulte, ça s'apprend ! 🎓✨**

