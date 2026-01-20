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
      className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 lg:mb-16 text-center text-gray-900 font-serif"
        >
          Global Presence
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInUp}
            className="bg-linear-to-br from-blue-50 to-white rounded-2xl p-4 md:p-6 lg:p-8 border border-blue-100 shadow-lg"
          >
            <div className="w-full h-64 bg-linear-to-br from-brand-red/10 to-red-600/10 rounded-xl mb-6 flex items-center justify-center">
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
            <h3 className="text-2xl font-bold mb-4 text-brand-red">Worldwide Operations</h3>
            <p className="text-gray-600 mb-4">
              With offices and operations across three states, Latev Engineering delivers
              coiled tubing solutions to energy companies worldwide.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Headquarters: Lagos, Nigeria.</li>
              <li>• Branch Office: Delta State, Nigeria.</li>
              <li>• Branch Office: Rivers State, Nigeria.</li>

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