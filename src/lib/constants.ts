export const COMPANY = {
  name: "JYOSI PHARMACEUTICALS",
  tagline: "Makers of RNA+",
  ceo: "B. Jyothi",
  phone: "+91 7675903022",
  email: "jyosipharma1@gmail.com",
  address: "D. No. 4-1-62/1, Snehapuri Colony, Nacharam, Hyderabad – 500076",
  website: "www.jyosipharma.com",
} as const;

export const COLORS = {
  primary: "#0057B8",
  secondary: "#00A7C4",
  accent: "#00D1B2",
  background: "#FFFFFF",
  text: "#0A2540",
  neutral: "#F6F8FB",
} as const;

export const THERAPEUTIC_AREAS = [
  { name: "Women's Health", slug: "womens-health", icon: "Heart", description: "Pregnancy care, menstrual health & hormone management", productCount: 12 },
  { name: "Anti-Infectives", slug: "anti-infectives", icon: "Shield", description: "Antibiotics and antimicrobial therapies", productCount: 28 },
  { name: "Gastroenterology", slug: "gastroenterology", icon: "Pill", description: "Probiotics, digestive enzymes & GI care", productCount: 8 },
  { name: "Hepatology", slug: "hepatology", icon: "Pill", description: "Liver protection & hepatic care", productCount: 5 },
  { name: "Respiratory", slug: "respiratory", icon: "Wind", description: "Cough, cold & allergy management", productCount: 14 },
  { name: "Pain Management", slug: "pain-management", icon: "Bone", description: "Anti-inflammatory & analgesic solutions", productCount: 9 },
  { name: "Nutrition", slug: "nutrition", icon: "Apple", description: "Iron, multivitamins & protein supplements", productCount: 18 },
  { name: "Pediatrics", slug: "pediatrics", icon: "Baby", description: "Safe healthcare for infants & children", productCount: 5 },
  { name: "Steroids", slug: "steroids", icon: "Activity", description: "Corticosteroid formulations", productCount: 3 },
  { name: "Anthelmintics", slug: "anthelmintics", icon: "Shield", description: "Deworming solutions", productCount: 1 },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Brands", href: "/brands" },
  { label: "Products", href: "/products" },
  { label: "Therapeutic Areas", href: "/therapeutic-areas" },
  { label: "Contact", href: "/contact" },
] as const;
