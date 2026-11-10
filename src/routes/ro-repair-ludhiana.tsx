import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { SITE_URL } from "@/config/business";

const T = "RO Repair in Ludhiana | Shree Shyam Water Purifier";
const D = "Doorstep RO repair in Ludhiana — low flow, leakage, TDS problems, membrane and filter replacement. Call Shree Shyam Water Purifier at 91151-34662.";

export const Route = createFileRoute("/ro-repair-ludhiana")({
  head: () => ({
    meta: [{ title: T }, { name: "description", content: D }, { property: "og:title", content: T }, { property: "og:description", content: D }, { property: "og:type", content: "website" }, { property: "og:url", content: SITE_URL + "/ro-repair-ludhiana" }, { name: "twitter:card", content: "summary_large_image" }],
    links: [{ rel: "canonical", href: SITE_URL + "/ro-repair-ludhiana" }],
  }),
  component: () => (
    <ServicePage h1="RO Repair in Ludhiana" intro="RO water purifier repair and service at your home in Ludhiana. We check, repair and service all major RO purifiers, including alkaline RO."
      issues={["Low water flow or tank not filling", "Water tastes or smells bad", "Leakage from pipes or body", "Purifier not switching on", "RO membrane or filter replacement", "High or low TDS"]} />
  ),
});
