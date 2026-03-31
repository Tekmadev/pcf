import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import GoogleAnalytics from "../components/GoogleAnalytics";
import Script from "next/script";
import { defaultMetadata, generateLocalBusinessSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  ...defaultMetadata,
  title:
    "PCF - Precision Contracting & Foundation | Ottawa's Trusted Flooring Experts",
  description:
    "Ottawa's premier flooring and contracting company. Professional hardwood, carpet, tile, vinyl installation, epoxy flooring, and home renovation services. Licensed, insured, free quotes.",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/favicon/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/favicon/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="en">
      <head>
        {/* Local Business Structured Data */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.pcfottawa.com/#organization",
              name: "PCF - Precision Contracting & Foundation",
              alternateName: "PCF",
              url: "https://www.pcfottawa.com",
              logo: "https://www.pcfottawa.com/favicon/android-chrome-512x512.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-613-914-6260",
                contactType: "customer service",
                areaServed: "CA",
                availableLanguage: ["English", "French"],
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ottawa",
                addressRegion: "ON",
                addressCountry: "CA",
              },
              sameAs: [
                "https://www.facebook.com/people/Precision-Flooring-Contracting/61574594093799",
              ],
            }),
          }}
        />

        {/* Website Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.pcfottawa.com/#website",
              url: "https://www.pcfottawa.com",
              name: "PCF - Precision Contracting & Foundation",
              description: "Ottawa's trusted flooring and contracting experts",
              publisher: {
                "@id": "https://www.pcfottawa.com/#organization",
              },
              potentialAction: [
                {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate:
                      "https://www.pcfottawa.com/services?q={search_term_string}",
                  },
                  "query-input": "required name=search_term_string",
                },
              ],
            }),
          }}
        />

        {/* Breadcrumb List Schema */}
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.pcfottawa.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Services",
                  item: "https://www.pcfottawa.com/services",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Contact",
                  item: "https://www.pcfottawa.com/contact",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable}`}>
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <CTASection />
        <Footer />
      </body>
    </html>
  );
}
