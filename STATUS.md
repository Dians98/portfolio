# STATUS — Avancement du portfolio

_Dernière mise à jour : 2026-10-08 — basé sur l'analyse du code (commit `7a7b417`)._

Fichier unique de suivi (roadmap + avancement) : mettre à jour l'état d'une tâche dès qu'elle est terminée.

Légende : ✅ fait · 🟡 partiel / stub · ❌ pas commencé

## Résumé

La **partie publique est bien avancée** (Hero, À propos, Services, Parcours, Compétences, Contact fonctionnels et stylés). **Tout le back-end (BDD, auth, admin, upload) est à l'état de squelette** : le schéma Prisma ne contient que les modèles NextAuth, le client Prisma est commenté, l'auth ne permet aucune connexion.

`npx tsc --noEmit` : OK · `npm run lint` : 0 erreur, 14 warnings (variables inutilisées dans `projects.tsx`, `<img>` dans le bloc démo timeline).

## Phase 1 — Init du projet

| Tâche | État | Notes |
|---|---|---|
| Next.js App Router + TS + Tailwind + ESLint | ✅ | Next **16**, React 19, Tailwind **v4** (pas 14 comme dans les specs) |
| Prisma installé + PostgreSQL | ✅ | Prisma 6, générateur `prisma-client` → `lib/generated/prisma` |
| NextAuth + adapter Prisma installés | ✅ | next-auth **v4** ; `@auth/prisma-adapter` installé mais non branché |
| shadcn/ui | ✅ | style `base-nova` (Base UI). Composants : accordion, badge, button, card |
| `lib/prisma.ts` singleton | 🟡 | Code entièrement commenté → aucun `db` exporté |
| `lib/auth.ts` | 🟡 | Credentials avec `authorize()` → `null`. Destructuring `{ auth, signIn, signOut }` = API v5, cassé en v4. GitHub/Google pas configurés (env prévues) |
| `middleware.ts` protection `/admin/*` | 🟡 | Fonctionne avec `withAuth`, mais convention dépréciée en Next 16 (→ `proxy.ts`) |
| Layouts public + admin | 🟡 | Pas de route group `(public)` ; layout admin = sidebar vide |
| Dark mode `next-themes` | ✅ | Toggle dans le header |

## Phase 2 — Schéma Prisma & Seed

| Tâche | État | Notes |
|---|---|---|
| Modèles NextAuth (`User`, `Account`, `Session`, `VerificationToken`) | ✅ | `User` sans champ mot de passe ni rôle |
| `Project`, `Certification`, `Message`, `SiteSetting`, `Visitor` | ❌ | Champs : voir AGENTS.md |
| Hash de mot de passe sur `User` (Credentials) | ❌ | |
| Migration / BDD créée | ❓ | `prisma/migrations/` est gitignoré, impossible à vérifier depuis le repo |
| `prisma/seed.ts` (admin par défaut + données de démo) | ❌ | Installer `tsx` + config seed (`package.json` ou `prisma.config.ts`) |

## Phase 3 — Pages publiques

| Section | État | Notes |
|---|---|---|
| Header (nav + toggle + menu mobile) | ✅ | Liens Certifications / Réalisations commentés |
| Hero | ✅ | Effet terminal `$ whoami` + typewriter, photo webp ; fond = session shell animée (remplace la grille, derrière la photo en tablette, masqué sur mobile) |
| À propos | ✅ | Stats animées (CountUp), chiffres en dur |
| Services | ✅ | 4 cartes en dur |
| Parcours (timeline) | ✅ | Ajouté hors PLAN, via bloc shadcn-studio |
| Compétences | ✅ | 3 catégories en dur |
| Projets (grille + filtre + modal) | 🟡 | Données factices + state prêts, mais le composant **rend un fragment vide** |
| Certifications | ❌ | |
| CV download | ❌ | |
| Contact (formulaire) | ✅ | Envoi par email via Resend vers diano.faniry@gmail.com, pas de stockage `Message` en BDD |
| Footer | ✅ | GitHub + LinkedIn |
| `app/api/contact/route.ts` | 🟡 | Validation manuelle (types, longueurs, format email) et HTML échappé dans l'email. Reste : pas de Zod, pas d'anti-spam / rate limit |
| Enregistrer les messages de contact en BDD (`Message`) | ❌ | Nécessaire pour la boîte de réception admin |
| Brancher les sections sur la BDD (Projets, Certifications, SiteSetting) | ❌ | |

## Phase 4 — Espace admin

| Tâche | État |
|---|---|
| Layout admin (sidebar, header) | 🟡 coquille vide |
| Page de login `/admin/login` | ❌ |
| Dashboard stats | 🟡 titre seul |
| CRUD Projets | ❌ |
| CRUD Certifications | ❌ |
| Messages | ❌ |
| CV upload | ❌ |
| Paramètres (SiteSetting) | ❌ |

## Phase 5 — Upload & finitions

| Tâche | État | Notes |
|---|---|---|
| `app/api/upload/route.ts` | ❌ | ⚠️ L'upload dans `public/uploads/` ne persiste pas sur Vercel (FS en lecture seule/éphémère) — prévoir Vercel Blob / S3 |
| Responsive | 🟡 | Sections existantes responsive |
| SEO / Open Graph | 🟡 | `metadata` statique minimal |
| Tracking visiteurs | ❌ | |
| Intégrer l'upload dans les formulaires admin (Projets, Certifications, CV) | ❌ | |
| Déploiement Vercel | ❓ | Variables d'env : PostgreSQL, Resend (`RESEND_API_KEY`, `RESEND_FROM`), NextAuth, OAuth |

## Nettoyage à prévoir

- Supprimer la page démo `app/timeline-component-05/` et `components/shadcn-studio/.../content/v1-*.tsx` si inutilisés.
- `Button` contenant un `<Link>` (header, hero) → utiliser la prop `render` de Base UI.
- README encore celui de `create-next-app`.
- Renommer `middleware.ts` → `proxy.ts` (`npx @next/codemod@canary middleware-to-proxy .`).

## Prochaines étapes suggérées

1. Finir la section **Projets** (rendu grille + filtre + modal) — déjà à moitié codée.
2. Sécuriser `/api/contact` (Zod + échappement HTML).
3. Compléter le schéma Prisma, réactiver `lib/prisma.ts`, première migration.
4. Corriger `lib/auth.ts` (API v4, `authorize` réel avec hash bcrypt, champ password sur `User`) + page `/admin/login`.
5. Brancher les sections publiques sur la BDD puis attaquer le CRUD admin.
