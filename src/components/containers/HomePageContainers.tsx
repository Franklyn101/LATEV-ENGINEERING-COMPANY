import Hero from '@/components/layouts/Hero'
import Testimonial from '../layouts/Testimonial'
import HeroBanner from '../ui/HeroBanner'

export default function HomePageContainers() {
  return (
    <div>
      <Hero />
      <Testimonial />
      <HeroBanner />
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        
      </div>
    </div>
  )
}
