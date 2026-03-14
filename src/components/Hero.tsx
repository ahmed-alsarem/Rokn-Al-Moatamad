"use client";
import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background with parallax effect or static zoom */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10s] ease-linear hover:scale-110"
        style={{ 
          backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/main_hero.png')" 
        }}
      />
      
      <div className="container relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[800px]"
        >
          <span className="inline-block px-4 py-1 mb-6 text-sm font-bold tracking-widest uppercase bg-secondary text-black rounded-full">
            متجر فخر الصناعة والفخامة
          </span>
          <h1 className="text-5xl md:text-7xl mb-6 text-white leading-tight">
            ركن المعتمد <br />
            <span className="text-secondary">للموكيت والستائر</span> بالرياض
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 leading-relaxed opacity-90">
            نجمع لك بين الفخامة والجودة، أفضل تشكيلات الموكيت والستائر للمنازل، القصور، والمكاتب بأرقى الموديلات.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+966550171735" 
              className="btn btn-primary"
            >
              <Phone size={20} />
              <span>اتصل بنا الآن</span>
            </motion.a>
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/966550171735?text=استفسار%20عن%20السجاد%20والموكيت" 
              target="_blank"
              className="btn btn-whatsapp"
            >
              <MessageCircle size={20} />
              <span>تواصل واتساب</span>
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="px-6 py-3 rounded-xl border border-white/30 backdrop-blur-md flex items-center gap-2 hover:bg-white hover:text-primary transition-all"
            >
              <MapPin size={20} />
              <span>الاتجاهات</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-bg-main to-transparent z-5" />
    </section>
  );
}
