'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
const AIChatbot = dynamic(() => import("@/components/main/ai-chatbot").then(m => m.AIChatbot), { ssr: false });

export default function Home() {
  const [hydrated, setHydrated] = useState(false);
  const [showChat, setShowChat] = useState(false);
  useEffect(() => {
    // Disable all auto-scrolling behaviors
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Clear any hash from URL without scrolling
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    
    // Mark hydrated and mount chat immediately (no defer)
    setHydrated(true);
    setShowChat(true);

    // Cleanup
    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
      // no timers to clear
    };
  }, []);
  return (
    <main className="h-full w-full overflow-anchor-none">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        {showChat && (
        <section id="ai-assistant" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-anchor-none">
          <div className="absolute inset-0 -z-10">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/encryption-bg.webm" type="video/webm" />
            </video>
            {/* Gradient overlay removed for full transparency */}
          </div>
          {hydrated ? <AIChatbot /> : null}
        </section>
        )}
        <Projects />
      </div>
    </main>
  );
}
