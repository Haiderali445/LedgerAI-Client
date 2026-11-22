import { AuditableEntity } from './common.types';
import { ChannelType, ChannelStatus } from './enums';

export interface ChannelConnector extends AuditableEntity {
  name: string;
  channelType: ChannelType;
  status: ChannelStatus;
  endpointOrNumber: string; // e.g. "+92 300 8492011" or "api.shopify.com/store"
  lastSyncAt: string;
  totalMessagesProcessed: number;
  totalOrdersReceived: number;
  syncFrequencyMinutes: number;
  config: {
    webhookSecret?: string;
    templateLanguage?: string;
    autoReplyEnabled?: boolean;
    aiParsingEnabled?: boolean;
  };
}

export interface WhatsAppMessage {
  id: string;
  timestamp: string;
  fromNumber: string;
  customerName: string;
  text: string;
  direction: 'inbound' | 'outbound';
  detectedIntent?: 'ORDER_CREATION' | 'KHATA_BALANCE_QUERY' | 'PAYMENT_RECEIPT' | 'GENERAL_INQUIRY';
  normalizedItems?: Array<{
    item: string;
    qty: number;
  }>;
  status: 'Received' | 'Processed' | 'Failed';
}

export interface ConnectWhatsAppPayload {
  phoneNumber: string;
  businessAccountId: string;
  systemAccessToken: string;
  enableAiAgent: boolean;
  webhookCallbackUrl: string;
}
