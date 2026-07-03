'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from 'next/navigation';
import { Bot } from 'lucide-react';

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string, pathname: string) => {
  const isHashLink = href.includes('#');
  const isHomePage = pathname === '/';
  
  if (isHashLink) {
    e.preventDefault();
    const [path, hash] = href.split('#');
    
    if (isHomePage) {
      // On home page, scroll to section
      const targetElement = document.getElementById(hash);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    } else {
      // Not on home page, navigate to home with hash
      window.location.href = `/#${hash}`;
    }
  } else if (!isHomePage) {
    // Regular link, prevent default only if it's an internal link
    if (href.startsWith('/')) {
      e.preventDefault();
      window.location.href = href;
    }
  }
};

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname, searchParams]);

  return (
    <div className="w-full h-[80px] fixed top-0 left-0 right-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001499] backdrop-blur-md z-30 px-4 md:px-8 lg:px-12">
      {/* Navbar Container */}
      <div className="w-full max-w-[1800px] mx-auto h-full grid grid-cols-3 items-center px-2 md:px-4">
        {/* Left Section - Name */}
        <div className="flex justify-start">
          <Link
            href="/"
            className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
          >
            Smeet Nalawade
          </Link>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="flex justify-center">
          <div className="hidden md:flex items-center border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] px-8 py-3 rounded-full text-gray-200 text-lg">
            <div className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.title}
                  href={link.link}
                  onClick={(e) => handleNavClick(e, link.link, pathname)}
                  className="cursor-pointer hover:text-[rgb(112,66,248)] transition whitespace-nowrap"
                >
                  {link.title}
                </Link>
              ))}
              <Link
                href={LINKS.sourceCode}
                target="_blank"
                rel="noreferrer noopener"
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition whitespace-nowrap"
              >
                Source Code
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section - Social Icons and Schedule Button */}
        <div className="flex justify-end items-center gap-6">
          {/* Schedule Meeting Button */}
          <Link
            href="https://calendly.com/smeetdn14/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
          >
            <Bot className="h-5 w-5" />
            <span>Schedule a Meeting</span>
          </Link>
          
          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                className="text-white hover:text-[rgb(112,66,248)] transition"
              >
                <Icon className="h-7 w-7" />
              </Link>
            ))}
          </div>

          {/* Hamburger Menu */}
          <button
            className="md:hidden text-white focus:outline-none text-5xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`fixed top-80 left-0 w-full bg-[#030014] transition-all duration-300 ease-in-outer text-gray-300 md:hidden`}>
          {/* Links */}
          <div className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                onClick={(e) => {
                  handleNavClick(e, link.link, pathname);
                  setIsMobileMenuOpen(false);
                }}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
              >
                {link.title}
              </Link>
            ))}
            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Source Code
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-8 w-8 text-white" />
              </Link>
            ))}
          </div>
        </div>
      )}
      </div>
    </div>
  );
};