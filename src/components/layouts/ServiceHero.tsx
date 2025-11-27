"use client"
import Image from 'next/image'
import { motion } from 'framer-motion';

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
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
          Precision Construction for Critical Oil Infrastructure
        </motion.h1>

        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }} 
            className="text-lg md:text-2xl lg:text-3xl mt-4 text-white/90 max-w-4xl">
          From pipelines to production sites, we deliver end to end solutions built on expertise, efficiency, and uncompromising standards.
        </motion.p>
      </div>
    </section>
  )
}

export default ServiceHero