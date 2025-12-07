"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="bg-white pt-12 lg:pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
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

        {/* HIGHLIGHT CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid sm:grid-cols-2 gap-6"
        >
          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold text-neutral-900">Our Mission</h3>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              To deliver world-class engineering and oilfield solutions that ensure 
              safety, efficiency, and long-term reliability for energy operators.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold text-neutral-900">Our Vision</h3>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              To be a trusted partner in Africa’s energy sector—known for expertise, 
              precision and exceptional service delivery.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
