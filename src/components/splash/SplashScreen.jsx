import { motion } from 'framer-motion';
import { splashContainerVariants, splashLetterContainer, splashLetter } from '../../utils/animations';

/**
 * SplashScreen component displayed during initial application load.
 */
export function SplashScreen() {
  return (
    <motion.div
      key="splash"
      variants={splashContainerVariants}
      initial="hidden"
      exit="exit"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-surface"
      aria-label="Loading AUK Portfolio"
    >
      <motion.div 
        variants={splashLetterContainer} 
        initial="hidden" 
        animate="visible" 
        className="flex font-display text-7xl md:text-9xl font-black tracking-tight text-textMain select-none"
      >
        <motion.span variants={splashLetter}>A</motion.span>
        <motion.span variants={splashLetter}>U</motion.span>
        <motion.span variants={splashLetter}>K</motion.span>
      </motion.div>
    </motion.div>
  );
}
