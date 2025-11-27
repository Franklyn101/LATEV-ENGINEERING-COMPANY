'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CoreValues = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const values = [
    {
      title: "Innovation",
      description: "Continuously pushing boundaries in coiled tubing technology",
      icon: "💡"
    },
    {
      title: "Safety",
      description: "Zero compromise on safety standards and environmental protection",
      icon: "🛡️"
    },
    {
      title: "Excellence",
      description: "Commitment to delivering superior quality in every project",
      icon: "⭐"
    },
    {
      title: "Partnership",
      description: "Building long-term relationships based on trust and mutual success",
      icon: "🤝"
    }
  ];

  return (
    <motion.section
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900"
        >
          Our Core Values
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-lg p-6 border border-gray-200 hover:border-red-300 hover:shadow-xl hover:shadow-red-200/70 transition-all duration-300 text-center"
            >
              <div className="text-3xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-brand-red">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CoreValues;