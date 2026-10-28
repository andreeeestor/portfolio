"use client";
import { CaretUp } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";

export default function UpButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    const onScroll = () => setBackToTopButton(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {backToTopButton && (
        <button
          onClick={scrollUp}
          aria-label="Voltar ao topo"
          className="fixed bottom-0 right-0 bg-primary border-2 border-black p-3 rounded-full m-4 z-50 shadow-2xl cursor-pointer hover:mb-5 hover:opacity-95 transition-all md:block hidden"
        >
          <CaretUp size={28} color="black" weight="bold" />
        </button>
      )}
    </>
  );
}
