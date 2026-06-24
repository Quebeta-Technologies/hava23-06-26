// Mock data for HAVA Website

export const headerData = {
  topBar: {
    certification: "ISO 9001:2015 Certified Manufacturer",
    location: "Pune, India",
    exportText: "Export Enquiries Welcome"
  },
  navigation: [
    { name: "Home", path: "/" },
    { name: "Why HAVA", path: "/why-hava" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Distributors & Dealers", path: "/dealers" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" }
  ],
  primaryCTA: "Get a Quote",
  havaLogo: "/assets/hava-logo.png",
  haryrockLogo: "/assets/haryrock-logo.png"
};

export const heroData = {
  headline: "Your Progressive Mining & Rock Drilling Partner",
  subheadline: "HAVA by Haryrock Engineering Pvt. Ltd. manufactures pneumatic rock drilling equipment, drifters, breakers, accessories, and spare parts for mining, tunnelling, quarrying, marble & granite, and construction applications.",
  supportCopy: "Built on engineering expertise, trusted for dependable performance, and designed to support demanding site conditions with reliable products and long-term value.",
  primaryCTA: "Get a Quote",
  secondaryCTA: "Explore Products"
};

// Factory tour video (uploaded asset)
export const videoData = {
  videoUrl: "/assets/factory-tour.mp4",
  posterUrl: "/products/about-manufacturing.jpg",
  isoBadge: "/assets/iso-badge.png",
  title: "Step Inside Our Manufacturing Facility",
  subtitle: "Where engineering excellence meets industrial precision",
  badges: [
    { label: "ISO 9001:2015", sublabel: "Certified Manufacturer" },
    { label: "25,000+", sublabel: "Sq. Ft. Facility" },
    { label: "15+", sublabel: "Countries Served" }
  ]
};

// Hero image for split section
export const heroImage = "/assets/section-2-hero.png";

// Countries served with flag emojis (Unicode flags work everywhere)
export const countriesData = {
  heading: "Trusted Across the Globe",
  subheading: "Serving customers across 15+ countries with manufacturer-direct supply",
  countries: [
    { name: "India", code: "IN", flag: "🇮🇳" },
    { name: "UAE", code: "AE", flag: "🇦🇪" },
    { name: "Saudi Arabia", code: "SA", flag: "🇸🇦" },
    { name: "South Africa", code: "ZA", flag: "🇿🇦" },
    { name: "Nigeria", code: "NG", flag: "🇳🇬" },
    { name: "Kenya", code: "KE", flag: "🇰🇪" },
    { name: "Tanzania", code: "TZ", flag: "🇹🇿" },
    { name: "Zambia", code: "ZM", flag: "🇿🇲" },
    { name: "Indonesia", code: "ID", flag: "🇮🇩" },
    { name: "Vietnam", code: "VN", flag: "🇻🇳" },
    { name: "Sri Lanka", code: "LK", flag: "🇱🇰" },
    { name: "Bangladesh", code: "BD", flag: "🇧🇩" },
    { name: "Nepal", code: "NP", flag: "🇳🇵" },
    { name: "Oman", code: "OM", flag: "🇴🇲" },
    { name: "Qatar", code: "QA", flag: "🇶🇦" },
    { name: "Egypt", code: "EG", flag: "🇪🇬" }
  ]
};

export const trustStripData = [
  { icon: "Award", label: "ISO 9001:2015 Certified", color: "from-amber-500 to-orange-500" },
  { icon: "Factory", label: "25,000 Sq. Ft. Facility", color: "from-blue-500 to-indigo-600" },
  { icon: "Globe", label: "15+ Countries Served", color: "from-emerald-500 to-teal-600" },
  { icon: "Shield", label: "Atlas Copco Compatible", color: "from-red-500 to-rose-600" },
  { icon: "Truck", label: "Manufacturer-Direct Supply", color: "from-purple-500 to-violet-600" }
];

export const aboutData = {
  badge: "About HAVA",
  heading: "Engineering Excellence Since Inception",
  intro: "HAVA by Haryrock Engineering Pvt. Ltd. is a leading manufacturer of pneumatic rock drilling equipment, born from decades of engineering expertise and an unwavering commitment to industrial quality.",
  description: "Our journey is defined by precision manufacturing, technical innovation, and a deep understanding of the mining, tunnelling, and construction industries. We don't just sell equipment — we engineer solutions that perform reliably in the world's most demanding environments.",
  highlights: [
    { value: "Decades", label: "of Engineering Heritage" },
    { value: "100%", label: "Manufacturer-Direct" },
    { value: "5+", label: "Core Industries" },
    { value: "Premium", label: "Quality Standards" }
  ],
  image: "/assets/section-3-about.png",
  cta: "Discover Our Story"
};

