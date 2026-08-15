import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../utils/animations';
import { siteConfig } from '../../config/site';
import { Button } from '../common/Button';
import { Placeholder3D } from '../canvas/Placeholder3D';

/**
 * Hero Section introducing the developer with CTA actions and 3D visual container.
 */
export function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 max-w-6xl mx-auto flex items-center w-full min-h-[80vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        
        {/* Left Side: Text and Actions */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={fadeUp}
            className="text-5xl md:text-7xl font-display font-bold text-textMain mb-6 leading-tight tracking-tight"
          >
            {siteConfig.title} <br/> 
            <span className="text-primary">{siteConfig.role}</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeUp}
            className="text-lg md:text-xl text-textMuted max-w-2xl mb-8 leading-relaxed font-sans"
          >
            {siteConfig.bio}
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 font-sans items-center">
            <Button href={siteConfig.cta.primary.href} variant="primary">
              {siteConfig.cta.primary.label}
            </Button>
            <Button href={siteConfig.cta.secondary.href} variant="secondary">
              {siteConfig.cta.secondary.label}
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Side: 3D Visual Frame */}
        <Placeholder3D />

      </div>
    </section>
  );
}
