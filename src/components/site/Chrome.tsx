import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X, MessageCircle, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { BUSINESS, PRIMARY_TEL, WHATSAPP_HREF, telHref } from "@/config/business";

const NAV = [
  { label: "Services", href: "/#services" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Areas", href: "/#areas" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto grid h-16 max-w-[1200px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4">
        <Link to="/" aria-label="Shree Shyam Water Purifier home" className="min-w-0">
          <Logo />
        </Link>
        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">{n.label}</a>
            ))}
          </nav>
          <a href={PRIMARY_TEL} className="ml-2 hidden h-11 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground transition hover:brightness-110 sm:inline-flex">
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <button onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-xl border lg:hidden" aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t bg-background px-4 py-3 lg:hidden" aria-label="Mobile">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="flex h-12 items-center border-b text-base font-medium last:border-0">{n.label}</a>
          ))}
          <Link to="/ro-repair-ludhiana" onClick={() => setOpen(false)} className="flex h-12 items-center text-base font-medium">RO Repair Ludhiana</Link>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink pb-24 pt-14 text-ink-foreground lg:pb-10">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 text-sm text-ink-foreground/70">Water purifier &amp; RO repair, service and sales in Ludhiana.</p>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">Quick links</h3>
          <ul className="space-y-2 text-sm text-ink-foreground/80">
            <li><Link to="/" className="hover:text-ink-foreground">Home</Link></li>
            <li><a href="/#gallery" className="hover:text-ink-foreground">Gallery</a></li>
            <li><a href="/#booking" className="hover:text-ink-foreground">Book a Repair</a></li>
            <li><a href="/#faq" className="hover:text-ink-foreground">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">Services</h3>
          <ul className="space-y-2 text-sm text-ink-foreground/80">
            <li><Link to="/ro-repair-ludhiana" className="hover:text-ink-foreground">RO Repair in Ludhiana</Link></li>
            <li><Link to="/water-purifier-service-ludhiana" className="hover:text-ink-foreground">Water Purifier Service</Link></li>
            <li><Link to="/aqua-guard-service-ludhiana" className="hover:text-ink-foreground">Aqua Guard Service</Link></li>
            <li><Link to="/areas" className="hover:text-ink-foreground">Areas We Serve</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">Contact</h3>
          <ul className="space-y-2 text-sm text-ink-foreground/80">
            {BUSINESS.phones.map((p) => (
              <li key={p}><a href={telHref(p)} className="hover:text-ink-foreground">{p}</a></li>
            ))}
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{BUSINESS.address}</li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-[1200px] border-t border-ink-foreground/10 px-4 pt-6 text-xs text-ink-foreground/60">© {BUSINESS.name}</p>
    </footer>
  );
}

export function FloatingContact() {
  return (
    <>
      <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
        className="fixed bottom-20 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-card transition hover:scale-105 lg:bottom-6">
        <MessageCircle className="h-7 w-7" />
      </a>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t bg-background lg:hidden">
        <a href={PRIMARY_TEL} className="flex h-14 items-center justify-center gap-2 bg-primary font-semibold text-primary-foreground"><Phone className="h-5 w-5" /> Call</a>
        <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="flex h-14 items-center justify-center gap-2 bg-whatsapp font-semibold text-whatsapp-foreground"><MessageCircle className="h-5 w-5" /> WhatsApp</a>
      </div>
    </>
  );
}
