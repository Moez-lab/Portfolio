"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { styles } from "../style";
import { navLinks } from "../constants";
import { useTheme } from "../context/ThemeContext";

// Direct public paths
const logo = "/assets/profile/logo.png";
const menu = "/assets/icons/menu.svg";
const close = "/assets/icons/close.svg";

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`p-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 hover:bg-slate-200 dark:bg-[#151030] dark:hover:bg-[#1f1947] transition-all duration-300 focus:outline-none flex items-center justify-center ${className}`}
    >
      {theme === "dark" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-amber-400"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-indigo-600"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-white/85 dark:bg-primary/85 backdrop-blur-md border-b border-slate-200/80 dark:border-white/5 transition-colors duration-300`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo + Home Link */}
        <Link
          href={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src={logo}
            alt="Moez logo"
            width={36}
            height={36}
            priority
            className="w-9 h-9 object-contain"
          />
          <p className="text-slate-900 dark:text-white text-[18px] font-bold cursor-pointer flex">
            Moez &nbsp; <span className="sm:block hidden">| Portfolio</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row items-center gap-8">
          {navLinks.map((items) => (
            <li
              key={items.id}
              className={`${
                active === items.title
                  ? "text-[#915eff] font-bold"
                  : "text-slate-700 dark:text-secondary"
              } hover:text-[#915eff] dark:hover:text-white text-[18px] font-medium cursor-pointer transition-colors`}
              onClick={() => setActive(items.title)}
            >
              <a href={`#${items.id}`}>{items.title}</a>
            </li>
          ))}

          {/* LinkedIn Button (Desktop) */}
          <li>
            <a
              href="https://www.linkedin.com/in/moezzakir/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#915eff] text-[#915eff] hover:bg-[#915eff] hover:text-white text-[16px] font-medium px-4 py-1.5 rounded-full transition-all duration-300"
            >
              LinkedIn
            </a>
          </li>

          {/* Light / Dark Mode Toggle */}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center gap-3">
          <ThemeToggle />

          <button
            type="button"
            aria-label={toggle ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setToggle(!toggle)}
            className="p-1 focus:outline-none"
          >
            <Image
              src={toggle ? close : menu}
              alt=""
              width={28}
              height={28}
              className="w-[28px] h-[28px] object-contain dark:invert-0 filter invert"
            />
          </button>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-white dark:bg-black-100 border border-slate-200 dark:border-white/10 shadow-2xl absolute z-10 top-20 right-0 mx-4 my-2 min-w-[160px] rounded-2xl`}
          >
            <ul className="list-none flex flex-col gap-4 justify-end items-center w-full">
              {/* LinkedIn (Mobile) */}
              <li className="text-slate-700 dark:text-secondary font-sans text-[16px] font-medium cursor-pointer hover:text-[#915eff] dark:hover:text-white transition-colors">
                <a
                  href="https://www.linkedin.com/in/moezzakir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setToggle(!toggle)}
                >
                  LinkedIn
                </a>
              </li>

              {/* Nav Links */}
              {navLinks.map((items) => (
                <li
                  key={items.id}
                  className={`${
                    active === items.title
                      ? "text-[#915eff] font-bold"
                      : "text-slate-700 dark:text-secondary"
                  } font-sans text-[16px] font-medium cursor-pointer hover:text-[#915eff] dark:hover:text-white transition-colors`}
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
