import { work } from "@/content";
import Reveal from "./Reveal";
import VideoCard from "./VideoCard";

export default function Work() {
  return (
    <section id="work" className="border-t border-paper/15 py-28 sm:py-36">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
        <Reveal>
          <h2 className="text-[16vw] font-black uppercase leading-[0.9] tracking-tight sm:text-[9vw] lg:text-[96px]">
            {work.title}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-paper/70 sm:text-xl">
            {work.intro}
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <div className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 sm:px-10">
          {work.projects.map((project) => (
            <VideoCard
              key={project.title}
              title={project.title}
              category={project.category}
              duration={project.duration}
              tone={project.tone as "primary" | "secondary"}
            />
          ))}
          <div className="shrink-0 sm:w-4" aria-hidden="true" />
        </div>
      </Reveal>
    </section>
  );
}
