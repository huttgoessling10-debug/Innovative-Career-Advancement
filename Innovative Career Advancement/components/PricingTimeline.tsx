"use client";

import { motion } from "framer-motion";
import { pricing } from "@/content";

export default function PricingTimeline() {
  return (
    <div className="mt-4">
      <div className="relative h-3 w-full overflow-hidden border border-paper/25 bg-paper/10">
        <motion.div
          className="h-full bg-gradient-to-r from-yellow to-yellow/30"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "left" }}
        />
      </div>
      <div className="mt-3 flex justify-between text-xs font-bold uppercase tracking-wide text-paper/60 sm:text-sm">
        {pricing.timeline.map((tick) => (
          <span key={tick}>{tick}</span>
        ))}
      </div>
    </div>
  );
}
