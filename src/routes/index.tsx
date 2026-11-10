import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  Droplets, Filter, Sparkles, ShoppingBag, Store, Zap, Phone, CalendarCheck, Wrench, Truck,
  MapPin, Home as HomeIcon, Layers, BadgeCheck, MessageCircle, ArrowRight, CheckCircle2,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { BookingForm } from "@/components/site/BookingForm";
import { AreaChips } from "@/components/site/AreaChips";
import {
  BUSINESS, SERVICES, PROBLEMS, FAQS, PRIMARY_TEL, SITE_URL, telHref,
} from "@/config/business";
import cardPhoto from "public/images/buisness_card.jpeg";

const TITLE = "Water Purifier & RO Repair in Ludhiana | Shree Shyam Water Purifier";
const DESC = "RO repair in Ludhiana at your doorstep. Aqua Guard & Aqua Fresh sales and service, alkaline RO and water filter repair. Call 91151-34662 today.";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema) }],
  }),
  component: Index,
});

const serviceIcons = [Droplets, Filter, Sparkles, ShoppingBag, Store, Zap];

// Add more gallery photos here (upload them, then add an entry).
const GALLERY = [
  { src: cardPhoto.url, alt: "Shree Shyam Water Purifier business card with phone numbers and Gopal Nagar, Choti Haibowal, Ludhiana address", caption: "Our business card" },
];

