"use client";

import { motion } from "framer-motion";
import { business, pricing } from "@/content";
import Reveal from "./Reveal";
import PricingTimeline from "./PricingTimeline";
import MagneticButton from "./MagneticButton";

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-paper/15 px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <h2 className="text-[16vw] font-black uppercase leading-[0.9] tracking-tight sm:text-[9vw] lg:text-[96px]">
            {pricing.title}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 inline-flex items-center gap-3 border-2 border-gold px-5 py-3">
            <span className="h-2 w-2 shrink-0 rounded-full bg-gold" />
            <span className="text-sm font-bold uppercase tracking-wide sm:text-base">
              {pricing.badge}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-16">
          <PricingTimeline />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricing.tiers.map((tier, i) => (
            <Reveal key={tier.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`flex h-full flex-col border-2 p-7 transition-shadow duration-300 ${
                  tier.featured
                    ? "border-gold shadow-[0_0_35px_rgba(212,175,55,0.35)] hover:shadow-[0_0_55px_rgba(212,175,55,0.55)]"
                    : "border-paper/25 hover:border-gold hover:shadow-[0_0_35px_rgba(212,175,55,0.25)]"
                }`}
              >
                <span
                  className={`text-xs font-bold uppercase tracking-[0.2em] ${
                    tier.featured ? "text-gold" : "text-gold/70"
                  }`}
                >
                  {tier.label}
                </span>
                <span className="mt-3 text-base font-semibold text-paper/60">{tier.range}</span>
                <span className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
                  {tier.price}
                </span>
                <p className="mt-5 flex-1 text-sm font-semibold leading-relaxed text-paper/70">
                  {tier.note}
                </p>
                <form action="/api/checkout" method="POST" className="mt-6">
                  <input type="hidden" name="tierId" value={tier.id} />
                  <MagneticButton
                    as="button"
                    type="submit"
                    className={`inline-flex w-full items-center justify-center px-5 py-3 text-xs font-bold uppercase tracking-wide transition-all duration-300 sm:text-sm ${
                      tier.featured
                        ? "bg-gold text-ink hover:shadow-[0_0_30px_rgba(212,175,55,0.55)]"
                        : "border-2 border-gold/60 text-paper hover:border-gold hover:bg-gold hover:text-ink"
                    }`}
                  >
                    {tier.checkout.payLabel}
                  </MagneticButton>
                </form>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-10">
          <div className="border-2 border-dashed border-paper/35 p-8 sm:p-10">
            <h3 className="text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
              {pricing.bundle.title}
            </h3>
            <p className="mt-4 max-w-2xl text-base font-semibold leading-relaxed text-paper/70 sm:text-lg">
              {pricing.bundle.body}
            </p>
            <a
              href={`mailto:${business.email}?subject=${encodeURIComponent("Bundle pricing inquiry")}`}
              data-cursor-hover
              className="mt-6 inline-block text-sm font-bold uppercase tracking-wide text-gold underline decoration-2 underline-offset-8 transition-colors hover:text-paper"
            >
              Ask about bundle pricing →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
