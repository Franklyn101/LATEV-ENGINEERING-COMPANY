'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const CoreServices = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const expandAnimation = {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
    transition: { duration: 0.35, ease: "easeInOut" }
  };

  const productCategories = [
    {
      name: "Engineering maintenace services",
      image: "/images/Civil Engineering.jpg",
      description:
        "Latev Engineering Company Limited has a team of experiences engineers and skilled work force with profound knowledge and exposure in the construction oil and gas industry. They are supplied by relevant equipment and back-up systems capable of handling major refurbishment and turn around maintenance."
    },
    {
      name: "Process & Pipeline Services",
      image: "/images/Pipeline.jpg",
      description:
        "We have a team of qualified and experienced engineers, technicians, operators and technical partners who together can deliver professional expertise and quality service within the specified time and budget. We have a good inventory of all equipment / instruments required for carrying out: pigging, hydro testing, dewatering, drying (using air and nitrogen), nitrogen purging / inerting and nitrogen helium leak testing, and chemical cleaning activities for both offshore and onshore pipeline projects."
    },
    {
      name: "Electrical Services",
      image: "/images/electric.jpg",
      description:
        "We install electricity facilities for businesses and homes. Our team of experts will get the job done right, on time, and within budget. We offer a wide range of services, including: design, installation, and maintenance. We are committed to providing our customers with the highest quality service."
    },
    {
      name: "Mechanical Services",
      image: "/images/mechanical.jpg",
      description:
        "Latev Engineering Company Limited offers the following Mechanical services: Pipe-spool Fabrication, Valve & Pump Overhaul & Repair, Structural Steel, Insulation, Coatings (Painting & surface preparation), Inspections (NDT, PMI and Pressure Testing), Welding and Fabrication."
    },
    {
      name: "Construction Services & Dredging",
      image: "/images/dredge.jpg",
      description:
        "Civil Construction capabilities: Building (Residential and Commercial projects) - Cladding, Refurbishment / Upgrade, General Road construction, Drainages, Fireproofing, Industrial Cleaning, Physical Asset Verification, Sub & Super – Structural Works, Determine all facility, equipment, and material requirements."
    },
    {
      name: "Road Construction Services",
      image: "/images/Clean trench.jpg",
      description:
        "Latev Engineering Company Limited can carry out asphalt and concrete paving for road construction. We are able to perform the majority of the associated works such as water mains, sewers, culvert repairs, earthworks, concrete sidewalks, and curbs and gutters."
    }
  ];

  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <motion.section
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold mb-10 lg:mb-16 text-center text-gray-900"
        >
          Our Core Services
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((product, index) => {
            const [expanded, setExpanded] = useState(false);

            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:border-brand-red/30 transition-all duration-300"
              >
                <div className="relative w-full h-48 bg-linear-to-br from-brand-red/10 to-red-600/10 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <Image
                    alt={product.name}
                    src={product.image}
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="text-brand-red text-lg font-semibold mb-3">
                  {product.name}
                </div>

                <AnimatePresence initial={false}>
                  {!expanded && (
                    <motion.p
                      key="collapsed"
                      {...expandAnimation}
                      className="text-gray-600 mb-2"
                    >
                      {truncateText(product.description)}
                    </motion.p>
                  )}

                  {expanded && (
                    <motion.p
                      key="expanded"
                      {...expandAnimation}
                      className="text-gray-600 mb-2"
                    >
                      {product.description}
                    </motion.p>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => setExpanded(!expanded)}
                  className="text-brand-red font-semibold hover:underline"
                >
                  {expanded ? "Read Less" : "Read More"}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default CoreServices;
