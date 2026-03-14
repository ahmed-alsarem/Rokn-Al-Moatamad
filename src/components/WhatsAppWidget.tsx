"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Phone, Shield } from "lucide-react";
import { trackGoogleConversion } from "./GoogleAnalytics";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 left-8 z-[100] flex flex-col items-end gap-4">
      {/* Messaging Bubble */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, x: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20, x: -20 }}
            className="w-[320px] bg-white rounded-[2.5rem] shadow-strong overflow-hidden border border-accent/20"
          >
            {/* Header */}
            <div className="bg-primary p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <img src="/images/logo.PNG" alt="Logo" className="w-8 h-8 object-contain brightness-0 invert" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-whatsapp border-2 border-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-white m-0 leading-tight">ركن المعتمد</h4>
                  <span className="text-xs text-white/70">متصل الآن</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 bg-bg-light">
              <div className="bg-white p-4 rounded-2xl rounded-tr-none shadow-sm mb-4 inline-block max-w-[90%]">
                <p className="text-sm m-0">أهلاً بك في ركن المعتمد! كيف يمكننا مساعدتك اليوم في اختيار الموكيت أو الستائر؟</p>
                <span className="text-[10px] text-text-muted mt-2 block">10:00 م</span>
              </div>
            </div>

            {/* Footer / Link */}
            <div className="p-6 pt-0 bg-bg-light">
              <a 
                href="https://wa.me/966550171735?text=استفسار%20عن%20الموكيت%20والستائر" 
                target="_blank"
                onClick={() => {
                   trackGoogleConversion();
                   setIsOpen(false);
                }}
                className="btn btn-whatsapp w-full !rounded-2xl py-3 group"
              >
                <span>ابدأ الدردشة</span>
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="mt-4 flex items-center justify-center gap-2 text-text-muted text-xs">
                 <Shield size={12} />
                 <span>دردشة آمنة ومباشرة</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative p-7 rounded-full shadow-strong transition-all duration-500 overflow-hidden ${
          isOpen ? "bg-white text-primary border border-accent/20" : "bg-whatsapp text-white"
        }`}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={40} />
            </motion.div>
          ) : (
            <motion.div key="whatsapp" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <div className="relative">
                <MessageCircle size={40} />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-whatsapp animate-ping"></span>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-whatsapp"></span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
