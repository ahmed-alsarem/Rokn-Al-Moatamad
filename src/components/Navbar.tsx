"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Store } from "lucide-react";

const navLinks = [
  { name: "الرئيسية", href: "#home" },
  { name: "من نحن", href: "#about" },
  { name: "الخدمات", href: "#services" },
  { name: "المعرض", href: "#gallery" },
  { name: "اتصل بنا", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "py-4 glass shadow-md" : "py-6 bg-transparent"}`}>
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 flex-shrink-0 group">
          <img src="/images/logo.PNG" alt="ركن المعتمد" className="h-14 w-auto transition-transform duration-300 group-hover:scale-110" />
        </a>

        {/* Desktop Links - Hidden on Mobile */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-bold hover:text-secondary transition-colors ${isScrolled ? "text-text-main" : "text-white"}`}
            >
              {link.name}
            </a>
          ))}
          <a href="tel:+966550171735" className="btn btn-primary px-6 py-2 text-sm whitespace-nowrap">
            اتصل الآن
          </a>
        </div>

        {/* Mobile Toggle - Shown only on Mobile/Tablet */}
        <button 
          className={`lg:hidden p-2 rounded-lg ${isScrolled ? "text-primary" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden py-6 flex flex-col items-center gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-bold text-text-main"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="tel:+966550171735" className="btn btn-primary w-[80%] justify-center">
              اتصل الآن
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
