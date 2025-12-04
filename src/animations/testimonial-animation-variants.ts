import { Variants } from 'framer-motion';

export const desktopVariants: Variants = {
  enter: { 
    x: '100%',
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
  exit: {
    x: '-100%',
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

export const mobileVariants: Variants = {
  enter: { 
    x: 300,
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: {
    x: -300,
    opacity: 0,
    transition: {
      duration: 0.3,
    }
  },
};