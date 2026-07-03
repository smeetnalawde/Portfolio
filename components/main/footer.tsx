'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  const pathname = usePathname();
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
    const isHashLink = href.startsWith('#');
    
    if (isExternal) {
      return; // Let the default Link behavior handle external links
    }
    
    e.preventDefault();
    
    if (isHashLink) {
      const targetId = href.substring(1);
      if (pathname === '/') {
        // If already on home page, scroll to section
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If on another page, navigate to home with hash
        window.location.href = `/${href}`;
      }
    } else {
      // For internal links without hash, use regular navigation
      window.location.href = href;
    }
  };

  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col items-center"
            >
              <h3 className="font-bold text-base mb-4">{column.title}</h3>
              <div className="flex flex-col items-center">
                {column.data.map(({ icon: Icon, name, link }) => {
                  const isExternal = link.startsWith('http') || link.startsWith('mailto:') || link.startsWith('tel:');
                  
                  return (
                    <Link
                      key={`${column.title}-${name}`}
                      href={link}
                      target={isExternal ? "_blank" : "_self"}
                      rel={isExternal ? "noreferrer noopener" : undefined}
                      className="flex flex-row items-center my-[15px] hover:text-purple-300 transition-colors"
                      onClick={(e) => handleLinkClick(e, link)}
                    >
                      {Icon && <Icon />}
                      <span className="text-sm ml-2">{name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-[20px] text-sm text-center">
          &copy; Smeet Nalawade {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </div>
  );
};