function PurifierIllustration() {
  return (
    <svg viewBox="0 0 320 320" className="h-auto w-full max-w-[340px]" role="img" aria-label="Illustration of an RO water purifier with water drops">
      <circle cx="160" cy="160" r="150" className="fill-accent" />
      <rect x="95" y="60" width="130" height="190" rx="22" className="fill-background stroke-foreground" strokeWidth="4" />
      <rect x="112" y="80" width="96" height="70" rx="12" className="fill-primary" />
      <circle cx="160" cy="115" r="16" className="fill-primary-foreground" />
      <path d="M160 103 C153 113 150 118 150 122 a10 10 0 0 0 20 0 c0-4-3-9-10-19z" className="fill-primary" />
      <rect x="112" y="165" width="96" height="10" rx="5" className="fill-muted" />
      <rect x="112" y="185" width="70" height="10" rx="5" className="fill-muted" />
      <path d="M225 200 h28 v18" className="fill-none stroke-foreground" strokeWidth="6" strokeLinecap="round" />
      <path d="M253 232 c-5 8-8 12-8 16 a8 8 0 0 0 16 0 c0-4-3-8-8-16z" className="fill-primary" />
      <circle cx="70" cy="90" r="8" className="fill-gold" />
      <circle cx="255" cy="80" r="5" className="fill-gold" />
      <rect x="120" y="250" width="80" height="12" rx="6" className="fill-foreground" />
    </svg>
  );
}

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="corner-motif overflow-hidden bg-secondary">
        <div className="relative z-10 mx-auto grid max-w-[1200px] items-center gap-10 px-4 py-14 sm:py-20 lg:grid-cols-2">
          <Reveal>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-card">
              <MapPin className="h-3.5 w-3.5" /> Choti Haibowal, Ludhiana
            </p>
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              RO &amp; Water Purifier Repair in <span className="text-primary">Ludhiana</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Fast, reliable water purifier service at your doorstep — RO, alkaline RO and water filter repair, plus Aqua Guard and Aqua Fresh sales &amp; service.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#booking" className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 font-semibold text-primary-foreground transition hover:brightness-110">
                <CalendarCheck className="h-5 w-5" /> Book a Repair
              </a>
              <a href={PRIMARY_TEL} className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-ink px-6 font-semibold text-ink-foreground transition hover:opacity-90">
                <Phone className="h-5 w-5" /> Call Now
              </a>
            </div>
            <ul className="mt-8 grid gap-3 text-sm font-medium sm:grid-cols-3">
              {["Sales & Service", "All major purifier types", "Serving Ludhiana & nearby"].map((t) => (
                <li key={t} className="flex items-center gap-2"><BadgeCheck className="h-5 w-5 shrink-0 text-gold" />{t}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="flex justify-center"><PurifierIllustration /></Reveal>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-[1200px] px-4 py-16 sm:py-20">
        <SectionHeading eyebrow="Our services" title="Water purifier repair & service in Ludhiana" intro="From RO repair to Aqua Guard service in Ludhiana — sales and service under one roof." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = serviceIcons[i] ?? Droplets;
            const body = (
              <>
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary"><Icon className="h-6 w-6" /></span>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                {s.href && <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Learn more <ArrowRight className="h-4 w-4" /></span>}
              </>
            );
            const cls = "block h-full rounded-xl border bg-card p-6 shadow-card transition hover:-translate-y-0.5 hover:border-primary/40";
            return (
              <Reveal key={s.id}>
                {s.href ? <a href={s.href} className={cls}>{body}</a> : <div className={cls}>{body}</div>}
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Problems */}
      <section className="bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4">
          <SectionHeading eyebrow="Common problems" title="Problems we fix every day" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROBLEMS.map((p) => (
              <Reveal key={p.title}>
                <div className="flex h-full gap-3 rounded-xl bg-card p-5 shadow-card">
                  <Wrench className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div><h3 className="font-semibold">{p.title}</h3><p className="mt-1 text-sm text-muted-foreground">{p.desc}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-[1200px] px-4 py-16 sm:py-20">
        <SectionHeading eyebrow="How it works" title="Repair in 3 simple steps" />
        <ol className="grid gap-5 md:grid-cols-3">
          {[
            { icon: Phone, t: "Call or fill the form", d: "Tell us your problem by call, WhatsApp or the booking form." },
            { icon: Truck, t: "Technician visits", d: "Our technician comes to your home to check the purifier." },
            { icon: CheckCircle2, t: "Repair & service done", d: "We fix the issue and get your purifier working again." },
          ].map((s, i) => (
            <Reveal key={s.t}>
              <li className="relative h-full rounded-xl border bg-card p-6 shadow-card">
                <span className="absolute right-5 top-4 font-display text-4xl font-extrabold text-accent">0{i + 1}</span>
                <s.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Why us */}
      <section id="why-us" className="bg-ink py-16 text-ink-foreground sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4">
          <SectionHeading eyebrow="Why choose us" title="A local Ludhiana business you can reach easily" light />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: HomeIcon, t: "Local Ludhiana business", d: "Based in Gopal Nagar, Choti Haibowal." },
              { icon: Store, t: "Sales & service, one roof", d: "Buy, repair and service in one place." },
              { icon: Layers, t: "Multiple brands", d: "Aqua Fresh, Aqua Guard and more." },
              { icon: Zap, t: "Electrician repair too", d: "All kinds of electrical repair work." },
              { icon: MessageCircle, t: "Easy contact", d: "Call or WhatsApp us anytime." },
            ].map((w) => (
              <Reveal key={w.t}>
                <div className="h-full rounded-xl border border-ink-foreground/10 p-5">
                  <w.icon className="h-6 w-6 text-gold" />
                  <h3 className="mt-3 font-semibold">{w.t}</h3>
                  <p className="mt-1 text-sm text-ink-foreground/70">{w.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          {/* Placeholder: add real customer reviews here later */}
          <div className="mt-10 rounded-xl border border-dashed border-ink-foreground/25 p-6 text-center text-sm text-ink-foreground/60">
            Customer reviews — coming soon
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-[1200px] px-4 py-16 sm:py-20">
        <SectionHeading eyebrow="Gallery" title="Photos" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((g) => (
            <Reveal key={g.src}>
              <figure className="overflow-hidden rounded-xl border bg-card shadow-card">
                <img src={g.src} alt={g.alt} loading="lazy" width={899} height={1599} className="aspect-[4/5] w-full object-cover object-[center_60%]" />
                <figcaption className="p-4 text-sm font-medium">{g.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Areas */}
      <section id="areas" className="bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4">
          <SectionHeading eyebrow="Areas we serve" title="Water purifier service near you in Ludhiana"
            intro="We provide RO repair and water purifier service across Ludhiana — from Haibowal, Model Gram and Salem Tabri to South City and Focal Point — and nearby towns like Mullanpur Dakha, Baddowal and Sidhwan Bet." />
          <AreaChips />
          <div className="mt-8 text-center">
            <Link to="/areas" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">See all areas <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
        <SectionHeading eyebrow="Book a repair" title="Book your purifier repair" intro="Fill in the details and send them to us directly on WhatsApp." />
        <BookingForm />
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <Accordion type="single" collapsible className="rounded-xl bg-card px-5 shadow-card">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`f${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-[1200px] px-4 py-16 sm:py-20">
        <SectionHeading eyebrow="Contact" title="Visit or call us" />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border bg-card p-6 shadow-card">
            <h3 className="font-semibold">{BUSINESS.name}</h3>
            <div className="mt-4 space-y-3">
              {BUSINESS.phones.map((p) => (
                <a key={p} href={telHref(p)} className="flex h-12 items-center gap-3 rounded-xl bg-accent px-4 font-semibold text-accent-foreground"><Phone className="h-5 w-5" />{p}</a>
              ))}
              <p className="flex gap-3 pt-2"><MapPin className="h-5 w-5 shrink-0 text-primary" />{BUSINESS.address}</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border shadow-card">
            <iframe title="Map of Gopal Nagar, Choti Haibowal, Ludhiana" loading="lazy" className="h-80 w-full"
              src={`https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.mapQuery)}&output=embed`} />
          </div>
        </div>
      </section>
    </>
  );
}

