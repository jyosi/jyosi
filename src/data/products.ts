export interface Product {
  id: string;
  name: string;
  slug: string;
  composition: string;
  category: string;
  therapeuticArea: string;
  dosageForm: string;
  packSize: string;
  description: string;
  benefits: string[];
  indications: string[];
  featured: boolean;
  flagship: boolean;
  image?: string;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  therapeuticArea: string;
  products: Product[];
  image?: string;
}
