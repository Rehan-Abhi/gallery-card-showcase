import { Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Phone } from "lucide-react";
import { BookingForm } from "./BookingForm";
import { PRIMARY_TEL } from "@/config/business";

export function ServicePage({ h1, intro, issues, children }: { h1: string; intro: string; issues: string[]; children?: React.ReactNode }) {
  return (
    <>
      <section className="corner-motif overflow-hidden bg-secondary">
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 py-14 sm:py-20">
          <Link to="/" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"><ArrowLeft className="h-4 w-4" /> Back to home</Link>
          <h1 className="max-w-2xl text-3xl font-extrabold sm:text-4xl lg:text-5xl">{h1}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{intro}</p>
          <a href={PRIMARY_TEL} className="mt-6 inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-6 font-semibold text-primary-foreground hover:brightness-110"><Phone className="h-4 w-4" /> Call Now</a>
        </div>
      </section>
      <section className="mx-auto max-w-[1200px] px-4 py-14">
        <h2 className="text-2xl font-bold sm:text-3xl">Common issues we fix</h2>
        <div className="divider-gold mt-4" />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {issues.map((i) => (
            <li key={i} className="flex gap-3 rounded-xl border bg-card p-4 shadow-card"><CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />{i}</li>
          ))}
        </ul>
        {children}
      </section>
      <section className="bg-secondary py-14">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-6 text-center text-2xl font-bold sm:text-3xl">Book a repair</h2>
          <BookingForm />
        </div>
      </section>
    </>
  );
}
