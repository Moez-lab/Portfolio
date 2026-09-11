"use client";

import dynamic from "next/dynamic";
import { ThemeProvider } from "../src/context/ThemeContext";

// Spinner shown while sections load
const PageLoader = dynamic(() => import("../src/components/PageLoader"), {
  ssr: false,
});

// All sections loaded client-side only — prevents SSR crashes from browser-only APIs
// (Three.js, framer-motion viewport hooks, emailjs, react-parallax-tilt, etc.)
const Navbar = dynamic(() => import("../src/components/Navbar"), {
  ssr: false,
  loading: () => null,
});

const Hero = dynamic(() => import("../src/components/Hero"), {
  ssr: false,
  loading: () => <PageLoader />,
});

const About = dynamic(() => import("../src/components/About"), {
  ssr: false,
  loading: () => <PageLoader />,
});

const Stats = dynamic(() => import("../src/components/Stats"), {
  ssr: false,
  loading: () => <PageLoader />,
});

const Work = dynamic(() => import("../src/components/Work"), {
  ssr: false,
  loading: () => <PageLoader />,
});

const Experience = dynamic(() => import("../src/components/Experience"), {
  ssr: false,
  loading: () => <PageLoader />,
});

const Certifications = dynamic(() => import("../src/components/Certifications"), {
  ssr: false,
  loading: () => <PageLoader />,
});

const Contact = dynamic(() => import("../src/components/Contact"), {
  ssr: false,
  loading: () => <PageLoader />,
});

const Footer = dynamic(() => import("../src/components/Footer"), {
  ssr: false,
  loading: () => null,
});

export default function ClientApp() {
  return (
    <ThemeProvider>
      <div className="relative z-0 bg-white dark:bg-primary text-slate-900 dark:text-white min-h-screen transition-colors duration-300 overflow-hidden">
        <div>
          <Navbar />
          <Hero />
          <About />
          <Stats />
          <Experience />
          <Work />
          <Certifications />
          <Contact />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
