'use client';

import { testimonials } from '@/data/testimonials-data';
import { useState, useEffect, useCallback } from 'react';
import TestimonialDesktopCarousel from '../ui/TestimonialDesktopCarousel';
import TestimonialMobileCarousel from '../ui/TestimonialMobileCarousel';
import TestimonialMediumCarousel from '../ui/TestimonialMediumCarousel';

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const visibleCards = 3;

  const getVisibleTestimonials = useCallback(() => {
    const result = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push({
        ...testimonials[index],
        originalIndex: index
      });
    }
    return result;
  }, [currentIndex, visibleCards]);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prev) => {
      const nextIndex = prev + visibleCards;
      return nextIndex >= testimonials.length ? 0 : nextIndex;
    });

    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, visibleCards]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prev) => {
      const prevIndex = prev - visibleCards;
      return prevIndex < 0 ? testimonials.length - (testimonials.length % visibleCards || visibleCards) : prevIndex;
    });

    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, visibleCards]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="py-8 md:py-12 lg:py-16 px-4 lg:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="hidden lg:block">
          <TestimonialDesktopCarousel
            visibleTestimonials={visibleTestimonials}
            currentIndex={currentIndex}
            isAnimating={isAnimating}
            onPrevSlide={prevSlide}
            onNextSlide={nextSlide}
          />
        </div>

        <div className="hidden md:block lg:hidden">
          <TestimonialMediumCarousel
            visibleTestimonials={visibleTestimonials.slice(0, 2)} // show 2
            currentIndex={currentIndex}
            isAnimating={isAnimating}
            onPrevSlide={prevSlide}
            onNextSlide={nextSlide}
          />
        </div>

        <div className="md:hidden">
          <TestimonialMobileCarousel
            testimonials={testimonials}
            currentIndex={currentIndex}
            isAnimating={isAnimating}
            onPrevSlide={prevSlide}
            onNextSlide={nextSlide}
          />
        </div>
      </div>
    </section>
  );
}