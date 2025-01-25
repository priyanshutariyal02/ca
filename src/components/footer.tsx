import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";
import React from "react";

const Footer = () => {
  const sections = [
    {
      label: "PRODUCT",
      links: [
        "Pricing",
        "Plans",
        "Features",
        "Integrations",
        "Mobile Apps",
        "Developers",
        "Marketplace",
      ],
    },
    {
      label: "TOUR",
      links: [
        "How It Works",
        "Demos",
        "Live Tour",
        "Case Studies",
        "Guides",
        "Tutorials",
        "Webinars",
      ],
    },
    {
      label: "SHOWCASE",
      links: [
        "Portfolio",
        "Testimonials",
        "Award Winners",
        "Before and After",
        "Industry Solutions",
        "User Groups",
        "Events",
      ],
    },
    {
      label: "ABOUT",
      links: [
        "Our Story",
        "Careers",
        "Press",
        "Blog",
        "Sustainability",
        "Diversity",
        "Terms of Service",
      ],
    },
  ];

  return (
    <footer className="bg-[#171717] text-white p-10 absolute left-0 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col gap-4 items-start">
            <h3 className="mb-4 font-medium text-lg text-neutral-300">
              {section.label}
            </h3>
            <ul className="flex flex-col items-start gap-3">
              {section.links.map((link, linkIndex) => (
                <li
                  key={linkIndex}
                  className="text-sm hover:text-primary duration-200 cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3 className="font-medium text-neutral-300 mb-4">SUBSCRIBE</h3>
          <p className="mb-4 text-sm text-white">
            Sign up with your email address to receive news and updates.
          </p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 text-black"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-amber-500 duration-200 text-white py-2 px-4 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-between items-center mt-8 border-t pt-4">
        <p className="text-white">
          © 2023 Your PrimeVista. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <IconBrandFacebook className="hover:text-gray-400 cursor-pointer" />
          <IconBrandX className="hover:text-gray-400 cursor-pointer" />
          <IconBrandInstagram className="hover:text-gray-400 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
