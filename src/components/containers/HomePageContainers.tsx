import Hero from '@/components/layouts/Hero'
import Testimonial from '../layouts/Testimonial'
import HeroBanner from '../ui/HeroBanner'
import HeroMarquee from '../layouts/HeroMarquee'
import CoreServices from '../layouts/CoreServices'
import CTASection from '../layouts/CTASection'
import Benefits from '../layouts/about-sections/Benefits'

export default function HomePageContainers() {
  return (
    <div>
      <Hero />
      <HeroMarquee />
      <Testimonial />
      <HeroBanner />
      <CoreServices />
      <Benefits />
      <CTASection />
    </div>
  )
}
