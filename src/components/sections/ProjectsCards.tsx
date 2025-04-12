"use client";
import { motion } from "framer-motion";
import { ArrowDownLeft, ArrowUpRight } from "@phosphor-icons/react";
import SpringModal from "../ui/Modal";
import { useState } from "react";

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
  return (
    <>
      <motion.article
        className="w-full sm:w-[335px] md:w-96 h-[22rem] sm:h-[28rem] rounded-2xl relative overflow-visible shadow-lg"
        whileHover={{
          scale: 1.02,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center rounded-2xl"
          style={{ backgroundImage: `url(${imageUrl})` }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"
          whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          className="relative z-10 flex flex-col items-center justify-center text-white p-6 text-center h-full"
          whileHover={{ y: -10 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-2">{title}</h3>
          <p className="text-xs sm:text-sm">{description}</p>

          {status === "development" && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-full shadow-lg border border-orange-300 flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></span>
              EM DESENVOLVIMENTO
            </div>
          )}
        </motion.div>
        <div
          onClick={() => setIsOpen(true)}
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
      </motion.article>
      <SpringModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        projectInfo={projectInfo}
      />
    </>
  );
}
