"use client";
import { ArrowUpRight, Code, GithubLogo } from "@phosphor-icons/react";
import ProjectsCards from "./ProjectsCards";
import { useTranslations } from "next-intl";

interface ProjectsProps {
  id: string;
}
export default function Projects(props: ProjectsProps) {
  const t = useTranslations("projects");
  const projectsData = [
    {
      id: "coverspot",
      title: "CoverSpot",
      cardDescription: `${t("CoverSpotSubtitle")}`,
      imageUrl: "../../../images/image.png",
      projectInfo: {
        title: "CoverSpot",
        description:
          `${t("CoverSpotDescription")}`,
        technologies: [
          "React",
          "Node.js",
          "SQLite",
          "Sequelize",
          "Express",
          "JavaScript",
          "Axios",
          "JWT",
        ],
        githubUrl: "https://github.com/andreeeestor/coverspot",
        liveUrl: "https://cover-spot.vercel.app",
      },
    },
    {
      id: "bonvoyage",
      title: "Bon Voyage",
      cardDescription: `${t("BonVoyageSubtitle")}`,
      imageUrl:
        "https://www.segueviagem.com.br/wp-content/uploads/2021/01/Aviao-shutterstock_146314307.jpg",
      withArrow: true,
      projectInfo: {
        title: "Bon Voyage",
        description:
          `${t("BonVoyageDescription")}`,
        technologies: [
          "Next.js",
          "OpenAI API",
          "Firebase",
          "TypeScript",
          "TailwindCSS",
          "Stripe",
          "Zustand",
          "Google Maps API",
        ],
        githubUrl: "https://github.com/andreeeestor/bon-voyage",
        liveUrl: "https://bonvoyagenext.vercel.app/",
      },
    },
    {
      id: "voxgpt",
      title: "VoxGPT",
      cardDescription: `${t("VoxGPTSubtitle")}`,
      imageUrl: "../../../images/voxgpt.jpg",
      projectInfo: {
        title: "VoxGPT",
        description:
          `${t("VoxGPTDescription")}`,
        technologies: [
          "Next.js",
          "TailwindCSS",
          "OpenAI API",
          "Prisma",
          "TypeScript",
          "Neon DB",
          "DaisyUI",
          "Clerk Auth",
          "React Query",
        ],
        githubUrl: "https://github.com/andreeeestor/voxgpt",
        liveUrl: "https://voxgpt-flame.vercel.app/",
      },
    },
    {
      id: "nearbyapp",
      title: "NearbyApp",
      cardDescription: `${t("NearbySubtitle")}`,
      imageUrl: "../../../images/business-people-using-maps-phones.jpg",
      projectInfo: {
        title: "NearbyApp",
        description:
          `${t("NearbyDescription")}`,
        technologies: ["SwiftUI", "Swift", "MVVM-C", "MapKit", "Node.js"],
        githubUrl: "https://github.com/andreeeestor/nearbyapp",
      },
    },
    {
      id: "estoque",
      title: "Estoque",
      cardDescription: `${t("EstoqueSubtitle")}`,
      imageUrl: "../../../images/estoque.jpg",
      projectInfo: {
        title: "Estoque",
        description:
          `${t("EstoqueDescription")}`,
        technologies: ["Next.js", "TypeScript", "TailwindCSS", "Firebase"],
        githubUrl: "https://github.com/LuizLimaG/estoque",
      },
    },
  ];

  return (
    <>
      <div id={props.id} className="mt-12 w-full h-2 bg-black" />

      <section className="relative">
        <div className="w-full bg-[#c0f48c] py-12 mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-4 left-8 text-6xl font-bold">
              {"{ }"}
            </div>
            <Code
              className="absolute bottom-4 right-12 text-6xl"
              weight="bold"
            />
          </div>

          <div className="container mx-auto px-8">
            <h1 className="font-sequel uppercase text-black text-5xl md:text-7xl lg:text-8xl relative z-10 tracking-tighter font-bold space-x-3">
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                {"// "}
              </span>
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                P
              </span>
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                R
              </span>
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                O
              </span>
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                J
              </span>
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                E
              </span>
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                {t("title6")}
              </span>
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                {t("title7")}
              </span>
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                S
              </span>
            </h1>

            <div className="w-32 h-1 bg-black mt-4 mb-2 rounded-full"></div>
            <p className="text-black font-medium opacity-80 text-lg max-w-lg">
              {t("description")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-8 px-4">
          <ProjectsCards
            key={projectsData[0].id}
            withArrow={projectsData[0].withArrow}
            title={projectsData[0].title}
            description={projectsData[0].cardDescription}
            imageUrl={projectsData[0].imageUrl}
            projectInfo={projectsData[0].projectInfo}
          />

          <ProjectsCards
            key={projectsData[1].id}
            withArrow={projectsData[1].withArrow}
            title={projectsData[1].title}
            description={projectsData[1].cardDescription}
            imageUrl={projectsData[1].imageUrl}
            projectInfo={projectsData[1].projectInfo}
          />

          <ProjectsCards
            key={projectsData[2].id}
            withArrow={projectsData[2].withArrow}
            title={projectsData[2].title}
            description={projectsData[2].cardDescription}
            imageUrl={projectsData[2].imageUrl}
            projectInfo={projectsData[2].projectInfo}
          />

          <ProjectsCards
            key={projectsData[3].id}
            withArrow={projectsData[3].withArrow}
            title={projectsData[3].title}
            description={projectsData[3].cardDescription}
            imageUrl={projectsData[3].imageUrl}
            projectInfo={projectsData[3].projectInfo}
          />

          <article className="w-[335px] sm:w-96 space-y-8">
            <div className="w-full flex justify-center">
              <div className="border-2 border-black rounded-full p-5 shadow-sm">
                <GithubLogo size={32} weight="duotone" />
              </div>
            </div>
            <h1 className="text-center font-sequel text-3xl sm:text-4xl uppercase">
              {t("repository")}
            </h1>
            <a
              href="https://github.com/andreeeestor?tab=repositories"
              target="_blank"
              className="flex items-center justify-between shadow-xl border-2 border-black px-6 py-4 rounded-2xl transition-all group hover:bg-black hover:text-white"
            >
              <span className="font-semibold text-xl tracking-tight ">
                {t("seeAll")}
              </span>
              <ArrowUpRight size={32} />
            </a>
          </article>

          <ProjectsCards
            key={projectsData[4].id}
            withArrow={projectsData[4].withArrow}
            title={projectsData[4].title}
            description={projectsData[4].cardDescription}
            imageUrl={projectsData[4].imageUrl}
            projectInfo={projectsData[4].projectInfo}
          />
        </div>
      </section>
    </>
  );
}
