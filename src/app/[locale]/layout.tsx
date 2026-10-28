import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/Header";
import localfont from "next/font/local";
import Footer from "@/components/layout/Footer";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Toaster } from "sonner";

const sequel = localfont({
  src: [
    {
      path: "../../../public/fonts/Sequel100Black-85.ttf",
    },
  ],
  variable: "--font-sequel",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "André Nestor // Portfólio",
  description:
    "Bem-vindo ao meu portfólio 🚀, aqui você encontrará todos os meus projetos e informações sobre mim.",
};

// Pre-render every locale at build time so pages are served as static HTML.
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Only the namespaces used by Client Components need to be shipped to the browser.
const CLIENT_NAMESPACES = ["navigation", "projects", "contact"] as const;

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
  setRequestLocale(locale);

  const allMessages = await getMessages();
  const clientMessages = Object.fromEntries(
    CLIENT_NAMESPACES.map((ns) => [ns, allMessages[ns]])
  );

  return (
    <html lang={locale} className="!scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${spaceGrotesk.className} ${sequel.variable} mx-auto max-w-[1440px] 2xl:px-0 md:px-8 px-4 bg-[#c0f48c] select-none`}
      >
        <Toaster richColors position="bottom-center" />
        <NextIntlClientProvider messages={clientMessages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
