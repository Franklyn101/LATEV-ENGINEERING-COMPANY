'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CompanyStory = () => {
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
      className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInUp}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 border border-gray-200 shadow-lg">
              <div className="w-full h-64 bg-linear-to-br from-brand-red/10 to-red-600/10 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-gray-500 text-lg">Company Headquarters Image</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-red">Our Foundation</h3>
              <p className="text-gray-600">
                Established with a vision to revolutionize coiled tubing technology, Latev Engineering
                has grown from a local startup to an international leader in well intervention solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                Founded in 2010, <span className="text-brand-red font-semibold">Latev Engineering Services LTD</span> emerged 
                from a simple yet powerful vision: to deliver superior coiled tubing solutions
                that address the evolving challenges of modern well intervention.
              </p>
              <p>
                Our strategic partnership with <span className="text-brand-red font-semibold">Marlin Oil Tools</span> has 
                been instrumental in expanding our capabilities and delivering cutting-edge
                technology to clients worldwide.
              </p>
              <p>
                Today, we operate across multiple continents, serving major energy companies with
                innovative solutions that enhance operational efficiency while maintaining the highest
                safety standards.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CompanyStory;