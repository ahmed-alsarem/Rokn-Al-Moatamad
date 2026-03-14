"use client";
import React from "react";
import { motion } from "framer-motion";

const images = [
  { src: "/images/carpet_texture.png", title: "موكيت مودرن فاخر" },
  { src: "/images/IMG_2264.png", title: "موكيت صالات ومكاتب" },
  { src: "/images/IMG_2354.PNG", title: "تركيبات ستائر ذكية" },
  { src: "/images/main_hero.png", title: "معرض الموكيت الرئيسي" },
  { src: "/images/curtains_living_room.png", title: "ستائر مجالس فخمة" },
  { src: "/images/IMG_2263.PNG", title: "تفصيل حسب الطلب" }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-0">
      <div className="container">
        <div className="text-center section-title-margin">
          <h2 className="text-4xl font-black mb-4">معرض الفخامة</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-text-muted">نستعرض لكم نخبة من أعمالنا ومنتجاتنا الأكثر طلباً</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative group overflow-hidden rounded-3xl"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <span className="text-white text-xl font-bold">{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
