"use client";

import React, { useState, useEffect } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  FileText, Layers, ExternalLink, ArrowLeft,
  LayoutDashboard, ShoppingCart, Users, Package, BarChart3, Settings, ChevronDown,
  ChevronRight, Download, Plus, 
  DollarSign, TrendingUp, TrendingDown, Target, Minus,
  CheckCircle2, Loader2, Clock, XCircle, MoreHorizontal,
  ChevronLeft, X, Inbox, RotateCcw, ArrowUpDown, Menu
} from "lucide-react";

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const jbMono = JetBrains_Mono({ subsets: ['latin'], weight: ['400'] });

const THEME = {
  "--color-primary": "#2563EB",
  "--color-primary-hover": "#1D4ED8",
  "--color-primary-light": "#EFF6FF",
  "--color-primary-dark": "#1E40AF",
  "--color-bg": "#FAFAFA",
  "--color-surface": "#FFFFFF",
  "--color-surface-secondary": "#F5F5F5",
  "--color-border": "#E5E7EB",
  "--color-border-strong": "#D1D5DB",
  "--color-text-primary": "#111827",
  "--color-text-secondary": "#4B5563",
  "--color-text-muted": "#9CA3AF",
  "--color-success": "#059669",
  "--color-success-light": "#ECFDF5",
  "--color-warning": "#D97706",
  "--color-warning-light": "#FFFBEB",
  "--color-error": "#DC2626",
  "--color-error-light": "#FEF2F2",
} as React.CSSProperties;

const navItems = [
  { name: "Overview", icon: LayoutDashboard },
  { name: "Orders", icon: ShoppingCart },
  { name: "Customers", icon: Users },
  { name: "Products", icon: Package },
  { name: "Analytics", icon: BarChart3 },
  { name: "Settings", icon: Settings },
];

const mockOrders = [
  { id: "#ORD-7291", customer: "Acme Corp", date: "Oct 24, 2026", amount: "$4,500.00", status: "Completed" },
  { id: "#ORD-7292", customer: "Globex Inc", date: "Oct 24, 2026", amount: "$12,450.00", status: "Processing" },
  { id: "#ORD-7293", customer: "Soylent", date: "Oct 23, 2026", amount: "$850.00", status: "Pending" },
  { id: "#ORD-7294", customer: "Initech", date: "Oct 23, 2026", amount: "$3,200.00", status: "Completed" },
  { id: "#ORD-7295", customer: "Umbrella Corp", date: "Oct 22, 2026", amount: "$1,420.00", status: "Failed" },
  { id: "#ORD-7296", customer: "Stark Ind", date: "Oct 22, 2026", amount: "$9,800.00", status: "Completed" },
  { id: "#ORD-7297", customer: "Wayne Ent", date: "Oct 21, 2026", amount: "$2,100.00", status: "Processing" },
  { id: "#ORD-7298", customer: "Cyberdyne", date: "Oct 21, 2026", amount: "$45,000.00", status: "Completed" },
];

