"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Menu,
  X,
  ArrowRight,
  Link2
} from "lucide-react";
import { PreviewChrome } from "@/components/shared/PreviewChrome";
import { Playfair_Display, JetBrains_Mono } from "next/font/google";
import { clsx } from "clsx";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["700"],
  variable: "--font-playfair"
});
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"] });

// ----------------------------------------------------------------------
// CSS Tokens per DESIGN.md
// ----------------------------------------------------------------------
const THEME = {
  bg: "#F5F5F0",
  bgDark: "#0A0A0A",
  primary: "#0A0A0A",
  primaryInverse: "#F5F5F0",
  accent: "#E63B2E",
  accentHover: "#CC2E22",
  textPrimary: "#0A0A0A",
  textSecondary: "#52524E",
  textMuted: "#8A8A85",
  textOnDark: "#F5F5F0",
  border: "#D4D4CD",
};

// ----------------------------------------------------------------------
// Mock Data
// ----------------------------------------------------------------------
const CASE_STUDIES = [
  {
    id: 1,
    title: "Aura Skincare",
    category: "Brand Identity",
    color: "#D9D9D2",
    width: "60%",
  },
  {
    id: 2,
    title: "Linear Workspace",
    category: "Digital Experience",
    color: "#E2E2E2",
    width: "40%",
  },
  {
    id: 3,
    title: "Nova Editorial",
    category: "Editorial Design",
    color: "#CECECE",
    width: "40%",
  },
  {
    id: 4,
    title: "Element Objects",
    category: "Product Design",
    color: "#DADADA",
    width: "60%",
  }
];

