import Image from "next/image";
import HeroBanner from "../layouts/about-sections/HeroBanner";
import Benefits from "../layouts/about-sections/Benefits";
import Certifications from "../layouts/about-sections/Certifications";
import CompanyStory from "../layouts/about-sections/CompanyStory";
import CoreValues from "../layouts/about-sections/CoreValues";
import CTASection from "../layouts/CTASection";
import GlobalPresence from "../layouts/about-sections/GlobalPresence";
import LeadershipTeam from "../layouts/about-sections/LeadershipTeam";
import MissionVision from "../layouts/about-sections/MissionVision";
import ProductsServices from "../layouts/about-sections/ProductsServices";
import { SectionHero } from "../layouts/SectionHero";


const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <SectionHero
        title="About Latev Engineering"
        subtitle="Latev Engineering delivers safe, efficient, and high-quality operations through advanced equipment and skilled professionals, serving the industry from our bases in Warri, Port Harcourt, and Lagos."
        imageUrl="/images/about-hero.svg"
        overlayOpacity={0.7}
      />
      <CompanyStory />
      <MissionVision />
      <CoreValues />
      <HeroBanner />
      <ProductsServices />
      {/* <LeadershipTeam /> */}
      <Certifications />
      <Benefits />
      <GlobalPresence />
      <CTASection />
    </div>
  );
};

export default AboutUs;