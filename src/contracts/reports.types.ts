export interface DashboardKpis {
  totalRevenuePkr: number;
  revenueGrowthPercent: number;
  totalReceivablesPkr: number; // Total Udhaar outstanding
  overdueReceivablesPkr: number;
  inventoryValuationPkr: number;
  activeOrdersCount: number;
  lowStockItemsCount: number;
  aiOrdersAutomatedCount: number;
  collectionRatePercent: number;
}

export interface SalesTrendPoint {
  month: string;
  grossSalesPkr: number;
  netCollectionsPkr: number;
  udhaarExtendedPkr: number;
}

export interface AgingReportRow {
  accountId: string;
  customerName: string;
  marketLocation: string;
  totalDuePkr: number;
  days0To30Pkr: number;
  days31To60Pkr: number;
  days61To90Pkr: number;
  days90PlusPkr: number;
  riskRating: 'Low' | 'Medium' | 'High';
}

export interface TopSellingItem {
  productId: string;
  productName: string;
  sku: string;
  unitsSold: number;
  revenuePkr: number;
  marginPercent: number;
}
