// FIRST LOADER ZOOM IN OUT ANIMATION


// "use client";

// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// interface LoaderProps {
//   isLoading: boolean;
// }

// const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
//   return (
//     <AnimatePresence>
//       {isLoading && (
//         <motion.div
//           className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8 }} // Smooth fade in/out
//         >
//           {/* Logo with subtle scale animation */}
//           <motion.div
//             className="relative w-40 h-40 mb-6"
//             initial={{ scale: 0.8 }}
//             animate={{ scale: 1 }}
//             exit={{ scale: 0.8 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Image
//               src="/images/logo.jpeg" // Replace with Latev Engineering logo
//               alt="Latev Engineering Logo"
//               fill
//               className="object-contain"
//             />
//           </motion.div>

//           {/* Elegant loading indicator: subtle moving line */}
//           <motion.div
//             className="w-24 h-1 bg-red-500 rounded-full overflow-hidden relative"
//             initial={{ scaleX: 0 }}
//             animate={{ scaleX: 1 }}
//             exit={{ scaleX: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.div
//               className="absolute top-0 left-0 w-8 h-1 bg-brand-red rounded-full"
//               animate={{ x: [0, 16, 0] }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 1.2,
//                 ease: "easeInOut",
//               }}
//             />
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Loader;



"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo with subtle scale animation */}
          <motion.div
            className="relative w-52 h-40 lg:w-64 lg:h-52 mb-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.98 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/logo.jpeg" 
              alt="Latev Engineering Logo"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Elegant bouncing dots */}
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block w-3 h-3 bg-brand-red rounded-full"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* <p className="mt-4 text-gray-700 font-medium">Loading, please wait...</p> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
