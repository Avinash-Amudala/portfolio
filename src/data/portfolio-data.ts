export const personalInfo = {
  name: "Avinash Amudala",
  title: "Software Engineer — AI Systems & Telecom",
  email: "aa9429@rit.edu",
  phone: "+1(908)-887-3901",
  location: "Sunnyvale, CA",
  github: "https://github.com/Avinash-Amudala",
  linkedin: "https://linkedin.com/in/Avinash-Amudala",
  pypi: "https://pypi.org/project/mcp-telecom/",
  scholar: "https://scholar.google.com/citations?user=r2BFRhgAAAAJ",
  orcid: "https://orcid.org/0009-0000-7226-6156",
  portfolio: "https://avinash-amudala.com",
  heroLine:
    "I build AI systems for telecom and experimentation. Creator of MCP-Telecom — the first Model Context Protocol server for network equipment.",
  heroMetrics: "60+ tools · 7 vendors · on PyPI",
};

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  subtitle?: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    company: "Nokia",
    role: "Software Engineer",
    location: "Sunnyvale, CA",
    period: "Aug 2024 – Present",
    subtitle: "AI Platform Engineering",
    bullets: [
      "Built a production AI Test Automation platform converting telecom PRDs into executable regression plans using LLMs + hybrid retrieval (FAISS IVF + BM25 + reciprocal rank fusion), serving 4 internal engineering teams.",
      "Designed semantic search pipeline over 12K+ internal documents with FAISS HNSW indexing, achieving sub-200ms p95 query latency across the internal corpus.",
      "Implemented quality guardrails: hallucination detection via citation verification (95%+ evidence grounding rate), coverage scoring against PRD requirements, and automatic regression flagging.",
      "Built LLM-powered diagnostics UI + FastAPI backend for root cause analysis, surfacing regression insights and generating vendor-specific CLI commands for Nokia SR OS and third-party platforms.",
      "Deployed services with FastAPI, Docker, and Kubernetes; CI/CD via GitHub Actions with 98%+ pipeline pass rate across 3 environments.",
      "Created ATS Intelligence: real-time anomaly detection engine for 5G test logs using statistical baselines + z-score detection over 500K+ daily log events.",
      "Built log ingestion, scoring, and summarization pipelines producing actionable diagnostics for SRE teams, reducing mean-time-to-identify from ~45 min to ~12 min.",
    ],
  },
  {
    company: "Rochester Institute of Technology",
    role: "Software Engineer",
    location: "Rochester, NY",
    period: "Jan 2023 – Aug 2024",
    subtitle: "ITS Application Development",
    bullets: [
      "Built a search-driven Transfer Credit Equivalency platform using Apache Solr, Node/Express, GraphQL, and React, serving 15K+ student queries per semester.",
      "Designed and deployed REST + GraphQL APIs with optimized Solr indexing and query pipelines, improving search relevance by 30% (measured via NDCG@10).",
      "Developed campus eServices web applications (Angular, React, Java, PHP) with SSO auth integration, used by 20K+ students and staff.",
      "Integrated AWS Lambda, S3, and Cognito for event-driven document processing workflows, handling 8K+ document uploads per month.",
      "Shipped 12 production features end-to-end across 3 release cycles, from UI to API to data layer to deployment.",
    ],
  },
  {
    company: "Ericsson",
    role: "Software Engineer",
    location: "Bangalore, India",
    period: "Feb 2022 – Aug 2022",
    subtitle: "RAN Software — LTE/NR Systems",
    bullets: [
      "Engineered high-throughput backend services in C++ and Python for LTE/NR telecom protocol stacks, reducing packet processing latency by 20% (measured via internal perf benchmarks).",
      "Designed telemetry pipelines and internal service APIs supporting real-time KPI monitoring for 3GPP L2/L3 layers across 50+ base station configurations.",
      "Built CI/CD automation with Jenkins and Ansible, cutting release cycles from 4 days to 3 days (25% reduction) and achieving 99.2% deployment success rate.",
      "Collaborated on fault tolerance and network topology orchestration for distributed RAN systems spanning multi-vendor environments.",
    ],
  },
];

export interface FlagshipProject {
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  metrics: string[];
  category: "flagship";
  github?: string;
  pypi?: string;
  paper?: string;
  doi?: string;
  status: string;
}

