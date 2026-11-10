// All business info lives here. Edit this file to change phones, address, areas or services.

export const OWNER_WHATSAPP = "919915540690";

export const SITE_URL = "https://id-preview--34907d7c-28a0-4113-91b8-8aabc95481d1.lovable.app";

export const BUSINESS = {
  name: "Shree Shyam Water Purifier",
  phones: ["91151-34662", "99155-40690"],
  address: "#36, St No. 6, Gopal Nagar, Choti Haibowal, Ludhiana",
  street: "#36, St No. 6, Gopal Nagar, Choti Haibowal",
  city: "Ludhiana",
  region: "Punjab",
  country: "IN",
  mapQuery: "Gopal Nagar, Choti Haibowal, Ludhiana",
};

export const telHref = (phone: string) => `tel:+91${phone.replace(/\D/g, "")}`;
export const PRIMARY_TEL = telHref(BUSINESS.phones[0] ?? "");
export const WHATSAPP_HREF = `https://wa.me/${OWNER_WHATSAPP}`;

export type Service = { id: string; title: string; desc: string; href?: string };

export const SERVICES: Service[] = [
  { id: "ro", title: "RO Water Purifier Repair & Service", desc: "Doorstep RO repair in Ludhiana — servicing, part replacement and fault fixing.", href: "/ro-repair-ludhiana" },
  { id: "filter", title: "Water Filter Repair & Service", desc: "Water filter repair and cartridge changes to keep your water clean.", href: "/water-purifier-service-ludhiana" },
  { id: "alkaline", title: "Alkaline RO Repair & Service", desc: "Alkaline RO repair and regular servicing for your alkaline purifier." },
  { id: "sales", title: "Water Purifier Sales (Aqua Fresh, Aqua Guard)", desc: "Buy Aqua Fresh and Aqua Guard purifiers, with Aqua Guard service in Ludhiana.", href: "/aqua-guard-service-ludhiana" },
  { id: "dealers", title: "RO Dealers", desc: "RO dealers in Ludhiana — purifiers, parts and service under one roof." },
  { id: "electrician", title: "Electrician Repair", desc: "All kinds of electrician repair work, alongside our purifier services." },
];

export type Area = { name: string; pins: string[] };

export const LUDHIANA_AREAS: Area[] = [
  { name: "Ghumar Mandi", pins: ["141001"] },
  { name: "Model Gram", pins: ["141002"] },
  { name: "Punjab Mata Nagar", pins: ["141003"] },
  { name: "Pau Ludhiana", pins: ["141004"] },
  { name: "Salem Tabri", pins: ["141005"] },
  { name: "Chhoti Jawaddi", pins: ["141006"] },
  { name: "Brahmpuri", pins: ["141007"] },
  { name: "Ludhiana Central", pins: ["141008"] },
  { name: "Moti Nagar", pins: ["141009", "141014"] },
  { name: "Samrala Chowk", pins: ["141010"] },
  { name: "NDC Ludhiana", pins: ["141011"] },
  { name: "Raj Guru Nagar", pins: ["141012"] },
  { name: "Jawaddi Taksal", pins: ["141013"] },
  { name: "Mundian Kalan", pins: ["141015"] },
  { name: "Ambedkar Nagar", pins: ["141016"] },
  { name: "Jugiana", pins: ["141017"] },
  { name: "Kitchlu Nagar", pins: ["141027"] },
  { name: "Karam Colony", pins: ["141111"] },
  { name: "Focal Point Phase 8", pins: ["141123"] },
  { name: "Threeke", pins: ["142028"] },
  { name: "South City", pins: ["142027"] },
  { name: "Manoke Ludhiana", pins: ["142034"] },
];

export const NEARBY_AREAS: Area[] = [
  { name: "Baddowal", pins: ["142021"] },
  { name: "Lalton Kalan", pins: ["142022"] },
  { name: "Hambran", pins: ["141110"] },
  { name: "Jaspal Bangar", pins: ["141122", "141127"] },
  { name: "Dakha", pins: ["141102"] },
  { name: "Mullanpur Dakha", pins: ["141101"] },
  { name: "Jodhan", pins: ["142029"] },
  { name: "Sanehwal", pins: ["141120"] },
  { name: "Kohara", pins: ["141112"] },
  { name: "Sidhwan Bet", pins: ["142033"] },
  { name: "Payal", pins: ["141416"] },
];

export const ALL_AREAS = [...LUDHIANA_AREAS, ...NEARBY_AREAS];

export const PROBLEMS = [
  { title: "Low water flow", desc: "Purifier gives very little water or fills the tank slowly." },
  { title: "Bad taste or smell", desc: "Water tastes odd or smells — usually filters need changing." },
  { title: "Leakage", desc: "Water dripping from pipes, fittings or the purifier body." },
  { title: "Not switching on", desc: "No power, no lights, or the motor does not start." },
  { title: "Filter / membrane replacement", desc: "Old filters or RO membrane due for replacement." },
  { title: "TDS issues", desc: "TDS too high or too low — we check and adjust it." },
];

export const FAQS = [
  { q: "Do you repair RO purifiers at home in Ludhiana?", a: "Yes. Call or WhatsApp us and a technician will visit your home in Ludhiana to check and repair your RO purifier." },
  { q: "Which areas do you cover?", a: "We cover most of Ludhiana — including Haibowal, Model Gram, Salem Tabri, Moti Nagar, South City and more — and nearby areas like Baddowal, Mullanpur Dakha and Sidhwan Bet. See the full list in Areas We Serve." },
  { q: "Do you also sell water purifiers?", a: "Yes. We sell water purifiers including Aqua Fresh and Aqua Guard, and we are RO dealers in Ludhiana." },
  { q: "Do you service Aqua Guard and Aqua Fresh purifiers?", a: "Yes, we provide sales and service for Aqua Fresh and Aqua Guard purifiers." },
  { q: "Do you repair alkaline RO purifiers?", a: "Yes, we repair and service alkaline RO purifiers as well." },
  { q: "Do you do electrical work too?", a: "Yes. Along with water purifier service, we handle all kinds of electrician repair." },
];
