import React from 'react';
import { github, linkedin, logo } from '../assets';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full relative z-0 mt-20 bg-primary">
      {/* Decorative gradient top border */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#915EFF] to-transparent" />
      
      <div className="sm:px-16 px-6 py-10 flex flex-col items-center justify-center max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0">
          
          {/* Brand/Logo Area */}
          <div 
            className="flex flex-col items-center md:items-start cursor-pointer group" 
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-16 h-16 object-contain mb-2 group-hover:scale-110 transition-transform duration-300" />
            <p className="text-white text-[20px] font-bold tracking-widest mt-2 group-hover:text-[#915EFF] transition-colors duration-300">
              Moez<span className="text-[#915EFF] group-hover:text-white transition-colors duration-300">.</span>
            </p>
            <p className="text-secondary text-[14px] mt-2 max-w-[250px] text-center md:text-left leading-relaxed">
              Building intelligent, scalable, and dynamic Systems.
            </p>
          </div>

          {/* navLinks */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold text-[18px] mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-3 items-center md:items-start">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-secondary hover:text-[#915EFF] text-[15px] font-medium transition-colors duration-300 relative group"
                  >
                    {link.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#915EFF] group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-white font-bold text-[18px] mb-4">Let's Connect</h3>
            <div className="flex gap-4">
              <div
                onClick={() => window.open("https://github.com/Moez-lab", "_blank")}
                className="w-12 h-12 bg-black-200 rounded-full flex justify-center items-center cursor-pointer hover:bg-[#915EFF] hover:shadow-neon transition-all hover:-translate-y-1 duration-300 border border-white/5 hover:border-transparent"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
              <div
                onClick={() => window.open("https://www.linkedin.com/", "_blank")}
                className="w-12 h-12 bg-black-200 rounded-full flex justify-center items-center cursor-pointer hover:bg-[#915EFF] hover:shadow-neon transition-all hover:-translate-y-1 duration-300 border border-white/5 hover:border-transparent"
              >
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom Section */}
        <div className="w-full mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <p className="text-secondary text-[14px] font-medium text-center md:text-left">
            &copy; {new Date().getFullYear()} Moez | All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-secondary text-[14px] font-medium hover:text-white transition-colors duration-300 cursor-pointer">
              Privacy Policy
            </a>
            <a href="#" className="text-secondary text-[14px] font-medium hover:text-white transition-colors duration-300 cursor-pointer">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
