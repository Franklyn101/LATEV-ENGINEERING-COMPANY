'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MissionVision = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
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
          className="text-3xl md:text-4xl font-serif font-bold mb-10 lg:mb-16 text-center text-gray-900"
        >
          Our Mission & Vision
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            variants={fadeInUp}
            className="bg-linear-to-br from-blue-50 to-white rounded-2xl p-4 md:p-6 lg:p-8 border border-blue-100 shadow-lg"
          >
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-4 text-brand-red">Our Mission</h3>
            <p className="text-gray-600 text-lg">
              To deliver innovative, reliable, and efficient coiled tubing solutions that empower
              our clients to maximize well productivity while ensuring operational safety and
              environmental responsibility.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-linear-to-br from-red-50 to-white rounded-2xl p-4 md:p-6 lg:p-8 border border-red-100 shadow-lg"
          >
            <div className="text-4xl mb-4">🔭</div>
            <h3 className="text-2xl font-bold mb-4 text-brand-red">Our Vision</h3>
            <p className="text-gray-600 text-lg">
              To be the global leader in coiled tubing technology, setting new standards for
              innovation, safety, and sustainability in well intervention operations worldwide.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default MissionVision;