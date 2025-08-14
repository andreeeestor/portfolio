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
      status: t("positions.monitor.status"),
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
    },
    {
      id: 2,
      period: "2025/05 - " + t("timeline.current"),
      startYear: "2025",
      startMonth: "Mai",
      endYear: null,
      endMonth: null,
      title: t("positions.frontend.title"),
      company: t("positions.frontend.company"),
      location: t("positions.frontend.location"),
      type: t("positions.frontend.type"),
      status: t("positions.frontend.status"),
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

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#c0f48c] to-gray-600 h-full hidden md:block"></div>

        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative mb-12 md:mb-20">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-2">
              <div className="w-6 h-6 bg-[#c0f48c] rounded-full border-4 border-gray-900 shadow-lg"></div>
            </div>

            <div
              className={`flex flex-col md:flex-row items-center md:gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`hidden md:flex flex-col items-center ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                } w-full md:w-1/2`}
              >
                <div className="bg-gray-800 border border-[#c0f48c] rounded-lg size-36 p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-2">
                    <div className="text-xl font-bold text-[#c0f48c]">
                      {exp.startYear}
                    </div>
                    <div className="text-gray-400 text-xs uppercase">
                      {exp.startMonth}
                    </div>
                  </div>

                  <div className="w-full h-px bg-gray-600 my-2"></div>

                  {exp.endYear ? (
                    <div>
                      <div className="text-xl font-bold text-gray-300">
                        {exp.endYear}
                      </div>
                      <div className="text-gray-500 text-xs uppercase">
                        {exp.endMonth}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="text-lg font-bold text-green-400">
                        {t("timeline.current")}
                      </div>
                      <div className="text-green-300 text-xs uppercase">
                        {t("timeline.inProgress")}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-xl hover:shadow-2xl hover:border-[#c0f48c] transition-all duration-300 transform hover:-translate-y-1">
                  <div className="md:hidden text-sm font-normal uppercase mb-3 text-gray-400">
                    <span className="font-black text-[#c0f48c]">
                      {exp.period}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-sequel uppercase text-[#c0f48c] mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-white font-semibold">
                        {exp.company}
                      </span>
                      <span className="px-2 py-1 bg-[#c0f48c] text-black text-xs font-bold uppercase rounded">
                        {exp.type}
                      </span>
                    </div>
                    <div className="text-gray-400 text-sm flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
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
                    </div>
                  </div>

                  <div className="mb-4">
                    {exp.description.map((desc, i) => (
                      <p
                        key={i}
                        className="text-gray-300 text-sm leading-relaxed mb-2"
                      >
                        • {desc}
                      </p>
                    ))}
                  </div>

                  <div>
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
          </div>
        ))}

        <div className="hidden md:flex justify-center items-center mt-8">
          <div className="relative flex flex-col items-center">
            <div className="relative w-16 h-16 mb-4">
              <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-[#c0f48c] to-green-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                {/* <div className="w-6 h-6 bg-gradient-to-br from-[#c0f48c] to-green-400 rounded-full animate-pulse"></div> */}
                <svg
                  className="w-8 h-8 text-[#c0f48c] delay-200 animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 7l5 5-5 5M6 7l5 5-5 5" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#c0f48c] rounded-full animate-ping"></div>
              <div className="absolute -bottom-1 -left-2 w-2 h-2 bg-green-400 rounded-full animate-ping delay-300"></div>
              <div className="absolute top-1 -left-3 w-1 h-1 bg-[#c0f48c] rounded-full animate-ping delay-500"></div>
            </div>

            {/* <div className="text-center">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0f48c] to-green-400 text-lg font-sequel uppercase font-bold animate-pulse">
                Jornada em Evolução
              </p>
            </div> */}

            {/* <div className="absolute -left-12 top-4">
              <svg
                className="w-8 h-8 text-[#c0f48c] delay-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13 7l5 5-5 5M6 7l5 5-5 5" />
              </svg>
            </div>
            <div className="absolute -right-12 top-4">
              <svg
                className="w-8 h-8 text-green-400 delay-700"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13 7l5 5-5 5M6 7l5 5-5 5" />
              </svg>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
