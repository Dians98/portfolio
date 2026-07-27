import { Badge } from '@/components/ui/badge'
const badges = [
  "K2",
  "SharePoint",
  "DocuSign"
]
const AerowAnalystContent = () => {
  return (
    <div className='space-y-4'>
      <h3 className='text-xl font-semibold'>Analyste Developpeur</h3>
      <p className='text-muted-foreground text-sm'>AEROW ECM World · Stage</p>
      <ul className='text-muted-foreground list-inside list-disc space-y-2 text-sm'>
        <li>Développement d&apos;une application d&apos;e-administration avec K2 et SharePoint</li>
        <li>Intégration de DocuSign pour la signature électronique</li>
        <li>Projet réalisé dans le cadre de la Licence en Humanités Numériques</li>
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

export default AerowAnalystContent
