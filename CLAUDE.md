# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Portfolio personnel de Diano ANDRIANTSALAMA (monopage publique + espace admin). Les specs fonctionnelles sont dans [AGENTS.md](AGENTS.md). La roadmap et l'avancement sont suivis dans [STATUS.md](STATUS.md) (seul fichier de suivi) — **à mettre à jour quand une tâche est terminée**.

## Commandes

```bash
npm run dev              # localhost:3000
npm run build
npm run lint             # ESLint 9 (flat config, eslint-config-next)
npx tsc --noEmit         # typecheck (pas de script dédié)
npx prisma generate      # régénère le client dans lib/generated/prisma (gitignoré)
npx prisma db push       # sync schéma → BDD
npx prisma migrate dev
npx shadcn@latest add <composant>   # CLI "shadcn" (pas "shadcn-ui")
```

Aucun framework de test n'est installé.

## Pièges liés aux versions

Les versions installées sont récentes et leurs APIs diffèrent de la plupart des exemples en ligne — se fier à `package.json` :

- **Next.js 16** + **React 19**. `middleware.ts` est déprécié en Next 16 au profit de `proxy.ts` (export `proxy`) ; le fichier actuel utilise encore l'ancienne convention.
- **Tailwind CSS v4** : pas de `tailwind.config`, tout le thème est dans [app/globals.css](app/globals.css) (`@theme inline`, variables oklch dans `:root` / `.dark`, variante `dark` via `@custom-variant`). Couleur primaire = teal (`--primary`, hue 195).
- **shadcn style `base-nova`** : les primitives de `components/ui/` reposent sur **`@base-ui/react`**, pas Radix. Pour rendre un `Button` comme lien, utiliser la prop `render` de Base UI (pas `asChild`). Le code actuel imbrique `<Link>` dans `<Button>` (`<a>` dans `<button>`), à éviter dans le nouveau code.
- **next-auth v4** (pas v5) : `lib/auth.ts` destructure `{ auth, signIn, signOut }` depuis `NextAuth(...)`, ce qui est l'API v5 → ces exports sont `undefined` à l'exécution. En v4, utiliser `getServerSession(authOptions)` côté serveur.
- **Prisma 6** avec le générateur `prisma-client` (nouveau) : le client est généré dans `lib/generated/prisma/`, à importer depuis `@/lib/generated/prisma/client` (pas `@prisma/client`). La config CLI est dans [prisma.config.ts](prisma.config.ts) (charge `.env` via dotenv).
- Pas de route group `(public)` : la monopage est directement [app/page.tsx](app/page.tsx).
- `prisma/migrations/` est dans `.gitignore`.

## Architecture

- **Monopage** : [app/page.tsx](app/page.tsx) (client component) assemble `Header` + les sections de `components/sections/` + `Footer`. Chaque section est un `<section id="...">` ; la nav du header pointe sur ces ancres (`#apropos`, `#services`, `#parcours`, `#skills`, `#contact`). Ajouter une section = créer le composant, l'insérer dans `page.tsx`, ajouter le lien dans `navLinks` de [components/header.tsx](components/header.tsx).
- **Contenu en dur** : pour l'instant tout le contenu (services, compétences, stats, projets) est codé en constantes dans chaque composant de section, pas encore lu depuis la BDD.
- **Parcours (timeline)** : [components/sections/parcours.tsx](components/sections/parcours.tsx) réutilise le bloc shadcn-studio `components/shadcn-studio/blocks/timeline-component-05/` (type `Release` : `version`, `date`, `content: ReactNode`). Le contenu de chaque étape est un composant dans `components/sections/parcours-content/`. La route `app/timeline-component-05/` est la page démo du bloc, pas une vraie page du site.
- **Contact** : le formulaire ([components/sections/contact.tsx](components/sections/contact.tsx)) POST en JSON sur [app/api/contact/route.ts](app/api/contact/route.ts), qui valide les champs puis envoie un email via **Resend** ([lib/mail.ts](lib/mail.ts)) à `CONTACT_TO` (diano.faniry@gmail.com), avec `replyTo` = l'email du visiteur et les champs échappés dans le HTML. Expéditeur par défaut `onboarding@resend.dev`, qui ne livre qu'à l'adresse du compte Resend : en production, `RESEND_FROM` doit utiliser un domaine vérifié dans Resend. Le SDK renvoie `{ data, error }` (pas d'exception). Rien n'est stocké en BDD.
- **Auth / admin** : `middleware.ts` protège `/admin/:path*` via `withAuth` ; provider Credentials dont `authorize()` renvoie toujours `null` (aucune connexion possible pour l'instant) ; page de login prévue sur `/admin/login` (inexistante).
- **Dark mode** : `ThemeProvider` (next-themes, `attribute="class"`) dans le root layout. Le toggle du header utilise `useSyncExternalStore` comme garde « mounted » pour éviter le mismatch d'hydratation.
- **Typo** : Sora (titres, `--font-heading`) et Manrope (texte, `--font-sans`) via `next/font`. `html { font-size: 19px }` — les unités `rem` sont donc plus grandes que d'habitude.
- **Animations** : `motion` (`motion/react`) et `react-countup`. Toujours respecter `useReducedMotion()` comme le font Hero et À propos.

## Agents et design

- **`planner`** (`.claude/agents/planner.md`) : découpe une phase de STATUS.md en tâches avec exécutant (`principal` / `ui-prototyper` / `toi`). Lecture seule.
- **`ui-prototyper`** : maquettes PNG (desktop + mobile, via HTML + Edge headless) et spec d'implémentation dans `prototype/admin/`. **Les écrans du dashboard admin sont implémentés par Diano**, pas par Claude : ne pas coder un écran admin sans demande explicite, passer par une maquette. Les sections du site public peuvent être implémentées directement.
- **Skill `impeccable`** (`.claude/skills/impeccable/`, installé via `impeccable install`, mise à jour : `npx impeccable update`) : méthode de design + hooks de détection d'anti-patterns UI dans `.claude/settings.json`. Le binaire (`scripts/bin/`) est gitignoré et retéléchargé au besoin. `PRODUCT.md` n'existe pas encore : lancer `/impeccable init` avant tout nouvel écran.

## Variables d'environnement (`.env`)

`DATABASE_URL`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`, `AUTH_GITHUB_ID/SECRET`, `AUTH_GOOGLE_ID/SECRET`, `RESEND_API_KEY`, `RESEND_FROM` (optionnel), `CONTACT_TO`.

## Conventions

Voir AGENTS.md (TypeScript strict, `components/ui/` non modifié à la main, React Hook Form + Zod, uploads horodatés dans `public/uploads/`). Le contenu du site est en français (`<html lang="fr">`).
