import { Metadata } from "next";
import { businessProfile } from "@/data/businessProfile";

const baseUrl = "https://www.pcfottawa.com";
const siteName = businessProfile.name;

// Default SEO metadata template
export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: `%s | ${siteName}`,
    default: `${siteName} - Professional Flooring & Contracting Services in Ottawa`,
  },
  description:
    "Ottawa's trusted flooring and contracting experts. Professional hardwood, carpet, tile, vinyl installation, epoxy flooring, and home renovation services. Free quotes, quality guaranteed.",
  keywords: [
    "Ottawa flooring contractor",
    "hardwood flooring Ottawa",
    "carpet installation Ottawa",
    "tile installation Ottawa",
    "vinyl flooring Ottawa",
    "epoxy flooring Ottawa",
    "home renovation Ottawa",
    "Ottawa contractor",
    "flooring services Ottawa",
    "commercial flooring Ottawa",
    "residential flooring Ottawa",
    "Ottawa home improvement",
    "flooring repair Ottawa",
    "professional contractor Ottawa",
    "quality flooring Ottawa",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "construction",
  classification: "Business",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: baseUrl,
    siteName,
    title: `${siteName} - Professional Flooring & Contracting Services in Ottawa`,
    description:
      "Ottawa's trusted flooring and contracting experts. Professional installation, quality guaranteed, free quotes.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteName} - Ottawa Flooring Contractors`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} - Ottawa Flooring Contractors`,
    description:
      "Professional flooring & contracting services in Ottawa. Quality installation, free quotes.",
    images: ["/images/og-image.jpg"],
    creator: "@pfcottawa",
  },
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    google: "your-google-verification-code",
    // Add other verification codes as needed
  },
};

// Generate page-specific metadata
export function generatePageMetadata({
  title,
  description,
  keywords = [],
  path = "",
  images = [],
}: {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  images?: string[];
}): Metadata {
  const url = path ? `${baseUrl}${path}` : baseUrl;
  const pageKeywords = [...(defaultMetadata.keywords as string[]), ...keywords];

  return {
    title,
    description,
    keywords: pageKeywords,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: `${title} | ${siteName}`,
      description,
      url,
      images:
        images.length > 0
          ? images.map((img) => ({
              url: img,
              width: 1200,
              height: 630,
              alt: `${title} - ${siteName}`,
            }))
          : defaultMetadata.openGraph?.images,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: `${title} | ${siteName}`,
      description,
      images: images.length > 0 ? images : ["/images/og-image.jpg"],
    },
    alternates: {
      canonical: url,
    },
  };
}

// Local Business structured data
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": baseUrl,
    name: businessProfile.name,
    alternateName: businessProfile.shortName,
    description:
      "Professional flooring and contracting services in Ottawa. Specializing in hardwood, carpet, tile, vinyl, and epoxy flooring installation.",
    url: baseUrl,
    telephone: businessProfile.phone.raw,
    email: businessProfile.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessProfile.address.street,
      addressLocality: businessProfile.address.city,
      addressRegion: businessProfile.address.province,
      postalCode: businessProfile.address.postalCode,
      addressCountry: businessProfile.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.4215,
      longitude: -75.6972,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Ottawa",
      },
      {
        "@type": "City",
        name: "Gatineau",
      },
      {
        "@type": "City",
        name: "Kanata",
      },
      {
        "@type": "City",
        name: "Orleans",
      },
      {
        "@type": "City",
        name: "Nepean",
      },
    ],
    openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-16:00"],
    priceRange: "$$",
    currenciesAccepted: "CAD",
    paymentAccepted: "Cash, Credit Card, Interac",
    hasCredential: "Licensed and Insured",
    sameAs: [businessProfile.social.facebook],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
    image: `${baseUrl}/images/business-hero.jpg`,
    logo: `${baseUrl}/favicon/android-chrome-512x512.png`,
  };
}

// Service structured data
export function generateServiceSchema(service: {
  name: string;
  description: string;
  slug: string;
  category: string;
  features: string[];
  benefits: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/services/${service.slug}`,
    name: service.name,
    description: service.description,
    url: `${baseUrl}/services/${service.slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: businessProfile.name,
      telephone: businessProfile.phone.raw,
      address: {
        "@type": "PostalAddress",
        addressLocality: businessProfile.address.city,
        addressRegion: businessProfile.address.province,
        addressCountry: businessProfile.address.country,
      },
    },
    serviceType: service.category,
    areaServed: {
      "@type": "City",
      name: "Ottawa",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} Services`,
      itemListElement: service.features.map((feature, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature,
        },
      })),
    },
  };
}

// FAQ structured data
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
