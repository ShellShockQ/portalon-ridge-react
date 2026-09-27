// All editable deal content lives here, typed, so updating a figure
// never requires touching a component file.

export interface HeroStat {
  value: string;
  label: string;
}

export interface ThesisPoint {
  key: string;
  value: string;
}

export interface SiteFact {
  label: string;
  value: string;
}

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption: string;
  tall?: boolean;
}

export interface DevelopmentPhase {
  number: string;
  name: string;
  description: string;
  timing: string;
}

export interface ReturnRow {
  metric: string;
  target: string;
  basis: string;
  highlight?: boolean;
}

export interface TeamMember {
  initials: string;
  name: string;
  role: string;
  bio: string;
}

export interface TermRow {
  key: string;
  value: string;
}

export const hero = {
  eyebrow: "PRIVATE OFFERING · LAND ACQUISITION & DEVELOPMENT — COSTA RICA",
  title: "Portalón Ridge — a 5.25-acre ocean-view parcel on the southern Pacific coast",
  subtitle:
    "A fully usable lot in the guard-gated Hills of Portalón community, Puntarenas, Costa Rica — forested on two sides for privacy, with ocean views to the south and sunrise views over the mountains to the east. Brave Spaces, LLC is raising capital to acquire the land and develop it for sale or as an income-producing vacation property.",
  stats: [
    { value: "5.25", label: "ACRES / 21,242 M²" },
    { value: "$1.11M", label: "TOTAL PROJECT COST" },
    { value: "18%", label: "TARGET NET IRR" },
    { value: "4 YR", label: "HOLD PERIOD" },
  ] as HeroStat[],
};

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: "gallery-pad.jpg",
    alt: "Cleared building pad on the parcel, looking down toward a green valley",
    caption: "BUILDING PAD, LOOKING NORTHWEST",
    tall: true,
  },
  {
    src: "gallery-aerial.jpg",
    alt: "Satellite view of the surrounding hills and access road",
    caption: "AERIAL CONTEXT, ACCESS ROAD",
  },
  {
    src: "gallery-access.jpg",
    alt: "Vehicle access to the cleared parcel",
    caption: "VEHICLE ACCESS TO SITE",
  },
  {
    src: "gallery-forest.jpg",
    alt: "Forest edge bordering the parcel",
    caption: "FOREST BUFFER, EAST EDGE",
  },
  {
    src: "gallery-entrance.jpg",
    alt: "Cleared land at the parcel entrance",
    caption: "PARCEL ENTRANCE",
  },
];

export const galleryNote =
  "Site photos, [MONTH YEAR] — land is currently cleared/brushed, no structures in place.";

export const opportunity = {
  lede:
    "Brave Spaces, LLC is raising capital to acquire and develop a 5.25-acre (21,242 m²) parcel in the Hills of Portalón, a guard-gated community on Costa Rica's southern Pacific coast. The site sits 15 minutes north of the surf town of Dominical and 20 minutes south of Quepos, within easy reach of Manuel Antonio National Park and Playa Linda beach — one of the more active second-home and boutique-hospitality corridors on the Pacific coast.",
  pullQuote:
    "The thesis: acquire a well-priced, ocean-view lot in an established gated community, and build a boutique residence positioned for the region's growing high-end tourism and second-home demand.",
  thesisPoints: [
    {
      key: "ACQUISITION BASIS",
      value:
        "$360,000 for 5.25 acres — roughly $17/m², [X]% below comparable ocean-view listings in the Dominical–Quepos corridor.",
    },
    {
      key: "SITE CHARACTER",
      value:
        "Gently rolling, fully usable land; forested on two sides for privacy; unobstructed ocean views to the south, mountain sunrise views to the east.",
    },
    {
      key: "VALUE-ADD LEVER",
      value:
        "Design and build a primary residence, guest house, and pool on raw land purchased below area comparables.",
    },
    {
      key: "EXIT",
      value:
        "Sale to an end buyer, or continued operation as a short-term rental / vacation property, at sponsor's election.",
    },
  ] as ThesisPoint[],
};

export const siteFacts: SiteFact[] = [
  { label: "GROSS AREA", value: "5.25 ac / 21,242 m²" },
  { label: "LISTING ID", value: "MLS BZ/BR/0085" },
  { label: "LOCATION", value: "Portalón, Puntarenas, Costa Rica" },
  { label: "COMMUNITY", value: "Hills of Portalón (guard-gated)" },
  { label: "WATER", value: "Community (ASADA) water" },
  { label: "UTILITIES", value: "Fiber optic available; Starlink option" },
  { label: "TOPOGRAPHY", value: "Gently rolling, fully usable" },
  {
    label: "VIEWS",
    value: "Ocean south; forest privacy both sides; sunrise/mountain east",
  },
  { label: "NEAREST TOWNS", value: "Dominical 15 min; Quepos 20 min" },
];

