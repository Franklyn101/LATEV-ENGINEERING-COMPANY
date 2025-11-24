
import ServiceHero from '../layouts/ServiceHero'
import ServiceSection from '../layouts/ServiceSection'

export default function ServicePageContainers() {
  return (
    <div>
      <ServiceHero />
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
        <ServiceSection  />
      </div>
    </div>
  )
}
