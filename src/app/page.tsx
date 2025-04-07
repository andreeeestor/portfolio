import Hero from "@/components/sections/Hero";
import UpButton from "@/components/ui/UpButton";
import ThunderShape from "@/components/icons/ThunderShape";
import Image from "next/image";
import Projects from "@/components/sections/Projects";
import SocialLinks from "@/components/sections/SocialLinks";
import Contact from "@/components/sections/ContactForm";
import Skills from "@/components/sections/Skills";
import StarBorder from "@/components/ui/StarBorder";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="">
        <UpButton />
        <StarBorder id="about" className="w-full">
          <div className="text-start px-8 py-4">
            <h1 className="font-sequel uppercase text-primary text-4xl">
              {"// sobre mim"}
            </h1>
            <div className="relative">
              <div className="w-full h-[2px] bg-[#c0f48c] my-8">
                <ThunderShape
                  className="absolute right-[48.8%] top-0 -translate-y-[14px] shadow-lg"
                  width="30"
                  height="30"
                  color1="#c0f48c"
                  color2="#c0f48c"
                />
              </div>
            </div>
            <div className="grid place-items-center md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-2 md:gap-x-8">
              <Image
                src={"/images/eu.jpeg"}
                alt="Minha Foto"
                className="w-full h-96 bg-white rounded-3xl object-cover"
                quality={100}
                width={1000}
                height={768}
                priority
              />
              <p className="text-white text-lg leading-8">
                Olá, sou o André, tenho 19 anos e me formei no ensino médio
                técnico do COTEMIG, onde cursei o curso de desenvolvimento Web e
                Mobile, atualmente estou no 3º período no curso superior de
                Análise e Desenvolvimento de Sistemas na Faculdade COTEMIG.
                Desenvolvo sites e aplicativos iOS com interfaces modernas e de
                alta qualidade, concentrado em performance, animações,
                responsividade e SEO.
              </p>
            </div>
          </div>
        </StarBorder>
        <SocialLinks />
        <Skills id={"skills"} />
        <Projects id={"projects"} />
        <Contact id={"contact"} />
      </main>
    </>
  );
}