export const sitePlanNote =
  "Conceptual layout only — no architectural or civil plans exist yet. Replace with real drawings once a designer and surveyor are engaged.";

export const developmentPhases: DevelopmentPhase[] = [
  {
    number: "01",
    name: "Acquisition & design",
    description:
      "Close on the land, engage an architect and local surveyor, finalize house plans and municipal permits.",
    timing: "MONTHS 0–[X]",
  },
  {
    number: "02",
    name: "Construction",
    description:
      "Build the primary residence, guest house, and pool; connect community water and fiber/Starlink service.",
    timing: "MONTHS [X]–[X]",
  },
  {
    number: "03",
    name: "Disposition or stabilization",
    description:
      "Sell to an end buyer, or list the finished property as a short-term rental and stabilize occupancy.",
    timing: "MONTHS [X]–[X]",
  },
];

export const returnRows: ReturnRow[] = [
  {
    metric: "Land acquisition price",
    target: "$360,000",
    basis: "5.25 ac ($17/m²), per listing MLS BZ/BR/0085",
  },
  {
    metric: "Construction budget",
    target: "$750,000",
    basis: "Primary residence, guest house, pool",
  },
  {
    metric: "Total capitalization",
    target: "$1.11M",
    basis: "Land + construction",
    highlight: true,
  },
  {
    metric: "Equity raise",
    target: "$1.11M",
    basis: "100% of total cap — all-equity, no debt",
  },
  { metric: "Target net IRR", target: "18%", basis: "To LP, over hold period" },
  { metric: "Target equity multiple", target: "1.8x", basis: "Over 4-year hold" },
  {
    metric: "Preferred return",
    target: "X%",
    basis: "Compounding, non-cumulative/cumulative",
  },
  {
    metric: "Sponsor promote",
    target: "XX / XX",
    basis: "Above preferred return",
  },
];

export const returnsFootnote =
  "FIGURES ABOVE ARE ILLUSTRATIVE PLACEHOLDERS WHERE MARKED. REPLACE WITH FIGURES FROM YOUR OWN UNDERWRITING BEFORE THIS DOCUMENT IS SHARED WITH ANY INVESTOR.";

export const teamMembers: TeamMember[] = [
  {
    initials: "BS",
    name: "Brave Spaces, LLC",
    role: "SPONSOR & DEAL LEAD",
    bio: "[One or two lines on Brave Spaces' relevant track record — deals closed, prior developments, prior exits.]",
  },
  {
    initials: "AK",
    name: "[Name]",
    role: "LOCAL CONSTRUCTION & PERMITTING",
    bio: "[Background managing on-the-ground construction, permitting, or contractor relationships in Costa Rica.]",
  },
  {
    initials: "RS",
    name: "[Name]",
    role: "CAPITAL MARKETS",
    bio: "[Background raising and managing investor capital for similar deals.]",
  },
];

export const offeringTerms: TermRow[] = [
  { key: "STRUCTURE", value: "Brave Spaces, LLC — single-purpose Costa Rica S.R.L. subsidiary" },
  { key: "MINIMUM INVESTMENT", value: "$10,000" },
  { key: "TARGET CLOSE DATE", value: "[Date]" },
  { key: "HOLD PERIOD", value: "4 years" },
  { key: "REPORTING", value: "Quarterly investor updates" },
  { key: "ELIGIBILITY", value: "Accredited investors only" },
];

export const riskDisclosure =
  "This document is a preliminary summary prepared for discussion purposes and does not constitute an offer to sell or a solicitation of an offer to buy any security. Any offering will be made only pursuant to a definitive private placement memorandum and subscription documents. This is a cross-border, foreign real estate investment: risks include construction cost overruns, currency exchange exposure (Costa Rican colón / USD), title and land-registry considerations under Costa Rican law, permitting timelines, and general market risk, in addition to the usual risks of illiquid real estate. Prospective investors should consult their own legal, tax, and financial advisors — including Costa Rican counsel — before investing. Replace this section with counsel-reviewed disclosure language before distributing this prospectus to any investor.";

export const cta = {
  heading: "Request the full package",
  body: "Full underwriting model, survey, title report, and entitlement timeline available under NDA.",
  primaryLabel: "Request investor package",
  primaryHref: "mailto:invest@example.com",
};

export const footer = {
  left: "Brave Spaces, LLC",
  right: "PREPARED [MONTH YEAR] · CONFIDENTIAL — NOT FOR DISTRIBUTION",
};

export const navLinks = [
  { href: "#opportunity", label: "Opportunity" },
  { href: "#land", label: "The Land" },
  { href: "#plan", label: "Plan" },
  { href: "#returns", label: "Returns" },
  { href: "#terms", label: "Terms" },
];
