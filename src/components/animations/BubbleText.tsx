"use client";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

const BubbleText = () => {
  const t  = useTranslations("contact");
  const phoneNumber = "+55 31 99820-2542";

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => toast.success(t("phoneNumberAlert")))
      .catch((err) => console.error("Erro ao copiar:", err));
  };
  useEffect(() => {
    const spans = document.querySelectorAll(
      ".hover-text span"
    ) as NodeListOf<HTMLSpanElement>;

    spans.forEach((span) => {
      span.addEventListener("mouseenter", function (this: typeof span) {
        this.style.fontWeight = "900";
        this.style.color = "rgb(238, 242, 255)";

        const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
        const rightNeighbor = this.nextElementSibling as HTMLSpanElement;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "500";
          leftNeighbor.style.color = "rgb(199, 210, 254)";
        }
        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "500";
          rightNeighbor.style.color = "rgb(199, 210, 254)";
        }
      });

      span.addEventListener("mouseleave", function (this: typeof span) {
        this.style.fontWeight = "100";
        this.style.color = "rgb(165, 180, 252)";

        const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
        const rightNeighbor = this.nextElementSibling as HTMLSpanElement;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "100";
          leftNeighbor.style.color = "rgb(165, 180, 252)";
        }

        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "100";
          rightNeighbor.style.color = "rgb(165, 180, 252)";
        }
      });
    });
  }, []);

  return (
    <h2
      title="Clique para copiar o número"
      onClick={copyToClipboard}
      className="cursor-pointer hover-text text-center text-3xl sm:text-5xl font-thin text-indigo-300"
    >
      <Text>{phoneNumber}</Text>
    </h2>
  );
};

const Text = ({ children }: { children: string }) => {
  return (
    <>
      {children.split("").map((child, idx) => (
        <span
          style={{
            transition: "0.35s font-weight, 0.35s color",
          }}
          key={idx}
        >
          {child}
        </span>
      ))}
    </>
  );
};

export default BubbleText;