export const flagshipProjects: FlagshipProject[] = [
  {
    slug: "mcp-telecom",
    title: "MCP-Telecom",
    tagline:
      "First Model Context Protocol server for multi-vendor network equipment",
    problem:
      "LLM agents cannot interact with network devices — no standardized interface exists for telecom equipment across vendors, protocols, and safety requirements.",
    solution:
      "A production-grade MCP server exposing 60+ tools across 7 vendor platforms via SSH, NETCONF, SNMP, and gNMI, with a 20+ blocked-command safety layer and connection pooling.",
    metrics: [
      "5,500 LOC",
      "60+ MCP tools",
      "157 tests",
      "7 vendors",
      "4 transport protocols",
      "20+ safety rules",
    ],
    category: "flagship",
    github: "https://github.com/Avinash-Amudala/MCP-Telecom",
    pypi: "https://pypi.org/project/mcp-telecom/",
    status: "Active — v0.2.0 on PyPI",
  },
  {
    slug: "proxima",
    title: "PROXIMA",
    tagline: "Proxy metric validation framework for A/B testing",
    problem:
      "Teams ship A/B tests using short-term proxy metrics without knowing if those proxies reliably predict long-term outcomes — leading to false wins and hidden regressions.",
    solution:
      "A statistical framework that scores proxy reliability via directional agreement, rank preservation, Simpson's Paradox detection, and composite scoring with formal guarantees.",
    metrics: [
      "98.4% oracle agreement",
      "14M observations (Criteo)",
      "7.2K users (KuaiRec)",
      "80 simulated experiments",
      "14-page paper",
    ],
    category: "flagship",
    github: "https://github.com/Avinash-Amudala/PROXIMA",
    doi: "https://doi.org/10.5281/zenodo.15483241",
    status: "Research / Preprint (stat.ME, pending)",
  },
  {
    slug: "llm-incident-copilot",
    title: "LLM Incident Copilot",
    tagline: "Evidence-grounded RAG for production log debugging",
    problem:
      "Production incident debugging requires sifting through multi-MB log files manually — AI tools hallucinate conclusions without citing actual evidence.",
    solution:
      "A RAG system where every AI conclusion must cite real log lines. Dual vector store (FAISS + Qdrant), local (Ollama) and cloud (Groq) inference, with strict evidence guardrails.",
    metrics: [
      "100% citation-backed responses",
      "FAISS + Qdrant dual index",
      "Sub-3s query latency",
      "Local + cloud inference",
    ],
    category: "flagship",
    github: "https://github.com/Avinash-Amudala/llm-incident-copilot",
    status: "Released — open source",
  },
];

export interface Project {
  title: string;
  period: string;
  description: string;
  tags: string[];
  category: "ai-ml" | "full-stack" | "systems" | "research";
  github?: string;
  live?: string;
  writeup?: string;
  doi?: string;
}

export const archiveProjects: Project[] = [
  {
    title: "ATS Resume Analyzer",
    period: "2025",
    description:
      "AI-powered resume optimization tool that analyzes resumes against ATS requirements. Built with Next.js, TypeScript, and Prisma.",
    tags: ["Next.js", "TypeScript", "Prisma", "AI/NLP", "Vercel"],
    category: "ai-ml",
    github: "https://github.com/Avinash-Amudala/ATS-Resume-Analyzer",
    live: "https://resumeoptimizer.online",
  },
  {
    title: "EasyApply AI",
    period: "Jan 2025 – May 2025",
    description:
      "AI-powered hiring automation that parses resumes, evaluates candidate suitability, and ranks applications via LLM-based NLP.",
    tags: ["Python", "FastAPI", "AWS Lambda", "LLM", "NLP"],
    category: "ai-ml",
  },
  {
    title: "Intelligent Cloud-Based Log Analysis Platform",
    period: "Mar 2024 – May 2024",
    description:
      "Cloud-native platform for parsing and analyzing AWS CloudTrail logs. Integrates GraphQL for efficient data querying, reducing troubleshooting time by 40%.",
    tags: [
      "AWS Lambda",
      "Amazon Comprehend",
      "SageMaker",
      "Python",
      "React",
      "GraphQL",
    ],
    category: "ai-ml",
  },
  {
    title: "AI-Powered University Review Insights",
    period: "Aug 2023 – Dec 2023",
    description:
      "AI-driven system to analyze university reviews using sentiment analysis and trend prediction.",
    tags: [
      "AWS Lambda",
      "Amazon Comprehend",
      "Amazon Forecast",
      "Angular",
      "GraphQL",
    ],
    category: "ai-ml",
  },
  {
    title: "E-Commerce Web Application",
    period: "May 2023 – Jul 2023",
    description:
      "Fault-tolerant e-commerce platform with Spring Boot and MySQL achieving 99.9% uptime. React + Redux frontend with GraphQL APIs and Redis caching.",
    tags: ["Spring Boot", "React", "Redux", "GraphQL", "MySQL", "Redis"],
    category: "full-stack",
  },
  {
    title: "High-Performance Trading System",
    period: "Jan 2023 – Apr 2023",
    description:
      "Low-latency trading system for high-frequency transactions. Apache Kafka for real-time data feeds, deployed on Kubernetes with Grafana/Prometheus monitoring.",
    tags: ["Java", "Kafka", "Kubernetes", "Grafana", "Prometheus", "C++"],
    category: "systems",
  },
  {
    title: "Automated ML Pipeline for Financial Forecasting",
    period: "Nov 2022 – Mar 2023",
    description:
      "Automated ML pipeline using AWS SageMaker for financial time series forecasting, reducing forecasting errors by 30%.",
    tags: ["AWS SageMaker", "Python", "Flask", "Angular", "GraphQL"],
    category: "ai-ml",
  },
  {
    title: "Real-time Stock Market Data Analysis",
    period: "Mar 2022 – Jul 2022",
    description:
      "Real-time data processing and analysis system for stock market data using Hadoop, Spark, Kafka, and ReactJS with D3.js visualization.",
    tags: [
      "Java",
      "Spring Boot",
      "Kafka",
      "Hadoop",
      "Spark",
      "React",
      "D3.js",
    ],
    category: "systems",
  },
];

