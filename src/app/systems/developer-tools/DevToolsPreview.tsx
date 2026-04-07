"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  FileText, 
  Layers, 
  ExternalLink, 
  ArrowLeft,
  FolderKanban,
  Rocket,
  Globe,
  Terminal,
  Settings,
  Search,
  GitBranch,
  GitCommit,
  CheckCircle2,
  XCircle,
  Loader2,
  Clipboard,
  Check,
  Key,
  BookOpen,
  MoreVertical,
  ChevronRight
} from "lucide-react";
import { Inter, JetBrains_Mono } from "next/font/google";
import { clsx } from "clsx";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400"] });

// ----------------------------------------------------------------------
// CSS Tokens per DESIGN.md
// ----------------------------------------------------------------------
const THEME = {
  bg: "#0A0A0B",
  surface: "#141415",
  surfaceSecondary: "#1C1C1E",
  surfaceHover: "#232326",
  border: "#27272A",
  borderStrong: "#3F3F46",
  textPrimary: "#FAFAFA",
  textSecondary: "#A1A1AA",
  textMuted: "#71717A",
  primary: "#3B82F6",
  primaryHover: "#2563EB",
  success: "#22C55E",
  warning: "#EAB308",
  error: "#EF4444",
};

// ----------------------------------------------------------------------
// Mock Data
// ----------------------------------------------------------------------
const NAV_ITEMS = [
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "deployments", label: "Deployments", icon: Rocket },
  { id: "domains", label: "Domains", icon: Globe },
  { id: "logs", label: "Logs", icon: Terminal },
  { id: "settings", label: "Settings", icon: Settings },
];

const DEPLOYS = [
  { id: "dep_82jks92", branch: "main", commit: "43b379c", message: "feat: add analytics", status: "ready", time: "2m ago", url: "weft-hq.vercel.app" },
  { id: "dep_12ndl82", branch: "feat/auth", commit: "a1b2c3d", message: "fix: session timeout", status: "building", time: "now", url: "weft-git-auth.vercel.app" },
  { id: "dep_90zl231", branch: "main", commit: "ec25f5f", message: "chore: update deps", status: "failed", time: "1h ago", url: "weft-hq-old.vercel.app" },
];

