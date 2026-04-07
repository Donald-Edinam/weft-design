"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ExternalLink } from "lucide-react";
import { clsx } from "clsx";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 h-[64px] z-50 transition-colors duration-200",
        scrolled ? "bg-[var(--weft-white)] border-b border-[var(--weft-gray-200)]" : "bg-transparent"
      )}
    >
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-12 h-full flex items-center justify-between">
        <Link 
          href="/" 
          className={clsx(
            "font-display font-bold tracking-tight text-[24px] transition-colors duration-200",
            scrolled ? "text-[var(--weft-black)]" : "text-[var(--weft-white)]"
          )}
        >
          Weft<span className="text-[var(--weft-gold)]">.</span>Design
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            href="/systems" 
            className={clsx(
              "font-sans text-[14px] font-[500] uppercase tracking-[0.5px] transition-colors duration-200",
              scrolled ? "text-[var(--weft-black)] hover:text-[var(--weft-gold-hover)]" : "text-[var(--weft-white)] hover:text-[var(--weft-gold)]"
            )}
          >
            Systems
          </Link>
          <a 
            href="https://github.com/Donald-Edinam/weft-design" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={clsx(
              "font-sans text-[14px] font-[500] uppercase tracking-[0.5px] transition-colors duration-200 flex items-center gap-1",
              scrolled ? "text-[var(--weft-black)] hover:text-[var(--weft-gold-hover)]" : "text-[var(--weft-white)] hover:text-[var(--weft-gold)]"
            )}
          >
            GitHub <ExternalLink className="w-[14px] h-[14px]" />
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={clsx(
            "md:hidden transition-colors duration-200",
            scrolled ? "text-[var(--weft-black)]" : "text-[var(--weft-white)]"
          )}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden absolute top-[64px] left-0 right-0 bg-[var(--weft-white)] border-b border-[var(--weft-gray-200)] px-4 py-4 flex flex-col gap-4 shadow-sm">
          <Link 
            onClick={() => setMobileOpen(false)} 
            href="/systems" 
            className="font-sans text-[14px] font-[500] uppercase tracking-[0.5px] text-[var(--weft-black)] hover:text-[var(--weft-gold-hover)] transition-colors"
          >
            Systems
          </Link>
          <a 
            href="https://github.com/Donald-Edinam/weft-design" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-sans text-[14px] font-[500] uppercase tracking-[0.5px] text-[var(--weft-black)] hover:text-[var(--weft-gold-hover)] transition-colors flex items-center gap-1"
          >
            GitHub <ExternalLink className="w-[14px] h-[14px]" />
          </a>
        </div>
      )}
    </header>
  );
}
