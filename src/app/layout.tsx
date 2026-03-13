import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ركن المعتمد للموكيت والسجاد في الرياض | فخامة وجودة",
  description: "أفضل تشكيلة موكيت وسجاد للمنازل والفنادق والمساجد في الرياض بأسعار مميزة وجودة عالية.",
  keywords: ["سجاد الرياض", "موكيت الرياض", "سجاد قريب مني", "موكيت للمنازل", "تركيب موكيت"],
};

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
        {children}
      </body>
    </html>
  );
}
