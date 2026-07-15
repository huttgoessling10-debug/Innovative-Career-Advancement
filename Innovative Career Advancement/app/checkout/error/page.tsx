import Link from "next/link";
import { business } from "@/content";

export default async function CheckoutErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ reason?: string }>;
}) {
  const { reason } = await searchParams;
  const message =
    reason === "stripe-error"
      ? "Stripe couldn't start a checkout session. This usually means the Stripe API keys aren't configured yet."
      : "Something went wrong starting checkout.";

  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center px-6 py-28 text-center sm:px-10">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Checkout unavailable</p>
      <h1 className="mt-6 max-w-3xl text-[13vw] font-black uppercase leading-[0.92] tracking-tight sm:text-[7vw] lg:text-[80px]">
        Couldn&apos;t Start Checkout.
      </h1>
      <p className="mt-8 max-w-lg text-lg font-medium leading-relaxed text-paper/70 sm:text-xl">
        {message} Email directly instead and we&apos;ll sort out payment together.
      </p>
      <a
        href={`mailto:${business.email}?subject=${encodeURIComponent("Payment issue")}`}
        data-cursor-hover
        className="mt-10 inline-flex items-center justify-center bg-gold px-8 py-4 text-sm font-bold uppercase tracking-wide text-ink transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.55)]"
      >
        Email {business.shortName}
      </a>
      <Link href="/#pricing" data-cursor-hover className="mt-6 text-sm font-bold uppercase tracking-wide text-gold underline decoration-2 underline-offset-8 hover:text-paper">
        Back to Pricing
      </Link>
    </main>
  );
}
