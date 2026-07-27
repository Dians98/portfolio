import { Code, Smartphone, Workflow, Building2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Code,
    title: "Applications Web Full-Stack",
    description:
      "Applications web complètes, du front-end à la base de données. React, Next.js, TypeScript pour l'interface, Node.js et PostgreSQL pour le back-end.",
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles & PWA",
    description:
      "Développement d'applications mobiles réactives et PWA. Interfaces fluides, ergonomiques et adaptées à tous les écrans (iOS & Android).",
  },
  {
    icon: Workflow, // Importe l'icône Workflow, Zap ou Cpu depuis lucide-react
    title: "Automatisation & Workflows (n8n)",
    description:
      "Gain de temps et productivité : connexion de vos outils (CRM, formulaires, bases de données) et automatisation de vos tâches répétitives via n8n.",
  },
  {
    icon: Building2,
    title: "Configuration Odoo & ERP",
    description:
      "Paramétrage et optimisation d'Odoo pour vos processus métier : CRM, comptabilité, inventaire, vente. Intégration avec vos outils existants sans développement.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-6 md:py-12">

      <div className="flex flex-col gap-1 items-end">
        <h1 className="text-primary font-medium">SERVICES</h1>
        <h1 className="text-foreground font-bold sm:text-3xl md:text-4xl lg:text-4xl">Ce que je propose</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-4 my-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="rounded-2xl border  text-center hover:border-primary/50 transition-colors">
                <CardHeader >
                  <Icon className="w-full h-10 text-primary text-center" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-justify">
                  <CardDescription >{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>


    </section>
  );
}
