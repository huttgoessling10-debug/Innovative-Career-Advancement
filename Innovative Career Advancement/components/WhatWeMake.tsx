import { whatWeMake } from "@/content";
import Reveal from "./Reveal";

export default function WhatWeMake() {
  return (
    <section id="what-i-make" className="border-t border-paper/15 px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <h2 className="text-[16vw] font-black uppercase leading-[0.9] tracking-tight sm:text-[9vw] lg:text-[96px]">
            {whatWeMake.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7 xl:col-span-8">
            {whatWeMake.body.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="mb-6 max-w-2xl text-xl font-medium leading-relaxed text-paper/80 sm:text-2xl">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="lg:col-span-5 lg:col-start-9 xl:col-span-4 xl:col-start-9">
            <Reveal delay={0.2}>
              <div className="border-2 border-gold p-8 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
                  {whatWeMake.callout.title}
                </p>
                <p className="mt-5 text-lg font-semibold leading-relaxed text-paper/90">
                  {whatWeMake.callout.body}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
