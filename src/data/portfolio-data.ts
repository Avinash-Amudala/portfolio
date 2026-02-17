export const personalInfo = {
  name: "Avinash Amudala",
  title: "Full-Stack Engineer & AI Platform Builder",
  email: "aa9429@rit.edu",
  phone: "+1(908)-887-3901",
  location: "San Jose, CA",
  github: "https://github.com/Avinash-Amudala",
  linkedin: "https://linkedin.com/in/Avinash-Amudala",
  portfolio: "https://avinash-amudala.github.io",
  summary:
    "Full-stack engineer building production AI platforms that combine scalable backends, retrieval systems, data pipelines, and user-facing interfaces. Experienced in designing evidence-grounded LLM systems, real-time analytics, and reliability tooling across telecom and experimentation platforms.",
  typingPhrases: [
    "Building production AI systems",
    "Designing hybrid search pipelines",
    "Shipping end-to-end platforms",
    "Engineering evidence-grounded LLMs",
    "Scaling distributed systems",
  ],
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
    period: "Aug 2024 - Present",
    subtitle: "AI Platform Engineering (Full-stack + Backend)",
    bullets: [
      "Built a production AI Test Automation platform used across multiple internal teams to convert telecom PRDs into executable regression plans using LLMs + retrieval pipelines.",
      "Designed hybrid semantic search (FAISS + BM25 + rank fusion) powering thousands of queries across internal corpora.",
      "Implemented quality and safety guardrails using coverage metrics, hallucination detection, and evidence scoring.",
      "Developed LLM-powered diagnostics UI + APIs for root cause analysis, regression insights, and command generation.",
      "Deployed services with FastAPI, Docker, Kubernetes, and CI/CD, improving delivery velocity and system reliability.",
      "Created ATS Intelligence, a real-time anomaly detection engine for 5G logs using statistical baselines + z-score detection.",
      "Built log ingestion, scoring, and summarization pipelines producing actionable diagnostics for SRE teams.",
    ],
  },
  {
    company: "Rochester Institute of Technology",
    role: "Software Engineer",
    location: "Rochester, NY",
    period: "Jan 2023 - Aug 2024",
    bullets: [
      "Built a search-driven, full-stack platform for Transfer Credit Equivalency using Solr, Node/Express, GraphQL, and React.",
      "Designed and deployed scalable REST + GraphQL APIs with optimized indexing and query pipelines, improving search relevance by ~30%.",
      "Developed user-facing web applications (Angular, React, Java, PHP) for campus eServices with secure auth flows.",
      "Integrated cloud-native microservices using AWS Lambda, S3, and Cognito for secure document processing and event-driven workflows.",
      "Partnered with product owners and designers to ship production features end-to-end, from UI to API to data layer to deployment.",
    ],
  },
  {
    company: "Ericsson India Global Services",
    role: "Software Engineer",
    location: "Bangalore, India",
    period: "Feb 2022 - Aug 2022",
    bullets: [
      "Engineered high-throughput backend services in C++ and Python for LTE/NR telecom systems, reducing packet processing latency by ~20%.",
      "Designed internal service APIs and telemetry pipelines to support real-time performance monitoring and fault analysis.",
      "Built CI/CD automation using Jenkins and Ansible, cutting release cycles by ~25% and improving deployment reliability.",
      "Collaborated with distributed systems teams working on 3GPP protocol stacks, fault tolerance, and network topology orchestration.",
    ],
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
  featured?: boolean;
  badge?: string;
}

