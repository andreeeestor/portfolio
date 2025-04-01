"use client";
import { motion } from "framer-motion";
import { ArrowDownLeft, ArrowUpRight } from "@phosphor-icons/react";
import SpringModal from "./Modal";
import { useState } from "react";

interface ProjectsCardsProps {
  withArrow?: boolean;
  title: string;
  description: string;
  imageUrl: string;
}

export default function ProjectsCards({
  withArrow = false,
  title,
  description,
  imageUrl,
}: ProjectsCardsProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.article
        className="w-96 h-[28rem] rounded-2xl relative overflow-visible shadow-lg"
        whileHover={{
          scale: 1.05,
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
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-sm">{description}</p>
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
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} title="Bon Voyage" />
    </>
  );
}
