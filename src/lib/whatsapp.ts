import { OWNER_WHATSAPP } from "@/config/business";

export type BookingData = {
  name: string;
  phone: string;
  area: string;
  service: string;
  problem: string;
};

export function buildWhatsAppMessage(d: BookingData): string {
  return [
    "*New Repair Booking*",
    "",
    `*Name:* ${d.name}`,
    `*Phone:* ${d.phone}`,
    `*Area:* ${d.area}`,
    `*Service:* ${d.service}`,
    `*Problem:* ${d.problem}`,
  ].join("\n");
}

export function buildWhatsAppUrl(d: BookingData): string {
  return `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(buildWhatsAppMessage(d))}`;
}

export function sendToWhatsApp(formData: BookingData) {
  window.open(buildWhatsAppUrl(formData), "_blank", "noopener,noreferrer");
}

export function validateBooking(d: BookingData): Partial<Record<keyof BookingData, string>> {
  const e: Partial<Record<keyof BookingData, string>> = {};
  if (d.name.trim().length < 2) e.name = "Please enter your name";
  const digits = d.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 12) e.phone = "Enter a valid 10-digit phone number";
  if (!d.area) e.area = "Please choose your area";
  if (!d.service) e.service = "Please choose a service";
  if (d.problem.trim().length < 3) e.problem = "Briefly describe the problem";
  return e;
}
