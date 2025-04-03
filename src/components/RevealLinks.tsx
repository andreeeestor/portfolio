"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { ArrowCircleRight } from "@phosphor-icons/react";

export const RevealLinks: FC = () => {
  return (
    <section className="grid place-content-center px-8 py-24 text-black">
      <div className="flex items-center gap-x-6">
        <ArrowCircleRight className=" text-4xl sm:text-7xl md:text-8xl" />
        <FlipLink href="https://www.linkedin.com/in/andre-nestor/">
          LinkedIn
        </FlipLink>
      </div>
      <hr className="my-12 border-black" />
      <div className="flex items-center gap-x-6">
        <ArrowCircleRight className=" text-4xl sm:text-7xl md:text-8xl" />{" "}
        <FlipLink href="https://github.com/andreeeestor">GitHub</FlipLink>
      </div>
      <hr className="my-12 border-black" />
      <div className="flex items-center gap-x-6">
        <ArrowCircleRight className=" text-4xl sm:text-7xl md:text-8xl" />{" "}
        <FlipLink href="mailto:andrenestor0503@gmail.com">Gmail</FlipLink>
      </div>
      {/* <hr className="my-12 border-black" />
      <div className="flex items-center gap-x-6">
        <ArrowCircleRight className=" text-4xl sm:text-7xl md:text-8xl" />{" "}
        <FlipLink href="#">Instagram</FlipLink>
      </div> */}
    </section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

interface FlipLinkProps {
  children: React.ReactNode;
  href: string;
}

const FlipLink: FC<FlipLinkProps> = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"} 
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"} 
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((char, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {char}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((char, i) => (
          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
