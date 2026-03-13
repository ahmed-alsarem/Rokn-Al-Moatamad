"use client";
import React from "react";
import { Store, Instagram, Twitter, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-white/10 pb-12">
          <div>
            <div className="mb-6">
              <img src="/images/logo.PNG" alt="ركن المعتمد" className="h-24 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/70 text-lg leading-relaxed">
              وجهتكم الأولى في الرياض لأفخم أنواع السجاد والموكيت. جودة نعتز بها وخدمة تفوق التوقعات.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 text-secondary">روابط سريعة</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-secondary">الرئيسية</a></li>
              <li><a href="#about" className="hover:text-secondary">من نحن</a></li>
              <li><a href="#gallery" className="hover:text-secondary">معرض الصور</a></li>
              <li><a href="#contact" className="hover:text-secondary">اتصل بنا</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-secondary">تابعنا</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Send size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center text-white/50">
          <p>&copy; {new Date().getFullYear()} ركن المعتمد للموكيت والسجاد. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
