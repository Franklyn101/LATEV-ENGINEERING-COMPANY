"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RippleButton } from "../shared/button";

export default function NotFoundContent() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-7xl md:text-9xl lg:text-[160px] font-extrabold"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-lg md:text-xl lg:text-2xl my-6 lg:mb-8 text-gray-600 tracking-wide leading-snug"
      >
        We are sorry, but the page you are looking for cannot be found.
        <br />
        You might try searching our site.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        <Link href="/">
          <RippleButton className="uppercase">
            Back To Home
          </RippleButton>
        </Link>
      </motion.div>
    </div>
  );
}
