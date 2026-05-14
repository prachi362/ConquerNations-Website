import {
  Truck,
  Warehouse,
  Boxes,
  Ship,
  PackageCheck,
  Network,
  type LucideIcon,
} from "lucide-react";

export type ServiceSection = {
  heading: string;
  subheading?: string;
  body?: string;
  lead?: string;
  bullets?: string[];
  outro?: string;
  subsections?: ServiceSection[];
};

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  tagline: string;
  intro: { heading: string; body: string };
  sections: ServiceSection[];
};

export const services: Service[] = [
  {
    slug: "fulfillment",
    icon: PackageCheck,
    title: "Fulfillment",
    short: "Pick, pack, and ship , accurately and on time, every time.",
    tagline: "Fulfillment and Delivery Solutions You Can Trust",
    intro: {
      heading: "Fulfillment and Delivery Solutions You Can Trust",
      body: "The friendly professionals at Conquer Nation have spent years helping entrepreneurs like you reduce stress and save money. Enjoy the benefits of fast and accurate fulfillment catered to your specific needs. Our goal for our Fulfillment Center and Shipping Services is set for 100% accuracy.",
    },
    sections: [
      {
        heading: "We Provide Professional Fulfillment Services",
        body: "Our warehouse solutions are designed to protect your inventory, streamline logistics, and scale with your business , while meeting food-grade and hazmat-certified standards for specialized storage and handling.",
        lead: "Reliable, scalable, and fully certified to support your growth.",
        bullets: [
          "Shrink-wrap to protect products from dust, dirt, moisture, and distortion.",
          "Food-grade certified storage meets stringent safety and sanitation standards.",
          "Hazmat certified for safe handling, labeling, and storage of regulated materials.",
          "Customizable inventory rotation to keep products in optimal condition.",
          "Warehouse management system tracks picking and packing status of inventory.",
          "Shipping label handling with full compliance for hazardous material regulations.",
          "Scalable warehousing capacity with temperature-controlled storage for food-grade goods.",
          "Repackaging with new containers and branded labels for standout shipments.",
          "Bulk inventory consolidated in polybags for protection and shipping efficiency.",
        ],
        outro:
          "From storage to shipping, we offer fulfillment services that ensure every item is packed, labeled, and delivered with precision , and certified care.",
      },
    ],
  },
  {
    slug: "transloading",
    icon: Boxes,
    title: "Transloading",
    short: "Seamlessly transfer freight between modes to cut delays and cost.",
    tagline: "Fast, Flexible Transloading Solutions",
    intro: {
      heading: "Fast, Flexible Transloading Solutions",
      body: "Conquer Nation delivers expert transload services , from cross-docking and devanning to consolidation and secure storage. Whether you're moving oversized freight or coordinating multi-destination shipments, we streamline the process with speed, precision, and care.",
    },
    sections: [
      {
        heading: "Comprehensive Transload Services",
        body: "From basic transfers to oversized freight , all with food-grade and hazmat-certified care.",
        lead: "Transfers made easy, expert handling, and maximum speed and care.",
        bullets: [
          "Food-grade certified for safe handling of consumables in compliant environments.",
          "Hazmat certified for regulated storage and transport of hazardous materials.",
          "Transfers goods between trailers, containers, or transport modes.",
          "Ideal for shipments requiring physical movement between vehicles.",
          "Supports oversized items needing side loading onto flatbeds.",
          "Handles complex logistics involving multiple destinations.",
          "Manages goods of varying weights and dimensions.",
          "Ensures minimal delays through organized workflows.",
          "Backed by a skilled team with deep transloading experience.",
        ],
      },
      {
        heading: "Devanning, Consolidation, and Facility Support",
        body: "Break down or combine shipments, handle ocean freight and local loads, and store goods securely and efficiently.",
        bullets: [
          "Devans ocean freight containers for final-mile distribution.",
          "Segregates container contents onto pallets for multiple destinations.",
          "Consolidates smaller shipments into single outbound loads.",
          "Supports operations at the Port of Long Beach and Port of Los Angeles.",
          "Handles both immediate transloads and delayed shipments.",
          "Provides secure, organized warehousing for short-term storage.",
          "Delivers reliable, tailored logistics solutions for complex needs.",
        ],
        outro:
          "From devanning and consolidation to secure storage and cross-dock operations, Conquer Nation is your trusted partner for efficient, end-to-end transloading solutions. Our experienced team and fully equipped facilities ensure your cargo moves smoothly , no matter the complexity, size, or destination.",
      },
    ],
  },
  {
    slug: "warehousing",
    icon: Warehouse,
    title: "Warehousing",
    short: "Short and long-term storage with real-time inventory visibility.",
    tagline: "Where Storage Meets Strategy",
    intro: {
      heading: "Where Storage Meets Strategy",
      body: "Whether you need storage for a few days or several months, Conquer Nation has you covered. Short-term storage is often essential due to project delays or just-in-time delivery schedules, while many clients depend on us for long-term solutions. No matter your needs, your products are safe and secure with us.",
    },
    sections: [
      {
        heading: "Warehouse Storage (Long-term & Short-term)",
        body: "Robust security infrastructure paired with full inventory accountability , so you can stay focused on running your business.",
        bullets: [
          "24/7 advanced video surveillance with over 30 days of footage retention.",
          "Regularly patrolled yards for added protection.",
          "Real-time inventory visibility through our warehouse management system.",
          "Flexible terms , scale storage capacity up or down as needed.",
        ],
      },
      {
        heading: "Specialized Warehousing Compliance & Certifications",
        body: "Our facilities are built to meet the highest standards in food-grade storage and hazardous material handling , ensuring your products are managed with safety, accountability, and regulatory compliance.",
        subsections: [
          {
            heading: "Food-Grade Certified Storage",
            body: "We uphold strict food safety and sanitation protocols to protect the integrity of all consumable goods stored in our facilities.",
            bullets: [
              "Regulatory compliance: fully certified under industry-leading standards.",
              "Climate & temperature control: HVAC and cold storage for perishable and shelf-stable goods.",
              "Traceability & inventory control: products barcoded and tracked for freshness and compliance.",
            ],
          },
          {
            heading: "Hazmat Certified Storage",
            body: "Our warehouse is built and licensed to store hazardous materials responsibly , with a strong focus on safety, containment, and government compliance.",
            bullets: [
              "Certified & licensed facility meeting or exceeding OSHA, DOT, and EPA requirements.",
              "Trained personnel ensure accurate classification, effective spill response, and safe handling with proper PPE.",
              "Accurate labeling & logs , all hazardous goods marked with HAZMAT placards and tracked with up-to-date documentation.",
            ],
          },
        ],
      },
      {
        heading: "Warehousing & Inventory Services",
        body: "With Conquer Nation managing your inventory, you eliminate the hassle of tracking and overseeing inventory flow. We handle it all , keeping you fully informed every step of the way , so you can stay focused on what you do best.",
      },
    ],
  },
  {
    slug: "3pl",
    icon: Network,
    title: "3PL",
    short: "End-to-end logistics partnership tailored to your supply chain.",
    tagline: "Certified 3PL Solutions You Can Rely On",
    intro: {
      heading: "Certified 3PL Solutions You Can Rely On",
      body: "From food-grade goods to hazardous materials, Conquer Nation Logistics Division delivers certified, reliable third-party logistics solutions. We partner exclusively with fully insured carriers and specialize in truckload, expedited truckload, and LTL movements , all with rigorous safety, compliance, and service standards.",
    },
    sections: [
      {
        heading: "Custom 3PL Solutions. Certified for Care.",
        body: "Every customer gets a dedicated account team, custom KPIs, and quarterly reviews. We integrate with your tech stack and report on what actually matters to your business.",
        bullets: [
          "Dedicated account team that knows your business by name.",
          "Custom KPIs and dashboards aligned with your priorities.",
          "Quarterly business reviews , no surprises.",
          "Tech integrations with your ERP, OMS, or WMS.",
          "Food-grade and hazmat compliance built in.",
          "Fully insured carrier network with rigorous vetting.",
        ],
      },
    ],
  },
  {
    slug: "drayage",
    icon: Ship,
    title: "Drayage",
    short: "Port-to-warehouse moves handled with speed and certainty.",
    tagline: "Container Drayage , Streamlined and Trusted",
    intro: {
      heading: "Container Drayage , Streamlined and Trusted",
      body: "We specialize in fast, dependable container drayage that seamlessly connects ports to your final destination. With a focus on precision, security, and efficiency, we keep your cargo moving and your supply chain on track.",
    },
    sections: [
      {
        heading: "Streamlined Solutions, One Trusted Contact",
        bullets: [
          "Exclusive access to a dedicated chassis fleet.",
          "Versatile transport capabilities: dry van, refrigerated, hazmat, overweight, and out-of-gauge.",
          "Specialized project logistics, including crane operations and rigging support.",
          "Transloading services and nationwide laydown yard availability.",
          "Strategic alliances enabling adaptable and scalable logistics solutions.",
        ],
      },
      {
        heading: "Our Services",
        bullets: [
          "Port Drayage",
          "Rail Drayage",
          "Drop Trailer",
          "Hazmat",
          "High Value",
          "Overweight",
          "Out-of-Gauge / Breakbulk",
          "Imports",
          "Exports",
          "Bonded",
          "Domestic",
          "Transload",
        ],
      },
      {
        heading: "Our Equipment",
        bullets: [
          "Full range of container sizes: 20' to 53'",
          "Flat Rack",
          "Open Top",
          "ISO Tanks",
          "Temperature Controlled",
        ],
      },
    ],
  },
  {
    slug: "transportation",
    icon: Truck,
    title: "Transportation",
    short: "Reliable nationwide trucking with live tracking from pickup to drop.",
    tagline: "Safe, On-Time, Door-to-Door Transportation",
    intro: {
      heading: "Safe, On-Time, Door-to-Door Transportation",
      body: "Our commitment to safe, on-time, door-to-door delivery is powered by a trusted network of dedicated contract partners and carriers. With access to dry vans, flatbeds, and specialized equipment , including hazmat-certified capabilities , we ensure seamless nationwide coverage for a wide range of cargo and commodities.",
    },
    sections: [
      {
        heading: "Domestic Delivery",
        body: "Conquer Nation's hazmat-certified domestic transportation services are built on three commitments:",
        bullets: [
          "Accountable , dedicated contract partners that meet and outperform your capacity and demand.",
          "Dependable , safe, on-time door-to-door delivery, with a dedicated customer service rep for every account.",
          "Asset-based , owned equipment including tri-axle chassis, 53 ft dry van, flatbed, step deck, and lowboy.",
        ],
      },
      {
        heading: "Full Truckload (FTL)",
        body: "Experience speed and efficiency with our Full Truckload services. Perfect for large shipments, FTL offers exclusive use of our reliable trucks, ensuring faster transit times and maximum security. Let us handle your high-volume freight with unmatched precision and care.",
      },
      {
        heading: "Less-than-Truckload (LTL)",
        body: "Save on shipping costs without compromising quality. Ideal for smaller shipments, LTL combines your freight with others to reduce expenses while maintaining professional handling and timely delivery , smart logistics made simple.",
      },
      {
        heading: "Intermodal",
        body: "Optimize your supply chain with our intermodal transportation solutions. By seamlessly integrating truck, rail, and sea transport, we deliver cost-effective and eco-friendly logistics across long distances , reliable, efficient, and sustainable.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
