"use client";

import React, { useState } from "react";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Signal, Wifi, BatteryFull,
  Bell, Sun, Banknote, ShoppingBag, Users, Clock, ArrowRight, Circle, Plus,
  Search, SlidersHorizontal, RefreshCw, Phone, MapPin, ChevronRight, 
  MessageCircle, Smartphone, CreditCard, LogOut, Home, ClipboardList, Settings,
  CheckCircle2, XCircle, AlertCircle
} from "lucide-react";
import { PreviewChrome } from "@/components/shared/PreviewChrome";

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const jbMono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'] });

const THEME = {
  "--color-primary": "#005F8E",
  "--color-primary-hover": "#004D73",
  "--color-primary-light": "#E8F4F8",
  "--color-primary-dark": "#003D5C",
  "--color-accent": "#FFB703",
  "--color-accent-dark": "#CC9200",
  "--color-accent-light": "#FFF8E1",
  "--color-bg": "#FAFAFA",
  "--color-surface": "#FFFFFF",
  "--color-surface-warm": "#F8F7F4",
  "--color-border": "#E5E5E5",
  "--color-text-primary": "#1A1A1A",
  "--color-text-secondary": "#555555",
  "--color-text-muted": "#888888",
  "--color-success": "#16A34A",
  "--color-success-light": "#F0FDF4",
  "--color-warning": "#CA8A04",
  "--color-warning-light": "#FEFCE8",
  "--color-error": "#DC2626",
  "--color-error-light": "#FEF2F2",
} as React.CSSProperties;

type OrderStatus = 'Ready' | 'In Progress' | 'New' | 'Delivered' | 'Cancelled';

interface Order {
  id: string;
  status: OrderStatus;
  customer: string;
  itemsSummary: string;
  amount: string;
  time: string;
  phone?: string;
  delivery?: string;
}

const recentOrders: Order[] = [
  { id: "#BRZ-0847", status: "Ready", customer: "Ama Mensah", itemsSummary: "3 items — Wash & Fold", amount: "GHS 85.00", time: "2 hours ago", phone: "+233 24 123 4567", delivery: "GHS 15.00" },
  { id: "#BRZ-0846", status: "In Progress", customer: "Kwame Asante", itemsSummary: "1 item — Dry Clean", amount: "GHS 120.00", time: "4 hours ago", phone: "+233 50 987 6543", delivery: "GHS 0.00" },
  { id: "#BRZ-0845", status: "New", customer: "Efua Owusu", itemsSummary: "5 items — Wash & Iron", amount: "GHS 65.00", time: "5 hours ago", phone: "+233 20 541 2369", delivery: "GHS 5.00" },
];

const allOrders: Order[] = [
  ...recentOrders,
  { id: "#BRZ-0844", status: "Delivered", customer: "Kofi Appiah", itemsSummary: "2 items — Dry Clean", amount: "GHS 150.00", time: "Yesterday", phone: "+233 27 654 3210", delivery: "GHS 10.00" },
  { id: "#BRZ-0843", status: "Ready", customer: "Abena Boateng", itemsSummary: "12 items — Wash & Fold", amount: "GHS 210.00", time: "Yesterday", phone: "+233 55 147 2589", delivery: "GHS 0.00" },
  { id: "#BRZ-0842", status: "Cancelled", customer: "Yaw Darko", itemsSummary: "1 item — Alteration", amount: "GHS 35.00", time: "Yesterday", phone: "+233 24 963 8527", delivery: "GHS 0.00" },
];

const customers = [
  { name: "Ama Mensah", phone: "+233 24 123 4567", orders: 12 },
  { name: "Kwame Asante", phone: "+233 50 987 6543", orders: 4 },
  { name: "Efua Owusu", phone: "+233 20 541 2369", orders: 8 },
  { name: "Kofi Appiah", phone: "+233 27 654 3210", orders: 2 },
  { name: "Abena Boateng", phone: "+233 55 147 2589", orders: 25 },
  { name: "Yaw Darko", phone: "+233 24 963 8527", orders: 1 },
];

