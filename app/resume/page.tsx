'use client';

import { useEffect } from 'react';
import ResumeSection from "@/components/main/resume-section";

export default function ResumePage() {
  useEffect(() => {
    // Disable all auto-scrolling behaviors
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Clear any hash from URL without scrolling
    if (window.location.hash) {
      window.history.replaceState(null, '', '/resume');
    }
    
    // Cleanup
    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  return (
    <main className="min-h-screen w-full bg-[#030014]">
      <ResumeSection />
    </main>
  );
}
