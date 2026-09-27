import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { plugins, pricing, currencies, type Currency } from "@/lib/catalog";
import tplCafe from "@/assets/tpl-cafe.jpg";
import tplBoutique from "@/assets/tpl-boutique.jpg";
import tplFitness from "@/assets/tpl-fitness.jpg";

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

const railLogos = [
  "M-Pesa",
  "UPI",
  "Pix",
  "OXXO",
  "Flutterwave",
  "Razorpay",
  "Dodo Payments",
  "Paystack",
  "Mercado Pago",
  "MTN MoMo",
  "Airtel Money",
  "PhonePe",
];

const partnerLogos = [
  "WhatsApp Business",
  "Glovo",
  "Sendy",
  "DHL Africa",
  "Zoho",
  "Meta",
  "Google Pay",
  "Safaricom",
  "Jio",
  "Nubank",
];

function LogoChip({ name }: { name: string }) {
  return (
    <span className="mx-3 inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 font-display text-sm font-bold whitespace-nowrap text-foreground/80 shadow-soft backdrop-blur-md">
      <span className="grid size-6 place-items-center rounded-full bg-primary/10 font-mono text-[10px] font-bold text-primary">
        {name.charAt(0)}
      </span>
      {name}
    </span>
  );
}

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
          <div className="absolute -top-32 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl animate-pulse-glow" />
          <div className="absolute top-40 -left-32 size-96 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute top-64 -right-32 size-96 rounded-full bg-primary/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)",
            }}
          />
        </div>

        {/* floating payment cards */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <div
            className="absolute top-32 left-[6%] animate-float rounded-2xl border border-border bg-surface p-4 shadow-panel backdrop-blur-xl"
            style={{ "--float-rotate": "-6deg" } as React.CSSProperties}
          >
            <p className="font-mono text-[10px] text-muted-foreground">M-PESA</p>
            <p className="mt-1 font-display text-lg font-bold">KSh 2,400</p>
            <p className="font-mono text-[10px] text-primary">✓ paid · just now</p>
          </div>
          <div
            className="absolute top-56 right-[5%] animate-float rounded-2xl border border-border bg-surface p-4 shadow-panel backdrop-blur-xl [animation-delay:1.4s]"
            style={{ "--float-rotate": "5deg" } as React.CSSProperties}
          >
            <p className="font-mono text-[10px] text-muted-foreground">UPI</p>
            <p className="mt-1 font-display text-lg font-bold">₹1,299</p>
            <p className="font-mono text-[10px] text-primary">✓ paid · 2m ago</p>
          </div>
          <div
            className="absolute bottom-24 left-[10%] animate-float rounded-2xl border border-border bg-surface p-4 shadow-panel backdrop-blur-xl [animation-delay:2.6s]"
            style={{ "--float-rotate": "4deg" } as React.CSSProperties}
          >
            <p className="font-mono text-[10px] text-muted-foreground">PIX</p>
            <p className="mt-1 font-display text-lg font-bold">R$89,00</p>
            <p className="font-mono text-[10px] text-primary">✓ paid · 5m ago</p>
          </div>
          <div
            className="absolute right-[9%] bottom-40 animate-float rounded-2xl border border-border bg-surface p-4 shadow-panel backdrop-blur-xl [animation-delay:0.8s]"
            style={{ "--float-rotate": "-4deg" } as React.CSSProperties}
          >
            <p className="font-mono text-[10px] text-muted-foreground">OXXO</p>
            <p className="mt-1 font-display text-lg font-bold">MX$350</p>
            <p className="font-mono text-[10px] text-primary">✓ paid · 8m ago</p>
          </div>
        </div>

        <div className="relative mx-auto max-w-4xl px-6 pt-24 pb-16 text-center">
          <div className="inline-flex animate-rise items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
            </span>
            Live in 5 minutes · M-Pesa · UPI · Pix · OXXO
          </div>
          <h1 className="mt-6 animate-rise text-balance font-display text-5xl leading-[1.02] font-bold tracking-tight md:text-7xl">
            Describe your site.
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-shimmer bg-clip-text text-transparent">
              Open for business
            </span>{" "}
            today.
          </h1>
          <p className="mx-auto mt-6 max-w-[46ch] animate-rise text-pretty text-lg text-muted-foreground">
            Pixasocial Build creates fast, local-first websites for Africa, India and Latin America.
            Snap on the payment rails your customers already use — no code, no waiting.
          </p>

          <div className="mx-auto mt-10 max-w-2xl animate-rise">
            <div className="rounded-2xl border border-border bg-surface p-2 shadow-panel backdrop-blur-xl">
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
                    className="relative flex items-center gap-2 overflow-hidden rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <span className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-background/25 to-transparent bg-[length:200%_100%]" />
                    <span className="relative">Build it</span>
                    <span aria-hidden="true" className="relative">
                      →
                    </span>
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

        {/* LOGO MARQUEES */}
        <div className="relative border-y border-border bg-surface/50 py-6 backdrop-blur-md">
          <p className="mb-4 text-center font-mono text-[11px] tracking-widest text-muted-foreground">
            WORKS WITH THE RAILS YOUR CUSTOMERS TRUST
          </p>
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee">
              {[...railLogos, ...railLogos].map((name, i) => (
                <LogoChip key={`${name}-${i}`} name={name} />
              ))}
            </div>
          </div>
          <div className="mt-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee-reverse">
              {[...partnerLogos, ...partnerLogos].map((name, i) => (
                <LogoChip key={`${name}-${i}`} name={name} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUILDER */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="mb-2 font-mono text-xs tracking-wider text-primary">(a) BUILDER</p>
            <h2 className="text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
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
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-6">
          <p className="mb-2 font-mono text-xs tracking-wider text-primary">(b) PLUGINS</p>
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
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

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="mb-2 font-mono text-xs tracking-wider text-primary">HOW IT WORKS</p>
        <h2 className="text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
          From one sentence to a paid order
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            ["01", "Describe", "Type what you sell, in English, Hindi, Swahili, Portuguese or Spanish."],
            ["02", "Snap on", "Add M-Pesa, UPI, Pix or OXXO checkout through Dodo Payments in one tap."],
            ["03", "Launch", "Go live on yourname.pixasocial.ai or your own domain in under a minute."],
          ].map(([n, t, d]) => (
            <div
              key={n}
              className="group rounded-2xl border border-border bg-surface p-6 backdrop-blur-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-lift"
            >
              <p className="font-mono text-sm text-accent">{n}</p>
              <p className="mt-3 font-display text-xl font-bold">{t}</p>
              <p className="mt-2 text-sm text-pretty text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEMPLATES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="mb-2 font-mono text-xs tracking-wider text-primary">
              MADE WITH PIXASOCIAL BUILD
            </p>
            <h2 className="text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
              Built in Lagos, Jaipur and São Paulo
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            { img: tplCafe, name: "Lagos Brew", tag: "Café · NGN · M-Pesa" },
            { img: tplBoutique, name: "Vaidehi", tag: "Boutique · INR · UPI" },
            { img: tplFitness, name: "Viva Forma", tag: "Fitness · BRL · Pix" },
          ].map((t) => (
            <Link
              key={t.name}
              to="/builder"
              className="group overflow-hidden rounded-2xl border border-border bg-surface transition-transform duration-200 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="aspect-[4/3] overflow-hidden border-b border-border">
                <img
                  src={t.img}
                  alt={`${t.name} website built with Pixasocial Build`}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between p-4">
                <p className="font-display font-bold">{t.name}</p>
                <span className="font-mono text-[11px] text-muted-foreground">{t.tag}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* STATS BAND */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="relative overflow-hidden rounded-2xl bg-foreground p-8 text-background md:p-12">
          <div className="pointer-events-none absolute -top-20 -right-20 size-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 size-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              ["42s", "median time to live"],
              ["30+", "local payment rails"],
              ["5", "currencies at launch"],
              ["0", "lines of code needed"],
            ].map(([v, l]) => (
              <div key={l}>
                <p className="font-display text-4xl font-bold text-primary md:text-5xl">{v}</p>
                <p className="mt-1 font-mono text-xs opacity-70">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 font-mono text-xs tracking-wider text-primary">(c) PRICING</p>
            <h2 className="text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
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
              className={`relative rounded-2xl bg-surface p-6 backdrop-blur-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-lift ${
                tier.featured ? "border-2 border-primary shadow-panel" : "border border-border"
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
                className={`mt-6 block rounded-lg px-4 py-2 text-center text-sm font-semibold transition-colors ${
                  tier.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border bg-background/50 hover:bg-background"
                }`}
              >
                Start building
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center font-mono text-xs text-muted-foreground">
          Billed through Dodo Payments · settle in local currency · cancel anytime
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-foreground px-6 py-20 text-center text-background">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-1/4 size-72 rounded-full bg-primary/40 blur-3xl" />
            <div className="absolute -bottom-24 right-1/4 size-72 rounded-full bg-accent/30 blur-3xl" />
          </div>
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance font-display text-4xl font-bold tracking-tight md:text-5xl">
              Your customers are already paying with their phones.
            </h2>
            <p className="mx-auto mt-4 max-w-[44ch] text-pretty text-background/70">
              Meet them there. Build your site, take M-Pesa, UPI, Pix and OXXO, and open today.
            </p>
            <Link
              to="/builder"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-display text-lg font-bold text-primary-foreground transition-transform duration-200 hover:scale-105"
            >
              Build your site now
              <span aria-hidden="true">→</span>
            </Link>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-display text-sm font-bold text-background/60">
              {["M-Pesa", "UPI", "Pix", "OXXO", "Flutterwave", "Razorpay"].map((r) => (
                <span key={r}>{r}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
