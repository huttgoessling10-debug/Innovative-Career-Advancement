import { howItWorks } from "@/content";
import Reveal from "./Reveal";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-paper/15 bg-paper px-6 py-28 text-ink sm:px-10 sm:py-36">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <h2 className="text-[16vw] font-black uppercase leading-[0.9] tracking-tight sm:text-[9vw] lg:text-[96px]">
            {howItWorks.title}
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-3">
          {howItWorks.steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.15}>
              <div className="flex flex-col border-t-2 border-ink pt-6">
                <span className="text-6xl font-black tracking-tight text-ink/15 sm:text-7xl lg:text-8xl">
                  {step.number}
                </span>
                <h3 className="mt-4 text-2xl font-extrabold uppercase leading-tight sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-xs text-base font-semibold leading-relaxed text-ink/70">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
