'use client';

import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-brand-red to-red-100"
        >
          About Latev Engineering
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
        >
          Pioneering Excellence in Coiled Tubing Solutions for Over a Decade
        </motion.p>
      </motion.div>

      {/* Animated background elements */}
      <motion.div
        animate={{
          rotate: 360,
          transition: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-300/50 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          rotate: -360,
          transition: { duration: 25, repeat: Infinity, ease: "linear" }
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-300/50 rounded-full blur-3xl"
      />
    </section>
  );
};

export default HeroSection;