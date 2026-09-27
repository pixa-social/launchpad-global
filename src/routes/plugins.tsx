import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { plugins } from "@/lib/catalog";

const categories = ["All", "Payments", "Messaging", "Growth", "Logistics"] as const;

export const Route = createFileRoute("/plugins")({
  head: () => ({
    meta: [
      { title: "Plugins — Pixasocial Build" },
      {
        name: "description",
        content:
          "Connect M-Pesa, UPI, Pix, OXXO, WhatsApp and more through Dodo Payments and the Pixasocial plugin library.",
      },
      { property: "og:title", content: "Plugins — Pixasocial Build" },
      {
        property: "og:description",
        content: "Local payment rails, messaging and growth plugins for Global South websites.",
      },
    ],
  }),
  component: Plugins,
});

function Plugins() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const list = active === "All" ? plugins : plugins.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 font-mono text-xs tracking-wider text-primary">PLUGINS</p>
            <h1 className="text-balance font-display text-3xl font-bold tracking-tight">
              Snap on the rails you already use
            </h1>
          </div>
          <div className="flex items-center gap-1 rounded-lg border border-border bg-surface p-1 backdrop-blur-md">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                  active === c
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {list.map((p) => (
            <div
              key={p.name}
              className="rounded-xl border border-border bg-surface p-4 backdrop-blur-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="mb-3 flex items-center justify-between">
                <div
                  className={`grid size-10 place-items-center rounded-lg font-display font-bold ${
                    p.tone === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                  }`}
                >
                  {p.initial}
                </div>
                <span
                  className={`rounded px-2 py-0.5 font-mono text-[10px] ${
                    p.status === "Connected"
                      ? p.tone === "primary"
                        ? "bg-primary/10 text-primary"
                        : "bg-accent/10 text-accent"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {p.status}
                </span>
              </div>
              <p className="font-semibold">{p.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{p.meta}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-surface p-6 backdrop-blur-md">
          <p className="font-mono text-xs tracking-wider text-accent">PAYMENTS</p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight">
            One connection, 30+ local rails
          </h2>
          <p className="mt-2 max-w-[60ch] text-sm text-muted-foreground">
            Dodo Payments unifies mobile money, UPI, Pix, OXXO and cards behind a single checkout, so
            your storefront settles in the currency your customers actually hold.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
