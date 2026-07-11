"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { HandWaving } from "@phosphor-icons/react";

function FloatingShape({
  style,
  delay = 0,
}: {
  style?: React.CSSProperties;
  delay?: number;
}) {
  return (
    <svg
      viewBox="0 0 60 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute opacity-90"
      style={{
        width: 80,
        animation: "floatShape 6s ease-in-out infinite",
        animationDelay: `${delay}s`,
        ...style,
      }}
    >
      <path d="M0 20 L30 0 L60 20 L30 40 Z" fill="white" opacity="0.85" />
      <path d="M30 0 L60 20 L30 22 Z" fill="rgba(0,0,0,0.07)" />
    </svg>
  );
}

function Asterisk({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute"
      style={{
        width: 126,
        animation: "spinSlow 14s linear infinite",
        ...style,
      }}
    >
      {[0, 45, 90, 135].map((deg) => (
        <line
          key={deg}
          x1="20"
          y1="4"
          x2="20"
          y2="36"
          stroke="#000"
          strokeWidth="2.5"
          strokeLinecap="round"
          transform={`rotate(${deg} 20 20)`}
        />
      ))}
      <circle cx="20" cy="20" r="2.5" fill="rgba(0,0,0,0.3)" />
    </svg>
  );
}

export default function Hero() {
  const t = useTranslations("hero");

  useEffect(() => {}, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatShape {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-14px) rotate(4deg); }
          66% { transform: translateY(8px) rotate(-3deg); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes waveHand {
          0% { transform: rotate(0deg); }
          20% { transform: rotate(-15deg); }
          40% { transform: rotate(15deg); }
          60% { transform: rotate(-10deg); }
          80% { transform: rotate(10deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes bounceArrow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(12px); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0,0,0,0.12), 0 0 0 8px rgba(0,0,0,0.05); }
          50% { box-shadow: 0 0 0 6px rgba(0,0,0,0.08), 0 0 0 14px rgba(0,0,0,0.03); }
        }
        .hero-name {
          animation: scaleIn 0.9s cubic-bezier(0.16,1,0.3,1) forwards;
          opacity: 0;
        }
        .hero-sub {
          animation: fadeSlideUp 0.7s ease forwards;
          opacity: 0;
        }
        .hero-corner {
          animation: fadeIn 1.2s ease forwards;
          opacity: 0;
        }
      `}} />

      <section className="relative w-full h-screen overflow-hidden flex flex-col">

        <div className="absolute top-[3%] left-1/2 -translate-x-1/2">
          <Asterisk style={{ width: 80 }} />
        </div>
        <Asterisk style={{ top: "12%", right: "10%", width: 18, animationDuration: "20s", animationDirection: "reverse" }} />

        <FloatingShape style={{ top: "10%", right: "20%" }} delay={0} />
        <FloatingShape style={{ top: "22%", right: "7%" }} delay={1.4} />
        <FloatingShape style={{ top: "42%", right: "13%", width: 36 }} delay={2.8} />

        {/* <div
          className="hero-corner absolute left-0 top-1/2 text-[10px] uppercase tracking-[0.18em] text-black/35"
          style={{ animationDelay: "1s", writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
        >
          André Nestor · 2026
        </div> */}

        <div
          className="hero-corner absolute right-8 top-8 text-[11px] uppercase tracking-[0.2em] text-black/40 font-medium"
          style={{ animationDelay: "0.6s" }}
        >
          2026
        </div>

        <div className="flex-1 flex flex-col items-start justify-center gap-0 relative">
          <div className="flex items-end gap-2 sm:gap-4 lg:gap-6">
            <h1
              className="hero-name font-sequel uppercase text-black text-left select-none leading-[0.88]"
              style={{
                fontSize: "clamp(3.5rem, 12vw, 12rem)",
                letterSpacing: "-0.02em",
                animationDelay: "0.1s",
              }}
            >
              André
            </h1>
            <HandWaving
              className="text-black mb-4 sm:mb-5"
              style={{
                width: "clamp(3rem, 10vw, 10rem)",
                height: "clamp(3rem, 10vw, 10rem)",
                transformOrigin: "70% 70%",
                animation: "scaleIn 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s forwards, waveHand 2.5s ease-in-out infinite",
                opacity: 0,
              }}
            />
          </div>
          <h1
            className="hero-name font-sequel uppercase text-black text-left select-none leading-[0.88]"
            style={{
              fontSize: "clamp(3.5rem, 12vw, 12rem)",
              letterSpacing: "-0.02em",
              animationDelay: "0.22s",
            }}
          >
            Nestor
            <span
              className="font-sans normal-case text-black/60 font-medium inline-block"
              style={{
                fontSize: "clamp(1rem, 2.2vw, 2.2rem)",
                letterSpacing: 0,
                marginLeft: "0.2em",
                transform: "translateY(-40%)",
              }}
            >
              (dev.)
            </span>
          </h1>

          <div className="w-full flex justify-center mt-32">
            <a
              href="#about"
              className="hero-sub flex flex-col items-center gap-2 group"
              style={{
                animationDelay: "0.8s",
                animation: "fadeSlideUp 0.7s ease 0.8s forwards",
                opacity: 0,
              }}
            >
              <div
                className="flex items-center justify-center rounded-full bg-black/[0.06] border-2 border-black/20 group-hover:border-black/50 group-hover:bg-black/10 transition-all duration-300"
                style={{
                  width: 56,
                  height: 56,
                  animation: "glowPulse 2.4s ease-in-out 1.6s infinite",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 8L11 14L17 8"
                    stroke="rgba(0,0,0,0.6)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-[9px] uppercase tracking-[0.28em] text-black/30 group-hover:text-black/60 transition-colors duration-300">
                Scroll
              </span>
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-between items-end">
          <div className="hero-sub max-w-[240px]" style={{ animationDelay: "0.7s" }}>
            <p className="text-[11px] uppercase tracking-[0.18em] text-black/50 leading-relaxed font-medium">
              {t("subtitle")} Front-End.
            </p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-black/35 leading-relaxed mt-1">
              Belo Horizonte, BR.
            </p>
          </div>

          <div className="hero-sub max-w-[200px] text-right" style={{ animationDelay: "0.9s" }}>
            <p className="text-[11px] uppercase tracking-[0.18em] text-black/50 leading-relaxed font-medium">
              Web · Mobile · iOS · AI
            </p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-black/35 leading-relaxed mt-1">
              Open to learn & evolve
            </p>
          </div>
        </div>



      </section>
    </>
  );
}