export const productCategories = [
  {
    id: 1,
    name: "Rock Drills",
    description: "High-performance pneumatic rock drills for drilling operations in mining, quarrying, and construction. Built for durability, precision, and efficient air consumption.",
    image: "/products/rock-drill-dry.jpg"
  },
  {
    id: 2,
    name: "Drifter",
    description: "Heavy-duty drifters for tunnelling and underground drilling applications. Designed for continuous operation with optimal penetration rates and rock breakage.",
    image: "/products/drifter.jpg"
  },
  {
    id: 3,
    name: "Pavement Breakers",
    description: "Powerful pneumatic breakers for demolition, pavement breaking, and concrete removal. Engineered for maximum impact energy with ergonomic handling.",
    image: "/products/pavement-breaker.jpg"
  },
  {
    id: 4,
    name: "Pusher Leg",
    description: "Pneumatic pusher legs for rock drill support and feed control. Provides stable drilling positioning with adjustable feed pressure for various applications.",
    image: "/products/pusher-leg.jpg"
  },
  {
    id: 5,
    name: "Airline Accessories",
    description: "Complete range of airline equipment including lubricators, filters, regulators, and hoses. Essential for maintaining optimal pneumatic tool performance.",
    image: "/products/airline-accessories.jpg"
  },
  {
    id: 6,
    name: "Extension Equipment",
    description: "Drill steels, rods, and extension equipment for various drilling depths. Manufactured with high-grade steel for long service life and reliable performance.",
    image: "/products/extension-taper.jpg"
  },
  {
    id: 7,
    name: "Button Bits",
    description: "Premium quality button bits for all rock drilling applications. Available in various sizes and button configurations for different rock formations.",
    image: "/products/button-bits.jpg"
  },
  {
    id: 8,
    name: "Spare Parts",
    description: "Comprehensive inventory of genuine spare parts for rock drills, drifters, and breakers. Ensures minimal downtime with ready availability and quality assurance.",
    image: "/products/spare-parts.jpg"
  }
];

export const whyHavaData = {
  heading: "Why Buyers Choose HAVA",
  intro: "When performance, durability, and dependable support matter, buyers choose manufacturers they can trust.",
  image: "/assets/why-hava.png",
  floatingTags: [
    { label: "ISO 9001:2015", position: "top-left" },
    { label: "Direct Manufacturer", position: "top-right" },
    { label: "Export Ready", position: "bottom-left" },
    { label: "15+ Countries", position: "bottom-right" }
  ],
  points: [
    {
      title: "Manufacturer, Not Trader",
      description: "Direct control over product design, quality assurance, and after-sales support through our own engineering and manufacturing facility. No middlemen, no compromises — just direct manufacturer relationships."
    },
    {
      title: "Engineering-Led Experience",
      description: "Decades of technical expertise in pneumatic drilling equipment, backed by continuous product development and field-tested improvements. Our engineers understand drilling because they live it."
    },
    {
      title: "Built for Demanding Conditions",
      description: "Products engineered to withstand rugged site environments, extreme temperatures, and continuous operation with minimal maintenance requirements. Tested in the world's toughest worksites."
    },
    {
      title: "Complete Product Ecosystem",
      description: "From primary drilling equipment to accessories and spare parts — a comprehensive solution from a single, reliable manufacturer. One supplier, total coverage."
    },
    {
      title: "Competitive Commercial Value",
      description: "Direct manufacturer pricing without intermediary markups, combined with product quality and reliability that delivers long-term value. Lower total cost of ownership."
    },
    {
      title: "Export-Ready Capability",
      description: "International quality standards, export documentation support, and proven experience serving customers across 15+ countries. Ready for global deployment."
    }
  ]
};

