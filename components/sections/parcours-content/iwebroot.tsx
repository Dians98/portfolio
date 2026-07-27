import { Badge } from '@/components/ui/badge'
const badges = [
  "Laravel",
  "MySQL",
  "HTML / CSS",
  "JavaScript"
]
const IwebrootContent = () => {
  return (
    <div className='space-y-4'>
      <h3 className='text-xl font-semibold'>Développeur Web</h3>
      <p className='text-muted-foreground text-sm'>iWebRoot · Stage · Antananarivo, Madagascar</p>
      <ul className='text-muted-foreground list-inside list-disc space-y-2 text-sm'>
        <li>Développement d&apos;une application de gestion de personnel avec Laravel</li>
        <li>Projet réalisé dans le cadre de la Licence en Informatique</li>
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

export default IwebrootContent
