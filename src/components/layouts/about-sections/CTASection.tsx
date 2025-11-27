'use client';

import { RippleButton } from '@/components/shared/button';
import { motion } from 'framer-motion';
import { MessageCircle, FileText } from 'lucide-react';
import Link from 'next/link';

const CTASection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <motion.section
      initial="initial"
      animate="animate"
      className="max-w-6xl mx-4 lg:mx-auto rounded-2xl mb-8 py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-brand-red to-red-900 shadow-2xl"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-serif font-bold mb-8 text-white"
        >
          Ready to Transform Your Well Operations?
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-xl text-red-100 mb-12 leading-relaxed"
        >
          Join the growing list of energy companies that trust Latev Engineering for their
          coiled tubing needs. Contact us today to discuss how we can optimize your operations.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link href="/contact">
            <RippleButton
              variant={"secondary"}
              className="group hover:bg-white/20 hover:text-white transition-all duration-300 border-2 border-transparent hover:border-white/30"
            >
              <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
              Contact Our Team
            </RippleButton>
          </Link>

          <Link href="/Latev Engineering Company Brochure.pdf" download={"/Latev Engineering Company Brochure.pdf"} target="_blank" rel="noopener noreferrer">
          <RippleButton
            variant={"secondary"}
            className="group hover:bg-white/20 hover:text-white transition-all duration-300 border-2 border-transparent hover:border-white/30"
          >
            <FileText className="w-5 h-5 transition-transform group-hover:scale-110" />
            Download Brochure
          </RippleButton>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTASection;