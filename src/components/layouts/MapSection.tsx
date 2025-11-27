"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface MapSectionProps {
  initialAnimation?: boolean;
}

export const MapSection: React.FC<MapSectionProps> = ({ initialAnimation = true }) => {
  return (
    <motion.div
      initial={initialAnimation ? { opacity: 0, y: 20 } : {}}
      animate={initialAnimation ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.8 }}
      className="mt-16"
    >
      <div className="bg-white rounded lg:border border-gray-200 lg:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Us Here</h2>
        <div className="aspect-w-16 aspect-h-9 rounded overflow-hidden h-64 md:h-96 flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507402.31713771424!2d3.4452352900551904!3d6.511481745193726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf75df5c74367%3A0x6a7e7df9d6c1cd4a!2sLekki%2C%20Lagos!5e0!3m2!1sen!2sng!4v1764033963823!5m2!1sen!2sng"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};