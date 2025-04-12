import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/Header";
import localfont from "next/font/local";
import Footer from "@/components/layout/Footer";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const sequel = localfont({
  src: [
    {
      path: "../../../public/fonts/Sequel100Black-85.ttf",
    },
  ],
  variable: "--font-sequel",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "André Nestor // Portfólio",
  description:
    "Bem-vindo ao meu portfólio 🚀, aqui você encontrará todos os meus projetos e informações sobre mim.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} className="!scroll-smooth">
      <body
        className={`${spaceGrotesk.className} ${sequel.variable} mx-auto max-w-[1440px] 2xl:px-0 md:px-8 px-4 bg-[#c0f48c] select-none`}
      >
        <Toaster position="bottom-center" />
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
