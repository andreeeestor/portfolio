import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import UpButton from "@/components/UpButton";
import FlowerShape from "@/components/icons/FlowerShape";
import ThunderShape from "@/components/icons/ThunderShape";
import Image from "next/image";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="">
        <UpButton />
        <section className="w-full bg-[#0e0d0d] shadow-md rounded-3xl p-8 border-2 border-solid border-[#1f1f1f]">
          <h1 className="font-sequel uppercase text-primary text-4xl">
            // sobre mim
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
              src={"/images/apagaissoaq.jpg"}
              alt="Minha Foto"
              className="w-full h-72 bg-white rounded-3xl"
              width={100}
              height={288}
            />
            <p className="text-white text-lg leading-8">
              Olá, sou o André, tenho 18 anos e me formei no ensino médio
              técnico do COTEMIG, onde cursei o curso de desenvolvimento Web e
              Mobile, atualmente estou no 3º período no curso superior de
              Análise e Desenvolvimento de Sistemas na Faculdade COTEMIG.
              Desenvolvo sites com interfaces modernas e de alta qualidade, concentrado em
              performance, animações, responsividade e SEO.
            </p>
          </div>
        </section>

        <Projects />
      </main>
    </>
  );
}
