"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md py-2 shadow-xl"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          
          <a
            href="https://cogentsolutions.ae/"
            className="group relative overflow-hidden"
          >
            <Image
              src="/logo.png"
              alt="Finastra"
              width={140}
              height={40}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-indigo-400 to-purple-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#event-overview">Event Overview</NavLink>
            <NavLink href="#agenda">Agenda</NavLink>

            <button
              onClick={() => scrollToSection("#register")}
              className="relative px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium group overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Register Now <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute -inset-1 bg-white/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </button>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-full bg-white/10 backdrop-blur-sm transition duration-300"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <FiX className="text-white text-xl" />
            ) : (
              <FiMenu className="text-white text-xl" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-lg pt-24 px-6">
          <div className="flex flex-col items-center space-y-8">
            <MobileNavLink href="#event-overview" onClick={() => setMenuOpen(false)}>
              Event Overview
            </MobileNavLink>
            <MobileNavLink href="#agenda" onClick={() => setMenuOpen(false)}>
              Agenda
            </MobileNavLink>

            
            <button
              onClick={() => {
                scrollToSection("#register");
                setMenuOpen(false);
              }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium mt-4 flex items-center transition transform hover:scale-105"
            >
              Register Now <FiArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

// Desktop NavLink
function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="relative px-4 py-2 rounded-full text-white font-semibold hover:text-purple-400 transition-all duration-300"
    >
      {children}
      <span className="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
    </a>
  );
}

// Mobile NavLink
function MobileNavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-2xl font-medium text-white hover:text-purple-300 transition-colors duration-300"
    >
      {children}
    </a>
  );
}
