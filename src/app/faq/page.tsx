import FAQPageContainer from "@/components/containers/FAQPageContainer";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "FAQ – Latev Engineering Services Ltd",
  description:
    "Find answers to common questions about Latev Engineering Services Ltd, including our engineering, oilfield, and construction services, project processes, and client support.",
  keywords: [
    "Latev Engineering FAQ",
    "engineering services questions",
    "oilfield tools support",
    "construction services help",
    "client support",
    "project inquiries"
  ],
  url: "https://latevengineering.com/faq",
  image: "/images/faq-og.png",
});

export default function FAQ() {
  return <FAQPageContainer />;
}
