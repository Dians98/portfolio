import { Badge } from '@/components/ui/badge'
const badges = [
  "Flask",
  "CodeIgniter",
  "VPS Linux",
  "React / React Native",
  "Configuration Odoo",
  "n8n"
]
const AngeContent = () => {
  return (
    <div className='space-y-4'>
      <h3 className='text-xl font-semibold'>Software Engineer</h3>
      <p className='text-muted-foreground text-sm'>ANGE TECHNOLOGY Ltd</p>
      <ul className='text-muted-foreground list-inside list-disc space-y-2 text-sm'>
        <li>Maintenance et évolution d&apos;une application de coaching en ligne (CodeIgniter, Docker)</li>
        <li>Configuration et migration d&apos;applications sur serveurs dédiés</li>
        <li>Développement d&apos;un outil d&apos;extraction et traitement de données Excel avec Python</li>
        <li>Développement d&apos;un site vitrine avec blog dynamique sous CodeIgniter 4</li>
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