export default function DevToolsPreview() {
  const [activeNav, setActiveNav] = useState("deployments");
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Command Palette Keyboard Trigger
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
      }
      if (e.key === "Escape") {
        setIsCommandPaletteOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={clsx("min-h-screen selection:bg-[#3B82F6]/30 pt-[48px]", inter.className)} style={{ backgroundColor: THEME.bg, color: THEME.textSecondary }}>
      
      {/* 
        ========================================================================
        WEFT PREVIEW CHROME (Top Bar)
        ========================================================================
      */}
      <div className="fixed top-0 left-0 w-full h-[48px] bg-[#000000] border-b border-white/10 flex items-center justify-between px-[16px] xl:px-[24px] z-[200]">
        <div className="flex items-center gap-[16px]">
          <span className="font-[600] text-white text-[14px]">Developer Tools</span>
          <div className="h-[14px] w-[1px] bg-white/20" />
          <div className="flex items-center gap-[12px] text-[#A1A1AA] text-[12px] font-mono">
            <span className="flex items-center gap-[6px]">
              <FileText className="w-[12px] h-[12px]" />
              440 lines
            </span>
            <span className="flex items-center gap-[6px]">
              <Layers className="w-[12px] h-[12px]" />
              12 sections
            </span>
          </div>
        </div>
        <div className="flex items-center gap-[24px] text-[13px] font-[500]">
          <Link href="/systems/developer-tools/DESIGN.md" className="flex items-center gap-[6px] text-[#EAB308] hover:text-[#CA8A04] transition-colors">
            <ExternalLink className="w-[14px] h-[14px]" />
            View DESIGN.md
          </Link>
          <Link href="/sys" className="flex items-center gap-[6px] text-[#A1A1AA] hover:text-white transition-colors">
            <ArrowLeft className="w-[14px] h-[14px]" />
            All Systems
          </Link>
        </div>
      </div>

      {/* 
        ========================================================================
        DASHBOARD SHELL
        ========================================================================
      */}
      <div className="flex h-[calc(100vh-48px)] overflow-hidden">
        
        {/* Sidebar */}
        <aside className="w-[220px] bg-[#141415] border-r border-[#27272A] flex flex-col pt-[16px] px-[8px]">
          <div className="px-[12px] mb-[20px] flex items-center gap-[8px]">
            <div className="w-[24px] h-[24px] rounded-[4px] bg-[#3B82F6] flex items-center justify-center">
              <Rocket className="w-[14px] h-[14px] text-white" />
            </div>
            <span className="text-[14px] font-[600] text-[#FAFAFA]">Weft Cloud</span>
          </div>

          <div className="flex flex-col gap-[2px]">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={clsx(
                  "h-[32px] flex items-center px-[8px] rounded-[6px] transition-colors gap-[8px] text-[13px] font-[500]",
                  activeNav === item.id 
                    ? "bg-[#3B82F6]/15 text-[#FAFAFA]" 
                    : "text-[#A1A1AA] hover:bg-[#232326] hover:text-[#FAFAFA]"
                )}
              >
                <item.icon className="w-[16px] h-[16px] shrink-0" />
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-auto pb-[16px] px-[8px]">
            <button 
              onClick={() => setIsCommandPaletteOpen(true)}
              className="w-full h-[32px] bg-[#1C1C1E] border border-[#3F3F46] rounded-[6px] flex items-center justify-between px-[10px] hover:border-[#71717A] transition-colors"
            >
              <div className="flex items-center gap-[8px]">
                <Search className="w-[14px] h-[14px] text-[#71717A]" />
                <span className="text-[12px] text-[#71717A]">Quick search...</span>
              </div>
              <kbd className="h-[18px] px-[4px] bg-[#27272A] border border-[#3F3F46] rounded-[3px] text-[10px] font-mono flex items-center justify-center text-[#A1A1AA]">
                ⌘K
              </kbd>
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-[#0A0A0B] flex flex-col p-[24px]">
          
          <div className="max-w-[1000px] w-full mx-auto flex flex-col gap-[32px]">
            
            {/* Header Area */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-[24px] font-[600] text-[#FAFAFA] tracking-[-0.3px] capitalize">{activeNav}</h1>
                <p className="text-[14px] text-[#71717A] mt-[2px]">
                  {activeNav === "deployments" && "Manage and monitor your project deployments."}
                  {activeNav === "projects" && "Overview of your connected engineering projects."}
                  {activeNav === "domains" && "Manage custom domains and SSL certificates."}
                  {activeNav === "logs" && "Real-time system and runtime execution logs."}
                  {activeNav === "settings" && "Configure environment variables and access keys."}
                </p>
              </div>
              <button className="h-[32px] bg-[#3B82F6] hover:bg-[#2563EB] text-white px-[12px] rounded-[6px] text-[13px] font-[500] transition-colors flex items-center gap-[8px]">
                {activeNav === "projects" ? "New Project" : (activeNav === "domains" ? "Add Domain" : "New Deployment")}
              </button>
            </div>

            {/* Deployments View */}
            {activeNav === "deployments" && (
              <>
                {/* Deploy Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px]">
                  {DEPLOYS.map((deploy) => (
                    <div key={deploy.id} className="bg-[#141415] border border-[#27272A] rounded-[8px] p-[16px] hover:border-[#3F3F46] transition-all group">
                      <div className="flex items-center justify-between mb-[12px]">
                        <div className="flex items-center gap-[8px]">
                          <StatusBadge status={deploy.status} />
                        </div>
                        <button className="p-[4px] hover:bg-[#232326] rounded-[4px] text-[#71717A] hover:text-[#A1A1AA]">
                          <MoreVertical className="w-[14px] h-[14px]" />
                        </button>
                      </div>
                      
                      <div className="flex flex-col gap-[8px] mb-[16px]">
                        <div className={clsx("text-[13px] flex items-center gap-[8px]", mono.className)}>
                          <div className="flex items-center gap-[4px] text-[#FAFAFA]">
                            <GitBranch className="w-[14px] h-[14px] text-[#71717A]" />
                            {deploy.branch}
                          </div>
                          <span className="text-[#3F3F46]">•</span>
                          <div className="flex items-center gap-[4px] text-[#71717A]">
                            <GitCommit className="w-[14px] h-[14px]" />
                            {deploy.commit}
                          </div>
                        </div>
                        <a href={`https://${deploy.url}`} target="_blank" className={clsx("text-[13px] text-[#3B82F6] hover:underline underline-offset-4 flex items-center gap-[6px]", mono.className)}>
                          {deploy.url}
                          <ExternalLink className="w-[12px] h-[12px]" />
                        </a>
                      </div>

                      <div className="flex items-center justify-between text-[12px] text-[#71717A]">
                        <span>{deploy.time}</span>
                        <span className="flex items-center gap-[4px]">
                          <Terminal className="w-[12px] h-[12px]" />
                          Logs
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Logs Area */}
                <div className="flex flex-col gap-[12px]">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[14px] font-[600] text-[#FAFAFA]">Build Log: {DEPLOYS[1].id}</h3>
                    <button 
                      onClick={handleCopy}
                      className="h-[28px] px-[8px] bg-[#1C1C1E] border border-[#27272A] rounded-[4px] text-[11px] font-[500] text-[#71717A] flex items-center gap-[6px] hover:text-[#FAFAFA] hover:border-[#3F3F46] transition-all"
                    >
                      <AnimatePresence mode="wait">
                        {copied ? (
                          <motion.div key="check" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
                            <Check className="w-[14px] h-[14px] text-[#22C55E]" />
                          </motion.div>
                        ) : (
                          <motion.div key="copy" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
                            <Clipboard className="w-[14px] h-[14px]" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                      {copied ? "Copied" : "Copy"}
                    </button>
                  </div>
                  
                  <div className={clsx("bg-[#1C1C1E] border border-[#27272A] rounded-[8px] p-[16px] overflow-hidden relative text-[11px]", mono.className)}>
                    <div className="flex flex-col gap-[2px] leading-[1.5]">
                      <LogLine num="1" content="<ctrl94> Building project..." type="info" />
                      <LogLine num="2" content="λ Checking dependencies cache..." type="info" />
                      <LogLine num="3" content="λ Cache hit for node_modules" type="success" />
                      <LogLine num="4" content="λ Running 'next build'..." type="info" />
                      <LogLine num="5" content="○  (Static)  automatically rendered as static HTML (uses no-cache)" type="muted" />
                      <LogLine num="6" content="●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)" type="muted" />
                      <LogLine num="7" content="ƒ  (Dynamic) server-rendered on demand" type="muted" />
                      <LogLine num="8" content="" />
                      <LogLine num="9" content="Route (app)                              Size     First Load JS" />
                      <LogLine num="10" content="┌ ○ /                                    1.24 kB        82.1 kB" />
                      <LogLine num="11" content="├ ○ /systems                             512 B          74.5 kB" />
                      <LogLine num="12" content="└ λ /api/auth/[...nextauth]              0 B               0 B" />
                      <LogLine num="13" content="" />
                      <LogLine num="14" content="✓ Compiled successfully" type="success" />
                      <LogLine num="15" content="λ Uploading build artifacts..." type="info" />
                      <LogLine num="16" content="λ Initializing Vercel Edge..." type="info" />
                      <div className="flex items-center gap-[8px] mt-[4px]">
                        <span className="w-[14px] h-[14px] bg-[#3B82F6] animate-pulse" />
                        <span className="text-[#3B82F6]">Streaming logs...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Projects View */}
            {activeNav === "projects" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                {["weft-design", "weft-core", "weft-api", "weft-docs"].map((p) => (
                  <div key={p} className="bg-[#141415] border border-[#27272A] rounded-[8px] p-[16px] hover:border-[#3F3F46] transition-all flex items-center justify-between">
                    <div className="flex items-center gap-[12px]">
                      <FolderKanban className="w-[20px] h-[20px] text-[#71717A]" />
                      <div className="flex flex-col">
                        <span className="text-[14px] font-[600] text-[#FAFAFA]">{p}</span>
                        <span className="text-[12px] text-[#71717A]">Last deployed 2d ago</span>
                      </div>
                    </div>
                    <ChevronRight className="w-[16px] h-[16px] text-[#3F3F46]" />
                  </div>
                ))}
              </div>
            )}

            {/* Domains View */}
            {activeNav === "domains" && (
              <div className="bg-[#141415] border border-[#27272A] rounded-[8px] overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#27272A] text-[11px] font-[600] uppercase tracking-[0.5px] text-[#71717A]">
                      <th className="py-[12px] px-[16px]">Domain</th>
                      <th className="py-[12px] px-[16px]">Status</th>
                      <th className="py-[12px] px-[16px]">SSL</th>
                      <th className="py-[12px] px-[16px]">Created</th>
                    </tr>
                  </thead>
                  <tbody className={clsx("text-[13px]", inter.className)}>
                    {[
                      { name: "weft.design", status: "Active", ssl: "Ready", p: "Primary" },
                      { name: "app.weft.design", status: "Active", ssl: "Ready", p: "Sub" },
                      { name: "legacy-docs.weft.design", status: "Redirect", ssl: "Ready", p: "Alias" },
                    ].map((d) => (
                      <tr key={d.name} className="border-b border-[#27272A] hover:bg-[#232326]">
                        <td className={clsx("py-[12px] px-[16px] text-[#FAFAFA]", mono.className)}>{d.name}</td>
                        <td className="py-[12px] px-[16px]">
                          <span className="inline-flex items-center gap-[6px] text-[#22C55E]">
                            <div className="w-[6px] h-[6px] rounded-full bg-[#22C55E]" />
                            {d.status}
                          </span>
                        </td>
                        <td className="py-[12px] px-[16px] text-[#A1A1AA]">
                          <div className="flex items-center gap-[4px]">
                            <CheckCircle2 className="w-[12px] h-[12px] text-[#22C55E]" />
                            {d.ssl}
                          </div>
                        </td>
                        <td className="py-[12px] px-[16px] text-[#71717A]">Apr 2026</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Settings View */}
            {activeNav === "settings" && (
              <div className="flex flex-col gap-[24px]">
                <div className="bg-[#141415] border border-[#27272A] rounded-[8px] p-[24px]">
                  <h3 className="text-[14px] font-[600] text-[#FAFAFA] mb-[16px]">Project API Keys</h3>
                  <div className="flex items-center gap-[12px]">
                    <div className={clsx("flex-1 h-[32px] bg-[#0A0A0B] border border-[#3F3F46] rounded-[6px] flex items-center px-[12px] text-[13px] text-[#71717A]", mono.className)}>
                      sk_live_••••••••••••••••••••••••••••
                    </div>
                    <button className="h-[32px] px-[12px] bg-[#1C1C1E] border border-[#3F3F46] rounded-[6px] text-[12px] font-[500] text-[#FAFAFA] hover:bg-[#232326] transition-colors">
                      Reveal
                    </button>
                    <button 
                      onClick={handleCopy}
                      className="h-[32px] w-[32px] flex items-center justify-center bg-[#3B82F6] rounded-[6px] text-white"
                    >
                      <Clipboard className="w-[14px] h-[14px]" />
                    </button>
                  </div>
                </div>

                <div className="bg-[#141415] border border-[#27272A] rounded-[8px] p-[24px]">
                  <h3 className="text-[14px] font-[600] text-[#FAFAFA] mb-[16px]">Environment Variables</h3>
                  <div className="flex flex-col gap-[8px]">
                    {[
                      { key: "DATABASE_URL", val: "postgresql://••••••••" },
                      { key: "STRIPE_SECRET", val: "sk_test_••••••••" },
                      { key: "RESEND_API_KEY", val: "re_••••••••" },
                    ].map((env) => (
                      <div key={env.key} className="flex items-center justify-between py-[8px] border-b border-[#27272A]">
                        <span className={clsx("text-[13px] font-[600] text-[#FAFAFA]", mono.className)}>{env.key}</span>
                        <span className={clsx("text-[13px] text-[#71717A]", mono.className)}>{env.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Logs View (Stand-alone) */}
            {activeNav === "logs" && (
              <div className="bg-[#1C1C1E] border border-[#27272A] rounded-[8px] overflow-hidden">
                <div className={clsx("flex flex-col gap-[2px] p-[16px] text-[11px]", mono.className)}>
                  <div className="text-[11px] text-[#3F3F46] mb-[8px]">[System] Initializing runtime.v8.3...</div>
                  <LogLine num="10:04:12" content="INFO: Incoming request GET /api/v1/projects" type="info" />
                  <LogLine num="10:04:12" content="DEBUG: Cache hit for project_id: weft-design" type="muted" />
                  <LogLine num="10:04:13" content="INFO: 200 OK — 42ms" type="success" />
                  <LogLine num="10:05:01" content="WARN: Rate limit threshold approaching (82%)" type="info" />
                  <LogLine num="10:05:05" content="INFO: Incoming request POST /api/v1/deploy" type="info" />
                  <LogLine num="10:05:10" content="ERROR: Failed to initialize worker pool - Timeout" type="muted" />
                  <LogLine num="10:05:11" content="CRITICAL: Out of memory in isolated-vm context" type="info" />
                  <div className="h-[20px] bg-[#3B82F6]/20 mt-[12px] flex items-center px-[8px] gap-[8px]">
                    <div className="w-[4px] h-[12px] bg-[#3B82F6] animate-pulse" />
                    <span className="text-[11px] font-mono text-[#3B82F6] uppercase">Listening for events...</span>
                  </div>
                </div>
              </div>
            )}

          </div>
        </main>
      </div>

      {/* Command Palette Overlay */}
      <AnimatePresence>
        {isCommandPaletteOpen && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-[40px]">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCommandPaletteOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ duration: 0.15 }}
              className="relative w-full max-w-[560px] bg-[#141415] border border-[#27272A] rounded-[12px] shadow-[0_16px_48px_rgba(0,0,0,0.4)] overflow-hidden"
            >
              <div className="h-[48px] border-b border-[#27272A] flex items-center px-[16px] gap-[12px]">
                <Search className="w-[20px] h-[20px] text-[#71717A]" />
                <input 
                  autoFocus
                  placeholder="What do you need to do?"
                  className="flex-1 bg-transparent border-none outline-none text-[15px] text-[#FAFAFA] placeholder-[#71717A]"
                />
              </div>

              <div className="p-[8px]">
                <div className="px-[12px] py-[8px] text-[11px] font-[600] uppercase tracking-[0.5px] text-[#71717A]">
                  Suggested Actions
                </div>
                {[
                  { icon: Rocket, label: "Go to Deployments", kbd: "G D" },
                  { icon: Terminal, label: "View Logs", kbd: "G L" },
                  { icon: Settings, label: "Open Settings", kbd: "S ,", id: "settings" },
                  { icon: Key, label: "Copy API Key", kbd: "C A", accent: true },
                  { icon: BookOpen, label: "View Documentation", kbd: "G ?" },
                ].map((action, idx) => (
                  <button 
                    key={idx}
                    className={clsx(
                      "w-full h-[40px] flex items-center justify-between px-[12px] rounded-[6px] group hover:bg-[#3B82F6]/15 transition-all",
                      idx === 0 && "bg-[#3B82F6]/10"
                    )}
                  >
                    <div className="flex items-center gap-[12px]">
                      <action.icon className="w-[18px] h-[18px] text-[#A1A1AA] group-hover:text-[#FAFAFA]" />
                      <span className="text-[14px] text-[#A1A1AA] group-hover:text-[#FAFAFA]">{action.label}</span>
                    </div>
                    <div className="flex gap-[4px]">
                      {action.kbd.split(" ").map((k, i) => (
                        <kbd key={i} className="h-[20px] px-[5px] bg-[#27272A] border border-[#3F3F46] rounded-[4px] text-[10px] font-mono flex items-center justify-center text-[#71717A] group-hover:text-[#A1A1AA]">
                          {k}
                        </kbd>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  if (status === "ready") {
    return (
      <div className="bg-[#22C55E]/15 border border-[#22C55E]/30 rounded-full h-[22px] flex items-center gap-[6px] px-[8px]">
        <CheckCircle2 className="w-[12px] h-[12px] text-[#22C55E]" />
        <span className="text-[11px] font-[600] text-[#22C55E] uppercase tracking-[0.2px]">Ready</span>
      </div>
    );
  }
  if (status === "building") {
    return (
      <div className="bg-[#3B82F6]/15 border border-[#3B82F6]/30 rounded-full h-[22px] flex items-center gap-[6px] px-[8px]">
        <Loader2 className="w-[12px] h-[12px] text-[#3B82F6] animate-spin" />
        <span className="text-[11px] font-[600] text-[#3B82F6] uppercase tracking-[0.2px]">Building</span>
      </div>
    );
  }
  return (
    <div className="bg-[#EF4444]/15 border border-[#EF4444]/30 rounded-full h-[22px] flex items-center gap-[6px] px-[8px]">
      <XCircle className="w-[12px] h-[12px] text-[#EF4444]" />
      <span className="text-[11px] font-[600] text-[#EF4444] uppercase tracking-[0.2px]">Failed</span>
    </div>
  );
}

function LogLine({ num, content, type }: { num: string, content: string, type?: "info" | "success" | "muted" }) {
  const colors = {
    info: "text-[#FAFAFA]",
    success: "text-[#22C55E]",
    muted: "text-[#71717A]",
  };
  return (
    <div className="grid grid-cols-[64px_1fr] group">
      <span className="text-[#3F3F46] select-none text-right pr-[12px]">{num}</span>
      <span className={clsx(type ? colors[type] : "text-[#A1A1AA]", "whitespace-pre overflow-x-hidden")}>{content}</span>
    </div>
  );
}
