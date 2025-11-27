'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Certifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management System" },
    { name: "API Q2", description: "Quality Management for Service Providers" },
    { name: "ISO 14001", description: "Environmental Management" },
    { name: "OHSAS 18001", description: "Occupational Health & Safety" }
  ];

  return (
    <motion.section
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900"
        >
          Certifications & Standards
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-red font-bold text-xl">✓</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
              <p className="text-gray-600 text-sm">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;