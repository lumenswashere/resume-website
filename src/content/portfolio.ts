export const profile = {
  name: "Josiah Woltjer",
  location: "Durham, NC",
  phone: "(616) 214-1092",
  email: "josiahwwoltjer@gmail.com",
  linkedin: "https://www.linkedin.com/in/josiah-woltjer-a03785260/",
  resumePdf: "/Josiah_Woltjer_Resume.pdf",
  title: "Functional Implementation Consultant Lead, ePAS North America",
  company: "Prometheus Group",
};

export const hero = {
  headline: "I own the hard parts of getting enterprise software into the field.",
  support:
    "I configure, train, and stabilize enterprise systems for large industrial customers, work onsite when a project calls for it, and build AI tooling that makes the next implementation faster.",
  openTo:
    "I am open to implementation consulting, solutions and sales engineering, forward-deployed roles, and AI systems work at software and AI companies. Longer term, I am preparing for an M7 MBA and a path into founding a company.",
};

export const nav = [
  { href: "#experience", label: "Experience" },
  { href: "#ai", label: "AI" },
  { href: "#field", label: "Field work" },
  { href: "#customers", label: "Customers" },
  { href: "#recognition", label: "Recognition" },
  { href: "#contact", label: "Contact" },
] as const;

export const impact = [
  { figure: "~11 mo", label: "From hire to Lead promotion" },
  { figure: "23", label: "Enterprise accounts as primary consultant" },
  { figure: "~9", label: "Accounts active at any one time" },
  { figure: "60+", label: "Attendees per solo training session" },
  { figure: "17 days", label: "Solo onsite escalation in Alberta" },
  { figure: "3.92", label: "GPA, Summa Cum Laude" },
];

export const experience = {
  heading: "Experience",
  roles: [
    {
      company: "Prometheus Group",
      dates: "August 2025 to present",
      positions: [
        {
          title: "Functional Implementation Consultant Lead, ePAS North America",
          dates: "July 2026 to present",
        },
        {
          title: "Functional Implementation Consultant",
          dates: "August 2025 to July 2026",
        },
      ],
      points: [
        "Escalation point and internal expert on ePAS functionality, customer tendencies, and best-practice configuration. I lead and mentor the functional consultant team.",
        "Primary consultant across 23 enterprise accounts, about 9 active at a time, several with seven-figure annual contract value. I own the full implementation lifecycle for each.",
        "Leading development of automated configuration and product-improvement tooling, and AI knowledge systems that scale the team's output.",
      ],
    },
    {
      company: "Apex Companies",
      dates: "August 2024 to August 2025",
      positions: [
        { title: "Project Engineer", dates: "February 2025 to August 2025" },
        { title: "Inside Project Manager", dates: "August 2024 to February 2025" },
      ],
      points: [
        "Created engineering drawing sets for quotes, approvals, permits, and installations, and made site visits to keep projects moving.",
        "Managed schedules and project documents in Vault and Smartsheet.",
        "Released purchase orders and tracked jobs against promised completion dates.",
      ],
    },
  ],
};

export const aiNative = {
  heading: "How I use AI at work",
  intro:
    "Claude and Cursor are part of how I deliver, not an add-on. If a task is manual and repeats, I automate it. If I do not know a domain, I learn it end to end.",
  points: [
    {
      title: "Agentic tooling for implementations",
      body: "I lead development of automated ePAS configuration and product-improvement tooling for the implementation team, turning one-off configuration work into something every consultant can reuse.",
    },
    {
      title: "Internal knowledge systems",
      body: "With leadership, I build AI knowledge systems with semantic search, plus customer knowledge bases generated from meeting transcripts. The aim is to scale the team, not to shave minutes off a single task.",
    },
    {
      title: "Shipped product",
      body: "I design, build, and maintain personal web apps with agentic coding tools. The public one is by-ff.com, an NFL fantasy analysis app built with Cursor, Claude, Supabase, and Vercel.",
      href: "https://by-ff.com",
      hrefLabel: "Visit by-ff.com",
    },
    {
      title: "Learning new domains fast",
      body: "On a first-of-kind integrated implementation for a U.S. food manufacturer, I taught myself the adjacent Prometheus products outside my core lane, so SAP, Vulcan, Mobile PM, and ePAS could work together.",
    },
  ],
};

