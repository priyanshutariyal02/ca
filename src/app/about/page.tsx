"use client";
import Image from "next/image";
import React from "react";
import { IconFileInvoice, IconTargetArrow } from "@tabler/icons-react";
import WhyChooseUs from "./components/why-choose-us";
import OurApproches from "./components/our-approches";
import OurCulture from "./components/our-culture";
import Faq from "./components/faqs";
import Footer from "@/components/footer";
import OurLeaders from "./components/our-leaders";
import HeroTop from "./components/hero-top";
import Navbar from "../caseStudies/components/navbar";

const AboutPage = () => {
  return (
    <>
      <Navbar />

      <HeroTop
        title="About Us"
        subTitle={`Your <span class="text-primary">Partner</span> in Offshore Financial Excellence`}
      />

      <div className="w-full py-10 lg:py-16 from-white to-neutral-100">
        {/* Main Content Section */}
        {/* Text Content */}
        <div className=" w-full min-h-screen flex lg:items-center flex-col  lg:justify-center p-5 lg:px-20 lg:gap-10 gap-5">
          <h1 className="text-h6 font-bold text-primary flex gap-2 items-center justify-start">
            <p className="w-3 h-3 bg-primary" />{" "}
            <span className="text-neutral-800">Our Story</span>
          </h1>
          <h2 className="text-h2 leading-none font-medium text-neutral-800 lg:max-w-4xl lg:text-center">
            Navigating Accounting & Taxation with Precision
          </h2>
          <div className="max-w-6xl lg:text-center tracking-wide">
            <p className="text-gray-700 text-link leading-normal">
              At PrimeVista Global, we are more than just a service provider; we
              are your strategic partner in financial success. Founded with a
              vision to transform how businesses handle their financial
              operations, we specialize in delivering offshore bookkeeping,
              taxation, and data analytics solutions tailored to meet the
              evolving needs of global businesses. With a team of seasoned
              professionals and a passion for precision, we empower
              organizations to simplify complex financial tasks, enabling them
              to focus on their core competencies. Our solutions aren&apos;t
              just about numbers—they&apos;re about providing the clarity and
              confidence you need to make informed decisions that drive growth.
            </p>
          </div>
          <Image
            src={"/assets/images/gp.png"}
            alt="team"
            width={1000}
            height={1000}
            className="lg:h-[26rem] rounded-lg object-cover"
          />
          <div className="max-w-[70rem] grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-12 my-3 lg:my-6">
            {/* Mission */}
            <div className="border bg-white shadow-lg p-5 rounded-lg  flex items-center justify-center flex-col gap-3">
              <IconTargetArrow
                size={30}
                stroke={1.5}
                className="w-16 h-16 text-primary"
              />
              <h3 className="text-h4 font-medium">Mission Statement</h3>
              <p className="text-neutral-500 mt-4 leading-relaxed text-link text-center">
                To deliver precise, innovative, and client-focused financial
                solutions that empower businesses to grow and succeed.
              </p>
            </div>
            {/* Vision */}
            <div className="border bg-white p-5 rounded-lg shadow-lg  flex flex-col items-center justify-center gap-3">
              <IconFileInvoice
                size={30}
                stroke={1.5}
                className="w-16 h-16 text-primary"
              />
              <h3 className="text-h4 font-medium">Vision Statement</h3>
              <p className="text-neutral-500 mt-4 leading-relaxed text-link text-center">
                To be a global leader in financial outsourcing, driving success
                through excellence and innovation.
              </p>
            </div>
          </div>
        </div>

        <WhyChooseUs />
        <OurApproches />
        <div className="py-16 px-6 w-full overflow-hidden h-[25rem] bg-[#171717] mt-5">
          {/* Overlay for better text readability */}

          {/* Content Section */}
          <div className="relative z-10 max-w-7xl mx-auto text-center flex items-center justify-center flex-col h-full text-white">
            <h2 className="text-h3 font-semibold">
              Discover the Prime<span className="text-primary">Vista</span>{" "}
              Difference
            </h2>
            <p className="text-neutral-300 text-link mt-4 leading-relaxed">
              With PrimeVista Global by your side, you&apos;re not just
              outsourcing a task; you&apos;re building a partnership rooted in
              trust, expertise, and shared success. Whether you need help with
              day-to-day bookkeeping, comprehensive tax strategies, or advanced
              data insights, we&apos;re here to make it happen—efficiently,
              effectively, and effortlessly.
            </p>
          </div>
        </div>
        <OurLeaders />
        <OurCulture />
        <Faq />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
