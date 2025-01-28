"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { IconFileInvoice, IconTargetArrow } from "@tabler/icons-react";
import WhyChooseUs from "./components/why-choose-us";
import OurApproches from "./components/our-approches";
import OurCulture from "./components/our-culture";
import Faq from "./components/faqs";
import Navbar from "../caseStudies/components/navbar";
import Footer from "@/components/footer";
import OurLeaders from "./components/ourLeaders";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-[30dvh] overflow-hidden px-20 bg-black flex flex-col  justify-center">
        <h1 className="text-h2 font-semibold w-full text-white gap-3 relative pl-8">
          <p className="w-5 h-5 bg-primary absolute bottom-7 left-0"></p> About
          Us
        </h1>
        <h1 className="capitalize text-h4 leading-normal text-white z-30  max-w-4xl font-medium pb-5">
          Your <span className="text-primary">Partner</span> in Offshore
          Financial Excellence
        </h1>
      </div>
      <div className="w-full py-10 lg:py-16 from-white to-neutral-100">
        {/* Main Content Section */}
        {/* Text Content */}
        <motion.div
          className=" w-full min-h-screen flex items-center flex-col justify-center p-4 lg:px-20 gap-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-h6 font-bold text-primary flex gap-2 items-center justify-start">
            <p className="w-3 h-3 bg-primary" />{" "}
            <span className="text-neutral-800">Our Story</span>
          </h1>
          <h2 className="text-h2 leading-none font-medium text-neutral-800 max-w-4xl text-center">
            Navigating Accounting & Taxation with Precision
          </h2>
          <div className="max-w-6xl text-center tracking-wide">
            <p className="text-gray-700 text-body leading-8">
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
            className="h-[26rem] rounded-lg object-cover mt-2"
          />
          <div className="max-w-[70rem] grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
            {/* Mission */}
            <motion.div className="border bg-white shadow-lg p-5 rounded-lg  flex items-center justify-center flex-col gap-3">
              <IconTargetArrow
                size={30}
                stroke={1.5}
                className="w-16 h-16 text-primary"
              />
              <h3 className="text-3xl font-medium">Mission Statement</h3>
              <p className="text-neutral-500 mt-4 leading-relaxed text-xl text-center">
                To deliver precise, innovative, and client-focused financial
                solutions that empower businesses to grow and succeed.
              </p>
            </motion.div>
            {/* Vision */}
            <motion.div className="border bg-white p-5 rounded-lg shadow-lg  flex flex-col items-center justify-center gap-3">
              <IconFileInvoice
                size={30}
                stroke={1.5}
                className="w-16 h-16 text-primary"
              />
              <h3 className="text-3xl font-medium">Vision Statement</h3>
              <p className="text-neutral-500 mt-4 leading-relaxed text-xl text-center">
                To be a global leader in financial outsourcing, driving success
                through excellence and innovation.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Mission and Vision Section */}
        <div className="py-10 px-6 md:px-8 lg:px-12 ">
          <div className="max-w-6xl mx-auto space-y-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* <h2 className="text-h3 font-semibold text-neutral-800">
                Our Mission and Vision
              </h2> */}
            </motion.div>
          </div>
        </div>

        {/* Closing Section */}
        <motion.div
          className="py-16 px-6 w-full relative overflow-hidden bg-cover bg-top bg-no-repeat h-[25rem]"
          // style={{
          //   backgroundImage:
          //     "url('https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          // }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-neutral-800"></div>

          {/* Content Section */}
          <div className="relative z-10 max-w-7xl mx-auto text-center flex items-center justify-center flex-col h-full text-white">
            <h2 className="text-h3 font-semibold">
              Discover the Prime<span className="text-primary">Vista</span>{" "}
              Difference
            </h2>
            <p className="text-neutral-300 text-body mt-4 leading-relaxed">
              With PrimeVista Global by your side, you&apos;re not just
              outsourcing a task; you&apos;re building a partnership rooted in
              trust, expertise, and shared success. Whether you need help with
              day-to-day bookkeeping, comprehensive tax strategies, or advanced
              data insights, we&apos;re here to make it happen—efficiently,
              effectively, and effortlessly.
            </p>
          </div>
        </motion.div>

        <WhyChooseUs />
        <OurApproches />
        <OurLeaders />
        <OurCulture />
        <Faq />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
