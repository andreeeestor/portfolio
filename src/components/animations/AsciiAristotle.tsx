"use client";

import React, { useEffect, useRef } from "react";

/**
 * 64x37 CLAHE-enhanced luminance grid (0 = background, 1 = deepest shadow, 9 = brightest marble highlight)
 * extracted from the Roman copy of Lysippos' bust of Aristotle (Palazzo Altemps).
 */
const ARISTOTLE_GRID = [
  "0000000000000000000000000000056567777000000000000000000000000000",
  "0000000000000000000000066666678787666867456000000000000000000000",
  "0000000000000000067664678676768788868867687877540000000000000000",
  "0000000000000005677787667877878788778887877888655760000000000000",
  "0000000000000578666786779798798768778699898877767677500000000000",
  "0000000000003158557686698979978879877899999887646545647000000000",
  "0000000006687646866678877898876666568888998876835545764400000000",
  "0000000055688685566788887777767677777777767754558484953370000000",
  "0000000003668577754777878888989888888887777775462355334540000000",
  "0000000065455775575669999999999999999999999998632333547336000000",
  "0000000056338547555578753432113578888642233346654564645154000000",
  "0000000033315642546754126666511159961113667521145944531127000000",
  "0000000041111224378766766677788979994368877655666645111170000000",
  "0000000004152114797679998789999769984778887679876641111500000000",
  "0000000000435114677557888899987767763698999999876971115000000000",
  "0000000000047777877654456799856769997468778887667863150000000000",
  "0000000000075866877768776677758535764355697467666667490000000000",
  "0000000000000336667776867779996531111267976789767746400000000000",
  "0000000000000067556766687854544434323446889987556447500000000000",
  "0000000000000737775776658765679999888644578777566453700000000000",
  "0000000000000046786677776788887777878788898877874563000000000000",
  "0000000000000006346788888878889988887788788887446515000000000000",
  "0000000000000000723667985878888789989998878873345580000000000000",
  "0000000000000000073114455577765777778787687744454800000000000000",
  "6655555455554212265313321336674444556665766423221113443435000000",
  "5511331244345511255544212454676687756554422135111111775335345544",
  "5137654653577784334444432111223443111221123346421111665543455446",
  "5333334454676689765333444321222212111221123445432115454565424543",
  "5554455333478999989522344332111111111111234444322375445545353655",
  "4146666554358998999986233443112111111111344433212886445546455345",
  "2125544654337899899998744223212322222234333323579986435545435334",
  "5554565555433889999999998742111222333332222479999877345444544442",
  "4224645455653479999998778889631122234445689999998874443454456621",
  "5453135544444334789766656766556766899887767765454435534444468533",
  "2455542443445333235565567656655432454452755462465355663445653643",
  "7314665445574557556455555566456643566553677755674466684556424524",
  "6653136654445453467665654454454555676645556566644665457642266237",
];

// Index 0 = empty, 1..9 = darkest shadow to brightest highlight
const BASE_GLYPHS = [" ", ".", ":", ";", "+", "=", "x", "X", "#", "@"];
const GLITCH_GLYPHS = ["Α", "Ρ", "Ι", "Σ", "Τ", "Ο", "Τ", "Ε", "Λ", "Η", "Σ", "Φ", "Ψ", "Ω", "Δ", "Λ"];

const ROWS = ARISTOTLE_GRID.length;
const COLS = ARISTOTLE_GRID[0].length;

function getColorForLevel(level: number, spotlight: number): string {
  // Spotlight boosts brightness and shifts highlights toward neon lime (#c0f48c) or lilac (#acaaff)
  if (spotlight > 0.35) {
    if (level >= 7) return "#c0f48c";
    if (level >= 4) return "#acaaff";
    return "#d8f8b8";
  }

  switch (level) {
    case 1:
      return "#2d3139";
    case 2:
      return "#454b57";
    case 3:
      return "#626a7a";
    case 4:
      return "#7e879b";
    case 5:
      return "#9ba4b8";
    case 6:
      return "#bcc4d6";
    case 7:
      return "#dce2f0";
    case 8:
      return "#eef5e4";
    case 9:
      return "#c0f48c";
    default:
      return "transparent";
  }
}

