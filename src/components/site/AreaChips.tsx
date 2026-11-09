import { LUDHIANA_AREAS, NEARBY_AREAS } from "@/config/business";

export function AreaChips() {
  const chip = (a: { name: string; pins: string[] }) => (
    <li key={a.name} className="flex items-center justify-between gap-2 rounded-xl border bg-card px-4 py-3 text-sm shadow-card">
      <span className="font-medium">{a.name}</span><span className="shrink-0 text-xs text-muted-foreground">{a.pins.join(", ")}</span>
    </li>
  );
  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-3 font-semibold">Ludhiana</h3>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{LUDHIANA_AREAS.map(chip)}</ul>
      </div>
      <div>
        <h3 className="mb-3 font-semibold">Nearby areas</h3>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{NEARBY_AREAS.map(chip)}</ul>
      </div>
    </div>
  );
}
