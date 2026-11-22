import { AuditableEntity } from './common.types';
import { OrderStatus, PaymentMethod, ChannelType } from './enums';

export interface OrderItem {
  id: string;
  productId: string;
  sku: string;
  productName: string;
  quantityOrdered: number;
  unitPricePkr: number;
  discountPkr: number;
  taxAmountPkr: number;
  lineTotalPkr: number;
  packSizeDescription?: string;
}

export interface Order extends AuditableEntity {
  orderNumber: string; // e.g. ORD-2026-0491
  customerId: string;
  customerName: string;
  customerPhone: string;
  shippingAddress: string;
  deliveryCity: string;
  destinationWarehouseId: string;
  destinationWarehouseName: string;
  channel: ChannelType;
  channelReferenceId?: string;
  status: OrderStatus;
  items: OrderItem[];
  subtotalPkr: number;
  taxTotalPkr: number;
  shippingPkr: number;
  grandTotalPkr: number;
  paymentMethod: PaymentMethod;
  isUdhaarApproved: boolean;
  creditRiskOverrideReason?: string;
  approvedBy?: string;
  dispatchedAt?: string;
  deliveredAt?: string;
  notes?: string;
}

export interface CreateOrderPayload {
  customerId: string;
  warehouseId: string;
  items: Array<{
    productId: string;
    quantity: number;
    unitPricePkr: number;
  }>;
  paymentMethod: PaymentMethod;
  notes?: string;
}

export interface ApproveOrderPayload {
  orderId: string;
  approverId: string;
  approvedCreditOverride?: boolean;
  approvalRemarks?: string;
}
