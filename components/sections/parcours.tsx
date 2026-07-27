import ChangelogContent from '@/components/shadcn-studio/blocks/timeline-component-05/timeline-component-05'
import type { Release } from '@/components/shadcn-studio/blocks/timeline-component-05/timeline-component-05'
import AngeContent from '@/components/sections/parcours-content/ange'
import AerowJuniorContent from '@/components/sections/parcours-content/aerow-junior'
import AerowAnalystContent from '@/components/sections/parcours-content/aerow-analyst'
import IwebrootContent from '@/components/sections/parcours-content/iwebroot'
import BachelorContent from '@/components/sections/parcours-content/bachelor'
import AceemContent from '@/components/sections/parcours-content/aceem'

const parcours: Release[] = [
  {
    version: '2023 - Present',
    date: '',
    content: <AngeContent />,
  },
  {
    version: '2022 - 2023',
    date: '',
    content: <AerowJuniorContent />,
  },
  {
    version: '2022',
    date: '',
    content: <AerowAnalystContent />,
  },
  {
    version: '2021',
    date: '',
    content: <BachelorContent />,
  },
  {
    version: '2019',
    date: '',
    content: <AceemContent />,
  },
  {
    version: '2019',
    date: '',
    content: <IwebrootContent />,
  },
]

export default function Parcours() {
  return (
    <section id="parcours" className="py-6 md:py-12">
      <div className="mx-auto max-w-4xl">
        <ChangelogContent
          releases={parcours}
          title="Parcours"
          subtitle="Académique et Professionnelle"
        />
      </div>
    </section>
  )
}
