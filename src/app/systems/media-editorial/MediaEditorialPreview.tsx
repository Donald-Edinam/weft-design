"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  FileText, 
  Layers, 
  ExternalLink, 
  ArrowLeft,
  Search,
  Menu,
  Share2,
  Bookmark,
  Sun,
  Moon,
  Sunset,
  ArrowRight,
  Mail,
  Clock
} from "lucide-react";
import { Lora, Source_Serif_4, Inter, JetBrains_Mono } from "next/font/google";
import { clsx } from "clsx";

const lora = Lora({ subsets: ["latin"], weight: ["400", "700"] });
const sourceSerif = Source_Serif_4({ subsets: ["latin"], weight: ["400", "600"], style: ["normal", "italic"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400"] });

// ----------------------------------------------------------------------
// THEME Tokens per DESIGN.md
// ----------------------------------------------------------------------
const THEMES = {
  light: {
    bg: "#FFFFFF",
    bgWarm: "#FAF9F7",
    textPrimary: "#1A1A1A",
    textSecondary: "#555555",
    textMuted: "#999999",
    border: "#E8E8E8",
    accent: "#D64045",
  },
  sepia: {
    bg: "#F4EDDF",
    bgWarm: "#E8E1D1",
    textPrimary: "#3D3229",
    textSecondary: "#5C4B3D",
    textMuted: "#8C7A6B",
    border: "#DED3BC",
    accent: "#B83438",
  },
  dark: {
    bg: "#131313",
    bgWarm: "#1C1C1C",
    textPrimary: "#D4D4D4",
    textSecondary: "#A0A0A0",
    textMuted: "#666666",
    border: "#2A2A2A",
    accent: "#E8696D",
  }
};

export default function MediaEditorialPreview() {
  const [readingMode, setReadingMode] = useState<"light" | "sepia" | "dark">("light");
  const [activeView, setActiveView] = useState<"list" | "article">("list");
  const currentTheme = THEMES[readingMode];
  
  const { scrollYProgress } = useScroll();
  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div 
      className={clsx("min-h-screen transition-colors duration-300 selection:bg-[#D64045]/20", inter.className)}
      style={{ backgroundColor: currentTheme.bg, color: currentTheme.textPrimary }}
    >
      
      {/* progress bar */}
      {activeView === "article" && (
        <motion.div 
          className="fixed top-[48px] left-0 h-[3px] z-[600]"
          style={{ width: progressBarWidth, backgroundColor: currentTheme.accent }}
        />
      )}

      {/* 
        ========================================================================
        WEFT PREVIEW CHROME (Top Bar)
        ========================================================================
      */}
      <div className="fixed top-0 left-0 w-full h-[48px] bg-[#000000] border-b border-white/10 flex items-center justify-between px-[16px] xl:px-[24px] z-[500]">
        <div className="flex items-center gap-[16px]">
          <span className="font-[600] text-white text-[14px]">The Dispatch</span>
          <div className="h-[14px] w-[1px] bg-white/20" />
          <div className="flex items-center gap-[12px] text-[#A1A1AA] text-[12px] font-mono">
            <span className="flex items-center gap-[6px]">
              <FileText className="w-[12px] h-[12px]" />
              397 lines
            </span>
            <span className="flex items-center gap-[6px]">
              <Layers className="w-[12px] h-[12px]" />
              12 sections
            </span>
          </div>
        </div>
        <div className="flex items-center gap-[24px] text-[13px] font-[500]">
          <Link href="/systems/media-editorial/DESIGN.md" className="flex items-center gap-[6px] text-[#EAB308] hover:text-[#CA8A04] transition-colors">
            <ExternalLink className="w-[14px] h-[14px]" />
            View DESIGN.md
          </Link>
          <Link href="/sys" className="flex items-center gap-[6px] text-[#A1A1AA] hover:text-white transition-colors">
            <ArrowLeft className="w-[14px] h-[14px]" />
            All Systems
          </Link>
        </div>
      </div>

      {/* Reading Mode Control */}
      {activeView === "article" && (
        <div className="fixed bottom-[32px] right-[32px] z-[400] flex gap-[1px] bg-white border border-[#E8E8E8] shadow-md p-[4px] rounded-lg">
          <button onClick={() => setReadingMode("light")} className={clsx("p-[8px] rounded", readingMode === "light" && "bg-gray-100")}><Sun className="w-[18px] h-[18px] text-gray-900" /></button>
          <button onClick={() => setReadingMode("sepia")} className={clsx("p-[8px] rounded", readingMode === "sepia" && "bg-gray-100")}><Sunset className="w-[18px] h-[18px] text-[#3D3229]" /></button>
          <button onClick={() => setReadingMode("dark")} className={clsx("p-[8px] rounded", readingMode === "dark" && "bg-gray-100")}><Moon className="w-[18px] h-[18px] text-gray-900" /></button>
        </div>
      )}

      {/* Navigation */}
      <nav 
        className="h-[56px] sticky top-[48px] z-[400] border-b transition-all flex items-center justify-center px-[24px] bg-inherit"
        style={{ borderColor: currentTheme.border }}
      >
        <div className="max-w-[1200px] w-full flex items-center justify-between">
          <button onClick={() => setActiveView("list")} className={clsx("text-[20px] font-bold tracking-tight", lora.className)}>The Dispatch</button>
          
          <div className="flex items-center gap-[24px]">
            <div className="hidden md:flex items-center gap-[20px] text-[14px] font-[500]">
              <Link href="#" className="hover:opacity-60">Latest</Link>
              <Link href="#" className="hover:opacity-60 font-semibold border-b-2 border-current">Features</Link>
              <Link href="#" className="hover:opacity-60">Opinion</Link>
              <Link href="#" className="hover:opacity-60">About</Link>
            </div>
            <div className="flex items-center gap-[16px]">
              <Search className="w-[18px] h-[18px] hover:opacity-60 cursor-pointer" />
              <Menu className="w-[20px] h-[20px] md:hidden cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main View Area */}
      <main className="transition-all">
        <AnimatePresence mode="wait">
          {activeView === "list" ? (
            <motion.div 
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-[1000px] mx-auto px-[24px] py-[64px]"
            >
              <div className="flex flex-col gap-[64px]">
                {[
                  {
                    id: 1,
                    category: "FINANCIAL TECHNOLOGY",
                    title: "The Quiet Revolution in African Fintech",
                    excerpt: "Beyond the headlines of billion-dollar valuations, a fundamental shift in infrastructure is quietly digitizing the continent's most resilient economies.",
                    author: "Ama Darko",
                    date: "Apr 7, 2026",
                    time: "8 min read",
                    img: "#D64045"
                  },
                  {
                    id: 2,
                    category: "CULTURE & DESIGN",
                    title: "Architecture of the Sahel: Modernity through Mudcloth",
                    excerpt: "How contemporary African architects are reclaiming traditional materials to build the sustainable cities of the 2030s.",
                    author: "Kwadwo Addo",
                    date: "Apr 5, 2026",
                    time: "12 min read",
                    img: "#1A1A1A"
                  },
                  {
                    id: 3,
                    category: "GLOBAL ECONOMY",
                    title: "The Copper Belt: Rethinking Resource Sovereignty",
                    excerpt: "As the global energy transition accelerates, the nations of the Copper Belt are renegotiating their place in the supply chain.",
                    author: "Sarah Mensah",
                    date: "Apr 2, 2026",
                    time: "15 min read",
                    img: "#A0A0A0"
                  }
                ].map((article) => (
                  <div 
                    key={article.id} 
                    className="flex flex-col md:flex-row gap-[32px] group cursor-pointer"
                    onClick={() => setActiveView("article")}
                  >
                    <div className="w-full md:w-[40%] aspect-[16/9] bg-[#F7F5F2] overflow-hidden">
                      <div className="w-full h-full transition-transform duration-700 group-hover:scale-105" style={{ backgroundColor: article.img }} />
                    </div>
                    <div className="w-full md:w-[60%] flex flex-col justify-center">
                      <span className="text-[13px] font-[600] uppercase tracking-[1px] mb-[12px]" style={{ color: currentTheme.accent }}>{article.category}</span>
                      <h2 className={clsx("text-[24px] md:text-[32px] font-bold mb-[12px] leading-tight group-hover:opacity-75 transition-opacity", lora.className)}>{article.title}</h2>
                      <p className={clsx("text-[17px] leading-[1.6] mb-[16px]", sourceSerif.className)} style={{ color: currentTheme.textSecondary }}>{article.excerpt}</p>
                      <div className="flex items-center gap-[12px] text-[13px] font-[500] text-[#999999]">
                        <span>{article.author}</span>
                        <span>•</span>
                        <span>{article.date}</span>
                        <span>•</span>
                        <div className="flex items-center gap-[4px]"><Clock className="w-[12px] h-[12px]" /> {article.time}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Newsletter Inline */}
              <div 
                className="mt-[120px] p-[40px] md:p-[64px] border border-transparent"
                style={{ backgroundColor: currentTheme.bgWarm }}
              >
                <div className="max-w-[560px] mx-auto text-center">
                  <h3 className={clsx("text-[28px] font-bold mb-[12px]", lora.className)}>Stay in the loop.</h3>
                  <p className={clsx("text-[17px] mb-[32px]", sourceSerif.className)} style={{ color: currentTheme.textSecondary }}>
                    Join 45,000 readers who receive our weekly analysis on the technologies and culture shaping the future.
                  </p>
                  <div className="flex flex-col md:flex-row gap-[12px]">
                    <div className="flex-1 relative">
                      <Mail className="absolute left-[16px] top-[16px] w-[16px] h-[16px] text-gray-400" />
                      <input 
                        placeholder="your@email.com"
                        className="w-full h-[48px] pl-[44px] pr-[16px] bg-white border border-gray-200 outline-none focus:border-[#D64045] transition-all text-[#1A1A1A]"
                      />
                    </div>
                    <button 
                      className="h-[48px] px-[32px] text-white font-semibold flex items-center justify-center transition-all hover:opacity-90"
                      style={{ backgroundColor: currentTheme.accent }}
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className="text-[12px] mt-[16px] opacity-40 uppercase tracking-[0.5px]">No spam. Unsubscribe anytime.</p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="article"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-[80px]"
            >
              <article className="max-w-[1200px] mx-auto flex flex-col items-center">
                
                {/* Article Header */}
                <header className="max-w-[720px] w-full px-[24px] text-center mb-[64px]">
                  <span className="text-[13px] font-[600] uppercase tracking-[1px] mb-[16px] block" style={{ color: currentTheme.accent }}>Financial Technology</span>
                  <h1 className={clsx("text-[36px] md:text-[56px] font-bold mb-[24px] leading-[1.1]", lora.className)}>The Quiet Revolution in African Fintech</h1>
                  <p className={clsx("text-[22px] md:text-[26px] leading-[1.3] mb-[32px]", sourceSerif.className)} style={{ color: currentTheme.textSecondary }}>
                    Beyond the headlines of billion-dollar valuations, a fundamental shift in infrastructure is quietly digitizing the continent's most resilient economies.
                  </p>
                  
                  <div className="flex flex-col md:flex-row items-center justify-center gap-[24px] pt-[16px] border-t" style={{ borderColor: currentTheme.border }}>
                    <div className="flex items-center gap-[12px]">
                      <div className="w-[40px] h-[40px] rounded-full bg-[#1A1A1A] flex items-center justify-center text-white font-bold">AD</div>
                      <div className="text-left">
                        <span className="text-[15px] font-[600] block">Ama Darko</span>
                        <span className="text-[13px] opacity-50 block">Editor at large</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-[12px] text-[13px] opacity-50 border-l px-[24px] hidden md:flex" style={{ borderColor: currentTheme.border }}>
                      <span>April 7, 2026</span>
                      <span>•</span>
                      <div className="flex items-center gap-[4px]"><Clock className="w-[12px] h-[12px]" /> 8 min read</div>
                    </div>
                    <div className="flex items-center gap-[16px]">
                      <Share2 className="w-[18px] h-[18px] cursor-pointer hover:opacity-60" />
                      <Bookmark className="w-[18px] h-[18px] cursor-pointer hover:opacity-60" />
                    </div>
                  </div>
                </header>

                {/* Article Body */}
                <div className={clsx("max-w-[680px] w-full px-[24px] mx-auto text-[19px] leading-[1.80]", sourceSerif.className)}>
                  <p className="mb-[1.5em]">
                    For the past decade, the global narrative around African fintech has been dominated by a single, powerful word: "unbanked." It was a story of inclusion, a crusade to bring millions into the formal financial fold using nothing but the mobile phone in their pocket. But lately, the conversation has matured. We are no longer just looking at the edge of the network; we are looking at the core.
                  </p>
                  
                  <p className="mb-[1.5em]">
                    What we are witnessing today across hubs like Lagos, Nairobi, and Accra isn't just another wave of consumer apps. It is a fundamental rewiring of the continent's financial plumbing. While the world watched Paga and Flutterwave grow, a new layer of infrastructure was being laid—quietly, efficiently, and with profound implications for the next decade of growth.
                  </p>

                  <blockquote className={clsx("text-[28px] leading-[1.4] my-[48px] border-l-[4px] pl-[32px] italic", sourceSerif.className)} style={{ borderColor: currentTheme.accent, color: currentTheme.textPrimary }}>
                    "The story of the next decade won't be about who has a bank account, but about who owns the rails that move the value."
                  </blockquote>

                  <h2 className={clsx("text-[28px] font-bold mt-[2.5em] mb-[0.75em]", lora.className)}>Infrastructure over Inclusion</h2>
                  <p className="mb-[1.5em]">
                    The first phase of the fintech boom was about the wrapper—the UI and the accessibility. It was about making it easy to send money via SMS or a clean mobile interface. The current phase, however, is about the API. Players like Mono and Stitch are building the connective tissue between disparate data sources, allowing for credit scoring and financial verification that was previously impossible.
                  </p>

                  {/* Image Breakout */}
                  <div className="my-[64px] relative left-1/2 -translate-x-1/2 w-screen max-w-[960px]">
                    <div className="aspect-[16/9] bg-[#F7F5F2]" style={{ backgroundColor: currentTheme.accent + '15' }}>
                       <div className="w-full h-full flex items-center justify-center opacity-20">
                          <Layers className="w-[120px] h-[120px]" />
                       </div>
                    </div>
                    <p className={clsx("text-[14px] mt-[16px] text-center", inter.className)} style={{ color: currentTheme.textMuted }}>
                      Data density across major tech hubs indicates a 400% surge in API requests since 2024. <span className="opacity-60 italic">— Source: Weft Analytics</span>
                    </p>
                  </div>

                  <p className="mb-[1.5em]">
                    By abstracting the complexity of banking infrastructure, these startups are enabling a new generation of local businesses—not just fintechs—to embed financial services into their core operations. Whether it's a logistics company offering instant payouts to drivers or an e-commerce platform providing buy-now-pay-later options, the barriers to entry are dissolving.
                  </p>

                  <h2 className={clsx("text-[28px] font-bold mt-[2.5em] mb-[0.75em]", lora.className)}>Crossing the Borders</h2>
                  <p className="mb-[1.5em]">
                    Perhaps the most significant challenge remaining is interoperability. Sending money from a bank account in Nigeria to a mobile money wallet in Ghana still feels like an act of diplomacy. Yet, even here, technical solutions are emerging. The Pan-African Payment and Settlement System (PAPSS) is a state-led effort, but private players are moving faster, using digital assets and stablecoins to bridge the gap between currencies.
                  </p>
                  
                  <div className="my-[48px] p-[24px] rounded-[6px]" style={{ backgroundColor: currentTheme.bgWarm }}>
                    <p className={clsx("text-[15px] mb-[16px] uppercase tracking-[1px] font-semibold opacity-50", inter.className)}>Technical Implementation</p>
                    <pre className={clsx("text-[15px] overflow-x-auto", mono.className)}>
                      {`// Mock PAPSS settlement request
async function settleTransaction(payload) {
  const { source, target, amount } = payload;
  return await bridge.executePayment({
    from: "NGN_GTBANK",
    to: "GHS_MTN_MOMO",
    rate: "LIVE_DEXP",
    amount: amount
  });
}`}
                    </pre>
                  </div>

                  <p className="mb-[1.5em]">
                    As these "financial rails" become more robust, the very definition of a "bank" begins to blur. In Africa, the bank of the future might not be a building on a street corner, but a set of lines of code integrated into every digital touchpoint of a citizen's life.
                  </p>

                  <p className="mb-[1.5em]">
                    The revolution is here. It is just remarkably quiet.
                  </p>

                  <hr className="my-[64px] border-t" style={{ borderColor: currentTheme.border }} />

                  {/* Author Bio */}
                  <div className="flex flex-col md:flex-row items-center gap-[32px] py-[48px]">
                    <div className="w-[80px] h-[80px] rounded-full bg-[#1A1A1A] shrink-0" />
                    <div className="flex-1 text-center md:text-left">
                      <h4 className="text-[18px] font-[600] mb-[8px] tracking-tight">Ama Darko</h4>
                      <p className="text-[15px] text-[#555555] mb-[16px]">Ama is a senior editor focusing on the intersection of infrastructure and economy across sub-Saharan Africa. Previously at TechCrunch and Quartz.</p>
                      <button className={clsx("text-[15px] font-[600] flex items-center gap-[8px] transition-all hover:gap-[12px] mx-auto md:mx-0", inter.className)} style={{ color: currentTheme.accent }}>
                        More from Ama Darko <ArrowRight className="w-[16px] h-[16px]" />
                      </button>
                    </div>
                  </div>
                </div>

              </article>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
