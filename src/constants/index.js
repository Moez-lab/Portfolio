import {
  mobile,
  backend,
  creator,
  web,
  javascript,
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
  docker,
  meta,
  react,
  tesla,
  shopify,
  cv,
  carrent,
  jobit,
  tripguide,
  threejs,
  machine,
  zomato,
  house,
  face_reg,
  email_spam,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title:"AI/ML Enthusiast",
    icon: machine,
  },
  {
    title:"CV Specialist ",
    icon: cv,
  }
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
    icon: javascript,
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
    name:"AI/ML",
    icon: machine,
  }
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "",
    icon: react,
    iconBg: "#383E56",
    date: "September 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "",
    icon: react,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "AI/ML Enthusiast",
    company_name: "",
    icon: machine,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and related technologies.",
      "Learning AI from Andrew Ng, including supervised, unsupervised, and deep learning.",
      "Building AI models for iris detection, email spam detection, house price prediction, and face detection.",
      "Applying machine learning techniques using TensorFlow and Scikit-learn for real-world projects.",
    ],
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
    image:  zomato,
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