export const industriesData = {
  heading: "Engineered for Core Industrial Applications",
  intro: "HAVA products are used across industries where drilling performance, durability, and dependable equipment support are essential.",
  industries: [
    {
      name: "Mining",
      description: "Surface and underground mining operations requiring reliable drilling equipment for exploration, development, and production blasting.",
      stat: "60%",
      statLabel: "of customers",
      gradient: "from-amber-600 via-orange-500 to-red-600"
    },
    {
      name: "Tunnelling",
      description: "Tunnel construction and underground excavation projects demanding precision drilling and continuous equipment performance.",
      stat: "24/7",
      statLabel: "operation ready",
      gradient: "from-slate-700 via-slate-600 to-slate-800"
    },
    {
      name: "Construction",
      description: "Building foundations, road construction, and infrastructure projects requiring efficient rock drilling and demolition equipment.",
      stat: "100+",
      statLabel: "active projects",
      gradient: "from-blue-600 via-indigo-600 to-blue-700"
    },
    {
      name: "Quarrying",
      description: "Stone quarrying and aggregate production operations needing durable drilling equipment for consistent rock breakage.",
      stat: "15+",
      statLabel: "countries",
      gradient: "from-emerald-600 via-teal-600 to-green-700"
    },
    {
      name: "Marble & Granite",
      description: "Dimensional stone extraction requiring controlled drilling for block separation and minimized material damage.",
      stat: "Premium",
      statLabel: "quality cuts",
      gradient: "from-stone-600 via-zinc-600 to-stone-700"
    }
  ]
};

export const featuredProducts = [
  {
    id: 1,
    name: "RH-658/5L Dry Rock Drill",
    description: "High-performance dry rock drill with 5L air consumption, ideal for mining and quarrying applications with superior penetration rates.",
    image: "/products/rock-drill-dry.jpg"
  },
  {
    id: 2,
    name: "RH-656/4W Wet Rock Drill",
    description: "Wet drilling rock drill with integrated water flushing system for dust suppression and improved drilling efficiency in underground operations.",
    image: "/products/rock-drill-wet.jpg"
  },
  {
    id: 3,
    name: "BBC-120F Drifter",
    description: "Heavy-duty hydraulic drifter for tunnelling applications, delivering exceptional power and reliability in continuous drilling operations.",
    image: "/products/drifter.jpg"
  },
  {
    id: 4,
    name: "HR-117 Pavement Breaker",
    description: "Powerful pneumatic breaker with high impact energy for efficient pavement breaking, demolition, and concrete removal work.",
    image: "/products/pavement-breaker.jpg"
  },
  {
    id: 5,
    name: "BMK62S Pusher Leg",
    description: "Pneumatic pusher leg with adjustable feed control and stable positioning for optimal rock drill support and operator comfort.",
    image: "/products/pusher-leg.jpg"
  },
  {
    id: 6,
    name: "BLG-30 Airline Lubricator",
    description: "Automatic airline lubricator ensuring proper tool lubrication for extended equipment life and optimal pneumatic tool performance.",
    image: "/products/airline-accessories.jpg"
  }
];

export const manufacturingData = {
  heading: "Manufacturing That Builds Confidence",
  body: "Haryrock Engineering Pvt. Ltd. has built its reputation on quality-focused manufacturing, practical engineering, and dependable product supply. Our 25,000 sq. ft. manufacturing facility in Pune, India, is equipped with modern machinery and quality control systems that support consistent production standards.",
  cta: "View Our Infrastructure"
};

export const statsData = {
  heading: "Built for Performance. Positioned for Growth.",
  tabs: [
    {
      id: "reach",
      label: "Global Reach",
      stats: [
        { value: 15, label: "Countries Served", suffix: "+" },
        { value: 50, label: "International Clients", suffix: "+" },
        { value: 24, label: "Export Documentation", suffix: "/7" },
        { value: 100, label: "Export Ready %", suffix: "%" }
      ]
    },
    {
      id: "manufacturing",
      label: "Manufacturing",
      stats: [
        { value: 25000, label: "Sq. Ft. Facility", suffix: "" },
        { value: 99, label: "Quality Pass Rate", suffix: "%" },
        { value: 8, label: "Product Categories", suffix: "" },
        { value: 100, label: "In-House Production", suffix: "%" }
      ]
    },
    {
      id: "expertise",
      label: "Expertise",
      stats: [
        { value: 20, label: "Years Experience", suffix: "+" },
        { value: 5, label: "Core Industries", suffix: "+" },
        { value: 1000, label: "Active Buyers", suffix: "+" },
        { value: 98, label: "Customer Retention", suffix: "%" }
      ]
    }
  ],
  supportCopy: "From domestic industrial buyers to international enquiries, HAVA is building a stronger presence with a manufacturer-led identity, reliable product range, and export-ready mindset."
};

