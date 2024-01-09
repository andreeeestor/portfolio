interface HeaderProps {}
export default function Header(props: HeaderProps) {
  return (
    <>
      <header className="w-full py-6 bg-[#c0f48c] border-b-2 border-black">
        <nav>
          <ul className="flex justify-center items-center gap-x-6">
            <li className="cursor-pointer transition-all border-b-2 border-transparent hover:border-black">Sobre mim</li>
            <li className="cursor-pointer">Redes</li>
            <li className="cursor-pointer">Projetos</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
