'use client';

import { RippleButton } from '@/components/shared/button';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const HeroBanner = () => {
  const router = useRouter();
  
  return (
    <section 
      className="bg-[#f7f7f7] relative w-full min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-fixed bg-no-repeat md:bg-cover bg-center"
      style={{
        backgroundImage: 'url(/images/about-banner-bg.svg)',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/0" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-7xl font-bold text-black mb-6 leading-tight"
        >
          Engineering Excellence
          <span className="block text-brand-red">in Every Operation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-black/90 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Delivering innovative coiled tubing solutions that set new standards 
          for safety, efficiency, and reliability in well intervention
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <RippleButton onClick={()=>{router.push('/contact')}}>
            Get in Touch Today
          </RippleButton>
          
          <RippleButton onClick={()=>{router.push('/services')}} variant={"outline"} className='text-black border-gray-300'>
            Learn More About What we DO
          </RippleButton>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;