import { useState, useEffect } from 'react';

/**
 * Custom hook to control splash screen visibility timing.
 * @param {number} durationMs - Duration in milliseconds before dismissing splash screen.
 * @returns {boolean} showSplash
 */
export function useSplash(durationMs = 2000) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, durationMs);

    return () => clearTimeout(timer);
  }, [durationMs]);

  return showSplash;
}
