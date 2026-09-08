export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Agentic AI & LLM Systems",
    icon: "/assets/experience/machine.png",
  },
  {
    title: "Full-Stack Product Engineering",
    icon: "/assets/experience/web.png",
  },
  {
    title: "Computer Vision & ML",
    icon: "/assets/experience/cv.png",
  },
  {
    title: "Workflow Automation",
    icon: "/assets/experience/creator.png",
  },
];

const technologies = [
  {
    name: "React JS",
    icon: "/assets/tech/reactjs.png",
  },
  {
    name: "Redux Toolkit",
    icon: "/assets/tech/redux.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/assets/tech/tailwind.png",
  },
  {
    name: "Node JS",
    icon: "/assets/tech/nodejs.png",
  },
  {
    name: "MongoDB",
    icon: "/assets/tech/mongodb.png",
  },
  {
    name: "Three JS",
    icon: "/assets/tech/Threejs-logo.png",
  },
  {
    name: "git",
    icon: "/assets/tech/git.png",
  },
  {
    name: "figma",
    icon: "/assets/tech/figma.png",
  },
  {
    name: "CV",
    icon: "/assets/experience/cv.png",
  },
  {
    name: "AI/ML",
    icon: "/assets/experience/machine.png",
  },
  {
    name: "N8N",
    icon: "/assets/tech/n8n-icon.png",
  },
  {
    name: "Docker",
    icon: "/assets/tech/docker-icon.png",
  },
  {
    name: "Lang framework",
    icon: "/assets/tech/langchainIcon.png",
  },
  {
    name: "Haystack",
    icon: "/assets/tech/haystackIcon.png",
  }
];

const experiences = [
  {
    title: "Full Stack Engineer & AI Developer",
    company_name: "Fintech Fusion",
    icon: "/assets/experience/fullstack.png",
    iconBg: "#E6DEDD",
    date: "April 2026 - Present",
    points: [
      "Architecting and developing modern, responsive fintech web applications utilizing Next.js, React.js, and Node.js.",
      "Designing and implementing Agentic AI workflows and LLM systems (n8n, LangChain, Gemini) for automated financial operations and analysis.",
      "Optimizing database schemas and server architectures (FastAPI, MongoDB, PostgreSQL) for high-performance and sub-second query latency.",
      "Collaborating in cross-functional teams to build clean, maintainable product features and API integrations."
    ],
  },
];

const projects = [
  {
    name: "AI Agent for CRM Lead Qualification & Email Outreach",
    description: "Automated n8n workflow that integrated with Google Workspace and Gemini AI using asynchronous polling, custom OAuth 2.0, AI agent orchestration, and structured JSON parsing. The automation extracted incoming spreadsheet leads, utilized an LLM to evaluate the data, enforced strict output formatting to strip conversational filler, and dispatched personalized welcome emails via Gmail all without manual intervention",
    tags: [
      { name: "n8n", color: "blue-text-gradient" },
      { name: "Automation", color: "green-text-gradient" },
      { name: "Zapier", color: "pink-text-gradient" },
      { name: "CRM", color: "blue-text-gradient" },
    ],
    images: ["/assets/projects/n8n_project.png"],
    source_code_link: "#",
  },
  {
    name: "MzTrend RAG E-Commerce Platform",
    description: "Full-stack e-commerce platform featuring MzBot, a RAG-powered AI chatbot using Gemini text-embedding-004 and cosine similarity search over a custom product knowledge base. Implements a hybrid semantic search engine combining BM25 keyword scoring with Gemini vector embeddings and intent detection. Built with Next.js 16, TypeScript, and PostgreSQL. Includes full storefront, cart, checkout with coupons, and a role-based admin dashboard with NextAuth v4 authentication.",
    tags: [
      { name: "Next.js 16", color: "blue-text-gradient" },
      { name: "RAG / Gemini AI", color: "green-text-gradient" },
      { name: "PostgreSQL", color: "pink-text-gradient" },
      { name: "NextAuth v4", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
    ],
    images: ["/assets/projects/Eweb.png"],
    source_code_link: "https://github.com/Moez-lab/AI-Base-Ecommerce.git",
  },
  {
    name: "AI Base Attendance System",
    description: "An AI-powered face recognition attendance system using Python, OpenCV, and Tkinter automate student attendance with real-time facial detection, image training, and CSV tracking",
    tags: [
      { name: "Computer Vision", color: "blue-text-gradient" },
      { name: "OpenCV", color: "green-text-gradient" },
      { name: "Tkinter", color: "pink-text-gradient" },
      { name: "Python", color: "blue-text-gradient" },
      { name: "Machine Learning", color: "green-text-gradient" },
    ],
    images: ["/assets/projects/AiAttendance.png"],
    source_code_link: "https://github.com/Moez-lab/AI-Base-Attendance-System.git",
  },

  {
    name: "Real-Time Fraud Detection & Autonomous MLOps Pipeline",
    description: "Streaming fraud detection system processing 284K+ transactions with sub-100ms latency via Kafka and PySpark Pandas UDF. XGBoost classifier achieves 98.3% ROC-AUC. Includes an autonomous triage agent that evaluates customer profiles and executes automated actions (card freezing, SMS 2FA) without human intervention. Features a full Airflow MLOps retrain pipeline with Jensen-Shannon divergence drift monitors and a champion/challenger model governance registry. Dockerized across seven services using Docker Compose.",
    tags: [
      { name: "Kafka / Spark", color: "blue-text-gradient" },
      { name: "XGBoost · 98.3% AUC", color: "green-text-gradient" },
      { name: "Airflow / MLflow", color: "pink-text-gradient" },
      { name: "Gemini AI", color: "blue-text-gradient" },
      { name: "Docker", color: "green-text-gradient" },
    ],
    images: [
      "/assets/projects/fraud_airflow_pipeline.png",
      "/assets/projects/fraud_triage_agent.png",
      "/assets/projects/fraud_streaming_scoring.png",
      "/assets/projects/fraud_spark_engine.png",
      "/assets/projects/fraud_mlflow_tracking.png",
    ],
    source_code_link: "https://github.com/Moez-lab",
  },
  {
    name: "AI Voice Pipeline for E-Commerce Support",
    description: "Low-latency voice AI pipeline using Vapi AI with strict guardrails for tier-1 e-commerce support. Orchestrates Make.com and Google Gemini to analyze call transcripts, extract customer sentiment, and flag urgent issues via structured JSON. Automates backend routing: resolved calls are silently logged to Sheets while critical issues trigger real-time Slack alerts for human handoffs — reducing support overhead significantly.",
    tags: [
      { name: "Vapi AI", color: "blue-text-gradient" },
      { name: "Google Gemini", color: "green-text-gradient" },
      { name: "Make.com", color: "pink-text-gradient" },
      { name: "Slack", color: "blue-text-gradient" },
    ],
    images: [
      "/assets/projects/voice_pipeline_flow.png",
      "/assets/projects/voice_pipeline_sheets.png",
      "/assets/projects/voice_pipeline_slack.png",
    ],
    source_code_link: "#",
  },
];

export { services, technologies, experiences, projects };