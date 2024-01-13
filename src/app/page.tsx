"use client"
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UpButton from "@/components/UpButton";
import FlowerShape from "@/components/icons/FlowerShape";
import ThunderShape from "@/components/icons/ThunderShape";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="">
        <UpButton />
        <section className="w-full bg-black shadow-md rounded-xl p-8">
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
          <p className="text-white text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id nisl
            vel urna aliquet effic. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ea eligendi impedit dolorem laudantium ab
            similique tenetur placeat sint, maxime quasi perspiciatis eveniet
            esse error corrupti voluptate! Accusantium provident eos quia? Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Provident soluta
            veritatis quod vel a ut obcaecati cupiditate. Aliquid voluptates,
            accusamus minus totam ab consequatur amet? Explicabo aliquam iusto
            quaerat dolores.
          </p>
        </section>
      </main>
    </>
  );
}
