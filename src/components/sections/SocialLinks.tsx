import { useTranslations } from "next-intl";
import { RevealLinks } from "../animations/RevealLinks";

export default function SocialLinks() {
  const t = useTranslations("socialLinks")
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center w-full lg:mt-0 mt-24">
      <div className="flex flex-col space-y-6">
        <h1 className="font-sequel uppercase text-4xl">{t("title")}</h1>
        <h6 className="text-2xl font-medium uppercase">
          <p className="mb-2">
            &quot;{t("phrase")}&quot;
          </p>

          <span className="uppercase font-black">– {t("author")}</span>
        </h6>
      </div>
      <div>
        <RevealLinks />
      </div>
    </section>
  );
}
