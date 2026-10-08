"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

// Session de démonstration (décorative) : [répertoire, commande, ...lignes de sortie]
const SCRIPT: string[][] = [
  ["~/portfolio", "git pull origin main", "Already up to date."],
  ["~/portfolio", "npm run build", "▲ Next.js 16.2.11", "  Creating an optimized production build ...", "✓ Compiled successfully", "✓ Generating static pages (6/6)"],
  ["~/crm", "docker compose up -d", "[+] Running 3/3", " ✔ Container crm-db    Started", " ✔ Container crm-api   Started", " ✔ Container crm-web   Started"],
  ["~/api", "uvicorn main:app --reload", "INFO:     Will watch for changes in these directories: ['/home/diano/api']", "INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)", "INFO:     Application startup complete."],
  ["~", "n8n execute --id=relance-clients", "Execution was successful:", "  nodes: 7   items: 42   duration: 1.8s"],
  ["~/odoo", "./odoo-bin -u website_sale -d boutique", "INFO boutique odoo.modules.loading: loading 64 modules...", "INFO boutique odoo.modules.loading: 64 modules loaded in 2.41s"],
  ["~/portfolio", "git commit -m \"Hero : fond terminal\"", "[dev 8f3a2c1] Hero : fond terminal", " 2 files changed, 64 insertions(+), 12 deletions(-)"],
  ["~", "ssh vps", "Welcome to Ubuntu 24.04 LTS (GNU/Linux x86_64)", "Last login: from 102.115.x.x"],
];
const PREFILL = SCRIPT.length; // tout le script est affiché au chargement, pour ne pas partir d'un fond vide
const MAX_LINES = 40;

type Line = { id: number; dir?: string; cmd?: string; text?: string; typing?: boolean };

function linesFor(entries: string[][], startId: number): Line[] {
  let id = startId;
  return entries.flatMap(([dir, cmd, ...out]) => [
    { id: id++, dir, cmd },
    ...out.map((text) => ({ id: id++, text })),
  ]);
}

const INITIAL = linesFor(SCRIPT.slice(0, PREFILL), 0);

export default function TerminalBackdrop() {
  const reduce = useReducedMotion();
  const [lines, setLines] = useState<Line[]>(INITIAL);
  const ref = useRef<HTMLDivElement>(null);
  const visible = useRef(true);

  // Met l'animation en pause quand le hero n'est plus à l'écran
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      visible.current = entry.isIntersecting;
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduce !== false) return;
    let cancelled = false;
    let nextId = INITIAL.length;
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    const push = (line: Line) => setLines((prev) => [...prev, line].slice(-MAX_LINES));
    const update = (id: number, patch: Partial<Line>) =>
      setLines((prev) => prev.map((l) => (l.id === id ? { ...l, ...patch } : l)));

    (async () => {
      for (let k = PREFILL; !cancelled; k++) {
        while (!cancelled && (!visible.current || document.hidden)) await sleep(500);
        if (cancelled) return;

        const [dir, cmd, ...out] = SCRIPT[k % SCRIPT.length];
        const id = nextId++;
        push({ id, dir, cmd: "", typing: true });
        await sleep(900);
        for (let i = 1; i <= cmd.length && !cancelled; i++) {
          update(id, { cmd: cmd.slice(0, i) });
          await sleep(45 + Math.random() * 50);
        }
        await sleep(350);
        update(id, { typing: false });
        for (const text of out) {
          if (cancelled) return;
          push({ id: nextId++, text });
          await sleep(120 + Math.random() * 180);
        }
        await sleep(1400);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [reduce]);

  const typing = lines.some((l) => l.typing);

  return (
    // Masqué sur mobile. Breakpoints en px du navigateur (les media queries ignorent le html à 19 px)
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 hidden select-none overflow-hidden md:block"
    >
      {/* Tablette : colonne étroite centrée sur la photo (centre à 10rem du bord droit).
          Desktop (xl) : colonne centrée sur le creux entre la fin du nom et la photo */}
      <div className="terminal-log absolute inset-y-0 -right-12 flex w-104 flex-col justify-end whitespace-pre pb-[3.2rem] font-(family-name:--font-jetbrains-mono) text-[0.62rem] leading-[1.75] xl:right-auto xl:left-[calc(50%+5.5rem)] xl:w-160 xl:-translate-x-1/2 xl:text-[0.68rem]">
        {lines.map((l) =>
          l.dir !== undefined ? (
            <div key={l.id}>
              <span className="log-prompt">diano@maurice:{l.dir}$</span>{" "}
              <span className="log-cmd">{l.cmd}</span>
              {l.typing && <span className="terminal-caret" />}
            </div>
          ) : (
            <div key={l.id}>{l.text}</div>
          )
        )}
        {!typing && (
          <div>
            <span className="log-prompt">diano@maurice:~$</span> <span className="terminal-caret" />
          </div>
        )}
      </div>
    </div>
  );
}
