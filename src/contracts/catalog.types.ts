import { AuditableEntity } from './common.types';

export interface PriceTier {
  minQuantity: number;
  unitPricePkr: number;
  tierName: string;
}

export interface ProductVariant {
  id: string;
  sku: string;
  barcode?: string;
  name: string;
  packSize: string; // e.g. "Carton (24 units)", "Sack 50kg"
  wholesalePricePkr: number;
  retailPricePkr: number;
  costPricePkr: number;
  weightKg?: number;
}

export interface ProductCategory {
  id: string;
  name: string;
  code: string;
  description?: string;
  itemCount: number;
}

export interface Product extends AuditableEntity {
  sku: string;
  name: string;
  urduName?: string;
  category: string;
  brand: string;
  unitOfMeasure: 'Carton' | 'Kg' | 'Bag' | 'Piece' | 'Bale' | 'Drum' | string;
  baseUnit?: string;
  secondaryUnit?: string;
  packSize?: string;
  tradePricePkr: number; // Wholesale selling price
  mrpPkr: number; // Maximum Retail Price
  costPricePkr: number; // Landing cost
  reorderLevel?: number;
  taxRatePercent: number; // FBR Sales Tax (e.g., 18%)
  minimumOrderQuantity: number;
  isTaxExempt: boolean;
  isActive: boolean;
  variants: ProductVariant[];
  priceTiers: PriceTier[];
  totalStockQuantity: number;
}
