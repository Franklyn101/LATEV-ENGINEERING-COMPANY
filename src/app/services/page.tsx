import { createMetadata } from "@/lib/metadata";
import ServicePageContainers from "@/components/containers/ServicePageContainers";

export const metadata = createMetadata({
  title: "Our Engineering Services",
  description:
    "Explore our full range of engineering, construction, and oilfield services across Nigeria.",
  url: "https://latevengineering.com/services",
  image: "/images/services-og.png",
  keywords: ["services", "construction", "oilfield tools"],
});

export default function Services() { return <ServicePageContainers />; }