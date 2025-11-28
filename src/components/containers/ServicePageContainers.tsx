
import { SectionHero } from '../layouts/SectionHero'
import ServiceSection from '../layouts/ServiceSection'

export default function ServicePageContainers() {
  return (
    <div>
      <SectionHero
        title="Precision Construction for Critical Oil Infrastructure"
        subtitle="From pipelines to production sites, we deliver end to end solutions built on expertise, efficiency, and uncompromising standards."
        imageUrl="/images/servicebg.jpg"
        overlayOpacity={0.7}
      />
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
        <ServiceSection />
      </div>
    </div>
  )
}
