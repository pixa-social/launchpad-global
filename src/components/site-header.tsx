import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="grid size-8 place-items-center rounded-lg bg-primary font-display text-sm font-bold text-primary-foreground">
            S
          </div>
          <span className="font-display text-lg font-bold tracking-tight">Pixasocial <span className="text-primary">Build</span></span>
          <span className="mt-0.5 font-mono text-[10px] tracking-wider text-muted-foreground">beta</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link
            to="/builder"
            className="text-foreground transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
          >
            Builder
          </Link>
          <Link
            to="/plugins"
            className="text-foreground transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
          >
            Plugins
          </Link>
          <Link
            to="/pricing"
            className="text-foreground transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
          >
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/builder"
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            Sign in
          </Link>
          <Link
            to="/builder"
            className="rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-foreground/85"
          >
            Start free
          </Link>
        </div>
      </div>
    </header>
  );
}
