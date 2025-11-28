'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProductsServices = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const productCategories = [
    {
      name: "Connectors",
      description: "High-integrity mechanical solutions for connecting coiled tubing to tools or splicing segments"
    },
    {
      name: "Basic Tools",
      description: "Tools that improve operational control, tool string functionality, and wellbore cleaning"
    },
    {
      name: "Bridge Plugs",
      description: "Reliable solutions for wellbore isolation during interventions"
    },
    {
      name: "Fishing Tools",
      description: "Precision-engineered tools for retrieval of lost or stuck equipment"
    },
    {
      name: "Mills & Impression Tools",
      description: "Effective solutions for milling obstructions and identifying downhole features"
    }
  ];

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
          className="text-3xl md:text-4xl font-bold mb-10 lg:mb-16 text-center text-gray-900"
        >
          Our Core Products
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((product, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:border-brand-red/30 transition-all duration-300"
            >
              <div className="w-full h-32 bg-linear-to-br from-brand-red/10 to-red-600/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 font-medium">{product.name} Image</span>
              </div>
              <div className="text-brand-red text-lg font-semibold mb-3">
                {product.name}
              </div>
              <p className="text-gray-600">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProductsServices;