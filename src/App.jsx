import { BrowserRouter } from "react-router-dom"
import Navbar from './components/Navbar'
import Hero  from "./components/Hero";
import About from "./components/About";

export default function App() {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
        <About/>
      </div>
    </div>
    </BrowserRouter>
  );
}
