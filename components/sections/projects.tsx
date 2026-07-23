"use client";

import { useState } from "react";
import { X, ExternalLink, GitBranch } from "lucide-react";

const projects = [
  {
    title: "Projet 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum quod quibusdam.",
    stack: ["React", "TypeScript", "Tailwind"],
    image: null,
    gitUrl: "#",
    videoUrl: "#",
  },
  {
    title: "Projet 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum quod quibusdam.",
    stack: ["Next.js", "Prisma", "PostgreSQL"],
    image: null,
    gitUrl: "#",
    videoUrl: "#",
  },
  {
    title: "Projet 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum quod quibusdam.",
    stack: ["React", "Node.js", "MongoDB"],
    image: null,
    gitUrl: "#",
    videoUrl: "#",
  },
  {
    title: "Projet 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum quod quibusdam.",
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
