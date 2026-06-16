import { Product, Brand } from "./products";

// ============================================
// JYOSI PHARMACEUTICALS OWN PRODUCTS
// ============================================

export const ownBrands: Brand[] = [
  {
    id: "rna-plus",
    name: "RNA+",
    slug: "rna-plus",
    tagline: "Makers of RNA+",
    description: "Methylcobalamin, Pyridoxine HCl & Niacinamide Injection. A premium neurological injection for IM/IV use. 1 x 2ml Dispo Pack.",
    therapeuticArea: "neurology",
    image: "/products/rna-plus.jpg",
    products: [],
  },
  {
    id: "jyspro-df",
    name: "JYSPRO-DF",
    slug: "jyspro-df",
    tagline: "Complete, Balanced Nutrition",
    description: "Premium protein supplement with Cardamom Flavour. An everyday nutritional supplement for all age groups. 200g pack.",
    therapeuticArea: "nutrition",
    image: "/products/jyspro-df.jpg",
    products: [],
  },
];

export const ownProducts: Product[] = [
  {
    id: "rna-plus-injection",
    name: "RNA+ Injection",
    slug: "rna-plus-injection",
    composition: "Methylcobalamin 1500mcg + Pyridoxine HCl 100mg + Niacinamide 100mg",
    category: "Injections",
    therapeuticArea: "neurology",
    dosageForm: "Injection",
    packSize: "1 x 2ml Dispo Pack",
    description: "RNA+ Injection by JYOSI Pharmaceuticals for IM/IV use.",
    benefits: ["Prevents brain aging", "Improves immune system", "High safety profile"],
    indications: ["Diabetic Neuropathy", "Peripheral Neuropathy", "Alcoholic Neuropathy"],
    featured: true,
    flagship: true,
  },
  {
    id: "jyspro-df",
    name: "JYSPRO-DF",
    slug: "jyspro-df",
    composition: "Protein Supplement - Cardamom Flavour",
    category: "Powder",
    therapeuticArea: "nutrition",
    dosageForm: "Powder",
    packSize: "200g Jar",
    description: "Complete balanced nutrition protein supplement.",
    benefits: ["Complete balanced nutrition", "Cardamom flavour", "For all age groups"],
    indications: ["Growing Children", "Body Building", "Pregnancy", "Old Age"],
    featured: true,
    flagship: true,
  },
];

// Marketed brands (no ACTINERV)
export const brands: Brand[] = [
  ...ownBrands,
  { id: "neuroryl-forte", name: "NEURORYL-FORTE", slug: "neuroryl-forte", tagline: "Empowers The Neuron Strength", description: "Methylcoblamin + Folic acid + Thiamine + Pyridoxine + Alpha lipoic acid Capsules.", therapeuticArea: "neurology", image: "", products: [] },
  { id: "boneryl", name: "BONERYL", slug: "boneryl", tagline: "Excellent Bioavailability of Calcium", description: "Calcium Carbonate, Cholecalciferol(D3), Vitamin K27 range.", therapeuticArea: "orthopedics", image: "", products: [] },
  { id: "rylofenac-sp", name: "RYLOFENAC-SP", slug: "rylofenac-sp", tagline: "Overcomes Inflammatory Diseases", description: "Aceclofenac + Paracetamol + Serratiopeptidase.", therapeuticArea: "orthopedics", image: "", products: [] },
  { id: "amoxyril-cv", name: "AMOXYRIL-CV 625", slug: "amoxyril-cv", tagline: "The Power of Two", description: "Amoxicillin 500mg + Clavulanic Acid 125mg Tablets.", therapeuticArea: "anti-infectives", image: "", products: [] },
  { id: "cefiryl", name: "CEFIRYL", slug: "cefiryl", tagline: "The Master Key of Infection", description: "Cefixime based anti-infective range.", therapeuticArea: "anti-infectives", image: "", products: [] },
  { id: "pantoryl-lsr", name: "PANTORYL-LSR", slug: "pantoryl-lsr", tagline: "Chill Down Burning Hyperacidity", description: "Pantoprazole + Levosulpride Capsule.", therapeuticArea: "gastroenterology", image: "", products: [] },
  { id: "rylkuf-a", name: "RYLKUF-A", slug: "rylkuf-a", tagline: "Calm Down the Cough", description: "Terbutaline + Ambroxol + Guaiphenesin + Menthol Syrup.", therapeuticArea: "respiratory", image: "", products: [] },
  { id: "ferroryl-xt", name: "FERRORYL-XT", slug: "ferroryl-xt", tagline: "For the Precious Hb Rise", description: "Ferrous Ascorbate + Folic Acid + Zinc.", therapeuticArea: "gynecology", image: "", products: [] },
  { id: "l-cetriyal-m", name: "L-CETRIYAL-M", slug: "l-cetriyal-m", tagline: "When Allergies Make it Difficult", description: "Levocetirizine + Montelukast.", therapeuticArea: "respiratory", image: "", products: [] },
];

export const products: Product[] = [...ownProducts];
