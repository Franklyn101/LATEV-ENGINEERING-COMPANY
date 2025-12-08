"use client";

import React from "react";
import { motion, Variants, easeOut } from "framer-motion";
import Image from "next/image";

// Stats data
const stats = [
  { value: "10+", label: "Years of Expertise" },
  { value: "50+", label: "Tools Delivered" },
  { value: "25+", label: "Well Interventions" },
  { value: "100%", label: "Client Satisfaction" },
];

// Framer Motion variants
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function StatsSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-gray-50 via-white to-gray-100" />
      <div className="absolute -top-10 -left-10 w-52 h-52 bg-brand-red/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-red/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Stats Section */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-10"
        >
          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-neutral-900"
          >
            Our Performance in Numbers
          </motion.h2>

          <div className="grid grid-cols-2 gap-10 md:gap-14">
            {stats.map((stat, i) => (
              <motion.div
                key={`${stat.label}-${i}`}
                variants={item}
                className="flex flex-col items-start space-y-2"
              >
                <motion.span
                  className="text-4xl md:text-5xl font-extrabold text-brand-red drop-shadow-sm"
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 220 }}
                >
                  {stat.value}
                </motion.span>
                <p className="text-gray-700 text-base md:text-lg font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Stack */}
        <div className="relative w-full h-[380px] md:h-[450px] flex items-center justify-center">
          {/* Floating Accent Circle */}
          <div className="absolute inset-0 m-auto w-48 h-48 md:w-64 md:h-64 bg-brand-red/10 rounded-full blur-2xl -z-10" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Back image */}
            <div className="absolute -right-6 -top-6 transform -rotate-6 shadow-xl rounded-xl overflow-hidden">
              <Image
                src="/images/pipeline-digging.jpg"
                alt="Rig Operations"
                width={600}
                height={400}
                className="block w-64 md:w-80 h-40 md:h-56 object-cover"
                priority={false}
              />
            </div>

            {/* Front image */}
            <div className="absolute -left-6 -bottom-6 transform rotate-6 shadow-2xl rounded-xl overflow-hidden">
              <Image
                src="/images/dredge.jpg"
                alt="Downhole Tools"
                width={600}
                height={400}
                className="block w-64 md:w-80 h-40 md:h-56 object-cover"
                priority={false}
              />
            </div>

            {/* Center floating card */}
            <motion.div
              initial={{ scale: 0.98, y: 8, opacity: 0 }}
              whileInView={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: easeOut }}
              viewport={{ once: true }}
              className="relative w-56 md:w-72 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100"
            >
              <Image
                src="/images/mechanical.jpg"
                alt="Well Intervention"
                width={520}
                height={340}
                className="w-full h-40 md:h-48 object-cover"
                priority={false}
              />

              <div className="p-4 text-left">
                <h3 className="text-sm md:text-base font-semibold text-neutral-900">
                  Coiled Tubing Operations
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mt-1">
                  Live-well intervention tools & precision downhole services.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
