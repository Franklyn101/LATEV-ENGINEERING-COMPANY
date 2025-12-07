"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Testimonial } from "@/data/testimonials-data";
import { desktopVariants } from "@/animations/testimonial-animation-variants";

interface Props {
  visibleTestimonials: Testimonial[];
  currentIndex: number;
  isAnimating: boolean;
  onPrevSlide: () => void;
  onNextSlide: () => void;
}

export default function TestimonialMediumCarousel({
  visibleTestimonials,
  currentIndex,
  isAnimating,
  onPrevSlide,
  onNextSlide
}: Props) {
  return (
    <>
      <div className="relative overflow-hidden md:h-[460px]">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            variants={desktopVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 grid grid-cols-2 gap-4"
          >
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow duration-300 h-full flex flex-col"
              >
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-brand-red" />
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed grow">
                  "{testimonial.content}"
                </p>

                <div className="pt-4 border-t border-gray-100">
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <div className="flex flex-col gap-0.5 mt-1">
                    <span className="text-gray-600 text-sm">
                      {testimonial.position}
                    </span>
                    <span className="text-brand-red font-medium text-sm">
                      {testimonial.company}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {testimonial.toolsUsed.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-8 mt-6">
        <button
          onClick={onPrevSlide}
          disabled={isAnimating}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 hover:border-brand-red disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        <span className="text-sm text-gray-500">
          {currentIndex + 1} / {visibleTestimonials.length}
        </span>

        <button
          onClick={onNextSlide}
          disabled={isAnimating}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 hover:border-brand-red disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </>
  );
}
