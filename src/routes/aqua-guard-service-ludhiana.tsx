import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { SITE_URL } from "@/config/business";

const T = "Aqua Guard & Aqua Fresh Service in Ludhiana | Shree Shyam";
const D = "Aqua Guard service in Ludhiana and Aqua Fresh service in Ludhiana — sales, repair and servicing from local RO dealers in Choti Haibowal.";

export const Route = createFileRoute("/aqua-guard-service-ludhiana")({
  head: () => ({
    meta: [{ title: T }, { name: "description", content: D }, { property: "og:title", content: T }, { property: "og:description", content: D }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }],
    links: [{ rel: "canonical", href: SITE_URL + "/aqua-guard-service-ludhiana" }],
  }),
  component: () => (
    <ServicePage h1="Aqua Guard Service in Ludhiana" intro="Sales and service for Aqua Guard and Aqua Fresh water purifiers in Ludhiana, from your local RO dealers."
      issues={["Aqua Guard not giving water", "Aqua Fresh filter change", "Leakage or dripping", "Power or display problems", "Bad taste or smell", "New Aqua Guard / Aqua Fresh purchase"]} />
  ),
});
