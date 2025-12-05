
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
    // optionally set a decline cookie, or just close banner
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
          className="fixed bottom-6 left-4 right-4 md:left-auto md:right-6 lg:right-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50"
        >
          <h2 className="text-lg font-sans font-semibold mb-2">We Value Your Privacy</h2>
          <p className="text-sm mb-4 font-serif">
            We use cookies to give you the best browsing experience, to analyse site traffic, and to personalise content. Manage your preferences or accept cookies to continue.
          </p>
          <div className="flex flex-col sm:flex-row justify-end gap-3">
            <RippleButton
              onClick={decline}
              className="px-4 py-2 bg-transparent font-serif border border-gray-500 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Decline
            </RippleButton>
            <RippleButton
              onClick={accept}
              className="px-4 py-2 bg-brand-red font-serif text-white rounded-md transition"
            >
              Accept
            </RippleButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
