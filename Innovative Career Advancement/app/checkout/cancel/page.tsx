import Link from "next/link";

export default function CheckoutCancelPage() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center px-6 py-28 text-center sm:px-10">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Checkout canceled</p>
      <h1 className="mt-6 max-w-3xl text-[13vw] font-black uppercase leading-[0.92] tracking-tight sm:text-[7vw] lg:text-[80px]">
        No Charge Made.
      </h1>
      <p className="mt-8 max-w-lg text-lg font-medium leading-relaxed text-paper/70 sm:text-xl">
        You backed out before paying — nothing was charged. Come back whenever you&apos;re ready.
      </p>
      <Link
        href="/#pricing"
        data-cursor-hover
        className="mt-10 inline-flex items-center justify-center bg-gold px-8 py-4 text-sm font-bold uppercase tracking-wide text-ink transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.55)]"
      >
        Back to Pricing
      </Link>
    </main>
  );
}
