# AGENTS.md

Portfolio personnel — Next.js 16 (App Router), React 19, TypeScript, Prisma 6 (PostgreSQL), NextAuth.js v4, Tailwind CSS v4, shadcn/ui (Base UI).

Roadmap et avancement : voir `STATUS.md`.

## Stack & outils

- **Framework** : Next.js 16 App Router (Route Handlers pour le backend), React 19
- **BDD** : PostgreSQL via Prisma 6 — générateur `prisma-client`, client généré dans `lib/generated/prisma/` (gitignoré), config CLI dans `prisma.config.ts`
- **Auth** : NextAuth.js **v4** — email/password (Credentials) + OAuth (GitHub, Google), session JWT, `@auth/prisma-adapter`
- **UI** : Tailwind CSS v4 (thème dans `app/globals.css`, pas de `tailwind.config`) + shadcn/ui style `base-nova` (primitives **Base UI** `@base-ui/react`, pas Radix)
- **Animations** : `motion` (`motion/react`), `react-countup`
- **Email** : Resend (formulaire de contact, `lib/mail.ts`)
- **Upload** : local dans `/public/uploads` via API Next.js — ⚠️ non persistant sur Vercel, prévoir Vercel Blob / S3 en production
- **Déploiement** : Vercel (auto depuis GitHub)

## Structure du projet

Cible (✱ = pas encore créé) :

```
├── app/
│   ├── page.tsx           # Monopage portfolio (assemble Header + sections + Footer)
│   ├── layout.tsx         # Root layout (fonts, ThemeProvider)
│   ├── admin/             # Espace admin (protégé par proxy/middleware)
│   │   ├── login/         # ✱ Page de connexion (pages.signIn NextAuth)
│   │   ├── dashboard/     # ✱ Stats visiteurs, projets, certifs, messages
│   │   ├── projets/       # ✱ CRUD projets
│   │   ├── certifications/ # ✱ CRUD certifications
│   │   ├── messages/      # ✱ Boîte de réception
│   │   ├── cv/            # ✱ Upload CV
│   │   └── parametres/    # ✱ Édition contenu statique
│   └── api/
│       ├── auth/[...nextauth]/ # NextAuth
│       ├── upload/        # ✱ Upload fichiers
│       └── contact/       # Formulaire contact (envoi email)
├── components/
│   ├── header.tsx, footer.tsx, theme-provider.tsx
│   ├── sections/          # Une section de la monopage par fichier
│   │   └── parcours-content/ # Contenu de chaque étape de la timeline Parcours
│   ├── shadcn-studio/     # Blocs shadcn-studio (timeline)
│   └── ui/                # Composants shadcn/ui (ne pas modifier)
├── lib/                   # prisma.ts, auth.ts, mail.ts, utils.ts, generated/prisma
├── prisma/                # schema.prisma (+ migrations, gitignorées)
├── proxy.ts               # Protection /admin/* (actuellement middleware.ts, à renommer)
└── public/
    ├── images/            # Assets statiques (photo hero…)
    └── uploads/           # Fichiers uploadés (images, CV)
```

## Pages publiques (monopage)

Sections dans l'ordre : Hero → À propos → Services → Parcours (timeline) → Compétences → Projets (grille avec filtre stack, modal détail) → Certifications → CV (download) → Contact (formulaire).

Chaque section est un `<section id="…">` ; la nav du header pointe sur ces ancres.

Dark mode via `next-themes` avec toggle dans le header.

## Commandes

```bash
npm run dev        # Dev server (localhost:3000)
npm run build      # Build production
npm start          # Production server
npm run lint       # ESLint
npx tsc --noEmit   # Typecheck
npx prisma studio  # UI BDD
npx prisma db push # Sync schéma sans migration
npx prisma migrate dev  # Créer + appliquer migration
npx prisma generate     # Regénérer client Prisma
npx shadcn@latest add <component>  # Ajouter un composant shadcn/ui
```

## Conventions

- TypeScript strict, pas de `any` sans raison
- shadcn/ui : composants dans `/components/ui/`, ne pas modifier directement. Base UI : pour rendre un composant comme lien, utiliser la prop `render` (pas `asChild`, pas de `<Link>` imbriqué dans `<Button>`)
- Prisma : appeler `db` depuis `lib/prisma.ts` (singleton) ; le type `PrismaClient` s'importe depuis `@/lib/generated/prisma/client`
- Upload : fichiers dans `/public/uploads/`, préfixe timestamp pour éviter collisions
- Admin : routes protégées via `proxy.ts` (`withAuth`) + `getServerSession(authOptions)` côté serveur (API next-auth v4)
- Dark mode : classe `dark` sur `<html>`, toggle via `next-themes`
- Animations : respecter `useReducedMotion()`
- Formulaires : React Hook Form + Zod validation côté serveur ; échapper toute donnée utilisateur insérée dans un email HTML
- Contenu du site en français

## Modèles Prisma

Existants : `User` / `Account` / `Session` / `VerificationToken` — NextAuth.js (`User` à compléter avec un hash de mot de passe pour Credentials).

À créer :

- `Project` : title, slug, description, stack[], videoUrl, gitUrl, image, published, createdAt
- `Certification` : title, description, image, date, issuer
- `Message` : name, email, subject?, message, read, createdAt
- `SiteSetting` : key, value (À propos, Services, SEO, réseaux sociaux)
- `Visitor` : timestamp, page, ipHash
