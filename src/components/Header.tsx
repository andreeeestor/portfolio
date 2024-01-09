interface HeaderProps {}
export default function Header(props: HeaderProps) {
  return (
    <>
      <header className="w-full py-6 bg-[#c0f48c] border-b-2 border-black sticky top-0 z-50">
        <nav>
          <ul className="flex justify-center items-center gap-x-6 uppercase font-medium cursor-default">
            <li className="relative group cursor-pointer opacity-80 hover:opacity-100 transition-all">
              <span>Sobre mim</span>
              <span className="absolute -bottom-[1px] left-1/2 w-0 h-[2px] bg-black group-hover:w-1/2 group-hover:transition-all"></span>
              <span className="absolute -bottom-[1px] right-1/2 w-0 h-[2px] bg-black group-hover:w-1/2 group-hover:transition-all"></span>
            </li>
            <li>//</li>
            <li className="relative group cursor-pointer opacity-80 hover:opacity-100 transition-all">
              <span>Redes</span>
              <span className="absolute -bottom-[1px] left-1/2 w-0 h-[2px] bg-black group-hover:w-1/2 group-hover:transition-all"></span>
              <span className="absolute -bottom-[1px] right-1/2 w-0 h-[2px] bg-black group-hover:w-1/2 group-hover:transition-all"></span>
            </li>
            <li>//</li>
            <li className="relative group cursor-pointer opacity-80 hover:opacity-100 transition-all">
              <span>Projetos</span>
              <span className="absolute -bottom-[1px] left-1/2 w-0 h-[2px] bg-black group-hover:w-1/2 group-hover:transition-all"></span>
              <span className="absolute -bottom-[1px] right-1/2 w-0 h-[2px] bg-black group-hover:w-1/2 group-hover:transition-all"></span>
            </li>
            
          </ul>
        </nav>
      </header>
    </>
  );
}
