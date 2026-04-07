"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  ExternalLink,
  FileText,
  Copy,
  MessageSquare,
  Rocket,
  CheckCircle2,
  Fingerprint,
  Zap,
  MessageCircle,
  Sun,
  Circle,
  Home,
  ClipboardList,
  Users,
  Settings,
  Check,
  Minus
} from "lucide-react";
import { systems } from "@/lib/systems";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* SECTION 1: HERO */}
      <section className="relative w-full h-screen min-h-[600px] bg-[var(--weft-black)] flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display font-[700] text-[64px] md:text-[120px] text-[var(--weft-white)] tracking-[-3px] leading-none mb-6"
          >
            Weft<span className="text-[var(--weft-gold)]">.</span>Design
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="max-w-[480px] text-[20px] font-sans font-[400] text-[var(--weft-gray-400)] mb-4"
          >
            The structure behind the surface.
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-[16px] font-sans text-[var(--weft-gray-600)] mb-10"
          >
            Professional-grade DESIGN.md files for AI coding agents.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link href="/systems" className="group flex items-center bg-[var(--weft-gold)] text-[var(--weft-black)] px-[28px] py-[14px] font-sans text-[14px] font-[500] uppercase tracking-[1px] hover:bg-[var(--weft-gold-hover)] transition-colors rounded-none">
              Explore Systems
              <motion.div className="ml-2 inline-flex" whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <ArrowRight className="w-[16px] h-[16px]" />
              </motion.div>
            </Link>
            <a href="https://github.com/Donald-Edinam/weft-design" target="_blank" rel="noopener noreferrer" className="group flex items-center border border-[var(--weft-gray-600)] text-[var(--weft-gray-400)] px-[28px] py-[14px] font-sans text-[14px] font-[500] uppercase tracking-[1px] hover:border-[var(--weft-gray-400)] hover:text-[var(--weft-white)] transition-colors rounded-none">
              GitHub
              <ExternalLink className="w-[14px] h-[14px] ml-2" />
            </a>
          </motion.div>
        </div>
        
        {/* Background texture threads */}
        <div className="absolute bottom-0 left-0 w-full h-[120px] overflow-hidden pointer-events-none opacity-[0.06] flex flex-col justify-end">
          <div className="w-full h-[1px] bg-[var(--weft-white)] mb-[10px] animate-[slide_15s_linear_infinite]" style={{ transform: 'translateX(-10%)' }} />
          <div className="w-full h-[1px] bg-[var(--weft-white)] mb-[20px] animate-[slide_20s_linear_infinite_reverse]" style={{ transform: 'translateX(-30%)' }} />
          <div className="w-full h-[1px] bg-[var(--weft-white)] mb-[40px] animate-[slide_12s_linear_infinite]" style={{ transform: 'translateX(-5%)' }} />
        </div>
      </section>

      {/* SECTION 2: PROBLEM TO SOLUTION */}
      <section className="bg-[var(--weft-white)] py-[128px]">
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            {/* Left Column */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="font-mono text-[12px] text-[var(--weft-gold)] uppercase tracking-[2px] mb-4">The Problem</div>
              <h2 className="font-display font-[700] text-[36px] text-[var(--weft-black)] mb-6">Tokens without thinking.</h2>
              <p className="font-sans text-[16px] text-[var(--weft-gray-600)] leading-[1.7] mb-8">
                Existing DESIGN.md collections extract hex codes from live websites. You get colors and font sizes — but no component behavior, no accessibility rules, no edge case handling. Your AI agent can match a palette but can't make a layout decision.
              </p>
              <div className="bg-[var(--weft-gray-50)] border border-[var(--weft-gray-100)] p-6 font-mono text-[13px] text-[var(--weft-gray-600)] overflow-x-auto rounded-none">
                <pre><code>{`# Colors
primary: #2563EB
secondary: #475569
background: #FFFFFF

# Typography
headings: Inter, sans-serif
body: Roboto, sans-serif
base-size: 16px`}</code></pre>
              </div>
            </motion.div>
            
            {/* Right Column */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            >
              <div className="font-mono text-[12px] text-[var(--weft-gold)] uppercase tracking-[2px] mb-4">The Solution</div>
              <h2 className="font-display font-[700] text-[36px] text-[var(--weft-black)] mb-6">Design briefs for machines.</h2>
              <p className="font-sans text-[16px] text-[var(--weft-gray-600)] leading-[1.7] mb-8">
                Each Weft system is a complete design brief: tokens, principles, component specifications, accessibility standards, edge case patterns, and explicit agent instructions. Drop one in your project root — your AI agent builds production-quality UI.
              </p>
              <div className="bg-[var(--weft-gray-50)] border border-[var(--weft-gray-100)] border-l-[3px] border-l-[var(--weft-gold)] p-6 font-mono text-[13px] text-[var(--weft-black)] overflow-x-auto rounded-none">
                <pre><code>{`## Component Specifications
### Data Table
- Density: High (row height 32px)
- Font: Tabular lining nums for amounts
- Action menu: Hover-only on lg, visible on sm
- Empty state: Illustration + Primary CPA

## AI Instruction
When rendering lists > 10 items, ALWAYS
implement pagination with page size 20.`}</code></pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SYSTEMS GRID PREVIEW */}
      <section className="bg-[var(--weft-black)] py-[128px]">
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex flex-col items-center mb-10">
            <h2 className="font-display font-[700] text-[48px] text-[var(--weft-white)] mb-4 text-center">8 Systems</h2>
            <p className="font-sans text-[17px] text-[var(--weft-gray-400)] text-center max-w-[560px]">
              Engineered from design principles. Not extracted from websites.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-[24px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } }
            }}
          >
            {systems.map((system) => (
              <motion.div
                key={system.slug}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.4 } }
                }}
              >
                <Link 
                  href={`/systems/${system.slug}`} 
                  className="group block bg-[var(--weft-gray-900)] border border-[var(--weft-gray-800)] p-[32px] transition-all duration-200 hover:-translate-y-[2px] rounded-none shadow-sm" 
                  style={{ borderLeftWidth: '3px', borderLeftColor: system.primaryColor } as React.CSSProperties}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = system.primaryColor; e.currentTarget.style.borderLeftColor = system.primaryColor; }} 
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--weft-gray-800)'; e.currentTarget.style.borderLeftColor = system.primaryColor; }}
                >
                  <h3 className="font-display font-[600] text-[22px] text-[var(--weft-white)] mb-2">{system.name}</h3>
                  <p className="font-sans italic text-[15px] font-[400] text-[var(--weft-gray-400)] mb-6">{system.tagline}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {system.tags.map(tag => (
                      <span key={tag} className="font-mono text-[11px] border border-[var(--weft-gray-800)] px-[8px] py-[2px] text-[var(--weft-gray-400)] rounded-none">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center text-[12px] font-mono text-[var(--weft-gray-600)]">
                      {system.lines} lines
                      <FileText className="w-[12px] h-[12px] mx-2" />
                      {system.sections} sections
                    </div>
                    <div className="flex items-center text-[14px] font-sans text-[var(--weft-gold)] font-[500]">
                      Preview
                      <motion.div className="ml-1 inline-flex" whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                        <ArrowRight className="w-[14px] h-[14px]" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: HOW IT WORKS */}
      <section className="bg-[var(--weft-white)] py-[128px]">
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="font-display font-[700] text-[36px] text-[var(--weft-black)] mb-16">Three steps.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[48px]">
            {/* Step 1 */}
            <div>
              <div className="font-mono text-[48px] text-[var(--weft-gold)] mb-6 leading-none">01</div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <Copy className="w-[24px] h-[24px] text-[var(--weft-gold)] mb-6" />
              </motion.div>
              <h3 className="font-display font-[600] text-[20px] text-[var(--weft-black)] mb-3">Copy</h3>
              <p className="font-sans text-[15px] text-[var(--weft-gray-600)] mb-6">Pick an archetype. Copy the DESIGN.md into your project root.</p>
              <div className="bg-[var(--weft-gray-50)] border border-[var(--weft-gray-100)] p-4 font-mono text-[12px] text-[var(--weft-black)] overflow-x-auto whitespace-pre rounded-none">
                cp weft/systems/enterprise-saas/DESIGN.md ./DESIGN.md
              </div>
            </div>
            {/* Step 2 */}
            <div>
              <div className="font-mono text-[48px] text-[var(--weft-gold)] mb-6 leading-none">02</div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <MessageSquare className="w-[24px] h-[24px] text-[var(--weft-black)] mb-6" />
              </motion.div>
              <h3 className="font-display font-[600] text-[20px] text-[var(--weft-black)] mb-3">Prompt</h3>
              <p className="font-sans text-[15px] text-[var(--weft-gray-600)] mb-6">Tell your AI agent to follow the design system.</p>
              <div className="bg-[var(--weft-gray-50)] border border-[var(--weft-gray-100)] p-4 font-mono text-[12px] text-[var(--weft-black)] overflow-x-auto whitespace-pre rounded-none">
                "Build me a dashboard. Follow the DESIGN.md in the project root."
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col">
              <div className="font-mono text-[48px] text-[var(--weft-gold)] mb-6 leading-none">03</div>
              <motion.div 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.2 }}
              >
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                  <Rocket className="w-[24px] h-[24px] text-[var(--weft-black)] mb-6" />
                </motion.div>
              </motion.div>
              <h3 className="font-display font-[600] text-[20px] text-[var(--weft-black)] mb-3">Build</h3>
              <p className="font-sans text-[15px] text-[var(--weft-gray-600)] mb-6">Get production-quality UI. Every token, component, and edge case — handled.</p>
              <motion.div 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.4 }}
                 className="flex items-center text-[14px] font-[500] font-sans text-[var(--weft-black)] mt-auto pt-4"
              >
                <CheckCircle2 className="w-[24px] h-[24px] text-[var(--weft-gold)] mr-2" />
                Production-ready
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: AFRICAN MOBILE-FIRST SPOTLIGHT */}
      <section className="bg-[var(--weft-black)] py-[128px]">
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left side */}
            <div className="w-full lg:w-[55%]">
              <div className="font-mono text-[12px] text-[var(--weft-gold)] uppercase tracking-[2px] mb-4">Featured</div>
              <h2 className="font-display font-[700] text-[36px] text-[var(--weft-white)] leading-[1.2] mb-6">
                Design systems shouldn't assume everyone's on a MacBook in San Francisco.
              </h2>
              <p className="font-sans text-[16px] text-[var(--weft-gray-400)] leading-[1.6] mb-10">
                The African Mobile-First system is built for real constraints: mid-range Android devices, 3G networks, outdoor sunlight, and users who've never seen a SaaS dashboard before.
              </p>
              <motion.div 
                 className="space-y-6 mb-10"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1 } }
                 }}
              >
                {[
                  { icon: Fingerprint, text: "48px touch targets for outdoor use" },
                  { icon: Zap, text: "Under 500KB initial page load budget" },
                  { icon: MessageCircle, text: "WhatsApp Business API integration patterns" },
                  { icon: Sun, text: "5:1 minimum contrast for sunlight readability" }
                ].map((feature, i) => (
                  <motion.div 
                    key={i}
                    className="flex items-center"
                    variants={{
                       hidden: { x: -20, opacity: 0 },
                       visible: { x: 0, opacity: 1, transition: { ease: "easeOut" } }
                    }}
                  >
                    <feature.icon className="w-[18px] h-[18px] text-[var(--weft-gold)] mr-4 shrink-0" />
                    <span className="font-sans text-[16px] text-[var(--weft-white)]">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>
              <Link href="/systems/african-mobile-first" className="group inline-flex items-center font-sans text-[var(--weft-gold)] text-[14px] font-[500] uppercase tracking-[1px] hover:text-[var(--weft-white)] transition-colors">
                View System
                <motion.div className="ml-2 inline-flex" whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                  <ArrowRight className="w-[16px] h-[16px]" />
                </motion.div>
              </Link>
            </div>

            {/* Right side (Visual Mockup) */}
            <div className="w-full lg:w-[45%] flex justify-center perspective-[1000px] overflow-hidden">
              <motion.div 
                 initial={{ opacity: 0, rotateY: 10, scale: 0.95 }}
                 whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
                 viewport={{ once: true }}
                 className="w-[375px] h-[812px] shrink-0 bg-[#005F8E] p-4 flex flex-col relative rotate-[2.5deg] shadow-[0_20px_60px_rgba(0,0,0,0.3)] origin-bottom"
              >
                {/* Status bar mock */}
                <div className="h-[24px] w-full flex justify-between items-center mb-6">
                  <span className="text-[12px] font-sans font-[500] text-white">9:41</span>
                  <div className="flex gap-1">
                     <div className="w-[16px] h-[10px] bg-white opacity-80 rounded-[2px]"></div>
                     <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
                  </div>
                </div>
                {/* Header */}
                <h3 className="font-display text-white text-[24px] font-[700] mb-6">Orders</h3>
                
                {/* Cards */}
                <div className="flex-1 space-y-4 font-sans">
                   <div className="bg-white p-4 rounded-none shadow-sm flex items-center justify-between">
                      <div>
                         <div className="text-[16px] font-[600] text-[var(--weft-gray-900)]">ORD-0092</div>
                         <div className="text-[14px] text-[var(--weft-gray-400)] mt-1">2 items • ₵450.00</div>
                      </div>
                      <Circle className="w-[16px] h-[16px] text-green-500 fill-green-500" />
                   </div>
                   <div className="bg-white p-4 rounded-none shadow-sm flex items-center justify-between">
                      <div>
                         <div className="text-[16px] font-[600] text-[var(--weft-gray-900)]">ORD-0091</div>
                         <div className="text-[14px] text-[var(--weft-gray-400)] mt-1">1 item • ₵120.00</div>
                      </div>
                      <Circle className="w-[16px] h-[16px] text-[#FFB703] fill-[#FFB703]" />
                   </div>
                   <div className="bg-white p-4 rounded-none shadow-sm flex items-center justify-between opacity-50">
                      <div>
                         <div className="text-[16px] font-[600] text-[var(--weft-gray-900)]">ORD-0090</div>
                         <div className="text-[14px] text-[var(--weft-gray-400)] mt-1">4 items • ₵890.00</div>
                      </div>
                      <Circle className="w-[16px] h-[16px] text-[var(--weft-gray-200)] fill-[var(--weft-gray-200)]" />
                   </div>
                </div>

                {/* Bottom Tab Bar mock */}
                <div className="absolute bottom-0 left-0 w-full h-[64px] bg-white flex justify-between items-center px-8 border-t border-[var(--weft-gray-100)]">
                   <Home className="w-[24px] h-[24px] text-[#005F8E]" />
                   <ClipboardList className="w-[24px] h-[24px] text-[var(--weft-gray-200)]" />
                   <Users className="w-[24px] h-[24px] text-[var(--weft-gray-200)]" />
                   <Settings className="w-[24px] h-[24px] text-[var(--weft-gray-200)]" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: COMPARISON TABLE */}
      <section className="bg-[var(--weft-white)] py-[96px]">
        <div className="w-full max-w-[800px] mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="font-display font-[700] text-[32px] text-[var(--weft-black)] mb-12 text-center">How Weft compares.</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-[2px] border-[var(--weft-black)]">
                  <th className="font-mono text-[12px] uppercase text-[var(--weft-gray-400)] pb-4 font-normal px-6">Feature</th>
                  <th className="font-mono text-[12px] uppercase text-[var(--weft-gray-400)] pb-4 font-normal px-6">From Scratch</th>
                  <th className="font-mono text-[12px] uppercase text-[var(--weft-gray-400)] pb-4 font-normal px-6">awesome-design-md</th>
                  <th className="font-mono text-[12px] uppercase text-[var(--weft-black)] bg-[var(--weft-gray-50)] pb-4 font-semibold px-6 pt-4 border-t border-l border-r border-[var(--weft-gray-100)] rounded-t-sm">Weft</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Design tokens", false, true, true],
                  ["Component specs", false, false, true],
                  ["Behavior rules", false, false, true],
                  ["Accessibility", false, "Rarely", "WCAG AA baked in"],
                  ["Edge cases", false, false, true],
                  ["Agent instructions", false, false, true],
                  ["Mobile-first", false, "Desktop-biased", "Per archetype"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-[var(--weft-gray-100)] hover:bg-[var(--weft-gray-50)] transition-colors">
                    <td className="font-sans text-[15px] text-[var(--weft-black)] py-4 px-6">{row[0]}</td>
                    <td className="py-4 px-6">
                      {row[1] === false ? <Minus className="w-[16px] h-[16px] text-[var(--weft-gray-200)]" /> : row[1]}
                    </td>
                    <td className="font-sans py-4 px-6 text-[15px] text-[var(--weft-gray-600)]">
                      {row[2] === false ? <Minus className="w-[16px] h-[16px] text-[var(--weft-gray-200)]" /> : row[2] === true ? <Check className="w-[16px] h-[16px] text-[var(--weft-gold)]" /> : row[2]}
                    </td>
                    <td className="bg-[var(--weft-gray-50)] py-4 px-6 font-sans text-[15px] text-[var(--weft-black)] border-l border-r border-[var(--weft-gray-100)]">
                      {row[3] === true ? <Check className="w-[16px] h-[16px] text-[var(--weft-gold)]" /> : <span className="font-[500]">{row[3]}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
