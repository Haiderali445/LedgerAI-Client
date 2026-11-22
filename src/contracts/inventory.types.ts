import { AuditableEntity } from './common.types';
import { WarehouseRegion } from './enums';

export interface Warehouse extends AuditableEntity {
  code: string;
  name: string;
  region: WarehouseRegion;
  locationCity: string;
  address: string;
  managerName: string;
  contactPhone: string;
  capacityUnits: number;
  currentOccupancyUnits: number;
  isPrimary: boolean;
}

export interface FEFOBatch {
  id: string;
  batchNumber: string;
  stockId: string;
  productId: string;
  warehouseId: string;
  manufactureDate?: string;
  expiryDate: string;
  initialQuantity: number;
  availableQuantity: number;
  reservedQuantity: number;
  unitCostPkr: number;
  isExpired: boolean;
}

export interface InventoryStock extends AuditableEntity {
  productId: string;
  sku: string;
  productName: string;
  warehouseId: string;
  warehouseName: string;
  onHandQuantity: number;
  reservedQuantity: number;
  availableQuantity: number;
  reorderLevel: number;
  batchNumber?: string;
  expiryDate?: string;
  unitCostPkr: number;
  totalValuationPkr: number;
  batches?: FEFOBatch[];
}

export interface StockMovement extends AuditableEntity {
  referenceNumber: string; // e.g. GRN-2026-081, STO-2026-112
  movementType:
    | 'PURCHASE'
    | 'SALE'
    | 'TRANSFER'
    | 'ADJUSTMENT'
    | 'DAMAGE_EXPIRY'
    | 'GRN_Received'
    | 'Sales_Dispatch'
    | 'Warehouse_Transfer'
    | 'Audit_Adjustment'
    | 'Damage_Writeoff';
  productId: string;
  productName: string;
  fromWarehouseId?: string;
  fromWarehouseName?: string;
  toWarehouseId?: string;
  toWarehouseName?: string;
  quantity: number;
  unitPricePkr: number;
  totalAmountPkr: number;
  batchNumber?: string;
  reason?: string;
}

export interface LowStockAlert {
  productId: string;
  productName: string;
  sku: string;
  warehouseName: string;
  currentStock: number;
  reorderLevel: number;
  deficit: number;
  urgency: 'Critical' | 'Warning' | 'Adequate';
}
