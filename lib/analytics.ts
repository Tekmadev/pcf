// Google Analytics 4 tracking utilities
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// Initialize GA4
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// Custom event tracking
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Conversion tracking events
export const trackConversion = {
  phoneCall: () => {
    trackEvent("phone_call", "contact", "header_phone_click");
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-XXXXXXXXX/xxxxx", // Replace with your conversion ID
      });
    }
  },

  contactForm: (formType: string) => {
    trackEvent("form_submission", "contact", formType);
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-XXXXXXXXX/xxxxx", // Replace with your conversion ID
      });
    }
  },

  quoteRequest: (service?: string) => {
    trackEvent("quote_request", "conversion", service);
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-XXXXXXXXX/xxxxx", // Replace with your conversion ID
      });
    }
  },

  servicePageView: (serviceName: string) => {
    trackEvent("service_page_view", "engagement", serviceName);
  },

  newsletterSignup: () => {
    trackEvent("newsletter_signup", "engagement", "footer_newsletter");
  },

  socialClick: (platform: string) => {
    trackEvent("social_click", "engagement", platform);
  },

  downloadBrochure: () => {
    trackEvent("download", "engagement", "service_brochure");
  },

  videoPlay: (videoTitle: string) => {
    trackEvent("video_play", "engagement", videoTitle);
  },

  scrollDepth: (percentage: number) => {
    trackEvent("scroll", "engagement", `${percentage}%`);
  },

  timeOnPage: (seconds: number) => {
    trackEvent("time_on_page", "engagement", "", seconds);
  },
};

// Enhanced ecommerce tracking for service bookings
export const trackPurchase = (
  transactionId: string,
  value: number,
  items: any[]
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "purchase", {
      transaction_id: transactionId,
      value: value,
      currency: "CAD",
      items: items,
    });
  }
};

// User engagement tracking
export const trackEngagement = {
  searchUsage: (query: string) => {
    trackEvent("site_search", "engagement", query);
  },

  filterUsage: (filterType: string, filterValue: string) => {
    trackEvent("filter_usage", "engagement", `${filterType}:${filterValue}`);
  },

  imageGalleryView: (imageName: string) => {
    trackEvent("image_view", "engagement", imageName);
  },

  beforeAfterView: () => {
    trackEvent("before_after_view", "engagement", "project_gallery");
  },

  testimonialView: (testimonialId: string) => {
    trackEvent("testimonial_view", "engagement", testimonialId);
  },
};

// Performance tracking
export const trackPerformance = {
  pageLoadTime: (loadTime: number) => {
    trackEvent("page_load_time", "performance", "", Math.round(loadTime));
  },

  errorOccurred: (errorType: string, errorMessage: string) => {
    trackEvent("error", "performance", `${errorType}: ${errorMessage}`);
  },
};

// Custom dimensions for enhanced tracking
export const setCustomDimension = (index: number, value: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      [`custom_map.dimension${index}`]: value,
    });
  }
};

// Initialize performance tracking
export const initializePerformanceTracking = () => {
  if (typeof window !== "undefined") {
    // Track page load time
    window.addEventListener("load", () => {
      const loadTime =
        performance.timing.loadEventEnd - performance.timing.navigationStart;
      trackPerformance.pageLoadTime(loadTime);
    });

    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener("scroll", () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
          100
      );
      if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
        maxScroll = scrollPercent;
        trackConversion.scrollDepth(scrollPercent);
      }
    });

    // Track time on page
    let startTime = Date.now();
    window.addEventListener("beforeunload", () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      trackConversion.timeOnPage(timeOnPage);
    });
  }
};

// Global gtag interface
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: {
        page_location?: string;
        page_title?: string;
        event_category?: string;
        event_label?: string;
        value?: number;
        send_to?: string;
        transaction_id?: string;
        currency?: string;
        items?: any[];
        [key: string]: any;
      }
    ) => void;
  }
}
