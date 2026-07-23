export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        {/* Texte */}
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            À propos
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Qui suis-je ?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Développeur Full-Stack passionné, je transforme des idées en
            applications web modernes et performantes. Spécialisé en React,
            Next.js et TypeScript, j&apos;accorde une attention particulière à
            l&apos;expérience utilisateur et à la qualité du code.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Fort d&apos;une approche orientée solutions, je maîtrise aussi bien
            le front-end que le back-end, du design des interfaces jusqu&apos;au
            déploiement. Chaque projet est pour moi une opportunité d&apos;allier
            créativité et rigueur technique.
          </p>
        </div>

        {/* Stats / infos */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Expérience", value: "+3 ans" },
            { label: "Projets", value: "+20" },
            { label: "Technologies", value: "+15" },
            { label: "Clients", value: "+10" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border bg-card p-6 text-center"
            >
              <span className="text-3xl font-bold text-primary sm:text-4xl">
                {stat.value}
              </span>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
