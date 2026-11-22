export interface LandingFeature {
  title: string;
  urduSubtitle: string;
  description: string;
  icon: string;
  badge: string;
  highlights: string[];
}

export const mockLandingFeatures: LandingFeature[] = [
  {
    title: 'Multi-Warehouse Inventory & Dispatch',
    urduSubtitle: 'ملٹی گودام اور اسٹاک ترسیل',
    description: 'Track master cartons, jute sacks, batches, and expiry dates across regional logistics hubs in real time with automated reorder triggers.',
    icon: 'Boxes',
    badge: 'IMS Core',
    highlights: ['Multi-depot transfers', 'Batch & Expiry traceability', 'Negative stock prevention'],
  },
  {
    title: 'B2B Udhaar Khata & Risk Engine',
    urduSubtitle: 'کھاتہ اور ادھار کنٹرول',
    description: 'Digitize traditional mandi khata books. Real-time DR/CR balance calculation, credit limit enforcement, and aging risk buckets (0-30, 31-60, 90+ days).',
    icon: 'BookOpen',
    badge: 'Financial Ledger',
    highlights: ['Automated credit blocking', 'Daily WhatsApp Khata reminders', '00/01 Series vouchers'],
  },
  {
    title: 'WhatsApp Conversational AI Copilot',
    urduSubtitle: 'واٹس ایپ اے آئی آرڈر بوٹ',
    description: 'Empower mandi traders and retailers to send voice or Urdu/Roman Urdu text on WhatsApp. LedgerAI extracts products, checks stock, and drafts orders instantly.',
    icon: 'MessageSquareCode',
    badge: 'AI Native',
    highlights: ['Urdu & Roman Urdu NLU', 'Voice-to-Order parsing', 'Automated bill dispatch'],
  },
  {
    title: 'Strict Order Approval Workflows',
    urduSubtitle: 'آرڈر منظوری اور کسٹم چیکس',
    description: 'Prevent overdue khata leakages. Orders exceeding credit limits require CFO or credit lead authorization before warehouse pick-slips generate.',
    icon: 'ShieldCheck',
    badge: 'Governance',
    highlights: ['Two-tier credit overrides', 'Live credit limit check', 'FBR Sales Tax invoicing'],
  },
  {
    title: 'Omnichannel B2B Connectors',
    urduSubtitle: 'ہمہ جہت چینل رابطہ',
    description: 'Unified sync across WhatsApp Cloud, self-service B2B web portals, field sales reps app, and Shopify/Daraz wholesale stores.',
    icon: 'Network',
    badge: 'Integrations',
    highlights: ['Meta Cloud WhatsApp API', 'SignalR real-time stream', 'REST & Supabase sync'],
  },
  {
    title: 'Mandi Intelligence & FBR Compliance',
    urduSubtitle: 'منڈی رپورٹس اور ٹیکس گوشوارے',
    description: 'Real-time sales velocity, collection performance by market zone, aging debtor reports, and automated FBR-ready sales tax QR codes.',
    icon: 'BarChart3',
    badge: 'Analytics',
    highlights: ['FBR compliant vouchers', 'Mandi market performance', 'Live gross margin audit'],
  },
];

export const mockLandingStats = [
  { value: '₨ 42.8B+', label: 'Annual Wholesale GMV' },
  { value: '99.4%', label: 'Order Processing Accuracy' },
  { value: '14 Days', label: 'Average Khata Cycle Reduced' },
  { value: '250,000+', label: 'WhatsApp Orders Processed' },
];

export const mockCustomerStories = [
  {
    quote: 'LedgerAI completely transformed our Akbari Mandi edible oil and ghee distribution. Our outstanding recovery improved by 35% within 60 days thanks to automated WhatsApp Khata slips.',
    author: 'Chaudhry Tariq Mehmood',
    role: 'Managing Director',
    company: 'Pak Premier Mega Distribution (Pvt) Ltd',
    location: 'Lahore',
  },
  {
    quote: 'Managing 4 yarn warehouses and tracking credit lines for 150+ textile weaving mills used to be a spreadsheet nightmare. LedgerAI makes multi-depot inventory and risk approvals effortless.',
    author: 'Mian Bilal Rafique',
    role: 'Head of Supply Chain',
    company: 'Indus Yarn & Weaving Distribution',
    location: 'Faisalabad',
  },
];
