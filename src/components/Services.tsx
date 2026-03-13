"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Scissors, Hammer, Building2 } from "lucide-react";

const services = [
  {
    title: "بيع سجاد فاخر",
    desc: "أرقى التشكيلات من السجاد التركي، الإيراني، والمحلي بتصاميم عصرية وكلاسيكية.",
    icon: <ShoppingBag size={40} />,
    delay: 0.1
  },
  {
    title: "تفصيل موكيت حسب المقاس",
    desc: "خدمة تفصيل الموكيت بدقة عالية ليتناسب مع كافة المساحات والغرف بكل احترافية.",
    icon: <Scissors size={40} />,
    delay: 0.2
  },
  {
    title: "تركيب موكيت للفنادق والقصور",
    desc: "فريق متخصص لتركيب الموكيت باحترافية وسرعة مع ضمان أعلى معايير الجودة.",
    icon: <Hammer size={40} />,
    delay: 0.3
  },
  {
    title: "سجاد وموكيت المساجد",
    desc: "سجاد خاص للمساجد بمواصفات عالية التحمل وأسعار خاصة لدور العبادة.",
    icon: <Building2 size={40} />,
    delay: 0.4
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-bg-light">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black mb-4"
          >
            خدماتنا المميزة
          </motion.h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            نقدم لكم حلولاً متكاملة للسجاد والموكيت تجمع بين الجمال الفني والتنفيذ الاحترافي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: s.delay }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-accent/30 hover:shadow-strong transition-all duration-300"
            >
              <div className="text-secondary mb-6 bg-accent/20 w-20 h-20 flex items-center justify-center rounded-2xl">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <p className="text-text-muted">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
