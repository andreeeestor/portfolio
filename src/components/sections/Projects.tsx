"use client";
import { ArrowUpRight, Code, GithubLogo } from "@phosphor-icons/react";
import ProjectsCards from "./ProjectsCards";
import FlowerShape from "../icons/FlowerShape";

interface ProjectsProps {
  id: string;
}
export default function Projects(props: ProjectsProps) {
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
            title="CoverSpot"
            description="Descrição bacana. Feito em "
            imageUrl="../../../images/image.png"
          />
          <ProjectsCards
            withArrow
            title="Bon Voyage"
            description="Descrição bacana. Feito em "
            imageUrl="https://www.segueviagem.com.br/wp-content/uploads/2021/01/Aviao-shutterstock_146314307.jpg"
          />
          <ProjectsCards
            title="Projetin"
            description="Descrição bacana. Feito em "
            imageUrl="https://www.segueviagem.com.br/wp-content/uploads/2021/01/Aviao-shutterstock_146314307.jpg"
          />
          <ProjectsCards
            title="NearbyApp"
            description="Descrição bacana. Feito em "
            imageUrl="../../../images/business-people-using-maps-phones.jpg"
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
            title="Projetin"
            description="Descrição bacana. Feito em "
            imageUrl="https://www.segueviagem.com.br/wp-content/uploads/2021/01/Aviao-shutterstock_146314307.jpg"
          />
        </div>
      </section>
    </>
  );
}
