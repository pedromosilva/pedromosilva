export const profile = {
  name: "Pedro Oliveira da Silva",
  tagline: "Agile Coach · AI-Assisted Delivery · Release Train Engineer",
  location: "Cologne, Germany · Porto, Portugal",
  languages: ["Portuguese (Native)", "English (Fluent)", "German (Fluent)"],
  email: "pedromosilva@proton.me",
  summary:
    "Sixteen years of international experience spanning Product Management, Agile delivery as Scrum Master and RTE, Project and Program Management Professional with an Electronics Engineering foundation. Recently focused on AI-assisted development, within his own delivery role and across multi-disciplinary teams. Active in the wider Agile and AI communities as an Agility Community AI Ambassador.",
  highlight:
    "SAFe Release Train Engineer at Mercedes-Benz.io, currently on his second Agile Release Train, with scope ranging from 6 to 10 teams and 90 to 115 members (excluding stakeholders).",
};

export type SkillGroup = {
  key: string;
  label: string;
  skills: string[];
};

// Order mirrors Pedro's own stated priority for CV / LinkedIn keywords.
export const keywordPriority = [
  "Release Train Engineer (RTE)",
  "Scrum Master",
  "Agile Coach",
  "Product and Program Management",
  "Project Management Professional (PMP)",
  "Stakeholder Management",
  "AI-Assisted Development",
  "Vibe Coding",
  "Agile and AI Transformation",
  "Scaled Agile Framework (SAFe)",
];

export const skillGroups: SkillGroup[] = [
  {
    key: "delivery",
    label: "Agile Delivery and Product Management (6+ years)",
    skills: [
      "Release Train Engineer (RTE)",
      "Scrum Master",
      "Agile Coach",
      "Scaled Agile Framework (SAFe)",
      "Team Facilitation",
      "Kanban",
      "Lean",
      "Kaizen",
      "Agile",
      "Scrum",
      "Visual Management",
      "Mentoring",
      "Coaching",
    ],
  },
  {
    key: "management",
    label: "Program and Project Management (10+ years)",
    skills: [
      "Product and Program Management",
      "Project Management Professional (PMP)",
      "Stakeholder Management",
      "Risk & Dependency Management",
      "RfQ to SOP Delivery",
      "QCC (Quality Control Circles)",
      "Lean & Kaizen (NYS)",
      "Electrical Distribution Systems",
      "ITIL 4 Foundation",
    ],
  },
  {
    key: "ai",
    label: "AI & Vibe Coding",
    skills: [
      "AI-Assisted Development",
      "Vibe Coding",
      "Agile and AI Transformation",
      "Claude Code",
      "Agents & Skills Design",
    ],
  },
  {
    key: "engineering",
    label: "Engineering Foundation",
    skills: [
      "MSc, Electronics & Telecommunications Engineering",
      "Telecommunications",
      "Networks",
      "Network Protocols",
      "Digital Systems",
      "Programming",
      "Signal Processing",
      "Analog Electronics",
      "Microprocessors",
      "Circuit Theory",
      "Data Communications",
    ],
  },
];

export const tooling = [
  "Jira",
  "Agile Hive",
  "Structure",
  "EazyBI",
  "GitHub Actions",
  "Microsoft Copilot",
  "Power BI",
  "Claude Code",
  "Office 365",
  "Visual Studio Code",
];

// Frameworks and methodologies Pedro is proficient in, backed by his career history and training record.
export const frameworks = [
  "Scrum",
  "Agile",
  "Kanban",
  "Kaizen",
  "SAFe",
  "PMI",
  "Lean",
  "ITIL 4",
  "Design Thinking",
  "Flight Levels",
  "PDCA",
  "5S",
];

