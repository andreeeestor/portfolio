"use client";
import { HandWaving, Stack } from "@phosphor-icons/react";

interface HeroProps {}
export default function Hero(props: HeroProps) {
  return (
    <section className="w-full h-screen flex flex-col justify-normal md:justify-evenly">
        <section className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 place-items-center">
          <HandWaving size={192} />
          <h1 className="text-8xl font-medium uppercase flex flex-col">
            <span className="text-6xl">oi! eu sou o</span>
            <span className="font-sequel">André </span>
            <span className="font-sequel">Nestor.</span>
            <span className="text-3xl pt-7">
              Desenvolvedor 
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text font-bold"> Front-End</span>
            </span>
          </h1>
        </section>
      <section className="animate-bounce flex justify-center items-center py-20 md:py-0">
        <div className="cursor-pointer text-5xl -rotate-90 pb-3 pt-2 px-3 rounded-full shadow-md bg-black text-[#ACAAFF]">
          ⇜
        </div>
      </section>
    </section>
  );
}
