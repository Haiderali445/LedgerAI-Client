import { AuditableEntity } from './common.types';
import { InvoiceType, PaymentMethod } from './enums';

export interface InvoiceLineItem {
  id: string;
  itemDescription: string;
  quantity: number;
  unitPricePkr: number;
  fbrTaxRate: number;
  fbrTaxAmountPkr: number;
  totalWithTaxPkr: number;
}

export interface TaxSummary {
  fbrSalesTaxRate: number;
  taxableAmountPkr: number;
  taxAmountPkr: number;
  withholdingTaxPkr?: number;
  fbrInvoiceTrackingNumber?: string;
}

export interface Invoice extends AuditableEntity {
  invoiceNumber: string; // e.g. INV-2026-1182
  orderId?: string;
  voucherNumber?: string; // 00 or 01 series voucher code
  invoiceType: InvoiceType;
  issueDate: string;
  dueDate: string;
  customerId: string;
  customerTitle: string;
  customerNtn?: string; // National Tax Number
  customerStrn?: string; // Sales Tax Registration Number
  items: InvoiceLineItem[];
  subtotalPkr: number;
  totalTaxPkr: number;
  grandTotalPkr: number;
  paidAmountPkr: number;
  balanceDuePkr: number;
  isFullyPaid: boolean;
  paymentMethod: PaymentMethod;
  taxSummary: TaxSummary;
  qrCodeUrl?: string;
  pdfDownloadUrl?: string;
}

export interface IssueVoucherPayload {
  invoiceType: InvoiceType;
  accountId: string;
  amountPkr: number;
  paymentMethod: PaymentMethod;
  voucherCategory: 'Voucher00_Receipt' | 'Voucher01_Settlement';
  memo: string;
  bankRefNumber?: string;
}
