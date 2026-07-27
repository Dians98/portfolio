import { Badge } from '@/components/ui/badge'

const OdooContent = () => {
  return (
    <div className='space-y-4'>
      <h3 className='text-xl font-semibold'>Formation Odoo Functional</h3>
      <p className='text-muted-foreground text-sm'>
        Configuration et paramétrage complet d&apos;Odoo pour les processus métier : CRM, Ventes, Inventaire,
        Comptabilité et Achats. Automation de workflows sans développement.
      </p>
      <div className='space-y-2'>
        <p className='text-sm font-medium'>Modules maîtrisés :</p>
        <div className='flex flex-wrap gap-2'>
          <Badge variant='secondary'>CRM</Badge>
          <Badge variant='secondary'>Ventes</Badge>
          <Badge variant='secondary'>Inventaire</Badge>
          <Badge variant='secondary'>Comptabilité</Badge>
          <Badge variant='secondary'>Achats</Badge>
          <Badge variant='secondary'>Projets</Badge>
        </div>
      </div>
      <ul className='text-muted-foreground list-inside list-disc space-y-2 text-sm'>
        <li>Paramétrage de la structure d&apos;entreprise et des utilisateurs</li>
        <li>Configuration des workflows de validation et automatisations</li>
        <li>Personnalisation des vues et des rapports sans code</li>
        <li>Intégration avec outils externes (API REST)</li>
      </ul>
    </div>
  )
}

export default OdooContent
