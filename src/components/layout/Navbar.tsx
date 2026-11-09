"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useQuoteStore } from "@/store/quoteStore";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const getTotalItems = useQuoteStore(state => state.getTotalItems);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full glass-card border-b-0 border-white/10 shadow-lg shadow-black/5">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/images/logo.png"
            alt="Touch N Feel Logo"
            width={40}
            height={40}
            className="object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
          />
          <div className="flex flex-col">
            <span className="text-base font-extrabold tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-400">TOUCH N FEEL</span>
            <span className="text-[9px] text-muted-foreground font-semibold leading-none mt-0.5 tracking-wider uppercase">Office Systems</span>
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-bold tracking-wide">
          <Link href="/products" className="transition-colors hover:text-emerald-500">
            Products
          </Link>
          <Link href="/categories" className="transition-colors hover:text-emerald-500">
            Categories
          </Link>
          <Link href="/manufacturing" className="transition-colors hover:text-emerald-500">
            Manufacturing
          </Link>
          <Link href="/about" className="transition-colors hover:text-emerald-500">
            About Us
          </Link>
          <Link href="/contact" className="transition-colors hover:text-emerald-500">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center justify-center p-2 rounded-full hover:bg-secondary">
            <Search className="h-5 w-5" />
          </button>
          <Link href="/quote" className="flex items-center justify-center p-2 rounded-full hover:bg-secondary relative">
            <ShoppingBag className="h-5 w-5" />
            {mounted && getTotalItems() > 0 && (
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground font-bold">
                {getTotalItems()}
              </span>
            )}
          </Link>
          
          <button 
            className="md:hidden flex items-center justify-center p-2 rounded-full hover:bg-secondary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto flex flex-col p-4 space-y-4 text-sm font-medium">
            <Link href="/products" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
            <Link href="/categories" onClick={() => setIsMobileMenuOpen(false)}>Categories</Link>
            <Link href="/manufacturing" onClick={() => setIsMobileMenuOpen(false)}>Manufacturing</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
