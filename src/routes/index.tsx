import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { plugins, pricing, currencies, type Currency } from "@/lib/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pixasocial Build — describe your site, open for business today" },
      {
        name: "description",
        content:
          "Build fast, local-first websites for Africa, India and Latin America. M-Pesa, UPI, Pix and OXXO checkout via Dodo Payments.",
      },
      { property: "og:title", content: "Pixasocial Build — describe your site, open for business today" },
      {
        property: "og:description",
        content: "Snap on local payment rails and plugins, then launch on build.pixasocial.ai.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [prompt, setPrompt] = useState(
    "A boutique coffee shop in Lagos taking M-Pesa and Card payments",
  );
  const [currency, setCurrency] = useState<Currency>("NGN");

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 size-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute top-10 -right-20 size-80 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-16 text-center">
          <div className="inline-flex animate-rise items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-primary" />
            Live in 5 minutes · M-Pesa · UPI · Pix · OXXO
          </div>
          <h1 className="mt-6 animate-rise text-balance font-display text-5xl leading-[1.05] font-bold tracking-tight md:text-6xl">
            Describe your site.
            <br />
            <span className="text-primary">Open for business</span> today.
          </h1>
          <p className="mx-auto mt-5 max-w-[46ch] animate-rise text-pretty text-lg text-muted-foreground">
            Pixasocial Build creates fast, local-first websites for the Global South. Snap on payments, plugins,
            and go live — no code, no waiting.
          </p>

          <div className="mx-auto mt-8 max-w-2xl animate-rise">
            <div className="rounded-2xl border border-border bg-surface p-2 shadow-soft backdrop-blur-xl">
              <div className="rounded-xl bg-background/60 p-4 text-left">
                <label htmlFor="prompt" className="sr-only">
                  Describe your site
                </label>
                <textarea
                  id="prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={2}
                  className="w-full resize-none bg-transparent font-mono text-sm text-foreground outline-none placeholder:text-muted-foreground"
                  placeholder="Describe the site you want…"
                />
                <p className="mt-2 font-mono text-[11px] text-muted-foreground">
                  Ready to generate · 3 sections · 2 plugins · 1 domain
                  <span className="ml-0.5 inline-block h-3 w-2 animate-blink bg-primary align-middle" />
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {["Template", "Domain", "Payments"].map((chip) => (
                      <button
                        key={chip}
                        type="button"
                        className="rounded-lg border border-border bg-background/50 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-background"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                  <Link
                    to="/builder"
                    search={{ prompt }}
                    className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Build it
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex animate-rise flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
            {currencies.map((c) => (
              <span key={c}>{c}</span>
            ))}
            <span className="text-border">|</span>
            <span>Powered by Dodo Payments</span>
          </div>
        </div>
      </section>

      {/* BUILDER */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="mb-2 font-mono text-xs tracking-wider text-primary">(a) BUILDER</p>
            <h2 className="text-balance font-display text-3xl font-bold tracking-tight">
              The command center
            </h2>
          </div>
          <p className="hidden max-w-[30ch] text-right text-sm text-muted-foreground md:block">
            Chat, preview, publish — one stand, three panes.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-panel backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-border bg-background/40 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-accent" />
              <span className="font-mono text-xs text-muted-foreground">
                build.pixasocial.ai/preview/lagos-coffee
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden font-mono text-[11px] text-muted-foreground sm:inline">
                Auto-saved
              </span>
              <Link
                to="/builder"
                className="relative overflow-hidden rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <span className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-background/25 to-transparent bg-[length:200%_100%]" />
                <span className="relative">Publish</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_220px]">
            <div className="border-b border-border p-4 lg:border-r lg:border-b-0">
              <p className="mb-3 font-mono text-[11px] tracking-wider text-muted-foreground">CHAT</p>
              <div className="space-y-3">
                <div className="rounded-xl rounded-tl-sm bg-background/70 p-3 text-sm text-pretty">
                  Add a menu section with photos and prices.
                </div>
                <div className="ml-6 rounded-xl rounded-tr-sm bg-primary/10 p-3 text-sm text-pretty">
                  Done — 6 items added. Want M-Pesa checkout on each?
                </div>
                <div className="rounded-xl rounded-tl-sm bg-background/70 p-3 text-sm text-pretty">
                  Yes, and a WhatsApp order button.
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-lg border border-border bg-background/60 px-3 py-2">
                <span className="text-sm text-muted-foreground">Ask Pixa…</span>
                <span className="ml-auto grid size-6 place-items-center rounded-md bg-primary text-xs text-primary-foreground">
                  ↑
                </span>
              </div>
            </div>

            <div className="p-4">
              <p className="mb-3 font-mono text-[11px] tracking-wider text-muted-foreground">
                LIVE PREVIEW
              </p>
              <div className="rounded-xl border border-border bg-background/50 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-display font-bold">Lagos Coffee Co.</span>
                  <span className="rounded bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary">
                    LIVE
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-border bg-surface p-3">
                    <p className="text-sm font-medium">Flat White</p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">₦1,800</p>
                  </div>
                  <div className="rounded-lg border border-border bg-surface p-3">
                    <p className="text-sm font-medium">Chai Latte</p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">₦2,100</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between rounded-lg border border-primary/20 bg-primary/10 p-3">
                  <span className="text-sm font-medium">Order via M-Pesa</span>
                  <span className="font-mono text-xs text-primary">→</span>
                </div>
              </div>
            </div>

            <div className="border-t border-border p-4 lg:border-t-0 lg:border-l">
              <p className="mb-3 font-mono text-[11px] tracking-wider text-muted-foreground">
                LAYERS
              </p>
              <div className="space-y-1.5 text-sm">
                {[
                  { label: "Hero", tone: "bg-primary" },
                  { label: "Menu", tone: "bg-primary" },
                  { label: "Payments", tone: "bg-accent" },
                  { label: "Footer", tone: "bg-primary" },
                ].map((layer) => (
                  <div
                    key={layer.label}
                    className="flex items-center gap-2 rounded-md px-2 py-1.5 transition-colors hover:bg-background/60"
                  >
                    <span className={`size-1.5 rounded-full ${layer.tone}`} />
                    {layer.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLUGINS */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-6">
          <p className="mb-2 font-mono text-xs tracking-wider text-primary">(b) PLUGINS</p>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight">
            Snap on the rails you already use
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {plugins.slice(0, 6).map((p) => (
            <Link
              key={p.name}
              to="/plugins"
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
            </Link>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 font-mono text-xs tracking-wider text-primary">(c) PRICING</p>
            <h2 className="text-balance font-display text-3xl font-bold tracking-tight">
              Priced where you sell
            </h2>
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
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
