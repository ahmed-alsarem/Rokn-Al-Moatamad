"use client";
import React from "react";
import { trackGoogleConversion } from "./GoogleAnalytics";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-bg-light">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black mb-8">نحن بانتظارك</h2>
            <p className="text-lg text-text-muted mb-12">
              تفضل بزيارة معرضنا في الرياض لاستكشاف مئات النماذج والكتالوجات الحصرية، أو تواصل معنا مباشرة للحصول على تسعيرة فورية.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-6 p-6 bg-white rounded-2xl shadow-sm border border-accent/20">
                <div className="w-14 h-14 bg-primary text-white flex items-center justify-center rounded-xl flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-500 mb-1">اتصل بنا</h4>
                  <a 
                    href="tel:+966550171735" 
                    className="text-xl font-black text-primary" 
                    dir="ltr"
                    onClick={trackGoogleConversion}
                  >
                    +966 55 017 1735
                  </a>
                </div>
              </div>

              <div className="flex gap-6 p-6 bg-white rounded-2xl shadow-sm border border-accent/20">
                <div className="w-14 h-14 bg-whatsapp text-white flex items-center justify-center rounded-xl flex-shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-500 mb-1">راسلنا واتساب</h4>
                  <a 
                    href="https://wa.me/966550171735?text=استفسار%20عن%20السجاد%20والموكيت" 
                    target="_blank" 
                    className="text-xl font-black text-whatsapp" 
                    dir="ltr"
                    onClick={trackGoogleConversion}
                  >
                    +966 55 017 1735
                  </a>
                </div>
              </div>

              <div className="flex gap-6 p-6 bg-white rounded-2xl shadow-sm border border-accent/20">
                <div className="w-14 h-14 bg-secondary text-white flex items-center justify-center rounded-xl flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-500 mb-1">موقعنا</h4>
                  <p className="text-lg font-bold">الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-strong h-[500px] border-8 border-white"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.000222397014!2d46.660526!3d24.737093699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1d8df01c6511%3A0x5dadea022d68e02f!2z2LHZg9mGINin2YTZhdi52KrZhdivINmE2YTZhdmI2YPZitiqINmIINin2YTYs9is2KfYrw!5e1!3m2!1sar!2ssa!4v1773439355470!5m2!1sar!2ssa" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