export function AfricanMobilePreview() {
  const [activeTab, setActiveTab] = useState("Home");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const getStatusBadge = (status: OrderStatus) => {
    switch (status) {
      case "New":
        return { bg: "bg-[var(--color-primary-light)]", text: "text-[var(--color-primary)]", icon: Circle, fg: "fill-[var(--color-primary)] text-[var(--color-primary)]" };
      case "In Progress":
        return { bg: "bg-[var(--color-warning-light)]", text: "text-[var(--color-warning)]", icon: Circle, fg: "fill-[var(--color-warning)] text-[var(--color-warning)]" };
      case "Ready":
        return { bg: "bg-[var(--color-success-light)]", text: "text-[var(--color-success)]", icon: Circle, fg: "fill-[var(--color-success)] text-[var(--color-success)]" };
      case "Delivered":
        return { bg: "bg-[#F3F4F6]", text: "text-[var(--color-text-secondary)]", icon: CheckCircle2, fg: "" };
      case "Cancelled":
        return { bg: "bg-[var(--color-error-light)]", text: "text-[var(--color-error)]", icon: XCircle, fg: "" };
      default:
        return { bg: "bg-[var(--color-bg)]", text: "text-[var(--color-text-secondary)]", icon: Circle, fg: "" };
    }
  };

  const OrderCard = ({ order, dense = false }: { order: Order; dense?: boolean }) => {
    const badge = getStatusBadge(order.status);
    const Icon = badge.icon;
    
    return (
      <motion.div 
        whileTap={{ scale: 0.97, backgroundColor: "var(--color-surface-warm)" }}
        transition={{ duration: 0.08, ease: "easeOut" }}
        onClick={() => setSelectedOrder(order)}
        className={`bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[12px] p-[16px] flex flex-col gap-[8px] cursor-pointer touch-manipulation`}
      >
        <div className="flex items-center justify-between">
          <span className={`text-[14px] font-[500] text-[var(--color-text-muted)] tracking-[0.5px] ${jbMono.className}`}>{order.id}</span>
          <div className={`flex items-center gap-[4px] px-[10px] py-[4px] rounded-[6px] ${badge.bg} ${badge.text}`}>
            <Icon className={`w-[8px] h-[8px] ${badge.fg}`} />
            <span className="text-[11px] font-[600] uppercase tracking-[0.3px]">{order.status}</span>
          </div>
        </div>
        <div className="text-[16px] font-[600] text-[var(--color-text-primary)] leading-[1.3]">{order.customer}</div>
        <div className="text-[15px] text-[var(--color-text-muted)] truncate">{order.itemsSummary}</div>
        <div className={`flex items-end justify-between ${dense ? "mt-0" : "mt-[4px]"}`}>
          <div className="text-[18px] font-[700] text-[var(--color-text-primary)]">{order.amount}</div>
          <div className="text-[13px] text-[var(--color-text-muted)]">{order.time}</div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="fixed inset-0 z-[500] w-full flex flex-col min-h-screen bg-[var(--weft-black)] pt-[48px] overflow-hidden">
      <PreviewChrome 
        systemName="African Mobile-First"
        lines={512}
        sections={12}
        slug="african-mobile-first"
      />

      {/* Desktop Wrapper / Mobile Container */}
      <div className="flex-1 w-full bg-[var(--weft-gray-50)] sm:p-8 flex justify-center items-center overflow-hidden min-h-0">
        
        {/* CSS Phone Frame */}
        <div className="relative w-full h-full sm:w-[375px] sm:h-[812px] sm:max-h-full sm:rounded-[40px] sm:border-[8px] border-[#1A1A1A] bg-[var(--color-bg)] overflow-hidden flex flex-col sm:drop-shadow-2xl">
          
          {/* Status Bar */}
          <div className="h-[44px] bg-black text-white px-[24px] flex justify-between items-center text-[13px] font-[500] shrink-0 z-[50]">
            <span>9:41</span>
            <div className="flex items-center gap-[6px]">
              <Signal className="w-[12px] h-[12px]" />
              <Wifi className="w-[12px] h-[12px]" />
              <BatteryFull className="w-[12px] h-[12px]" />
            </div>
          </div>

          <div 
            style={THEME} 
            className={`flex-1 flex flex-col bg-[var(--color-bg)] text-[var(--color-text-secondary)] text-[15px] ${jakarta.className} relative overflow-hidden min-h-0`}
          >
            {/* Scrollable Area */}
            <div className="flex-1 overflow-x-hidden overflow-y-auto pb-[130px]">
              
              {/* === HOME VIEW === */}
              {activeTab === "Home" && (
                <div className="animate-in fade-in slide-in-from-left-4 duration-250 opacity-100">
                  <header className="px-[16px] py-[16px] flex items-center justify-between">
                    <h1 className="text-[18px] font-[600] text-[var(--color-text-primary)]">Sales <span className="text-[var(--color-primary)]">Hub</span></h1>
                    <button className="w-[40px] h-[40px] flex items-center justify-center -mr-[8px]">
                      <Bell className="w-[20px] h-[20px] text-[var(--color-text-primary)]" />
                    </button>
                  </header>

                  <div className="px-[16px] mb-[24px]">
                    <div className="flex items-center gap-[8px] text-[16px] font-[500] text-[var(--color-text-primary)] mb-[16px]">
                      Good morning, Kofi <Sun className="w-[16px] h-[16px] text-[var(--color-accent-dark)]" />
                    </div>

                    <div className="grid grid-cols-2 gap-[12px]">
                      {/* Revenue Card (Full Width) */}
                      <div className="col-span-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[12px] p-[16px] flex flex-col justify-between">
                        <div className="flex items-start gap-[6px] mb-[12px]">
                          <Banknote className="w-[16px] h-[16px] text-[var(--color-primary)] shrink-0 translate-y-[2px]" />
                          <span className="text-[11px] font-[600] uppercase tracking-[0.5px] text-[var(--color-text-muted)] line-clamp-1">Today's Revenue</span>
                        </div>
                        <div className="flex items-baseline gap-[6px]">
                          <span className="text-[18px] font-[600] text-[var(--color-text-muted)]">GHS</span>
                          <span className="text-[32px] font-[700] text-[var(--color-text-primary)] leading-[1.1] tracking-[-0.5px]">2,450.00</span>
                        </div>
                      </div>
                      
                      {/* Orders */}
                      <div className="col-span-1 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[12px] p-[16px] flex flex-col justify-between">
                        <div className="flex items-start gap-[6px] mb-[12px]">
                          <ShoppingBag className="w-[16px] h-[16px] text-[var(--color-primary)] shrink-0 translate-y-[2px]" />
                          <span className="text-[11px] font-[600] uppercase tracking-[0.5px] text-[var(--color-text-muted)] line-clamp-1">Orders</span>
                        </div>
                        <div className="text-[28px] font-[700] text-[var(--color-text-primary)] leading-[1.2] tracking-[-0.3px]">24</div>
                      </div>

                      {/* Customers */}
                      <div className="col-span-1 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[12px] p-[16px] flex flex-col justify-between">
                        <div className="flex items-start gap-[6px] mb-[12px]">
                          <Users className="w-[16px] h-[16px] text-[var(--color-primary)] shrink-0 translate-y-[2px]" />
                          <span className="text-[11px] font-[600] uppercase tracking-[0.5px] text-[var(--color-text-muted)] line-clamp-1">Customers</span>
                        </div>
                        <div className="text-[28px] font-[700] text-[var(--color-text-primary)] leading-[1.2] tracking-[-0.3px]">156</div>
                      </div>

                      {/* Pending (Full Width Alert) */}
                      <div className="col-span-2 bg-[var(--color-warning-light)] border border-[#FDE047] rounded-[12px] p-[16px] flex items-center justify-between">
                        <div className="flex items-center gap-[8px]">
                          <Clock className="w-[20px] h-[20px] text-[var(--color-warning)] shrink-0" />
                          <span className="text-[15px] font-[600] text-[var(--color-warning)] tracking-[0.2px]">Pending Actions</span>
                        </div>
                        <div className="text-[24px] font-[700] text-[var(--color-warning)] leading-[1.2] tracking-[-0.3px]">3</div>
                      </div>
                    </div>
                  </div>

                  <div className="px-[16px] flex items-center justify-between mb-[16px]">
                    <h2 className="text-[16px] font-[600] text-[var(--color-text-primary)]">Recent Orders</h2>
                    <button className="flex items-center gap-[4px] text-[15px] font-[500] text-[var(--color-primary)] group">
                      See All <ArrowRight className="w-[14px] h-[14px] transition-transform group-hover:translate-x-[2px]" />
                    </button>
                  </div>

                  <div className="px-[16px] flex flex-col gap-[16px]">
                    {recentOrders.map(order => <OrderCard key={order.id} order={order} />)}
                  </div>
                </div>
              )}

              {/* === ORDERS VIEW === */}
              {activeTab === "Orders" && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-250 opacity-100">
                  <header className="px-[16px] py-[16px] flex items-center justify-between sticky top-0 bg-[var(--color-bg)] z-[10] border-b border-[var(--color-border)]">
                    <h1 className="text-[22px] font-[700] text-[var(--color-text-primary)] tracking-[-0.2px]">Orders</h1>
                    <div className="flex items-center gap-[8px]">
                      <button className="w-[40px] h-[40px] flex items-center justify-center">
                        <Search className="w-[20px] h-[20px] text-[var(--color-text-primary)]" />
                      </button>
                      <button className="w-[40px] h-[40px] flex items-center justify-center -mr-[8px]">
                        <SlidersHorizontal className="w-[20px] h-[20px] text-[var(--color-text-primary)]" />
                      </button>
                    </div>
                  </header>

                  <div className="overflow-x-auto no-scrollbar border-b border-[var(--color-border)]">
                    <div className="flex px-[16px] w-max gap-[24px]">
                      {["All", "New", "In Progress", "Ready", "Delivered"].map((tab, i) => (
                        <button 
                          key={tab}
                          className={`py-[14px] text-[15px] font-[500] border-b-[2px] transition-colors whitespace-nowrap ${i === 0 ? 'border-[var(--color-primary)] text-[var(--color-primary)]' : 'border-transparent text-[var(--color-text-secondary)]'}`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center py-[16px]">
                    <RefreshCw className="w-[16px] h-[16px] text-[var(--color-text-muted)] animate-spin-slow opacity-50" />
                  </div>

                  <div className="px-[16px] flex flex-col gap-[12px] pb-[24px]">
                    {allOrders.map(order => <OrderCard key={order.id} order={order} dense />)}
                  </div>
                </div>
              )}

              {/* === CUSTOMERS VIEW === */}
              {activeTab === "Customers" && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-250 opacity-100">
                  <header className="px-[16px] py-[16px] flex items-center justify-between sticky top-0 bg-[var(--color-bg)] z-[10] border-b border-[var(--color-border)]">
                    <h1 className="text-[22px] font-[700] text-[var(--color-text-primary)] tracking-[-0.2px]">Customers</h1>
                    <button className="w-[40px] h-[40px] flex items-center justify-center -mr-[8px]">
                      <Search className="w-[20px] h-[20px] text-[var(--color-text-primary)]" />
                    </button>
                  </header>

                  <div className="flex flex-col">
                    {customers.map((c, i) => {
                      const initials = c.name.split(' ').map(n => n[0]).join('');
                      return (
                        <div key={i} className="flex items-center gap-[16px] p-[16px] border-b border-[var(--color-border)] bg-[var(--color-surface)] active:bg-[var(--color-surface-warm)] transition-colors">
                          <div className="w-[48px] h-[48px] rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] flex items-center justify-center font-[700] text-[18px] shrink-0">
                            {initials}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[15px] font-[500] text-[var(--color-text-primary)] truncate">{c.name}</div>
                            <div className="flex items-center gap-[12px] mt-[2px]">
                              <span className="flex items-center gap-[4px] text-[13px] text-[var(--color-text-secondary)]">
                                <Phone className="w-[14px] h-[14px] text-[var(--color-text-muted)]" /> {c.phone}
                              </span>
                              <span className="flex items-center gap-[4px] text-[13px] text-[var(--color-text-secondary)]">
                                <ShoppingBag className="w-[12px] h-[12px] text-[var(--color-text-muted)]" /> {c.orders}
                              </span>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* === SETTINGS VIEW === */}
              {activeTab === "Settings" && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-250 opacity-100">
                  <header className="px-[16px] py-[16px] flex items-center justify-between sticky top-0 bg-[var(--color-bg)] z-[10] border-b border-[var(--color-border)]">
                    <h1 className="text-[22px] font-[700] text-[var(--color-text-primary)] tracking-[-0.2px]">Settings</h1>
                  </header>

                  <div className="p-[16px] bg-[var(--color-surface)] border-b border-[var(--color-border)] mb-[24px] flex items-center justify-between active:bg-[var(--color-surface-warm)] transition-colors">
                    <div className="flex items-center gap-[16px]">
                      <div className="w-[56px] h-[56px] rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] flex items-center justify-center font-[700] text-[20px] shrink-0">
                        KA
                      </div>
                      <div>
                        <div className="text-[16px] font-[600] text-[var(--color-text-primary)]">Kofi Appiah</div>
                        <div className="flex items-center gap-[4px] text-[13px] text-[var(--color-text-secondary)] mt-[2px]">
                          <MapPin className="w-[14px] h-[14px] text-[var(--color-text-muted)]" /> Breeze Laundry, Osu
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-[20px] h-[20px] text-[var(--color-text-muted)]" />
                  </div>

                  <div className="bg-[var(--color-surface)] border-y border-[var(--color-border)] flex flex-col mb-[24px]">
                    <div className="flex items-center justify-between p-[16px] border-b border-[var(--color-border)]">
                      <div className="flex items-center gap-[12px] text-[15px] font-[400] text-[var(--color-text-primary)]">
                        <Bell className="w-[20px] h-[20px] text-[var(--color-text-muted)]" /> Notifications
                      </div>
                      <div className="w-[44px] h-[24px] rounded-full bg-[var(--color-primary)] p-[2px] transition-colors">
                         <div className="w-[20px] h-[20px] rounded-full bg-white translate-x-[20px] shadow-sm"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-[16px] border-b border-[var(--color-border)]">
                      <div className="flex items-center gap-[12px] text-[15px] font-[400] text-[var(--color-text-primary)]">
                        <MessageCircle className="w-[20px] h-[20px] text-[var(--color-text-muted)]" /> WhatsApp Notifications
                      </div>
                      <div className="w-[44px] h-[24px] rounded-full bg-[var(--color-primary)] p-[2px] transition-colors">
                         <div className="w-[20px] h-[20px] rounded-full bg-white translate-x-[20px] shadow-sm"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-[16px] border-b border-[var(--color-border)]">
                      <div className="flex items-center gap-[12px] text-[15px] font-[400] text-[var(--color-text-primary)]">
                        <Smartphone className="w-[20px] h-[20px] text-[var(--color-text-muted)]" /> SMS Fallback
                      </div>
                      <div className="w-[44px] h-[24px] rounded-full bg-[#E5E5E5] p-[2px] transition-colors">
                         <div className="w-[20px] h-[20px] rounded-full bg-white shadow-sm"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-[16px] border-b border-[var(--color-border)] active:bg-[var(--color-surface-warm)] transition-colors">
                      <div className="flex items-center gap-[12px] text-[15px] font-[400] text-[var(--color-text-primary)]">
                        <Clock className="w-[20px] h-[20px] text-[var(--color-text-muted)]" /> Business Hours
                      </div>
                      <ChevronRight className="w-[20px] h-[20px] text-[var(--color-text-muted)]" />
                    </div>
                    <div className="flex items-center justify-between p-[16px] active:bg-[var(--color-surface-warm)] transition-colors">
                      <div className="flex items-center gap-[12px] text-[15px] font-[400] text-[var(--color-text-primary)]">
                        <CreditCard className="w-[20px] h-[20px] text-[var(--color-text-muted)]" /> Payment Methods
                      </div>
                      <ChevronRight className="w-[20px] h-[20px] text-[var(--color-text-muted)]" />
                    </div>
                  </div>

                  <div className="bg-[var(--color-surface)] border-y border-[var(--color-border)] p-[16px] flex items-center justify-center gap-[8px] text-[var(--color-error)] font-[500] active:bg-[var(--color-error-light)] transition-colors">
                    <LogOut className="w-[18px] h-[18px]" /> Log Out
                  </div>
                </div>
              )}
            </div>

            {/* Sticky Floating Action Button (Only on Home/Orders) */}
            {(activeTab === "Home" || activeTab === "Orders") && (
              <div className="absolute bottom-[80px] sm:bottom-[100px] right-[16px] z-[90]">
                <button className="w-[56px] h-[56px] bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center shadow-lg active:scale-[0.97] transition-all">
                  <Plus className="w-[24px] h-[24px]" />
                </button>
              </div>
            )}

            {/* Bottom Tab Bar */}
            <div className="bg-[var(--color-surface)] border-t border-[var(--color-border)] absolute bottom-0 left-0 w-full flex flex-col z-[40]">
              <div className="h-[64px] flex items-center justify-around px-[8px] w-full">
                {[
                  { id: "Home", icon: Home },
                  { id: "Orders", icon: ClipboardList },
                  { id: "Customers", icon: Users },
                  { id: "Settings", icon: Settings }
                ].map(tab => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button 
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex flex-col items-center justify-center w-[25%] h-full gap-[4px] ${isActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-muted)]'}`}
                    >
                      <tab.icon className={`w-[22px] h-[22px] transition-transform ${isActive ? 'scale-110' : ''}`} />
                      <span className="text-[11px] font-[500]">{tab.id}</span>
                    </button>
                  )
                })}
              </div>
              {/* Desktop Safe Area Padding to clear the Home Indicator visually */}
              <div className="hidden sm:block h-[20px] shrink-0 pointer-events-none w-full" />
            </div>

            {/* Background Home Indicator for iPhone frame */}
            <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-[#1A1A1A] rounded-full z-[100] hidden sm:block pointer-events-none" />

            {/* Bottom Sheet */}
            <AnimatePresence>
              {selectedOrder && (
                <>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setSelectedOrder(null)}
                    className="absolute inset-0 bg-black/30 z-[200]"
                  />
                  <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute bottom-0 left-0 w-full max-h-[85vh] bg-[var(--color-surface)] rounded-t-[16px] shadow-[0_-4px_24px_rgba(0,0,0,0.1)] z-[210] flex flex-col"
                  >
                    {/* Handle */}
                    <div className="h-[24px] w-full flex justify-center pt-[8px] shrink-0" onClick={() => setSelectedOrder(null)}>
                      <div className="w-[40px] h-[4px] bg-[var(--color-border)] rounded-full" />
                    </div>

                    <div className="p-[24px] pt-[8px] flex-1 overflow-y-auto flex flex-col">
                      <div className="flex items-center justify-between mb-[16px]">
                        <span className={`text-[14px] font-[500] text-[var(--color-text-muted)] tracking-[0.5px] ${jbMono.className}`}>{selectedOrder.id}</span>
                        {(() => {
                          const badge = getStatusBadge(selectedOrder.status);
                          const Icon = badge.icon;
                          return (
                            <div className={`flex items-center gap-[4px] px-[10px] py-[4px] rounded-[6px] ${badge.bg} ${badge.text}`}>
                              <Icon className={`w-[8px] h-[8px] ${badge.fg}`} />
                              <span className="text-[11px] font-[600] uppercase tracking-[0.3px]">{selectedOrder.status}</span>
                            </div>
                          );
                        })()}
                      </div>

                      <div className="flex items-center justify-between mb-[24px]">
                        <h2 className="text-[18px] font-[600] text-[var(--color-text-primary)] leading-[1.3]">{selectedOrder.customer}</h2>
                        <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[var(--color-surface-warm)] text-[var(--color-primary)] shrink-0 active:scale-95 transition-transform">
                          <Phone className="w-[18px] h-[18px]" />
                        </button>
                      </div>

                      <div className="text-[15px] font-[600] text-[var(--color-text-primary)] mb-[12px]">Items</div>
                      <div className="bg-[var(--color-surface-warm)] rounded-[10px] p-[16px] mb-[24px] flex flex-col gap-[8px]">
                        <div className="text-[15px] text-[var(--color-text-secondary)]">{selectedOrder.itemsSummary}</div>
                        {selectedOrder.status === 'Ready' && (
                          <div className="text-[13px] text-[var(--color-text-muted)]">+ 2 other items automatically added</div>
                        )}
                      </div>

                      <div className="border-t border-[var(--color-border)] py-[16px] flex flex-col gap-[8px]">
                        <div className="flex justify-between text-[15px] text-[var(--color-text-secondary)]">
                          <span>Subtotal</span>
                          <span>{selectedOrder.amount}</span>
                        </div>
                        <div className="flex justify-between text-[15px] text-[var(--color-text-secondary)]">
                          <span>Delivery</span>
                          <span>{selectedOrder.delivery || "GHS 0.00"}</span>
                        </div>
                        <div className="flex justify-between text-[18px] font-[700] text-[var(--color-text-primary)] mt-[8px]">
                          <span>Total</span>
                          <span>
                            {/* Simple hack to sum string GHS amounts if needed, but we'll just display amount as total for visual mockup */}
                            {selectedOrder.amount}
                          </span>
                        </div>
                      </div>

                      <div className="mt-auto pt-[24px] flex flex-col gap-[12px]">
                        <button className="w-full min-h-[48px] bg-[#25D366] text-white rounded-[10px] font-[600] text-[15px] flex items-center justify-center gap-[8px] active:scale-[0.97] transition-all">
                          Chat on WhatsApp
                          <svg className="w-[20px] h-[20px] ml-[4px]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                          </svg>
                        </button>
                        <button className="w-full min-h-[48px] bg-[var(--color-primary)] text-white rounded-[10px] font-[600] text-[15px] flex items-center justify-center gap-[8px] active:scale-[0.97] transition-all">
                          <RefreshCw className="w-[18px] h-[18px]" /> Update Status
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
            
          </div>
        </div>
      </div>
    </div>
  );
}
