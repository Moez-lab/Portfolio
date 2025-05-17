import { BrowserRouter } from "react-router-dom"
import Navbar from './components/Navbar'
import Hero  from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";

export default function App() {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
        <About/>
        <Experience/>
        <Tech/>
      </div>
    </div>
    </BrowserRouter>
  );
}