export type ExperienceItem = {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
  condensed?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    role: "Release Train Engineer",
    company: "Mercedes-Benz.io",
    dates: "April 2023 to present",
    bullets: [
      "Supports Mercedes-Benz.io's Agile Release Trains: Checkout and Fulfillment (his first ART) and, currently, Amaze and Ignite, with scope ranging from 6 to 10 teams and 90 to 115 members (excluding stakeholders), developing the welcome points of Mercedes-Benz's online presence.",
      "Supported the Checkout and Fulfillment ART through a major backend transformation, establishing a future-proof microservices architecture for very complex payment and reservation systems operating at global scale.",
      "Organizes and runs PI Planning events; manages risk and clarifies cross-team dependencies for smooth, on-time delivery.",
      "Aligns Product Management, Architecture and external partners on strategic and operational goals.",
      "Analyzes product and performance metrics (Jira, Agile Hive, Structure, EazyBI, Power BI) and drives data-based continuous improvement.",
      "Scales Agile and Lean principles company-wide; trains ART teams and stays active in Communities of Practice.",
      "Leadership coaching and mentoring on Agile and Lean topics, tooling and frameworks.",
      "Holds a Certified SAFe® 6 Release Train Engineer certification.",
    ],
  },
  {
    role: "Scrum Master",
    company: "Mercedes-Benz.io",
    dates: "August 2022 to March 2023",
    bullets: [
      "Applied Agile principles and fostered continuous improvement (Kaizen/Lean); removed impediments through empathetic team leadership.",
      "Partnered with Product Owners and stakeholders to improve checkout usability, performance and conversion rate.",
      "In the scope of Mercedes-Benz Online Store, supported the transition from a monolithic to a domain-driven micro-services architecture.",
    ],
  },
  {
    role: "Senior Consultant",
    company: "CGI Deutschland",
    dates: "February 2020 to July 2022",
    bullets: [
      "Scrum Master on an Agile development project for a major telecom client, inheriting a project at risk and stabilizing it within 6 months; also served as Scrum Master on a large retail client's Agile project with an international off-shore team.",
      "Epic Owner in an Agile telecom context, owning epic lifecycle end to end, defining value, benefits and risk with stakeholders, and supporting release forecasting.",
      "IT Project Manager on a geo-information visualization project and a Data Warehouse implementation for large telecom clients, coordinating requirements across on-shore/off-shore and cross-departmental stakeholders.",
      "Promoted to Senior Consultant, November 2021, from Lead Consultant.",
    ],
  },
  {
    role: "Senior Specialist, Project & Program Management",
    company: "Yazaki Europe Ltd., Cologne",
    dates: "June 2016 to December 2019",
    bullets: [
      "Led development and mass-production projects from RfQ to SOP for High-Speed Data cables, Airbag Squibs, Header, Optical Fiber and custom sensor housings.",
      "Led cross-functional project teams (PMT) against milestones; reported via Yazaki PMS (YPMS, PMI-based); managed stakeholder, customer and supplier communication.",
    ],
  },
  {
    role: "Design Engineer, Electrical Distribution Systems",
    company: "Yazaki Europe Ltd., Cologne",
    dates: "March 2014 to May 2016",
    bullets: [
      "Technical support for commercial-vehicle customers (Scania, MAN, Volvo, DAF, TATA); requirements analysis, BOM creation and RfQ-driven project delivery.",
    ],
    condensed: true,
  },
  {
    role: "EDS / Wire Harness Engineer",
    company: "Yazaki Saltano de Ovar, Portugal",
    dates: "September 2010 to February 2014",
    bullets: [
      "Wiring-harness design and prototyping for OEMs (Mercedes-Benz, GM, VW, Toyota, Fiat, AvtoVAZ); Kaizen/Lean (NYS) improvement work, including two award-winning QCC (Quality Control Circles) teams.",
    ],
    condensed: true,
  },
  {
    role: "Systems Engineer",
    company: "Optieng Lda., Aveiro",
    dates: "October 2008 to September 2010",
    bullets: [
      "Industrial automation (PLC/DCS programming, SCADA) for pulp and paper and liquid-fuel terminal clients.",
    ],
    condensed: true,
  },
  {
    role: "Graduate Student Researcher",
    company: "Instituto de Telecomunicações, Aveiro",
    dates: "January 2008 to July 2009",
    bullets: [
      "ZigBee-based indoor localization research (\"LoPeS\" project), feeding into his Master's thesis.",
    ],
    condensed: true,
  },
];

export type Certification = {
  name: string;
  issuer: string;
  href?: string;
};

