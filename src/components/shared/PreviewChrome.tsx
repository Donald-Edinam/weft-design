"use client";

import React from "react";
import Link from "next/link";
import { FileText, Layers, ExternalLink, ArrowLeft } from "lucide-react";
import { clsx } from "clsx";

interface PreviewChromeProps {
  systemName: string;
  lines: number;
  sections: number;
  slug: string;
}

export function PreviewChrome({ systemName, lines, sections, slug }: PreviewChromeProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-[48px] bg-[#000000] border-b border-white/10 flex items-center justify-between px-[16px] xl:px-[24px] z-[500] font-sans">
      <div className="flex items-center gap-[16px]">
        <span className="font-[600] text-white text-[14px]">{systemName}</span>
        <div className="h-[14px] w-[1px] bg-white/20" />
        <div className="flex items-center gap-[12px] text-[#A1A1AA] text-[12px] font-mono">
          <span className="flex items-center gap-[6px]">
            <FileText className="w-[12px] h-[12px]" />
            {lines} lines
          </span>
          <span className="flex items-center gap-[6px]">
            <Layers className="w-[12px] h-[12px]" />
            {sections} sections
          </span>
        </div>
      </div>
      <div className="flex items-center gap-[24px] text-[13px] font-[500]">
        <Link 
          href={`/systems/${slug}/DESIGN.md`} 
          className="flex items-center gap-[6px] text-[#EAB308] hover:text-[#CA8A04] transition-colors"
          aria-label={`View DESIGN.md for ${systemName}`}
        >
          <ExternalLink className="w-[14px] h-[14px]" />
          View DESIGN.md
        </Link>
        <Link 
          href="/systems" 
          className="flex items-center gap-[6px] text-[#A1A1AA] hover:text-white transition-colors"
          aria-label="Back to all systems"
        >
          <ArrowLeft className="w-[14px] h-[14px]" />
          All Systems
        </Link>
      </div>
    </div>
  );
}
