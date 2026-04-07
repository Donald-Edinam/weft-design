"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  LayoutDashboard,
  ArrowLeftRight,
  SendHorizontal,
  CreditCard,
  Settings,
  Building2,
  Wallet,
  TrendingUp,
  Clock,
  Calendar,
  ArrowDownLeft,
  ArrowUpRight,
  Cloud,
  Briefcase,
  ShoppingBag,
  Zap,
  Home,
  Code,
  CheckCircle2,
  Loader2,
  Info,
  X,
  ChevronDown,
  ExternalLink,
  ArrowLeft
} from "lucide-react";
import { PreviewChrome } from "@/components/shared/PreviewChrome";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "600"] });

// ----------------------------------------------------------------------
// CSS Tokens per DESIGN.md
// ----------------------------------------------------------------------
const THEME = {
  primary: "#0052CC",
  primaryHover: "#003D99",
  primaryLight: "#E6F0FF",
  primaryDark: "#002966",
  bg: "#F7F8FA",
  surface: "#FFFFFF",
  surfaceSecondary: "#F0F2F5",
  border: "#E1E4E8",
  borderStrong: "#C8CCD2",
  textPrimary: "#0D1117",
  textSecondary: "#424A53",
  textMuted: "#8B949E",
  positive: "#1A7F37",
  positiveLight: "#DAFBE1",
  negative: "#CF222E",
  negativeLight: "#FFEBE9",
  warning: "#BF8700",
  warningLight: "#FFF8C5",
  sidebarBg: "#0D1117"
};

// ----------------------------------------------------------------------
// Mock Data
// ----------------------------------------------------------------------
const SIDEBAR_NAV = [
  { id: "Dashboard", icon: LayoutDashboard },
  { id: "Transactions", icon: ArrowLeftRight },
  { id: "Transfers", icon: SendHorizontal },
  { id: "Cards", icon: CreditCard },
  { id: "Settings", icon: Settings },
];

const TRANSACTIONS = [
  { id: "TRX-8902A", desc: "Payroll — Acme Corp", date: "Apr 7, 2026", category: "Income", categoryBg: "#DAFBE1", icon: Building2, amount: 14500.00, balance: 128450.72, status: "Completed" },
  { id: "TRX-8901B", desc: "AWS Cloud Services", date: "Apr 6, 2026", category: "Expense", categoryBg: "#FFEBE9", icon: Cloud, amount: -1450.25, balance: 113950.72, status: "Completed" },
  { id: "TRX-8900A", desc: "Transfer to Savings", date: "Apr 5, 2026", category: "Transfer", categoryBg: "#E6F0FF", icon: ArrowLeftRight, amount: -5000.00, balance: 115400.97, status: "Pending" },
  { id: "TRX-8899Z", desc: "Client Payment — Tekton Ltd", date: "Apr 4, 2026", category: "Income", categoryBg: "#DAFBE1", icon: Briefcase, amount: 8400.00, balance: 120400.97, status: "Completed" },
  { id: "TRX-8898C", desc: "Office Supplies", date: "Apr 2, 2026", category: "Expense", categoryBg: "#FFEBE9", icon: ShoppingBag, amount: -320.50, balance: 112000.97, status: "Completed" },
  { id: "TRX-8897D", desc: "Stripe Payout", date: "Apr 1, 2026", category: "Income", categoryBg: "#DAFBE1", icon: Zap, amount: 12450.80, balance: 112321.47, status: "Processing" },
  { id: "TRX-8896E", desc: "Rent — 123 Main St", date: "Mar 30, 2026", category: "Expense", categoryBg: "#FFEBE9", icon: Home, amount: -4500.00, balance: 99870.67, status: "Completed" },
  { id: "TRX-8895F", desc: "Software License", date: "Mar 28, 2026", category: "Expense", categoryBg: "#FFEBE9", icon: Code, amount: -89.99, balance: 104370.67, status: "Completed" },
];

// Helper to format currency
const formatCurrency = (val: number) => {
  const isNeg = val < 0;
  const abs = Math.abs(val);
  const formatted = abs.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (isNeg) return `-$${formatted}`;
  return `+$${formatted}`; // explicit + for positive per DESIGN.md
};

