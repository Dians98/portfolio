import { Badge } from '@/components/ui/badge'

const FullstackContent = () => {
  return (
    <div className='space-y-4'>
      <h3 className='text-xl font-semibold'>Développement Web Full-Stack</h3>
      <p className='text-muted-foreground text-sm'>
        Formation complète en développement d&apos;applications web modernes, du front-end au back-end, avec les
        technologies les plus récentes de l&apos;écosystème JavaScript.
      </p>
      <div className='space-y-2'>
        <p className='text-sm font-medium'>Stack technique :</p>
        <div className='flex flex-wrap gap-2'>
          <Badge variant='secondary'>React</Badge>
          <Badge variant='secondary'>Next.js</Badge>
          <Badge variant='secondary'>TypeScript</Badge>
          <Badge variant='secondary'>Node.js</Badge>
          <Badge variant='secondary'>PostgreSQL</Badge>
          <Badge variant='secondary'>Tailwind CSS</Badge>
        </div>
      </div>
      <ul className='text-muted-foreground list-inside list-disc space-y-2 text-sm'>
        <li>Création d&apos;applications avec Next.js App Router et API Routes</li>
        <li>Conception de bases de données relationnelles avec Prisma ORM</li>
        <li>Authentification et gestion de sessions (NextAuth.js)</li>
        <li>Déploiement sur Vercel et DevOps basique</li>
      </ul>
    </div>
  )
}

export default FullstackContent
