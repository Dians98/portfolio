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
    title: "Applications web full-stack",
    description:
      "Interface en React, Next.js et TypeScript, back-end en Node.js avec une base PostgreSQL.",
  },
  {
    icon: Smartphone,
    title: "Applications mobiles et PWA",
    description:
      "Applications React Native et PWA pour iOS et Android.",
  },
  {
    icon: Workflow, // Importe l'icône Workflow, Zap ou Cpu depuis lucide-react
    title: "Automatisation et workflows (n8n)",
    description:
      "Je connecte vos outils (CRM, formulaires, bases de données) avec n8n pour automatiser les tâches répétitives.",
  },
  {
    icon: Building2,
    title: "Configuration Odoo et ERP",
    description:
      "Paramétrage d'Odoo pour vos processus : CRM, comptabilité, inventaire et vente, avec intégration à vos outils existants.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-6 md:py-12">

      <div className="flex flex-col gap-1 items-center md:items-end">
        <h1 className="text-primary font-medium ">SERVICES</h1>
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
