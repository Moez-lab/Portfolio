import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Loader from "./components/Loader";

// Lazy load heavy components
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Work = lazy(() => import("./components/Work"));
const Contact = lazy(() => import("./components/Contact"));

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          <Suspense fallback={<Loader />}>
            <About />
            <Experience />
            <Tech />
            <Work />
            <Contact />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}
