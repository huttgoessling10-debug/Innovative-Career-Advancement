"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { testimonials } from "@/content";
import Reveal from "./Reveal";
import Marquee from "./Marquee";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % testimonials.quotes.length);
    }, 6000);
    return () => clearInterval(id);
  }, [reduceMotion]);

  const current = testimonials.quotes[active];

  return (
    <section className="border-t border-paper/15 py-28 sm:py-36">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
        <Reveal>
          <h2 className="text-[16vw] font-black uppercase leading-[0.9] tracking-tight sm:text-[9vw] lg:text-[96px]">
            {testimonials.title}
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-14">
        <Marquee tone="secondary" items={testimonials.tickerItems} />
      </Reveal>

      <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
        <div className="mt-16 min-h-[220px] max-w-3xl sm:min-h-[180px]">
          <motion.blockquote
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-2xl font-semibold leading-snug sm:text-3xl">
              &ldquo;{current.quote}&rdquo;
            </p>
            <footer className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-paper/60">
              {current.name} <span className="text-yellow">— {current.role}</span>
            </footer>
          </motion.blockquote>
        </div>

        <div className="mt-10 flex gap-3">
          {testimonials.quotes.map((quote, i) => (
            <button
              key={quote.name}
              data-cursor-hover
              onClick={() => setActive(i)}
              aria-label={`Show testimonial from ${quote.name}`}
              aria-current={i === active}
              className={`h-2 w-8 transition-colors duration-300 ${
                i === active ? "bg-yellow" : "bg-paper/25 hover:bg-paper/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
