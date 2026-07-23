import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] w-full items-center justify-center overflow-x-hidden py-16 md:py-0"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,oklch(0.6_0.14_195_/_0.15),transparent_60%)]"
      />

      <div className="flex w-full flex-col items-center gap-12 md:flex-row md:items-center">
        {/* --- GAUCHE : Texte --- */}
        <div className="flex min-w-0 flex-1 flex-col items-center text-center md:items-start md:text-left">
          <div className=" flex flex-wrap items-end gap-2">
            <span className="animate-pop-3 rounded-2xl bg-primary/10 px-4 py-2 text-xs text-gray-400">
              👋 Salut ! Je suis...
            </span>
          </div>

          <h1 className="max-w-full text-3xl font-bold  sm:text-2xl md:text-5xl lg:text-6xl">
            Diano <span className="text-primary">ANDRIANTSALAMA</span>
          </h1>

          <p className="mt-2 text-xl font-medium text-foreground font-bold sm:text-2xl">
            Développeur Full-Stack
          </p>

          <p className="mt-4 max-w-lg text-muted-foreground leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
            voluptatibus quisquam nostrum corporis dicta cumque deserunt quae.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button size="lg" className="cursor-pointer">Voir mes projets</Button>
            <Button variant="outline" size="lg" className="cursor-pointer">
              Me contacter
            </Button>
          </div>
        </div>

        {/* --- DROITE : Image / Avatar --- */}
        <div className="shrink-0">
          <div className="flex size-64 items-center justify-center rounded-full bg-linear-to-br from-primary to-accent p-1 sm:size-80">
            <div className="flex size-full items-center justify-center rounded-full bg-background text-6xl">

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
