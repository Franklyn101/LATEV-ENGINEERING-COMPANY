import { createMetadata } from "@/lib/metadata";
import ServicePageContainers from "@/components/containers/ServicePageContainers";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Explore our full range of engineering, construction, and oilfield services across Nigeria. Latev Engineering delivers world-class solutions in coiled tubing, well intervention, industrial projects, and more.",
  url: "https://latev-engineering.com/services",
  image: "/images/services-og.png",
  keywords: [
    "Latev Engineering services",
    "engineering solutions Nigeria",
    "construction services",
    "oilfield tools",
    "coiled tubing solutions",
    "well intervention services",
    "industrial engineering projects",
    "project support",
    "engineering company Nigeria"
  ],
});

export default function Services() {
  return <ServicePageContainers />;
}
