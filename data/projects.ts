export type Project = {
  id: string;
  title: string;
  category: string;
  location: string;
  duration: string;
  image: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  challenges: string[];
  solutions: string[];
  results: string[];
};

export const projects: Project[] = [
  {
    id: "paver-restoration-ottawa",
    title: "Complete Paver Restoration",
    category: "Paver Restoration",
    location: "Ottawa, ON",
    duration: "1 day",
    image: "/images/projects/part1after.jpeg",
    beforeImage: "/images/projects/part1before.jpeg",
    afterImage: "/images/projects/part1after.jpeg",
    description:
      "This comprehensive paver restoration project showcased our expertise in transforming weathered, weed-infested pavers into a stunning, durable surface. The homeowner's patio had deteriorated over several years with significant weed growth between joints and faded colors.",
    challenges: [
      "Extensive weed and moss growth between paver joints",
      "Faded and weathered paver surfaces",
      "Loose and eroded joint sand",
      "Uneven areas requiring releveling",
    ],
    solutions: [
      "Complete weed removal and surface cleaning",
      "Professional resanding with premium polymeric sand",
      "Application of color-enhancing paver sealant",
      "Proper joint stabilization for long-term durability",
    ],
    results: [
      "Eliminated all weed growth and restored clean joint lines",
      "Enhanced natural paver colors with protective sealing",
      "Improved surface stability and drainage",
      "10+ year protection against future weathering",
    ],
  },
  {
    id: "paver-resanding-sealing",
    title: "Paver Resanding & Sealing",
    category: "Resanding & Sealing",
    location: "Kanata, ON",
    duration: "1 day",
    image: "/images/projects/paver2after.png",
    beforeImage: "/images/projects/paver2before.png",
    afterImage: "/images/projects/paver2after.png",
    description:
      "A focused resanding and sealing project that restored the structural integrity and appearance of this residential paver installation. The existing joint sand had washed away, allowing weeds to establish and compromising the stability of the surface.",
    challenges: [
      "Completely eroded joint sand",
      "Weed infiltration between pavers",
      "Loss of structural integrity",
      "Vulnerability to freeze-thaw damage",
    ],
    solutions: [
      "Thorough cleaning and preparation of joint spaces",
      "Application of premium polymeric sand",
      "Professional compaction and activation",
      "Protective sealing for enhanced durability",
    ],
    results: [
      "Restored structural stability to paver surface",
      "Eliminated weed growth potential",
      "Enhanced protection against weather damage",
      "Improved overall appearance and color vibrancy",
    ],
  },
  {
    id: "interlock-paver-repair",
    title: "Interlock Paver Repair",
    category: "Paver Repair",
    location: "Orleans, ON",
    duration: "1 day",
    image: "/images/projects/paver3after.png",
    beforeImage: "/images/projects/paver3before.png",
    afterImage: "/images/projects/paver3after.png",
    description:
      "Expert repair of damaged and uneven interlock pavers caused by settling and root intrusion. This project required careful removal, base preparation, and reinstallation to restore both function and beauty.",
    challenges: [
      "Uneven paver surfaces creating trip hazards",
      "Root damage to base material",
      "Multiple cracked and damaged pavers",
      "Poor drainage causing water pooling",
    ],
    solutions: [
      "Careful removal and inventory of existing pavers",
      "Base material replacement and proper compaction",
      "Installation of root barriers where needed",
      "Precision releveling and joint restoration",
    ],
    results: [
      "Eliminated safety hazards from uneven surfaces",
      "Restored proper drainage and water flow",
      "Seamless integration of new and existing pavers",
      "Long-term protection against future settling",
    ],
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((project) => project.category === category);
}

export function getAllProjectCategories(): string[] {
  const categories = new Set<string>();
  projects.forEach((project) => {
    categories.add(project.category);
  });
  return Array.from(categories);
}
