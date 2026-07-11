import { useTranslations } from "next-intl";
import ThunderShape from "@/components/icons/ThunderShape";

interface CareerSectionProps {}

export default function CareerSection(props: CareerSectionProps) {
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

  return (
    <section className="max-w-6xl mx-auto p-8 md:py-12">
      <div className="text-center mb-12">
        <h2 className="font-sequel uppercase text-primary text-3xl md:text-4xl mb-8">
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

      {/* Timeline */}
      <div className="relative">
        {/* Linha vertical central */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#c0f48c] to-gray-600 h-full hidden md:block" />

        <div className="space-y-12 md:space-y-20">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Dot na linha */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 top-8 z-10 items-center justify-center">
                {exp.isCurrent ? (
                  <span className="relative flex items-center justify-center">
                    <span className="absolute inline-flex h-5 w-5 rounded-full bg-[#c0f48c] opacity-50 animate-ping" />
                    <span className="relative w-4 h-4 bg-[#c0f48c] rounded-full border-4 border-gray-900 shadow-[0_0_10px_#c0f48c]" />
                  </span>
                ) : (
                  <span className="w-4 h-4 bg-gray-600 rounded-full border-4 border-gray-900" />
                )}
              </div>



              {/* Row alternado */}
              <div
                className={`flex flex-col md:flex-row items-start gap-0 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Bloco de datas */}
                <div
                  className={`hidden md:flex w-full md:w-1/2 items-center ${
                    index % 2 === 0 ? "justify-end pr-10" : "justify-start pl-10"
                  }`}
                >
                  <div className={`flex items-center gap-4 ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}>
                    {/* Data início */}
                    <div className={`text-center ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                      <div className="text-3xl font-black text-[#c0f48c] leading-none font-sequel">
                        {exp.startYear}
                      </div>
                      <div className="text-gray-400 text-[11px] uppercase tracking-[0.2em] mt-1">
                        {exp.startMonth}
                      </div>
                    </div>

                    {/* Separador */}
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-px h-4 bg-gray-600" />
                      <div className="w-1 h-1 rounded-full bg-gray-500" />
                      <div className="w-px h-4 bg-gray-600" />
                    </div>

                    {/* Data fim */}
                    <div className={`text-center ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                      {exp.endYear ? (
                        <>
                          <div className="text-3xl font-black text-gray-400 leading-none font-sequel">
                            {exp.endYear}
                          </div>
                          <div className="text-gray-500 text-[11px] uppercase tracking-[0.2em] mt-1">
                            {exp.endMonth}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="text-xl font-black text-[#c0f48c] leading-none animate-pulse">
                            {t("timeline.current").toUpperCase()}
                          </div>
                          <div className="text-[#c0f48c]/60 text-[10px] uppercase tracking-[0.2em] mt-1">
                            {t("timeline.inProgress")}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card de conteúdo */}
                <div className="w-full md:w-1/2">
                  <div
                    className={`bg-gray-800 rounded-xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                      exp.isCurrent
                        ? "border border-[#c0f48c] hover:shadow-[0_8px_30px_rgba(192,244,140,0.15)]"
                        : "border border-gray-700 hover:border-[#c0f48c] hover:shadow-2xl"
                    }`}
                  >
                    {/* Mobile: período */}
                    <div className="md:hidden text-xs font-bold uppercase tracking-widest mb-3 text-[#c0f48c] opacity-80">
                      {exp.period}
                    </div>

                    {/* Título + badge atual */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-xl md:text-2xl font-sequel uppercase text-[#c0f48c]">
                        {exp.title}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded-full bg-[#c0f48c]/10 border border-[#c0f48c]/40 text-[#c0f48c]">
                          ● {t("timeline.current")}
                        </span>
                      )}
                    </div>

                    {/* Empresa + tipo */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-white font-semibold">
                        {exp.company}
                      </span>
                      <span className="px-2 py-1 bg-[#c0f48c] text-black text-xs font-bold uppercase rounded">
                        {exp.type}
                      </span>
                    </div>

                    {/* Localização */}
                    <div className="text-gray-400 text-sm flex items-center mb-4">
                      <svg className="w-4 h-4 mr-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {exp.location}
                    </div>

                    {/* Intro (Kukac) */}
                    {exp.intro && (
                      <div className="mb-4 px-3 py-2.5 rounded-lg text-sm text-gray-300 leading-relaxed bg-[#c0f48c]/5 border-l-2 border-[#c0f48c]/50">
                        {exp.intro}
                      </div>
                    )}

                    {/* Descrição */}
                    <div className="mb-4">
                      {exp.description.map((desc, i) => (
                        <p key={i} className="text-gray-300 text-sm leading-relaxed mb-2">
                          • {desc}
                        </p>
                      ))}
                    </div>

                    {/* Tecnologias */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-700 text-[#c0f48c] text-xs rounded-full border border-gray-600 hover:border-[#c0f48c] transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ornamento final */}
        <div className="hidden md:flex justify-center items-center mt-8">
          <div className="relative flex flex-col items-center">
            <div className="relative w-16 h-16 mb-4">
              <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-[#c0f48c] to-green-400 rounded-full animate-pulse" />
              <div className="absolute inset-2 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-[#c0f48c] animate-pulse delay-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 7l5 5-5 5M6 7l5 5-5 5" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#c0f48c] rounded-full animate-ping" />
              <div className="absolute -bottom-1 -left-2 w-2 h-2 bg-green-400 rounded-full animate-ping delay-300" />
              <div className="absolute top-1 -left-3 w-1 h-1 bg-[#c0f48c] rounded-full animate-ping delay-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
