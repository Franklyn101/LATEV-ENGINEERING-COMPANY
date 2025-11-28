'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const CoreValues = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const values = [
    {
      title: "TRUST",
      description: "Our relationships are built on trust and honesty. We are relied upon to do the 'right' thing and to do what we say we will do.",
      icon: "/icons/trust.svg"
    },
    {
      title: "EXCELLENCE",
      description: "We are passionate about delivering excellence in all that we do. We are relentless in our pursuit to be the best and continuously improve.",
      icon: "/icons/excellence.svg"
    },
    {
      title: "ACCOUNTABILITY",
      description: "We own and take full responsibility for the work that we do. We have truly open and honest conversations to ensure we deliver the best results for our clients.",
      icon: "/icons/accountability.svg"
    },
    {
      title: "MOMENTUM",
      description: "We act at pace; always moving forward. We are energetic and resilient in the face of adversity and solve problems as a team.",
      icon: "/icons/momentum.svg"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      <motion.section
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        id="block-icons"
        className="container mx-auto py-12 rounded-lg"
      >
        <div className="text-left mb-8">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-neutral-900">
            Our Core Values
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg md:text-2xl lg:text-2xl text-gray-800 mb-5 lg:mb-8 max-w-2xl">
            TRUST - EXCELLENCE - ACCOUNTABILITY - MOMENTUM
          </motion.p>
        </div>

        <motion.div
          variants={fadeInUp}
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8 text-center"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex flex-col items-center p-6 bg-white rounded-lg"
            >
              <picture>
                <Image
                  src={value.icon}
                  alt={value.title}
                  width={110}
                  height={110}
                  className="w-28 h-auto object-cover"
                  loading="lazy"
                />
              </picture>

              <h3 className="text-2xl font-bold text-primary-900 mt-4">
                {value.title}
              </h3>

              <p className="text-base text-primary-600 mt-2">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      <motion.div
        animate={{
          rotate: 360,
          transition: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
        className="absolute -bottom-40 left-1/4 w-64 h-64 bg-red-400/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          rotate: -360,
          transition: { duration: 25, repeat: Infinity, ease: "linear" }
        }}
        className="absolute -top-1/2 right-0 w-96 h-96 bg-red-400/20 rounded-full blur-3xl"
      />
    </div>
  );
};

export default CoreValues;