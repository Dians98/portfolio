"use client";

import { useState } from "react";
import { X, ExternalLink, GitBranch } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "Interface d'administration pour la gestion de boutiques en ligne avec analytics en temps réel et gestion des commandes.",
    stack: ["React", "TypeScript", "Tailwind"],
    image: null,
    gitUrl: "#",
    videoUrl: "#",
  },
  {
    title: "Portfolio CMS",
    description:
      "Plateforme de gestion de contenu avec authentification, base de données PostgreSQL et déploiement automatisé.",
    stack: ["Next.js", "Prisma", "PostgreSQL"],
    image: null,
    gitUrl: "#",
    videoUrl: "#",
  },
  {
    title: "Application de Gestion de Tâches",
    description:
      "Outil collaboratif de suivi de projets avec notifications en temps réel et synchronisation multi-appareils.",
    stack: ["React", "Node.js", "MongoDB"],
    image: null,
    gitUrl: "#",
    videoUrl: "#",
  },
  {
    title: "Site Vitrine Moderne",
    description:
      "Site statique haute performance avec génération de pages optimisée pour le référencement naturel.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    image: null,
    gitUrl: "#",
    videoUrl: "#",
  },
];

const allStacks = Array.from(new Set(projects.flatMap((p) => p.stack)));

export default function Projects() {
  const [filter, setFilter] = useState<string | null>(null);
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  const filtered = filter
    ? projects.filter((p) => p.stack.includes(filter))
    : projects;

  return (
    <>
    </>
  );
}
