"use client";
import React, { useState, useEffect } from "react";

const navLinks = [
  {
    name: "About Us",
    link: "about",
  },
  {
    name: "Services",
    link: "service",
  },
  {
    name: "Case Studies",
    link: "/caseStudies",
  },
  {
    name: "Insights",
    link: "insights",
  },
  {
    name: "Contact",
    link: "contact",
  },
];

const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setActive(id);
    setIsOpen(false); // Close the menu on mobile after clicking a link
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Set navbar transparency
    setIsTransparent(currentScrollY < window.innerHeight);

    // Handle navbar visibility on scroll direction
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false); // Hide navbar when scrolling down
    } else {
      setIsVisible(true); // Show navbar when scrolling up
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`w-full flex justify-between items-center px-5 md:px-20 py-5 sticky top-0 z-30 transition-all duration-300 ${
        isTransparent ? "bg-transparent" : "bg-black"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Brand Logo */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#FCBC45]">
        <span className="text-white">Prime</span>Vista
      </h1>

      {/* Hamburger Icon for Mobile */}
      <div
        className="md:hidden flex items-center text-white text-3xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row items-center gap-5 md:gap-10 text-xl text-white absolute md:relative top-16 md:top-0 left-0 md:left-auto w-full md:w-auto bg-neutral-800/90 md:bg-transparent py-5 md:py-0`}
      >
        {navLinks.map((item, index) => (
          <a
            key={index}
            href={item.link.startsWith("/") ? item.link : undefined} // Use href for navigation links
            onClick={
              !item.link.startsWith("/")
                ? () => scrollToSection(item.link)
                : undefined
            } // Use onClick for sections
            className={`hover:text-primary px-2 py-2 duration-200 rounded-full ${
              active === item.link ? "text-primary" : ""
            }`}
          >
            {item.name}
          </a>
        ))}

        <button
          type="button"
          className="bg-[#FCBC45] hover:bg-amber-500 duration-200 px-3 py-2 rounded-md text-semibold text-white text-lg"
        >
          Call Us
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
