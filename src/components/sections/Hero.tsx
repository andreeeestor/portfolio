"use client";
import { HandWaving, Stack } from "@phosphor-icons/react";
import DecryptedText from "../animations/DecryptedText";
import RotatingText from "../animations/RotatingText";
import { useTranslations, useLocale } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

  const renderSubtitle = () => {
    if (locale === "pt") {
      return (
        <h3 className="flex items-center pt-6 gap-x-2">
          <span className="text-xl sm:text-2xl md:text-3xl">
            {t("subtitle")}
          </span>
          <RotatingText
            texts={["Front-End", "Web", "Mobile"]}
            mainClassName="text-xl sm:text-2xl md:text-3xl pt-1"
            elementLevelClassName="bg-gradient-to-r from-indigo-300 to-purple-300 text-transparent bg-clip-text"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden mb-1 bg-gradient-to-br from-indigo-400 to-purple-300 text-transparent bg-clip-text font-bold"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </h3>
      );
    }
    return (
      <h3 className="flex items-center pt-6 gap-x-2">
        <RotatingText
          texts={["Front-End", "Web", "Mobile"]}
          mainClassName="text-xl sm:text-2xl md:text-3xl pt-1"
          elementLevelClassName="bg-gradient-to-r from-indigo-300 to-purple-300 text-transparent bg-clip-text"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden mb-1 bg-gradient-to-br from-indigo-400 to-purple-300 text-transparent bg-clip-text font-bold"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
        <span className="text-xl sm:text-2xl md:text-3xl">{t("subtitle")}</span>
      </h3>
    );
  };

  return (
    <section className="w-full h-screen flex flex-col justify-evenly">
      <section className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 place-items-center">
        <HandWaving className="sm:size-48 size-40" />
        <div className="text-3xl sm:text-6xl md:text-8xl font-medium uppercase flex flex-col md:text-start text-center">
          <span className="text-2xl sm:text-5xl md:text-6xl md:pb-0 pb-7">
            {t("title")}
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
          {renderSubtitle()}
        </div>
      </section>
      <section className="animate-bounce flex justify-center items-center">
        <a
          href="#about"
          className="cursor-pointer text-5xl -rotate-90 pb-[5px] flex justify-center items-center rounded-full size-16 shadow-md bg-black text-[#ACAAFF]"
        >
          ⇜
        </a>
      </section>
    </section>
  );
}
