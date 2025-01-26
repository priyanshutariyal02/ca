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

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full py-10 lg:py-16 from-white to-neutral-100">
        {/* Main Content Section */}
        <div className="mx-auto py-5 lg:py-16 px-5 md:px-8 lg:px-28 grid grid-cols-1 lg:grid-cols-2 gap-12 justify-items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-semibold text-primary">About Us</h2>
            <h2 className="text-5xl text-neutral-800 max-w-2xl">
              Navigating Accounting & Taxation with Precision
            </h2>
            <p className="text-gray-700 text-xl leading-10">
              At PrimeVista Global, we are more than just a service provider; we
              are your strategic partner in financial success. Founded with a
              vision to transform how businesses handle their financial
              operations, we specialize in delivering offshore bookkeeping,
              taxation, and data analytics solutions tailored to meet the
              evolving needs of global businesses.
            </p>
            <p className="text-gray-700 text-xl leading-10">
              With a team of seasoned professionals and a passion for precision,
              we empower organizations to simplify complex financial tasks,
              enabling them to focus on their core competencies. Our solutions
              aren&apos;t just about numbers—they&apos;re about providing the
              clarity and confidence you need to make informed decisions that
              drive growth.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full  overflow-hidden"
          >
            <Image
              src={
                "https://plus.unsplash.com/premium_photo-1665990294519-7f1b5b8bcfc2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="About Us Image"
              width={600}
              height={600}
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </motion.div>
        </div>

        {/* Mission and Vision Section */}
        <div className="py-16 px-6 md:px-8 lg:px-12 ">
          <div className="max-w-6xl mx-auto space-y-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-semibold text-neutral-800">
                Our Mission and Vision
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Mission */}
              <motion.div
                className="bg-white shadow-lg p-5 rounded-lg hover:shadow-xl transition-shadow flex items-center justify-center flex-col gap-3"
                whileHover={{ scale: 1.05 }}
              >
                <IconTargetArrow size={30} className="w-16 h-16 text-primary" />
                <h3 className="text-3xl font-semibold">Mission Statement</h3>
                <p className="text-neutral-500 mt-4 leading-relaxed text-xl text-center">
                  To deliver precise, innovative, and client-focused financial
                  solutions that empower businesses to grow and succeed.
                </p>
              </motion.div>
              {/* Vision */}
              <motion.div
                className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
              >
                <IconFileInvoice size={30} className="w-16 h-16 text-primary" />
                <h3 className="text-3xl font-semibold">Vision Statement</h3>
                <p className="text-neutral-500 mt-4 leading-relaxed text-xl text-center">
                  To be a global leader in financial outsourcing, driving
                  success through excellence and innovation.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Closing Section */}
        <motion.div
          className="mx-auto text-center py-12 px-6 w-full relative overflow-hidden bg-[#171717]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-neutral-100 text-left lg:text-center">
            Discover the PrimeVista Difference
          </h2>
          <p className="text-neutral-100 mt-4 leading-relaxed text-base lg:text-lg text-left lg:text-center">
            With PrimeVista Global by your side, you&apos;re not just
            outsourcing a task; you&apos;re building a partnership rooted in
            trust, expertise, and shared success. Whether you need help with
            day-to-day bookkeeping, comprehensive tax strategies, or advanced
            data insights, we&apos;re here to make it happen—efficiently,
            effectively, and effortlessly.
          </p>
        </motion.div>
        <WhyChooseUs />
        <OurApproches />
        <OurCulture />
        <Faq />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
