'use client'
import Header from "@/components/header";
import APropos from "@/components/sections/apropos";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Skills from "@/components/sections/skills";
import Parcours from "@/components/sections/parcours";
import Projects from "@/components/sections/projects";


export default function HomePage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4">
        <Hero />
        <APropos />
        <Services />
        <Parcours />
        <Skills />
        <Projects />
      </main>
    </>
  );
}
