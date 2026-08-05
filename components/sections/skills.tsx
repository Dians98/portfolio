import { Code, ServerCog, Layers } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface SkillCategory {
  icon: LucideIcon
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    icon: Code,
    title: "Frontend",
    skills: ["Next.js", "JavaScript", "Tailwind CSS"],
  },
  {
    icon: ServerCog,
    title: "Backend",
    skills: ["FastAPI", "PHP", "Node.js"],
  },
  {
    icon: Layers,
    title: "Autres",
    skills: ["K2", "n8n", "Odoo"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-6 md:py-12">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-2 text-center md:text-start">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            COMPÉTENCES
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ma Stack Technique
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index} className="hover:ring-primary/50 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-primary" />
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 font-mono text-sm text-foreground/80 transition-colors hover:border-primary/50 hover:text-foreground"
                      >
                        <span className="text-primary" aria-hidden>
                          {">"}
                        </span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
