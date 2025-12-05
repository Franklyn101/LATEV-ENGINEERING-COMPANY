
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RippleButton } from "./shared/button";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = document.cookie
      .split(";")
      .map(c => c.trim())
      .some(c => c.startsWith("cookie_consent="));
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    document.cookie = "cookie_consent=true; max-age=" + 365*24*60*60 + "; path=/";
    setVisible(false);
  };

  const decline = () => {
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.35 }}
          className="fixed bottom-6 left-4 right-4 md:left-auto md:right-6 lg:right-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100  p-4 lg:p-6 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 w-full max-w-md"
        >
          <h2 className="text-lg lg:text-xl font-serif font-bold mb-2">We Value Your Privacy</h2>
          <p className="text-sm lg:text-base mb-4 font-sans text-neutral-700">
            We use cookies to give you the best browsing experience, to analyse site traffic, and to personalise content. Manage your preferences or accept cookies to continue.
          </p>
          <div className="flex flex-col sm:flex-row justify-end gap-3">
            <RippleButton variant={"outline"} onClick={decline}>
              Decline
            </RippleButton>
            <RippleButton onClick={accept}>
              Accept
            </RippleButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
