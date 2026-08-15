import { motion, AnimatePresence } from 'framer-motion';

/**
 * Mobile navigation dropdown menu with animated height/opacity transitions.
 */
export function MobileMenu({ isOpen, links, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="md:hidden border-t border-gray-100 bg-surface px-4 py-4 space-y-3 overflow-hidden shadow-lg"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="block px-3 py-2 rounded-md font-medium text-textMuted hover:text-primary hover:bg-gray-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
