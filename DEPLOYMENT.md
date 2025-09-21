# Instructions de déploiement 🚀

## Étapes pour déployer "Cap Adulte"

### 1. Créer un repository GitHub

1. Aller sur [GitHub.com](https://github.com) et créer un nouveau repository
2. Nom : `checklist-adulte`
3. Description : `🏠📋 Plateforme d'accompagnement pour jeunes adultes - Guides, checklists et outils pour bien démarrer sa vie indépendante`
4. Public
5. Ne pas initialiser avec README (on a déjà les fichiers)

### 2. Pousser le code vers GitHub

```bash
cd /Users/edt/Documents/Projet\ Perso/checklistAdulte/checklist-adulte

# Ajouter l'origine distante (remplacer USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/USERNAME/checklist-adulte.git

# Pousser le code
git branch -M main
git push -u origin main
```

### 3. Déployer sur Vercel

#### Option A : Via l'interface web (Recommandé)
1. Aller sur [vercel.com](https://vercel.com)
2. Se connecter avec GitHub
3. Cliquer "New Project"
4. Sélectionner le repository `checklist-adulte`
5. Les paramètres par défaut sont corrects pour Next.js
6. Cliquer "Deploy"

#### Option B : Via Vercel CLI
```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Suivre les instructions :
# ? Set up and deploy "checklist-adulte"? [Y/n] Y
# ? Which scope do you want to deploy to? [Votre compte]
# ? Link to existing project? [y/N] N
# ? What's your project's name? checklist-adulte
# ? In which directory is your code located? ./
```

### 4. Configuration post-déploiement

Une fois déployé, vous obtiendrez :
- URL de production : `https://checklist-adulte-xxx.vercel.app`
- URL personnalisée possible : `https://checklist-adulte.vercel.app`

### 5. Domaine personnalisé (optionnel)

Pour un domaine personnalisé :
1. Dans Vercel Dashboard → Projet → Settings → Domains
2. Ajouter votre domaine (ex: `checklistadulte.fr`)
3. Configurer les DNS selon les instructions Vercel

## Variables d'environnement

Aucune variable d'environnement requise pour le MVP actuel.

## Mises à jour automatiques

Vercel redéploiera automatiquement à chaque push sur la branche `main`.

## Performance et optimisations

Le site est déjà optimisé pour :
- ✅ Génération statique (SSG)
- ✅ Lazy loading des images
- ✅ Minification automatique
- ✅ Compression gzip
- ✅ Cache optimisé

## Métriques à surveiller

Une fois en ligne, surveillez :
- Core Web Vitals dans Vercel Analytics
- Temps de chargement des pages
- Taux de bounce
- Pages les plus visitées

---

🎉 **Votre MVP est prêt pour le déploiement !**

Le site contient déjà :
- 6 thèmes d'informations
- 20+ tâches de checklists
- Simulateur de budget fonctionnel
- FAQ avec 8 questions
- Design responsive complet