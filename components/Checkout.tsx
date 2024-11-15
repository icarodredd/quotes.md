"use client";

import convertToSubcurrency from "@/lib/convert";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

export default function Checkout({ amount }: { amount: number }) {
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  return (
    <form>
      {clientSecret && <PaymentElement />}
      <button>Pay</button>
    </form>
  );
}
