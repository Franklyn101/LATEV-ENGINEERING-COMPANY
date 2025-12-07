"use client";

import { easeOut, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const projects = [
  {
    title: "Advanced Techniques in Well Intervention",
    description:
      "Advanced CT deployment enabling safe, real-time well intervention with zero downtime.",
    image: "/images/project-well.jpeg",
  },
  {
    title: "Offshore Pressure Control System",
    description:
      "Robust pressure-control assemblies engineered for offshore well safety and reliability.",
    image: "/images/project-offshore.jpg",
  },
  {
    title: "Wellbore Milling & Cleanout",
    description:
      "Precision milling for obstruction removal using adaptive performance tools.",
    image: "/images/project-milling.webp",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.22,
    },
  },
};


export default function ShowcaseSection() {
  const router = useRouter();
  return (
    <section className="py-12 lg:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Decorative Divider Line */}
        <div className="mb-12 lg:mb-20 h-px bg-linear-to-r from-transparent via-gray-300 to-transparent"></div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 text-center mb-16"
        >
          Field Projects & Case Highlights
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-20"
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group flex flex-col lg:flex-row items-center lg:items-stretch gap-8"
            >
              <div className="relative w-full lg:w-1/2 h-64 overflow-visible">
                <motion.div
                  whileHover={{ rotate: -2, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 150 }}
                  className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden"
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>

              <div className="flex flex-col justify-center lg:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold text-neutral-900 leading-tight">
                  {p.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {p.description}
                </p>
                <motion.button
                onClick={()=>{router.push("/projects")}}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="text-brand-red font-semibold text-sm tracking-wide cursor-pointer"
                >
                  VIEW DETAILS →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
