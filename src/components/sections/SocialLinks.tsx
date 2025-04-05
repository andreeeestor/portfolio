import { RevealLinks } from "../RevealLinks";

interface SocialLinksProps {}
export default function SocialLinks(props: SocialLinksProps) {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center w-full">
      <div className="flex flex-col space-y-6">
        <h1 className="font-sequel uppercase text-4xl">{"// Minhas Redes"}</h1>
        <h6 className="text-2xl font-medium uppercase">
          <p className="mb-2">
            &quot;Somos aquilo que fazemos repetidamente. A excelência,
            portanto, não é um ato, mas um hábito.&quot;
          </p>

          <span className="uppercase font-black">– Aristóteles</span>
        </h6>
      </div>
      <div>
        <RevealLinks />
      </div>
    </section>
  );
}
