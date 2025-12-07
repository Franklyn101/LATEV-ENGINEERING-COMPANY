"use client";

import Image from "next/image";
import { motion, easeOut } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutSection() {
  const [active, setActive] = useState(0);
  const images = [
    { src: "/images/plans.webp", alt: "Blueprints" },
    { src: "/images/engineer.webp", alt: "Engineer" },
    { src: "/images/cranes.webp", alt: "Cranes" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white pt-12 lg:pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

        {/* MOBILE — Image Strip with Expanding Animation */}
        <div className="lg:hidden flex w-full gap-2 h-56 overflow-hidden">
          {images.map((image, index) => (
            <motion.div
              key={index}
              animate={{
                flex: active === index ? 1.6 : 0.7,
              }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="relative h-full rounded-xl overflow-hidden"
            >
              <Image src={image.src} alt={image.alt} fill className="object-cover" />
            </motion.div>
          ))}
        </div>

        {/* TEXT COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-snug">
            Excellence in Oilfield Services, Engineering & Downhole Solutions
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            At <strong className="font-semibold">Latev Engineering Company</strong>, 
            we deliver reliable, innovative and cost-effective solutions across 
            well intervention, tools provisioning, and engineering support services.
            Our experience spans onshore and offshore operations, with a strong 
            commitment to safety, precision and client satisfaction.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            With over a decade of proven field expertise, we help operators
            minimize downtime, improve performance, and achieve operational 
            excellence using industry-standard technologies and specialized tools.
            Every project we execute is guided by quality, transparency, and
            measurable results.
          </p>
        </motion.div>

                {/* DESKTOP — Layered Collage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="relative w-full h-[520px] hidden lg:block"
        >
          {/* TOP SMALL IMAGE */}
          <div className="absolute top-0 right-6 w-48 md:w-60 h-40 md:h-52 shadow-lg rounded-lg overflow-hidden">
            <Image src="/images/plans.webp" alt="Blueprints and tools" fill className="object-cover" />
          </div>

          {/* CENTER LARGE IMAGE */}
          <div className="absolute left-0 top-24 w-72 md:w-80 h-80 md:h-96 shadow-xl rounded-lg overflow-hidden z-10">
            <Image src="/images/engineer.webp" alt="Engineer inspecting plans" fill className="object-cover" />
          </div>

          {/* BOTTOM RIGHT WIDE IMAGE */}
          <div className="absolute bottom-0 right-0 w-72 md:w-80 h-56 md:h-64 shadow-lg rounded-lg overflow-hidden">
            <Image src="/images/cranes.webp" alt="Construction cranes" fill className="object-cover" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
