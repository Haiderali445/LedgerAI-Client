import { AuditableEntity } from './common.types';
import { AccountType, RiskTier, PaymentMethod } from './enums';

export interface AgingBucket {
  current0To30: number;
  bucket31To60: number;
  bucket61To90: number;
  over90Days: number;
}

export interface KhataAccount extends AuditableEntity {
  accountCode: string; // e.g. ACC-KH-8021
  title: string;
  urduTitle?: string;
  accountType: AccountType;
  ownerName: string;
  phone: string;
  whatsappNumber: string;
  city: string;
  marketLocation: string; // e.g. "Akbari Mandi, Lahore", "Jodia Bazaar, Karachi"
  creditLimitPkr: number;
  currentBalancePkr: number; // Positive = Receivable (Udhaar), Negative = Payable
  balanceNature: 'DR' | 'CR'; // Debit = Customer owes money, Credit = Advance / Vendor payable
  riskTier: RiskTier;
  aging: AgingBucket;
  lastPaymentDate?: string;
  lastOrderDate?: string;
  isCreditBlocked: boolean;
  notes?: string;
}

export interface KhataTransaction extends AuditableEntity {
  accountId: string;
  accountTitle: string;
  voucherNumber: string; // e.g. VCH-00-9821
  transactionDate: string;
  description: string;
  referenceDocType: 'SaleInvoice' | 'PaymentReceipt' | 'CreditNote' | 'DebitNote' | 'OpeningBalance';
  referenceDocId?: string;
  debitAmountPkr: number; // DR: increases receivable
  creditAmountPkr: number; // CR: payment received / credit given
  runningBalancePkr: number;
  paymentMethod?: PaymentMethod;
  paymentReceiptProofUrl?: string;
}

export interface RecordKhataPaymentRequest {
  accountId: string;
  amountPkr: number;
  paymentMethod: PaymentMethod;
  notes: string;
  referenceNumber?: string;
  sendWhatsAppNotification?: boolean;
}
