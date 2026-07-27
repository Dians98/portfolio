import { Badge } from '@/components/ui/badge'
const badges = [
  "K2",
  "SharePoint",
  "DocuSign"
]
const AerowJuniorContent = () => {
  return (
    <div className='space-y-4'>
      <h3 className='text-xl font-semibold'>Consultant Junior</h3>
      <p className='text-muted-foreground text-sm'>AEROW ECM World</p>
      <ul className='text-muted-foreground list-inside list-disc space-y-2 text-sm'>
        <li>Développement d&apos;une application d&apos;assurance médicale avec K2</li>
        <li>Maintenance et évolution d&apos;une application de vente immobilière avec K2</li>
        <li>Développement d&apos;un flux de gestion de vente avec Workey</li>
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

export default AerowJuniorContent
