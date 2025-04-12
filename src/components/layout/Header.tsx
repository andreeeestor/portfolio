"use client";
import { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import ResumeButton from "../ui/ResumeButton";
import { CaretDown, Globe } from "@phosphor-icons/react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Language = "pt" | "en";

interface LanguageOptionProps {
  language: Language;
  label: string;
  onClick: (language: Language) => void;
}

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: { duration: 0.2 },
  },
};

const HAMBURGER_VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 6px)",
    },
  },
};

const LanguageOption = ({ language, label, onClick }: LanguageOptionProps) => (
  <motion.li
    variants={itemVariants}
    className="flex items-center gap-2 w-full p-2 text-sm font-medium whitespace-nowrap rounded-md hover:bg-green-100 text-black hover:text-green-500 transition-colors cursor-pointer"
    onClick={() => onClick(language)}
  >
    {label}
  </motion.li>
);

const LanguageToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale() as Language;
  const router = useRouter();

  const handleLanguageChange = (newLanguage: Language) => {
    if (newLanguage === locale) {
      setIsOpen(false);
      return;
    }
    
    const path = window.location.pathname;
    const currentPath = path.startsWith(`/${locale}`) 
      ? path.substring(locale.length + 1) || ''
      : '';
    
    router.push(`/${newLanguage}${currentPath ? `/${currentPath}` : ''}`);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.div
        className="relative cursor-pointer group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 backdrop-blur-sm border-2 border-black shadow-sm hover:shadow-md transition-all"
        >
          <Globe size={18} className="text-black" />
          <span className="font-medium uppercase">{locale}</span>
          <CaretDown size={12} />
        </div>
        <motion.div
          className="absolute -bottom-1 inset-x-0 h-1 bg-transparent rounded-full origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial="closed"
            animate="open"
            exit="closed"
            variants={wrapperVariants}
            className="absolute top-12 right-0 bg-white rounded-lg shadow-lg p-2 w-32 flex flex-col gap-1 z-50"
            style={{ transformOrigin: "top" }}
          >
            <LanguageOption
              language="pt"
              label="Português"
              onClick={handleLanguageChange}
            />
            <LanguageOption
              language="en"
              label="English"
              onClick={handleLanguageChange}
            />
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AnimatedHamburgerButtonProps {
  active: boolean;
  setActive: (active: boolean) => void;
}

const AnimatedHamburgerButton = ({
  active,
  setActive,
}: AnimatedHamburgerButtonProps) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive(!active)}
        aria-label="Menu"
        className="relative h-14 w-14 rounded-full bg-white shadow-md transition-colors hover:bg-gray-50"
      >
        <motion.span
          variants={HAMBURGER_VARIANTS.top}
          className="absolute h-0.5 w-6 bg-black"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.middle}
          className="absolute h-0.5 w-6 bg-black"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.bottom}
          className="absolute h-0.5 w-3 bg-black"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 6px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations('navigation');
  const locale = useLocale();

  return (
    <header className="w-full py-6 bg-[#c0f48c] border-b-2 border-black border-x-2 border-x-[#c0f48c] sticky top-0 z-50">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <ul className="hidden lg:flex items-center gap-6 uppercase font-medium">
          <li className="relative group cursor-pointer">
            <a href="#about" className="hover:opacity-100 transition-all">
              {t('about')}
            </a>
            <span className="absolute -bottom-[1px] left-1/2 w-0 h-[2px] bg-black group-hover:w-1/2 group-hover:transition-all" />
            <span className="absolute -bottom-[1px] right-1/2 w-0 h-[2px] bg-black group-hover:w-1/2 group-hover:transition-all" />
          </li>
          <li className="opacity-40 font-bold">{"//"}</li>
          <li className="relative group cursor-pointer">
            <a href="#skills" className="hover:opacity-100 transition-all">
              {t('skills')}
            </a>
            <span className="absolute -bottom-[1px] left-1/2 w-0 h-[2px] bg-black group-hover:w-1/2 group-hover:transition-all" />
            <span className="absolute -bottom-[1px] right-1/2 w-0 h-[2px] bg-black group-hover:w-1/2 group-hover:transition-all" />
          </li>
          <li className="opacity-40 font-bold">{"//"}</li>
          <li className="relative group cursor-pointer">
            <a href="#projects" className="hover:opacity-100 transition-all">
              {t('projects')}
            </a>
            <span className="absolute -bottom-[1px] left-1/2 w-0 h-[2px] bg-black group-hover:w-1/2 group-hover:transition-all" />
            <span className="absolute -bottom-[1px] right-1/2 w-0 h-[2px] bg-black group-hover:w-1/2 group-hover:transition-all" />
          </li>
          <li className="opacity-40 font-bold">{"//"}</li>
          <li className="relative group cursor-pointer">
            <a href="#contact" className="hover:opacity-100 transition-all">
              {t('contact')}
            </a>
            <span className="absolute -bottom-[1px] left-1/2 w-0 h-[2px] bg-black group-hover:w-1/2 group-hover:transition-all" />
            <span className="absolute -bottom-[1px] right-1/2 w-0 h-[2px] bg-black group-hover:w-1/2 group-hover:transition-all" />
          </li>
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <LanguageToggle />
          <ResumeButton />
        </div>

        <div className="lg:hidden flex items-center justify-between w-full gap-4">
          <LanguageToggle />
          <AnimatedHamburgerButton active={menuOpen} setActive={setMenuOpen} />
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              variants={wrapperVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden absolute top-24 right-4 bg-white rounded-lg shadow-lg p-4 min-w-[200px]"
            >
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="#about"
                    className="block px-4 py-2 rounded-md hover:bg-green-100 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {t('about')}
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="block px-4 py-2 rounded-md hover:bg-green-100 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {t('projects')}
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="block px-4 py-2 rounded-md hover:bg-green-100 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {t('skills')}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="block px-4 py-2 rounded-md hover:bg-green-100 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {t('contact')}
                  </a>
                </li>
                <li className="mt-2 px-4">
                  <ResumeButton />
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}