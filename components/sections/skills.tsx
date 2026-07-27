import { Code, Server, Wrench, Building2, Layers, ServerCog } from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Skill {
  name: string
  level: number
}

interface SkillCategory {
  icon: typeof Code
  title: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    icon: Code,
    title: "Frontend",
    skills: [
      { name: "Next.js", level: 75 },
      { name: "JavaScript", level: 60 },
      { name: "Tailwind CSS", level: 60 },
    ],
  },
  {
    icon: ServerCog,
    title: "Backend",
    skills: [
      { name: "Fast API", level: 75 },
      { name: "PHP", level: 80 },
      { name: "NodeJs", level: 60 },
    ],
  },
  {
    icon: Layers,
    title: "Autres",
    skills: [
      { name: "K2", level: 90 },
      { name: "n8n", level: 75 },
      { name: "Odoo", level: 60 },
    ],
  },
]

const RADIUS = 40
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

function CircularProgress({ name, level }: Skill) {
  const offset = CIRCUMFERENCE * (1 - level / 100)

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative flex items-center justify-center">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className="-rotate-90"
        >
          <circle
            cx="50"
            cy="50"
            r={RADIUS}
            fill="none"
            strokeWidth="6"
            className="stroke-muted"
          />
          <circle
            cx="50"
            cy="50"
            r={RADIUS}
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            className="stroke-primary transition-all duration-700 ease-out"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          />
        </svg>
        <span className="absolute text-sm font-semibold">{level}%</span>
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-6 md:py-12">
      <div className="flex flex-col gap-12 ">
        <div className="flex flex-col gap-2 text-center md:text-start">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary ">
            COMPÉTENCES
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl ">
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
                    <Icon className="h-6 w-6 text-primary" />
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 justify-items-center">
                    {category.skills.map((skill) => (
                      <CircularProgress key={skill.name} name={skill.name} level={skill.level} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
