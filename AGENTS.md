# AGENTS.md

Portfolio personnel — Next.js 14 (App Router), TypeScript, Prisma (PostgreSQL), NextAuth.js, Tailwind CSS, shadcn/ui.

## Stack & outils

- **Framework** : Next.js 14 App Router (API Routes pour le backend)
- **BDD** : PostgreSQL via Prisma ORM
- **Auth** : NextAuth.js — email/password + OAuth (GitHub, Google)
- **UI** : Tailwind CSS + shadcn/ui (Radix primitives)
- **Upload** : Local dans `/public/uploads` via API Next.js
- **Déploiement** : Vercel (auto depuis GitHub)

## Structure du projet

```
├── app/
│   ├── (public)/          # Pages visiteur (layout public)
│   │   ├── page.tsx       # Monopage portfolio (sections défilables)
│   │   └── layout.tsx     # Layout public avec header/nav
│   ├── admin/             # Espace admin (protégé par middleware)
│   │   ├── dashboard/     # Stats visiteurs, projets, certifs, messages
│   │   ├── projets/       # CRUD projets
│   │   ├── certifications/ # CRUD certifications
│   │   ├── messages/      # Boîte de réception
│   │   ├── cv/            # Upload CV
│   │   └── parametres/    # Édition contenu statique
│   ├── api/               # Routes API
│   │   ├── auth/          # NextAuth
│   │   ├── upload/        # Upload fichiers
│   │   └── contact/       # Formulaire contact
│   └── layout.tsx         # Root layout
├── components/            # Composants React réutilisables
├── lib/                   # Prisma client, auth config, utils
├── prisma/                # Schéma + migrations
└── public/uploads/        # Fichiers uploadés (images, CV)
```

## Pages publiques (monopage)

Sections dans l'ordre : Hero → À propos → Compétences → Services → Projets (grille avec filtre stack, modal détail) → Certifications → CV (download) → Contact (formulaire).

Dark mode via `next-themes` avec toggle dans le header.

## Commandes

```bash
npm run dev        # Dev server (localhost:3000)
npm run build      # Build production
npm start          # Production server
npx prisma studio  # UI BDD
npx prisma db push # Sync schéma sans migration
npx prisma migrate dev  # Créer + appliquer migration
npx prisma generate     # Regénérer client Prisma
```

## Conventions

- TypeScript strict, pas de `any` sans raison
- shadcn/ui : composants dans `/components/ui/`, ne pas modifier directement
- Prisma : appeler `db` depuis `lib/prisma.ts` (singleton)
- Upload : fichiers dans `/public/uploads/`, préfixe timestamp pour éviter collisions
- Admin : routes protégées via `middleware.ts` + `getServerSession`
- dark mode : classe `dark` sur `<html>`, toggle via `next-themes`
- Formulaires : React Hook Form + Zod validation côté serveur

## Modèles Prisma

- `Project` : title, slug, description, stack[], videoUrl, gitUrl, image, published, createdAt
- `Certification` : title, description, image, date, issuer
- `Message` : name, email, message, read, createdAt
- `SiteSetting` : key, value (À propos, Services, SEO, réseaux sociaux)
- `Visitor` : timestamp, page, ipHash
- `Account` / `Session` / `User` — NextAuth.js
