import { useTranslations } from "next-intl";
import { RevealLinks } from "../animations/RevealLinks";
import AsciiAristotle from "../animations/AsciiAristotle";

export default function SocialLinks() {
  const t = useTranslations("socialLinks");
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center gap-12 w-full py-20 lg:py-32 my-8 lg:my-12 min-h-[75vh]">
      <div className="flex flex-col space-y-6 w-full lg:max-w-xl">
        <h2 className="font-sequel uppercase text-4xl">{t("title")}</h2>
        <div className="text-xl sm:text-2xl font-medium uppercase">
          <p className="mb-2">
            &quot;{t("phrase")}&quot;
          </p>

          <span className="uppercase font-black">– {t("author")}</span>
        </div>
        <div className="pt-2">
          <AsciiAristotle />
        </div>
      </div>
      <div className="w-full lg:w-auto">
        <RevealLinks />
      </div>
    </section>
  );
}
