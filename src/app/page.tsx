"use client";

import About from "@/components/about";
import ByondNumbers from "@/components/scaling-success";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Insight from "@/components/insights";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen  tracking-[0.45px]">
        <video
          // src="/assets/video/earth.mp4"
          src="/assets/video/earth_2.mp4"
          autoPlay
          loop
          muted
          controls={false}
          className="absolute w-full h-full top-0 left-0 z-[-1] bg-black object-cover"
        />
        <div className="w-full min-h-[80dvh]">
          <Hero />
        </div>
        <About />

        <ByondNumbers />

        <Services />
        <Insight />
        <Testimonials />

        <div className="relative w-full h-[60dvh] lg:h-[90dvh] py-16">
          <Image
            src="/assets/images/w1.jpg"
            // src="/assets/images/Workspace.jpg"
            alt="Professional business discussion"
            width={2000}
            height={2000}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-16 right-0 bg-white shadow-lg rounded-lg p-5 max-w-48 lg:max-w-none sm:w-[30rem] lg:w-[40rem] lg:p-12 flex flex-col gap-6">
            <h1 className="text-h2 font-medium leading-tight text-gray-900">
              Let&apos;s Discuss Your Business Potential
            </h1>
            <hr className="border-t border-gray-300" />
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-6 py-4 rounded-lg font-medium text-center hover:bg-primary/80 duration-200"
              aria-label="Contact Us"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