export default function FintechPreview() {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const [transferAmount, setTransferAmount] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayBalance, setDisplayBalance] = useState(0);

  // Count/Chart animate on mount per DESIGN.md
  useEffect(() => {
    let startTime: number;
    const targetBalance = 128450.72;
    const duration = 600;

    const animateNum = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // cubic-bezier(0.16, 1, 0.3, 1) approximation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setDisplayBalance(targetBalance * easeOut);
      
      if (progress < 1) {
        requestAnimationFrame(animateNum);
      } else {
        setHasAnimated(true);
      }
    };
    requestAnimationFrame(animateNum);
  }, []);

  return (
    <div className={`min-h-screen bg-black flex flex-col items-center pt-[48px] ${inter.className}`}>
      
      <PreviewChrome 
        systemName="Fintech Dashboard"
        lines={493}
        sections={12}
        slug="fintech-dashboard"
      />

      {/* 
        ========================================================================
        DASHBOARD SHELL
        ========================================================================
      */}
      <div className="w-full max-w-[1440px] flex-1 flex my-[32px] rounded-[16px] overflow-hidden border border-white/10 shadow-2xl relative" style={{ backgroundColor: THEME.bg }}>
        
        {/* SIDEBAR (240px fixed) */}
        <div className="hidden md:flex flex-col w-[240px] shrink-0 h-[800px] border-r" style={{ backgroundColor: THEME.sidebarBg, borderColor: '#30363D' }}>
          <div className="h-[80px] flex items-center px-[24px]">
            <div className="w-[32px] h-[32px] rounded-[8px] flex items-center justify-center bg-white">
              <span className="font-[700] text-[#0D1117] text-[18px] tracking-tighter">V.</span>
            </div>
            <span className="ml-[12px] font-[600] text-white text-[18px]">Vault</span>
          </div>

          <div className="flex-1 py-[12px]">
            <div className="px-[12px] mb-[8px]">
              <span className="text-[11px] font-[600] uppercase tracking-[0.5px] text-white/30 px-[12px]">Main Menu</span>
            </div>
            <div className="flex flex-col gap-[4px] px-[12px]">
              {SIDEBAR_NAV.map((nav) => {
                const isActive = activeNav === nav.id;
                return (
                  <button
                    key={nav.id}
                    onClick={() => setActiveNav(nav.id)}
                    className="flex items-center h-[36px] px-[12px] rounded-[6px] transition-all relative text-left"
                    style={{
                      backgroundColor: isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
                      color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.6)'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)';
                        e.currentTarget.style.color = '#FFFFFF';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                      }
                    }}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[20px] rounded-r-[3px]" style={{ backgroundColor: THEME.primary }} />
                    )}
                    <nav.icon className="w-[18px] h-[18px] shrink-0" />
                    <span className="ml-[12px] font-[500] text-[14px]">{nav.id}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* User / Account selector */}
          <div className="p-[16px] border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            <button className="w-full flex items-center justify-between p-[8px] rounded-[6px] hover:bg-white/5 transition-colors text-left group">
              <div className="flex items-center gap-[12px]">
                <div className="w-[32px] h-[32px] rounded bg-white/10 flex items-center justify-center shrink-0">
                  <Building2 className="w-[16px] h-[16px] text-white/80" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-[500] text-white leading-tight">Acme Limited</span>
                  <span className="text-[11px] text-white/50 leading-tight mt-[2px] font-mono">ID: AC-9021</span>
                </div>
              </div>
              <ChevronDown className="w-[14px] h-[14px] text-white/30 group-hover:text-white/60 transition-colors" />
            </button>
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 flex flex-col h-[800px] overflow-y-auto" style={{ color: THEME.textPrimary }}>
          
          {/* Top Navbar */}
          <div className="h-[80px] bg-white border-b px-[32px] flex items-center justify-between shrink-0" style={{ borderColor: THEME.border }}>
            <h1 className="text-[24px] font-[600] tracking-[-0.3px]">{activeNav}</h1>
            <button 
              onClick={() => setIsTransferModalOpen(true)}
              className="px-[16px] h-[36px] rounded-[6px] font-[500] text-[14px] text-white flex items-center justify-center shadow-sm active:scale-[0.98] transition-all"
              style={{ backgroundColor: THEME.primary }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = THEME.primaryHover}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = THEME.primary}
            >
              <SendHorizontal className="w-[16px] h-[16px] mr-[8px]" />
              Transfer Funds
            </button>
          </div>

          <div className="p-[32px] max-w-[1200px] w-full mx-auto flex flex-col gap-[24px]">
            
            {/* Top Grid: Balance & Chart */}
            {activeNav === "Dashboard" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-[24px]">
              
              {/* Balance Card */}
              <div className="col-span-1 lg:col-span-4 bg-white border rounded-[8px] p-[24px] shadow-[0_1px_2px_rgba(0,0,0,0.04)]" style={{ borderColor: THEME.border }}>
                <div className="flex items-center gap-[8px] mb-[16px]">
                  <Wallet className="w-[20px] h-[20px]" style={{ color: THEME.textMuted }} />
                  <span className="text-[13px] font-[500] uppercase tracking-[0.4px]" style={{ color: THEME.textMuted }}>Total Balance</span>
                </div>
                
                <div className={`text-[36px] font-[600] leading-[1.15] tracking-[-0.5px] tabular-nums ${mono.className} mb-[20px]`}>
                  ${displayBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>

                <div className="flex items-center justify-between pt-[16px] border-t" style={{ borderColor: THEME.border }}>
                  <div className="flex items-center gap-[6px]">
                    <div className="w-[20px] h-[20px] rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: THEME.positiveLight }}>
                      <TrendingUp className="w-[12px] h-[12px]" style={{ color: THEME.positive }} />
                    </div>
                    <span className={`text-[14px] font-[500] tabular-nums ${mono.className}`} style={{ color: THEME.positive }}>
                      +$12,840.50 (11.1%)
                    </span>
                  </div>
                  <div className="flex items-center gap-[4px]" style={{ color: THEME.textMuted }}>
                    <Clock className="w-[12px] h-[12px]" />
                    <span className="text-[12px]">as of Apr 7, 2:14 PM</span>
                  </div>
                </div>
              </div>

              {/* Chart Card */}
              <div className="col-span-1 lg:col-span-8 bg-white border rounded-[8px] p-[24px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col relative overflow-hidden" style={{ borderColor: THEME.border }}>
                <div className="flex items-center justify-between mb-[24px] z-10">
                  <span className="text-[16px] font-[600]">Asset Growth</span>
                  <button className="flex items-center gap-[6px] px-[12px] py-[4px] rounded-[6px] border text-[13px] font-[500] hover:bg-gray-50 transition-colors" style={{ borderColor: THEME.borderStrong, color: THEME.textPrimary }}>
                    <Calendar className="w-[14px] h-[14px]" />
                    Last 30 Days
                    <ChevronDown className="w-[14px] h-[14px] ml-[4px]" />
                  </button>
                </div>
                
                {/* SVG Chart */}
                <div className="flex-1 w-full relative">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-full border-t border-dashed" style={{ borderColor: THEME.border, opacity: i === 1 ? 0 : 0.6 }} />
                    ))}
                  </div>

                  {/* Draw Animation */}
                  <svg className="w-full h-full absolute inset-0 overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 200">
                    <defs>
                      <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={THEME.primary} stopOpacity={0.06} />
                        <stop offset="100%" stopColor={THEME.primary} stopOpacity={0} />
                      </linearGradient>
                      <clipPath id="chartReveal">
                        <motion.rect 
                          x="0" y="0" height="200"
                          initial={{ width: 0 }}
                          animate={{ width: hasAnimated ? 1000 : 0 }}
                          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </clipPath>
                    </defs>
                    
                    <g clipPath="url(#chartReveal)">
                      {/* Area Fill */}
                      <path 
                        d="M0,180 L40,175 L80,185 L120,165 L160,150 L200,160 L240,130 L280,135 L320,110 L360,115 L400,90 L440,95 L480,70 L520,75 L560,60 L600,65 L640,40 L680,45 L720,30 L760,20 L800,25 L840,15 L880,30 L920,20 L960,10 L1000,5 L1000,200 L0,200 Z"
                        fill="url(#chartFill)"
                      />
                      {/* Stroke Line */}
                      <path 
                        d="M0,180 L40,175 L80,185 L120,165 L160,150 L200,160 L240,130 L280,135 L320,110 L360,115 L400,90 L440,95 L480,70 L520,75 L560,60 L600,65 L640,40 L680,45 L720,30 L760,20 L800,25 L840,15 L880,30 L920,20 L960,10 L1000,5"
                        fill="none"
                        stroke={THEME.primary}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            )}

            {/* Transactions Table */}
            {(activeNav === "Dashboard" || activeNav === "Transactions") && (
              <div className="bg-white border rounded-[8px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden" style={{ borderColor: THEME.border }}>
              <div className="px-[24px] py-[16px] border-b" style={{ borderColor: THEME.border }}>
                <h2 className="text-[16px] font-[600]">Recent Activity</h2>
              </div>
              
              <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr style={{ backgroundColor: THEME.surfaceSecondary, borderBottom: `1px solid ${THEME.border}` }}>
                      <th className="py-[12px] px-[24px] text-[13px] font-[600] uppercase tracking-[0.4px] w-[350px]" style={{ color: THEME.textMuted }}>Description</th>
                      <th className="py-[12px] px-[24px] text-[13px] font-[600] uppercase tracking-[0.4px]" style={{ color: THEME.textMuted }}>Category</th>
                      <th className="py-[12px] px-[24px] text-[13px] font-[600] uppercase tracking-[0.4px] text-right" style={{ color: THEME.textMuted }}>Amount</th>
                      <th className="py-[12px] px-[24px] text-[13px] font-[600] uppercase tracking-[0.4px] text-right" style={{ color: THEME.textMuted }}>Balance</th>
                      <th className="py-[12px] px-[24px] text-[13px] font-[600] uppercase tracking-[0.4px] text-center w-[150px]" style={{ color: THEME.textMuted }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TRANSACTIONS.map((trx, idx) => (
                      <motion.tr 
                        key={trx.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + (idx * 0.04), ease: "easeOut" }}
                        className="group transition-colors"
                        style={{ borderBottom: `1px solid ${THEME.border}` }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = THEME.surfaceSecondary}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        {/* Description & Icon */}
                        <td className="py-[16px] px-[24px]">
                          <div className="flex items-center gap-[16px]">
                            <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: THEME.surfaceSecondary }}>
                              <trx.icon className="w-[16px] h-[16px]" style={{ color: THEME.textPrimary }} />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[14px] font-[500] truncate max-w-[250px]">{trx.desc}</span>
                              <div className="flex items-center gap-[8px] mt-[2px]">
                                <span className={`text-[13px] font-[400] ${mono.className}`} style={{ color: THEME.textMuted }}>{trx.id}</span>
                                <div className="w-[3px] h-[3px] rounded-full" style={{ backgroundColor: THEME.borderStrong }} />
                                <span className="text-[12px]" style={{ color: THEME.textMuted }}>{trx.date}</span>
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Category */}
                        <td className="py-[16px] px-[24px]">
                          <div className="inline-flex items-center gap-[6px] px-[8px] py-[2px] rounded-[12px]" style={{ backgroundColor: trx.categoryBg }}>
                            {trx.category === "Income" && <ArrowDownLeft className="w-[12px] h-[12px]" style={{ color: THEME.positive }} />}
                            {trx.category === "Expense" && <ArrowUpRight className="w-[12px] h-[12px]" style={{ color: THEME.textSecondary }} />}
                            {trx.category === "Transfer" && <ArrowLeftRight className="w-[12px] h-[12px]" style={{ color: THEME.primary }} />}
                            <span className="text-[12px] font-[500]" style={{ color: THEME.textPrimary }}>{trx.category}</span>
                          </div>
                        </td>

                        {/* Amount */}
                        <td className={`py-[16px] px-[24px] text-right font-[500] text-[16px] tabular-nums ${mono.className}`}>
                          <span style={{ color: trx.amount > 0 ? THEME.positive : THEME.textPrimary }}>
                            {formatCurrency(trx.amount)}
                          </span>
                        </td>

                        {/* Balance */}
                        <td className={`py-[16px] px-[24px] text-right font-[500] text-[16px] tabular-nums ${mono.className}`} style={{ color: THEME.textMuted }}>
                          ${trx.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </td>

                        {/* Status */}
                        <td className="py-[16px] px-[24px] text-center">
                          <div className="inline-flex items-center gap-[4px] px-[8px] py-[2px] rounded-full mx-auto" 
                            style={{ 
                              backgroundColor: trx.status === 'Completed' ? THEME.positiveLight : (trx.status === 'Pending' ? THEME.warningLight : THEME.primaryLight),
                              color: trx.status === 'Completed' ? THEME.positive : (trx.status === 'Pending' ? THEME.warning : THEME.primary),
                            }}
                          >
                            {trx.status === 'Completed' && <CheckCircle2 className="w-[12px] h-[12px]" />}
                            {trx.status === 'Pending' && <Clock className="w-[12px] h-[12px]" />}
                            {trx.status === 'Processing' && <Loader2 className="w-[12px] h-[12px] animate-spin" />}
                            <span className="text-[11px] font-[600] tracking-[0.2px]">{trx.status}</span>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            )}

            {activeNav === "Transfers" && (
              <div className="flex-1 flex items-center justify-center min-h-[400px]">
                <div className="max-w-[400px] text-center flex flex-col items-center p-[48px]">
                  <SendHorizontal className="w-[48px] h-[48px] mb-[16px]" style={{ color: THEME.textMuted }} />
                  <h2 className="text-[16px] font-[600] mb-[8px]" style={{ color: THEME.textPrimary }}>No recent transfers</h2>
                  <p className="text-[14px] font-[400] mb-[24px]" style={{ color: THEME.textMuted }}>You haven't made any internal or external transfers yet.</p>
                  <button 
                    onClick={() => setIsTransferModalOpen(true)}
                    className="px-[16px] h-[36px] rounded-[6px] font-[500] text-[14px] text-white transition-colors"
                    style={{ backgroundColor: THEME.primary }}
                  >
                    Make your first transfer
                  </button>
                </div>
              </div>
            )}

            {activeNav === "Cards" && (
              <div className="flex-1 flex items-center justify-center min-h-[400px]">
                <div className="max-w-[400px] text-center flex flex-col items-center p-[48px]">
                  <CreditCard className="w-[48px] h-[48px] mb-[16px]" style={{ color: THEME.textMuted }} />
                  <h2 className="text-[16px] font-[600] mb-[8px]" style={{ color: THEME.textPrimary }}>Secure Virtual Cards</h2>
                  <p className="text-[14px] font-[400] mb-[24px]" style={{ color: THEME.textMuted }}>Generate unique virtual cards for online subscriptions and team expenses. Set strict limits and freeze them instantly.</p>
                  <button 
                    className="px-[16px] h-[36px] rounded-[6px] font-[500] text-[14px] text-white transition-colors"
                    style={{ backgroundColor: THEME.primary }}
                  >
                    Issue Virtual Card
                  </button>
                </div>
              </div>
            )}

            {activeNav === "Settings" && (
              <div className="max-w-[800px] w-full mx-auto py-[24px]">
                <div className="bg-white border rounded-[8px] p-[24px] mb-[24px]" style={{ borderColor: THEME.border }}>
                  <h3 className="text-[16px] font-[600] mb-[16px]">Account Profiles</h3>
                  <div className="flex items-center justify-between py-[12px] border-b" style={{ borderColor: THEME.border }}>
                    <div className="flex flex-col">
                      <span className="text-[14px] font-[500]">Acme Limited Main</span>
                      <span className={`text-[13px] font-[400] mt-[2px] ${mono.className}`} style={{ color: THEME.textMuted }}>**** 4521</span>
                    </div>
                    <button className="text-[13px] font-[500] hover:underline" style={{ color: THEME.primary }}>Manage</button>
                  </div>
                  <div className="flex items-center justify-between py-[12px]">
                    <div className="flex flex-col">
                      <span className="text-[14px] font-[500]">Acme Savings</span>
                      <span className={`text-[13px] font-[400] mt-[2px] ${mono.className}`} style={{ color: THEME.textMuted }}>**** 8902</span>
                    </div>
                    <button className="text-[13px] font-[500] hover:underline" style={{ color: THEME.primary }}>Manage</button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* 
        ========================================================================
        MODALS
        ========================================================================
      */}
      <AnimatePresence>
        {isTransferModalOpen && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-[24px] font-sans">
            {/* Extremely dark backdrop per DESIGN.md Gravitas rule */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
              onClick={() => setIsTransferModalOpen(false)}
            />
            
            {/* Modal Body */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-[440px] bg-white rounded-[12px] p-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] flex flex-col"
            >
              <div className="w-[48px] h-[48px] rounded-full mx-auto flex items-center justify-center mb-[16px]" style={{ backgroundColor: THEME.primaryLight }}>
                <SendHorizontal className="w-[24px] h-[24px]" style={{ color: THEME.primary }} />
              </div>
              
              <h2 className="text-[20px] font-[600] text-center mb-[24px]" style={{ color: THEME.textPrimary }}>Confirm Transfer</h2>

              <div className="flex flex-col gap-[16px] mb-[24px]">
                
                {/* Input block visually styled as summary */}
                <div>
                  <label className="block text-[13px] font-[600] uppercase tracking-[0.4px] mb-[8px]" style={{ color: THEME.textMuted }}>Amount</label>
                  <div className="flex w-full h-[36px] rounded-[6px] overflow-hidden border focus-within:ring-[3px]" style={{ borderColor: THEME.borderStrong, '--tw-ring-color': 'rgba(0,82,204,0.12)' } as React.CSSProperties}>
                    <div className="px-[12px] flex items-center justify-center shrink-0 border-r" style={{ backgroundColor: THEME.surfaceSecondary, borderColor: THEME.borderStrong }}>
                      <span className="text-[14px] font-[500]" style={{ color: THEME.textMuted }}>USD</span>
                    </div>
                    <input 
                      type="number"
                      autoFocus
                      placeholder="0.00"
                      value={transferAmount}
                      onChange={(e) => setTransferAmount(e.target.value)}
                      className={`flex-1 px-[12px] text-right text-[16px] font-[500] tabular-nums outline-none ${mono.className}`}
                    />
                  </div>
                </div>

                <div className="border rounded-[6px] overflow-hidden" style={{ borderColor: THEME.border }}>
                  <div className="flex items-center justify-between p-[12px] border-b" style={{ borderColor: THEME.border }}>
                    <span className="text-[14px]" style={{ color: THEME.textSecondary }}>From</span>
                    <span className="text-[14px] font-[500]">Acme Limited Main</span>
                  </div>
                  <div className="flex items-center justify-between p-[12px] border-b" style={{ borderColor: THEME.border }}>
                    <span className="text-[14px]" style={{ color: THEME.textSecondary }}>To</span>
                    <span className="text-[14px] font-[500]">Stripe Capital</span>
                  </div>
                  <div className="flex items-center justify-between p-[12px] bg-gray-50/50">
                    <span className="flex items-center gap-[6px] text-[14px]" style={{ color: THEME.textSecondary }}>
                      Fee <Info className="w-[14px] h-[14px]" style={{ color: THEME.textMuted }} />
                    </span>
                    <span className={`text-[14px] font-[500] tabular-nums ${mono.className}`}>$2.50</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-[16px] border-t" style={{ borderColor: THEME.borderStrong }}>
                  <span className="text-[16px] font-[600]" style={{ color: THEME.textPrimary }}>Total</span>
                  <span className={`text-[20px] font-[600] tabular-nums ${mono.className}`} style={{ color: THEME.textPrimary }}>
                    ${(parseFloat(transferAmount || "0") + 2.50).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-[12px]">
                <button 
                  onClick={() => setIsTransferModalOpen(false)}
                  className="flex-1 h-[36px] rounded-[6px] font-[500] text-[14px] hover:bg-gray-50 transition-colors border"
                  style={{ color: THEME.textPrimary, borderColor: THEME.borderStrong }}
                >
                  Cancel
                </button>
                <button 
                  className="flex-1 h-[36px] rounded-[6px] font-[500] text-[14px] text-white transition-colors"
                  style={{ backgroundColor: THEME.primary }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = THEME.primaryHover}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = THEME.primary}
                  onClick={() => setIsTransferModalOpen(false)}
                >
                  Confirm Transfer
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
