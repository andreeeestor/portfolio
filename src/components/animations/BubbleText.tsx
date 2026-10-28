"use client";
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
  // The "bubble" weight/color effect on hover is pure CSS (see `.hover-text` in globals.css).

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
