"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  FileText, 
  Layers, 
  ExternalLink, 
  ArrowLeft,
  Search,
  User,
  ShoppingBag,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Minus,
  Plus,
  ArrowRight,
  Heart
} from "lucide-react";
import { clsx } from "clsx";

// ----------------------------------------------------------------------
// CSS Tokens per DESIGN.md
// ----------------------------------------------------------------------
const THEME = {
  bg: "#FFFFFF",
  bgWarm: "#F8F7F4",
  primary: "#1A1A1A",
  primaryHover: "#333333",
  border: "#E8E8E8",
  borderLight: "#F0F0F0",
  textPrimary: "#1A1A1A",
  textSecondary: "#666666",
  textMuted: "#999999",
  sale: "#C62828",
};

// ----------------------------------------------------------------------
// Mock Data
// ----------------------------------------------------------------------
const PRODUCTS = [
  {
    id: 1,
    name: "Kente Silk Scarf",
    category: "Accessories",
    price: 450,
    colors: ["#D4D4CE", "#2C2C2C"],
    sizes: ["OS"],
    image: "#D4D4CE",
    hoverImage: "#C8C8C2",
  },
  {
    id: 2,
    name: "Sahara nomad boot",
    category: "Footwear",
    price: 1250,
    salePrice: 950,
    colors: ["#A67C52", "#1A1A1A"],
    sizes: ["40", "41", "42", "43", "44"],
    image: "#A67C52",
    hoverImage: "#9C744B",
  },
  {
    id: 3,
    name: "Oyo linen shirt",
    category: "Apparel",
    price: 680,
    colors: ["#FFFFFF", "#EAEAE4"],
    sizes: ["S", "M", "L", "XL"],
    image: "#EAEAE4",
    hoverImage: "#E0E0DA",
  },
  {
    id: 4,
    name: "Dahomey clay vase",
    category: "Home",
    price: 320,
    colors: ["#8B4513"],
    sizes: ["OS"],
    image: "#C4A484",
    hoverImage: "#B89678",
  },
  {
    id: 5,
    name: "Zambezi leather tote",
    category: "Accessories",
    price: 1800,
    colors: ["#1A1A1A", "#4A3728"],
    sizes: ["OS"],
    image: "#2C2C2C",
    hoverImage: "#1F1F1F",
  },
  {
    id: 6,
    name: "Atlas minimalist watch",
    category: "Accessories",
    price: 2100,
    colors: ["#E8E8E8", "#1A1A1A"],
    sizes: ["OS"],
    image: "#E8E8E8",
    hoverImage: "#DCDCDC",
  },
  {
    id: 7,
    name: "Akosombo weave mat",
    category: "Home",
    price: 150,
    colors: ["#F5F5DC"],
    sizes: ["OS"],
    image: "#F5F5F0",
    hoverImage: "#EBEBE6",
  },
  {
    id: 8,
    name: "Mali mudcloth cushion",
    category: "Home",
    price: 540,
    colors: ["#2C2C2C", "#FFFFFF"],
    sizes: ["OS"],
    image: "#3D3D3D",
    hoverImage: "#333333",
  },
];

