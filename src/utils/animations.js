// Central motion tokens and Framer Motion animation variants

export const easeCustom = [0.16, 1, 0.3, 1];
export const easeExit = [0.4, 0, 0.2, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: easeCustom } 
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

export const splashContainerVariants = {
  hidden: { opacity: 1 },
  exit: { 
    opacity: 0, 
    y: -24,
    scale: 0.98,
    transition: { duration: 0.55, ease: easeExit }
  }
};

export const splashLetterContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.3 }
  }
};

export const splashLetter = {
  hidden: { opacity: 0, y: 28, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.65, ease: easeCustom } 
  }
};

export const navVariants = {
  hidden: { y: -80, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: easeCustom }
  }
};

export const floatAnimation = {
  animate: { y: [-8, 8, -8] },
  transition: { repeat: Infinity, duration: 6, ease: 'easeInOut' }
};

export const pulseGlowAnimation = {
  animate: { 
    scale: [1, 1.08, 1],
    opacity: [0.12, 0.2, 0.12]
  },
  transition: { 
    repeat: Infinity, 
    duration: 6, 
    ease: 'easeInOut' 
  }
};
