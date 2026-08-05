"use client";

import { useRef } from "react";
import CountUp from "react-countup";
import { useInView, useReducedMotion } from "motion/react";

function StatNumber({
  end,
  suffix = "",
  prefix = "+",
}: {
  end: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();

  if (reduce === true) {
    return (
      <span>
        {prefix}
        {end}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={ref}>
      {inView ? (
        <CountUp end={end} prefix={prefix} suffix={suffix} duration={1.4} />
      ) : (
        <>
          {prefix}
          {end}
          {suffix}
        </>
      )}
    </span>
  );
}

export default function APropos() {
    return (
        <section id="apropos" className="py-6 md:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                <div className="flex flex-col gap-1 items-center md:items-start">
                    <h1 className="text-primary font-medium"> A PROPOS</h1>
                    <h1 className="text-foreground font-bold sm:text-3xl md:text-4xl lg:text-4xl">Qui suis-je ?</h1>
                    <p className="my-4">Basé à Maurice. Je travaille avec React, Next.js, PHP &amp; Python, touche à l&apos;automatisation des processus et aussi à la configuration Odoo.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">

                    <div className="flex flex-col items-center justify-center p-6 rounded-2xl border  text-center hover:border-primary/50 transition-colors">
                        <span className="text-3xl lg:text-4xl font-bold text-primary"><StatNumber end={3} suffix=" ans" /></span>
                        <span className="text-sm text-slate-400 mt-1">Expérience</span>
                    </div>


                    <div className="flex flex-col items-center justify-center p-6 rounded-2xl border  text-center hover:border-primary/50 transition-colors">
                        <span className="text-3xl lg:text-4xl font-bold text-primary"><StatNumber end={15} /></span>
                        <span className="text-sm text-slate-400 mt-1">Projets</span>
                    </div>


                    <div className="flex flex-col items-center justify-center p-6 rounded-2xl border  text-center hover:border-primary/50 transition-colors">
                        <span className="text-3xl lg:text-4xl font-bold text-primary"><StatNumber end={23} /></span>
                        <span className="text-sm text-slate-400 mt-1">Technologies</span>
                    </div>

                    <div className="flex flex-col items-center justify-center p-6 rounded-2xl border  text-center hover:border-primary/50 transition-colors">
                        <span className="text-3xl lg:text-4xl font-bold text-primary"><StatNumber end={5} /></span>
                        <span className="text-sm text-slate-400 mt-1">Clients</span>
                    </div>


                </div>


            </div>


        </section>

    );
}
