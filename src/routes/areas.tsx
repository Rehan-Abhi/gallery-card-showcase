import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { AreaChips } from "@/components/site/AreaChips";
import { SITE_URL } from "@/config/business";

const T = "Areas We Serve in Ludhiana | Shree Shyam Water Purifier";
const D = "RO repair and water purifier service across Ludhiana and nearby areas — Model Gram, Salem Tabri, South City, Mullanpur Dakha, Baddowal and more.";

export const Route = createFileRoute("/areas")({
  head: () => ({
    meta: [{ title: T }, { name: "description", content: D }, { property: "og:title", content: T }, { property: "og:description", content: D }, { property: "og:type", content: "website" }, { property: "og:url", content: SITE_URL + "/areas" }, { name: "twitter:card", content: "summary_large_image" }],
    links: [{ rel: "canonical", href: SITE_URL + "/areas" }],
  }),
  component: () => (
    <ServicePage h1="Areas We Serve in Ludhiana" intro="We provide water purifier service near you across Ludhiana city and nearby towns. Find your area and pincode below."
      issues={["RO repair at home", "Water filter repair", "Alkaline RO repair", "Aqua Guard & Aqua Fresh service", "Purifier sales", "Electrician repair"]}>
      <div className="mt-14"><AreaChips /></div>
    </ServicePage>
  ),
});
