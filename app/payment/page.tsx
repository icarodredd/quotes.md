"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import convertToSubcurrency from "@/lib/convert";
import Checkout from "@/components/Checkout";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

export default function Payment() {
  const amount = 10;

  return (
    <Elements
      stripe={stripePromise}
      options={{
        mode: "payment",
        currency: "usd",
        amount: convertToSubcurrency(10),
      }}
    >
      <Checkout amount={amount} />
    </Elements>
  );
}
