export type PluginStatus = "Connected" | "Available";

export type Plugin = {
  initial: string;
  name: string;
  meta: string;
  category: "Payments" | "Messaging" | "Growth" | "Logistics";
  status: PluginStatus;
  tone: "primary" | "accent";
};

export const plugins: Plugin[] = [
  {
    initial: "M",
    name: "M-Pesa",
    meta: "Mobile money · Kenya",
    category: "Payments",
    status: "Connected",
    tone: "primary",
  },
  {
    initial: "U",
    name: "UPI",
    meta: "Instant transfer · India",
    category: "Payments",
    status: "Connected",
    tone: "accent",
  },
  { initial: "P", name: "Pix", meta: "Real-time · Brazil", category: "Payments", status: "Available", tone: "primary" },
  {
    initial: "O",
    name: "OXXO",
    meta: "Cash + card · Mexico",
    category: "Payments",
    status: "Available",
    tone: "accent",
  },
  {
    initial: "D",
    name: "Dodo Payments",
    meta: "Unified gateway · 30+ rails",
    category: "Payments",
    status: "Connected",
    tone: "primary",
  },
  {
    initial: "W",
    name: "WhatsApp",
    meta: "Order chat · Global",
    category: "Messaging",
    status: "Available",
    tone: "accent",
  },
  {
    initial: "F",
    name: "Flutterwave",
    meta: "Cards + bank · Nigeria",
    category: "Payments",
    status: "Available",
    tone: "primary",
  },
  {
    initial: "R",
    name: "Razorpay",
    meta: "Cards + netbanking · India",
    category: "Payments",
    status: "Available",
    tone: "accent",
  },
  {
    initial: "S",
    name: "SMS Gateway",
    meta: "Order alerts · Africa",
    category: "Messaging",
    status: "Available",
    tone: "primary",
  },
  {
    initial: "T",
    name: "Tala Analytics",
    meta: "Funnels + revenue",
    category: "Growth",
    status: "Available",
    tone: "accent",
  },
  {
    initial: "G",
    name: "Glovo Delivery",
    meta: "Last mile · LatAm",
    category: "Logistics",
    status: "Available",
    tone: "primary",
  },
  {
    initial: "E",
    name: "Email Campaigns",
    meta: "Broadcast · Global",
    category: "Growth",
    status: "Available",
    tone: "accent",
  },
];

export type Currency = "NGN" | "KES" | "INR" | "BRL" | "MXN";

export const currencies: Currency[] = ["NGN", "KES", "INR", "BRL", "MXN"];

export const pricing: {
  name: string;
  featured: boolean;
  amounts: Record<Currency, string>;
  features: string[];
}[] = [
  {
    name: "Stall",
    featured: false,
    amounts: { NGN: "₦9,500", KES: "KSh 1,900", INR: "₹999", BRL: "R$59", MXN: "MX$199" },
    features: ["1 site, unlimited pages", "5 plugins", "pixasocial.ai subdomain", "M-Pesa, UPI or Pix checkout"],
  },
  {
    name: "Market",
    featured: true,
    amounts: { NGN: "₦24,000", KES: "KSh 4,800", INR: "₹2,499", BRL: "R$149", MXN: "MX$499" },
    features: ["3 sites", "All 30+ local rails", "Custom domain", "WhatsApp orders", "Priority AI builds"],
  },
  {
    name: "Emporium",
    featured: false,
    amounts: { NGN: "₦65,000", KES: "KSh 13,000", INR: "₹6,999", BRL: "R$399", MXN: "MX$1,299" },
    features: ["Multi-store, unlimited sites", "Team seats", "Dedicated success manager", "API access"],
  },
];
