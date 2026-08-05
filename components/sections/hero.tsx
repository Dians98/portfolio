"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useSyncExternalStore } from "react";

const COMMAND = "$ whoami";
const OUTPUT = "diano.andriantsalama";

let mediaQuery: MediaQueryList | null = null;
function getMediaQuery() {
  if (typeof window === "undefined") return null;
  mediaQuery ??= window.matchMedia("(prefers-reduced-motion: reduce)");
  return mediaQuery;
}

function subscribeReducedMotion(callback: () => void) {
  const mq = getMediaQuery();
  if (!mq) return () => { };
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return getMediaQuery()?.matches ?? false;
}

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "$ whoami → ...";
  const speed = 60;

  useEffect(() => {
    let i = 0;
    setText("");
    const timer = setInterval(() => {
      i++;
      setText(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100dvh-4rem)] w-full items-center justify-center overflow-x-hidden py-16 md:py-0"
    >
      <div
        aria-hidden
        className="terminal-grid terminal-grid-fade pointer-events-none absolute inset-0 -z-10 opacity-60 dark:opacity-40"
      />

      <div className="flex w-full flex-col items-center gap-10 md:flex-row md:items-center">
        {/* --- GAUCHE : Texte --- */}
        <div className="flex min-w-0 flex-1 flex-col items-center text-center md:items-start md:text-left">
          <div className=" flex flex-wrap items-end gap-2">
            <span className="rounded-2xl bg-primary/10 px-4 py-2 text-xs text-gray-400">
              {text}
            </span>
          </div>

          <h1 className="max-w-full text-2xl font-bold   md:text-3xl lg:text-5xl">
            Diano <br /> <span className="text-primary">ANDRIANTSALAMA</span>
          </h1>

          <p className="mt-2 text-xl font-medium text-foreground font-bold sm:text-2xl">
            Software Engineer
          </p>

          <p className="mt-4 max-w-lg text-muted-foreground leading-relaxed">
            Je conçois des applications web & mobiles et solution d'automatisations sur mesure adaptées à vos besoins.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button size="lg" className="cursor-pointer">
              <Link href="https://github.com/Dians98"
                target="_blank"
                rel="noopener noreferrer">
                Mes réalisations
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="cursor-pointer">
              <Link href="/#contact"

                rel="noopener noreferrer">
                Me contacter
              </Link>

            </Button>
          </div>
        </div>

        {/* --- DROITE : Image / Avatar --- */}
        <div className="shrink-0">
          <div className="size-64 rounded-full p-1 sm:size-80">
            <div className="relative flex size-full items-center justify-center overflow-hidden rounded-full border border-border bg-background">
              <Image
                src="/images/4k_teal_nobg.webp"
                alt="Diano ANDRIANTSALAMA"
                fill
                priority
                sizes="(min-width: 640px) 20rem, 16rem"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
