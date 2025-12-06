import { mobileVariants } from '@/animations/testimonial-animation-variants';
import { Testimonial } from '@/data/testimonials-data';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialMobileCarouselProps {
  testimonials: Testimonial[];
  currentIndex: number;
  isAnimating: boolean;
  onPrevSlide: () => void;
  onNextSlide: () => void;
}

export default function TestimonialMobileCarousel({
  testimonials,
  currentIndex,
  isAnimating,
  onPrevSlide,
  onNextSlide
}: TestimonialMobileCarouselProps) {
  return (
    <>
      <div className="relative h-[420px]">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            variants={mobileVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <div className="bg-white rounded-lg p-6 border border-gray-200 h-full flex flex-col">
              <div className="mb-4">
                <Quote className="w-8 h-8 text-brand-red" />
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed grow">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-bold text-gray-900">
                  {testimonials[currentIndex].name}
                </h4>
                <div className="flex flex-col gap-0.5 mt-1">
                  <span className="text-gray-600 text-sm">
                    {testimonials[currentIndex].position}
                  </span>
                  <span className="text-brand-red font-medium text-sm">
                    {testimonials[currentIndex].company}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {testimonials[currentIndex].toolsUsed.map((tool) => (
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
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-6 mt-6">
        <button
          onClick={onPrevSlide}
          disabled={isAnimating}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 hover:border-brand-red disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        <div className="text-center">
          <span className="text-sm text-gray-500">
            {currentIndex + 1} / {testimonials.length}
          </span>
        </div>

        <button
          onClick={onNextSlide}
          disabled={isAnimating}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-300 hover:border-brand-red disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </>
  );
}