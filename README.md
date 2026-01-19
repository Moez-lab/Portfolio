# 🚀 Moez Zakir - AI/ML Engineer Portfolio

A modern, interactive portfolio website showcasing my work as an AI/ML Engineer and LLM integrator. Built with React, Three.js, and cutting-edge web technologies to create an engaging user experience with 3D animations and smooth interactions.

## ✨ Features

- **3D Interactive Elements** - Powered by Three.js and React Three Fiber
- **Smooth Animations** - Framer Motion for fluid page transitions and effects
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Resume Viewer** - View or download resume directly from the site
- **Contact Form** - Integrated EmailJS for direct communication with WhatsApp backup
- **Dark Theme** - Modern glassmorphism and gradient effects
- **Project Showcase** - Interactive timeline and project cards with detailed information

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI library
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing

### 3D Graphics
- **Three.js** - 3D library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber

### Other Libraries
- **EmailJS** - Email service integration
- **React Parallax Tilt** - Tilt effects
- **React Vertical Timeline** - Timeline component

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:Moez-lab/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 🧪 Preview Production Build

```bash
npm run preview
```

## 📧 EmailJS Configuration

The contact form uses EmailJS for sending emails. To use your own EmailJS account:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create an email template
4. Update the credentials in `src/components/Contact.jsx`:
   - Service ID
   - Template ID
   - Public Key

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── assets/          # Images, icons, and static files
│   ├── components/      # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Tech.jsx
│   │   └── Work.jsx
│   ├── constants/       # Configuration and data
│   ├── hoc/            # Higher-order components
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main app component
│   ├── index.css       # Global styles
│   └── main.jsx        # Entry point
├── public/             # Public assets
├── index.html          # HTML template
└── package.json        # Dependencies and scripts
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** - Edit `src/components/Hero.jsx`
2. **About Section** - Edit `src/components/About.jsx`
3. **Projects** - Update `src/constants/index.js`
4. **Experience** - Update `src/constants/index.js`
5. **Resume** - Replace `src/assets/resume.pdf`

### Update Images

- Profile photo: `src/assets/pfpic.png`
- Logo: `src/assets/logo.png`
- Company logos: `src/assets/company/`
- Technology icons: `src/assets/tech/`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🌐 Deployment

This portfolio can be deployed to various platforms:

- **Vercel** (Recommended) - Perfect for React apps
- **Netlify** - Easy deployment with continuous integration
- **GitHub Pages** - Free hosting for static sites

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 👨‍💻 About Me

I'm an AI/ML Engineer and LLM integrator specializing in:
- Generative AI & Large Language Models
- Deep Learning & Computer Vision
- Natural Language Processing
- Model Deployment & MLOps

**Skills**: Python, TensorFlow, Hugging Face, OpenCV, n8n, Pandas, SQL, FastAPI, Docker

## 📫 Contact

- **LinkedIn**: [Moez Zakir](https://www.linkedin.com/in/moezzakir/)
- **GitHub**: [Moez-lab](https://github.com/Moez-lab)
- **WhatsApp**: [Contact Me](https://wa.me/923208517943)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ **If you find this portfolio helpful, please consider giving it a star!**

Built with ❤️ by Moez Zakir
