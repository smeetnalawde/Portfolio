'use client';

import { useEffect } from 'react';

export function useLockScroll() {
  useEffect(() => {
    // Disable scroll restoration to prevent auto-scrolling
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Always scroll to top on initial load
    window.scrollTo(0, 0);

    // Handle any hash in the URL
    const handleHashChange = () => {
      if (window.location.hash) {
        // Remove the hash without scrolling
        const hash = window.location.hash;
        window.history.replaceState(null, '', ' ');
        
        // If it's a section link, scroll to it after a small delay
        if (hash.startsWith('#')) {
          const element = document.querySelector(hash);
          if (element) {
            // Small timeout to ensure the page has rendered
            setTimeout(() => {
              element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        }
      } else {
        // If no hash, scroll to top
        window.scrollTo(0, 0);
      }
    };

    // Initial check
    handleHashChange();

    // Cleanup function
    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  return null;
}
