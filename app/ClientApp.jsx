"use client";

import dynamic from "next/dynamic";

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
    <div className="relative z-0 bg-primary overflow-hidden">
      <div>
        <Navbar />
        <Hero />
        <About />
        <Stats />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
