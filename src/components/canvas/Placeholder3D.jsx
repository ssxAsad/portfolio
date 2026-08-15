import { motion } from 'framer-motion';
import { easeCustom, floatAnimation, pulseGlowAnimation } from '../../utils/animations';

/**
 * 3D visual container and placeholder frame for upcoming 3D Three.js canvas.
 */
export function Placeholder3D() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.25, ease: easeCustom }}
      className="relative flex items-center justify-center w-full min-h-[320px] md:min-h-[500px]"
    >
      {/* Decorative ambient background blur with subtle breathing motion */}
      <motion.div 
        animate={pulseGlowAnimation.animate}
        transition={pulseGlowAnimation.transition}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] aspect-square bg-primary/15 rounded-full blur-3xl -z-10 pointer-events-none"
      />

      {/* Floating Circular Frame */}
      <motion.div
        animate={floatAnimation.animate}
        transition={floatAnimation.transition}
        whileHover={{ scale: 1.02 }}
        className="relative w-full max-w-[380px] aspect-square rounded-full border border-gray-100 bg-gradient-to-tr from-gray-50 to-white shadow-2xl shadow-primary/10 p-6 flex items-center justify-center transition-shadow hover:shadow-primary/20"
      >
        {/* Inner dashed boundary */}
        <div className="w-full h-full rounded-full border-2 border-dashed border-gray-200 flex flex-col items-center justify-center bg-surface/50 overflow-hidden backdrop-blur-sm transition-colors hover:border-primary/40 group">
          
          {/* 3D Cube Placeholder Icon */}
          <motion.svg 
            whileHover={{ rotate: 12, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="w-12 h-12 text-gray-300 group-hover:text-primary/60 transition-colors mb-3" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
          </motion.svg>
          
          <span className="text-textMuted/60 group-hover:text-textMuted transition-colors text-xs font-semibold tracking-[0.2em] uppercase font-sans text-center px-4">
            3D Canvas Space
          </span>

        </div>
      </motion.div>
    </motion.div>
  );
}