export default function AsciiAristotle() {
  const preRef = useRef<HTMLPreElement>(null);
  const cellRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const pre = preRef.current;
    if (!pre) return;
    const rect = pre.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const hoverCol = relX * COLS;
      const hoverRow = relY * ROWS;
      const radius = 9.5;

      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const idx = r * COLS + c;
          const span = cellRefs.current[idx];
          if (!span) continue;

          const baseLevel = ARISTOTLE_GRID[r].charCodeAt(c) - 48;
          if (baseLevel === 0) continue;

          // Aspect-corrected distance (characters are ~1.8x taller than wide)
          const dx = c - hoverCol;
          const dy = (r - hoverRow) * 1.65;
          const dist = Math.hypot(dx, dy);

          if (dist < radius) {
            const intensity = 1 - dist / radius;
            const boostedLevel = Math.min(9, baseLevel + Math.round(intensity * 3));
            span.style.color = getColorForLevel(boostedLevel, intensity);

            // Near the center of the cursor, morph glyphs into classical Greek letters
            if (intensity > 0.62) {
              span.textContent = GLITCH_GLYPHS[(r * 7 + c * 13) % GLITCH_GLYPHS.length];
            } else {
              span.textContent = BASE_GLYPHS[boostedLevel];
            }
          } else {
            span.style.color = getColorForLevel(baseLevel, 0);
            span.textContent = BASE_GLYPHS[baseLevel];
          }
        }
      }
    });
  };

  const handlePointerLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const idx = r * COLS + c;
          const span = cellRefs.current[idx];
          if (!span) continue;
          const baseLevel = ARISTOTLE_GRID[r].charCodeAt(c) - 48;
          if (baseLevel === 0) continue;
          span.style.color = getColorForLevel(baseLevel, 0);
          span.textContent = BASE_GLYPHS[baseLevel];
        }
      }
    });
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="group relative w-full max-w-[420px] rounded-xl bg-[#0B0C0E] border-2 border-black shadow-[6px_6px_0px_#000000] overflow-hidden transition-transform duration-300 hover:-translate-y-0.5 select-none"
    >
      {/* Barra superior estilo terminal clássico / museu digital */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-[#14161B] border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#c0f48c]" />
          <span className="w-2 h-2 rounded-full bg-[#acaaff]" />
          <span className="w-2 h-2 rounded-full bg-white/25" />
          <span className="ml-1.5 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-white/75">
            aristoteles_bust.ascii
          </span>
        </div>
        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#c0f48c] opacity-80 group-hover:opacity-100 transition-opacity">
          384–322 a.C.
        </span>
      </div>

      {/* Grade sutil de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(192,244,140,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(192,244,140,0.2) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Arte ASCII interativa */}
      <div className="relative z-10 px-2.5 pt-3 pb-1.5 flex flex-col items-center justify-center overflow-hidden">
        <pre
          ref={preRef}
          aria-label="Busto de Aristóteles em arte ASCII interativa"
          role="img"
          className="font-mono text-[5.2px] xs:text-[5.8px] sm:text-[6.5px] md:text-[6.8px] leading-[1.05] tracking-[0.03em] font-bold text-center whitespace-pre"
        >
          {ARISTOTLE_GRID.map((row, r) => (
            <React.Fragment key={r}>
              {Array.from(row).map((ch, c) => {
                const level = ch.charCodeAt(0) - 48;
                const cellIndex = r * COLS + c;
                if (level === 0) {
                  return " ";
                }
                return (
                  <span
                    key={c}
                    ref={(el) => {
                      cellRefs.current[cellIndex] = el;
                    }}
                    style={{ color: getColorForLevel(level, 0) }}
                  >
                    {BASE_GLYPHS[level]}
                  </span>
                );
              })}
              {"\n"}
            </React.Fragment>
          ))}
        </pre>
      </div>

      {/* Rodapé informativo */}
      <div className="relative z-10 flex items-center justify-between px-3.5 py-1.5 bg-[#14161B]/90 border-t border-white/10 text-[9px] font-mono uppercase tracking-[0.14em]">
        <span className="text-white/55">ΑΡΙΣΤΟΤΕΛΗΣ // LYSIPPOS BUST</span>
        <span className="text-[#acaaff] group-hover:text-[#c0f48c] transition-colors">
          ✦ PASSE O CURSOR
        </span>
      </div>
    </div>
  );
}
