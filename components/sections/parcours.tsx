import ChangelogContent from '@/components/shadcn-studio/blocks/timeline-component-05/timeline-component-05'
import type { Release } from '@/components/shadcn-studio/blocks/timeline-component-05/timeline-component-05'
import OdooContent from '@/components/sections/parcours-content/odoo'
import FullstackContent from '@/components/sections/parcours-content/fullstack'
import InfoContent from '@/components/sections/parcours-content/info'

const parcours: Release[] = [
  {
    version: '2025',
    date: 'Formation Odoo Functional',
    content: <OdooContent />,
  },
  {
    version: '2024',
    date: 'Développement Full-Stack',
    content: <FullstackContent />,
  },
  {
    version: '2022',
    date: 'Bachelor Informatique',
    content: <InfoContent />,
  },
]

export default function Parcours() {
  return (
    <section id="parcours" className="py-6 md:py-12">
      <div className="mx-auto max-w-4xl">
        <ChangelogContent
          releases={parcours}
          title="Parcours"
          subtitle="Mon parcours académique et professionnel"
        />
      </div>
    </section>
  )
}
