export enum OrderStatus {
  Draft = 'Draft',
  PendingApproval = 'PendingApproval',
  PENDING_APPROVAL = 'PENDING_APPROVAL',
  Validated = 'Validated',
  VALIDATED = 'VALIDATED',
  Approved = 'Approved',
  Committed = 'Committed',
  COMMITTED = 'COMMITTED',
  Dispatched = 'Dispatched',
  Delivered = 'Delivered',
  Rejected = 'Rejected',
  REJECTED = 'REJECTED',
  Cancelled = 'Cancelled',
  CANCELLED = 'CANCELLED',
}

export enum AccountType {
  CustomerKhata = 'CustomerKhata',
  VendorKhata = 'VendorKhata',
  Bank = 'Bank',
  Cash = 'Cash',
  TaxPayable = 'TaxPayable',
  Revenue = 'Revenue',
  COGS = 'COGS',
}

export enum InvoiceType {
  StandardSale = 'StandardSale',
  KhataDebitNote = 'KhataDebitNote',
  KhataCreditNote = 'KhataCreditNote',
  PaymentVoucher00 = 'PaymentVoucher00', // Cash/Bank receipt
  PaymentVoucher01 = 'PaymentVoucher01', // Supplier/Vendor settlement
  Proforma = 'Proforma',
}

export enum RiskTier {
  LowRisk = 'LowRisk',
  MediumRisk = 'MediumRisk',
  HighRisk = 'HighRisk',
  Blocked = 'Blocked',
}

export enum ChannelType {
  WhatsApp = 'WhatsApp',
  B2BPortal = 'B2BPortal',
  ShopifyB2B = 'ShopifyB2B',
  DarazStore = 'DarazStore',
  FieldAgentApp = 'FieldAgentApp',
  EmailEDI = 'EmailEDI',
}

export enum ChannelStatus {
  Connected = 'Connected',
  Disconnected = 'Disconnected',
  Syncing = 'Syncing',
  Error = 'Error',
}

export enum PaymentMethod {
  Cash = 'Cash',
  BankTransfer = 'BankTransfer',
  Cheque = 'Cheque',
  UdhaarCredit = 'UdhaarCredit',
  JazzCash = 'JazzCash',
  EasyPaisa = 'EasyPaisa',
}

export enum WarehouseRegion {
  LahoreCentral = 'Lahore Central Depot',
  KarachiPort = 'Karachi Port Terminal',
  FaisalabadHub = 'Faisalabad Textile Hub',
  IslamabadDepot = 'Islamabad Capital Depot',
  PeshawarCross = 'Peshawar Logistics Crossdock',
}

export enum TenantStatus {
  Active = 'Active',
  Trialing = 'Trialing',
  Suspended = 'Suspended',
  PastDue = 'PastDue',
}

export enum SubscriptionPlan {
  Starter = 'Starter',
  GrowthWholesale = 'Growth Wholesale',
  EnterpriseScale = 'Enterprise Scale',
  CustomB2B = 'Custom B2B',
}

export enum UserRole {
  Owner = 'Owner',
  Admin = 'Admin',
  Manager = 'Manager',
  Operator = 'Operator',
  Viewer = 'Viewer',
  // Aliases for enterprise compatibility:
  SuperAdmin = 'Owner',
  TenantAdmin = 'Admin',
  FinanceManager = 'Manager',
  InventoryClerk = 'Operator',
  SalesOfficer = 'Operator',
  WarehouseLead = 'Operator',
}
