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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6044067193684!2d3.4654553752403463!3d6.444810893546526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4519a5a36fb%3A0x4d9b359ad7e2ca24!2s16B%20Grace%20Anjous%20Dr%2C%20off%20Adebayo%20Doherty%20Road%2C%20off%20Admiralty%20Way%2C%20Lekki%20Phase%201%2C%20Lagos%20105102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1765123489729!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};