import { createMetadata } from "@/lib/metadata";
import NotFoundContent from "@/components/layouts/NotFoundContent";

export const metadata = createMetadata({
  title: "Page Not Found",
  description:
    "The page you are looking for could not be found.",
  url: "https://latevengineering.com/services",
  image: "/images/not-found-og.png",
});

export default function NotFound() {
  return <NotFoundContent />;
}
