import { useTranslations } from "next-intl";
import ThunderShape from "@/components/icons/ThunderShape";

interface CareerSectionProps {}

interface CardPalette {
  bg: string;
  text: string;
  mutedText: string;
  border: string;
  cardBorder: string;
  tagBg: string;
  tagBorder: string;
  tagText: string;
  badgeBg: string;
  badgeText: string;
  accentDot: string;
  frameBg: string;
  frameBorder: string;
  frameAccent: string;
  tapeBg: string;
}

const CARD_PALETTES: CardPalette[] = [
  // 01: Lilás do portfólio (--terciary-color: #acaaff) | Texto preto
  {
    bg: "#ACAAFF",
    text: "#0B0C0E",
    mutedText: "rgba(11, 12, 14, 0.82)",
    border: "rgba(11, 12, 14, 0.2)",
    cardBorder: "#0B0C0E",
    tagBg: "rgba(11, 12, 14, 0.08)",
    tagBorder: "rgba(11, 12, 14, 0.32)",
    tagText: "#0B0C0E",
    badgeBg: "#0B0C0E",
    badgeText: "#ACAAFF",
    accentDot: "#0B0C0E",
    frameBg: "#0F1117",
    frameBorder: "#F7F6F1",
    frameAccent: "#ACAAFF",
    tapeBg: "rgba(247, 246, 241, 0.65)",
  },
  // 02: Dark Slate com borda/destaques em verde-limão (#c0f48c) | Texto branco
  {
    bg: "#14161B",
    text: "#FFFFFF",
    mutedText: "rgba(255, 255, 255, 0.8)",
    border: "rgba(192, 244, 140, 0.22)",
    cardBorder: "rgba(192, 244, 140, 0.45)",
    tagBg: "rgba(192, 244, 140, 0.08)",
    tagBorder: "rgba(192, 244, 140, 0.35)",
    tagText: "#C0F48C",
    badgeBg: "#C0F48C",
    badgeText: "#0B0C0E",
    accentDot: "#C0F48C",
    frameBg: "#0A0B0E",
    frameBorder: "#C0F48C",
    frameAccent: "#C0F48C",
    tapeBg: "rgba(192, 244, 140, 0.45)",
  },
  // 03: Verde-limão principal (--primary-color: #c0f48c) | Texto preto (Experiência Atual)
  {
    bg: "#C0F48C",
    text: "#0B0C0E",
    mutedText: "rgba(11, 12, 14, 0.84)",
    border: "rgba(11, 12, 14, 0.2)",
    cardBorder: "#0B0C0E",
    tagBg: "rgba(11, 12, 14, 0.08)",
    tagBorder: "rgba(11, 12, 14, 0.35)",
    tagText: "#0B0C0E",
    badgeBg: "#0B0C0E",
    badgeText: "#C0F48C",
    accentDot: "#0B0C0E",
    frameBg: "#0F1117",
    frameBorder: "#0B0C0E",
    frameAccent: "#C0F48C",
    tapeBg: "rgba(247, 246, 241, 0.72)",
  },
  // 04: Reserva para futura 4ª experiência (Off-white editorial #F4F5F0 | Texto preto)
  {
    bg: "#F4F5F0",
    text: "#0B0C0E",
    mutedText: "rgba(11, 12, 14, 0.8)",
    border: "rgba(11, 12, 14, 0.18)",
    cardBorder: "#0B0C0E",
    tagBg: "rgba(11, 12, 14, 0.06)",
    tagBorder: "rgba(11, 12, 14, 0.3)",
    tagText: "#0B0C0E",
    badgeBg: "#0B0C0E",
    badgeText: "#C0F48C",
    accentDot: "#ACAAFF",
    frameBg: "#0F1117",
    frameBorder: "#ACAAFF",
    frameAccent: "#ACAAFF",
    tapeBg: "rgba(172, 170, 255, 0.5)",
  },
];

