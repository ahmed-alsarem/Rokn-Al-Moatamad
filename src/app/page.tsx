import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";
import { trackGoogleConversion } from "@/components/GoogleAnalytics";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-24 container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-6 -right-6 w-48 h-48 bg-accent opacity-20 rounded-full blur-3xl z-0"></div>
          <img 
            src="/images/curtains_living_room.png" 
            alt="Showroom" 
            className="rounded-[2.5rem] shadow-strong relative z-10 w-full object-cover aspect-[4/3]"
          />
        </div>
        <div>
          <span className="text-secondary font-black tracking-widest uppercase mb-4 block">قصة ركن المعتمد</span>
          <h2 className="text-4xl md:text-5xl font-black mb-8">فنون الموكيت <br /><span className="text-secondary underline decoration-8 underline-offset-12">تبدأ من هنا</span></h2>
          <p className="text-xl text-text-muted mb-8 leading-relaxed">
            في <strong>ركن المعتمد</strong>، نؤمن أن تفاصيل المكان تبدأ من الأرضية وتنتهي بإطار النوافذ. نحن متخصصون في توريد وتركيب أفخم أنواع <strong>الموكيت والستائر</strong> التي تمنح منزلك أو مكتبك خصوصية وفخامة لا مثيل لها.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="flex items-center gap-3 bg-bg-light p-4 rounded-2xl border border-accent/10">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="font-bold">تركيب بضمان عالٍ</span>
            </div>
            <div className="flex items-center gap-3 bg-bg-light p-4 rounded-2xl border border-accent/10">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span className="font-bold">تشكيلات حصرية</span>
            </div>
            <div className="flex items-center gap-3 bg-bg-light p-4 rounded-2xl border border-accent/10">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="font-bold">أسعار بالجملة</span>
            </div>
            <div className="flex items-center gap-3 bg-bg-light p-4 rounded-2xl border border-accent/10">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span className="font-bold">خدمة 24/7</span>
            </div>
          </div>
          <a 
            href="tel:+966550171735" 
            className="btn btn-primary text-lg px-10"
            onClick={trackGoogleConversion}
          >
            <span>تواصل معنا الآن</span>
          </a>
        </div>
      </section>
      
      <Services />
      <Gallery />
      <Contact />
      <Footer />

      {/* Premium Floating WhatsApp CTA */}
      <a 
        href="https://wa.me/966550171735?text=استفسار%20عن%20الموكيت%20والستائر" 
        className="fixed bottom-8 left-8 p-5 bg-whatsapp text-white rounded-full shadow-strong z-[100] hover:scale-110 active:scale-95 transition-all duration-300 animate-bounce group"
        target="_blank"
        onClick={trackGoogleConversion}
      >
        <MessageCircle size={32} />
        <span className="absolute right-full ml-4 bg-white text-text-main px-4 py-2 rounded-xl text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          هل لديك استفسار؟ تواصل معنا
        </span>
      </a>
    </main>
  );
}
