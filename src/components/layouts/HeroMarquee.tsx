import { Marquee, MarqueeFade, MarqueeContent, MarqueeItem } from "../ui/Marquee";

export default function HeroMarquee() {
  const services = [
    { text: "Structural Engineering", icon: "🏗️" },
    { text: "Construction Management", icon: "👷" },
    { text: "Oil Drilling", icon: "🛢️" },
    { text: "Architectural Design", icon: "📐" },
    { text: "Project Consulting", icon: "💼" },
    { text: "Quality Assurance", icon: "✅" },
    { text: "Sustainable Solutions", icon: "🌱" }
  ];

  return (
    <Marquee className="py-6 bg-gray-100 border-y border-gray-200">
     <MarqueeFade side="left" />
      <MarqueeFade side="right" />
      <MarqueeContent speed={50}>
        {services.map((service, index) => (
          <MarqueeItem key={index} className="px-10">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{service.icon}</span>
              <span className="text-lg font-semibold text-gray-800 whitespace-nowrap">
                {service.text}
              </span>
            </div>
          </MarqueeItem>
        ))}
      </MarqueeContent>
      <MarqueeFade side="right" />
    </Marquee>
  );
}