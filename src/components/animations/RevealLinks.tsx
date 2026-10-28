import React, { FC } from "react";
import { ArrowCircleRight } from "@phosphor-icons/react/dist/ssr";

export const RevealLinks: FC = () => {
  return (
    <section className="grid place-content-center px-2 sm:px-8 py-24 text-black">
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

const DURATION_MS = 250;
const STAGGER_MS = 25;

interface FlipLinkProps {
  children: string;
  href: string;
}

/**
 * Pure-CSS version of the letter flip (no JS / framer-motion needed):
 * every letter slides up and is replaced by a copy coming from below,
 * staggered per character.
 */
const FlipLink: FC<FlipLinkProps> = ({ children, href }) => {
  const chars = children.split("");
  const letterStyle = (i: number): React.CSSProperties => ({
    transitionDuration: `${DURATION_MS}ms`,
    transitionDelay: `${STAGGER_MS * i}ms`,
  });

  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className="group/flip relative block overflow-hidden whitespace-nowrap text-6xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {chars.map((char, i) => (
          <span
            className="inline-block transition-transform ease-in-out group-hover/flip:-translate-y-full"
            style={letterStyle(i)}
            key={i}
          >
            {char}
          </span>
        ))}
      </div>
      <div className="absolute inset-0" aria-hidden="true">
        {chars.map((char, i) => (
          <span
            className="inline-block translate-y-full transition-transform ease-in-out group-hover/flip:translate-y-0"
            style={letterStyle(i)}
            key={i}
          >
            {char}
          </span>
        ))}
      </div>
    </a>
  );
};
