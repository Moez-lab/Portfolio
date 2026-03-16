import {
  Eweb,
  haystackIcon,
  langsmithicon,
  langgraphIcon,
  langchainIcons,
  jarvis,
  mobile,
  web,
  javascriptIcon,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  cv,
  threejs,
  machine,
  zomato,
  house,
  face_reg,
  email_spam,
  n8n,
  dockericon,
  fullsatck,
  mlops,
  nocode
} from "../assets";


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
    title: "Full Stack Web Developer (MERN STACK)",
    icon: web,
  },
  {
    title: "Native Expo (Full Stack App Developer)",
    icon: mobile,
  },

  {
    title: "AI/ML Enthusiast",
    icon: machine,
  },
  {
    title: "ComputerVision Specialist ",
    icon: cv,
  },
  {
    title: "No/Low-code ",
    icon: nocode,
  },
  {
    title: "MLOPS ",
    icon: mlops,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascriptIcon,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "CV",
    icon: cv,
  },
  {
    name: "AI/ML",
    icon: machine,
  },
  {
    name: "N8N",
    icon: n8n,
  },
  {
    name: "Docker",
    icon: dockericon,
  },
  {
    name: "Langchain",
    icon: langchainIcons,
  },
  {
    name: "Langsmith",
    icon: langsmithicon,
  },
  {
    name: "Langgraph",
    icon: langgraphIcon,
  },
  {
    name: "Haystack",
    icon: haystackIcon,
  }
];


const experiences = [
  {
    title: "Full stack Developer",
    company_name: "",
    icon: fullsatck,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining full-stack web applications using the MERN stack, with strong expertise in React.js, Vite, Vue.js, and Next.js.",
      "Building high-performance mobile applications using React Native and Expo.",
      "Collaborating with designers, product managers, and engineering teams to deliver clean, scalable, and user-focused solutions.",
      "Implementing responsive UI/UX designs and ensuring consistent performance across browsers and devices.",
      "Conducting code reviews, optimizing code quality, and contributing to best practices in development workflows."
    ],
  },
  {
    title: "AI/ML Enthusiast",
    company_name: "",
    icon: machine,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Completed Machine Learning and Deep Learning Specializations by Andrew Ng, covering supervised, unsupervised, and advanced deep learning methods.",
      "Building AI models for iris detection, email spam detection, house price prediction, and face detection using TensorFlow and Scikit-learn.",
      "Working with Large Language Models (LLMs) and Generative AI, including fine-tuning, prompt engineering, and model integration.",
      "Developing and deploying AI services and APIs using FastAPI, integrating ML/LLM workflows into real-world applications.",
      "Implementing Retrieval-Augmented Generation (RAG) pipelines using LangChain for intelligent, context-aware AI systems."
    ]
  },
  {
    title: "Computer Vision Specialist",
    company_name: "",
    icon: cv,
    iconBg: "#383E56",
    date: "Jan 2025 - Present",
    points: [
      "Implemented computer vision algorithms to create traffic light detection systems using PCA, YOLO, and image processing techniques.",
      "Developed skin and nose detection models, enhancing image analysis and recognition accuracy.",
      "Leveraged depth perception algorithms to enable a computer to determine the proximity of objects.",
      "Applied advanced image processing methods for feature extraction and object classification.",
    ],

  },
  {
    title: "No/Low-Code",
    company_name: "",
    icon: n8n,
    iconBg: "#383E56",
    date: "Jan 2025 - Present",
    points: [
      "Automated workflows and integrations using n8n, enabling seamless data transfer between apps and services without extensive coding.",
      "Implemented AI-powered content and voice solutions leveraging ElevenLabs and VAPI to enhance multimedia experiences and streamline processes.",
      "Optimized customer and business operations through CRM platforms, automating routine tasks and improving data driven decision making.",
      "Combined low-code tools with AI and automation to rapidly prototype solutions, reduce development time, and improve operational efficiency."
    ],
  },
  {
    title: "MLOPS",
    company_name: "",
    icon: mlops,
    iconBg: "#383E56",
    date: "Jan 2025 - Present",
    points: [
      "Designing and automating end to end ML pipelines, including data preprocessing, model training, evaluation, and deployment.",
      "Implementing CI/CD workflows for machine learning models using tools such as GitHub Actions and Docker.",
      "Containerizing ML and LLM applications with Docker for scalable and reproducible deployments.",
      "Monitoring model performance, drift, and data quality to ensure reliable production behavior.",
      "Managing experiment tracking, versioning, and reproducibility using MLflow and DVC.",
      "Deploying models and AI services using FastAPI, cloud platforms, and REST-based architectures.",
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
    image: Eweb,
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
    image: jarvis,
    source_code_link: "https://github.com/Moez-lab/AI-Assistant",
  },
  {
    name: "Zomato App",
    description:
      "A cross-platform mobile application that replicates the core functionalities of the Zomato food delivery experience. Built using React Native with Expo for fast development and deployment, Supabase as the backend-as-a-service for authentication, and Redux Toolkit for efficient global state management.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: zomato,
    source_code_link: "https://github.com/Moez-lab/Zomato-Food-App",
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
    image: house,
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
    image: face_reg,
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
    image: email_spam,
    source_code_link: "https://github.com/Moez-lab/Spam-Email-Detector",
  },
];

export { services, technologies, experiences, testimonials, projects };