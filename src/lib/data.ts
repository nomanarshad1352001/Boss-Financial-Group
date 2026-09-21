/* ------------------------------------------------------------------ */
/*  BOSS Financial Group — central content & stock imagery (dummy data)*/
/* ------------------------------------------------------------------ */

export const SITE = {
  name: "BOSS Financial Group",
  legalName: "Boss Financial Group LLC",
  phone: "(888) 484-2677",
  phoneHref: "tel:+18884842677",
  email: "admin@bossfinancialgroup.com",
  address: "1501 S MoPac Expy Suite 200, Austin, TX 78746",
  hours: "Mon – Friday 11:00am - 5:00pm",
  sunday: "Sunday – CLOSED",
  tagline: "Call Now For A Free Quote/Estimate/Special Offer!",
  smsConsent:
    "I Agree to Receive SMS Notifications, Alerts & Occasional Marketing Communication from Boss Financial Group LLC. You can reply STOP to unsubscribe at any time.",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

/* ---------------- imagery (Pexels licensed stock) ---------------- */
const px = (id: number, w = 1400, h = 933) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const IMAGES = {
  heroMain: px(7821683, 1100, 1400), // advisor reviewing documents
  heroSecondary: px(8112165, 900, 700), // three professionals at desk
  officeLounge: px(8082233, 1600, 1000), // luxury office interior
  marbleHall: px(8146200, 1600, 1000), // marble hallway
  aboutTeam: px(8112152, 1200, 900), // friendly business meeting
  aboutMeeting: px(7433869, 1200, 900), // dynamic office discussion
  signingDocs: px(7433919, 1200, 900), // signing papers meeting
  teamPortrait: px(7433937, 1200, 900), // three confident businesswomen
  taxConsulting: px(8296970, 1100, 900), // accountant & calculator
  taxFlatlay: px(7821688, 1100, 900), // tax forms flat lay
  setc: px(7433869, 1100, 900), // team analyzing documents
  setcCalc: px(7680744, 1100, 900), // businesswoman calculating
  bookkeeping: px(7247407, 1100, 900), // writing & ledger
  brokerage: px(6918507, 1100, 900), // businessmen handshake
  brokerageClose: px(5398879, 1100, 900), // handshake close-up
  consult: px(7821671, 1100, 1200), // advisor & client paperwork
  handshakeWarm: px(5520322, 1200, 800),
  advisorClient: px(7821714, 1200, 900),
};

export const AVATARS = {
  jane: "https://images.pexels.com/photos/33680700/pexels-photo-33680700.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=200&h=200",
  marcus:
    "https://images.pexels.com/photos/33799456/pexels-photo-33799456.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=200&h=200",
  amara:
    "https://images.pexels.com/photos/6497114/pexels-photo-6497114.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=200&h=200",
  daniel:
    "https://images.pexels.com/photos/17049771/pexels-photo-17049771.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=200&h=200",
  sofia:
    "https://images.pexels.com/photos/18351014/pexels-photo-18351014.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=200&h=200",
  ethan:
    "https://images.pexels.com/photos/31647492/pexels-photo-31647492.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=200&h=200",
};

/* ---------------- services ---------------- */
export interface Service {
  slug: string;
  title: string;
  short: string;
  long: string;
  points: string[];
  image: string;
  icon: "calculator" | "badge-percent" | "book-open" | "handshake";
}

export const SERVICES: Service[] = [
  {
    slug: "tax-consulting",
    title: "Tax Consulting",
    short:
      "Navigating the complexities of tax laws can be challenging. Our tax consulting services ensure you are compliant with all regulations while maximizing your tax savings.",
    long: "Navigating the complexities of tax laws can be challenging. Our tax consulting services ensure you are compliant with all regulations while maximizing your tax savings. We offer strategic tax planning, preparation, and advisory services to individuals and businesses, helping you make informed decisions that optimize your financial health.",
    points: [
      "Strategic tax planning & preparation",
      "Individual & business tax advisory",
      "IRS compliance and audit support",
      "Proactive, year-round guidance",
    ],
    image: px(8296970, 1100, 900),
    icon: "calculator",
  },
  {
    slug: "setc",
    title: "Specialized Employee Tax Credits (SETC)",
    short:
      "Included within our tax consulting services is our expertise in Specialized Employee Tax Credits (SETC). We help businesses identify and claim all eligible credits.",
    long: "Included within our tax consulting services is our expertise in Specialized Employee Tax Credits (SETC). We help businesses identify and claim all eligible credits, ensuring you take full advantage of these incentives to reduce your tax burden and enhance your financial standing.",
    points: [
      "Eligibility discovery & credit screening",
      "Claim preparation & documentation",
      "Maximize refunds for self-employed professionals",
      "End-to-end filing support",
    ],
    image: px(7680744, 1100, 900),
    icon: "badge-percent",
  },
  {
    slug: "bookkeeping",
    title: "Bookkeeping",
    short:
      "Accurate and timely financial records are the foundation of any successful business. Our bookkeeping services take the hassle out of managing your finances.",
    long: "Accurate and timely financial records are the foundation of any successful business. Our bookkeeping services take the hassle out of managing your finances, allowing you to focus on what you do best. We provide comprehensive bookkeeping solutions, including financial statement preparation, payroll processing, and accounts receivable/payable management, ensuring your books are always in order.",
    points: [
      "Financial statement preparation",
      "Payroll processing & reporting",
      "Accounts receivable / payable management",
      "Monthly reconciliation & clean books",
    ],
    image: px(7247407, 1100, 900),
    icon: "book-open",
  },
  {
    slug: "business-sale-brokerage",
    title: "Business Sale Brokerage",
    short:
      "Thinking of buying or selling a business? Our brokerage team guides you through the entire process with a network of qualified buyers and sellers.",
    long: "Thinking of buying or selling a business? Our business sale brokerage team is here to guide you through the entire process. With a deep understanding of market trends and a network of qualified buyers and sellers, we facilitate smooth and profitable transactions, helping you achieve the best possible outcomes.",
    points: [
      "Confidential business valuation",
      "Qualified buyer & seller network",
      "Deal structuring & negotiation",
      "Guidance through closing & transition",
    ],
    image: px(6918507, 1100, 900),
    icon: "handshake",
  },
];

/* ---------------- why choose us ---------------- */
export const WHY_CHOOSE = [
  {
    title: "Expert Team",
    text: "Our team comprises seasoned professionals with extensive experience in tax consulting, bookkeeping, and business brokerage.",
    icon: "shield-check",
  },
  {
    title: "Personalized Service",
    text: "We take the time to understand your unique needs and tailor our services to meet your specific requirements.",
    icon: "gem",
  },
  {
    title: "Integrity",
    text: "We adhere to the highest ethical standards, ensuring transparency and trust in all our dealings.",
    icon: "scale",
  },
  {
    title: "Client-Centric Approach",
    text: "Your success is our priority. We are committed to providing exceptional service and support to help you reach your financial objectives.",
    icon: "heart-handshake",
  },
];

/* ---------------- testimonials ---------------- */
export const TESTIMONIALS = [
  {
    quote:
      "I was so overwhelmed with my bookkeeping that I was falling behind on my taxes and other financial obligations. The team got my books in order quickly and efficiently — I finally feel in control again.",
    name: "Jane Doe",
    role: "Boutique Owner, Austin TX",
    avatar: AVATARS.jane,
  },
  {
    quote:
      "I am so grateful for their bookkeeping services. They have taken all of the stress out of managing my finances and I can now focus on running my business with total peace of mind.",
    name: "Jane Doe",
    role: "Café Founder, Dallas TX",
    avatar: AVATARS.amara,
  },
  {
    quote:
      "BOSS Financial Group uncovered SETC credits I never knew I qualified for. The refund was remarkable — their tax team is simply world-class.",
    name: "Marcus Reed",
    role: "Independent Consultant",
    avatar: AVATARS.marcus,
  },
  {
    quote:
      "Selling my logistics company felt daunting until their brokerage team stepped in. They found a qualified buyer in weeks and negotiated a price well above my expectations.",
    name: "Daniel Ortiz",
    role: "Former Logistics CEO",
    avatar: AVATARS.daniel,
  },
  {
    quote:
      "From payroll to financial statements, everything arrives on time and perfectly reconciled. It is the most professional bookkeeping experience I have ever had.",
    name: "Sofia Bennett",
    role: "Skincare Brand Founder",
    avatar: AVATARS.sofia,
  },
  {
    quote:
      "Their strategic tax planning saved our family business thousands. Elegant, transparent, and always one step ahead of deadlines.",
    name: "Ethan Cole",
    role: "Restaurant Group Director",
    avatar: AVATARS.ethan,
  },
];

/* ---------------- FAQs ---------------- */
export const FAQS = [
  {
    q: "What is the difference between bookkeeping and accounting?",
    a: "Bookkeeping is the day-to-day recording and organization of your financial transactions — sales, expenses, payroll, and reconciliations. Accounting builds on that foundation: interpreting, analyzing, and reporting the data to guide strategy, tax planning, and compliance. At BOSS Financial Group, our bookkeeping keeps your records immaculate, while our consulting turns those numbers into decisions.",
  },
  {
    q: "What kind of businesses do you work with?",
    a: "We serve a wide range of clients — from self-employed professionals and growing startups to established small and mid-sized businesses across retail, hospitality, professional services, real estate, and e-commerce. Whether you need monthly bookkeeping, SETC credit recovery, or a full business sale, we tailor our engagement to your size and industry.",
  },
  {
    q: "What are your qualifications and experience?",
    a: "Our team comprises seasoned tax consultants, bookkeepers, and business brokers with decades of combined experience across 16+ countries. We stay current on federal and state tax codes, credit programs such as SETC, and market valuation methods — and we hold ourselves to the highest ethical and confidentiality standards in everything we do.",
  },
];

/* ---------------- stats ---------------- */
export const STATS = [
  { value: 16, suffix: "+", label: "Countries Served Worldwide" },
  { value: 1200, suffix: "+", label: "Clients Advised & Supported" },
  { value: 4.8, suffix: "M", prefix: "$", label: "Tax Credits Recovered", decimals: 1 },
  { value: 98, suffix: "%", label: "Client Satisfaction Rate" },
];

export const MARQUEE_ITEMS = [
  "Tax Consulting",
  "SETC Credits",
  "Bookkeeping",
  "Business Sale Brokerage",
  "Payroll Processing",
  "Financial Statements",
  "Strategic Planning",
  "IRS Compliance",
];
