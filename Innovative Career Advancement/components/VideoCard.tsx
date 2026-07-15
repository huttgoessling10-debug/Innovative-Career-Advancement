"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function VideoCard({
  title,
  category,
  duration,
  tone = "primary",
}: {
  title: string;
  category: string;
  duration: string;
  tone?: "primary" | "secondary";
}) {
  const [hovered, setHovered] = useState(false);
  const glow = tone === "primary" ? "shadow-[0_0_50px_rgba(212,175,55,0.4)]" : "shadow-[0_0_50px_rgba(212,175,55,0.22)]";
  const ring = "group-hover:border-gold";

  return (
    <div
      data-cursor-hover
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative aspect-[4/5] w-[78vw] shrink-0 snap-start overflow-hidden border-2 border-paper/20 transition-colors duration-300 sm:w-[360px] ${ring}`}
    >
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${
          tone === "primary" ? "from-gold/70 via-ink to-gold/10" : "from-gold/35 via-ink to-gold/10"
        }`}
        animate={hovered ? { scale: 1.12 } : { scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />

      <span className="absolute right-4 top-4 border border-paper/40 bg-ink/60 px-2 py-1 text-xs font-bold uppercase tracking-wide backdrop-blur-sm">
        {duration}
      </span>

      <motion.div
        className={`absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-paper bg-ink/50 backdrop-blur-sm ${glow}`}
        animate={hovered ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0.6 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" className="ml-1" aria-hidden="true">
          <path d="M0 0L20 12L0 24V0Z" fill="#fafafa" />
        </svg>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-5 pt-14">
        <span className={`text-xs font-bold uppercase tracking-[0.2em] ${tone === "primary" ? "text-gold" : "text-gold/70"}`}>
          {category}
        </span>
        <h3 className="mt-2 text-xl font-extrabold uppercase leading-tight sm:text-2xl">{title}</h3>
      </div>
    </div>
  );
}
