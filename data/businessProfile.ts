// Business information that can be updated in one place
export const businessProfile = {
  name: "PCF - Precision Flooring & Contracting",
  shortName: "PCF",
  phone: {
    raw: "+16139146260", // Used for tel: links (no spaces or formatting)
    display: "+1 (613) 914-6260", // Formatted for display
    simple: "+1 613-914-6260", // Simple format with dashes
  },
  email: "info@pfcottawa.com",
  address: {
    street: "123 Main Street",
    city: "Ottawa",
    province: "ON",
    postalCode: "K1A 0B1",
    country: "Canada",
  },
  social: {
    facebook: "https://facebook.com/pfcottawa",
    instagram: "https://instagram.com/pfcottawa",
    // twitter: "https://twitter.com/pfcottawa",
  },
  hours: {
    weekdays: "8:00 AM - 6:00 PM",
    saturday: "9:00 AM - 4:00 PM",
    sunday: "Closed",
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
