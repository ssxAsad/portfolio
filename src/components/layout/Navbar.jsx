import { useState } from 'react';
import { motion } from 'framer-motion';
import { navVariants } from '../../utils/animations';
import { siteConfig } from '../../config/site';
import { navigationLinks } from '../../config/navigation';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { MobileMenu } from './MobileMenu';

/**
 * Sticky responsive navigation header.
 */
export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 20;

  return (
    <motion.nav 
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed w-full top-0 left-0 bg-surface/85 backdrop-blur-md z-50 border-b transition-shadow duration-300 ${
        isScrolled ? 'shadow-sm border-gray-200/80' : 'shadow-none border-gray-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a 
          href="#" 
          className="text-2xl font-display font-black tracking-tight text-textMain hover:text-primary transition-colors"
        >
          {siteConfig.brand}
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 text-textMuted font-medium font-sans items-center">
          {navigationLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className="hover:text-primary transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          className="md:hidden p-2 rounded-lg text-textMuted hover:text-textMain hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        links={navigationLinks} 
        onClose={() => setMobileMenuOpen(false)} 
      />
    </motion.nav>
  );
}
