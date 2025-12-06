import ModernContactPage from "@/components/containers/ContactPageContainer";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Latev Engineering Services Ltd for professional oilfield services, coiled tubing solutions, and engineering support. Reach our team for inquiries, project consultations, or partnership opportunities.",
  keywords: [
    "contact Latev Engineering",
    "oilfield service support",
    "coiled tubing tools",
    "engineering services",
    "well intervention support",
    "Latev Engineering contact"
  ],
  url: "https://latevengineering.com/contact",
  image: "/og-image.png",
});

export default function ContactPage() { return <ModernContactPage /> }