"use client";
import { ArrowUpRight, DownloadSimple } from "@phosphor-icons/react";

interface ResumeButtonProps {}
export default function ResumeButton(props: ResumeButtonProps) {
  return (
    <button className="md:w-auto w-full group flex h-10 items-center gap-2 rounded-xl bg-transparent border-2 border-black pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-black hover:pl-2 hover:text-white active:bg-neutral-700 relative">
      <span className="animate-ping absolute inline-flex w-3 h-3 left-[10px] rounded-full bg-slate-900 group-hover:hidden" />
      <span className="rounded-full bg-black p-1 text-sm transition-colors duration-300 group-hover:bg-white">
        <DownloadSimple
          weight="bold"
          className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45"
        />
      </span>
      <span className="font-medium">Meu Currículo</span>
    </button>
  );
}
