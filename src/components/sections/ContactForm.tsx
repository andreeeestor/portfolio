import { PhoneCall } from "@phosphor-icons/react/dist/ssr";
import BubbleText from "../animations/BubbleText";
import ScrollVelocity from "../animations/ScrollVelocity";
import StarBorder from "../ui/StarBorder";
import { useTranslations } from "next-intl";
interface ContactProps {
  id: string;
}

export default function Contact(props: ContactProps) {
  const t = useTranslations("contact");
  return (
    <StarBorder id={props.id} className="w-full mt-24" color="cyan" speed="5s">
      <ScrollVelocity
        texts={[`${t("title")}`, `${t("title")}`]}
        velocity={60}
        className="font-sequel uppercase text-gray-200 pt-4"
      />
      <form className="backdrop-blur-md bg-white/5 border border-white/20 z-50 rounded-xl flex flex-col p-6 my-8 shadow-lg mx-6">
        <div className="flex flex-col md:flex-row items-center">
          <input
            title="Nome:"
            className="w-full bg-transparent backdrop-blur-sm border border-white/10 text-white placeholder-white/50 text-sm rounded-xl px-3 py-4 mb-4 outline-none"
            type="text"
            placeholder={`${t("name")}`}
            required
          />
          <div className="hidden md:w-12 md:block" />
          <input
            title="Email:"
            className="w-full bg-transparent backdrop-blur-sm border border-white/10 text-white placeholder-white/50 text-sm rounded-xl px-3 py-4 mb-4 outline-none"
            type="email"
            placeholder="Email:"
            required
          />
        </div>
        <textarea
          className="bg-transparent backdrop-blur-sm border border-white/10 text-white placeholder-white/50 resize-none text-sm rounded-lg p-3 mb-4 outline-none"
          placeholder={`${t("message")}`}
          rows={10}
        />

        <button
          className="text-black bg-white w-full py-4 tracking-wider transition-all hover:tracking-widest rounded-3xl hover:opacity-90"
          type="submit"
        >
          {t("send")}
        </button>
      </form>

      <h6 className="text-indigo-300 font-semibold tracking-widest pb-4">{t("or")}</h6>
      <div className="flex sm:flex-row flex-col items-center justify-center gap-y-4 sm:gap-x-4 text-3xl sm:text-5xl text-indigo-300 pb-8">
        <PhoneCall />
        <span>{`//`}</span>
        <BubbleText />
      </div>
    </StarBorder>
  );
}
