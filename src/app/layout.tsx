import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ركن المعتمد للموكيت والستائر في الرياض | فخامة وجودة",
  description: "أفضل محل موكيت وستائر بالرياض. تفصيل ستائر مودرن وتركيب موكيت بضمان وجودة عالية بأسعار مميزة.",
  keywords: ["سجاد الرياض", "موكيت الرياض", "سجاد قريب مني", "موكيت للمنازل", "تركيب موكيت"],
  icons: {
    icon: "/images/logo.PNG",
    apple: "/images/logo.PNG",
  },
};

import { Suspense } from "react";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
