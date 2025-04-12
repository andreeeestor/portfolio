"use client";
import { ArrowUpRight, DownloadSimple } from "@phosphor-icons/react";
import { useTranslations, useLocale } from "next-intl";

export default function ResumeButton() {
  const t = useTranslations("navigation");
  const locale = useLocale();

  const handleDownload = () => {
    const fileName =
      locale === "pt"
        ? "curriculo-andre-nestor.pdf"
        : "resume-andre-nestor.pdf";
    const fileUrl = `/resume/${fileName}`;

    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="md:w-auto w-full group flex h-10 items-center gap-2 rounded-xl bg-transparent border-2 border-black pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-black hover:pl-2 hover:text-white active:bg-neutral-700 relative"
    >
      <span className="animate-ping absolute inline-flex w-3 h-3 left-[10px] rounded-full bg-slate-900 group-hover:hidden" />
      <span className="rounded-full bg-black p-1 text-sm transition-colors duration-300 group-hover:bg-white">
        <DownloadSimple
          weight="bold"
          className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45"
        />
      </span>
      <span className="font-medium">{t("resumeBtn")}</span>
    </button>
  );
}
