# PLAN — Portfolio V1

Stack : **Next.js 14 (App Router) / TypeScript / Prisma + PostgreSQL / NextAuth.js / Tailwind CSS + shadcn/ui**

---

## Phase 1 — Init du projet

- [ ] `npx create-next-app@latest` — App Router, TypeScript, Tailwind, ESLint, `src/` non
- [ ] Installer Prisma : `npm i prisma @prisma/client`
- [ ] Initialiser Prisma (`npx prisma init`) + pointer vers PostgreSQL
- [ ] Installer NextAuth : `npm i next-auth @auth/prisma-adapter`
- [ ] Initialiser shadcn/ui : `npx shadcn-ui@latest init`
- [ ] Créer `lib/prisma.ts` (singleton PrismaClient)
- [ ] Créer `lib/auth.ts` (NextAuth config)
- [ ] Créer `middleware.ts` (protection routes `/admin/*`)
- [ ] Mettre en place les layouts de base (public + admin)
- [ ] Configurer `next-themes` pour le dark mode

## Phase 2 — Schéma Prisma & Seed

- [ ] Définir les modèles : `Project`, `Certification`, `Message`, `SiteSetting`, `Visitor`, `User`, `Account`, `Session`
- [ ] `npx prisma migrate dev` → créer la BDD
- [ ] Créer `prisma/seed.ts` (admin par défaut + données de démo)
- [ ] Ajouter `"prisma": { "seed": "tsx prisma/seed.ts" }` dans `package.json`

## Phase 3 — Pages publiques (monopage)

- [ ] `app/(public)/layout.tsx` — Header avec nav + dark toggle
- [ ] `app/(public)/page.tsx` — Monopage avec sections :
  - [ ] Hero
  - [ ] À propos
  - [ ] Compétences
  - [ ] Services
  - [ ] Projets (grille + filtre par stack + modal détail)
  - [ ] Certifications
  - [ ] CV download
  - [ ] Contact (formulaire)
- [ ] `app/api/contact/route.ts` — Gestion soumission formulaire

## Phase 4 — Espace admin

- [ ] `app/admin/layout.tsx` — Layout admin (sidebar, header)
- [ ] **Dashboard** : tuiles stats (visiteurs, projets, certifs, messages)
- [ ] **CRUD Projets** : liste, ajout, édition, suppression, toggle publication
- [ ] **CRUD Certifications** : liste, ajout, édition, suppression
- [ ] **Messages** : boîte de réception, marquer lu
- [ ] **CV** : upload / remplacer fichier
- [ ] **Paramètres** : édition texte (À propos, Services, SEO, réseaux)

## Phase 5 — Upload & finitions

- [ ] `app/api/upload/route.ts` — API upload (multer → `/public/uploads/`)
- [ ] Intégrer upload dans les formulaires admin (Projets, Certifications, CV)
- [ ] Responsive design (mobile-first)
- [ ] SEO (metadata dynamique, Open Graph)
- [ ] Traque visiteur basique (enregistrement en BDD)
- [ ] Déploiement Vercel (variables d'env PostgreSQL)

---

### Commandes clés

```bash
npm run dev          # Dev
npm run build        # Build
npm start            # Production
npx prisma studio    # UI BDD
npx prisma migrate dev  # Migration
npx prisma generate     # Client
npx shadcn-ui@latest add <component>  # Ajouter composant shadcn/ui
```
