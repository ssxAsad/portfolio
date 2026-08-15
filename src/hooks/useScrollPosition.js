import { useState, useEffect } from 'react';

/**
 * Custom hook to track window scroll position for dynamic UI states (e.g. navbar glass/elevation).
 * @returns {number} scrollY
 */
export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
}
