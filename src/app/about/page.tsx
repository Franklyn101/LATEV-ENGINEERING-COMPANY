import AboutPageContainer from "@/components/containers/AboutPageContainer";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about Latev Engineering Services Ltd, a leading provider of engineering, oilfield, and construction solutions across Nigeria. Discover our mission, values, and commitment to excellence.",
  keywords: [
    "About Latev Engineering",
    "engineering company Nigeria",
    "oilfield services",
    "construction solutions",
    "company mission and vision",
    "industrial engineering"
  ],
  url: "https://latev-engineering.com/about",
  image: "/images/about-og.png",
});

export default function About() {
  return <AboutPageContainer />;
}