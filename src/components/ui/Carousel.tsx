"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

export interface CarouselProps {
  items: React.JSX.Element[];
  initialScroll?: number;
}

export type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
  excerpt?: string;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => { },
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // Added buffer for better detection
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector('.carousel-card')?.clientWidth || 300;
      carouselRef.current.scrollBy({ left: -cardWidth - 32, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector('.carousel-card')?.clientWidth || 300;
      carouselRef.current.scrollBy({ left: cardWidth + 32, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      // Simply check scrollability after closing, don't try to reposition
      setTimeout(() => {
        checkScrollability();
      }, 100);
    }
  };

  // Throttled scroll handler
  const handleScroll = React.useCallback(() => {
    checkScrollability();
  }, []);

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-contain scroll-smooth py-6 [scrollbar-width:none] md:py-10"
          ref={carouselRef}
          onScroll={handleScroll}
        >
          {/* Right fade gradient */}
          <div
            className={cn(
              "absolute right-0 z-1000 h-auto w-[5%] overflow-hidden bg-linear-to-l from-white to-transparent dark:from-black",
            )}
          ></div>

          {/* Left fade gradient */}
          <div
            className={cn(
              "absolute left-0 z-1000 h-auto w-[5%] overflow-hidden bg-linear-to-r from-white to-transparent dark:from-black",
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-6 md:gap-8 lg:gap-10 pl-4 pr-8",
              "mx-auto max-w-7xl",
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                key={"card" + index}
                className="carousel-card rounded-3xl shrink-0"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Navigation Buttons */}
        <div className="mr-10 flex justify-end gap-2 lg:gap-6 mt-4">
          <button
            className="relative z-40 flex h-10 w-10 lg:h-12 lg:w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="size-5 lg:size-6 text-gray-600" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 lg:h-12 lg:w-12 cursor-pointer items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="size-5 lg:size-6 text-gray-600" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export type CardProps = {
  card: Card;
  index: number;
  layout?: boolean;
};

export const Card = ({
  card,
  index,
  layout = false,
}: CardProps) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOnClickOutside(containerRef as React.RefObject<HTMLElement>, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-10000 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
              onClick={handleClose}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-60 flex max-h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-neutral-900 md:flex-row"
            >
              {/* Close Button */}
              <button
                className="absolute right-4 top-4 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-black/80 text-white transition-colors hover:bg-black dark:bg-white/80 dark:text-black dark:hover:bg-white"
                onClick={handleClose}
              >
                <IconX className="h-4 w-4" />
              </button>

              {/* Image Section */}
              <div className="relative h-64 w-full md:h-auto md:w-2/5">
                <BlurImage
                  src={card.src}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-6">
                  <motion.p
                    layoutId={layout ? `category-${card.title}` : undefined}
                    className="text-sm font-medium text-white"
                  >
                    {card.category}
                  </motion.p>
                  <motion.p
                    layoutId={layout ? `title-${card.title}` : undefined}
                    className="mt-1 text-xl font-semibold text-white"
                  >
                    {card.title}
                  </motion.p>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-1 flex-col overflow-y-auto p-6 md:p-8">
                <div className="flex-1">
                  {card.content}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Card Button */}
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="group relative flex h-80 w-64 flex-col items-start justify-end overflow-hidden rounded-3xl bg-gray-100 md:h-96 md:w-80 lg:h-[500px] lg:w-[380px] dark:bg-neutral-900"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 z-20 bg-black/40 transition-all duration-300 group-hover:bg-black/30" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-30 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

        {/* Content */}
        <div className="relative z-40 w-full p-6 text-left">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-sm font-medium text-white/90"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-2 text-xl font-semibold text-white md:text-2xl"
          >
            {card.title}
          </motion.p>
          {/* Testimonial Excerpt */}
          {card.excerpt && (
            <p className="mt-3 line-clamp-3 text-sm text-white/80 md:text-base">
              {card.excerpt}
            </p>
          )}
          {/* Read More Indicator */}
          <div className="mt-4 flex items-center text-sm text-white/70">
            <span>Read more</span>
            <IconArrowNarrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        {/* Background Image */}
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="absolute inset-0 z-10 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </motion.button>
    </>
  );
};

export type BlurImageProps = {
  src: string;
  alt?: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  fill,
  ...rest
}: BlurImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={cn(
        "h-full w-full transition duration-300",
        // isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};