"use client";
import  { JSX, useState } from "react";
import { RippleButton } from "../shared/button";
import { motion } from "framer-motion";

export const serviceItems = [
  {
    title: "Oilfield Construction & Infrastructure Development",
    description:
      "We deliver complete oilfield construction solutions engineered for demanding field conditions. From land preparation to full facility build-outs, our work meets the highest safety and reliability standards.",
    image: "/images/spiralduct.jpg",
  },
  {
    title: "Pipeline Construction & Maintenance",
    description:
      "We provide precision pipeline installation, welding, testing, and long-term maintenance to ensure safe and efficient transport of oil and gas across all terrains.",
    image: "/images/siteimages/99.jpeg",
  },
  {
    title: "Substation & Electrical Systems Installation",
    description:
      "Our team designs and installs high-voltage electrical systems for oilfields, ensuring reliability, efficiency, and safety in every project.",
    image: "/images/spiralduct2.jpg",
  },
  {
    title: "Drilling Equipment Setup & Maintenance",
    description:
      "We specialize in assembling, testing, and maintaining advanced drilling equipment for maximum performance and minimal downtime.",
    image: "/images/siteimages/50.jpeg",
  },
  {
    title: "Environmental Management & Site Reclamation",
    description:
      "Our environmental teams ensure oilfield projects meet regulatory standards, including waste management, site reclamation, and sustainable practices.",
    image: "/images/siteimages/40.jpeg",
  },
  {
    title: "Pipeline Inspection & Leak Detection",
    description:
      "We provide advanced pipeline inspection, monitoring, and leak detection services to prevent operational issues and environmental hazards.",
    image: "/images/siteimages/20.jpeg",
  },
  {
    title: "Wellhead & Facility Maintenance",
    description:
      "Comprehensive maintenance services for wellheads and oilfield facilities, ensuring continuous operation and minimizing downtime.",
    image: "/images/siteimages/piledril.jpeg",
  },
   {
    title: "Wellhead & Facility Maintenance",
    description:
      "Comprehensive maintenance services for wellheads and oilfield facilities, ensuring continuous operation and minimizing downtime.",
    image: "/images/siteimages/70.jpeg",
  },
   {
    title: "Wellhead & Facility Maintenance",
    description:
      "Comprehensive maintenance services for wellheads and oilfield facilities, ensuring continuous operation and minimizing downtime.",
    image: "/images/siteimages/lightvan.jpeg",
  },
];

export default function ServiceSection(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(serviceItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = serviceItems.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="py-20 space-y-12">
      {/* <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 space-y-8"
          > */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 lg:mb-12"
            >
      {currentItems.map((item, index) => {
        const isReversed = (startIndex + index) % 2 === 1;
        return (
          <div
            key={startIndex + index}
            className={`container px-3 mx-auto flex flex-col md:flex-row items-center gap-14 ${
              isReversed ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2 w-full">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-xl shadow-xl w-full object-cover h-[350px] md:h-[420px]"
              />
            </div>
            <div className="md:w-1/2 w-full">
              <h2 className="text-4xl font-serif font-bold mb-5 text-gray-800 leading-tight">
                {item.title}
              </h2>
              <p className="text-lg text-gray-600 font-sans mb-6 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}

     
      <div className="flex justify-center items-center gap-3 mt-10 flex-wrap">
        <RippleButton
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded bg-gray-300 text-gray-700 disabled:opacity-50"
        >
          Previous
        </RippleButton>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <RippleButton
            key={page}
            onClick={() => goToPage(page)}
            className={`px-4 py-2 rounded ${
              currentPage === page
                ? "bg-brand-red text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {page}
          </RippleButton>
        ))}

        <RippleButton
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded bg-gray-300 text-gray-700 disabled:opacity-50"
        >
          Next
        </RippleButton>
      </div>
       </motion.div>
    </section>
  );
}

