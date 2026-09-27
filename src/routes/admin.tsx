import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

type Provider = { initial: string; name: string; meta: string; on: boolean; key: string };

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Pixasocial Build" },
      { name: "description", content: "Restricted console." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Admin — Pixasocial Build" },
      { property: "og:description", content: "Restricted console." },
    ],
  }),
  component: Admin,
});

function Admin() {
  const [unlocked, setUnlocked] = useState(false);
  const [providers, setProviders] = useState<Provider[]>([
    { initial: "O", name: "OpenAI", meta: "openai · GPT models", on: true, key: "" },
    { initial: "C", name: "Claude", meta: "anthropic · 4 models", on: true, key: "" },
    { initial: "G", name: "Gemini", meta: "google · 6 models", on: true, key: "" },
    { initial: "L", name: "Llama", meta: "meta · 3 models", on: false, key: "" },
    { initial: "D", name: "DeepSeek", meta: "deepseek · 2 models", on: false, key: "" },
  ]);

  const update = (i: number, patch: Partial<Provider>) =>
    setProviders((ps) => ps.map((p, j) => (j === i ? { ...p, ...patch } : p)));

  if (!unlocked) {
    return (
      <div className="grid min-h-screen place-items-center bg-background px-6 font-body text-foreground">
        <div className="w-full max-w-sm rounded-2xl border border-border bg-surface p-6 shadow-panel">
          <p className="font-mono text-xs tracking-wider text-accent">RESTRICTED</p>
          <h1 className="mt-2 font-display text-2xl font-bold tracking-tight">Admin sign in</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Preview only — real admin sign-in arrives with the backend.
          </p>
          <button
            type="button"
            onClick={() => setUnlocked(true)}
            className="mt-5 w-full rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-background hover:bg-foreground/85"
          >
            Enter console
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="mb-2 font-mono text-xs tracking-wider text-accent">ADMIN · RESTRICTED</p>
        <h1 className="text-balance font-display text-3xl font-bold tracking-tight">
          Connect the AI your users can call
        </h1>
        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface backdrop-blur-xl">
          <div className="flex items-center gap-2 border-b border-border bg-background/40 px-4 py-3">
            <span className="size-2 rounded-full bg-accent" />
            <span className="font-mono text-xs text-muted-foreground">build.pixasocial.ai/admin/providers</span>
          </div>
          <div className="divide-y divide-border">
            {providers.map((p, i) => (
              <div key={p.name} className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="grid size-8 place-items-center rounded-lg bg-primary/10 font-display text-sm font-bold text-primary">
                    {p.initial}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{p.name}</p>
                    <p className="font-mono text-[11px] text-muted-foreground">{p.meta}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="password"
                    value={p.key}
                    onChange={(e) => update(i, { key: e.target.value })}
                    placeholder="API key"
                    className="w-44 rounded-md border border-input bg-background/60 px-2 py-1 font-mono text-xs outline-none focus:border-primary"
                  />
                  <span className={`font-mono text-[10px] ${p.on ? "text-primary" : "text-muted-foreground"}`}>
                    {p.on ? "Connected" : "Off"}
                  </span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={p.on}
                    aria-label={`Toggle ${p.name}`}
                    onClick={() => update(i, { on: !p.on })}
                    className={`relative inline-flex h-5 w-9 rounded-full transition-colors ${p.on ? "bg-primary" : "bg-input"}`}
                  >
                    <span
                      className={`absolute top-0.5 size-4 rounded-full bg-background transition-all ${p.on ? "right-0.5" : "left-0.5"}`}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
