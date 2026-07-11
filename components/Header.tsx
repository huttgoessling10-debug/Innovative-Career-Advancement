"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { business } from "@/content";
import MagneticButton from "./MagneticButton";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-paper/15 bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 sm:px-10">
        <a
          href="#"
          data-cursor-hover
          className="text-lg font-extrabold uppercase tracking-tight sm:text-xl"
        >
          {business.shortName}
        </a>

        <MagneticButton
          href={`mailto:${business.email}?subject=${encodeURIComponent("General inquiry")}`}
          className="inline-flex items-center border-2 border-yellow bg-transparent px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-paper transition-colors duration-300 hover:bg-yellow hover:border-yellow hover:text-ink sm:px-6 sm:py-3 sm:text-sm"
        >
          Contact
        </MagneticButton>
      </div>
    </motion.header>
  );
}
