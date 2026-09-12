"use client";

import dynamic from "next/dynamic";
import { ThemeProvider } from "../src/context/ThemeContext";

import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Stats from "../src/components/Stats";
import Work from "../src/components/Work";
import Certifications from "../src/components/Certifications";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";

// Experience uses react-vertical-timeline-component which references browser window/DOM
const Experience = dynamic(() => import("../src/components/Experience"), {
  ssr: false,
  loading: () => null,
});

export default function ClientApp() {
  return (
    <ThemeProvider>
      <div className="relative z-0 bg-white dark:bg-primary text-slate-900 dark:text-white min-h-screen transition-colors duration-300 overflow-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Stats />
          <Experience />
          <Work />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