export default function CreativeAgencyPreview() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={clsx("min-h-screen selection:bg-[#E63B2E] selection:text-white pt-[48px]", playfair.variable)}>
      
      <PreviewChrome 
        systemName="Creative Agency"
        lines={372}
        sections={12}
        slug="creative-agency"
      />

      {/* 
        ========================================================================
        MAIN CONTENT
        ========================================================================
      */}
      <div 
        className="w-full flex flex-col font-sans relative" 
        style={{ backgroundColor: THEME.bg, color: THEME.textPrimary }}
      >
        
        {/* Navigation */}
        <nav 
          className={clsx(
            "fixed top-[48px] left-0 w-full h-[72px] z-[100] transition-all duration-300 px-[80px] hidden lg:flex items-center justify-between border-b border-transparent",
            scrolled && "bg-[#F5F5F0]/80 backdrop-blur-md border-[#D4D4CD]"
          )}
        >
          <div className="flex gap-[32px] w-1/3">
            {["Work", "About"].map(item => (
              <Link key={item} href="#" className="text-[13px] font-[500] uppercase tracking-[1.5px] hover:text-[#E63B2E] transition-colors">
                {item}
              </Link>
            ))}
          </div>
          
          <Link href="#" className="w-1/3 text-center text-[18px] font-[700] tracking-tight">
            Studio
          </Link>

          <div className="flex justify-end gap-[32px] w-1/3">
            {["Contact", "Journal"].map(item => (
              <Link key={item} href="#" className="text-[13px] font-[500] uppercase tracking-[1.5px] hover:text-[#E63B2E] transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile Nav Header */}
        <div className="lg:hidden fixed top-[48px] left-0 w-full h-[72px] px-[24px] flex items-center justify-between z-[100] bg-[#F5F5F0]">
          <span className="text-[18px] font-[700] tracking-tight">Studio</span>
          <button onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-[24px] h-[24px]" />
          </button>
        </div>

        {/* Hero Section */}
        <section className="h-screen flex flex-col items-center justify-center text-center px-[24px] lg:px-[80px]">
          <div className="overflow-hidden mb-[24px]">
            <motion.h1 
              className={clsx("text-[56px] lg:text-[72px] font-[700] leading-[1.05] tracking-[-2px] max-w-[800px]", playfair.className)}
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              {"We make things people remember.".split(" ").map((word, i) => (
                <motion.span 
                  key={i} 
                  className="inline-block mr-[0.3em]"
                  variants={{
                    hidden: { y: 100, opacity: 0 },
                    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-[18px] lg:text-[20px] mb-[48px] text-[#52524E]"
          >
            Brand identity. Digital experience. Editorial design.
          </motion.p>

          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="group flex items-center gap-[12px] text-[14px] font-[500] uppercase tracking-[1.5px]"
          >
            View Work 
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowRight className="w-[18px] h-[18px] group-hover:text-[#E63B2E] transition-colors" />
            </motion.div>
          </motion.button>
        </section>

        {/* Case Study Grid */}
        <section className="px-[24px] lg:px-[80px] pb-[120px]">
          <div className="flex flex-col gap-[80px]">
            {/* Row 1: 60/40 */}
            <div className="flex flex-col lg:flex-row gap-[48px]">
              <ProjectCard project={CASE_STUDIES[0]} />
              <ProjectCard project={CASE_STUDIES[1]} />
            </div>
            {/* Row 2: 40/60 */}
            <div className="flex flex-col lg:flex-row gap-[48px]">
              <ProjectCard project={CASE_STUDIES[2]} />
              <ProjectCard project={CASE_STUDIES[3]} />
            </div>
          </div>
        </section>

        {/* Dark CTA Section */}
        <section className="bg-[#0A0A0A] py-[160px] px-[24px] text-center flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={clsx("text-[40px] lg:text-[48px] font-[700] text-[#F5F5F0] mb-[32px]", playfair.className)}
          >
            Let's make something.
          </motion.h2>
          <motion.a 
            href="mailto:hello@studio.com"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[18px] lg:text-[24px] text-[#F5F5F0] underline underline-offset-8 hover:text-[#E63B2E] transition-colors duration-300"
          >
            hello@studio.com
          </motion.a>
        </section>

        {/* Footer */}
        <footer className="bg-[#0A0A0A] border-t border-white/10 py-[80px] px-[24px] lg:px-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[48px] mb-[64px]">
            <div>
              <span className="text-[14px] font-[600] uppercase tracking-[2px] text-[#8A8A85] mb-[24px] block">Social</span>
              <div className="flex flex-col gap-[12px]">
                {[
                  { Icon: Link2, label: "Twitter" },
                  { Icon: Link2, label: "Instagram" },
                  { Icon: Link2, label: "Linkedin" }
                ].map((item, idx) => (
                  <Link key={idx} href="#" className="flex items-center gap-[12px] text-[#F5F5F0] hover:text-[#E63B2E] transition-colors">
                    <item.Icon className="w-[18px] h-[18px]" />
                    <span className="text-[14px]">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <span className="text-[14px] font-[600] uppercase tracking-[2px] text-[#8A8A85] mb-[24px] block">London</span>
              <p className="text-[15px] leading-[1.7] text-[#F5F5F0] max-w-[200px]">
                124-126 Borough High St<br />
                London SE1 1LB
              </p>
            </div>
            <div>
              <span className="text-[14px] font-[600] uppercase tracking-[2px] text-[#8A8A85] mb-[24px] block">New York</span>
              <p className="text-[15px] leading-[1.7] text-[#F5F5F0] max-w-[200px]">
                236 5th Avenue<br />
                New York, NY 10001
              </p>
            </div>
          </div>
          
          <div className={clsx("flex justify-between items-center text-[12px] text-[#8A8A85]", jetbrainsMono.className)}>
            <span>© 2026 STUDIO</span>
            <span>TYPE IS ARCHITECTURE</span>
          </div>
        </footer>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[300] bg-[#0A0A0A] flex flex-col p-[24px]"
            >
              <div className="flex justify-between items-center mb-[80px]">
                <span className="text-[18px] font-[700] text-white">Studio</span>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X className="w-[24px] h-[24px] text-white" />
                </button>
              </div>
              <div className="flex flex-col gap-[32px] items-center">
                {["Work", "About", "Contact", "Journal"].map(item => (
                  <Link 
                    key={item} 
                    href="#" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[32px] font-[700] text-white hover:text-[#E63B2E] transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: typeof CASE_STUDIES[0] }) {
  return (
    <motion.div 
      className="flex flex-col shadow-none w-full"
      style={{ flexBasis: "100%" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex flex-col lg:contents" style={{ flexBasis: project.width } as React.CSSProperties}>
        <div className="aspect-[16/10] overflow-hidden mb-[24px] transition-all duration-500 hover:scale-[1.03]" style={{ backgroundColor: project.color }}>
          {/* In a real app we'd have images here */}
        </div>
        <div className="flex flex-col">
          <span className={clsx("text-[12px] font-[500] uppercase tracking-[0.5px] text-[#8A8A85] mb-[16px]", jetbrainsMono.className)}>
            {project.category}
          </span>
          <h3 className={clsx("text-[32px] font-[700] mb-[8px] tracking-tight", playfair.className)}>
            {project.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}
