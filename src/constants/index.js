export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
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
    title: "Application Support Analyst",
    company_name: "FinTech Fusion",
    icon: "/assets/experience/fintech_fusion_logo.png",
    iconBg: "transparent",
    date: "Aug 2026 - Present | Remote, Australia",
    points: [
      "Monitored live payment processing and settlement pipelines daily, verifying accurate end-to-end job execution across scheduled financial jobs.",
      "Queried and cross-checked transaction and settlement data using SQL to identify discrepancies, proactively flagging and escalating execution anomalies before client impact.",
      "Troubleshot recurring pipeline and job-scheduling issues, collaborating with cross-functional teams to drive timely resolution.",
      "Maintained clear documentation of recurring issues and resolution steps to support faster diagnosis on future incidents."
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

const certifications = [
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford Online",
    link: "https://www.coursera.org/account/accomplishments/specialization/PWDW56N37BR5",
  },
  {
    title: "Supervised Machine Learning",
    issuer: "Stanford Online",
    link: "https://www.coursera.org/account/accomplishments/verify/1UWGXN6JTLUH",
  },
  {
    title: "Computer Vision",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-08a10337-785e-430d-b5d5-b78caeca8ccc/",
  },
  {
    title: "AI & Deep Learning",
    issuer: "Stanford Online",
    link: "https://www.coursera.org/account/accomplishments/verify/CIHD2N6DTHS2",
  },
  {
    title: "Unsupervised Learning",
    issuer: "Stanford Online",
    link: "https://www.coursera.org/account/accomplishments/verify/A885NAK96ACO",
  },
  {
    title: "Computer Networking",
    issuer: "Cisco",
    link: "https://www.credly.com/badges/4d43ad53-9632-4368-82b0-17b11ec41206/linked_in_profile",
  },
  {
    title: "CS50x Puzzle Day 2026",
    issuer: "Harvard University",
    link: "https://certificates.cs50.io/50a4b075-fe27-4c07-9bcc-7538cb350a8f.pdf?size=letter",
  },
];

export { services, technologies, experiences, projects, certifications };