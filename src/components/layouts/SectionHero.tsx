"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeroProps {
  imageUrl?: string;
  title?: string;
  subtitle?: string;
  overlayOpacity?: number;
}

export const SectionHero: React.FC<SectionHeroProps> = ({
  imageUrl,
  title,
  subtitle,
  overlayOpacity = 0.4
}) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative h-[550px] lg:h-[700px] w-full"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
      />
      
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-snug mb-4 lg:mb-6"
          >
            {title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl font-light text-gray-200 md:leading-snug"
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};