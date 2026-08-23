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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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
    image: "/assets/projects/n8n_project.png",
    source_code_link: "/",
  },
  {
    name: "E-Commerce Website",
    description: "E-Commerce Website",
    tags: [
      { name: "LangChain", color: "blue-text-gradient" },
      { name: "Langsmith", color: "green-text-gradient" },
      { name: "Pinecone", color: "pink-text-gradient" },
      { name: "Kafka", color: "blue-text-gradient" },
      { name: "Docker", color: "green-text-gradient" },
      { name: "PostgreSQL", color: "pink-text-gradient" },
    ],
    image: "/assets/projects/Eweb.png",
    source_code_link: "https://github.com/Moez-lab/AI-Base-Ecommerce.git",
  },
  {
    name: "JARVIS AI Assistant",
    description: "Advanced AI assistant featuring a stunning 3D avatar interface with real-time lip-sync animations powered by React Three Fiber. Integrates YOLOv8 for 80+ object detection, DeepFace for face recognition and emotion detection, neural TTS with voice synthesis, and real-time face tracking. Built with Python backend and WebSocket communication for synchronized avatar responses. Includes desktop automation, voice command recognition, and intelligent visual analysis capabilities.",
    tags: [
      { name: "React Three Fiber", color: "blue-text-gradient", },
      { name: "YOLOv8", color: "green-text-gradient", },
      { name: "Ollama", color: "pink-text-gradient", },
      { name: "Selenium", color: "blue-text-gradient", },
      { name: "PyAutoGUI", color: "green-text-gradient", },
    ],
    image: "/assets/projects/jarvis.png",
    source_code_link: "https://github.com/Moez-lab/AI-Assistant",
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
    image: "/assets/projects/AiAttendance.png",
    source_code_link: "https://github.com/Moez-lab/AI-Base-Attendance-System.git",
  },

  {
    name: "House Price Prediction",
    description:
      "A Machine Learning project that predicts California house prices using Linear Regression and Random Forest. It includes data preprocessing, feature engineering, visualizations, and model evaluation with hyperparameter tuning using GridSearchCV..",
    tags: [
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "Supervised Learning",
        color: "green-text-gradient",
      },
      {
        name: "Random Forest",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/house.png",
    source_code_link: "https://github.com/Moez-lab/House-Price-Prediction",
  },
  {
    name: "Face Recognition System",
    description:
      "🎯 A face recognition system using PCA for dimensionality reduction and SVM for classification. Achieves high accuracy on facial image data with hyperparameter tuning and cross-validation.",
    tags: [
      {
        name: "PCA",
        color: "blue-text-gradient",
      },
      {
        name: "Neural Networks",
        color: "green-text-gradient",
      },
      {
        name: "CNN",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/face_reg.png",
    source_code_link: "https://github.com/Moez-lab/FaceRecoginitionSystem",
  },
  {
    name: "Email Spam Detection",
    description:
      "A simple machine learning project that classifies emails as Spam or Ham using Logistic Regression and TF-IDF vectorization. Built with Python and scikit-learn.",
    tags: [
      {
        name: "NLP",
        color: "blue-text-gradient",
      },
      {
        name: "TFIDF",
        color: "green-text-gradient",
      },
      {
        name: "Binary Classification",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/email_spam.jpg",
    source_code_link: "https://github.com/Moez-lab/Spam-Email-Detector",
  },
];

export { services, technologies, experiences, testimonials, projects };