"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, ChevronRight } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-bg-light">
      <Navbar />
      
      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1 mb-6 text-sm font-bold tracking-widest uppercase bg-secondary text-black rounded-full">
              قانوني
            </span>
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-text-main">
              سياسة الخصوصية
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              نحن في ركن المعتمد نلتزم بحماية خصوصيتك ومعلوماتك الشخصية. توضح هذه السياسة كيفية جمعنا للبيانات واستخدامها.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1 hidden lg:block">
              <div className="sticky top-32 space-y-2 p-6 bg-white rounded-3xl shadow-sm border border-accent/20">
                <a href="#introduction" className="flex items-center gap-3 p-3 rounded-xl hover:bg-bg-light font-bold text-primary transition-all group">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>مقدمة</span>
                </a>
                <a href="#data-collection" className="flex items-center gap-3 p-3 rounded-xl hover:bg-bg-light font-bold text-text-main transition-all group">
                  <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-primary transition-colors"></div>
                  <span>جمع البيانات</span>
                </a>
                <a href="#cookies" className="flex items-center gap-3 p-3 rounded-xl hover:bg-bg-light font-bold text-text-main transition-all group">
                  <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-primary transition-colors"></div>
                  <span>ملفات تعريف الارتباط</span>
                </a>
                <a href="#usage" className="flex items-center gap-3 p-3 rounded-xl hover:bg-bg-light font-bold text-text-main transition-all group">
                  <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-primary transition-colors"></div>
                  <span>كيف نستخدم بياناتك</span>
                </a>
                <a href="#google-ads" className="flex items-center gap-3 p-3 rounded-xl hover:bg-bg-light font-bold text-text-main transition-all group">
                  <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-primary transition-colors"></div>
                  <span>إعلانات Google</span>
                </a>
              </div>
            </div>

            {/* main Content */}
            <div className="lg:col-span-3 space-y-16">
              
              <motion.div 
                id="introduction"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <FileText size={24} />
                  </div>
                  <h2 className="text-2xl font-black m-0">مقدمة</h2>
                </div>
                <p className="text-text-muted leading-relaxed">
                  تعتبر خصوصية زوارنا ذات أهمية بالغة بالنسبة لنا. توضح وثيقة سياسة الخصوصية هذه أنواع المعلومات الشخصية التي يتم استلامها وجمعها بواسطة متجر ركن المعتمد وكيفية استخدامها.
                </p>
                <p className="text-text-muted leading-relaxed">
                  بدخولك إلى موقعنا، فإنك توافق على الممارسات الموضحة في هذه السياسة. نحن نضمن لك أن بياناتك يتم التعامل معها بأعلى معايير الأمان.
                </p>
              </motion.div>

              <motion.div 
                id="data-collection"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                    <Eye size={24} />
                  </div>
                  <h2 className="text-2xl font-black m-0">المعلومات التي نجمعها</h2>
                </div>
                <p className="text-text-muted leading-relaxed">
                  عند زيارتك لموقع ركن المعتمد، قد نقوم بجمع المعلومات التالية:
                </p>
                <ul className="list-disc pr-6 space-y-3 text-text-muted">
                  <li>معلومات الاتصال التي تقدمها طواعية (الاسم، رقم الهاتف) عند الاستفسار عبر واتساب أو الاتصال.</li>
                  <li>بيانات التصفح التقنية مثل عنوان IP، نوع المتصفح، والصفحات التي تمت زيارتها.</li>
                  <li>الموقع الجغرافي التقريبي لتحسين الخدمات المقدمة للعملاء في الرياض والمناطق المجاورة.</li>
                </ul>
              </motion.div>

              <motion.div 
                id="cookies"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <Lock size={24} />
                  </div>
                  <h2 className="text-2xl font-black m-0">ملفات تعريف الارتباط (Cookies)</h2>
                </div>
                <p className="text-text-muted leading-relaxed">
                  نحن نستخدم ملفات تعريف الارتباط لتخزين معلومات حول تفضيلات الزوار، ولتسجيل معلومات محددة للمستخدم حول الصفحات التي يصل إليها المستخدم أو يزورها، وذلك لتخصيص محتوى صفحة الويب بناءً على نوع متصفح الزوار أو معلومات أخرى يرسلها الزوار عبر متصفحهم.
                </p>
              </motion.div>

              <motion.div 
                id="google-ads"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none p-8 bg-primary/5 rounded-[2.5rem] border border-primary/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <Shield size={24} />
                  </div>
                  <h2 className="text-2xl font-black m-0">إعلانات Google وتتبع الإحالات</h2>
                </div>
                <p className="text-text-main font-bold mb-4">
                  نحن نستخدم تقنية Google Ads لتتبع الإحالات الناجحة وتحسين تجربة الإعلان للعملاء.
                </p>
                <p className="text-text-muted leading-relaxed">
                  يستخدم مزودو الطرف الثالث، بمن فيهم Google، ملفات تعريف الارتباط لعرض الإعلانات بناءً على زيارات المستخدم السابقة لموقعنا. تتيح ملفات تعريف الارتباط لشركة Google وشركائها عرض الإعلانات لمستخدمينا بناءً على زيارتهم لموقعنا و/أو مواقع أخرى عبر الإنترنت.
                </p>
                <p className="text-text-muted leading-relaxed">
                  يمكن للمستخدمين اختيار الخروج من عرض الإعلانات المخصصة عن طريق زيارة 
                  <a href="https://www.google.com/settings/ads" target="_blank" className="text-primary font-bold underline px-1">إعدادات إعلانات Google</a>.
                </p>
              </motion.div>

              <motion.div 
                id="contact-legal"
                className="p-10 bg-secondary rounded-[2.5rem] text-black"
              >
                <h2 className="text-2xl font-black mb-4">هل لديك استفسار قانوني؟</h2>
                <p className="text-lg font-bold mb-8 opacity-80">
                  إذا كان لديك أي أسئلة حول سياسة الخصوصية الخاصة بنا أو كيفية التعامل مع بياناتك، فلا تتردد في التواصل معنا.
                </p>
                <a href="tel:+966550171735" className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-2xl font-bold hover:scale-105 transition-transform">
                  <span>تواصل مع الإدارة</span>
                  <ChevronRight size={20} />
                </a>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
