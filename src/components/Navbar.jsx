import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import resume from "../assets/resume.pdf"; 

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo + Home Link */}
        <Link
          to={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Moez &nbsp; <span className="sm:block hidden">| Portfolio</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((items) => (
            <li
              key={items.id}
              className={`${
                active === items.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(items.title)}
            >
              <a href={`#${items.id}`}>{items.title}</a>
            </li>
          ))}

          {/* LinkedIn */}
          <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <a
              href="https://www.linkedin.com/in/moezzakir/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>

          {/* Resume Download (Desktop) */}
          <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <a href={resume} download="Moez_Zakir_Resume.pdf">
              Resume Download ⬇️
            </a>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute z-10 top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-4 justify-end items-center">

              {/* LinkedIn (Mobile) */}
              <li className="text-secondary font-poppins text-[16px] font-medium cursor-pointer hover:text-white">
                <a
                  href="https://www.linkedin.com/in/moezzakir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setToggle(!toggle)}
                >
                  LinkedIn
                </a>
              </li>

              {/* Resume Download (Mobile) */}
              <li className="text-secondary font-poppins text-[16px] font-medium cursor-pointer hover:text-white">
                <a
                  href={resume}
                  download="Moez_Zakir_Resume.pdf"
                  onClick={() => setToggle(!toggle)}
                >
                  Resume Download ⬇️
                </a>
              </li>

              {/* Nav Links */}
              {navLinks.map((items) => (
                <li
                  key={items.id}
                  className={`${
                    active === items.title ? "text-white" : "text-secondary"
                  } font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setActive(items.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${items.id}`}>{items.title}</a>
                </li>
              ))}

            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
