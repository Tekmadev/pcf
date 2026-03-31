// Business information that can be updated in one place
export const businessProfile = {
  name: "PCF - Precision Contracting & Foundation",
  shortName: "PCF",
  tagline: "Ottawa's Trusted Flooring and Contracting Experts",
  phone: {
    raw: "+16139146260", // Used for tel: links (no spaces or formatting)
    display: "+1 (613) 914-6260", // Formatted for display
    simple: "+1 613-914-6260", // Simple format with dashes
  },
  email: "pcfottawa@gmail.com",
  address: {
    street: "840 Montréal Rd",
    city: "Ottawa",
    province: "ON",
    postalCode: "K1K 4W3",
    country: "Canada",
    full: "840 Montréal Rd, Ottawa, ON K1K 4W3, Canada",
  },
  serviceArea: {
    primary: "Ottawa",
    cities: [
      "Ottawa",
      "Gatineau",
      "Kanata",
      "Orleans",
      "Nepean",
      "Barrhaven",
      "Gloucester",
    ],
    region: "Eastern Ontario and Western Quebec",
    radius: "50km from Ottawa",
  },
  social: {
    facebook:
      "https://www.facebook.com/people/Precision-Flooring-Contracting/61574594093799",
    // instagram: "https://instagram.com/pfcottawa",
    // twitter: "https://twitter.com/pfcottawa",
    // linkedin: "https://linkedin.com/company/pfcottawa",
  },
  hours: {
    weekdays: "8:00 AM - 6:00 PM",
    saturday: "9:00 AM - 4:00 PM",
    sunday: "Closed",
    timezone: "EST",
    note: "Emergency services available by appointment",
  },
  services: {
    primary: ["Flooring Installation", "Flooring Repair", "Home Contracting"],
    categories: ["Flooring", "Cleaning", "Pavers"],
    specialties: [
      "Hardwood Flooring",
      "Carpet Installation",
      "Tile & Ceramic Work",
      "Vinyl Flooring",
      "Epoxy Flooring",
      "Carpet Cleaning",
      "Interlocking Pavers",
    ],
  },
  credentials: {
    licensed: true,
    insured: true,
    wsib: true,
    businessLicense: "Ottawa Business License",
    certifications: [
      "Licensed Contractor",
      "Fully Insured",
      "WSIB Coverage",
      "Quality Workmanship Guarantee",
    ],
  },
  businessInfo: {
    established: "2020",
    employees: "5-10",
    projectsCompleted: "500+",
    yearsExperience: "10+",
    warranty: "Comprehensive warranties on all work",
    payment: ["Cash", "Credit Card", "Interac", "Financing Available"],
    languages: ["English", "French"],
  },
  seo: {
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
    ],
    description:
      "Ottawa's premier flooring and contracting company. Professional hardwood, carpet, tile, vinyl installation, epoxy flooring, and home renovation services. Licensed, insured, free quotes.",
  },
};

// Helper functions to get formatted contact info
export const getPhoneLink = () => `tel:${businessProfile.phone.raw}`;
export const getEmailLink = () => `mailto:${businessProfile.email}`;

// Function to format a phone number string in various ways
export const formatPhoneNumber = (
  phoneNumber: string,
  format: "raw" | "display" | "simple" = "display"
) => {
  // Remove all non-digit characters
  const digitsOnly = phoneNumber.replace(/\D/g, "");

  switch (format) {
    case "raw":
      return `+${digitsOnly}`;
    case "simple":
      return digitsOnly.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    case "display":
    default:
      return digitsOnly.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  }
};

// Get service area as string
export const getServiceAreaString = () => {
  return `${
    businessProfile.serviceArea.primary
  } and surrounding areas including ${businessProfile.serviceArea.cities
    .slice(1)
    .join(", ")}`;
};

// Get full address
export const getFullAddress = () => {
  return businessProfile.address.full;
};

// Get business hours formatted
export const getBusinessHours = () => {
  return `Monday-Friday: ${businessProfile.hours.weekdays}, Saturday: ${businessProfile.hours.saturday}, Sunday: ${businessProfile.hours.sunday}`;
};
