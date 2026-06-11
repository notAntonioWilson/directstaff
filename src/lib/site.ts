// Single source of truth for Direct Staff Inc. site content.

export const img = {
  hero: "/images/hero.jpg",
  cta: "/images/cta.jpg",
  about: "/images/about.jpg",
  contract: "/images/solution-contract.jpg",
  direct: "/images/solution-direct.jpg",
  automotive: "/images/industry-automotive.jpg",
  defense: "/images/industry-defense.jpg",
  engineering: "/images/industry-engineering.jpg",
  industrial: "/images/industry-industrial.jpg",
};

export const company = {
  name: "Direct Staff Inc.",
  tagline: "Executive & Technical Search",
  phone: "(586) 228-7100",
  phoneHref: "tel:+15862287100",
  email: "info@dirstaff.com", // placeholder ghost email — swap when client provides
  emailHref: "mailto:info@dirstaff.com",
  location: "Sterling Heights, Michigan",
  serves: "Nationwide",
  yearsLabel: "30+ years",
  linkedin: "https://www.linkedin.com/company/direct-staff",
};

export const nav = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Industries", href: "/#industries" },
  { label: "For Employers", href: "/employers" },
  { label: "For Job Seekers", href: "/job-seekers" },
  { label: "About", href: "/about" },
];

export const solutions = [
  {
    slug: "contract-staffing",
    title: "Contract Staffing",
    short: "On-site technical professionals, Direct Staff employees, fully benefited, scaled to your project.",
    image: img.contract,
    intro:
      "Direct Staff has contract opportunities available with our premier customers. These positions may be long-term, short-term, or of indefinite duration, working within our customer facilities.",
    body: "Selected individuals become Direct Staff employees, receive benefits, and work on-site at a Direct Staff customer facility. When a program ramps, you get qualified engineers and technical staff fast, without adding permanent headcount, and capacity that scales up and down with the work.",
    points: [
      "Long-term, short-term, or indefinite-duration assignments",
      "On-site at the customer facility",
      "Selected individuals are Direct Staff W-2 employees, fully benefited",
      "Workers' comp, insurance, and payroll handled by us",
    ],
    cta: "Request contract talent",
  },
  {
    slug: "direct-hire",
    title: "Direct Hire",
    short: "Permanent placement: we run the search, you hire the candidate directly.",
    image: img.direct,
    intro:
      "Direct Staff works to find the right candidates to fill direct opportunities within our customer companies. We facilitate the search for the perfect fit, taking the legwork and searching off our customers' plate and providing them with the right candidates.",
    body: "Selected candidates work directly for the customer, as their employee. Our direct placement customers include automotive OEMs, Tier suppliers, and major manufacturing corporations. We run sourcing and technical screening, then present a vetted shortlist, so your team hires with confidence.",
    points: [
      "Full-cycle search for permanent technical and professional roles",
      "Candidate is hired directly as the customer's employee",
      "Customers include automotive OEMs, Tier suppliers, and major manufacturers",
      "Vetted shortlists, typically within 48 hours",
    ],
    areas: [
      "Engineering",
      "Information Technology",
      "Computer Aided Engineering",
      "Sales",
      "Purchasing / Marketing",
      "Technical",
    ],
    cta: "Start a direct search",
  },
];

export const industries = [
  {
    slug: "automotive",
    title: "Automotive",
    blurb: "OEM & Tier-1 engineering.",
    image: img.automotive,
    body: "Direct Staff was built in the automotive capital of the world. We place engineering and design talent across OEMs and the Tier-1 supply base: powertrain, body, chassis, electrical, and advanced vehicle programs.",
  },
  {
    slug: "defense",
    title: "Defense",
    blurb: "Mission-critical programs.",
    image: img.defense,
    body: "Defense programs demand qualified, detail-driven people. We support contractors and integrators with engineering and technical staff who understand the standards mission-critical work runs on.",
  },
  {
    slug: "engineering-design",
    title: "Engineering & Design",
    blurb: "Mechanical, electrical, CAE.",
    image: img.engineering,
    body: "From mechanical and electrical design to CAE and simulation, Direct Staff places the technical experts who turn requirements into validated, manufacturable designs.",
  },
  {
    slug: "industrial",
    title: "Industrial & Manufacturing",
    blurb: "Automation, controls, production.",
    image: img.industrial,
    body: "We staff the plant floor and the engineering office behind it: automation, controls, manufacturing and process engineering, and the skilled technical roles that keep production moving.",
  },
];

export const stats = [
  { value: "30+", label: "Years staffing" },
  { value: "4", label: "Core industries" },
  { value: "48h", label: "Typical shortlist" },
  { value: "National", label: "Placement reach" },
];
