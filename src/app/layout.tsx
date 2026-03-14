import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ركن المعتمد للموكيت والستائر في الرياض | فخامة وجودة",
  description: "أفضل محل موكيت وستائر بالرياض. تفصيل ستائر مودرن وتركيب موكيت بضمان وجودة عالية بأسعار مميزة.",
  keywords: ["سجاد الرياض", "موكيت الرياض", "سجاد قريب مني", "موكيت للمنازل", "تركيب موكيت", "ستائر مودرن", "ركن المعتمد"],
  authors: [{ name: "ركن المعتمد" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://rokn-al-moatamad.vercel.app",
  },
  icons: {
    icon: "/images/logo.PNG",
    apple: "/images/logo.PNG",
  },
  openGraph: {
    title: "ركن المعتمد للموكيت والستائر في الرياض",
    description: "فخامة وجودة في عالم الموكيت والستائر. زر معرضنا في الرياض.",
    url: "https://rokn-al-moatamad.vercel.app",
    siteName: "ركن المعتمد",
    images: [
      {
        url: "/images/main_hero.png",
        width: 1200,
        height: 630,
        alt: "ركن المعتمد للموكيت والستائر",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ركن المعتمد للموكيت والستائر",
    description: "أفضل محل موكيت وستائر بالرياض بضمان وجودة عالية.",
    images: ["/images/main_hero.png"],
  verification: {
    google: "googled2bf9f875b7d1269",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ركن المعتمد للموكيت والستائر",
              "image": "https://rokn-al-moatamad.vercel.app/images/logo.PNG",
              "@id": "https://rokn-al-moatamad.vercel.app",
              "url": "https://rokn-al-moatamad.vercel.app",
              "telephone": "+966550171735",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "الرياض",
                "addressLocality": "الرياض",
                "addressCountry": "SA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 24.7136,
                "longitude": 46.6753
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Saturday",
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday"
                ],
                "opens": "09:00",
                "closes": "22:00"
              },
              "sameAs": [
                "https://www.instagram.com/rknalmtmd"
              ]
            })
          }}
        />
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
