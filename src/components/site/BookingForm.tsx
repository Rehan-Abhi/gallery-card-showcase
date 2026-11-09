import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { ALL_AREAS, SERVICES } from "@/config/business";
import { sendToWhatsApp, validateBooking, type BookingData } from "@/lib/whatsapp";

const empty: BookingData = { name: "", phone: "", area: "", service: "", problem: "" };
const field = "h-12 w-full rounded-xl border border-input bg-background px-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/25";

export function BookingForm() {
  const [data, setData] = useState<BookingData>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingData, string>>>({});
  const set = (k: keyof BookingData) => (e: { target: { value: string } }) => setData({ ...data, [k]: e.target.value });

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validateBooking(data);
    setErrors(errs);
    if (Object.keys(errs).length === 0) sendToWhatsApp(data);
  }

  const Err = ({ k }: { k: keyof BookingData }) => (errors[k] ? <p className="mt-1 text-sm text-destructive">{errors[k]}</p> : null);

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 rounded-2xl border bg-card p-5 shadow-card sm:grid-cols-2 sm:p-8">
      <div>
        <label htmlFor="b-name" className="mb-1.5 block text-sm font-medium">Name</label>
        <input id="b-name" className={field} value={data.name} onChange={set("name")} autoComplete="name" />
        <Err k="name" />
      </div>
      <div>
        <label htmlFor="b-phone" className="mb-1.5 block text-sm font-medium">Phone</label>
        <input id="b-phone" type="tel" inputMode="tel" className={field} value={data.phone} onChange={set("phone")} autoComplete="tel" />
        <Err k="phone" />
      </div>
      <div>
        <label htmlFor="b-area" className="mb-1.5 block text-sm font-medium">Area</label>
        <select id="b-area" className={field} value={data.area} onChange={set("area")}>
          <option value="">Select your area</option>
          {ALL_AREAS.map((a) => {
            const v = `${a.name} (${a.pins.join(", ")})`;
            return <option key={a.name} value={v}>{v}</option>;
          })}
        </select>
        <Err k="area" />
      </div>
      <div>
        <label htmlFor="b-service" className="mb-1.5 block text-sm font-medium">Service needed</label>
        <select id="b-service" className={field} value={data.service} onChange={set("service")}>
          <option value="">Select a service</option>
          {SERVICES.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
        </select>
        <Err k="service" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="b-problem" className="mb-1.5 block text-sm font-medium">Problem description</label>
        <textarea id="b-problem" rows={4} className={`${field} h-auto py-3`} value={data.problem} onChange={set("problem")} />
        <Err k="problem" />
      </div>
      <button type="submit" className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 font-semibold text-primary-foreground transition hover:brightness-110 sm:col-span-2">
        <Send className="h-4 w-4" /> Send booking on WhatsApp
      </button>
    </form>
  );
}
