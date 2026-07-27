import { Badge } from '@/components/ui/badge'

const InfoContent = () => {
  return (
    <div className='space-y-4'>
      <h3 className='text-xl font-semibold'>Bachelor Informatique</h3>
      <p className='text-muted-foreground text-sm'>
        Formation générale en informatique couvrant les fondamentaux du développement logiciel, des bases de données et
        de l&apos;architecture des systèmes.
      </p>
      <div className='space-y-2'>
        <p className='text-sm font-medium'>Matières clés :</p>
        <div className='flex flex-wrap gap-2'>
          <Badge variant='secondary'>Algorithmique</Badge>
          <Badge variant='secondary'>BDD</Badge>
          <Badge variant='secondary'>POO</Badge>
          <Badge variant='secondary'>Réseaux</Badge>
          <Badge variant='secondary'>Web</Badge>
          <Badge variant='secondary'>Systèmes</Badge>
        </div>
      </div>
      <ul className='text-muted-foreground list-inside list-disc space-y-2 text-sm'>
        <li>Programmation orientée objet et design patterns</li>
        <li>Modélisation et gestion de bases de données (SQL/NoSQL)</li>
        <li>Développement web front-end et back-end</li>
        <li>Projets en équipe et méthodologies agiles</li>
      </ul>
    </div>
  )
}

export default InfoContent
