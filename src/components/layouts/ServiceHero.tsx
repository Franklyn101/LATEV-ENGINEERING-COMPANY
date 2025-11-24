import React from 'react'
import Image from 'next/image'
import { RippleButton } from '../shared/button'

const ServiceHero = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/servicebg.jpg"
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold font-serif text-white">
          Precision Construction for Critical Oil Infrastructure
        </h1>

        <p className="text-lg md:text-2xl mt-4 text-white/90 max-w-2xl">
         From pipelines to production sites, we deliver end to end solutions built on expertise, efficiency, and uncompromising standards.
        </p>

        <RippleButton className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition">
          Get Started
        </RippleButton>
      </div>
    </section>
  )
}

export default ServiceHero