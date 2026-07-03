import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";
import { Suspense } from "react";
import Script from "next/script";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  interactiveWidget: "resizes-visual"
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <Script id="prevent-auto-scroll" strategy="beforeInteractive">
          {`
            try {
              // 1) Disable browser scroll restoration
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }

              // 2) Remove any hash before the browser performs default anchor scroll
              if (location.hash) {
                var clean = location.pathname + location.search;
                history.replaceState(null, '', clean);
              }

              // 3) Force initial position to top for a short window and suppress programmatic scrolls
              (function(){
                var start = Date.now();
                var duration = 2500; // ms window to keep viewport pinned to top
                // Temporarily disable programmatic scrolling
                var origScrollTo = window.scrollTo.bind(window);
                var origElScrollIntoView = Element.prototype.scrollIntoView;
                Element.prototype.scrollIntoView = function() { /* blocked during startup */ };
                window.scrollTo = function() { /* blocked during startup */ };
                var tick = function() {
                  try { origScrollTo(0, 0); } catch (e) {}
                  if (Date.now() - start < duration) {
                    requestAnimationFrame(tick);
                  }
                };
                requestAnimationFrame(tick);
                // Also temporarily disable wheel/touch scroll during startup
                try {
                  var prevHtmlOverflow = document.documentElement.style.overflow;
                  var prevBodyOverflow = document.body.style.overflow;
                  document.documentElement.style.overflow = 'hidden';
                  document.body.style.overflow = 'hidden';
                  setTimeout(function(){
                    document.documentElement.style.overflow = prevHtmlOverflow;
                    document.body.style.overflow = prevBodyOverflow;
                  }, duration);
                } catch (e) {}
                // Also handle bfcache restores
                window.addEventListener('pageshow', function() {
                  try { origScrollTo(0, 0); } catch (e) {}
                  if (localStorage.getItem('debugScroll') === '1') {
                    console.log('[scroll-debug] pageshow scrollY=', window.scrollY);
                  }
                }, { once: true });
                // Restore functions after the duration
                setTimeout(function(){
                  window.scrollTo = origScrollTo;
                  Element.prototype.scrollIntoView = origElScrollIntoView;
                  if (localStorage.getItem('debugScroll') === '1') {
                    console.log('[scroll-debug] +3s scrollY=', window.scrollY);
                  }
                }, duration + 50);
              })();

              // 4) Block initial focus restoration that can scroll the page to inputs
              (function(){
                var blockFocus = true;
                var unblock = function() { blockFocus = false; };
                // Allow focus after hydration settles
                setTimeout(unblock, 2500);
                window.addEventListener('load', unblock, { once: true });
                document.addEventListener('DOMContentLoaded', function(){
                  // If something is focused already, blur it
                  var ae = document.activeElement;
                  if (ae && ae !== document.body && typeof ae.blur === 'function') ae.blur();
                }, { once: true });
                // During the block window, immediately blur any focused element
                window.addEventListener('focusin', function(e){
                  if (!blockFocus) return;
                  var t = e.target;
                  if (t && t !== document.body && typeof t.blur === 'function') {
                    try { t.blur(); } catch (err) {}
                  }
                }, true);
              })();

              // 5) Optional debug logging
              try {
                if (localStorage.getItem('debugScroll') === '1') {
                  console.log('[scroll-debug] init scrollY=', window.scrollY, 'hash=', location.hash);
                  window.addEventListener('pageshow', function(){
                    console.log('[scroll-debug] pageshow scrollY=', window.scrollY);
                  }, { once: true });
                  window.addEventListener('load', function(){
                    console.log('[scroll-debug] load scrollY=', window.scrollY);
                  }, { once: true });
                  setTimeout(function(){
                    console.log('[scroll-debug] +3s scrollY=', window.scrollY);
                  }, 3000);
                }
              } catch (e) {}
            } catch (err) {}
          `}
        </Script>
      </head>
      <body className={cn(inter.className, "bg-[#030014] min-h-screen flex flex-col")}>
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
        <main className="flex-1 pt-20 relative z-10">
          <StarsCanvas />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
