export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
        <div className="flex items-center gap-2.5">
          <div className="grid size-7 place-items-center rounded-lg bg-primary font-display text-xs font-bold text-primary-foreground">
            S
          </div>
          <span className="font-display font-bold">Soko</span>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          © 2026 Soko · Built for the Global South · hosted on build.pixasocial.ai
        </p>
      </div>
    </footer>
  );
}