function EditorialVisualBoard({
  exp,
  index,
  palette,
  currentLabel,
  inProgressLabel,
}: {
  exp: {
    id: number;
    period: string;
    startYear: string;
    startMonth: string;
    endYear: string | null;
    endMonth: string | null;
    title: string;
    company: string;
    location: string;
    type: string;
    technologies: string[];
    isCurrent: boolean;
  };
  index: number;
  palette: CardPalette;
  currentLabel: string;
  inProgressLabel: string;
}) {
  const indexNum = String(index + 1).padStart(2, "0");

  return (
    <div className="relative w-full pt-4 pb-2 px-1 sm:px-3 flex items-center justify-center">
      {/* Tiras de fita adesiva semitransparente nos cantos superiores */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1.5 left-6 sm:left-10 z-20 w-20 sm:w-24 h-5 -rotate-[7deg] border border-white/30 shadow-sm"
        style={{
          backgroundColor: palette.tapeBg,
          backdropFilter: "blur(2px)",
        }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1.5 right-6 sm:right-10 z-20 w-20 sm:w-24 h-5 rotate-[6deg] border border-white/30 shadow-sm"
        style={{
          backgroundColor: palette.tapeBg,
          backdropFilter: "blur(2px)",
        }}
      />

      {/* Moldura impressa colada no painel */}
      <div
        className="relative w-full border-[5px] sm:border-[6px] shadow-[0_14px_34px_rgba(0,0,0,0.32)] overflow-hidden flex flex-col justify-between p-5 sm:p-6 gap-5"
        style={{
          backgroundColor: palette.frameBg,
          borderColor: palette.frameBorder,
          color: "#F7F6F1",
        }}
      >
        {/* Grade sutil de fundo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Topo limpo: Localização + Badge do vínculo (sem repetir o nome da empresa nem REF.03) */}
        <div className="relative z-10 flex items-center justify-between gap-2 border-b border-white/15 pb-3">
          <div className="flex items-center gap-2 min-w-0">
            <span
              className="inline-block w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: palette.frameAccent }}
            />
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/75 truncate">
              {exp.location}
            </span>
          </div>
          <span
            className="px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] shrink-0"
            style={{
              backgroundColor: palette.frameAccent,
              color: "#0B0C0E",
            }}
          >
            {exp.type}
          </span>
        </div>

        {/* Centro: Nome da empresa em destaque + Linha do tempo visual */}
        <div className="relative z-10 my-auto py-1 flex flex-col justify-center text-left">
          <div className="font-sequel uppercase text-2xl sm:text-3xl xl:text-4xl leading-[1.02] tracking-tight text-white break-words">
            {exp.company}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <div className="flex items-baseline gap-1.5">
              <span
                className="font-sequel text-xl sm:text-2xl"
                style={{ color: palette.frameAccent }}
              >
                {exp.startYear}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                {exp.startMonth}
              </span>
            </div>

            <span className="text-white/35 font-mono text-xs">───</span>

            {exp.endYear ? (
              <div className="flex items-baseline gap-1.5">
                <span className="font-sequel text-xl sm:text-2xl text-white">
                  {exp.endYear}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                  {exp.endMonth}
                </span>
              </div>
            ) : (
              <div
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-[0.18em]"
                style={{
                  backgroundColor: palette.frameAccent,
                  color: "#0B0C0E",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0B0C0E] animate-pulse" />
                {currentLabel} · {inProgressLabel}
              </div>
            )}
          </div>
        </div>

        {/* Rodapé: Stack principal sem cortar tags */}
        <div className="relative z-10 border-t border-white/15 pt-3 flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {exp.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.12em] bg-white/10 text-white/90 border border-white/20"
              >
                {tech}
              </span>
            ))}
            {exp.technologies.length > 4 && (
              <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.12em] bg-white/5 text-white/70 border border-white/15">
                +{exp.technologies.length - 4}
              </span>
            )}
          </div>

          <span className="font-sequel text-2xl text-white/20 select-none leading-none shrink-0">
            {indexNum}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function CareerSection(_props: CareerSectionProps) {
  const t = useTranslations("career");

  const experiences = [
    {
      id: 1,
      period: "2024/05 - 2025/05",
      startYear: "2024",
      startMonth: "Mai",
      endYear: "2025",
      endMonth: "Mai",
      title: t("positions.monitor.title"),
      company: t("positions.monitor.company"),
      location: t("positions.monitor.location"),
      type: t("positions.monitor.type"),
      intro: null as string | null,
      description: [
        t("positions.monitor.description.0"),
        t("positions.monitor.description.1"),
        t("positions.monitor.description.2"),
      ],
      technologies: [
        "JavaScript",
        "React.js",
        "Flutter",
        "Node.js",
        "TypeScript",
        "PHP",
        "Kotlin",
        "Swift",
      ],
      isCurrent: false,
    },
    {
      id: 2,
      period: "2025/05 - 2025/09",
      startYear: "2025",
      startMonth: "Mai",
      endYear: "2025",
      endMonth: "Set",
      title: t("positions.frontend.title"),
      company: t("positions.frontend.company"),
      location: t("positions.frontend.location"),
      type: t("positions.frontend.type"),
      intro: null as string | null,
      description: [
        t("positions.frontend.description.0"),
        t("positions.frontend.description.1"),
        t("positions.frontend.description.2"),
        t("positions.frontend.description.3"),
      ],
      technologies: [
        "Next.js",
        "React.js",
        "React Native",
        "TypeScript",
        "SCSS",
        "MUI",
        "Expo",
        "Axios",
      ],
      isCurrent: false,
    },
    {
      id: 3,
      period: "2025/11 - Atual",
      startYear: "2025",
      startMonth: "Nov",
      endYear: null as string | null,
      endMonth: null as string | null,
      title: t("positions.kukac.title"),
      company: t("positions.kukac.company"),
      location: t("positions.kukac.location"),
      type: t("positions.kukac.type"),
      intro: t("positions.kukac.intro"),
      description: [
        t("positions.kukac.description.0"),
        t("positions.kukac.description.1"),
        t("positions.kukac.description.2"),
        t("positions.kukac.description.3"),
        t("positions.kukac.description.4"),
      ],
      technologies: [
        "JavaScript",
        "Web Content Manager",
        "PHP",
        "Vue.js",
        "Python",
        "React.js",
        "JSP (JavaServer Pages)",
        "ProcessWire",
        "Next.js",
        "SQLite",
      ],
      isCurrent: true,
    },
  ];

  const tabPrefix = t("tabPrefix");
  const techLabel = t("techLabel");
  const currentLabel = t("timeline.current");
  const inProgressLabel = t("timeline.inProgress");

  return (
    <section
      id="career"
      aria-labelledby="career-section-title"
      className="relative w-full mt-12 pt-12 pb-6 px-4 sm:px-8"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to bottom, transparent 0px, transparent 31px, rgba(192, 244, 140, 0.04) 31px, rgba(192, 244, 140, 0.04) 32px)",
      }}
    >
      {/* Cabeçalho integrado ao design original do StarBorder */}
      <div className="max-w-6xl mx-auto text-center mb-12 md:mb-16">
        <h2
          id="career-section-title"
          className="font-sequel uppercase text-primary text-3xl md:text-4xl mb-8"
        >
          {t("title")}
        </h2>
        <div className="relative w-full mx-auto">
          <div className="w-full h-[2px] bg-[#c0f48c]">
            <ThunderShape
              className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[14px] shadow-lg"
              width="30"
              height="30"
              color1="#c0f48c"
              color2="#c0f48c"
            />
          </div>
        </div>
      </div>

      {/* Pilha de cards sobrepostos guiada por scroll */}
      <div className="relative max-w-6xl mx-auto flex flex-col gap-12 md:gap-24 pb-4">
        {experiences.map((exp, index) => {
          const palette = CARD_PALETTES[index % CARD_PALETTES.length];
          const tabNumber = String(index + 1).padStart(2, "0");

          return (
            <article
              key={exp.id}
              aria-label={`${tabPrefix} ${tabNumber}: ${exp.title} - ${exp.company}`}
              className="career-stack-card md:sticky md:top-32 motion-reduce:static w-full"
              style={{
                zIndex: (index + 1) * 10,
              }}
            >
              {/* Linha de abas no topo: cada card posiciona sua aba na coluna correspondente
                  para que as abas anteriores continuem visíveis à esquerda conforme a pilha sobe */}
              <div
                className="grid w-full"
                style={{
                  gridTemplateColumns: `repeat(${experiences.length}, minmax(0, 1fr))`,
                }}
              >
                <div
                  style={{
                    gridColumnStart: index + 1,
                    gridColumnEnd: index + 2,
                  }}
                  className="flex"
                >
                  <div
                    className="w-full h-9 sm:h-10 px-2.5 sm:px-5 flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 select-none"
                    style={{
                      backgroundColor: palette.bg,
                      color: palette.text,
                      borderTop: `2px solid ${palette.cardBorder}`,
                      clipPath:
                        "polygon(10px 0%, calc(100% - 10px) 0%, 100% 100%, 0% 100%)",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      className="text-[10px] sm:text-xs leading-none"
                      style={{ color: palette.accentDot }}
                    >
                      ✦
                    </span>
                    <span className="font-mono text-[9px] sm:text-[11px] md:text-xs font-bold uppercase tracking-[0.14em] sm:tracking-[0.22em] truncate">
                      <span className="hidden sm:inline">{tabPrefix} </span>
                      <span className="sm:hidden">EXP. </span>
                      {tabNumber}
                    </span>
                  </div>
                </div>
              </div>

              {/* Corpo principal do painel com altura uniforme para cobrir 100% os cards anteriores */}
              <div
                className="w-full md:min-h-[540px] flex flex-col justify-between border-2 shadow-[0_-10px_30px_rgba(0,0,0,0.45),0_20px_50px_rgba(0,0,0,0.5)] p-5 sm:p-7 md:p-9 lg:p-10"
                style={{
                  backgroundColor: palette.bg,
                  color: palette.text,
                  borderColor: palette.cardBorder,
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center my-auto">
                  {/* Coluna esquerda: informações profissionais */}
                  <div className="lg:col-span-7 flex flex-col justify-between text-left">
                    <div>
                      {/* 1. Período + marcador de experiência atual */}
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em]">
                          <span
                            aria-hidden="true"
                            className="inline-block w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: palette.accentDot }}
                          />
                          {exp.period}
                        </span>

                        {exp.isCurrent && (
                          <span
                            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-[0.2em] border"
                            style={{
                              backgroundColor: palette.badgeBg,
                              color: palette.badgeText,
                              borderColor: palette.border,
                            }}
                          >
                            ● {currentLabel}
                          </span>
                        )}
                      </div>

                      {/* 2. Cargo em destaque */}
                      <h3 className="font-sequel uppercase text-xl sm:text-2xl md:text-3xl leading-[1.06] tracking-tight mb-3">
                        {exp.title}
                      </h3>

                      {/* 3, 4 e 5. Empresa, tipo de vínculo e localização */}
                      <div
                        className="flex flex-wrap items-center gap-x-3 gap-y-2 pb-4 mb-4 border-b"
                        style={{ borderColor: palette.border }}
                      >
                        <span className="text-base sm:text-lg font-bold tracking-wide uppercase">
                          {exp.company}
                        </span>

                        <span
                          className="px-2.5 py-0.5 text-[11px] font-mono font-bold uppercase tracking-[0.18em]"
                          style={{
                            backgroundColor: palette.badgeBg,
                            color: palette.badgeText,
                          }}
                        >
                          {exp.type}
                        </span>

                        <span
                          className="inline-flex items-center text-xs sm:text-sm font-medium"
                          style={{ color: palette.mutedText }}
                        >
                          <svg
                            aria-hidden="true"
                            className="w-4 h-4 mr-1 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {exp.location}
                        </span>
                      </div>

                      {/* 6. Introdução (quando disponível) e descrições */}
                      {exp.intro && (
                        <p
                          className="mb-3.5 px-3.5 py-2 text-xs sm:text-sm leading-relaxed border-l-2 font-medium"
                          style={{
                            backgroundColor: palette.tagBg,
                            borderColor: palette.accentDot,
                            color: palette.text,
                          }}
                        >
                          {exp.intro}
                        </p>
                      )}

                      <ul className="space-y-2 mb-5 max-w-2xl">
                        {exp.description.map((desc, i) => (
                          <li
                            key={i}
                            className="text-xs sm:text-sm leading-relaxed flex items-start gap-2.5"
                            style={{ color: palette.mutedText }}
                          >
                            <span
                              aria-hidden="true"
                              className="mt-1.5 inline-block w-1.5 h-1.5 shrink-0"
                              style={{ backgroundColor: palette.accentDot }}
                            />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 7. Tecnologias utilizadas em etiquetas retangulares editoriais */}
                    <div
                      className="pt-3.5 border-t"
                      style={{ borderColor: palette.border }}
                    >
                      <div
                        className="font-mono text-[10px] uppercase tracking-[0.22em] mb-2"
                        style={{ color: palette.mutedText }}
                      >
                        {techLabel}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.12em] border"
                            style={{
                              backgroundColor: palette.tagBg,
                              borderColor: palette.tagBorder,
                              color: palette.tagText,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Coluna direita: composição visual com moldura e fitas adesivas */}
                  <div className="lg:col-span-5 w-full">
                    <EditorialVisualBoard
                      exp={exp}
                      index={index}
                      palette={palette}
                      currentLabel={currentLabel}
                      inProgressLabel={inProgressLabel}
                    />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
