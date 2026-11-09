export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Shree Shyam SS crown emblem">
      <path d="M18 14 L23 6 L28 12 L32 4 L36 12 L41 6 L46 14 Z" className="fill-gold" />
      <circle cx="32" cy="38" r="22" className="fill-none stroke-gold" strokeWidth="2.5" />
      <circle cx="32" cy="38" r="17" className="fill-none stroke-gold" strokeWidth="1" />
      <text x="32" y="45" textAnchor="middle" fontFamily="Georgia, serif" fontSize="19" fontStyle="italic" className="fill-gold">SS</text>
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex min-w-0 items-center gap-2.5">
      <LogoMark className="h-10 w-10 shrink-0" />
      <span className="min-w-0 leading-tight">
        <span className="block truncate font-display text-base font-extrabold uppercase tracking-wide text-primary sm:text-lg">Shree Shyam</span>
        <span className={`block truncate text-[11px] font-semibold uppercase tracking-[0.18em] ${light ? "text-ink-foreground/80" : "text-foreground/70"}`}>Water Purifier</span>
      </span>
    </span>
  );
}
