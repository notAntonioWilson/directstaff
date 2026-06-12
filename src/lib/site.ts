// Single source of truth for Direct Staff Inc. site content.

const CDN = "https://d8j0ntlcm91z4.cloudfront.net/user_38rSmNL40WXgdieukkqKbzzBpaF";

export const img = {
  hero: `${CDN}/hf_20260612_121549_de16659b-68dc-4f5b-9978-45a2db2fa7a6.png`,
  cta: `${CDN}/hf_20260612_121554_705c3242-9feb-4117-bf8d-ab23673616ae.jpeg`,
  about: `${CDN}/hf_20260612_121626_19c2f788-1d4a-46d1-98e4-49ceb12d1052.png`,
  contract: `${CDN}/hf_20260612_121632_2866e177-df17-424c-be93-5cd079396d48.png`,
  direct: `${CDN}/hf_20260612_121637_2097fc62-ab4b-4bc3-988c-71b9c796b5e9.png`,
  automotive: `${CDN}/hf_20260612_121646_728f3ba8-bcec-4be0-b92c-429dd3766b19.png`,
  defense: `${CDN}/hf_20260612_121651_bdc04510-3cce-46dd-a30a-15c778ad365f.png`,
  engineering: `${CDN}/hf_20260612_121658_74c545de-9d2f-4f3d-9a96-25dc890ea3cc.png`,
  industrial: `${CDN}/hf_20260612_121703_efa6f0e0-cb95-4117-9b18-3826505e7bfa.png`,
};

export const company = {
  name: "Direct Staff Inc.",
  tagline: "Executive & Technical Search",
  phone: "(586) 228-7100",
  phoneHref: "tel:+15862287100",
  email: "info@dirstaff.com", // placeholder ghost email, swap when client provides
  emailHref: "mailto:info@dirstaff.com",
  location: "Sterling Heights, Michigan",
  serves: "Nationwide",
  yearsLabel: "30+ years",
  linkedin: "https://www.linkedin.com/company/direct-staff/",
};

