import { marqueeItems as defaultMarqueeItems } from "@/content";

const SEPARATOR = "—";

export default function Marquee({
  tone = "primary",
  items: itemsProp,
}: {
  tone?: "primary" | "secondary";
  items?: string[];
}) {
  const items = [...(itemsProp ?? defaultMarqueeItems), ...(itemsProp ?? defaultMarqueeItems)];
  const colorClass = tone === "primary" ? "text-yellow" : "text-yellow/60";

  return (
    <div className="w-full overflow-hidden border-y-2 border-paper/20 bg-ink py-4 sm:py-5">
      <div className="marquee-track">
        {[0, 1].map((rep) => (
          <div key={rep} className="flex shrink-0 items-center" aria-hidden={rep === 1}>
            {items.map((item, i) => (
              <span
                key={`${rep}-${i}`}
                className="flex items-center whitespace-nowrap px-4 text-xl font-extrabold uppercase tracking-tight sm:text-2xl"
              >
                {item}
                <span className={`ml-4 ${colorClass}`}>{SEPARATOR}</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
