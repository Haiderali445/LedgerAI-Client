import { BaseEntity, AuditableEntity } from './common.types';
import { TenantStatus, SubscriptionPlan, UserRole } from './enums';

export interface TenantSubscription {
  plan: SubscriptionPlan;
  monthlyFeePkr: number;
  billingCycle: 'monthly' | 'annual';
  currentPeriodStart: string;
  currentPeriodEnd: string;
  autoRenew: boolean;
  activeWarehousesAllowed: number;
  maxUsersAllowed: number;
  aiCreditsPerMonth: number;
  usedAiCredits: number;
}

export interface TenantUsageMetrics {
  totalOrdersThisMonth: number;
  totalGmvPkr: number;
  activeStockSkus: number;
  activeKhataParties: number;
  whatsAppInvocations: number;
  storageUsedMb: number;
}

export interface Tenant extends BaseEntity {
  tenantId?: string;
  slug: string;
  legalEntityName: string;
  brandTradeName: string;
  industryCategory: 'FMCG_Wholesale' | 'Textiles_Yarn' | 'Electronics_Distributor' | 'Grain_Commodities';
  status: TenantStatus;
  primaryContactEmail: string;
  primaryContactPhone: string;
  headquartersCity: string;
  fbrNtn?: string;
  fbrStrn?: string;
  subscription: TenantSubscription;
  metrics: TenantUsageMetrics;
  dedicatedDatabaseSchema: string;
}

export interface TenantUser extends AuditableEntity {
  fullName: string;
  email: string;
  phone: string;
  role: UserRole;
  isActive: boolean;
  avatarUrl?: string;
  lastLoginAt?: string;
}
