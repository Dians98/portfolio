import { Badge } from '@/components/ui/badge'
const badges = [
  "Python",
  "CodeIgniter",
  "React / React Native",
  "Odoo",
  "n8n",
  "Docker",
  "VPS Linux"
]
const AngeContent = () => {
  return (
    <div className='space-y-4'>
      <h3 className='text-xl font-semibold'>Software Engineer</h3>
      <p className='text-muted-foreground text-sm'>ANGE TECHNOLOGY Ltd · Maurice</p>
      <ul className='text-muted-foreground list-inside list-disc space-y-2 text-sm'>
        <li>Maintenance évolutive d&apos;une application de coaching en ligne (CodeIgniter, Docker) : corrections, nouvelles fonctionnalités et disponibilité du service</li>
        <li>Conception et mise en ligne d&apos;un site e-commerce sur Odoo, du paramétrage des modules de vente et d&apos;inventaire jusqu&apos;à la boutique opérationnelle</li>
        <li>Outil Python d&apos;extraction et de traitement de données Excel, qui remplace des manipulations manuelles longues et sujettes aux erreurs</li>
        <li>Automatisation de processus métier avec n8n, en connectant CRM, formulaires et bases de données</li>
      </ul>
      <div className='flex flex-wrap gap-2'>
        {
          badges.map(badge => (
            <Badge variant="secondary" key={badge}>{badge}</Badge>
          ))
        }
      </div>
    </div>
  )
}

export default AngeContent
