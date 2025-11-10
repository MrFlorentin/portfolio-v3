# Portfolio — Florentin Léger

Un site-portfolio développé avec Nuxt 3 & Tailwind CSS pour présenter les projets, le parcours et les contacts de Florentin Léger. Ce dépôt contient la version source du site (design responsive, accessibilité et SEO de base).

---

## Aperçu

- Langue : français
- Identité visuelle : palette bleu #3255A0
- Framework : Nuxt 3 (Vue 3)
- UI : Tailwind CSS

Si vous voulez voir le site localement, suivez les commandes dans la section « Installation ».

---

## Fonctionnalités

- Page unique (SPA) structurée en sections : hero, à propos, timeline, projets, contact et footer
- Chargement des projets et timeline depuis des fichiers JSON (DRY)
- Filtrage par compétences et pagination des projets
- Images web optimisées (WebP) dans `/public/images/projects`
- Accessibilité : labels ARIA, roles sémantiques
- SEO de base : meta tags Open Graph / Twitter (configurés dans `nuxt.config.ts`)

---

## Tech Stack

- Nuxt 3 (v4.x)
- Vue 3 (Composition API)
- Tailwind CSS
- Typekit pour la typographie

---

## Prérequis

- Node.js 18+ recommandé
- npm (ou pnpm / yarn)

---

## Installation & démarrage

Cloner le dépôt, installer les dépendances et lancer le serveur de développement :

```bash
# cloner
git clone https://github.com/MrFlorentin/portfolio-v3.git
cd portfolio-v3

# installer
npm install

# développement
npm run dev
```

Commandes utiles (définies dans `package.json`) :

```bash
npm run dev     # démarrer le serveur de développement
npm run build   # builder pour la production
npm run preview # prévisualiser le build localement
```

---

## Structure du projet (extrait)

```
/
├─ app/                    # code Nuxt (app.vue, data, assets)
│  ├─ app.vue              # entrée principale (single-file)
│  ├─ assets/css/main.css  # CSS custom minimal
│  └─ data/                # projets et timeline (JSON)
├─ public/                 # assets publiques (images, favicon)
├─ nuxt.config.ts          # configuration Nuxt (meta, plugins)
├─ package.json
└─ README.md
```

### Fichiers de données

- `/app/data/projects.json` — liste DRY des projets (titre, tags, image, alt, lien)
- `/app/data/timeline.json` — items du parcours

---

## Accessibilité

Le projet inclut des améliorations ARIA : roles, aria-labels, aria-pressed et aria-current sur les éléments interactifs. Quelques bonnes pratiques :

- Vérifier les contrastes couleurs (outil : Lighthouse / axe)
- Tester la navigation clavier (Tab / Shift+Tab)
- Ajouter des alt significatifs aux images de projets

---

## Déploiement

Déployer la build statique ou serveur sur la plateforme de votre choix. Exemples : Vercel, Netlify, Railway.

Généralement :

1. Configurer la commande de build `npm run build`
2. Définir la variable d\'environnement NODE_VERSION si besoin
3. Pointer la racine du site sur `dist/` (ou suivre la doc de la plateforme)

---

## Personnalisation rapide

- Couleur principale : `--bleu` dans `app/assets/css/main.css`
- Police : Typekit (configurable dans `main.css`)
- Ajouter ou modifier des projets -> éditer `/app/data/projects.json`

---

## Contribuer

Si vous voulez proposer une amélioration : ouvrez une issue ou une PR. Respectez le format des fichiers JSON si vous ajoutez des projets.

---

## Contact

- Nom : Florentin Léger

