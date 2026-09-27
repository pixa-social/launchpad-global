import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { pricing, currencies, type Currency } from "@/lib/catalog";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Pixasocial Build" },
      {
        name: "description",
        content: "Plans priced in NGN, KES, INR, BRL and MXN. Start free, upgrade when you scale.",
      },
      { property: "og:title", content: "Pricing — Pixasocial Build" },
      {
        property: "og:description",
        content: "Plans priced in NGN, KES, INR, BRL and MXN. Start free, upgrade when you scale.",
      },
    ],
  }),
  component: Pricing,
});

function Pricing() {
  const [currency, setCurrency] = useState<Currency>("NGN");

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 font-mono text-xs tracking-wider text-primary">PRICING</p>
            <h1 className="text-balance font-display text-3xl font-bold tracking-tight">
              Priced where you sell
            </h1>
          </div>
          <div className="flex items-center gap-1 rounded-lg border border-border bg-surface p-1 backdrop-blur-md">
            {currencies.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCurrency(c)}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                  currency === c
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {pricing.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl bg-surface p-6 backdrop-blur-md ${
                tier.featured ? "border-2 border-primary" : "border border-border"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-6 rounded bg-primary px-2 py-0.5 font-mono text-[10px] text-primary-foreground">
                  MOST POPULAR
                </span>
              )}
              <p className="font-display text-lg font-bold">{tier.name}</p>
              <p className="mt-3 font-mono text-3xl font-medium">{tier.amounts[currency]}</p>
              <p className="mt-1 text-xs text-muted-foreground">/month</p>
              <ul className="mt-5 space-y-2 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-primary">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/builder"
                className="mt-6 block rounded-lg bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Start building
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 font-mono text-xs text-muted-foreground">
          Billed through Dodo Payments · settle in local currency · cancel anytime
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}
