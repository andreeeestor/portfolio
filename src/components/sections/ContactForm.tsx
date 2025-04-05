import { PhoneCall } from "@phosphor-icons/react/dist/ssr";
import BubbleText from "../BubbleText";
import ScrollVelocity from "../ScrollVelocity";
import StarBorder from "../StarBorder";

interface ContactProps {
  id: string
}

export default function Contact(props: ContactProps) {
  return (
    <StarBorder id={props.id} className="w-full mt-24" color="cyan" speed="5s">
      <ScrollVelocity
        texts={["Entre em Contato // ", "Entre em Contato // "]}
        velocity={60}
        className="font-sequel uppercase text-gray-200 pt-4"
      />
      <form className="backdrop-blur-md bg-white/5 border border-white/20 z-50 rounded-xl flex flex-col p-6 my-8 shadow-lg mx-6">
        <div className="flex flex-col md:flex-row items-center">
          <input
            title="Nome:"
            className="w-full bg-black/30 backdrop-blur-sm border border-white/10 text-white placeholder-white/50 text-sm rounded-xl px-3 py-4 mb-4 outline-none"
            type="text"
            placeholder="Nome:"
            required
          />
          <div className="hidden md:w-12 md:block" />
          <input
            title="Email:"
            className="w-full bg-black/30 backdrop-blur-sm border border-white/10 text-white placeholder-white/50 text-sm rounded-xl px-3 py-4 mb-4 outline-none"
            type="email"
            placeholder="Email:"
            required
          />
        </div>
        <textarea
          className="bg-black/30 backdrop-blur-sm border border-white/10 text-white placeholder-white/50 resize-none text-sm rounded-lg p-3 mb-4 outline-none"
          placeholder="Digite sua mensagem..."
          rows={10}
        />

        <button
          className="text-black bg-white w-full py-4 tracking-wider transition-all hover:tracking-widest rounded-3xl hover:opacity-90"
          type="submit"
        >
          Enviar
        </button>
      </form>

      <h6 className="text-indigo-300 font-semibold tracking-widest pb-4">OU</h6>
      <div className="flex items-center justify-center gap-x-4 text-5xl text-indigo-300 pb-8">
        <PhoneCall />
        <span>{`//`}</span>
        <BubbleText />
      </div>
    </StarBorder>
  );
}
