import { business, contact } from "@/content";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";
import Marquee from "./Marquee";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-paper/15 px-6 pt-28 sm:px-10 sm:pt-36">
      <div className="mx-auto max-w-[1600px] pb-24 sm:pb-32">
        <Reveal>
          <h2 className="max-w-5xl text-[13vw] font-black uppercase leading-[0.92] tracking-tight sm:text-[8vw] lg:text-[104px]">
            {contact.title}
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-8 max-w-xl text-xl font-medium leading-relaxed text-paper/70 sm:text-2xl">
            {contact.supporting}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:gap-10">
            <MagneticButton
              href={`mailto:${business.email}?subject=${encodeURIComponent(contact.subject)}`}
              className="inline-flex items-center justify-center bg-yellow px-9 py-5 text-sm font-bold uppercase tracking-wide text-ink transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,212,0,0.55)]"
            >
              {contact.ctaLabel}
            </MagneticButton>

            <a
              href={`mailto:${business.email}`}
              data-cursor-hover
              className="text-lg font-bold text-yellow underline decoration-2 underline-offset-8 transition-colors hover:text-paper sm:text-xl"
            >
              {business.email}
            </a>
          </div>
        </Reveal>
      </div>

      <Marquee tone="secondary" />
    </section>
  );
}
