"use client";
import { ArrowUpRight, Code, GithubLogo } from "@phosphor-icons/react";
import ProjectsCards from "./ProjectsCards";

interface ProjectsProps {
  id: string;
}
export default function Projects(props: ProjectsProps) {
  const projectsData = [
    {
      id: "coverspot",
      title: "CoverSpot",
      cardDescription:
        "Software que facilita a reserva de performances musicais ao vivo em estabelecimentos.",
      imageUrl: "../../../images/image.png",
      projectInfo: {
        title: "CoverSpot",
        description:
          "Plataforma full-stack que revoluciona a forma como músicos e estabelecimentos se conectam para performances ao vivo. O sistema inclui gerenciamento de agendas, negociação direta de cachês e sistema integrado de avaliações. A arquitetura escalável permite o gerenciamento simultâneo de múltiplos eventos e a análise de dados para insights sobre tendências musicais locais.",
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
      cardDescription:
        "Software de gerenciamento de viagem com roteiro personalizado por uma IA.",
      imageUrl:
        "https://www.segueviagem.com.br/wp-content/uploads/2021/01/Aviao-shutterstock_146314307.jpg",
      withArrow: true,
      projectInfo: {
        title: "Bon Voyage",
        description:
          "Aplicação web inovadora que utiliza inteligência artificial para gerar roteiros de viagem personalizados. O site foi parte de um projeto da matéria PIT(Projeto de Inovação Tecnológica) do Cotemig em 2023, o site oferece ao usuário um guia turístico com orçamento e duração da viagem para criar experiências únicas. Todas as funcionalidades do site foram desenvolvidas por mim.",
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
      cardDescription: "Chatbot focado em gerar roteiro turístico.",
      imageUrl: "../../../images/voxgpt.jpg",
      projectInfo: {
        title: "VoxGPT",
        description:
          "Chatbot especializado em turismo que oferece sugestões de roteiros e responde a perguntas sobre destinos. O VoxGPT é um projeto que transforma o planejamento de viagens em uma experiência 		imersiva e personalizada. Através da interface, o usuário informa a cidade de destino e a IA da 		OpenAI gera um roteiro turístico com informações relevantes sobre a cidade e seus pontos 		turísticos, além disso, tem a página de bate-papo com a IA.",
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
      cardDescription:
        "Aplicativo iOS de clube de benefícios com cupons para utilizar em estabelecimentos pertos de você.",
      imageUrl: "../../../images/business-people-using-maps-phones.jpg",
      projectInfo: {
        title: "NearbyApp",
        description:
          "O projeto é um aplicativo mobile de clube de benefícios com cupons para utilizar em estabelecimentos próximos a você. Este é um projeto do evento NLW Pocket Mobile que participei.",
        technologies: ["SwiftUI", "Swift", "MVVM-C", "MapKit", "Node.js"],
        githubUrl: "https://github.com/andreeeestor/nearbyapp",
      },
    },
    {
      id: "estoque",
      title: "Estoque",
      cardDescription: "Sistema de gerenciamento de estoque.",
      imageUrl: "../../../images/estoque.jpg",
      projectInfo: {
        title: "Estoque",
        description:
          "Sistema completo de gerenciamento de estoque com recursos de previsão de demanda e alertas automáticos para reposição. Implementei um dashboard analítico com métricas de desempenho e integrações com sistemas ERP populares. A solução utiliza caching inteligente que reduziu o tempo de carregamento das páginas em 60% e incorpora um robusto sistema de controle de acesso baseado em funções.",
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
                T
              </span>
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                O
              </span>
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                S
              </span>
            </h1>

            <div className="w-32 h-1 bg-black mt-4 mb-2 rounded-full"></div>
            <p className="text-black font-medium opacity-80 text-lg max-w-lg">
              Uma coleção dos meus projetos mais recentes em desenvolvimento web
              e mobile.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 px-4">
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
              Mais No Meu Repositório
            </h1>
            <a
              href="https://github.com/andreeeestor?tab=repositories"
              target="_blank"
              className="flex items-center justify-between shadow-xl border-2 border-black px-6 py-4 rounded-2xl transition-all group hover:bg-black hover:text-white"
            >
              <span className="font-semibold text-xl tracking-tight ">
                Ver Todos
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
