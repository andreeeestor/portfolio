"use client";
import { HandWaving, Stack } from "@phosphor-icons/react";
import DecryptedText from "../DecryptedText";

interface HeroProps {}
export default function Hero(props: HeroProps) {
  return (
    <section className="w-full h-screen flex flex-col justify-evenly">
      <section className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 place-items-center">
        <HandWaving size={192} />
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-medium uppercase flex flex-col md:text-start text-center">
          <span className="text-4xl sm:text-5xl md:text-6xl md:pb-0 pb-7">
            oi! eu sou o
          </span>
          <DecryptedText
            text="André "
            maxIterations={6}
            animateOn="view"
            speed={500}
            revealDirection="end"
          />
          <DecryptedText
            text="Nestor."
            maxIterations={7}
            animateOn="view"
            speed={500}
            revealDirection="end"
          />
          <span className="text-2xl md:text-3xl pt-7">
            Desenvolvedor
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text font-bold">
              {" "}
              Front-End
            </span>
          </span>
        </h1>
      </section>
      <section className="animate-bounce flex justify-center items-center">
        <div className="cursor-pointer text-5xl -rotate-90 pb-[5px] flex justify-center items-center rounded-full size-16 shadow-md bg-black text-[#ACAAFF]">
          ⇜
        </div>
      </section>
    </section>
  );
}
