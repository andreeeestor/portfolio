"use client";
import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react";
import ProjectsCards from "../ProjectsCards";

interface ProjectsProps {}
export default function Projects(props: ProjectsProps) {
  return (
    <>
      <div className="mt-12 w-full h-2 bg-black" />
      {/* <section>
        <h1 className="lg:-translate-y-9 2xl:-translate-y-[5.4rem] lg :text-[8rem] 2xl:text-[9.9rem] uppercase font-sequel tracking-wide bg-gradient-to-t from-gray-900 to-black text-transparent bg-clip-text"> */}

      <section className="relative">
        <h1 className="absolute uppercase -top-[52px] text-[9.4rem] font-sequel tracking-wide bg-gradient-to-t from-gray-900 to-black text-transparent bg-clip-text">
          {/* <h1 className="absolute -top-[5.785rem] text-[11.1rem] uppercase font-sequel tracking-wide"> */}
          {"//Projetos"}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 pt-52">
          <ProjectsCards
            title="Projeto A"
            description="Uma breve descrição do Projeto A."
            imageUrl="https://www.segueviagem.com.br/wp-content/uploads/2021/01/Aviao-shutterstock_146314307.jpg"
          />
          <ProjectsCards
            withArrow
            title="Bon Voyage"
            description="Descrição com a seta decorativa."
            imageUrl="https://www.segueviagem.com.br/wp-content/uploads/2021/01/Aviao-shutterstock_146314307.jpg"
          />
          <ProjectsCards
            title="Projeto C"
            description="Uma breve descrição do Projeto C."
            imageUrl="https://www.segueviagem.com.br/wp-content/uploads/2021/01/Aviao-shutterstock_146314307.jpg"
          />
          <ProjectsCards
            title="Projeto C"
            description="Uma breve descrição do Projeto C."
            imageUrl="https://www.segueviagem.com.br/wp-content/uploads/2021/01/Aviao-shutterstock_146314307.jpg"
          />
          <article className="w-96 space-y-8">
            <div className="w-full flex justify-center">
              <div className="border-2 border-black rounded-full p-5 shadow-sm">
                <GithubLogo size={32} weight="duotone" />
              </div>
            </div>
            <h1 className="text-center font-sequel text-4xl uppercase">
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
            title="Projeto C"
            description="Uma breve descrição do Projeto C."
            imageUrl="https://www.segueviagem.com.br/wp-content/uploads/2021/01/Aviao-shutterstock_146314307.jpg"
          />
        </div>
      </section>
    </>
  );
}
