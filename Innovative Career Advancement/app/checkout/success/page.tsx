import Link from "next/link";
import { business } from "@/content";
import { getStripe } from "@/lib/stripe";

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id: sessionId } = await searchParams;
  let tierLabel: string | null = null;
  let amount: number | null = null;

  if (sessionId) {
    try {
      const stripe = getStripe();
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      tierLabel = session.metadata?.tierLabel ?? null;
      amount = session.amount_total;
    } catch {
      // Session lookup is best-effort — the payment already succeeded on Stripe's side.
    }
  }

  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center px-6 py-28 text-center sm:px-10">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Payment received</p>
      <h1 className="mt-6 max-w-3xl text-[13vw] font-black uppercase leading-[0.92] tracking-tight sm:text-[7vw] lg:text-[80px]">
        You&apos;re In.
      </h1>
      <p className="mt-8 max-w-lg text-lg font-medium leading-relaxed text-paper/70 sm:text-xl">
        {tierLabel
          ? `Payment confirmed for ${tierLabel}${amount ? ` ($${(amount / 100).toFixed(2)})` : ""}.`
          : "Payment confirmed."}{" "}
        A confirmation email is on its way, and you&apos;ll hear back within a day to get started.
      </p>
      <Link
        href="/"
        data-cursor-hover
        className="mt-10 inline-flex items-center justify-center bg-gold px-8 py-4 text-sm font-bold uppercase tracking-wide text-ink transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.55)]"
      >
        Back to {business.shortName}
      </Link>
    </main>
  );
}