export const testimonials = [
  {
    id: 1,
    name: "Praharsh Verma",
    role: "Site Manager",
    product: "Rock Drill Dry",
    company: "Rajputana Mining Co.",
    location: "Rajasthan, India",
    text: "Consistent performance throughout our mining operations. Easy to handle, highly efficient, and minimal maintenance.",
    avatar: "https://i.pravatar.cc/150?img=12",
    companyLogo: "https://api.dicebear.com/7.x/initials/svg?seed=Rajputana%20Mining&backgroundColor=c62828&textColor=ffffff"
  },
  {
    id: 2,
    name: "Yash Sharma",
    role: "Quarry Supervisor",
    product: "Chisel & Moil Points",
    company: "Sharma Stone Works",
    location: "Madhya Pradesh, India",
    text: "Sharp penetration, long service life, and reliable quality. Cost-effective and dependable for our quarrying operations.",
    avatar: "https://i.pravatar.cc/150?img=33",
    companyLogo: "https://api.dicebear.com/7.x/initials/svg?seed=Sharma%20Stone&backgroundColor=1f3f77&textColor=ffffff"
  },
  {
    id: 3,
    name: "Ahmed Al-Mansoori",
    role: "Operations Head",
    product: "BBC-120F Drifter",
    company: "Gulf Tunneling Corp.",
    location: "Dubai, UAE",
    text: "Outstanding power and reliability in continuous tunnelling operations. HAVA has become our preferred manufacturer.",
    avatar: "https://i.pravatar.cc/150?img=51",
    companyLogo: "https://api.dicebear.com/7.x/initials/svg?seed=Gulf%20Tunneling&backgroundColor=f28c28&textColor=ffffff"
  },
  {
    id: 4,
    name: "Rajesh Patel",
    role: "Plant Manager",
    product: "HR-117 Pavement Breaker",
    company: "Patel Infrastructure",
    location: "Gujarat, India",
    text: "Excellent build quality and superior impact energy. The breaker has significantly reduced our project timelines.",
    avatar: "https://i.pravatar.cc/150?img=68",
    companyLogo: "https://api.dicebear.com/7.x/initials/svg?seed=Patel%20Infra&backgroundColor=304e6e&textColor=ffffff"
  },
  {
    id: 5,
    name: "Daniel Okafor",
    role: "Director",
    product: "Airline Accessories",
    company: "Lagos Mining Ltd.",
    location: "Lagos, Nigeria",
    text: "Direct manufacturer support and quality has been exceptional. HAVA delivers on every commitment, every time.",
    avatar: "https://i.pravatar.cc/150?img=60",
    companyLogo: "https://api.dicebear.com/7.x/initials/svg?seed=Lagos%20Mining&backgroundColor=059669&textColor=ffffff"
  },
  {
    id: 6,
    name: "Priya Nair",
    role: "Procurement Lead",
    product: "Button Bits & Drill Rods",
    company: "Southern Quarries",
    location: "Karnataka, India",
    text: "Reliable supply chain, premium quality products, and competitive pricing. A true partnership in every sense.",
    avatar: "https://i.pravatar.cc/150?img=45",
    companyLogo: "https://api.dicebear.com/7.x/initials/svg?seed=Southern%20Quarries&backgroundColor=7c3aed&textColor=ffffff"
  }
];

export const quoteCTAData = {
  heading: "Need the Right Drilling Equipment for Your Application?",
  body: "Whether you need product recommendations, technical details, spare parts, dealership opportunities, or export supply information - our team is ready to assist.",
  primaryCTA: "Get a Quote",
  secondaryCTA: "Talk to Sales"
};

export const footerData = {
  brandSummary: "HAVA, a brand of Haryrock Engineering Pvt. Ltd., manufactures pneumatic rock drilling equipment, drifters, breakers, accessories, and spare parts for mining, quarrying, tunnelling, construction, and marble & granite industries.",
  quickLinks: [
    { name: "Home", path: "/" },
    { name: "Why HAVA", path: "/why-hava" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Distributors & Dealers", path: "/DealersPage" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" }
  ],
  productCategories: [
    "Rock Drills",
    "Drifter",
    "Pavement Breakers",
    "Pusher Leg",
    "Airline Accessories",
    "Extension Equipment",
    "Button Bits",
    "Spare Parts"
  ],
  contact: {
    company: "Haryrock Engineering Pvt. Ltd.",
    address: "Plot No. 123, Industrial Area, Pune - 411019, Maharashtra, India",
    customerCare: "+91-20-1234-5678",
    mobile: "+91-98765-43210",
    email: "sales@havarock.in",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM"
  },
  mapEmbedUrl: "https://maps.google.com/maps?q=Haryrock+Engineering+Pvt+Ltd&output=embed",
  mapLink: "https://share.google/zr2aq95YsJtVRhpVM",
  copyright: "© 2025 HAVA / Haryrock Engineering Pvt. Ltd. All Rights Reserved."
};

// Mock function for form submissions
export const mockFormSubmit = (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Form submitted (MOCK):", formData);
      resolve({ success: true, message: "Thank you! We'll contact you soon." });
    }, 1000);
  });
};
