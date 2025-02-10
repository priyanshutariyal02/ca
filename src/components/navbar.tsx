"use client";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const navLinks = [
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Case Studies",
    link: "/caseStudies",
  },
  {
    name: "Insights",
    link: "/insight",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);


  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Set navbar transparency
    setIsTransparent(currentScrollY < window.innerHeight - 500);

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
        isTransparent ? "bg-transparent" : "bg-[#171717]"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Brand Logo */}
      <Link
        href={"/"}
        className="text-3xl md:text-4xl font-extrabold text-[#FCBC45] cursor-pointer group"
      >
        <span className="text-white">Prime</span>Vista
      </Link>

      {/* Hamburger Icon for Mobile */}
      <div
        className="lg:hidden flex items-center text-white text-3xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen ? <IconMenu2 /> : <IconX />}
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row items-center gap-5 lg:gap-5 xl:gap-10 text-xl text-white absolute lg:relative top-16 lg:top-0 left-0 lg:left-auto w-full lg:w-auto bg-[#171717] lg:bg-transparent py-5 lg:py-0 text-link`}
      >
        {navLinks.map((item, index) => (
          <Link
            key={index}
            href={item.link} // Use href for navigation links
            className={`hover:text-primary px-2 py-2 duration-200 rounded-full cursor-pointer`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