export const certifications: Certification[] = [
  {
    name: "Certified SAFe® 6 Release Train Engineer",
    issuer: "SAFe by Scaled Agile, Inc.",
    href: "https://www.credly.com/badges/4c007111-d37e-4cef-9979-5c8dc1b68655",
  },
  {
    name: "Certified SAFe® 6 Advanced Scrum Master",
    issuer: "SAFe by Scaled Agile, Inc.",
    href: "https://www.credly.com/badges/b91c6603-72f9-4a41-98d3-d763918a4bdb",
  },
  {
    name: "Certified SAFe® 5 Agilist",
    issuer: "SAFe by Scaled Agile, Inc.",
    href: "https://www.credly.com/badges/b42553e5-b0f4-402f-b52f-f7b5f164cb26",
  },
  {
    name: "PMP®, Project Management Professional",
    issuer: "Project Management Institute",
    href: "https://www.credly.com/badges/9c89e050-6ae3-4bcd-aef0-d69ca8fd3d17",
  },
  {
    name: "Professional Scrum Master I (PSM I)",
    issuer: "Scrum.org",
    href: "https://www.credly.com/badges/8cb94b65-8389-4e17-9cea-d5082f2dbb7c",
  },
  {
    name: "Professional Scrum Master II (PSM II)",
    issuer: "Scrum.org",
    href: "https://www.credly.com/badges/66573c94-e3b5-4c0f-b810-0eb007d4573e",
  },
  {
    name: "ITIL® 4 Foundation",
    issuer: "PeopleCert",
    href: "https://www.credly.com/badges/1322a8ee-dcd3-4690-aa2b-1438851f3c7c",
  },
  {
    name: "Agile Team Facilitation",
    issuer: "ICAgile",
    href: "https://www.credly.com/badges/f39b7c61-8a08-491d-b7d4-3827ca37053e",
  },
  {
    name: "Collaborative Meetings",
    issuer: "Miro, skill badge",
    href: "https://www.credly.com/badges/8ceb70b5-27f7-40e0-80de-91bf0aa82cc0",
  },
];

export type Project = {
  name: string;
  description: string;
  stack: string[];
  href: string;
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    name: "guia.social",
    description:
      "A personal project built to learn and operate an end-to-end AI-integrated development pipeline, from idea to a shipped, running product.",
    stack: ["Claude Code", "Railway", "Vercel", "Sentry", "Stripe", "MCPs"],
    href: "https://guia.social",
  },
  {
    name: "Cool Countdown",
    description: "A countdown timer app, vibe-coded and shipped to Vercel.",
    stack: ["Vercel"],
    href: "https://cool-countdown-sn4o.vercel.app",
  },
];

export type CommunityItem = {
  title: string;
  detail: string;
};

export const community: CommunityItem[] = [
  {
    title: "Agility Community, AI Ambassador",
    detail:
      "Promotes knowledge-sharing on AI within the wider Agile community, participating in events and communities such as Kölner Scrumtisch and Vibe Coding Cologne.",
  },
  {
    title: "Mercedes-Benz.io, AI Ambassador",
    detail: "Acts as AI Ambassador in his current company role, supporting AI adoption across delivery teams.",
  },
  {
    title: "Agile Coach Camp, Cologne & Portugal",
    detail: "Open Space unconferences on Agile and organizational transformation (2023 to 2026).",
  },
  {
    title: "Digitale Leute Summit, Cologne",
    detail: "Product, Engineering and UX/Design conference (2024, 2025).",
  },
  {
    title: "Builder Forge, Pirate Skills",
    detail: "A 6-week AI-assisted (Vibe Coding) product-building cohort.",
  },
];

export type LinkItem = {
  label: string;
  value: string;
  href: string;
  editable?: boolean;
};

// Personalize this list: swap the placeholder hrefs (marked editable) for your real profile links.
export const links: LinkItem[] = [
  {
    label: "LinkedIn",
    value: "in/pedromosilva",
    href: "https://www.linkedin.com/in/pedromosilva/",
  },
  {
    label: "Credly",
    value: "Verified badges",
    href: "https://www.credly.com/users/pedro-miguel-oliveira-da-silva/badges/credly",
  },
  {
    label: "GitHub",
    value: "pedromosilva",
    href: "https://github.com/pedromosilva",
  },
  {
    label: "Eurosky",
    value: "@pedromosilva.eurosky.social",
    href: "https://mu.social/profile/pedromosilva.eurosky.social",
  },
  {
    label: "Sifa",
    value: "pedromosilva.eurosky.social",
    href: "https://sifa.id/p/pedromosilva.eurosky.social",
  },
];
