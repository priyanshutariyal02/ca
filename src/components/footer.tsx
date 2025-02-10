"use client";

import {
  IconBrandInstagram,
  IconMapPin,
  IconPhone,
  IconMail,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";
import PrivacyPolicy from "./privacy-policy";
import Disclaimer from "./disclaimer";
import StandardTerms from "./standard-terms";

const Footer = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState("");

  const handleOpenModal = (doc: string) => {
    setSelectedDocument(doc);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedDocument("");
  };

  const sections = [
    {
      label: "Company",
      links: [
        { name: "About Us", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "Case Studies", link: "/caseStudies" },
        { name: "Insights", link: "/insight" },
      ],
    },
    {
      label: "Useful Links",
      links: [
        {
          name: "Privacy Policy",
          onClick: () => handleOpenModal("Privacy Policy"),
        },
        {
          name: "Standard Terms",
          onClick: () => handleOpenModal("Standard Terms"),
        },
        { name: "Disclaimer", onClick: () => handleOpenModal("Disclaimer") },
        { name: "Contact", link: "/contact" },
      ],
    },
  ];

  const locations = [
    {
      city: "New York",
      address: "29 Briggs St, Hicksville, NY 11801",
      phone: "+1 816-375-5732",
      email: "hello@primevistaglobal.com",
    },
    {
      city: "Dehradun",
      address: "'1A RCR' Racecourse Road",
      phone: "+91 999-726-7260",
      email: "hello@primevistaglobal.com",
    },
  ];

  return (
    <footer className="bg-[#171717] text-white p-5 lg:px-28 md:p-8 lg:p-10 absolute left-0 w-full">
      <div className="w-full flex flex-wrap justify-between gap-4 lg:justify-items-center">
        <div className="w-full lg:w-1/4 flex flex-col gap-5">
          <h1 className="text-4xl lg:text-6xl font-bold">
            <span className="text-white">Prime</span>
            <span className="text-primary">Vista</span>
          </h1>
          <p className="text-link text-white">
            At PrimeVista, we are your trusted partner in achieving financial
            success. Specializing in offshore bookkeeping, taxation, and data
            analytics, we provide tailored solutions that meet the unique needs
            of your business.
          </p>
        </div>
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col gap-4 items-start">
            <h3 className="mb-4 font-medium text-h4 text-neutral-300">
              {section.label}
            </h3>
            <ul className="flex flex-col items-start gap-3">
              {section.links.map((link, linkIndex) => (
                <li
                  key={linkIndex}
                  className="text-link hover:text-primary duration-200 cursor-pointer"
                >
                  {link.onClick ? (
                    <button
                      onClick={link.onClick}
                      className="focus:outline-none"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link href={link.link}>{link.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Location Column */}
        <div className="flex flex-col gap-4 items-start">
          <h3 className="mb-4 font-medium text-h4 text-neutral-300">
            Locations
          </h3>
          {locations.map((location, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-medium text-body text-white">
                {location.city}
              </h4>
              <div className="flex items-center gap-2 text-link">
                <IconMapPin size={16} /> <span>{location.address}</span>
              </div>
              <div className="flex items-center gap-2 text-link">
                <IconPhone size={16} /> <span>{location.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-link">
                <IconMail size={16} /> <span>{location.email}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col-reverse gap-5 lg:gap-0 lg:flex-row justify-between items-center mt-8 border-t pt-4">
        <p className="text-white text-center lg:text-left">
          © {new Date().getFullYear()} PrimeVista. All rights reserved.
        </p>
        <p className="text-neutral-400 text-mini">
          Designed and developed by{" "}
          <a
            href="https://www.graphixio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-300 duration-200"
          >
            Graphixio
          </a>
        </p>
        <div className="flex space-x-4">
          <Link
            href={"https://www.linkedin.com/company/105883340/admin/dashboard/"}
            target="blank"
          >
            <IconBrandLinkedin
              className="hover:text-gray-400 cursor-pointer"
              size={20}
            />
          </Link>
          <Link
            href={"/"}
            target="blank"
          >
            <IconBrandInstagram
              className="hover:text-gray-400 cursor-pointer"
              size={20}
            />
          </Link>
        </div>
      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          {selectedDocument === "Privacy Policy" && (
            <PrivacyPolicy handleCloseModal={handleCloseModal} />
          )}
          {selectedDocument === "Disclaimer" && (
            <Disclaimer handleCloseModal={handleCloseModal} />
          )}
          {selectedDocument === "Standard Terms" && (
            <StandardTerms handleCloseModal={handleCloseModal} />
          )}
        </div>
      )}
    </footer>
  );
};

export default Footer;
