"use client";

import About from "@/components/about";
import ByondNumbers from "@/components/byond-numbers";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Insight from "@/components/insights";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import React from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen lg:px-16 tracking-[0.45px]">
        <video
          // src="/assets/video/earth.mp4"
          src="/assets/video/earth_2.mp4"
          autoPlay
          loop
          muted
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
        <Footer />
      </div>
    </>
  );
};

export default Home;