export const nav = [
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
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
    intro:
      "Direct Staff was founded in the heart of the North American automotive industry, and it remains the sector we know best. For more than three decades we have placed the engineers and designers who develop the vehicles, systems, and components that move the world.",
    overview:
      "Automotive engineering moves on program timelines that do not wait. When a vehicle program ramps, when a launch date is fixed, or when a supplier wins new business, the demand for qualified technical talent spikes fast. Direct Staff exists to meet that demand. We work across the full automotive value chain, from the OEMs who own the vehicle programs to the Tier-1 and Tier-2 suppliers who design and build the systems inside them. Our recruiters understand the difference between a body-in-white CAD designer and a chassis durability engineer, and they screen accordingly, so the people we present are genuinely qualified for the seat.",
    detail:
      "The automotive landscape is shifting under everyone in it. Electrification, advanced driver assistance, software-defined vehicles, and lightweighting are rewriting the skill sets programs need, often faster than internal hiring can keep pace. Direct Staff helps clients bridge that gap, sourcing both the established disciplines that every program still depends on and the emerging specializations that new architectures demand. Whether you are staffing a single critical design role or standing up an entire engineering group for a new platform, we bring three decades of automotive relationships to the search.",
    roles: [
      "Product & manufacturing engineers",
      "CAD designers (CATIA, NX, Creo)",
      "CAE & simulation analysts",
      "Powertrain & propulsion engineers",
      "Body, chassis & interior engineers",
      "Electrical & electronics engineers",
      "Controls & embedded software engineers",
      "Program & project managers",
    ],
  },
  {
    slug: "defense",
    title: "Defense",
    blurb: "Mission-critical programs.",
    image: img.defense,
    body: "Defense programs demand qualified, detail-driven people. We support contractors and integrators with engineering and technical staff who understand the standards mission-critical work runs on.",
    intro:
      "Defense work leaves no room for error. The programs our clients support protect people and serve national priorities, and the engineering behind them is held to a standard where detail, documentation, and discipline are not optional. Direct Staff staffs to that standard.",
    overview:
      "Defense and government programs run on rigor. Requirements are exacting, processes are documented, and the people who do the work are expected to understand why that matters. Direct Staff supports defense contractors, integrators, and the supply base behind them with engineering and technical professionals who are comfortable operating inside that environment. We understand that a defense placement is about more than a matching skill set; it is about temperament, reliability, and a track record of doing careful work on programs where the stakes are high.",
    detail:
      "Many of the engineering disciplines that serve automotive and industrial work also serve defense, which is part of why Direct Staff is positioned to support it. Mechanical, electrical, systems, and software engineers move between these sectors, and our long history across all of them means we can find professionals who bring the right combination of technical capability and program discipline. We work closely with clients to understand the specific requirements of each role and present candidates who fit not just the technical specification but the culture and cadence of mission-critical work.",
    roles: [
      "Systems engineers",
      "Mechanical & structural engineers",
      "Electrical & electronics engineers",
      "Embedded & software engineers",
      "Quality & reliability engineers",
      "Manufacturing & production engineers",
      "Technical documentation specialists",
      "Program & project managers",
    ],
  },
  {
    slug: "engineering-design",
    title: "Engineering & Design",
    blurb: "Mechanical, electrical, CAE.",
    image: img.engineering,
    body: "From mechanical and electrical design to CAE and simulation, Direct Staff places the technical experts who turn requirements into validated, manufacturable designs.",
    intro:
      "Engineering and design is the discipline at the center of everything Direct Staff does. It is where requirements become drawings, drawings become validated designs, and validated designs become products that can actually be built. We place the people who do that work.",
    overview:
      "Direct Staff serves the North American engineering and design community with the most experienced and diverse technical services in the field. Our experience here is what established us as a leader in technical staffing. We place mechanical and electrical designers, CAE and simulation analysts, and the broader technical staff who carry a concept from first sketch through to a manufacturable, validated design. Because design work is so central to our clients' programs, we treat it as a core competency rather than a category, investing the time to understand each client's tools, standards, and design language.",
    detail:
      "Good design talent is specialized talent. A mechanical designer fluent in one CAD platform is not automatically productive in another, and a simulation analyst who excels in structural work may not be the right fit for thermal or fluid problems. Direct Staff screens for the specific capability each role requires, drawing on a deep network built over thirty years of placing exactly these professionals. We support clients who need a single specialist to fill a gap and clients who need an entire design group assembled and managed, and everything in between.",
    roles: [
      "Mechanical design engineers",
      "Electrical design engineers",
      "CAD designers & detailers",
      "CAE / FEA analysts",
      "Simulation & validation engineers",
      "Design release engineers",
      "Drafting & technical illustration",
      "Engineering project leads",
    ],
  },
  {
    slug: "industrial",
    title: "Industrial & Manufacturing",
    blurb: "Automation, controls, production.",
    image: img.industrial,
    body: "We staff the plant floor and the engineering office behind it: automation, controls, manufacturing and process engineering, and the skilled technical roles that keep production moving.",
    intro:
      "Industrial and manufacturing work is where engineering meets the plant floor. It is the discipline that turns a validated design into a repeatable, efficient production reality, and it depends on technical people who understand both the office and the line. Direct Staff staffs both.",
    overview:
      "Direct Staff supports the manufacturing and industrial sector across the full spectrum of technical roles it depends on, from the automation and controls engineers who design production systems to the manufacturing and process engineers who keep them running efficiently. We work with large and small client firms alike, staffing the engineering office behind the plant and the skilled technical roles on the floor itself. Our understanding of how modern manufacturing actually operates lets us screen candidates on practical capability, not just credentials.",
    detail:
      "Manufacturing is being reshaped by automation, robotics, and increasingly connected, data-driven production. That shift is creating demand for controls engineers, automation specialists, and process engineers who can bridge traditional manufacturing knowledge with modern systems. Direct Staff helps clients meet that demand, sourcing professionals who understand the realities of production: uptime, throughput, quality, and the pressure of keeping a line moving. Whether you need to add capacity for a ramp, fill a specialized engineering seat, or stand up a team for a new facility, we bring deep industrial staffing experience to the work.",
    roles: [
      "Manufacturing engineers",
      "Process engineers",
      "Automation & controls engineers",
      "Robotics engineers",
      "Industrial & plant engineers",
      "Quality engineers",
      "Maintenance & reliability technicians",
      "Production & operations supervisors",
    ],
  },
];

export const stats = [
  { value: "30+", label: "Years staffing" },
  { value: "4", label: "Core industries" },
  { value: "48h", label: "Typical shortlist" },
  { value: "National", label: "Placement reach" },
];
