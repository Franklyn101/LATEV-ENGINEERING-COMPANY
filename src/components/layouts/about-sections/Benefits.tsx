'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Benefits = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const benefits = [
    {
      title: "Live Well Operations",
      description: "Enables intervention without halting production",
      icon: "⚡"
    },
    {
      title: "Cost & Time Efficiency",
      description: "Reduces downtime and speeds up execution",
      icon: "⏱️"
    },
    {
      title: "Pressure Control",
      description: "Safe deployment under pressurized well conditions",
      icon: "🛡️"
    },
    {
      title: "Compact & Versatile",
      description: "Ideal for space-limited or offshore locations",
      icon: "🏗️"
    },
    {
      title: "Customizable Solutions",
      description: "All tools are adaptable to meet specific client needs",
      icon: "🔧"
    },
    {
      title: "Technical Expertise",
      description: "Decades of combined experience in coiled tubing",
      icon: "🎯"
    }
  ];

  return (
    <motion.section
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold mb-10 lg:mb-16 text-center text-gray-900"
        >
          Why Choose Latev Engineering?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:border-brand-red/30 transition-all duration-300"
            >
              <div className="text-2xl mb-3">{benefit.icon}</div>
              <div className="text-brand-red text-lg font-semibold mb-3">
                {benefit.title}
              </div>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Benefits;