export const forwardDeployed = {
  heading: "Forward-deployed work",
  lead: {
    title: "17 days onsite at a Canadian energy producer",
    location: "Foster Creek area, Alberta",
    date: "February 2026",
    body: "Leadership sent me alone to stabilize a major escalation over ePAS Mobile performance. As the only onsite contact, I triaged issues, worked fixes through with development, applied resolutions, and rebuilt customer confidence.",
    detail:
      "Development and QA could not reproduce a duplicating-approval bug in mobile sync. I used the office elevators as connectivity dead zones to mimic field conditions and reproduced it. That let engineering fix the bug and informed wider mobile-sync improvements.",
  },
  stories: [
    {
      client: "European specialty chemicals manufacturer",
      body: "Sole consultant on a Cologne expansion. I owned delivery and completed much of the configuration myself. The customer's confidence, relayed through EMEA sales, helped move a deferred global rollout discussion forward.",
    },
    {
      client: "U.S. power company",
      body: "Took over as lead consultant with full ownership of delivery and the customer relationship, including a LOTO consolidation effort.",
    },
    {
      client: "U.S. energy developer",
      body: "Built ePAS workflows from scratch with minimal design notes and received direct customer recognition for the implementation.",
    },
    {
      client: "U.S. food manufacturer",
      body: "Leading a first-of-kind integrated implementation that connects SAP, Vulcan, and Mobile PM to ePAS. I own process discovery and the full project lifecycle.",
    },
    {
      client: "U.S. refining company",
      body: "Supported the sales team onsite with a solution demonstration that helped the customer decide to adopt ePAS.",
    },
  ],
};

export const customerFacing = {
  heading: "Customer-facing delivery",
  intro:
    "Training, escalations, and configuration are one job: getting the customer to a system they trust and can run themselves.",
  points: [
    {
      title: "Training at scale",
      body: "Led customer trainings of 60+ attendees per session with no co-facilitator, reaching about 200 people across four trainings.",
    },
    {
      title: "Train-the-Trainer",
      body: "Delivered the first in-person Train-the-Trainer session for a Japanese specialty materials manufacturer, including their Hot Work permitting process.",
    },
    {
      title: "Escalation expert",
      body: "The escalation point for consultants and project managers on ePAS functionality, customer tendencies, and best-practice configuration.",
    },
    {
      title: "Portfolio ownership",
      body: "Primary consultant across 23 enterprise accounts, in a scope originally staffed for three people. Promoted to Lead for ePAS North America in July 2026, about 11 months after joining.",
    },
  ],
};

export type Recognition = {
  attribution: string;
  date: string;
  quote?: string;
  summary?: string;
};

export const recognition = {
  heading: "Customer recognition",
  items: [
    {
      summary:
        "Praised for professionalism and velocity during an onsite engagement, with a direct thank-you from the customer.",
      attribution: "U.S. energy customer, onsite engagement",
      date: "September 2026",
    },
    {
      quote:
        "Big shout out to all the hard work... Really great effort and team work.",
      attribution: "Customer project lead, U.S. energy developer",
      date: "April 2026",
    },
    {
      quote:
        "VERY impressed at the support... now considering a global rollout imminently.",
      attribution:
        "EMEA operations stakeholder, European specialty chemicals manufacturer",
      date: "March 2026",
    },
    {
      summary:
        "Positive customer reviews followed the onsite stabilization work during the mobile performance escalation.",
      attribution: "Canadian energy producer, Alberta",
      date: "February 2026",
    },
  ] satisfies Recognition[],
};

export const skills = {
  heading: "Tools and platforms",
  groups: [
    {
      label: "AI and product building",
      items: ["Claude", "Cursor", "Lovable", "Vercel", "Supabase", "SQL / PostgreSQL"],
    },
    {
      label: "Enterprise systems",
      items: ["ePAS", "SAP", "Maximo", "Database management"],
    },
    {
      label: "Project delivery",
      items: ["Jira", "Confluence", "Linear"],
    },
    {
      label: "Engineering",
      items: ["SolidWorks", "AutoCAD"],
    },
  ],
};

export const projects = {
  heading: "Projects",
  items: [
    {
      title: "Electronic Settlers of Catan",
      meta: "Capstone final design · Spring 2024",
      body: "Led design, prototyping, and cross-team communication on my own, taking an electronic tabletop game from concept to a working prototype. I designed and built it with SolidWorks, a laser cutter, CNC machining, and other manufacturing techniques, and programmed it with AI coding agents and the Arduino IDE.",
    },
    {
      title: "NFL player data modeling",
      meta: "Personal project · October 2024 to present",
      body: "A deployed public web app that analyzes NFL player fantasy value, built and maintained with Cursor, Claude, Supabase, and Vercel.",
      href: "https://by-ff.com",
      hrefLabel: "Visit by-ff.com",
    },
  ],
};

export const education = {
  heading: "Education",
  degrees: [
    {
      school: "Illinois Institute of Technology",
      detail: "B.S. Mechanical Engineering, Summa Cum Laude (GPA 3.92, ACT 35)",
    },
    {
      school: "Wheaton College",
      detail:
        "B.S. Liberal Arts Engineering, Math Minor, Summa Cum Laude (GPA 3.92)",
    },
  ],
  honors: [
    "Rensselaer Medalist",
    "Presidential Scholarship",
    "Koch Family Foundation Scholarship",
    "National Merit Commended",
    "8x Dean's List",
  ],
};

export const direction = {
  heading: "Where I am headed",
  body: "I take work that would normally need a team and make it move. At Prometheus I carry a portfolio sized for three people and build internal tooling so the next consultant does not start from zero. When a system I need does not exist, I build it. I want to bring that to an early-stage company, and to an M7 MBA with an AI focus.",
};
