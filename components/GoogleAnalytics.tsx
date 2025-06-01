"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  GA_TRACKING_ID,
  pageview,
  initializePerformanceTracking,
} from "@/lib/analytics";

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (GA_TRACKING_ID) {
      pageview(window.location.href);
    }
  }, [pathname]);

  useEffect(() => {
    // Initialize performance and engagement tracking
    initializePerformanceTracking();
  }, []);

  if (!GA_TRACKING_ID) {
    return null;
  }

  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${
              process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXX"
            }');
          `,
        }}
      />

      {/* Google Analytics 4 */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_location: window.location.href,
              page_title: document.title,
              send_page_view: true,
              custom_map: {
                'dimension1': 'service_category',
                'dimension2': 'user_location',
                'dimension3': 'form_type',
                'dimension4': 'traffic_source'
              }
            });
            
            // Enhanced conversion tracking
            gtag('config', 'AW-XXXXXXXXX'); // Replace with your conversion ID
            
            // Phone number click tracking
            document.addEventListener('DOMContentLoaded', function() {
              document.querySelectorAll('a[href^="tel:"]').forEach(function(el) {
                el.addEventListener('click', function() {
                  gtag('event', 'phone_call', {
                    event_category: 'contact',
                    event_label: 'phone_click',
                    value: 1
                  });
                });
              });
              
              // Email click tracking
              document.querySelectorAll('a[href^="mailto:"]').forEach(function(el) {
                el.addEventListener('click', function() {
                  gtag('event', 'email_click', {
                    event_category: 'contact',
                    event_label: 'email_click',
                    value: 1
                  });
                });
              });
            });
          `,
        }}
      />

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${
            process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXX"
          }`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}