export function EnterprisePreview() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [isEmptyState, setIsEmptyState] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (toastVisible) {
      const timer = setTimeout(() => setToastVisible(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [toastVisible]);

  const handleCreateOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
    setToastVisible(true);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return (
          <span className="inline-flex items-center gap-[4px] bg-[var(--color-success-light)] text-[var(--color-success)] px-[8px] py-[2px] rounded-[4px] text-[12px] font-[500]">
            <CheckCircle2 className="w-[12px] h-[12px]" /> Completed
          </span>
        );
      case "Processing":
        return (
          <span className="inline-flex items-center gap-[4px] bg-[var(--color-primary-light)] text-[var(--color-primary)] px-[8px] py-[2px] rounded-[4px] text-[12px] font-[500]">
            <Loader2 className="w-[12px] h-[12px] animate-spin" /> Processing
          </span>
        );
      case "Pending":
        return (
          <span className="inline-flex items-center gap-[4px] bg-[var(--color-warning-light)] text-[var(--color-warning)] px-[8px] py-[2px] rounded-[4px] text-[12px] font-[500]">
            <Clock className="w-[12px] h-[12px]" /> Pending
          </span>
        );
      case "Failed":
        return (
          <span className="inline-flex items-center gap-[4px] bg-[var(--color-error-light)] text-[var(--color-error)] px-[8px] py-[2px] rounded-[4px] text-[12px] font-[500]">
            <XCircle className="w-[12px] h-[12px]" /> Failed
          </span>
        );
      default: return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[500] w-full flex flex-col min-h-screen bg-[var(--weft-black)] overflow-hidden">
      {/* Weft Chrome Wrapper */}
      <header className="h-[48px] bg-[var(--weft-black)] border-b border-[var(--weft-gray-900)] flex items-center justify-between px-4 shrink-0 z-[100] sticky top-0">
        <div className="flex items-center gap-4">
          <span className="font-sans text-[14px] font-[500] text-[var(--weft-white)]">Enterprise SaaS</span>
          <div className="hidden sm:flex items-center gap-3 font-mono text-[12px] text-[var(--weft-gray-400)]">
            <span className="flex items-center gap-1.5"><FileText className="w-[12px] h-[12px]" /> 534 lines</span>
            <span className="flex items-center gap-1.5"><Layers className="w-[12px] h-[12px]" /> 12 sections</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://github.com/Donald-Edinam/weft-design/blob/main/src/systems/enterprise-saas/DESIGN.md" target="_blank" rel="noopener noreferrer" className="hidden sm:flex flex-row-reverse items-center gap-1.5 font-sans text-[13px] font-[500] text-[var(--weft-gold)] hover:text-[var(--weft-gold-hover)] transition-colors">
            View DESIGN.md <ExternalLink className="w-[14px] h-[14px]" />
          </a>
          <Link href="/systems" className="flex items-center gap-1.5 font-sans text-[13px] font-[500] text-[var(--weft-gray-400)] hover:text-[var(--weft-white)] transition-colors">
            <ArrowLeft className="w-[14px] h-[14px]" /> All Systems
          </Link>
        </div>
      </header>

      {/* Enterprise Workspace */}
      <div 
        style={THEME} 
        className={`flex-1 flex w-full relative bg-[var(--color-bg)] text-[var(--color-text-secondary)] ${inter.className} text-[14px] leading-[1.6]`}
      >
        {/* Sidebar Desktop/Tablet */}
        <aside className="hidden sm:flex flex-col border-r border-[var(--color-border)] bg-[var(--color-surface)] sm:w-[64px] lg:w-[240px] shrink-0 sticky top-[48px] h-[calc(100vh-48px)] z-40 transition-all duration-200 overflow-hidden">
          <div className="h-[48px] flex items-center px-4 lg:px-[16px] sm:justify-center lg:justify-start shrink-0">
            <div className="w-[24px] h-[24px] bg-[var(--color-primary)] rounded-[4px] shrink-0" />
            <span className="ml-[12px] font-[600] text-[16px] text-[var(--color-text-primary)] hidden lg:block tracking-[-0.2px]">Company</span>
          </div>
          
          <nav className="flex-1 px-[12px] py-[16px] space-y-[4px]">
            {navItems.map((item) => {
              const isActive = activeTab === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => setActiveTab(item.name)}
                  className={`w-full flex items-center h-[36px] px-[8px] rounded-[6px] transition-colors relative ${isActive ? 'bg-[var(--color-primary-light)] text-[var(--color-primary)]' : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-secondary)]'}`}
                >
                  {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-[16px] rounded-r-[2px] bg-[var(--color-primary)] hidden lg:block" />}
                  <item.icon className="w-[18px] h-[18px] sm:mx-auto lg:mx-0 shrink-0" />
                  <span className="ml-[12px] text-[14px] font-[500] hidden lg:block">{item.name}</span>
                </button>
              );
            })}
          </nav>
          
          <div className="p-[12px] border-t border-[var(--color-border)] shrink-0">
             <div className="flex items-center sm:justify-center lg:justify-start h-[36px] px-[8px] hover:bg-[var(--color-surface-secondary)] rounded-[6px] cursor-pointer cursor">
               <div className="w-[24px] h-[24px] rounded-full bg-[#E0E7FF] text-[var(--color-primary)] flex items-center justify-center font-[500] text-[11px] shrink-0">
                 JC
               </div>
               <span className="ml-[12px] text-[14px] font-[500] text-[var(--color-text-primary)] hidden lg:block flex-1 text-left truncate">Jane Cooper</span>
               <ChevronDown className="w-[16px] h-[16px] text-[var(--color-text-muted)] hidden lg:block shrink-0" />
             </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <header className="h-[64px] border-b border-[var(--color-border)] bg-[var(--color-surface)] px-[16px] md:px-[32px] flex items-center justify-between sticky top-[48px] z-30 shrink-0">
            <div className="flex items-center gap-[16px]">
              <button 
                className="sm:hidden text-[var(--color-text-primary)] p-[8px] -ml-[8px] hover:bg-[var(--color-surface-secondary)] rounded-[6px]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="w-[20px] h-[20px]" />
              </button>
              <div>
                <div className="flex items-center text-[13px] text-[var(--color-text-muted)] mb-[2px]">
                  <span>Home</span>
                  <ChevronRight className="w-[10px] h-[10px] mx-[6px]" />
                  <span>{activeTab}</span>
                </div>
                <h1 className="text-[24px] font-[600] text-[var(--color-text-primary)] leading-[1.2] tracking-[-0.3px]">{activeTab}</h1>
              </div>
            </div>
            
            <div className="flex items-center gap-[8px]">
              <button className="hidden sm:flex items-center justify-center h-[36px] px-[16px] rounded-[6px] border border-[var(--color-border-strong)] text-[14px] font-[500] text-[var(--color-text-primary)] hover:bg-[var(--color-surface-secondary)] active:bg-[#E5E7EB] transition-colors">
                <Download className="w-[16px] h-[16px] mr-[6px]" /> Export
              </button>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center h-[36px] px-[16px] rounded-[6px] bg-[var(--color-primary)] text-white text-[14px] font-[500] hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-dark)] active:scale-[0.98] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
              >
                <Plus className="w-[16px] h-[16px] sm:mr-[6px]" /> <span className="hidden sm:inline">New Order</span>
              </button>
            </div>
          </header>

          {/* Scrollable Content */}
          <div className="flex-1 p-[16px] md:p-[32px] overflow-auto">
            {activeTab === "Overview" ? (
              <>
                {/* Metric Cards Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[16px] lg:gap-[24px] mb-[32px]">
              {/* Card 1 */}
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[8px] p-[24px]">
                <div className="flex items-center gap-[8px] mb-[12px]">
                   <DollarSign className="w-[18px] h-[18px] text-[var(--color-text-muted)]" />
                   <h3 className="text-[12px] font-[500] text-[var(--color-text-muted)] uppercase tracking-[0.5px]">Total Revenue</h3>
                </div>
                <div className="flex items-end gap-[12px]">
                  <div className={`text-[30px] font-[700] text-[var(--color-text-primary)] leading-[1.2] tracking-[-0.5px] tabular-nums`}>$48,250.00</div>
                  <div className="flex items-center gap-[4px] text-[13px] font-[500] text-[var(--color-success)] pb-[4px]">
                    <TrendingUp className="w-[14px] h-[14px]" /> 12.5%
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[8px] p-[24px]">
                <div className="flex items-center gap-[8px] mb-[12px]">
                   <Users className="w-[18px] h-[18px] text-[var(--color-text-muted)]" />
                   <h3 className="text-[12px] font-[500] text-[var(--color-text-muted)] uppercase tracking-[0.5px]">Active Users</h3>
                </div>
                <div className="flex items-end gap-[12px]">
                  <div className={`text-[30px] font-[700] text-[var(--color-text-primary)] leading-[1.2] tracking-[-0.5px] tabular-nums`}>2,847</div>
                  <div className="flex items-center gap-[4px] text-[13px] font-[500] text-[var(--color-success)] pb-[4px]">
                    <TrendingUp className="w-[14px] h-[14px]" /> 4.2%
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[8px] p-[24px]">
                <div className="flex items-center gap-[8px] mb-[12px]">
                   <ShoppingCart className="w-[18px] h-[18px] text-[var(--color-text-muted)]" />
                   <h3 className="text-[12px] font-[500] text-[var(--color-text-muted)] uppercase tracking-[0.5px]">Orders</h3>
                </div>
                <div className="flex items-end gap-[12px]">
                  <div className={`text-[30px] font-[700] text-[var(--color-text-primary)] leading-[1.2] tracking-[-0.5px] tabular-nums`}>384</div>
                  <div className="flex items-center gap-[4px] text-[13px] font-[500] text-[var(--color-error)] pb-[4px]">
                    <TrendingDown className="w-[14px] h-[14px]" /> 2.1%
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[8px] p-[24px]">
                <div className="flex items-center gap-[8px] mb-[12px]">
                   <Target className="w-[18px] h-[18px] text-[var(--color-text-muted)]" />
                   <h3 className="text-[12px] font-[500] text-[var(--color-text-muted)] uppercase tracking-[0.5px]">Conversion</h3>
                </div>
                <div className="flex items-end gap-[12px]">
                  <div className={`text-[30px] font-[700] text-[var(--color-text-primary)] leading-[1.2] tracking-[-0.5px] tabular-nums`}>3.6%</div>
                  <div className="flex items-center gap-[4px] text-[13px] font-[500] text-[var(--color-text-muted)] pb-[4px]">
                    <Minus className="w-[14px] h-[14px]" /> 0%
                  </div>
                </div>
              </div>
            </div>

            {/* Data Table Container */}
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[8px] flex flex-col">
              <div className="p-[24px] border-b border-[var(--color-border)] flex items-center justify-between">
                <div>
                  <h2 className="text-[16px] font-[600] text-[var(--color-text-primary)]">Recent Orders</h2>
                  <p className="text-[13px] text-[var(--color-text-muted)] mt-[2px]">Manage and track your latest transactions.</p>
                </div>
                <button 
                  onClick={() => setIsEmptyState(!isEmptyState)}
                  className="text-[13px] font-[500] text-[var(--color-primary)] hover:underline"
                >
                  Toggle Empty State
                </button>
              </div>

              {!isEmptyState ? (
                <>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                      <thead>
                        <tr className="bg-[var(--color-surface-secondary)] border-b border-[var(--color-border)]">
                          <th scope="col" className="px-[16px] py-[12px] text-[12px] font-[500] text-[var(--color-text-muted)] uppercase tracking-[0.5px]">
                            <div className="flex items-center cursor-pointer hover:text-[var(--color-text-primary)]">Order ID <ArrowUpDown className="w-[12px] h-[12px] ml-[4px]" /></div>
                          </th>
                          <th scope="col" className="px-[16px] py-[12px] text-[12px] font-[500] text-[var(--color-text-muted)] uppercase tracking-[0.5px]">Customer</th>
                          <th scope="col" className="px-[16px] py-[12px] text-[12px] font-[500] text-[var(--color-text-muted)] uppercase tracking-[0.5px]">
                            <div className="flex items-center cursor-pointer hover:text-[var(--color-text-primary)]">Date <ArrowUpDown className="w-[12px] h-[12px] ml-[4px]" /></div>
                          </th>
                          <th scope="col" className="px-[16px] py-[12px] text-[12px] font-[500] text-[var(--color-text-muted)] uppercase tracking-[0.5px] text-right">Amount</th>
                          <th scope="col" className="px-[16px] py-[12px] text-[12px] font-[500] text-[var(--color-text-muted)] uppercase tracking-[0.5px] text-center">Status</th>
                          <th scope="col" className="px-[16px] py-[12px] text-[12px] font-[500] text-[var(--color-text-muted)] uppercase tracking-[0.5px] text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--color-border)]">
                        {mockOrders.map((order) => (
                          <tr key={order.id} className="hover:bg-[var(--color-surface-secondary)] transition-colors group">
                            <td className={`px-[16px] py-[12px] text-[13px] text-[var(--color-text-primary)] ${jbMono.className}`}>{order.id}</td>
                            <td className="px-[16px] py-[12px] text-[14px] text-[var(--color-text-primary)] font-[500]">{order.customer}</td>
                            <td className="px-[16px] py-[12px] text-[14px] text-[var(--color-text-secondary)]">{order.date}</td>
                            <td className="px-[16px] py-[12px] text-[14px] text-[var(--color-text-primary)] tabular-nums text-right">{order.amount}</td>
                            <td className="px-[16px] py-[12px] text-center">
                              {getStatusBadge(order.status)}
                            </td>
                            <td className="px-[16px] py-[12px] text-right">
                              <button className="w-[36px] h-[36px] inline-flex items-center justify-center rounded-[6px] text-[var(--color-text-secondary)] hover:bg-[var(--color-border)] transition-colors">
                                <MoreHorizontal className="w-[16px] h-[16px]" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {/* Pagination */}
                  <div className="p-[16px] border-t border-[var(--color-border)] flex items-center justify-end gap-[16px]">
                    <span className="text-[13px] text-[var(--color-text-muted)]">1-8 of 248</span>
                    <div className="flex items-center gap-[8px]">
                      <button className="w-[32px] h-[32px] inline-flex items-center justify-center rounded-[6px] border border-[var(--color-border-strong)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-secondary)] disabled:opacity-50">
                        <ChevronLeft className="w-[16px] h-[16px]" />
                      </button>
                      <button className="w-[32px] h-[32px] inline-flex items-center justify-center rounded-[6px] border border-[var(--color-border-strong)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-secondary)]">
                        <ChevronRight className="w-[16px] h-[16px]" />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                /* Empty State */
                <div className="flex flex-col items-center justify-center py-[64px] px-[24px]">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Inbox className="w-[48px] h-[48px] text-[var(--color-text-muted)] mb-[16px]" />
                  </motion.div>
                  <h3 className="text-[16px] font-[600] text-[var(--color-text-primary)] mb-[8px]">No results found</h3>
                  <p className="text-[14px] text-[var(--color-text-secondary)] mb-[24px] text-center max-w-[320px]">
                    Try adjusting your filters or search terms to find what you're looking for.
                  </p>
                  <button 
                    onClick={() => setIsEmptyState(false)}
                    className="flex items-center justify-center h-[36px] px-[16px] rounded-[6px] bg-[var(--color-primary)] text-white text-[14px] font-[500] hover:bg-[var(--color-primary-hover)] active:translate-y-[1px] transition-all"
                  >
                    <RotateCcw className="w-[16px] h-[16px] mr-[6px]" /> Clear Filters
                  </button>
                </div>
              )}
            </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-[64px] px-[24px] mt-[32px]">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Inbox className="w-[48px] h-[48px] text-[var(--color-text-muted)] mb-[16px]" />
                </motion.div>
                <h3 className="text-[16px] font-[600] text-[var(--color-text-primary)] mb-[8px]">No {activeTab.toLowerCase()} found</h3>
                <p className="text-[14px] text-[var(--color-text-secondary)] mb-[24px] text-center max-w-[320px]">
                  {activeTab === 'Settings' 
                    ? "Configure your workspace and customize your experience." 
                    : `You don't have any ${activeTab.toLowerCase()} yet. Create one to get started.`}
                </p>
                {activeTab !== 'Settings' && (
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center h-[36px] px-[16px] rounded-[6px] bg-[var(--color-primary)] text-white text-[14px] font-[500] hover:bg-[var(--color-primary-hover)] active:scale-[0.98] transition-all"
                  >
                    <Plus className="w-[16px] h-[16px] mr-[6px]" /> Add {activeTab === 'Analytics' ? 'Report' : activeTab === 'Orders' ? 'Order' : activeTab.slice(0, -1)}
                  </button>
                )}
              </div>
            )}
          </div>
        </main>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className={`fixed inset-0 z-[200] flex items-center justify-center p-[16px] ${inter.className}`} style={THEME}>
            {/* Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/40"
            />
            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.15, ease: "easeIn" } }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[480px] bg-[var(--color-surface)] rounded-[12px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col"
            >
               <div className="px-[24px] pt-[24px] pb-[16px] flex items-center justify-between">
                 <h2 className="text-[20px] font-[600] text-[var(--color-text-primary)] tracking-[-0.2px]">New Order</h2>
                 <button 
                   onClick={() => setIsModalOpen(false)}
                   className="w-[36px] h-[36px] -mr-[8px] -mt-[8px] flex items-center justify-center rounded-[6px] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                 >
                   <X className="w-[16px] h-[16px]" />
                 </button>
               </div>
               
               <form onSubmit={handleCreateOrder} className="px-[24px] pb-[24px] flex flex-col gap-[20px]">
                 <div className="flex flex-col gap-[8px]">
                   <label className="text-[14px] font-[500] text-[var(--color-text-primary)]">Customer Name <span className="text-[var(--color-error)]">*</span></label>
                   <input type="text" placeholder="e.g. Acme Corp" required className="h-[36px] px-[12px] border border-[var(--color-border-strong)] rounded-[6px] text-[14px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-[3px] focus:ring-[rgba(37,99,235,0.1)] transition-all" />
                 </div>
                 
                 <div className="flex flex-col gap-[8px]">
                   <label className="text-[14px] font-[500] text-[var(--color-text-primary)]">Product</label>
                   <div className="relative">
                     <select className="w-full appearance-none h-[36px] px-[12px] border border-[var(--color-border-strong)] rounded-[6px] text-[14px] text-[var(--color-text-primary)] bg-[var(--color-surface)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-[3px] focus:ring-[rgba(37,99,235,0.1)] transition-all">
                       <option>Premium Subscription</option>
                       <option>Basic Plan</option>
                       <option>Enterprise License</option>
                     </select>
                     <ChevronDown className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[var(--color-text-muted)] pointer-events-none" />
                   </div>
                 </div>

                 <div className="flex flex-col gap-[8px]">
                   <label className="text-[14px] font-[500] text-[var(--color-text-primary)]">Amount</label>
                   <div className="relative">
                     <DollarSign className="absolute left-[12px] top-1/2 -translate-y-1/2 w-[14px] h-[14px] text-[var(--color-text-muted)] pointer-events-none" />
                     <input type="number" placeholder="0.00" min="0" step="0.01" className="w-full h-[36px] pl-[32px] pr-[12px] border border-[var(--color-border-strong)] rounded-[6px] text-[14px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-[3px] focus:ring-[rgba(37,99,235,0.1)] transition-all" />
                   </div>
                 </div>

                 <div className="flex flex-col gap-[8px]">
                   <label className="text-[14px] font-[500] text-[var(--color-text-primary)]">Notes</label>
                   <textarea rows={3} placeholder="Optional details..." className="p-[12px] border border-[var(--color-border-strong)] rounded-[6px] text-[14px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-[3px] focus:ring-[rgba(37,99,235,0.1)] transition-all resize-none"></textarea>
                 </div>

                 <div className="mt-[4px] pt-[16px] border-t border-[var(--color-border)] flex items-center justify-end gap-[8px]">
                    <button type="button" onClick={() => setIsModalOpen(false)} className="h-[36px] px-[16px] rounded-[6px] border border-[var(--color-border-strong)] text-[14px] font-[500] text-[var(--color-text-primary)] hover:bg-[var(--color-surface-secondary)] active:bg-[#E5E7EB] transition-colors">
                      Cancel
                    </button>
                    <button type="submit" className="h-[36px] px-[16px] rounded-[6px] bg-[var(--color-primary)] text-white text-[14px] font-[500] hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-dark)] active:scale-[0.98] transition-all">
                      Create Order
                    </button>
                 </div>
               </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* TOAST */}
      <AnimatePresence>
        {toastVisible && (
          <div style={THEME} className="fixed bottom-[24px] right-[24px] z-[210]">
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: 20, transition: { duration: 0.15 } }}
               transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 300 }}
               className={`w-full max-w-[360px] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[8px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-[16px] border-l-[3px] border-l-[var(--color-success)] flex items-start gap-[12px] ${inter.className}`}
             >
                <CheckCircle2 className="w-[16px] h-[16px] text-[var(--color-success)] shrink-0 mt-[2px]" />
                <span className="text-[14px] font-[500] text-[var(--color-text-primary)] flex-1">Order created successfully.</span>
                <button onClick={() => setToastVisible(false)} className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] shrink-0">
                   <X className="w-[16px] h-[16px]" />
                </button>
             </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
