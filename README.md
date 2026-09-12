# Moez Zakir AI Engineer & Full-Stack Developer Portfolio

A modern, interactive personal portfolio built with **Next.js 16** and **Framer Motion**, featuring a vertical experience timeline, project showcases, certifications, and a contact form  all with seamless light/dark mode support.

🌐 **Live:** [moezzakir.vercel.app](https://portfolio-mueez-labs-projects.vercel.app/)

---

## Features

- **Light / Dark Mode :** Manual toggle, persisted via localStorage
- **Smooth Animations :** Framer Motion page transitions, fade-ins, and stagger effects
- **Experience Timeline :** Vertical timeline with company logos and bullet points
- **Project Showcase :** Image carousel cards with multi-image support and Read More toggle
- **Certifications Section :** Issuer-colour-coded credential cards with external links
- **Stats / Milestones :** Animated counters with gradient accent cards
- **Contact Form :** EmailJS integration for direct email delivery
- **Responsive :** Mobile-first layout, works on all screen sizes
- **Sora Font :** Clean, modern geometric typeface throughout

---

## Tech Stack

### Framework & Build

| Tool                    | Purpose                                           |
| ----------------------- | ------------------------------------------------- |
| **Next.js 16**    | App Router, SSR/SSG, dynamic imports              |
| **Turbopack**     | Lightning-fast dev server (default in Next.js 16) |
| **React 19**      | UI library                                        |
| **TailwindCSS 3** | Utility-first styling                             |

### Animation

| Tool                    | Purpose                                    |
| ----------------------- | ------------------------------------------ |
| **Framer Motion** | Page animations, scroll-triggered fade-ins |

### UI & UX

| Tool                              | Purpose                     |
| --------------------------------- | --------------------------- |
| **React Vertical Timeline** | Experience section timeline |
| **React Parallax Tilt**     | Tilt hover effect on cards  |
| **EmailJS Browser**         | Contact form email delivery |

---

## Project Structure

```
portfolio/
├── app/
│   ├── ClientApp.jsx       # Root client component — assembles all sections
│   ├── globals.css         # Global styles, Sora font, CSS variables
│   ├── layout.jsx          # Next.js root layout
│   └── page.jsx            # Entry page (renders ClientApp)
├── src/
│   ├── components/
│   │   ├── About.jsx           # Overview & service cards
│   │   ├── Certifications.jsx  # Certification credential cards
│   │   ├── Contact.jsx         # EmailJS contact form
│   │   ├── Experience.jsx      # Vertical timeline (work history)
│   │   ├── Footer.jsx          # Footer with links
│   │   ├── Hero.jsx            # Landing hero section
│   │   ├── Navbar.jsx          # Responsive nav with dark mode toggle
│   │   ├── Stats.jsx           # Milestones / achievement counters
│   │   └── Work.jsx            # Project cards with image carousel
│   ├── constants/
│   │   └── index.js            # All data: nav, services, experiences, projects, certs
│   ├── context/
│   │   └── ThemeContext.jsx    # Light/dark mode context
│   ├── hoc/
│   │   └── index.js            # SectionWrapper HOC (scroll anchor + motion)
│   ├── style.js                # Shared Tailwind class strings
│   └── utils/
│       └── motion.js           # Framer Motion animation variants
├── public/
│   └── assets/
│       ├── experience/         # Company logos
│       ├── projects/           # Project screenshots
│       └── tech/               # Technology icons
├── next.config.mjs
├── tailwind.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9+

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/Moez-lab/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server (Turbopack)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Scripts

| Command           | Description                                 |
| ----------------- | ------------------------------------------- |
| `npm run dev`   | Start development server (Turbopack)        |
| `npm run build` | Build for production (outputs to`.next/`) |
| `npm run start` | Serve the production build                  |
| `npm run lint`  | Run ESLint                                  |

---

## EmailJS Setup

The contact form uses [EmailJS](https://www.emailjs.com/) no backend needed.

1. Sign up at emailjs.com and create an **Email Service** (Gmail)
2. Create an **Email Template** with variables: `{{name}}`, `{{email}}`, `{{message}}`
3. Update credentials in [`src/components/Contact.jsx`](src/components/Contact.jsx):

```js
emailjs.send(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  { name, email, message },
  "YOUR_PUBLIC_KEY"
)
```

> **Note:** If you see a `412 Invalid grant` error, reconnect your Gmail account in the EmailJS dashboard → Email Services.

---

## Customisation

All content lives in **[`src/constants/index.js`](src/constants/index.js)**:

| Export             | What it controls                                |
| ------------------ | ----------------------------------------------- |
| `navLinks`       | Navbar links                                    |
| `services`       | About section service cards                     |
| `technologies`   | Tech icon grid                                  |
| `experiences`    | Experience timeline entries                     |
| `projects`       | Project cards (name, description, tags, images) |
| `certifications` | Certification cards with issuer & link          |

### Update images

| Asset               | Path                          |
| ------------------- | ----------------------------- |
| Company logos       | `public/assets/experience/` |
| Project screenshots | `public/assets/projects/`   |
| Tech icons          | `public/assets/tech/`       |

---

## Deployment (Vercel)

This project is a **Next.js** app Vercel auto-detects it.

1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com/new)
3. Set **Framework Preset** → `Next.js`
4. Leave Build Command & Output Directory blank (auto-detected)Deploy ✅

> No `vercel.json` needed — Next.js is natively supported.

---

## Page Sections (in order)

1. **Hero :** Intro and CTA buttons
2. **About :** Overview text + specialisation service cards
3. **Stats :** Milestones (Projects, Certifications, Roles)
4. **Experience :** Vertical timeline of work history
5. **Work :** Project showcase with image carousels
6. **Certifications :** Credential cards (Stanford, Harvard, Udemy, Cisco)
7. **Contact :** EmailJS contact form

---

## About Me

**Moez Zakir** AI Engineer & Full-Stack Developer

Specialising in:

- Agentic AI & LLM Systems (n8n, LangChain, Gemini)
- Full-Stack Product Engineering (Next.js, React, Node.js)
- Computer Vision & ML (OpenCV, PyTorch)
- Workflow Automation

---

## Contact

| Platform | Link                                                               |
| -------- | ------------------------------------------------------------------ |
| LinkedIn | [linkedin.com/in/moezzakir](https://www.linkedin.com/in/moezzakir/) |
| GitHub   | [github.com/Moez-lab](https://github.com/Moez-lab)                  |

---

## License

Open source under the [MIT License](LICENSE).