export interface SkillCategory {
  name: string;
  skills: { name: string; context?: string }[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "AI & Search",
    skills: [
      { name: "RAG Systems", context: "LLM Incident Copilot" },
      {
        name: "Vector Search (FAISS)",
        context: "IVF/HNSW in MCP-Telecom & Nokia platform",
      },
      { name: "BM25 + Rank Fusion", context: "Nokia hybrid search pipeline" },
      { name: "LLM Integration", context: "Ollama, Groq, OpenAI" },
      {
        name: "Statistical Modeling",
        context: "PROXIMA reliability scoring",
      },
      { name: "Embeddings", context: "sentence-transformers, OpenAI" },
    ],
  },
  {
    name: "Backend & Systems",
    skills: [
      { name: "Python", context: "Primary — MCP-Telecom, PROXIMA, Nokia" },
      { name: "FastAPI", context: "Nokia platform, MCP-Telecom dashboard" },
      { name: "Node.js / Express", context: "RIT Transfer Credit platform" },
      { name: "C++", context: "Ericsson LTE/NR protocol stacks" },
      { name: "Java / Spring Boot", context: "E-commerce, trading system" },
      { name: "gRPC / Protocol Buffers", context: "gNMI in MCP-Telecom" },
    ],
  },
  {
    name: "Network & Telecom",
    skills: [
      { name: "NETCONF / YANG", context: "MCP-Telecom ncclient transport" },
      { name: "SSH (Netmiko)", context: "MCP-Telecom CLI automation" },
      { name: "SNMP v2c/v3", context: "MCP-Telecom pysnmp v7" },
      { name: "gNMI (gRPC)", context: "MCP-Telecom streaming telemetry" },
      {
        name: "Multi-vendor",
        context: "Nokia SR OS, Cisco IOS/XE/XR/NX-OS, Juniper, Arista",
      },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React / Next.js", context: "This site, Nokia UI, RIT apps" },
      { name: "TypeScript" },
      { name: "Angular", context: "RIT campus eServices" },
      { name: "GraphQL", context: "RIT Transfer Credit, e-commerce" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    name: "Infrastructure",
    skills: [
      { name: "Docker / Kubernetes", context: "Nokia deployment, trading sys" },
      { name: "GitHub Actions CI", context: "MCP-Telecom Py 3.10–3.12" },
      { name: "AWS", context: "Lambda, S3, Cognito, SageMaker" },
      { name: "Prometheus / Grafana", context: "MCP-Telecom metrics" },
      { name: "Containerlab", context: "MCP-Telecom network simulation" },
    ],
  },
  {
    name: "Datastores",
    skills: [
      { name: "FAISS", context: "IVF/PQ/HNSW indexes" },
      { name: "Qdrant", context: "LLM Incident Copilot vector store" },
      { name: "PostgreSQL" },
      { name: "Redis", context: "Caching layer" },
      { name: "Apache Solr", context: "RIT search platform" },
      { name: "MongoDB" },
    ],
  },
];

export interface Certification {
  name: string;
  issuer: string;
}

export const certifications: Certification[] = [
  { name: "Nokia Network Routing Specialist I (NRS I)", issuer: "Nokia" },
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
  },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services" },
  {
    name: "Oracle Certified Associate – Java SE Programmer",
    issuer: "Oracle",
  },
  { name: "Azure Fundamentals (AZ-900)", issuer: "Microsoft" },
];

export interface Publication {
  title: string;
  description: string;
  venue: string;
  link?: string;
  doi?: string;
  year: string;
}

export const publications: Publication[] = [
  {
    title:
      "PROXIMA: Proxy Metric Intelligence for Reliable A/B Testing",
    description:
      "Framework to quantify proxy reliability, detect fragile or misleading early metrics, and reduce decision risk in experimentation pipelines. 14-page paper with formal propositions and algorithm.",
    venue: "Preprint — stat.ME (arXiv submission pending)",
    link: "https://doi.org/10.5281/zenodo.15483241",
    year: "2025",
  },
  {
    title:
      "An IoT-Model for Monitoring Irrigated Crops Using WSN",
    description:
      "Research on enhancing water management for irrigated crops using IoT and Wireless Sensor Networks.",
    venue: "IEEE ICESC 2022",
    doi: "10.1109/ICESC54411.2022.9885455",
    link: "https://doi.org/10.1109/ICESC54411.2022.9885455",
    year: "2022",
  },
];

export interface ReviewerRole {
  venue: string;
  type: string;
  url?: string;
}

export const reviewerRoles: ReviewerRole[] = [
  { venue: "AIAI 2026", type: "Conference", url: "https://www.aiai2026.eu/" },
  {
    venue: "ACM Computing Surveys",
    type: "Journal",
    url: "https://dl.acm.org/journal/csur",
  },
  {
    venue: "ACM TOSEM",
    type: "Journal",
    url: "https://dl.acm.org/journal/tosem",
  },
  {
    venue: "ACM TOIT",
    type: "Journal",
    url: "https://dl.acm.org/journal/toit",
  },
  {
    venue: "ACM TIST",
    type: "Journal",
    url: "https://dl.acm.org/journal/tist",
  },
  {
    venue: "DMLR Journal",
    type: "Journal",
    url: "https://data.mlr.press/",
  },
  {
    venue: "alphaXiv",
    type: "Open Review",
    url: "https://alphaxiv.org/",
  },
  {
    venue: "Elsevier",
    type: "Publisher",
    url: "https://www.elsevier.com/",
  },
  {
    venue: "Springer Nature",
    type: "Publisher",
    url: "https://www.springernature.com/",
  },
  {
    venue: "MDPI",
    type: "Publisher",
    url: "https://www.mdpi.com/",
  },
];

export interface GuestLecture {
  institution: string;
  professor: string;
  course: string;
  semester: string;
  topic?: string;
}

export const guestLectures: GuestLecture[] = [
  {
    institution: "San José State University",
    professor: "Dr. Maryam Khazaei",
    course: "Introduction to Artificial Intelligence",
    semester: "Fall 2026",
  },
  {
    institution: "San José State University",
    professor: "Dr. Maryam Khazaei",
    course: "Foundations of Robotics",
    semester: "Spring 2027",
  },
  {
    institution: "San José State University",
    professor: "Dr. Navrati Saxena",
    course: "5G and V2X Communications",
    semester: "Fall 2026",
  },
];

export interface Collaboration {
  institution: string;
  collaborator: string;
  role: string;
  area: string;
}

export const collaborations: Collaboration[] = [
  {
    institution: "Santa Clara University",
    collaborator: "Dr. Yi Fang",
    role: "Industry Collaborator",
    area: "Responsible AI — Director of SCU Responsible AI Lab",
  },
];

export const education = [
  {
    school: "Rochester Institute of Technology",
    degree: "MS, Software Engineering",
    location: "Rochester, NY",
    year: "Dec 2024",
  },
  {
    school: "Amrita Vishwa Vidyapeetham",
    degree: "BE, Electronics and Communication Engineering",
    location: "Coimbatore, India",
    year: "Jun 2022",
  },
];

export const nowItems = [
  {
    label: "MCP-Telecom v0.3",
    description:
      "Adding RESTCONF transport, expanded Arista EOS coverage, and OpenConfig YANG model support.",
  },
  {
    label: "PROXIMA arXiv submission",
    description:
      "Finalizing the stat.ME paper with additional robustness checks on the KuaiRec dataset.",
  },
  {
    label: "SJSU lecture prep",
    description:
      "Building slide decks for Fall 2026 guest lectures on AI and 5G/V2X with Dr. Khazaei and Dr. Saxena.",
  },
  {
    label: "SCU Responsible AI collaboration",
    description:
      "Working with Dr. Yi Fang's lab on evaluation frameworks for responsible AI in telecom.",
  },
];
