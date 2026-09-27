import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";

type Message = { role: "user" | "soko"; text: string };

export const Route = createFileRoute("/builder")({
  validateSearch: (search: Record<string, unknown>): { prompt?: string } => ({
    prompt: typeof search.prompt === "string" ? search.prompt : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Builder — Pixasocial Build" },
      {
        name: "description",
        content: "Chat, preview and publish your site in one workspace with local payment rails.",
      },
      { property: "og:title", content: "Builder — Pixasocial Build" },
      {
        property: "og:description",
        content: "Chat, preview and publish your site in one workspace with local payment rails.",
      },
    ],
  }),
  component: Builder,
});

function Builder() {
  const { prompt } = Route.useSearch();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "user",
      text: prompt || "A boutique coffee shop in Lagos taking M-Pesa and Card payments",
    },
    { role: "soko", text: "Drafted 4 sections and wired a Dodo Payments checkout. Take a look →" },
  ]);
  const [draft, setDraft] = useState("");
  const [published, setPublished] = useState(false);

  function send() {
    const text = draft.trim();
    if (!text) return;
    setMessages((m) => [
      ...m,
      { role: "user", text },
      { role: "soko", text: "Applied. The preview on the right is updated." },
    ]);
    setDraft("");
  }

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <SiteHeader />

      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-6">
          <p className="mb-2 font-mono text-xs tracking-wider text-primary">WORKSPACE</p>
          <h1 className="text-balance font-display text-3xl font-bold tracking-tight">
            The command center
          </h1>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-panel backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-border bg-background/40 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className={`size-2.5 rounded-full ${published ? "bg-primary" : "bg-accent"}`} />
              <span className="font-mono text-xs text-muted-foreground">
                {published
                  ? "lagos-coffee.pixasocial.ai"
                  : "build.pixasocial.ai/preview/lagos-coffee"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden font-mono text-[11px] text-muted-foreground sm:inline">
                Auto-saved
              </span>
              <button
                type="button"
                onClick={() => setPublished(true)}
                className="relative overflow-hidden rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {!published && (
                  <span className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-background/25 to-transparent bg-[length:200%_100%]" />
                )}
                <span className="relative">{published ? "Published" : "Publish"}</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr_220px]">
            {/* CHAT */}
            <div className="flex min-h-[420px] flex-col border-b border-border p-4 lg:border-r lg:border-b-0">
              <p className="mb-3 font-mono text-[11px] tracking-wider text-muted-foreground">CHAT</p>
              <div className="flex-1 space-y-3 overflow-y-auto">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={
                      m.role === "user"
                        ? "rounded-xl rounded-tl-sm bg-background/70 p-3 text-sm text-pretty"
                        : "ml-6 rounded-xl rounded-tr-sm bg-primary/10 p-3 text-sm text-pretty"
                    }
                  >
                    {m.text}
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-lg border border-border bg-background/60 px-3 py-2">
                <input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send()}
                  placeholder="Ask Pixa…"
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
                <button
                  type="button"
                  onClick={send}
                  aria-label="Send"
                  className="grid size-6 place-items-center rounded-md bg-primary text-xs text-primary-foreground"
                >
                  ↑
                </button>
              </div>
            </div>

            {/* PREVIEW */}
            <div className="p-4">
              <p className="mb-3 font-mono text-[11px] tracking-wider text-muted-foreground">
                LIVE PREVIEW
              </p>
              <div className="rounded-xl border border-border bg-background/50 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-display font-bold">Lagos Coffee Co.</span>
                  <span className="rounded bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary">
                    {published ? "LIVE" : "DRAFT"}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    ["Flat White", "₦1,800"],
                    ["Chai Latte", "₦2,100"],
                    ["Cold Brew", "₦2,400"],
                    ["Suya Roll", "₦3,000"],
                  ].map(([item, price]) => (
                    <div key={item} className="rounded-lg border border-border bg-surface p-3">
                      <p className="text-sm font-medium">{item}</p>
                      <p className="mt-1 font-mono text-xs text-muted-foreground">{price}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex items-center justify-between rounded-lg border border-primary/20 bg-primary/10 p-3">
                  <span className="text-sm font-medium">Order via M-Pesa</span>
                  <span className="font-mono text-xs text-primary">→</span>
                </div>
              </div>
            </div>

            {/* LAYERS */}
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
      </div>
    </div>
  );
}
