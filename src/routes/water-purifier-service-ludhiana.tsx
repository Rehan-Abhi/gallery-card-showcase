import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { SITE_URL } from "@/config/business";

const T = "Water Purifier Service in Ludhiana | Shree Shyam Water Purifier";
const D = "Water purifier service near you in Ludhiana — regular servicing, water filter repair and cartridge replacement. Sales and service under one roof.";

export const Route = createFileRoute("/water-purifier-service-ludhiana")({
  head: () => ({
    meta: [{ title: T }, { name: "description", content: D }, { property: "og:title", content: T }, { property: "og:description", content: D }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }],
    links: [{ rel: "canonical", href: SITE_URL + "/water-purifier-service-ludhiana" }],
  }),
  component: () => (
    <ServicePage h1="Water Purifier Service in Ludhiana" intro="Regular water purifier service and water filter repair in Ludhiana to keep your drinking water clean and your purifier running well."
      issues={["Routine servicing and cleaning", "Water filter repair", "Filter cartridge replacement", "Slow or no water output", "Noise from the motor", "Leaks and loose fittings"]} />
  ),
});
