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
    amounts: { NGN: "₦0", KES: "KSh 0", INR: "₹0", BRL: "R$0", MXN: "MX$0" },
    features: ["1 site, 5 pages", "2 plugins", "pixasocial.ai subdomain"],
  },
  {
    name: "Market",
    featured: true,
    amounts: { NGN: "₦4,500", KES: "KSh 900", INR: "₹499", BRL: "R$29", MXN: "MX$99" },
    features: ["Unlimited pages", "All local rails", "Custom domain"],
  },
  {
    name: "Emporium",
    featured: false,
    amounts: { NGN: "₦18,000", KES: "KSh 3,600", INR: "₹1,999", BRL: "R$119", MXN: "MX$399" },
    features: ["Multi-store", "Team seats", "Priority support"],
  },
];
