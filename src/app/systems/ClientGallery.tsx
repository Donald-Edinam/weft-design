"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, Layers, Shield, ArrowRight, ExternalLink } from "lucide-react";
import { systems } from "@/lib/systems";

export function ClientGallery() {
  return (
    <main className="min-h-screen bg-[var(--weft-white)] pt-[128px] pb-32">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-12">
        {/* Header */}
        <div className="mb-[48px]">
          <h1 className="font-display font-[700] text-[48px] text-[var(--weft-black)] leading-[1.2]">
            Design Systems
          </h1>
          <p className="font-sans text-[17px] text-[var(--weft-gray-600)] mt-2">
            8 archetypes. Drop one in your project root.
          </p>
        </div>

        {/* Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } }
          }}
        >
          {systems.map((system) => (
            <motion.div
              key={system.slug}
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
              }}
            >
              <Link 
                href={`/systems/${system.slug}`}
                className="group block bg-white border border-[var(--weft-gray-100)] rounded-none overflow-hidden transition-all duration-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = system.primaryColor; }} 
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--weft-gray-100)'; }}
              >
                {/* Top strip */}
                <div className="h-[8px] w-full" style={{ backgroundColor: system.primaryColor }} />
                
                {/* Content */}
                <div className="p-[32px]">
                  <h2 className="font-display font-[600] text-[24px] text-[var(--weft-black)]">
                    {system.name}
                  </h2>
                  <p className="font-sans font-[400] text-[15px] italic text-[var(--weft-gray-600)] mt-[4px]">
                    {system.tagline}
                  </p>
                  <p className="font-sans font-[400] text-[14px] text-[var(--weft-gray-400)] mt-[12px] line-clamp-2">
                    {system.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="mt-[16px] flex flex-wrap gap-[8px]">
                    {system.tags.map(tag => (
                      <span key={tag} className="font-mono text-[11px] text-[var(--weft-gray-600)] border border-[var(--weft-gray-200)] px-[10px] py-[3px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Bottom Row */}
                  <div className="mt-[24px] flex items-center justify-between">
                    <div className="flex items-center gap-[12px] font-mono text-[12px] text-[var(--weft-gray-400)] hide-mobile-flex">
                      <div className="flex items-center">
                        <FileText className="w-[12px] h-[12px] mr-[4px]" />
                        {system.lines} lines
                      </div>
                      <div className="flex items-center">
                        <Layers className="w-[12px] h-[12px] mr-[4px]" />
                        {system.sections} sections
                      </div>
                      <div className="flex items-center hidden sm:flex">
                        <Shield className="w-[12px] h-[12px] mr-[4px]" />
                        {system.compliance}
                      </div>
                    </div>
                    
                    <div 
                      className="flex items-center font-sans font-[500] text-[14px] ml-auto shrink-0"
                      style={{ color: system.primaryColor }}
                    >
                      Preview
                      <ArrowRight className="w-[14px] h-[14px] ml-1 group-hover:translate-x-[4px] transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <div className="pt-[64px] flex flex-col items-center">
          <h3 className="font-display font-[500] text-[20px] text-[var(--weft-black)] mb-4">
            Want to build your own?
          </h3>
          <a 
            href="https://github.com/Donald-Edinam/weft-design" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-sans text-[15px] text-[var(--weft-gray-600)] hover:text-[var(--weft-black)] transition-colors underline underline-offset-4 decoration-[var(--weft-gray-200)] hover:decoration-[var(--weft-black)]"
          >
            Use the blank template.
            <ExternalLink className="w-[14px] h-[14px] ml-2" />
          </a>
        </div>
      </div>
    </main>
  );
}
