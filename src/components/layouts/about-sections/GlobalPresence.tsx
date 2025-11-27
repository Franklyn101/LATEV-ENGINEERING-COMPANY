'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const GlobalPresence = () => {
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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900"
        >
          Global Presence
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInUp}
            className="bg-linear-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 shadow-lg"
          >
            <div className="w-full h-64 bg-linear-to-br from-brand-red/10 to-red-600/10 rounded-xl mb-6 flex items-center justify-center">
              <span className="text-gray-500 text-lg">World Map with Office Locations</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-brand-red">Worldwide Operations</h3>
            <p className="text-gray-600 mb-4">
              With offices and operations across three continents, Latev Engineering delivers
              coiled tubing solutions to energy companies worldwide.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Headquarters: Houston, Texas</li>
              <li>• Middle East Office: Dubai, UAE</li>
              <li>• Asia Pacific Office: Singapore</li>
              <li>• European Operations: Aberdeen, UK</li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Reach</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-2xl mr-4 text-brand-red">🌍</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Global Projects</h4>
                  <p className="text-gray-600">Successfully completed projects in over 15 countries</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-2xl mr-4 text-brand-red">⛴️</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Offshore Expertise</h4>
                  <p className="text-gray-600">Specialized solutions for deepwater and offshore operations</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-2xl mr-4 text-brand-red">🤝</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Local Partnerships</h4>
                  <p className="text-gray-600">Strong network of local partners ensuring seamless operations</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default GlobalPresence;