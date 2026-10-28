"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ArrowDownLeft, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

// The modal (and framer-motion's exit animation) is only needed once a card is opened.
const loadModal = () => import("../ui/Modal");
const SpringModal = dynamic(loadModal, { ssr: false });

interface ProjectInfo {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  status?: "development" | "completed";
}

interface ProjectsCardsProps {
  withArrow?: boolean;
  title: string;
  description: string;
  imageUrl: string;
  projectInfo: ProjectInfo;
  status?: "development" | "completed";
}

export default function ProjectsCards({
  withArrow = false,
  title,
  description,
  imageUrl,
  projectInfo,
  status,
}: ProjectsCardsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  const openModal = () => {
    setHasOpened(true);
    setIsOpen(true);
  };

  return (
    <>
      <article className="group/card w-full sm:w-[335px] md:w-96 h-[22rem] sm:h-[28rem] rounded-2xl relative overflow-visible shadow-lg transition-[transform,box-shadow] duration-300 hover:scale-[1.02] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
        <div className="absolute inset-0 rounded-2xl transition-transform duration-500 group-hover/card:scale-110">
          <Image
            src={imageUrl}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 384px"
            quality={75}
            className="rounded-2xl object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 bg-black/50 rounded-2xl transition-colors duration-500 group-hover/card:bg-black/30" />

        <div className="relative z-10 flex flex-col items-center justify-center text-white p-6 text-center h-full transition-transform duration-500 group-hover/card:-translate-y-2.5">
          <h3 className="text-xl sm:text-2xl font-bold mb-2">{title}</h3>
          <p className="text-xs sm:text-sm">{description}</p>

          {status === "development" && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-full shadow-lg border border-orange-300 flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></span>
              EM DESENVOLVIMENTO
            </div>
          )}
        </div>
        <div
          onClick={openModal}
          onPointerEnter={() => void loadModal()}
          className="z-10 absolute right-3 bottom-3 rounded-full bg-transparent border-2 border-white transition-all hover:bg-white p-3 group cursor-pointer"
        >
          <ArrowUpRight
            size={32}
            className="text-white group-hover:text-black"
          />
        </div>

        {withArrow && (
          <div className="absolute top-[-3rem] right-1/2 translate-x-1/2 flex justify-center items-center rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 p-5 border-[6px] border-[#c0f48c]">
            <ArrowDownLeft size={48} color="#FFF" />
          </div>
        )}
      </article>
      {hasOpened && (
        <SpringModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          projectInfo={projectInfo}
        />
      )}
    </>
  );
}
