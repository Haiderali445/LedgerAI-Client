import { BaseEntity } from './common.types';

export interface ChargePreset {
  id: string;
  name: string; // e.g. "Mandi Bilty Cargo", "Mazdoori Unloading Rate", "Standard WHT 4.5%", "Kasar Cash Settlement"
  type: 'fixed' | 'percentage';
  value: number;
  appliesTo: 'purchase_00' | 'sale_01' | 'both';
  isDefault: boolean;
}

export interface EnterpriseSettings extends BaseEntity {
  businessName: string;
  tenantCode: string;
  domainSlug: string;
  currencyCode: string; // "PKR"
  timezone: string; // "Asia/Karachi"
  voucher00Prefix: string; // "VCH-00"
  voucher01Prefix: string; // "VCH-01"
  orderPrefix: string; // "ORD"
  invoicePrefix: string; // "INV"
  creditApprovalThresholdPkr: number; // e.g. 2,000,000
  strictFefoEnforcement: boolean;
  autoLockOverdueKhataDays: number; // e.g. 60
  chargePresets: ChargePreset[];
  workspacePreferences: {
    compactTableView: boolean;
    showUrduLabels: boolean;
    requireManagerOverrideRemark: boolean;
    enableRealtimeStream: boolean;
  };
}
