import BubbleText from "../BubbleText";

interface ContactProps {}
export default function Contact(props: ContactProps) {
  return (
    <section className="w-full bg-black shadow-md rounded-3xl p-8 border-2 border-solid border-slate-700 mt-24">
        <div className="flex items-center justify-between">
            <h1 className="text-white text-4xl font-sequel uppercase">
                Contate-me para<br/>mais informações
            </h1>
            <form className="bg-[#c0f48c] rounded-lg -translate-y-16 flex flex-col p-4 border-2 border-slate-700">

                <label>Email:</label>
                <input className="bg-transparent shadow-inner text-xs outline-none rounded-lg p-2 border-b-2 border-slate-900" type="email" name="" id="" required />
    <label></label>
                <textarea className="bg-transparent shadow-inner text-xs outline-none rounded-lg p-2 border-b-2 border-slate-900" />
                <button className="text-white bg-black w-full py-2 tracking-wider transition-all hover:tracking-widest rounded-lg" type="submit">Enviar</button>
            </form>
        </div>
        <BubbleText />
    </section>
  );
}