export default function ECommerceMinimalPreview() {
  const [activeView, setActiveView] = useState<"grid" | "detail">("grid");
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[1]);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { ...PRODUCTS[0], quantity: 1, size: "OS" },
  ]);

  const addToCart = (product: typeof PRODUCTS[0]) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1, size: product.sizes[0] }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.salePrice || item.price) * item.quantity, 0);

  return (
    <div className="min-h-screen font-satoshi selection:bg-[#1A1A1A] selection:text-white pt-[48px]">
      
      {/* 
        ========================================================================
        WEFT PREVIEW CHROME (Top Bar)
        ========================================================================
      */}
      <div className="fixed top-0 left-0 w-full h-[48px] bg-[#000000] border-b border-white/10 flex items-center justify-between px-[16px] xl:px-[24px] z-[500]">
        <div className="flex items-center gap-[16px]">
          <span className="font-[600] text-white text-[14px]">Maison Minimal</span>
          <div className="h-[14px] w-[1px] bg-white/20" />
          <div className="flex items-center gap-[12px] text-[#A1A1AA] text-[12px] font-mono">
            <span className="flex items-center gap-[6px]">
              <FileText className="w-[12px] h-[12px]" />
              409 lines
            </span>
            <span className="flex items-center gap-[6px]">
              <Layers className="w-[12px] h-[12px]" />
              11 sections
            </span>
          </div>
        </div>
        <div className="flex items-center gap-[24px] text-[13px] font-[500]">
          <Link href="/systems/e-commerce-minimal/DESIGN.md" className="flex items-center gap-[6px] text-[#EAB308] hover:text-[#CA8A04] transition-colors">
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
      <div className="flex flex-col bg-white overflow-x-hidden transition-all duration-300">
        
        {/* Navigation */}
        <nav className="h-[64px] border-b border-[#E8E8E8] flex items-center justify-between px-[48px] sticky top-[48px] bg-white z-[100]">
          <div className="flex items-center gap-[32px] w-1/3 lowercase">
            <button onClick={() => setActiveView("grid")} className="text-[13px] font-[500] uppercase tracking-[1px] hover:opacity-60 transition-opacity">Shop</button>
            <button className="text-[13px] font-[500] uppercase tracking-[1px] hover:opacity-60 transition-opacity">New</button>
          </div>
          
          <div className="w-1/3 flex justify-center">
            <button onClick={() => setActiveView("grid")} className="text-[20px] font-[600] tracking-tight">Maison</button>
          </div>

          <div className="flex items-center justify-end gap-[24px] w-1/3">
            <button className="hover:opacity-60 transition-opacity"><Search className="w-[20px] h-[20px]" /></button>
            <button className="hover:opacity-60 transition-opacity"><User className="w-[20px] h-[20px]" /></button>
            <button 
              onClick={() => setCartOpen(true)}
              className="relative hover:opacity-60 transition-opacity"
            >
              <ShoppingBag className="w-[20px] h-[20px]" />
              {cartItems.length > 0 && (
                <span className="absolute -top-[4px] -right-[4px] w-[8px] h-[8px] bg-[#C62828] border border-white" />
              )}
            </button>
          </div>
        </nav>

        {/* Content Animation */}
        <AnimatePresence mode="wait">
          {activeView === "grid" ? (
            <motion.main 
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-[1248px] w-full mx-auto px-[48px] py-[64px]"
            >
              <div className="mb-[48px]">
                <h2 className="text-[11px] font-[600] uppercase tracking-[1px] text-[#999999] mb-[4px]">E-Commerce Minimal</h2>
                <h1 className="text-[28px] font-[500] tracking-tight">New Arrivals</h1>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[24px] gap-y-[40px]">
                {PRODUCTS.map((p) => (
                  <ProductCard key={p.id} product={p} onClick={() => { setSelectedProduct(p); setActiveView("detail"); }} />
                ))}
              </div>
            </motion.main>
          ) : (
            <motion.main 
              key="detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-[1248px] w-full mx-auto px-[48px] py-[64px]"
            >
              <div className="flex flex-col lg:flex-row gap-[48px]">
                {/* Image Gallery */}
                <div className="lg:w-[55%] flex flex-col gap-[8px]">
                  <div className="aspect-[3/4] bg-[#F8F7F4] relative group">
                    <div 
                      className="absolute inset-0 transition-colors duration-500" 
                      style={{ backgroundColor: selectedProduct.image }}
                    />
                    <div className="absolute inset-0 flex items-center justify-between px-[16px] opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="w-[40px] h-[40px] bg-white flex items-center justify-center text-[#1A1A1A]"><ChevronLeft className="w-[20px] h-[20px]" /></button>
                      <button className="w-[40px] h-[40px] bg-white flex items-center justify-center text-[#1A1A1A]"><ChevronRight className="w-[20px] h-[20px]" /></button>
                    </div>
                  </div>
                  <div className="flex gap-[8px]">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className={clsx("w-[64px] h-[80px] bg-[#F8F7F4] border-b-2", i === 0 ? "border-[#1A1A1A]" : "border-transparent cursor-pointer")} />
                    ))}
                  </div>
                </div>

                {/* Info Column */}
                <div className="lg:w-[45%] flex flex-col pt-[16px]">
                  <span className="text-[11px] font-[600] uppercase tracking-[1px] text-[#999999] mb-[8px]">{selectedProduct.category}</span>
                  <h1 className="text-[28px] font-[500] mb-[16px] tracking-tight">{selectedProduct.name}</h1>
                  <div className="mb-[24px]">
                    {selectedProduct.salePrice ? (
                      <div className="flex items-center gap-[12px]">
                        <span className="text-[24px] font-[600] text-[#C62828]">GH₵ {selectedProduct.salePrice}</span>
                        <span className="text-[18px] text-[#999999] line-through">GH₵ {selectedProduct.price}</span>
                      </div>
                    ) : (
                      <span className="text-[24px] font-[600]">GH₵ {selectedProduct.price}</span>
                    )}
                  </div>
                  
                  <p className="text-[15px] leading-[1.65] text-[#666666] mb-[32px] max-w-[480px]">
                    A modern reinterpretation of traditional craftsmanship. This piece combines authentic African aesthetics with minimalist luxury sensibilities.
                  </p>

                  <div className="mb-[24px]">
                    <span className="text-[11px] font-[600] uppercase tracking-[1px] mb-[12px] block">Color</span>
                    <div className="flex gap-[12px]">
                      {selectedProduct.colors.map((c) => (
                        <div 
                          key={c} 
                          className={clsx("w-[24px] h-[24px] border border-[#E8E8E8] cursor-pointer hover:scale-110 transition-transform", c === selectedProduct.colors[0] && "outline outline-1 outline-offset-2 outline-[#1A1A1A]")} 
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mb-[40px]">
                    <span className="text-[11px] font-[600] uppercase tracking-[1px] mb-[12px] block">Size</span>
                    <div className="flex flex-wrap gap-[8px]">
                      {selectedProduct.sizes.map((s) => (
                        <button key={s} className={clsx("h-[40px] min-w-[64px] border border-[#E8E8E8] text-[13px] font-[500] hover:border-[#1A1A1A] transition-colors", s === selectedProduct.sizes[0] && "bg-[#1A1A1A] text-white border-transparent")}>
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => addToCart(selectedProduct)}
                    className="h-[52px] bg-[#1A1A1A] text-white text-[14px] font-[500] uppercase tracking-[1px] hover:bg-[#333333] transition-colors mb-[32px]"
                  >
                    Add to Bag
                  </button>

                  <div className="flex flex-col border-t border-[#E8E8E8]">
                    {["Materials", "Sizing", "Shipping"].map((item) => (
                      <div key={item} className="flex items-center justify-between py-[16px] border-b border-[#E8E8E8] cursor-pointer hover:opacity-60 transition-opacity">
                        <span className="text-[13px] font-[500] uppercase tracking-[1px]">{item}</span>
                        <ChevronDown className="w-[16px] h-[16px]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.main>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="bg-[#F8F7F4] py-[80px] px-[48px] border-t border-[#E8E8E8]">
          <div className="max-w-[1248px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-[48px]">
            <div className="col-span-1 md:col-span-2">
              <span className="text-[18px] font-[600] tracking-tight mb-[24px] block">Maison</span>
              <p className="text-[14px] text-[#666666] max-w-[320px]">
                Minimalist luxury inspired by African heritage. Designed in Accra, crafted for the world.
              </p>
            </div>
            <div>
              <span className="text-[11px] font-[600] uppercase tracking-[1px] text-[#999999] mb-[24px] block">Assistance</span>
              <div className="flex flex-col gap-[12px] text-[13px] font-[500] uppercase tracking-[1px]">
                {["Shipping", "Returns", "Contact", "FAQ"].map(item => <Link key={item} href="#" className="hover:opacity-60">{item}</Link>)}
              </div>
            </div>
            <div>
              <span className="text-[11px] font-[600] uppercase tracking-[1px] text-[#999999] mb-[24px] block">Connect</span>
              <div className="flex flex-col gap-[12px] text-[13px] font-[500] uppercase tracking-[1px]">
                {["Instagram", "Twitter", "Email"].map(item => <Link key={item} href="#" className="hover:opacity-60">{item}</Link>)}
              </div>
            </div>
          </div>
          <div className="max-w-[1248px] mx-auto mt-[80px] pt-[24px] border-t border-[#E8E8E8] flex justify-between text-[11px] text-[#999999] uppercase tracking-[1px]">
            <span>© 2026 Maison Studio</span>
            <div className="flex gap-[24px]">
              <Link href="#" className="hover:text-[#1A1A1A]">Privacy</Link>
              <Link href="#" className="hover:text-[#1A1A1A]">Terms</Link>
            </div>
          </div>
        </footer>

        {/* Cart Flyout */}
        <AnimatePresence>
          {cartOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setCartOpen(false)}
                className="fixed inset-0 bg-black/30 z-[600] backdrop-blur-[2px]"
              />
              <motion.aside 
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-full max-w-[420px] bg-white z-[700] shadow-[0_4px_24px_rgba(0,0,0,0.08)] flex flex-col"
              >
                <div className="h-[64px] border-b border-[#E8E8E8] flex items-center justify-between px-[24px]">
                  <span className="text-[18px] font-[500]">Your Bag ({cartItems.length})</span>
                  <button onClick={() => setCartOpen(false)} className="hover:opacity-60"><X className="w-[20px] h-[20px]" /></button>
                </div>

                <div className="flex-1 overflow-y-auto p-[24px]">
                  {cartItems.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center">
                      <span className="text-[15px] text-[#666666] mb-[24px]">Your bag is empty</span>
                      <button onClick={() => setCartOpen(false)} className="text-[13px] font-[500] uppercase tracking-[1px] underline underline-offset-4">Continue Shopping</button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-[32px]">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex gap-[16px]">
                          <div className="w-[80px] h-[100px] bg-[#F8F7F4] shrink-0" style={{ backgroundColor: item.image }} />
                          <div className="flex-1 flex flex-col">
                            <div className="flex justify-between mb-[4px]">
                              <span className="text-[14px] font-[500] tracking-tight">{item.name}</span>
                              <span className="text-[14px] font-[500]">GH₵ {item.salePrice || item.price}</span>
                            </div>
                            <span className="text-[12px] text-[#999999] mb-[12px]">Size: {item.size}</span>
                            <div className="flex items-center justify-between mt-auto">
                              <div className="flex items-center border border-[#E8E8E8]">
                                <button className="w-[32px] h-[32px] flex items-center justify-center hover:bg-[#F8F7F4]"><Minus className="w-[12px] h-[12px]" /></button>
                                <span className="w-[32px] h-[32px] flex items-center justify-center text-[13px] font-[500]">{item.quantity}</span>
                                <button className="w-[32px] h-[32px] flex items-center justify-center hover:bg-[#F8F7F4]"><Plus className="w-[12px] h-[12px]" /></button>
                              </div>
                              <button 
                                onClick={() => removeFromCart(item.id)}
                                className="text-[12px] text-[#999999] hover:text-[#C62828] underline underline-offset-2"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="p-[24px] border-t border-[#E8E8E8] bg-white sticky bottom-0">
                  <div className="flex justify-between mb-[4px]">
                    <span className="text-[16px] font-[500]">Subtotal</span>
                    <span className="text-[16px] font-[500]">GH₵ {subtotal}</span>
                  </div>
                  <p className="text-[12px] text-[#999999] mb-[24px]">Calculated at checkout</p>
                  <button className="w-full h-[52px] bg-[#1A1A1A] text-white text-[14px] font-[500] uppercase tracking-[1px] flex items-center justify-center gap-[12px] hover:bg-[#333333] transition-colors">
                    Checkout
                    <ArrowRight className="w-[18px] h-[18px]" />
                  </button>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

function ProductCard({ product, onClick }: { product: typeof PRODUCTS[0], onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="flex flex-col cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <div className="aspect-[3/4] bg-[#F8F7F4] mb-[12px] relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          animate={{ backgroundColor: hovered ? product.hoverImage : product.image }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute top-[12px] right-[12px]">
          <Heart className="w-[18px] h-[18px] text-[#1A1A1A] opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        {product.salePrice && (
          <div className="absolute top-0 left-0 bg-[#C62828] text-white px-[8px] py-[4px] text-[10px] font-[600] uppercase tracking-[0.5px]">
            Sale
          </div>
        )}
      </div>
      <div className="flex flex-col gap-[2px]">
        <h3 className="text-[14px] font-[500] tracking-tight group-hover:opacity-60 transition-opacity">{product.name}</h3>
        <div className="flex items-center gap-[8px]">
          {product.salePrice ? (
            <>
              <span className="text-[14px] font-[600] text-[#C62828]">GH₵ {product.salePrice}</span>
              <span className="text-[12px] text-[#999999] line-through">GH₵ {product.price}</span>
            </>
          ) : (
            <span className="text-[14px] font-[500]">GH₵ {product.price}</span>
          )}
        </div>
      </div>
    </div>
  );
}
