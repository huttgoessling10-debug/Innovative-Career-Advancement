"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { business, hero } from "@/content";
import MagneticButton from "./MagneticButton";
import Marquee from "./Marquee";

const headlineWords = [
  ...hero.headlinePre.split(" "),
  "__EMPHASIS__",
  ...hero.headlinePost.split(" "),
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const wordVariant: Variants = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-32 sm:pt-36">
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-red/30 blur-[120px]"
          animate={
            reduceMotion
              ? {}
              : { x: [0, 60, -20, 0], y: [0, 40, -30, 0] }
          }
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-32 top-1/3 h-[480px] w-[480px] rounded-full bg-red/15 blur-[130px]"
          animate={
            reduceMotion
              ? {}
              : { x: [0, -50, 30, 0], y: [0, -30, 50, 0] }
          }
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto w-full max-w-[1600px] flex-1 px-6 sm:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs font-bold uppercase tracking-[0.25em] text-red sm:text-sm"
        >
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-6xl text-[13vw] font-black uppercase leading-[0.92] tracking-tight sm:text-[9vw] lg:text-[110px] xl:text-[128px]"
        >
          {headlineWords.map((word, i) =>
            word === "__EMPHASIS__" ? (
              <span key={i} className="inline-block overflow-hidden align-bottom">
                <motion.span
                  variants={wordVariant}
                  className="mr-[0.25em] inline-block bg-gradient-to-r from-red to-red/50 bg-clip-text text-transparent"
                >
                  {hero.headlineEmphasis}
                </motion.span>
              </span>
            ) : (
              <span key={i} className="inline-block overflow-hidden align-bottom">
                <motion.span variants={wordVariant} className="mr-[0.25em] inline-block">
                  {word}
                </motion.span>
              </span>
            )
          )}
        </motion.h1>

        <div className="mt-10 flex flex-col items-start gap-8 sm:mt-14 sm:flex-row sm:items-end sm:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="max-w-md text-base font-medium leading-relaxed text-paper/70 sm:text-lg"
          >
            {hero.supporting}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.25 }}
            className="flex flex-wrap items-center gap-6 sm:gap-8"
          >
            <MagneticButton
              href={`mailto:${business.email}?subject=${encodeURIComponent(hero.ctaPrimary.subject)}`}
              className="inline-flex items-center justify-center bg-red px-7 py-4 text-sm font-bold uppercase tracking-wide text-ink shadow-[0_0_0_rgba(255,30,60,0)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,30,60,0.55)] sm:px-9 sm:py-5"
            >
              {hero.ctaPrimary.label}
            </MagneticButton>

            <a
              href={hero.ctaSecondary.href}
              data-cursor-hover
              className="text-sm font-bold uppercase tracking-wide text-paper underline decoration-red decoration-2 underline-offset-8 transition-colors hover:text-red"
            >
              {hero.ctaSecondary.label}
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="mt-16"
      >
        <Marquee tone="primary" />
      </motion.div>
    </section>
  );
}