export const projects: Project[] = [
  {
    title: "PROXIMA - Proxy Metric Intelligence",
    period: "June 2025 - Present",
    description:
      "Research platform that evaluates whether A/B test proxy metrics are truly reliable. Detects Simpson's paradox, sign flips, and gaming. Simulates shipping decisions to estimate regret and risk. Scores proxy trustworthiness across cohorts.",
    tags: ["Python", "FastAPI", "React", "Statistical Modeling", "A/B Testing"],
    category: "research",
    github: "https://github.com/Avinash-Amudala/PROXIMA",
    doi: "https://doi.org/10.5281/zenodo.15483241",
    featured: true,
    badge: "Patent Pending",
  },
  {
    title: "LLM Incident Copilot",
    period: "2025 - 2026",
    description:
      "Evidence-grounded RAG system for large-scale incident debugging. Ingests multi-MB production logs with strict evidence guardrails — every AI conclusion must cite actual log lines. Supports local (Ollama) and cloud (Groq) inference.",
    tags: ["Python", "FastAPI", "RAG", "FAISS", "React", "Docker", "Qdrant"],
    category: "ai-ml",
    github: "https://github.com/Avinash-Amudala/llm-incident-copilot",
    writeup: "https://avinash-amudala.github.io/posts/llm-incident-copilot",
    featured: true,
  },
  {
    title: "ATS Resume Analyzer",
    period: "2025",
    description:
      "AI-powered resume optimization tool that analyzes resumes against ATS requirements. Built with Next.js, TypeScript, and Prisma. Live production system used by real users.",
    tags: ["Next.js", "TypeScript", "Prisma", "AI/NLP", "Vercel"],
    category: "ai-ml",
    github: "https://github.com/Avinash-Amudala/ATS-Resume-Analyzer",
    live: "https://resumeoptimizer.online",
    featured: true,
  },
  {
    title: "EasyApply AI",
    period: "Jan 2025 - May 2025",
    description:
      "AI-powered hiring automation system that parses resumes, evaluates candidate suitability, and ranks applications. Integrates LLM-based NLP for job description and profile analysis.",
    tags: ["Python", "FastAPI", "AWS Lambda", "LLM", "NLP"],
    category: "ai-ml",
    featured: true,
  },
  {
    title: "Intelligent Cloud-Based Log Analysis Platform",
    period: "Mar 2024 - May 2024",
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
    period: "Aug 2023 - Dec 2023",
    description:
      "AI-driven system to analyze university reviews using sentiment analysis and trend prediction, leading to 30% increase in actionable insights.",
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
    period: "May 2023 - Jul 2023",
    description:
      "Fault-tolerant e-commerce platform with Spring Boot and MySQL achieving 99.9% uptime. React + Redux frontend integrated with GraphQL APIs and Redis caching.",
    tags: ["Spring Boot", "React", "Redux", "GraphQL", "MySQL", "Redis"],
    category: "full-stack",
  },
  {
    title: "Underlay - AI Design Sketching",
    period: "Jun 2023 - Jul 2023",
    description:
      "AI-based tool that assists designers in starting digital sketches by generating geometry based on design requirements using Three.js for 3D rendering.",
    tags: ["Three.js", "GCP", "JavaScript", "AI"],
    category: "full-stack",
    live: "https://underlay-tool.vercel.app",
  },
  {
    title: "Revolve - Cylindrical Form Generator",
    period: "Jun 2023",
    description:
      "Transforms sketches into cylindrical 3D forms with real-time visualization using Three.js.",
    tags: ["Three.js", "JavaScript", "CSS"],
    category: "full-stack",
    live: "https://revolve-tool.vercel.app",
  },
  {
    title: "Sample - Color Palette Generator",
    period: "May 2023 - Jun 2023",
    description:
      "Calculates primary colors from images, helping designers quickly select and apply cohesive color schemes.",
    tags: ["JavaScript", "Figma", "CSS"],
    category: "full-stack",
    live: "https://sample-color.vercel.app",
  },
  {
    title: "High-Performance Trading System",
    period: "Jan 2023 - Apr 2023",
    description:
      "Low-latency trading system for high-frequency transactions. Integrated Apache Kafka for real-time data feeds, deployed on Kubernetes with Grafana/Prometheus monitoring.",
    tags: ["Java", "Kafka", "Kubernetes", "Grafana", "Prometheus", "C++"],
    category: "systems",
  },
  {
    title: "Automated ML Pipeline for Financial Forecasting",
    period: "Nov 2022 - Mar 2023",
    description:
      "Automated ML pipeline using AWS SageMaker for financial time series forecasting, reducing forecasting errors by 30%.",
    tags: ["AWS SageMaker", "Python", "Flask", "Angular", "GraphQL"],
    category: "ai-ml",
  },
  {
    title: "E-store Web Application",
    period: "Aug 2022 - Oct 2022",
    description:
      "Custom responsive e-commerce web application using Angular with TypeScript and Spring Framework.",
    tags: ["Angular", "TypeScript", "Spring Framework", "Java"],
    category: "full-stack",
    github: "https://github.com/Avinash-Amudala/e-store-clothing",
  },
  {
    title: "Real-time Stock Market Data Analysis",
    period: "Mar 2022 - Jul 2022",
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
  {
    title: "IoT-Model for Monitoring Irrigated Crops",
    period: "Published Sep 2022",
    description:
      "Research paper on enhancing water management for irrigated crops using IoT and Wireless Sensor Networks.",
    tags: ["IoT", "Wireless Sensor Networks", "Research"],
    category: "research",
  },
  {
    title: "Home Automation with RFID Security",
    period: "Oct 2021 - Nov 2021",
    description:
      "Arduino-based home automation system with RFID security door, mobile app controls, and Wi-Fi module integration.",
    tags: ["Arduino", "RFID", "IoT", "Mobile Development"],
    category: "systems",
  },
];

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Angular",
      "GraphQL",
      "REST APIs",
      "Tailwind CSS",
    ],
  },
  {
    name: "Backend",
    skills: [
      "Python",
      "Node.js",
      "FastAPI",
      "Express",
      "C++",
      "Java",
      "Spring Boot",
    ],
  },
  {
    name: "AI & Data",
    skills: [
      "RAG Systems",
      "Vector Search (FAISS)",
      "BM25",
      "Embeddings",
      "LLM Integration",
      "Statistical Modeling",
      "NLP",
    ],
  },
  {
    name: "Infrastructure",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Azure",
      "Terraform",
      "CI/CD",
      "Linux",
    ],
  },
  {
    name: "Datastores",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Qdrant",
      "DynamoDB",
      "Solr",
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
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
  },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services" },
  {
    name: "Oracle Certified Associate - Java SE Programmer",
    issuer: "Oracle",
  },
  { name: "Azure Fundamentals (AZ-900)", issuer: "Microsoft" },
];

export interface Publication {
  title: string;
  description: string;
  link?: string;
  year: string;
}

export const publications: Publication[] = [
  {
    title: "PROXIMA: System and Method for Reliability Scoring of Proxy Metrics in Experiments",
    description:
      "Framework to quantify proxy reliability, detect fragile or misleading early metrics, and reduce decision risk in experimentation pipelines.",
    link: "https://doi.org/10.5281/zenodo.15483241",
    year: "2025",
  },
  {
    title: "An IoT-Model for Monitoring Irrigated Crops",
    description:
      "Research on enhancing water management for irrigated crops using IoT and Wireless Sensor Networks.",
    year: "2022",
  },
];

export const education = [
  {
    school: "Rochester Institute of Technology",
    degree: "MS, Software Engineering",
    location: "Rochester, NY",
    year: "Dec 2024",
    courses:
      "Machine Learning, Cloud Software Systems (AWS), Data Structures & Algorithms, Software Engineering Principles, Database Design",
  },
  {
    school: "Amrita Vishwa Vidyapeetham",
    degree: "BE, Electronics and Communication Engineering",
    location: "Coimbatore, India",
    year: "Jun 2022",
  },
];
