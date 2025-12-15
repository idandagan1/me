export const personalInfo = {
  name: "Idan Dagan",
  title: "Engineering Manager",
  email: "idandagan1@gmail.com",
  phone: "(914) 339-5132",
  linkedin: "https://www.linkedin.com/in/idandagan1",
  location: "US Citizen"
}

export const summary = `Engineering Team Lead with 8+ years of experience delivering and scaling products in both small startups and large company environments. Leverages AI-assisted development workflows to significantly improve engineering velocity, code quality, and iteration speed.`

export const experience = [
  {
    id: 1,
    company: "Wix.com",
    role: "Tech Lead - AI Innovation Team",
    period: "05/2025 – Present",
    description: "Part of an innovative AI team reporting directly to the COO, leading a strategic AI effort to develop next-generation products. Designing and optimizing guardrails, prompts, and context-engineering frameworks across multiple LLMs. Building serverless services with Node.js, Scala, MySQL and Kafka. Integrated AI-assisted IDE and PR workflows into day-to-day.",
    technologies: ["Node.js", "Scala", "MySQL", "Kafka", "LLMs", "AI/ML"]
  },
  {
    id: 2,
    company: "Wix.com",
    role: "Engineering Team Lead - Domains",
    period: "12/2021 – 05/2025",
    description: "Led two multidisciplinary teams advancing Wix's core monetization product, the main upgrade flow to premium. Oversaw complex third-party integrations and large-scale asynchronous systems built in Scala, MySQL, and Kafka, delivering features used by millions of Wix users. Mentored and coached developers through career growth, performance reviews, and technical decision-making.",
    technologies: ["Scala", "MySQL", "Kafka", "Node.js"]
  },
  {
    id: 3,
    company: "Lusha",
    role: "Core & Platform Team Lead",
    period: "06/2018 – 12/2021",
    description: "Joined as the third engineer in the startup's early stage and grew to lead the Core and Platform teams. Built the entire backoffice system using Node.js, React, Cassandra, and MySQL. Responsible for infrastructure and data pipelines and designed asynchronous flows using RabbitMQ, managed database migrations, and led company-wide initiatives to improve delivery velocity. Drove hiring processes, onboarding, and team-building exercises.",
    technologies: ["Node.js", "React", "Cassandra", "MySQL", "RabbitMQ"]
  },
  {
    id: 4,
    company: "Israel Defense Forces (IDF)",
    role: "Tech Lead (Founder Team)",
    period: "01/2019 – 01/2022",
    description: "Co-founded a new team within the IDF and built the entire backend system for the forces' fitness evaluations. Designed the backend from scratch using Node.js and Postgres. The system was successfully adopted by the IDF.",
    technologies: ["Node.js", "Fastify.js", "PostgreSQL"]
  },
  {
    id: 5,
    company: "Perion Network",
    role: "Software Developer",
    period: "08/2017 – 06/2018",
    description: "Built data-processing systems in Node.js as part of the Search team and led the migration from a legacy platform to a new system using Couchbase and modern pipelines.",
    technologies: ["Node.js", "Express.js", "Couchbase"]
  }
]

export const education = {
  degree: "Bachelor of Science (B.Sc.)",
  field: "Computer Science",
  school: "The Academic College of Tel-Aviv, Yaffo",
  period: "2014 – 2017"
}

export const community = [
  {
    title: "LangTalks",
    description: "Active member of LangTalks, an Israeli community of AI and LLM engineers focused on applied AI systems",
    link: "https://langtalks.ai/"
  },
  {
    title: "Node.js-IL",
    description: "Co-organized Node.js-IL, Israel's meetup community",
    link: "https://www.meetup.com/nodejs-israel/"
  },
  {
    title: "Node TLV",
    description: "Co-Founder & Organizer - Node TLV, Israel's international Node.js conference with 1000+ attendees",
    link: "https://www.nodetlv.com/"
  }
]

export const skills = [
  { name: "Node.js", level: 95 },
  { name: "React", level: 85 },
  { name: "Scala", level: 80 },
  { name: "TypeScript", level: 90 },
  { name: "MySQL", level: 85 },
  { name: "Kafka", level: 80 },
  { name: "PostgreSQL", level: 80 },
  { name: "AI/LLMs", level: 85 },
  { name: "Team Leadership", level: 95 },
  { name: "System Design", level: 90 }
]

export const articles = [
  {
    title: "The Art Behind Better AI: How We Achieved a 46% Speed Boost and 23× Cost Reduction",
    description: "A deep dive into context engineering - the discipline of optimizing data before it reaches the LLM. Learn how we moved heavy lifting from expensive models to deterministic preprocessing, enabling massive performance gains.",
    url: "https://www.wix.engineering/post/the-art-behind-better-ai-how-we-achieved-a-46-speed-boost-and-23-cost-reduction",
    publication: "Wix Engineering",
    date: "2024",
    tags: ["AI", "LLMs", "Context Engineering", "Performance"]
  },
  {
    title: "Things to Know Before Running DB Changes",
    description: "Database changes are different from code changes and require more planning. Learn about the pitfalls of gradual migrations with feature toggles and how to avoid performance issues with composite primary keys.",
    url: "https://www.wix.engineering/post/things-to-know-before-running-db-changes",
    publication: "Wix Engineering",
    date: "2022",
    tags: ["MySQL", "Database", "Feature Toggles", "Performance"]
  }
]

