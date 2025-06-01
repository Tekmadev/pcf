export type Service = {
  id: string;
  label: string;
  href: string;
  category?: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  image: string;
  gallery?: string[];
  faqs?: Array<{ question: string; answer: string }>;
};

export const services: Service[] = [
  {
    id: "epoxy-flooring",
    label: "Epoxy Flooring Ottawa",
    href: "/services/epoxy-flooring",
    category: "Flooring",
    shortDescription:
      "High-performance epoxy floor coatings for residential and commercial spaces.",
    longDescription:
      "Our epoxy flooring solutions provide durable, seamless, and visually stunning surfaces for garages, basements, commercial spaces, and more. We use premium industrial-grade epoxy resins that create a high-performance finish resistant to chemicals, stains, impacts, and heavy traffic.",
    features: [
      "Commercial-grade epoxy formulations",
      "Customizable colors, patterns, and finishes",
      "Non-slip texture options for safety",
      "Self-leveling for perfectly smooth surfaces",
      "Professional preparation and application techniques",
    ],
    benefits: [
      "Exceptional durability lasting 10-20 years",
      "Seamless and easy to clean hygienic surface",
      "Resistant to chemicals, oil, and stains",
      "Enhances brightness with light-reflective properties",
      "Cost-effective compared to tile or other hard surfaces",
    ],
    image: "/images/services/epoxy-flooring.jpg",
    gallery: [
      "/images/services/epoxy-flooring-1.jpg",
      "/images/services/epoxy-flooring-2.jpg",
      "/images/services/epoxy-flooring-3.jpg",
    ],
    faqs: [
      {
        question: "How long does epoxy flooring take to install?",
        answer:
          "A typical epoxy floor installation takes 2-4 days, including proper surface preparation, application of multiple layers, and curing time.",
      },
      {
        question: "Is epoxy flooring suitable for residential basements?",
        answer:
          "Yes, epoxy is an excellent choice for basements as it provides a moisture-resistant, durable surface that can help brighten the space and resist potential water issues.",
      },
      {
        question: "How long will an epoxy floor last?",
        answer:
          "With proper installation and maintenance, residential epoxy floors typically last 10-20 years before needing reapplication, depending on traffic and use.",
      },
    ],
  },
  {
    id: "pressure-washing",
    label: "Pressure Washing Ottawa",
    href: "/services/pressure-washing",
    category: "Cleaning",
    shortDescription:
      "Professional pressure washing services for homes and businesses in Ottawa.",
    longDescription:
      "Our pressure washing services use state-of-the-art equipment to remove dirt, grime, mold, and mildew from surfaces around your home or business. We restore the appearance of driveways, patios, decks, siding, and more.",
    features: [
      "High-powered commercial equipment",
      "Environmentally friendly cleaning solutions",
      "Adjustable pressure for different surfaces",
      "Complete exterior cleaning services",
      "Trained and experienced technicians",
    ],
    benefits: [
      "Enhances curb appeal and property value",
      "Prevents damage from mold and mildew",
      "Prepares surfaces for painting or sealing",
      "Extends the life of your exterior surfaces",
      "Improves safety by removing slippery substances",
    ],
    image: "/images/services/Pressure Washing.webp",
    gallery: [
      "/images/services/pressure-washing-1.jpg",
      "/images/services/pressure-washing-2.jpg",
      "/images/services/pressure-washing-3.jpg",
    ],
    faqs: [
      {
        question: "How often should I have my home pressure washed?",
        answer:
          "Most homes benefit from annual pressure washing, though homes in areas with high humidity or lots of trees may need cleaning every 6-8 months.",
      },
      {
        question: "Will pressure washing damage my property?",
        answer:
          "Our trained technicians use the appropriate pressure levels for each surface to ensure effective cleaning without damage.",
      },
      {
        question: "How long does pressure washing take?",
        answer:
          "The time depends on the size of the area, but most residential jobs are completed in 2-4 hours.",
      },
    ],
  },
  {
    id: "resanding-pavers",
    label: "Resanding Pavers Ottawa",
    href: "/services/resanding-pavers",
    category: "Interlock Pavers",
    shortDescription:
      "Professional paver joint resanding to restore stability and prevent weed growth.",
    longDescription:
      "Our paver resanding service removes old, loose joint sand and replaces it with premium joint sand or polymeric sand. This essential maintenance restores the structural integrity of your paver installation while preventing weed growth and ant infestations between pavers.",
    features: [
      "Complete removal of old, loose joint sand",
      "Thorough cleaning of paver joints",
      "Premium joint sand or polymeric sand application",
      "Proper compaction and finishing techniques",
      "Precision application to avoid surface contamination",
    ],
    benefits: [
      "Restores structural stability to paver surfaces",
      "Prevents weed and moss growth between pavers",
      "Eliminates ant and insect nesting in joints",
      "Improves overall appearance of hardscape",
      "Prepares surface for optional sealing treatment",
    ],
    image: "/images/services/Sealing Pavers.webp",
    gallery: [
      "/images/services/resanding-pavers-1.jpg",
      "/images/services/resanding-pavers-2.jpg",
      "/images/services/resanding-pavers-3.jpg",
    ],
    faqs: [
      {
        question: "How often should paver joints be resanded?",
        answer:
          "Paver joints typically need resanding every 2-3 years, depending on weather exposure, foot traffic, and the type of sand originally used.",
      },
      {
        question:
          "What's the difference between regular sand and polymeric sand?",
        answer:
          "Polymeric sand hardens when activated with water, creating a more durable joint that better resists erosion, weeds, and insect intrusion compared to regular sand.",
      },
      {
        question: "Can you resand pavers that have never been maintained?",
        answer:
          "Yes, we can restore even heavily deteriorated paver joints by thoroughly cleaning and reapplying fresh joint sand or polymeric sand.",
      },
    ],
  },
  {
    id: "sealing-pavers",
    label: "Sealing Pavers Ottawa",
    href: "/services/sealing-pavers",
    category: "Interlock Pavers",
    shortDescription:
      "Protect and enhance your pavers with professional sealing services.",
    longDescription:
      "Our paver sealing service applies premium penetrating or topical sealants to protect your investment and enhance the natural beauty of your pavers. Our sealants provide long-lasting protection against stains, fading, and weather damage while bringing out the rich colors of your hardscape.",
    features: [
      "Premium penetrating or topical sealant options",
      "Color-enhancing formulations available",
      "Professional surface preparation and cleaning",
      "Even application for consistent coverage",
      "UV protection and weather resistance",
    ],
    benefits: [
      "Enhances and protects natural paver colors",
      "Resists oil, water, and other common stains",
      "Provides UV protection to prevent fading",
      "Extends paver lifespan by up to 10 years",
      "Easier maintenance and cleaning",
    ],
    image: "/images/services/Sealing Pavers.webp",
    gallery: [
      "/images/services/sealing-pavers-1.jpg",
      "/images/services/sealing-pavers-2.jpg",
      "/images/services/sealing-pavers-3.jpg",
    ],
    faqs: [
      {
        question: "How long does paver sealing last?",
        answer:
          "Quality paver sealants typically last 3-5 years before reapplication is needed, depending on traffic levels and weather exposure.",
      },
      {
        question: "Will sealing change the appearance of my pavers?",
        answer:
          "Sealing can enhance the natural colors of your pavers and may provide a subtle sheen. We offer both natural-look and color-enhancing sealant options.",
      },
      {
        question: "How soon can I use my patio after sealing?",
        answer:
          "Most sealants require 24-48 hours to fully cure. We'll provide specific timing based on the product used and weather conditions.",
      },
    ],
  },
  {
    id: "laminate-flooring",
    label: "Laminate Flooring Ottawa",
    href: "/services/laminate-flooring",
    category: "Flooring",
    shortDescription:
      "Quality laminate flooring installation for any room in your home.",
    longDescription:
      "Our laminate flooring services offer an affordable, durable, and attractive option for any space in your home. We provide expert installation of top-quality laminate products that mimic the look of hardwood, tile, or stone at a fraction of the cost.",
    features: [
      "Wide selection of styles, colors, and textures",
      "Water-resistant and waterproof options available",
      "Professional installation with proper underlayment",
      "Precision cutting for a perfect fit around corners and obstacles",
      "Floating floor systems that accommodate subfloor imperfections",
    ],
    benefits: [
      "More affordable than hardwood or tile",
      "Highly resistant to scratches, dents, and fading",
      "Easy to clean and maintain",
      "Ideal for high-traffic areas and homes with children or pets",
      "Can be installed over most existing floors",
    ],
    image: "/images/services/Laminate Flooring.webp",
    gallery: [
      "/images/services/laminate-flooring-1.jpg",
      "/images/services/laminate-flooring-2.jpg",
      "/images/services/laminate-flooring-3.jpg",
    ],
    faqs: [
      {
        question: "How long does laminate flooring last?",
        answer:
          "Quality laminate flooring, when properly installed and maintained, can last 15-25 years in residential settings.",
      },
      {
        question: "Is laminate flooring suitable for kitchens and bathrooms?",
        answer:
          "Modern water-resistant and waterproof laminate options are suitable for kitchens and powder rooms. For full bathrooms, we recommend waterproof luxury vinyl plank as a better alternative.",
      },
      {
        question: "How soon can we walk on newly installed laminate flooring?",
        answer:
          "You can walk on your new laminate flooring immediately after installation is complete.",
      },
    ],
  },
  {
    id: "hardwood-flooring",
    label: "Hardwood Flooring Ottawa",
    href: "/services/hardwood-flooring",
    category: "Flooring",
    shortDescription:
      "Premium hardwood flooring installation and refinishing services.",
    longDescription:
      "Our hardwood flooring experts deliver exceptional craftsmanship in both installation and refinishing. We work with a wide range of domestic and exotic hardwoods to create beautiful, lasting floors that add warmth and value to your home.",
    features: [
      "Solid and engineered hardwood options",
      "Professional installation with expert finishing",
      "Custom staining and color matching",
      "Hardwood floor refinishing and restoration",
      "Environmentally responsible products and practices",
    ],
    benefits: [
      "Increases your home's resale value",
      "Provides exceptional durability with proper care",
      "Creates a timeless, elegant appearance",
      "Improves indoor air quality compared to carpet",
      "Can be refinished multiple times to renew appearance",
    ],
    image: "/images/services/Hardwood Flooring.webp",
    gallery: [
      "/images/services/hardwood-flooring-1.jpg",
      "/images/services/hardwood-flooring-2.jpg",
      "/images/services/hardwood-flooring-3.jpg",
    ],
    faqs: [
      {
        question:
          "What's the difference between solid and engineered hardwood?",
        answer:
          "Solid hardwood is made from a single piece of wood, while engineered hardwood has a real wood veneer atop layers of plywood. Engineered is more stable in humid or below-grade installations.",
      },
      {
        question: "How long does hardwood floor installation take?",
        answer:
          "Most installations take 3-7 days, depending on the size of the area, removal of existing flooring, and whether finishing is done on-site.",
      },
      {
        question: "How often should hardwood floors be refinished?",
        answer:
          "Typically every 7-10 years, but this varies based on foot traffic, maintenance, and the thickness of the wood's wear layer.",
      },
    ],
  },
  {
    id: "vinyl-flooring",
    label: "Vinyl Flooring Ottawa",
    href: "/services/vinyl-flooring",
    category: "Flooring",
    shortDescription:
      "Modern luxury vinyl plank and tile flooring installation.",
    longDescription:
      "Today's vinyl flooring offers incredible realism, durability, and water resistance. Our luxury vinyl plank (LVP) and luxury vinyl tile (LVT) installation services provide a cost-effective flooring solution that stands up to active households and busy commercial spaces.",
    features: [
      "100% waterproof options available",
      "Realistic wood and stone appearances",
      "Warm and comfortable underfoot",
      "Quick and clean installation process",
      "Wide range of styles and price points",
    ],
    benefits: [
      "Exceptional durability in high-traffic areas",
      "Perfect for bathrooms, kitchens, and basements",
      "Lower maintenance than hardwood or laminate",
      "Scratch and dent resistant for households with pets",
      "More comfortable and warmer than ceramic tile",
    ],
    image: "/images/services/Vinyl Flooring.webp",
    gallery: [
      "/images/services/vinyl-flooring-1.jpg",
      "/images/services/vinyl-flooring-2.jpg",
      "/images/services/vinyl-flooring-3.jpg",
    ],
    faqs: [
      {
        question: "Is luxury vinyl flooring really waterproof?",
        answer:
          "Many luxury vinyl products are 100% waterproof and can withstand spills, pet accidents, and even flooding without damage.",
      },
      {
        question: "How long does vinyl flooring last?",
        answer:
          "Quality luxury vinyl flooring can last 15-25 years in residential settings with proper care and maintenance.",
      },
      {
        question: "Can vinyl flooring be installed over existing flooring?",
        answer:
          "In many cases, yes. Vinyl flooring can often be installed over existing hard surfaces if they're clean, flat, and structurally sound.",
      },
    ],
  },
  {
    id: "uneven-pavers",
    label: "Uneven Pavers Ottawa",
    href: "/services/uneven-pavers",
    category: "Interlock Pavers",
    shortDescription:
      "Repair and releveling services for uneven paver installations.",
    longDescription:
      "Our paver repair specialists fix sunken, uneven, or shifting pavers to eliminate trip hazards and drainage issues. We can relevel your existing patio, walkway, or driveway to restore both beauty and functionality.",
    features: [
      "Comprehensive assessment of underlying issues",
      "Repair of drainage problems and base failures",
      "Precision releveling of existing pavers",
      "Proper compaction and joint sand installation",
      "Optional sealing for long-term protection",
    ],
    benefits: [
      "Eliminates dangerous tripping hazards",
      "Prevents future damage from improper drainage",
      "Restores the aesthetic appeal of your hardscape",
      "More cost-effective than full replacement",
      "Extends the lifespan of your paver installation",
    ],
    image: "/images/services/Uneven Pavers.webp",
    gallery: [
      "/images/services/uneven-pavers-1.jpg",
      "/images/services/uneven-pavers-2.jpg",
      "/images/services/uneven-pavers-3.jpg",
    ],
    faqs: [
      {
        question: "What causes pavers to become uneven?",
        answer:
          "Common causes include improper base preparation, erosion from poor drainage, freeze-thaw cycles, heavy vehicle traffic, and tree root growth.",
      },
      {
        question: "Can all uneven paver issues be repaired?",
        answer:
          "Most paver issues can be repaired, though in cases of severe base failure or extensive damage, partial or complete reinstallation may be necessary.",
      },
      {
        question: "How long does a paver repair project take?",
        answer:
          "Most residential paver repair projects are completed in 1-3 days, depending on the size of the area and extent of the issues.",
      },
    ],
  },
  {
    id: "damaged-pavers",
    label: "Damaged Pavers Ottawa",
    href: "/services/damaged-pavers",
    category: "Interlock Pavers",
    shortDescription:
      "Replacement and repair of cracked, chipped, or stained pavers.",
    longDescription:
      "We specialize in replacing damaged pavers to restore the beauty and integrity of your hardscape. Our team can efficiently replace cracked, chipped, or severely stained pavers with matching replacements for a seamless repair.",
    features: [
      "Precise matching of paver style and color",
      "Individual paver replacement without disturbing surrounding area",
      "Removal of stubborn stains with specialized cleaners",
      "Repair of structural issues causing damage",
      "Sealing options to prevent future damage",
    ],
    benefits: [
      "Maintains the visual appeal of your hardscape",
      "More economical than replacing the entire surface",
      "Prevents further deterioration of surrounding pavers",
      "Eliminates safety hazards from broken pavers",
      "Fast turnaround for most repair projects",
    ],
    image: "/images/services/Damaged Pavers.webp",
    gallery: [
      "/images/services/damaged-pavers-1.jpg",
      "/images/services/damaged-pavers-2.jpg",
      "/images/services/damaged-pavers-3.jpg",
    ],
    faqs: [
      {
        question: "Can you match my existing pavers for replacement?",
        answer:
          "In most cases, yes. We work with a wide network of suppliers to find matching pavers, even for older installations. If exact matches aren't available, we can suggest the closest alternatives.",
      },
      {
        question: "How many pavers can be replaced in one project?",
        answer:
          "We can replace any number of pavers, from a single damaged paver to large sections of your hardscape.",
      },
      {
        question: "Will replaced pavers look different from my existing ones?",
        answer:
          "New pavers may initially appear slightly different due to weathering of the existing pavers. This difference typically diminishes over time, or we can apply color-enhancing sealers to help blend the appearance.",
      },
    ],
  },
  {
    id: "polymeric-sand",
    label: "Polymeric Sand Ottawa",
    href: "/services/polymeric-sand",
    category: "Interlock Pavers",
    shortDescription:
      "Professional application of polymeric sand for paver joints.",
    longDescription:
      "Our polymeric sand installation service provides superior joint stabilization for paver patios, walkways, and driveways. This specialized sand hardens when activated with water, creating stable, weed-resistant joints while maintaining flexibility for freeze-thaw cycles.",
    features: [
      "Premium polymeric sand products",
      "Thorough cleaning of existing joints",
      "Precision application and compaction",
      "Professional water activation",
      "Careful cleanup to prevent hazing",
    ],
    benefits: [
      "Prevents weed growth between pavers",
      "Resists erosion from rain and pressure washing",
      "Deters insects and ants from nesting",
      "Maintains flexibility during freeze-thaw cycles",
      "Enhances overall stability of paver surfaces",
    ],
    image: "/images/services/Polymeric Sand.webp",
    gallery: [
      "/images/services/polymeric-sand-1.jpg",
      "/images/services/polymeric-sand-2.jpg",
      "/images/services/polymeric-sand-3.jpg",
    ],
    faqs: [
      {
        question: "How long does polymeric sand last?",
        answer:
          "Properly installed polymeric sand typically lasts 7-10 years before needing replacement, depending on climate conditions and usage.",
      },
      {
        question: "Can polymeric sand be applied to existing pavers?",
        answer:
          "Yes, we can remove the existing joint material and replace it with polymeric sand on almost any paver installation.",
      },
      {
        question:
          "How long before we can use our patio after polymeric sand installation?",
        answer:
          "The surface should not be exposed to water for at least 24 hours. Foot traffic can typically resume after 24 hours, and vehicle traffic after 72 hours, depending on weather conditions.",
      },
    ],
  },
  {
    id: "carpet-cleaning",
    label: "Carpet Cleaning Ottawa",
    href: "/services/carpet-cleaning",
    category: "Cleaning",
    shortDescription:
      "Professional deep carpet cleaning for homes and businesses.",
    longDescription:
      "Our professional carpet cleaning service removes deep-down dirt, allergens, and stains that regular vacuuming can't reach. We use hot water extraction (steam cleaning) methods with eco-friendly products for a thorough, safe clean that extends carpet life.",
    features: [
      "Powerful truck-mounted equipment",
      "Pre-treatment of high-traffic areas and stains",
      "Hot water extraction deep cleaning",
      "Eco-friendly, child and pet-safe solutions",
      "Optional stain protection application",
    ],
    benefits: [
      "Removes allergens, dust mites, and pollutants",
      "Eliminates stubborn stains and odors",
      "Extends the life of your carpet investment",
      "Improves indoor air quality",
      "Restores carpet appearance and texture",
    ],
    image: "/images/services/carpet-cleaning.webp",
    gallery: [
      "/images/services/carpet-cleaning-1.webp",
      "/images/services/carpet-cleaning-2.webp",
      "/images/services/carpet-cleaning-3.webp",
    ],
    faqs: [
      {
        question: "How long does carpet take to dry after cleaning?",
        answer:
          "Typically 6-12 hours, depending on carpet thickness, humidity, air circulation, and temperature in the home.",
      },
      {
        question: "Can you remove all stains from my carpet?",
        answer:
          "While we can remove most stains, some permanent stains may remain, particularly if they've already set or changed the carpet fibers (like bleach or certain chemicals).",
      },
      {
        question: "How often should carpets be professionally cleaned?",
        answer:
          "For homes, we recommend professional cleaning every 12-18 months. High-traffic areas and homes with children, pets, or allergies may benefit from more frequent cleaning.",
      },
    ],
  },
  {
    id: "sofa-cleaning",
    label: "Sofa Cleaning Ottawa",
    href: "/services/sofa-cleaning",
    category: "Cleaning",
    shortDescription:
      "Revitalize your upholstered furniture with our professional cleaning service.",
    longDescription:
      "Our upholstery cleaning service removes embedded dirt, allergens, and stains from sofas, loveseats, chairs, and sectionals. We use specialized equipment and cleaning solutions suited to each fabric type for optimal results without damage.",
    features: [
      "Fabric-specific cleaning methods and solutions",
      "Spot treatment for stains and high-use areas",
      "Deep extraction cleaning for embedded dirt",
      "Gentle yet effective cleaning processes",
      "Optional fabric protection application",
    ],
    benefits: [
      "Removes allergens and dust mites from upholstery",
      "Eliminates odors trapped in fabric",
      "Extends furniture lifespan by removing abrasive dirt",
      "Restores color and texture of upholstery",
      "Creates a healthier indoor environment",
    ],
    image: "/images/services/Sofa Cleaning.webp",
    gallery: [
      "/images/services/sofa-cleaning-1.jpg",
      "/images/services/sofa-cleaning-2.jpg",
      "/images/services/sofa-cleaning-3.jpg",
    ],
    faqs: [
      {
        question: "How long does upholstery take to dry after cleaning?",
        answer:
          "Most upholstery dries within 4-8 hours, though this varies depending on fabric type, cleaning method, and environmental conditions.",
      },
      {
        question: "Can you clean leather furniture?",
        answer:
          "Yes, we offer specialized leather cleaning and conditioning services to safely clean and restore leather furniture.",
      },
      {
        question: "How often should sofas be professionally cleaned?",
        answer:
          "We recommend professional upholstery cleaning every 12-24 months, depending on usage, presence of pets/children, and visible soiling.",
      },
    ],
  },
  {
    id: "rug-cleaning",
    label: "Rug Cleaning Ottawa",
    href: "/services/rug-cleaning",
    category: "Cleaning",
    shortDescription:
      "Expert cleaning services for area rugs of all types and materials.",
    longDescription:
      "Our specialized rug cleaning service provides careful, thorough cleaning for valuable area rugs of all types. We tailor our cleaning approach based on the rug's material, construction, and condition to ensure safe yet effective results for wool, silk, synthetic, and antique rugs.",
    features: [
      "Material-specific cleaning techniques",
      "Hand washing for delicate or valuable rugs",
      "Thorough dust removal pre-cleaning",
      "Gentle yet effective stain treatment",
      "Proper drying in a controlled environment",
    ],
    benefits: [
      "Preserves color vibrancy and rug integrity",
      "Removes deeply embedded dirt and grit",
      "Eliminates dust mites and allergens",
      "Extends the life of valuable rugs",
      "Restores softness and appearance",
    ],
    image: "/images/services/Rug Cleaning.webp",
    gallery: [
      "/images/services/rug-cleaning-1.jpg",
      "/images/services/rug-cleaning-2.jpg",
      "/images/services/rug-cleaning-3.jpg",
    ],
    faqs: [
      {
        question: "Can you clean Oriental and Persian rugs?",
        answer:
          "Yes, we specialize in cleaning valuable Oriental and Persian rugs using appropriate techniques that protect delicate fibers and dyes.",
      },
      {
        question: "Do you pick up and deliver rugs?",
        answer:
          "Yes, we offer pick-up and delivery service for area rugs throughout the Ottawa region.",
      },
      {
        question: "How long does professional rug cleaning take?",
        answer:
          "The process typically takes 3-7 days from pick-up to delivery, depending on the rug's condition, material, and current cleaning volume.",
      },
    ],
  },
  {
    id: "steam-cleaning",
    label: "Steam Cleaning Ottawa",
    href: "/services/steam-cleaning",
    category: "Cleaning",
    shortDescription:
      "Deep steam cleaning for carpets, upholstery, and hard surfaces.",
    longDescription:
      "Our professional steam cleaning services use high-temperature vapor to penetrate surfaces and remove dirt, bacteria, and allergens without harsh chemicals. This versatile cleaning method is effective for carpets, upholstery, tile and grout, and many hard surfaces.",
    features: [
      "High-temperature steam for sanitizing surfaces",
      "Chemical-free cleaning option",
      "Powerful extraction for thorough cleaning",
      "Versatile application for multiple surfaces",
      "Eco-friendly and safe for homes with children and pets",
    ],
    benefits: [
      "Kills bacteria, dust mites, and bed bugs",
      "Removes stubborn stains and embedded dirt",
      "Eliminates odors at their source",
      "Improves indoor air quality",
      "Safe and non-toxic cleaning method",
    ],
    image: "/images/services/Steam Cleaning.webp",
    gallery: [
      "/images/services/steam-cleaning-1.jpg",
      "/images/services/steam-cleaning-2.jpg",
      "/images/services/steam-cleaning-3.jpg",
    ],
    faqs: [
      {
        question: "Is steam cleaning safe for all surfaces?",
        answer:
          "While steam cleaning is versatile, it's not appropriate for all surfaces. We assess each situation and recommend the best approach for your specific cleaning needs.",
      },
      {
        question: "How does steam cleaning sanitize without chemicals?",
        answer:
          "The high-temperature steam (215°F+) kills bacteria, viruses, mold, and dust mites on contact without requiring chemical disinfectants.",
      },
      {
        question: "How long do surfaces take to dry after steam cleaning?",
        answer:
          "Most surfaces dry within 1-6 hours, depending on the material, ambient temperature, humidity, and air circulation.",
      },
    ],
  },
  {
    id: "re-sanding-sealing",
    label: "Resanding & Sealing Ottawa",
    href: "/services/re-sanding-sealing",
    category: "Interlock Pavers",
    shortDescription:
      "Complete paver restoration with professional resanding and sealing services.",
    longDescription:
      "Our comprehensive paver resanding and sealing service combines both essential maintenance steps in one complete package. We remove old joint sand, apply premium polymeric sand, and finish with high-quality sealant to provide maximum protection and enhancement for your patio, walkway, or driveway.",
    features: [
      "Complete joint sand removal and replacement",
      "Premium polymeric sand application",
      "Professional surface preparation and cleaning",
      "Premium penetrating or topical sealants",
      "Color-enhancing formulations to bring out natural beauty",
      "UV protection and weather resistance",
    ],
    benefits: [
      "Complete restoration in one comprehensive service",
      "Extends paver lifespan by up to 10 years",
      "Prevents weed and moss growth between pavers",
      "Enhances and protects natural paver colors",
      "Resists oil, water, and other stains",
      "Protects against freeze-thaw damage in Ottawa winters",
    ],
    image: "/images/services/Sealing Pavers.webp",
    gallery: [
      "/images/services/paver-sealing-1.jpg",
      "/images/services/paver-sealing-2.jpg",
      "/images/services/paver-sealing-3.jpg",
    ],
    faqs: [
      {
        question: "What's included in the resanding and sealing service?",
        answer:
          "Our complete service includes removal of old joint sand, thorough cleaning, application of premium polymeric sand, and professional sealing with your choice of sealant types.",
      },
      {
        question:
          "How often should the complete resanding and sealing be done?",
        answer:
          "We recommend the complete resanding and sealing service every 3-5 years, depending on usage and exposure to elements.",
      },
      {
        question:
          "Is it more cost-effective than doing the services separately?",
        answer:
          "Yes, our combined service offers better value than scheduling resanding and sealing separately, plus ensures optimal results with proper timing between steps.",
      },
    ],
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}

export function getServicesByCategory(category: string): Service[] {
  return services.filter((service) => service.category === category);
}

export function getAllServiceCategories(): string[] {
  const categories = new Set<string>();
  services.forEach((service) => {
    if (service.category) {
      categories.add(service.category);
    }
  });
  return Array.from(categories);
}
