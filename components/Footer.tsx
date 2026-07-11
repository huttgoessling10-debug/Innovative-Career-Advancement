import { business, footer } from "@/content";

export default function Footer() {
  return (
    <footer className="border-t border-paper/15 px-6 py-10 text-center sm:px-10">
      <p className="text-sm font-extrabold uppercase tracking-[0.2em]">{business.name}</p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-paper/50">
        {footer.tagline}
      </p>
    </footer>
  );
}
