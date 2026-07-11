import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { pricing } from "@/content";

export async function POST(request: NextRequest) {
  const origin = new URL(request.url).origin;
  const formData = await request.formData();
  const tierId = formData.get("tierId");

  const tier = pricing.tiers.find((t) => t.id === tierId);
  if (!tier) {
    return NextResponse.redirect(`${origin}/checkout/error?reason=unknown-tier`, { status: 303 });
  }

  let session;
  try {
    const stripe = getStripe();
    session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: tier.checkout.amountCents,
            product_data: {
              name: `${tier.label} — Promotional Video`,
              description: tier.checkout.description,
            },
          },
          quantity: 1,
        },
      ],
      customer_creation: "always",
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancel`,
      metadata: {
        tierId: tier.id,
        tierLabel: tier.label,
      },
    });
  } catch (error) {
    console.error("Stripe checkout session creation failed:", error);
    return NextResponse.redirect(`${origin}/checkout/error?reason=stripe-error`, { status: 303 });
  }

  if (!session.url) {
    return NextResponse.redirect(`${origin}/checkout/error?reason=no-session-url`, { status: 303 });
  }

  return NextResponse.redirect(session.url, { status: 303 });
}
