import Hero from '@/components/layouts/Hero'
import Testimonial from '../layouts/Testimonial'
import HeroBanner from '../ui/HeroBanner'
import HeroMarquee from '../layouts/HeroMarquee'
import CoreServices from '../layouts/CoreServices'
import CTASection from '../layouts/CTASection'
import Benefits from '../layouts/about-sections/Benefits'
import StatsSection from '../layouts/StatsSection'
import ShowcaseSection from '../layouts/ShowcaseSection'
import AboutSection from '../layouts/AboutSection'

export default function HomePageContainers() {
  return (
    <div>
      <Hero />
      <HeroMarquee />
      <AboutSection />
      <ShowcaseSection />
      <StatsSection />
      <HeroBanner />
      <CoreServices />
      <Testimonial />
      <Benefits />
      <CTASection />
    </div>
  )
}
